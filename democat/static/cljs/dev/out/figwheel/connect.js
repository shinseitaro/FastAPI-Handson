// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__33766__delegate = function (x__33750__auto__){
if(cljs.core.truth_(frontend.core.on_js_reload)){
return cljs.core.apply.call(null,frontend.core.on_js_reload,x__33750__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '","frontend.core/on-js-reload","' is missing"].join(''));
}
};
var G__33766 = function (var_args){
var x__33750__auto__ = null;
if (arguments.length > 0) {
var G__33767__i = 0, G__33767__a = new Array(arguments.length -  0);
while (G__33767__i < G__33767__a.length) {G__33767__a[G__33767__i] = arguments[G__33767__i + 0]; ++G__33767__i;}
  x__33750__auto__ = new cljs.core.IndexedSeq(G__33767__a,0,null);
} 
return G__33766__delegate.call(this,x__33750__auto__);};
G__33766.cljs$lang$maxFixedArity = 0;
G__33766.cljs$lang$applyTo = (function (arglist__33768){
var x__33750__auto__ = cljs.core.seq(arglist__33768);
return G__33766__delegate(x__33750__auto__);
});
G__33766.cljs$core$IFn$_invoke$arity$variadic = G__33766__delegate;
return G__33766;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3450/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1658833865789
