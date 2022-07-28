// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32940){
var map__32941 = p__32940;
var map__32941__$1 = cljs.core.__destructure_map.call(null,map__32941);
var m = map__32941__$1;
var n = cljs.core.get.call(null,map__32941__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__32941__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__32942_32970 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32943_32971 = null;
var count__32944_32972 = (0);
var i__32945_32973 = (0);
while(true){
if((i__32945_32973 < count__32944_32972)){
var f_32974 = cljs.core._nth.call(null,chunk__32943_32971,i__32945_32973);
cljs.core.println.call(null,"  ",f_32974);


var G__32975 = seq__32942_32970;
var G__32976 = chunk__32943_32971;
var G__32977 = count__32944_32972;
var G__32978 = (i__32945_32973 + (1));
seq__32942_32970 = G__32975;
chunk__32943_32971 = G__32976;
count__32944_32972 = G__32977;
i__32945_32973 = G__32978;
continue;
} else {
var temp__5753__auto___32979 = cljs.core.seq.call(null,seq__32942_32970);
if(temp__5753__auto___32979){
var seq__32942_32980__$1 = temp__5753__auto___32979;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32942_32980__$1)){
var c__4679__auto___32981 = cljs.core.chunk_first.call(null,seq__32942_32980__$1);
var G__32982 = cljs.core.chunk_rest.call(null,seq__32942_32980__$1);
var G__32983 = c__4679__auto___32981;
var G__32984 = cljs.core.count.call(null,c__4679__auto___32981);
var G__32985 = (0);
seq__32942_32970 = G__32982;
chunk__32943_32971 = G__32983;
count__32944_32972 = G__32984;
i__32945_32973 = G__32985;
continue;
} else {
var f_32986 = cljs.core.first.call(null,seq__32942_32980__$1);
cljs.core.println.call(null,"  ",f_32986);


var G__32987 = cljs.core.next.call(null,seq__32942_32980__$1);
var G__32988 = null;
var G__32989 = (0);
var G__32990 = (0);
seq__32942_32970 = G__32987;
chunk__32943_32971 = G__32988;
count__32944_32972 = G__32989;
i__32945_32973 = G__32990;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32991 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32991);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32991)))?cljs.core.second.call(null,arglists_32991):arglists_32991));
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
var seq__32946_32992 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32947_32993 = null;
var count__32948_32994 = (0);
var i__32949_32995 = (0);
while(true){
if((i__32949_32995 < count__32948_32994)){
var vec__32958_32996 = cljs.core._nth.call(null,chunk__32947_32993,i__32949_32995);
var name_32997 = cljs.core.nth.call(null,vec__32958_32996,(0),null);
var map__32961_32998 = cljs.core.nth.call(null,vec__32958_32996,(1),null);
var map__32961_32999__$1 = cljs.core.__destructure_map.call(null,map__32961_32998);
var doc_33000 = cljs.core.get.call(null,map__32961_32999__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33001 = cljs.core.get.call(null,map__32961_32999__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32997);

cljs.core.println.call(null," ",arglists_33001);

if(cljs.core.truth_(doc_33000)){
cljs.core.println.call(null," ",doc_33000);
} else {
}


var G__33002 = seq__32946_32992;
var G__33003 = chunk__32947_32993;
var G__33004 = count__32948_32994;
var G__33005 = (i__32949_32995 + (1));
seq__32946_32992 = G__33002;
chunk__32947_32993 = G__33003;
count__32948_32994 = G__33004;
i__32949_32995 = G__33005;
continue;
} else {
var temp__5753__auto___33006 = cljs.core.seq.call(null,seq__32946_32992);
if(temp__5753__auto___33006){
var seq__32946_33007__$1 = temp__5753__auto___33006;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32946_33007__$1)){
var c__4679__auto___33008 = cljs.core.chunk_first.call(null,seq__32946_33007__$1);
var G__33009 = cljs.core.chunk_rest.call(null,seq__32946_33007__$1);
var G__33010 = c__4679__auto___33008;
var G__33011 = cljs.core.count.call(null,c__4679__auto___33008);
var G__33012 = (0);
seq__32946_32992 = G__33009;
chunk__32947_32993 = G__33010;
count__32948_32994 = G__33011;
i__32949_32995 = G__33012;
continue;
} else {
var vec__32962_33013 = cljs.core.first.call(null,seq__32946_33007__$1);
var name_33014 = cljs.core.nth.call(null,vec__32962_33013,(0),null);
var map__32965_33015 = cljs.core.nth.call(null,vec__32962_33013,(1),null);
var map__32965_33016__$1 = cljs.core.__destructure_map.call(null,map__32965_33015);
var doc_33017 = cljs.core.get.call(null,map__32965_33016__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33018 = cljs.core.get.call(null,map__32965_33016__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33014);

cljs.core.println.call(null," ",arglists_33018);

if(cljs.core.truth_(doc_33017)){
cljs.core.println.call(null," ",doc_33017);
} else {
}


var G__33019 = cljs.core.next.call(null,seq__32946_33007__$1);
var G__33020 = null;
var G__33021 = (0);
var G__33022 = (0);
seq__32946_32992 = G__33019;
chunk__32947_32993 = G__33020;
count__32948_32994 = G__33021;
i__32949_32995 = G__33022;
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

var seq__32966 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32967 = null;
var count__32968 = (0);
var i__32969 = (0);
while(true){
if((i__32969 < count__32968)){
var role = cljs.core._nth.call(null,chunk__32967,i__32969);
var temp__5753__auto___33023__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___33023__$1)){
var spec_33024 = temp__5753__auto___33023__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_33024));
} else {
}


var G__33025 = seq__32966;
var G__33026 = chunk__32967;
var G__33027 = count__32968;
var G__33028 = (i__32969 + (1));
seq__32966 = G__33025;
chunk__32967 = G__33026;
count__32968 = G__33027;
i__32969 = G__33028;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq.call(null,seq__32966);
if(temp__5753__auto____$1){
var seq__32966__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32966__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__32966__$1);
var G__33029 = cljs.core.chunk_rest.call(null,seq__32966__$1);
var G__33030 = c__4679__auto__;
var G__33031 = cljs.core.count.call(null,c__4679__auto__);
var G__33032 = (0);
seq__32966 = G__33029;
chunk__32967 = G__33030;
count__32968 = G__33031;
i__32969 = G__33032;
continue;
} else {
var role = cljs.core.first.call(null,seq__32966__$1);
var temp__5753__auto___33033__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___33033__$2)){
var spec_33034 = temp__5753__auto___33033__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_33034));
} else {
}


var G__33035 = cljs.core.next.call(null,seq__32966__$1);
var G__33036 = null;
var G__33037 = (0);
var G__33038 = (0);
seq__32966 = G__33035;
chunk__32967 = G__33036;
count__32968 = G__33037;
i__32969 = G__33038;
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
var G__33039 = cljs.core.conj.call(null,via,t);
var G__33040 = cljs.core.ex_cause.call(null,t);
via = G__33039;
t = G__33040;
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
var map__33043 = datafied_throwable;
var map__33043__$1 = cljs.core.__destructure_map.call(null,map__33043);
var via = cljs.core.get.call(null,map__33043__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__33043__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__33043__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__33044 = cljs.core.last.call(null,via);
var map__33044__$1 = cljs.core.__destructure_map.call(null,map__33044);
var type = cljs.core.get.call(null,map__33044__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__33044__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__33044__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__33045 = data;
var map__33045__$1 = cljs.core.__destructure_map.call(null,map__33045);
var problems = cljs.core.get.call(null,map__33045__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__33045__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__33045__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__33046 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__33046__$1 = cljs.core.__destructure_map.call(null,map__33046);
var top_data = map__33046__$1;
var source = cljs.core.get.call(null,map__33046__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__33047 = phase;
var G__33047__$1 = (((G__33047 instanceof cljs.core.Keyword))?G__33047.fqn:null);
switch (G__33047__$1) {
case "read-source":
var map__33048 = data;
var map__33048__$1 = cljs.core.__destructure_map.call(null,map__33048);
var line = cljs.core.get.call(null,map__33048__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__33048__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__33049 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__33049__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__33049,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__33049);
var G__33049__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__33049__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__33049__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__33049__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__33049__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__33050 = top_data;
var G__33050__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__33050,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__33050);
var G__33050__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__33050__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__33050__$1);
var G__33050__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__33050__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__33050__$2);
var G__33050__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__33050__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__33050__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__33050__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__33050__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__33051 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__33051,(0),null);
var method = cljs.core.nth.call(null,vec__33051,(1),null);
var file = cljs.core.nth.call(null,vec__33051,(2),null);
var line = cljs.core.nth.call(null,vec__33051,(3),null);
var G__33054 = top_data;
var G__33054__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__33054,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__33054);
var G__33054__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__33054__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__33054__$1);
var G__33054__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.call(null,G__33054__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__33054__$2);
var G__33054__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__33054__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__33054__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__33054__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__33054__$4;
}

break;
case "execution":
var vec__33055 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__33055,(0),null);
var method = cljs.core.nth.call(null,vec__33055,(1),null);
var file = cljs.core.nth.call(null,vec__33055,(2),null);
var line = cljs.core.nth.call(null,vec__33055,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__33042_SHARP_){
var or__4253__auto__ = (p1__33042_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__33042_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__33058 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__33058__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__33058,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__33058);
var G__33058__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__33058__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__33058__$1);
var G__33058__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__33058__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__33058__$2);
var G__33058__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__33058__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__33058__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__33058__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__33058__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33047__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__33062){
var map__33063 = p__33062;
var map__33063__$1 = cljs.core.__destructure_map.call(null,map__33063);
var triage_data = map__33063__$1;
var phase = cljs.core.get.call(null,map__33063__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__33063__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__33063__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__33063__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__33063__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__33063__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__33063__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__33063__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__33064 = phase;
var G__33064__$1 = (((G__33064 instanceof cljs.core.Keyword))?G__33064.fqn:null);
switch (G__33064__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33065_33074 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33066_33075 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33067_33076 = true;
var _STAR_print_fn_STAR__temp_val__33068_33077 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33067_33076);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33068_33077);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__33060_SHARP_){
return cljs.core.dissoc.call(null,p1__33060_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33066_33075);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33065_33074);
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
var _STAR_print_newline_STAR__orig_val__33069_33078 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33070_33079 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33071_33080 = true;
var _STAR_print_fn_STAR__temp_val__33072_33081 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33071_33080);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33072_33081);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__33061_SHARP_){
return cljs.core.dissoc.call(null,p1__33061_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33070_33079);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33069_33078);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33064__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1658833865501
