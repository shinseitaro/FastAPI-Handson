(ns frontend.core
  (:require-macros
   [dommy.core :refer [sel1]])
  (:require
   [dommy.core :as dommy]
   [reagent.core :as rc]
   [reagent.dom :as rd]
   [ajax.core :refer [GET POST]]))

(enable-console-print!)

;; (def site "https://fastapi-handson.azurewebsites.net")
(def site "")

(def status-codes (rc/atom []))
(def image-list (rc/atom []))

(defn render
  "HTMLの`tag`で指定されたところに`content`を描画する"
  [content tag]
  (let [dom-object (.getElementById js/document tag)]
    (if (nil? dom-object)
      (println "tag not found at rendering: " tag)
      (rd/render content dom-object))))

(defn get-json
  "サーバー(`url-path`)からJSONで情報を取得し、`func`を適用して`store'に保存する"
  [url-path store func]
  (GET url-path
    {:params          {:format "json"}
     :response-format :json
     :keywords?       true
     :handler         #(do (reset! store (func %)) (println  %))
     :error-handler   #(do (println %))})
  store)

(defn header
  [caption]
  [:div {:class "bg-indigo-600"}
   [:p {:class "ml-5 py-4 font-large text-white"} caption]])

(declare card)
(defn show-code-images
  [image-list]
  (render [:div {:id "image-list" :class (str " " (map #(identity %) (:cats image-list)))}
           [:div.flex.flex-wrap.-m-1.md:-m-2
            (map #(card %) (:cats image-list))]] "modal"))

(defn get-code-images
  [code]
  (-> (sel1 :#modal-panel)
      (dommy/remove-class! "opacity-0")
      (dommy/remove-class! "pointer-events-none"))
  (-> (sel1 :#body)
      (dommy/add-class! "modal-active"))
  (get-json (str site "/status/" code) image-list show-code-images))

(defn card
  [attrs]
  [:div.flex.justify-center
   [:div {:class "rounded-lg shadow-lg bg-white max-w-sm m-4"}
    [:div {:class "p-6"}
     [:h4 {:class "text-gray-900 text-xl font-medium mb-2 bg-indigo-100 text-indigo-800 mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900"} (:code attrs)]
     [:p {:class "text-gray-700 text-base mb-4"} (:message attrs)]
     [:a {:href "#!" :on-click #(get-code-images (:code attrs))}
      [:img.rounded-t-lg
       {:src (or (:filepath attrs)
                 (-> (:cats attrs) first :filepath))}]]]]])

(defn get-value
  [tag]
  (-> (dommy/sel1 tag) (dommy/value)))

(defn send
  [] ;  {"filepath": "string", "message": "string", "code": 0}
  (let [code (get-value :#code)
        message (get-value :#message)
        url (get-value :#url)
        data {:code code :message message :filepath url}]
    (println data)
    (POST (str site "/cat")
      {:format :json
       :params data
       :handler #(get-code-images code)
       :error-handler #(js/alert "送信できませんでした")})))

(defn content
  []
  (fn []
    (let [lcs "block mb-2 text-gray-900"
          ics "bg-gray-200 border border-gray-400 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"]
      [:main {:class "flex-grow"}
       [:section
        [:div {:class "container text-sm font-medium px-5 py-2 mx-auto lg:pt-12 lg:px-32 bg-indigo-400 m-8"}
         [:form
          [:div {:class "grid gap-6 mb-6 md:grid-cols-2"}
           [:div
            [:label {:for "code" :class lcs} "ステイタス番号"]
            [:input {:id "code" :required "", :pattern "[0-9]{3}", :placeholder "000", :type "tel" :class ics}]]
           [:div
            [:label {:for "message" :class lcs} "メッセージ"]
            [:input {:id "message" :required "", :placeholder "メッセージ", :type "text" :class ics}]]
           [:div
            [:label {:for "url" :class lcs} "URL"]
            [:input {:id "url" :required "", :placeholder "image_site.com/address.jpg", :type "url" :class ics}]]
           [:button {:type "submit"
                     :class "px-4 bg-indigo-500 p-3 my-6 rounded-lg text-white hover:bg-indigo-600"
                     :style {:width "60px" :height "40px"}
                     :on-click #(send)}
            "登録"]]]]]
       [:section {:class "overflow-hidden text-gray-700"}
        [:div {:class "container px-5 py-2 mx-auto lg:pt-12 lg:px-32 bg-indigo-300"}
         [:div.flex.flex-wrap.-m-1.md:-m-2
          (map #(card %) @status-codes)]]]])))

(defn footer
  [caption]
  [:footer {:class "bg-gray-200"}
   [:p {:class "p-2 text-center text-xs"} caption]])

(defn update-status
  []
  (get-json (str site "/status") status-codes identity))

(defn main
  []
  ;; (js/setInterval update-status (* 5000 1))
  (render [:div {:id "cljs-app-content" :class "flex flex-col min-h-screen"}
           (header "HTTP Cat Clone with FastAPI")
           [content]
           (footer (str site ", 2022"))] "app")
  (update-status))
