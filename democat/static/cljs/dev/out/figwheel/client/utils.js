// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('figwheel.client.utils');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('cljs.reader');
goog.require('cljs.pprint');
goog.require('goog.userAgent.product');
goog.require('goog.async.Deferred');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.scope(function(){
figwheel.client.utils.goog$module$goog$object = goog.module.get('goog.object');
});
figwheel.client.utils._STAR_print_debug_STAR_ = false;
figwheel.client.utils.html_env_QMARK_ = (function figwheel$client$utils$html_env_QMARK_(){
return (!((goog.global.document == null)));
});
figwheel.client.utils.react_native_env_QMARK_ = (function figwheel$client$utils$react_native_env_QMARK_(){
return (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.navigator !== 'undefined')) && (cljs.core._EQ_.call(null,goog.global.navigator.product,"ReactNative")));
});
figwheel.client.utils.node_env_QMARK_ = (function figwheel$client$utils$node_env_QMARK_(){
return (!((goog.nodeGlobalRequire == null)));
});
figwheel.client.utils.html_or_react_native_env_QMARK_ = (function figwheel$client$utils$html_or_react_native_env_QMARK_(){
return ((figwheel.client.utils.html_env_QMARK_.call(null)) || (figwheel.client.utils.react_native_env_QMARK_.call(null)));
});
figwheel.client.utils.worker_env_QMARK_ = (function figwheel$client$utils$worker_env_QMARK_(){
return (((goog.global.document == null)) && ((((typeof self !== 'undefined')) && ((!((self.importScripts == null)))))));
});
figwheel.client.utils.host_env_QMARK_ = (function figwheel$client$utils$host_env_QMARK_(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"node","node",581201198);
} else {
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"html","html",-998796897);
} else {
if(figwheel.client.utils.react_native_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"react-native","react-native",-1543085138);
} else {
if(figwheel.client.utils.worker_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"worker","worker",938239996);
} else {
return null;
}
}
}
}
});
figwheel.client.utils.base_url_path = (function figwheel$client$utils$base_url_path(){
return clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,"$1");
});
figwheel.client.utils.create_custom_event = (function figwheel$client$utils$create_custom_event(event_name,data){
if((!(goog.userAgent.product.IE))){
return (new CustomEvent(event_name,(function (){var obj27594 = ({"detail":data});
return obj27594;
})()));
} else {
var event = document.createEvent("CustomEvent");
event.initCustomEvent(event_name,false,false,data);

return event;
}
});
figwheel.client.utils.dispatch_custom_event = (function figwheel$client$utils$dispatch_custom_event(event_name,data){
if(cljs.core.truth_((function (){var and__4251__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(and__4251__auto__){
var and__4251__auto____$1 = figwheel.client.utils.goog$module$goog$object.get.call(null,window,"CustomEvent");
if(cljs.core.truth_(and__4251__auto____$1)){
return typeof document !== 'undefined';
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
return document.body.dispatchEvent(figwheel.client.utils.create_custom_event.call(null,event_name,data));
} else {
return null;
}
});
figwheel.client.utils.debug_prn = (function figwheel$client$utils$debug_prn(o){
if(cljs.core.truth_(figwheel.client.utils._STAR_print_debug_STAR_)){
var o__$1 = ((((cljs.core.map_QMARK_.call(null,o)) || (cljs.core.seq_QMARK_.call(null,o))))?cljs.core.prn_str.call(null,o):o);
return console.log(o__$1);
} else {
return null;
}
});
figwheel.client.utils.log = (function figwheel$client$utils$log(var_args){
var G__27600 = arguments.length;
switch (G__27600) {
case 1:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1 = (function (x){
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),x);
}));

(figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2 = (function (level,arg){
var f = (function (){var pred__27601 = cljs.core._EQ_;
var expr__27602 = ((figwheel.client.utils.html_or_react_native_env_QMARK_.call(null))?level:new cljs.core.Keyword(null,"info","info",-317069002));
if(cljs.core.truth_(pred__27601.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),expr__27602))){
return (function (p1__27595_SHARP_){
return console.warn(p1__27595_SHARP_);
});
} else {
if(cljs.core.truth_(pred__27601.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),expr__27602))){
return (function (p1__27596_SHARP_){
return console.debug(p1__27596_SHARP_);
});
} else {
if(cljs.core.truth_(pred__27601.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__27602))){
return (function (p1__27597_SHARP_){
return console.error(p1__27597_SHARP_);
});
} else {
return (function (p1__27598_SHARP_){
return console.log(p1__27598_SHARP_);
});
}
}
}
})();
return f.call(null,arg);
}));

(figwheel.client.utils.log.cljs$lang$maxFixedArity = 2);

figwheel.client.utils.eval_helper = (function figwheel$client$utils$eval_helper(code,p__27605){
var map__27606 = p__27605;
var map__27606__$1 = cljs.core.__destructure_map.call(null,map__27606);
var opts = map__27606__$1;
var eval_fn = cljs.core.get.call(null,map__27606__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
if(cljs.core.truth_(eval_fn)){
return eval_fn.call(null,code,opts);
} else {
return eval(code);
}
});
figwheel.client.utils.pprint_to_string = (function figwheel$client$utils$pprint_to_string(x){
var sb = (new goog.string.StringBuffer());
var sbw = (new cljs.core.StringBufferWriter(sb));
cljs.pprint.pprint.call(null,x,sbw);

return goog.string.trimRight(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
});
/**
 * chains an async action on to a deferred
 *   Must provide a goog.async.Deferred and action function that
 *   takes an initial value and a continuation fn to call with the result
 */
figwheel.client.utils.liftContD = (function figwheel$client$utils$liftContD(deferred,f){
return deferred.then((function (val){
var new_def = (new goog.async.Deferred());
f.call(null,val,(function (p1__27607_SHARP_){
return new_def.callback(p1__27607_SHARP_);
}));

return new_def;
}));
});
/**
 * maps an async action across a collection and chains the results
 *   onto a deferred
 */
figwheel.client.utils.mapConcatD = (function figwheel$client$utils$mapConcatD(deferred,f,coll){
var results = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
return cljs.core.reduce.call(null,(function (defr,v){
return figwheel.client.utils.liftContD.call(null,defr,(function (_,fin){
return f.call(null,v,(function (v__$1){
cljs.core.swap_BANG_.call(null,results,cljs.core.conj,v__$1);

return fin.call(null,v__$1);
}));
}));
}),deferred,coll).then((function (_){
return goog.async.Deferred.succeed(cljs.core.deref.call(null,results));
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.utils !== 'undefined') && (typeof figwheel.client.utils.local_persistent_config !== 'undefined')){
} else {
figwheel.client.utils.local_persistent_config = (function (){var a = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((((typeof localStorage !== 'undefined')) && ((!((figwheel.client.utils.goog$module$goog$object.get.call(null,localStorage,"setItem") == null)))))){
cljs.core.add_watch.call(null,a,new cljs.core.Keyword(null,"sync-local-storage","sync-local-storage",-473590105),(function (_,___$1,___$2,n){
return cljs.core.mapv.call(null,(function (p__27608){
var vec__27609 = p__27608;
var ky = cljs.core.nth.call(null,vec__27609,(0),null);
var v = cljs.core.nth.call(null,vec__27609,(1),null);
return localStorage.setItem(cljs.core.name.call(null,ky),cljs.core.pr_str.call(null,v));
}),n);
}));
} else {
}

return a;
})();
}
/**
 * Set a local value on a key that in a browser will persist even when
 * the browser gets reloaded.
 */
figwheel.client.utils.persistent_config_set_BANG_ = (function figwheel$client$utils$persistent_config_set_BANG_(ky,v){
return cljs.core.swap_BANG_.call(null,figwheel.client.utils.local_persistent_config,cljs.core.assoc,ky,v);
});
figwheel.client.utils.persistent_config_get = (function figwheel$client$utils$persistent_config_get(var_args){
var G__27613 = arguments.length;
switch (G__27613) {
case 2:
return figwheel.client.utils.persistent_config_get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.utils.persistent_config_get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.utils.persistent_config_get.cljs$core$IFn$_invoke$arity$2 = (function (ky,not_found){
try{if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,figwheel.client.utils.local_persistent_config),ky)){
return cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.utils.local_persistent_config),ky);
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = (((typeof localStorage !== 'undefined')) && ((!((figwheel.client.utils.goog$module$goog$object.get.call(null,localStorage,"getItem") == null)))));
if(and__4251__auto__){
return localStorage.getItem(cljs.core.name.call(null,ky));
} else {
return and__4251__auto__;
}
})())){
var v = cljs.reader.read_string.call(null,localStorage.getItem(cljs.core.name.call(null,ky)));
figwheel.client.utils.persistent_config_set_BANG_.call(null,ky,v);

return v;
} else {
return not_found;

}
}
}catch (e27614){if((e27614 instanceof Error)){
var e = e27614;
return not_found;
} else {
throw e27614;

}
}}));

(figwheel.client.utils.persistent_config_get.cljs$core$IFn$_invoke$arity$1 = (function (ky){
return figwheel.client.utils.persistent_config_get.call(null,ky,null);
}));

(figwheel.client.utils.persistent_config_get.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=utils.js.map?rel=1658997506799
