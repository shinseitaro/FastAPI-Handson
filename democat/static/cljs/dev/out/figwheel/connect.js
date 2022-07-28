// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__32134__delegate = function (x__32113__auto__){
if(cljs.core.truth_(frontend.core.main)){
return cljs.core.apply.call(null,frontend.core.main,x__32113__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '","frontend.core/main","' is missing"].join(''));
}
};
var G__32134 = function (var_args){
var x__32113__auto__ = null;
if (arguments.length > 0) {
var G__32135__i = 0, G__32135__a = new Array(arguments.length -  0);
while (G__32135__i < G__32135__a.length) {G__32135__a[G__32135__i] = arguments[G__32135__i + 0]; ++G__32135__i;}
  x__32113__auto__ = new cljs.core.IndexedSeq(G__32135__a,0,null);
} 
return G__32134__delegate.call(this,x__32113__auto__);};
G__32134.cljs$lang$maxFixedArity = 0;
G__32134.cljs$lang$applyTo = (function (arglist__32136){
var x__32113__auto__ = cljs.core.seq(arglist__32136);
return G__32134__delegate(x__32113__auto__);
});
G__32134.cljs$core$IFn$_invoke$arity$variadic = G__32134__delegate;
return G__32134;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1658997510062
