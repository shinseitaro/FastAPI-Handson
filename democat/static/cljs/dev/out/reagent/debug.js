// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__21230__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21230 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21231__i = 0, G__21231__a = new Array(arguments.length -  0);
while (G__21231__i < G__21231__a.length) {G__21231__a[G__21231__i] = arguments[G__21231__i + 0]; ++G__21231__i;}
  args = new cljs.core.IndexedSeq(G__21231__a,0,null);
} 
return G__21230__delegate.call(this,args);};
G__21230.cljs$lang$maxFixedArity = 0;
G__21230.cljs$lang$applyTo = (function (arglist__21232){
var args = cljs.core.seq(arglist__21232);
return G__21230__delegate(args);
});
G__21230.cljs$core$IFn$_invoke$arity$variadic = G__21230__delegate;
return G__21230;
})()
);

(o.error = (function() { 
var G__21233__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21233 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21234__i = 0, G__21234__a = new Array(arguments.length -  0);
while (G__21234__i < G__21234__a.length) {G__21234__a[G__21234__i] = arguments[G__21234__i + 0]; ++G__21234__i;}
  args = new cljs.core.IndexedSeq(G__21234__a,0,null);
} 
return G__21233__delegate.call(this,args);};
G__21233.cljs$lang$maxFixedArity = 0;
G__21233.cljs$lang$applyTo = (function (arglist__21235){
var args = cljs.core.seq(arglist__21235);
return G__21233__delegate(args);
});
G__21233.cljs$core$IFn$_invoke$arity$variadic = G__21233__delegate;
return G__21233;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1658833717154
