(defproject frontend "0.1.0-SNAPSHOT"
  :description "fastapi frontend"
  :url ""
  :license
  {:name "Eclipse Public License"
   :url  "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.9.1"

  :dependencies [[org.clojure/clojure "1.10.3"]
                 [org.clojure/clojurescript "1.11.4"]
                 [org.clojure/core.async "1.5.648"]
                 [cljs-ajax "0.8.0"]
                 [cljsjs/react "17.0.2-0"]
                 [reagent "1.0.0"]
                 [prismatic/dommy "1.1.0"]
                 ]

  :plugins
  [[lein-figwheel "0.5.20"]
   [lein-cljsbuild "1.1.8" :exclusions [[org.clojure/clojure]]]]

  :source-paths ["source/cljs"]
  :resource-paths ["source"]
  :clean-targets ^{:protect false} [
                   "assets/dev/static/js/compiled"
                   "assets/prod/static/js/compiled"]

  :cljsbuild
  {:builds
   [{:id           "dev"
     :source-paths ["source/cljs"]
     :figwheel     {:on-jsload "frontend.core/main"}
     :compiler     {:main                 frontend.core
                    ;; Need to point to Figwheel dev server (localhost:3449),
                    ;; because assets are routed via Django in dev mode
                    ;;:asset-root_path           "http://localhost:3449/js/compiled/dev/out"
                    :asset-path           "/static/cljs/dev/out"  ; Django側で静的ファイルパスとして設定してある
                    ;; 本番 :asset-root_path "js/compiled/out"
                    :output-to            "../static/cljs/dev/frontend.js"
                    :output-dir           "../static/cljs/dev/out"
                    :source-map           true
                    :source-map-timestamp true
                    :verbose              true
                    ; :closure-defines {"re_frame.trace.trace_enabled_QMARK_" true}
                    ; :target :bundle
                    ; :bundle-cmd {:none ["npx" "webpack" "--mode=development"]
                    ;              :default ["npx" "webpack"]}
                    ;; To console.log CLJS data-structures make sure you enable devtools in Chrome
                    ;; https://github.com/binaryage/cljs-devtools
                    :preloads             [devtools.preload
                                           ; day8.re-frame-10x.preload
                                           ]}}
    ;; This next build is a compressed minified build for
    ;; production. You can build this with:
    ;; lein cljsbuild once prod
    {:id           "prod"
     :source-paths ["source/cljs"]
     ; figwheelのためではなく、:compiler :mainより優先されるため必要
     :compiler     { :main frontend.core ; :optimizations :advanced のときは指定しない
                     :asset-path    "https://____/static/cljs/prod/out"
                     :output-to  "../static/cljs/prod/frontend.js"
                     :output-dir "../static/cljs/prod/out"
                     :optimizations :none
                     :pretty-print  false}}]}

  :figwheel
  {;; :http-server-root "static" ;; default and assumes "resources"
  ;; :http-server-root "assets"
    :server-port 3449 ;; default
  ;; :server-ip "127.0.0.1"
  ;; :server-host "localhost"
    :css-dirs       ["source/resources/css"]
    ;; watch and update CSS

    ;; Start an nREPL server into the running figwheel process
    ;; :nrepl-port 7888

    ;; Server Ring Handler (optional)
    ;; if you want to embed a ring handler into the figwheel http-kit
    ;; server, this is for simple ring servers, if this
    ;; doesn't work for you just run your own server :) (see lein-ring)
    ;; :ring-handler hello_world.server/handler

    ;; To be able to open files in your editor from the heads up display
    ;; you will need to put a script on your root_path.
    ;; that script will have to take a file root_path and a line number
    ;; ie. in  ~/bin/myfile-opener
    ;; #! /bin/sh
    ;; emacsclient -n +$2 $1
    ;;
    ;; :open-file-command "myfile-opener"

    ;; if you are using emacsclient you can just use
    ;; :open-file-command "emacsclient"

    ;; if you want to disable the REPL
    ;; :repl false

    ;; to configure a different figwheel logfile root_path
    :server-logfile "../outputs/logs/figwheel-logfile.log"
    :ansi-color-output false
    ;; to pipe all the output to the repl
    ;; :server-logfile false
    }

  :profiles
  {:dev {:dependencies  [[binaryage/devtools "1.0.0"]
                         [figwheel-sidecar "0.5.20"]
                         [com.cemerick/piggieback "0.2.1"]]
         ;; need to add dev source root_path here to get user.clj loaded
         :source-paths  ["source/cljs"]
         ;; need to add the compiled assets to the :clean-targets
         :clean-targets ^{:protect false} [ ;"assets/static/js/compiled"
                                           :target-path]}})
