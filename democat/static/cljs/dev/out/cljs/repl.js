// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30648){
var map__30649 = p__30648;
var map__30649__$1 = cljs.core.__destructure_map.call(null,map__30649);
var m = map__30649__$1;
var n = cljs.core.get.call(null,map__30649__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30649__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30650_30678 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30651_30679 = null;
var count__30652_30680 = (0);
var i__30653_30681 = (0);
while(true){
if((i__30653_30681 < count__30652_30680)){
var f_30682 = cljs.core._nth.call(null,chunk__30651_30679,i__30653_30681);
cljs.core.println.call(null,"  ",f_30682);


var G__30683 = seq__30650_30678;
var G__30684 = chunk__30651_30679;
var G__30685 = count__30652_30680;
var G__30686 = (i__30653_30681 + (1));
seq__30650_30678 = G__30683;
chunk__30651_30679 = G__30684;
count__30652_30680 = G__30685;
i__30653_30681 = G__30686;
continue;
} else {
var temp__5753__auto___30687 = cljs.core.seq.call(null,seq__30650_30678);
if(temp__5753__auto___30687){
var seq__30650_30688__$1 = temp__5753__auto___30687;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30650_30688__$1)){
var c__4679__auto___30689 = cljs.core.chunk_first.call(null,seq__30650_30688__$1);
var G__30690 = cljs.core.chunk_rest.call(null,seq__30650_30688__$1);
var G__30691 = c__4679__auto___30689;
var G__30692 = cljs.core.count.call(null,c__4679__auto___30689);
var G__30693 = (0);
seq__30650_30678 = G__30690;
chunk__30651_30679 = G__30691;
count__30652_30680 = G__30692;
i__30653_30681 = G__30693;
continue;
} else {
var f_30694 = cljs.core.first.call(null,seq__30650_30688__$1);
cljs.core.println.call(null,"  ",f_30694);


var G__30695 = cljs.core.next.call(null,seq__30650_30688__$1);
var G__30696 = null;
var G__30697 = (0);
var G__30698 = (0);
seq__30650_30678 = G__30695;
chunk__30651_30679 = G__30696;
count__30652_30680 = G__30697;
i__30653_30681 = G__30698;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30699 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30699);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30699)))?cljs.core.second.call(null,arglists_30699):arglists_30699));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30654_30700 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30655_30701 = null;
var count__30656_30702 = (0);
var i__30657_30703 = (0);
while(true){
if((i__30657_30703 < count__30656_30702)){
var vec__30666_30704 = cljs.core._nth.call(null,chunk__30655_30701,i__30657_30703);
var name_30705 = cljs.core.nth.call(null,vec__30666_30704,(0),null);
var map__30669_30706 = cljs.core.nth.call(null,vec__30666_30704,(1),null);
var map__30669_30707__$1 = cljs.core.__destructure_map.call(null,map__30669_30706);
var doc_30708 = cljs.core.get.call(null,map__30669_30707__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30709 = cljs.core.get.call(null,map__30669_30707__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30705);

cljs.core.println.call(null," ",arglists_30709);

if(cljs.core.truth_(doc_30708)){
cljs.core.println.call(null," ",doc_30708);
} else {
}


var G__30710 = seq__30654_30700;
var G__30711 = chunk__30655_30701;
var G__30712 = count__30656_30702;
var G__30713 = (i__30657_30703 + (1));
seq__30654_30700 = G__30710;
chunk__30655_30701 = G__30711;
count__30656_30702 = G__30712;
i__30657_30703 = G__30713;
continue;
} else {
var temp__5753__auto___30714 = cljs.core.seq.call(null,seq__30654_30700);
if(temp__5753__auto___30714){
var seq__30654_30715__$1 = temp__5753__auto___30714;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30654_30715__$1)){
var c__4679__auto___30716 = cljs.core.chunk_first.call(null,seq__30654_30715__$1);
var G__30717 = cljs.core.chunk_rest.call(null,seq__30654_30715__$1);
var G__30718 = c__4679__auto___30716;
var G__30719 = cljs.core.count.call(null,c__4679__auto___30716);
var G__30720 = (0);
seq__30654_30700 = G__30717;
chunk__30655_30701 = G__30718;
count__30656_30702 = G__30719;
i__30657_30703 = G__30720;
continue;
} else {
var vec__30670_30721 = cljs.core.first.call(null,seq__30654_30715__$1);
var name_30722 = cljs.core.nth.call(null,vec__30670_30721,(0),null);
var map__30673_30723 = cljs.core.nth.call(null,vec__30670_30721,(1),null);
var map__30673_30724__$1 = cljs.core.__destructure_map.call(null,map__30673_30723);
var doc_30725 = cljs.core.get.call(null,map__30673_30724__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30726 = cljs.core.get.call(null,map__30673_30724__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30722);

cljs.core.println.call(null," ",arglists_30726);

if(cljs.core.truth_(doc_30725)){
cljs.core.println.call(null," ",doc_30725);
} else {
}


var G__30727 = cljs.core.next.call(null,seq__30654_30715__$1);
var G__30728 = null;
var G__30729 = (0);
var G__30730 = (0);
seq__30654_30700 = G__30727;
chunk__30655_30701 = G__30728;
count__30656_30702 = G__30729;
i__30657_30703 = G__30730;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.call(null,"Spec");

var seq__30674 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30675 = null;
var count__30676 = (0);
var i__30677 = (0);
while(true){
if((i__30677 < count__30676)){
var role = cljs.core._nth.call(null,chunk__30675,i__30677);
var temp__5753__auto___30731__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___30731__$1)){
var spec_30732 = temp__5753__auto___30731__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30732));
} else {
}


var G__30733 = seq__30674;
var G__30734 = chunk__30675;
var G__30735 = count__30676;
var G__30736 = (i__30677 + (1));
seq__30674 = G__30733;
chunk__30675 = G__30734;
count__30676 = G__30735;
i__30677 = G__30736;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq.call(null,seq__30674);
if(temp__5753__auto____$1){
var seq__30674__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30674__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__30674__$1);
var G__30737 = cljs.core.chunk_rest.call(null,seq__30674__$1);
var G__30738 = c__4679__auto__;
var G__30739 = cljs.core.count.call(null,c__4679__auto__);
var G__30740 = (0);
seq__30674 = G__30737;
chunk__30675 = G__30738;
count__30676 = G__30739;
i__30677 = G__30740;
continue;
} else {
var role = cljs.core.first.call(null,seq__30674__$1);
var temp__5753__auto___30741__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___30741__$2)){
var spec_30742 = temp__5753__auto___30741__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30742));
} else {
}


var G__30743 = cljs.core.next.call(null,seq__30674__$1);
var G__30744 = null;
var G__30745 = (0);
var G__30746 = (0);
seq__30674 = G__30743;
chunk__30675 = G__30744;
count__30676 = G__30745;
i__30677 = G__30746;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__30747 = cljs.core.conj.call(null,via,t);
var G__30748 = cljs.core.ex_cause.call(null,t);
via = G__30747;
t = G__30748;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__30751 = datafied_throwable;
var map__30751__$1 = cljs.core.__destructure_map.call(null,map__30751);
var via = cljs.core.get.call(null,map__30751__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__30751__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__30751__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__30752 = cljs.core.last.call(null,via);
var map__30752__$1 = cljs.core.__destructure_map.call(null,map__30752);
var type = cljs.core.get.call(null,map__30752__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__30752__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__30752__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__30753 = data;
var map__30753__$1 = cljs.core.__destructure_map.call(null,map__30753);
var problems = cljs.core.get.call(null,map__30753__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__30753__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__30753__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__30754 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__30754__$1 = cljs.core.__destructure_map.call(null,map__30754);
var top_data = map__30754__$1;
var source = cljs.core.get.call(null,map__30754__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__30755 = phase;
var G__30755__$1 = (((G__30755 instanceof cljs.core.Keyword))?G__30755.fqn:null);
switch (G__30755__$1) {
case "read-source":
var map__30756 = data;
var map__30756__$1 = cljs.core.__destructure_map.call(null,map__30756);
var line = cljs.core.get.call(null,map__30756__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__30756__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__30757 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__30757__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__30757,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__30757);
var G__30757__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__30757__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__30757__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__30757__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__30757__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__30758 = top_data;
var G__30758__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__30758,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__30758);
var G__30758__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__30758__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__30758__$1);
var G__30758__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__30758__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__30758__$2);
var G__30758__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__30758__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__30758__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__30758__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__30758__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__30759 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__30759,(0),null);
var method = cljs.core.nth.call(null,vec__30759,(1),null);
var file = cljs.core.nth.call(null,vec__30759,(2),null);
var line = cljs.core.nth.call(null,vec__30759,(3),null);
var G__30762 = top_data;
var G__30762__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__30762,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__30762);
var G__30762__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__30762__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__30762__$1);
var G__30762__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.call(null,G__30762__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__30762__$2);
var G__30762__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__30762__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__30762__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__30762__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__30762__$4;
}

break;
case "execution":
var vec__30763 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__30763,(0),null);
var method = cljs.core.nth.call(null,vec__30763,(1),null);
var file = cljs.core.nth.call(null,vec__30763,(2),null);
var line = cljs.core.nth.call(null,vec__30763,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__30750_SHARP_){
var or__4253__auto__ = (p1__30750_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__30750_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__30766 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__30766__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__30766,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__30766);
var G__30766__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__30766__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__30766__$1);
var G__30766__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.call(null,G__30766__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__30766__$2);
var G__30766__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__30766__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__30766__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__30766__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__30766__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30755__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__30770){
var map__30771 = p__30770;
var map__30771__$1 = cljs.core.__destructure_map.call(null,map__30771);
var triage_data = map__30771__$1;
var phase = cljs.core.get.call(null,map__30771__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__30771__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__30771__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__30771__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__30771__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__30771__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__30771__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__30771__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__30772 = phase;
var G__30772__$1 = (((G__30772 instanceof cljs.core.Keyword))?G__30772.fqn:null);
switch (G__30772__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30773_30782 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30774_30783 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30775_30784 = true;
var _STAR_print_fn_STAR__temp_val__30776_30785 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30775_30784);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30776_30785);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__30768_SHARP_){
return cljs.core.dissoc.call(null,p1__30768_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30774_30783);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30773_30782);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30777_30786 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30778_30787 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30779_30788 = true;
var _STAR_print_fn_STAR__temp_val__30780_30789 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30779_30788);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30780_30789);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__30769_SHARP_){
return cljs.core.dissoc.call(null,p1__30769_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30778_30787);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30777_30786);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30772__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1658997509205
