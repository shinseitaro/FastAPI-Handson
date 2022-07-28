// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
goog.require('goog.object');
goog.scope(function(){
figwheel.client.goog$module$goog$object = goog.module.get('goog.object');
});
figwheel.client._figwheel_version_ = "0.5.20";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e31632){if((e31632 instanceof Error)){
var e = e31632;
return "Error: Unable to stringify";
} else {
throw e31632;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__31635 = arguments.length;
switch (G__31635) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__31633_SHARP_){
if(typeof p1__31633_SHARP_ === 'string'){
return p1__31633_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__31633_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4870__auto__ = [];
var len__4864__auto___31638 = arguments.length;
var i__4865__auto___31639 = (0);
while(true){
if((i__4865__auto___31639 < len__4864__auto___31638)){
args__4870__auto__.push((arguments[i__4865__auto___31639]));

var G__31640 = (i__4865__auto___31639 + (1));
i__4865__auto___31639 = G__31640;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31637){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31637));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4870__auto__ = [];
var len__4864__auto___31642 = arguments.length;
var i__4865__auto___31643 = (0);
while(true){
if((i__4865__auto___31643 < len__4864__auto___31642)){
args__4870__auto__.push((arguments[i__4865__auto___31643]));

var G__31644 = (i__4865__auto___31643 + (1));
i__4865__auto___31643 = G__31644;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31641){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31641));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31645){
var map__31646 = p__31645;
var map__31646__$1 = cljs.core.__destructure_map.call(null,map__31646);
var message = cljs.core.get.call(null,map__31646__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31646__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4253__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4251__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4251__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4251__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23440__auto___31725 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23441__auto__ = (function (){var switch__23315__auto__ = (function (state_31696){
var state_val_31697 = (state_31696[(1)]);
if((state_val_31697 === (7))){
var inst_31692 = (state_31696[(2)]);
var state_31696__$1 = state_31696;
var statearr_31698_31726 = state_31696__$1;
(statearr_31698_31726[(2)] = inst_31692);

(statearr_31698_31726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (1))){
var state_31696__$1 = state_31696;
var statearr_31699_31727 = state_31696__$1;
(statearr_31699_31727[(2)] = null);

(statearr_31699_31727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (4))){
var inst_31649 = (state_31696[(7)]);
var inst_31649__$1 = (state_31696[(2)]);
var state_31696__$1 = (function (){var statearr_31700 = state_31696;
(statearr_31700[(7)] = inst_31649__$1);

return statearr_31700;
})();
if(cljs.core.truth_(inst_31649__$1)){
var statearr_31701_31728 = state_31696__$1;
(statearr_31701_31728[(1)] = (5));

} else {
var statearr_31702_31729 = state_31696__$1;
(statearr_31702_31729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (15))){
var inst_31656 = (state_31696[(8)]);
var inst_31671 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31656);
var inst_31672 = cljs.core.first.call(null,inst_31671);
var inst_31673 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31672);
var inst_31674 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31673)].join('');
var inst_31675 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31674);
var state_31696__$1 = state_31696;
var statearr_31703_31730 = state_31696__$1;
(statearr_31703_31730[(2)] = inst_31675);

(statearr_31703_31730[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (13))){
var inst_31680 = (state_31696[(2)]);
var state_31696__$1 = state_31696;
var statearr_31704_31731 = state_31696__$1;
(statearr_31704_31731[(2)] = inst_31680);

(statearr_31704_31731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (6))){
var state_31696__$1 = state_31696;
var statearr_31705_31732 = state_31696__$1;
(statearr_31705_31732[(2)] = null);

(statearr_31705_31732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (17))){
var inst_31678 = (state_31696[(2)]);
var state_31696__$1 = state_31696;
var statearr_31706_31733 = state_31696__$1;
(statearr_31706_31733[(2)] = inst_31678);

(statearr_31706_31733[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (3))){
var inst_31694 = (state_31696[(2)]);
var state_31696__$1 = state_31696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31696__$1,inst_31694);
} else {
if((state_val_31697 === (12))){
var inst_31655 = (state_31696[(9)]);
var inst_31669 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31655,opts);
var state_31696__$1 = state_31696;
if(inst_31669){
var statearr_31707_31734 = state_31696__$1;
(statearr_31707_31734[(1)] = (15));

} else {
var statearr_31708_31735 = state_31696__$1;
(statearr_31708_31735[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (2))){
var state_31696__$1 = state_31696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31696__$1,(4),ch);
} else {
if((state_val_31697 === (11))){
var inst_31656 = (state_31696[(8)]);
var inst_31661 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31662 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31656);
var inst_31663 = cljs.core.async.timeout.call(null,(1000));
var inst_31664 = [inst_31662,inst_31663];
var inst_31665 = (new cljs.core.PersistentVector(null,2,(5),inst_31661,inst_31664,null));
var state_31696__$1 = state_31696;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31696__$1,(14),inst_31665);
} else {
if((state_val_31697 === (9))){
var inst_31656 = (state_31696[(8)]);
var inst_31682 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31683 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31656);
var inst_31684 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31683);
var inst_31685 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31684)].join('');
var inst_31686 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31685);
var state_31696__$1 = (function (){var statearr_31709 = state_31696;
(statearr_31709[(10)] = inst_31682);

return statearr_31709;
})();
var statearr_31710_31736 = state_31696__$1;
(statearr_31710_31736[(2)] = inst_31686);

(statearr_31710_31736[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (5))){
var inst_31649 = (state_31696[(7)]);
var inst_31651 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31652 = (new cljs.core.PersistentArrayMap(null,2,inst_31651,null));
var inst_31653 = (new cljs.core.PersistentHashSet(null,inst_31652,null));
var inst_31654 = figwheel.client.focus_msgs.call(null,inst_31653,inst_31649);
var inst_31655 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31654);
var inst_31656 = cljs.core.first.call(null,inst_31654);
var inst_31657 = figwheel.client.autoload_QMARK_.call(null);
var state_31696__$1 = (function (){var statearr_31711 = state_31696;
(statearr_31711[(8)] = inst_31656);

(statearr_31711[(9)] = inst_31655);

return statearr_31711;
})();
if(cljs.core.truth_(inst_31657)){
var statearr_31712_31737 = state_31696__$1;
(statearr_31712_31737[(1)] = (8));

} else {
var statearr_31713_31738 = state_31696__$1;
(statearr_31713_31738[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (14))){
var inst_31667 = (state_31696[(2)]);
var state_31696__$1 = state_31696;
var statearr_31714_31739 = state_31696__$1;
(statearr_31714_31739[(2)] = inst_31667);

(statearr_31714_31739[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (16))){
var state_31696__$1 = state_31696;
var statearr_31715_31740 = state_31696__$1;
(statearr_31715_31740[(2)] = null);

(statearr_31715_31740[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (10))){
var inst_31688 = (state_31696[(2)]);
var state_31696__$1 = (function (){var statearr_31716 = state_31696;
(statearr_31716[(11)] = inst_31688);

return statearr_31716;
})();
var statearr_31717_31741 = state_31696__$1;
(statearr_31717_31741[(2)] = null);

(statearr_31717_31741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (8))){
var inst_31655 = (state_31696[(9)]);
var inst_31659 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31655,opts);
var state_31696__$1 = state_31696;
if(cljs.core.truth_(inst_31659)){
var statearr_31718_31742 = state_31696__$1;
(statearr_31718_31742[(1)] = (11));

} else {
var statearr_31719_31743 = state_31696__$1;
(statearr_31719_31743[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23316__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23316__auto____0 = (function (){
var statearr_31720 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31720[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23316__auto__);

(statearr_31720[(1)] = (1));

return statearr_31720;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23316__auto____1 = (function (state_31696){
while(true){
var ret_value__23317__auto__ = (function (){try{while(true){
var result__23318__auto__ = switch__23315__auto__.call(null,state_31696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23318__auto__;
}
break;
}
}catch (e31721){var ex__23319__auto__ = e31721;
var statearr_31722_31744 = state_31696;
(statearr_31722_31744[(2)] = ex__23319__auto__);


if(cljs.core.seq.call(null,(state_31696[(4)]))){
var statearr_31723_31745 = state_31696;
(statearr_31723_31745[(1)] = cljs.core.first.call(null,(state_31696[(4)])));

} else {
throw ex__23319__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31746 = state_31696;
state_31696 = G__31746;
continue;
} else {
return ret_value__23317__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23316__auto__ = function(state_31696){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23316__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23316__auto____1.call(this,state_31696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23316__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23316__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23316__auto__;
})()
})();
var state__23442__auto__ = (function (){var statearr_31724 = f__23441__auto__.call(null);
(statearr_31724[(6)] = c__23440__auto___31725);

return statearr_31724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23442__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31747_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31747_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_31753 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31749 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31750 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31751 = true;
var _STAR_print_fn_STAR__temp_val__31752 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31751);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31752);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31750);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31749);
}}catch (e31748){if((e31748 instanceof Error)){
var e = e31748;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31753], null));
} else {
var e = e31748;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31754){
var map__31755 = p__31754;
var map__31755__$1 = cljs.core.__destructure_map.call(null,map__31755);
var opts = map__31755__$1;
var build_id = cljs.core.get.call(null,map__31755__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__31756){
var vec__31757 = p__31756;
var seq__31758 = cljs.core.seq.call(null,vec__31757);
var first__31759 = cljs.core.first.call(null,seq__31758);
var seq__31758__$1 = cljs.core.next.call(null,seq__31758);
var map__31760 = first__31759;
var map__31760__$1 = cljs.core.__destructure_map.call(null,map__31760);
var msg = map__31760__$1;
var msg_name = cljs.core.get.call(null,map__31760__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31758__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31761){
var vec__31762 = p__31761;
var seq__31763 = cljs.core.seq.call(null,vec__31762);
var first__31764 = cljs.core.first.call(null,seq__31763);
var seq__31763__$1 = cljs.core.next.call(null,seq__31763);
var map__31765 = first__31764;
var map__31765__$1 = cljs.core.__destructure_map.call(null,map__31765);
var msg = map__31765__$1;
var msg_name = cljs.core.get.call(null,map__31765__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31763__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31766){
var map__31767 = p__31766;
var map__31767__$1 = cljs.core.__destructure_map.call(null,map__31767);
var on_compile_warning = cljs.core.get.call(null,map__31767__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31767__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__31768){
var vec__31769 = p__31768;
var seq__31770 = cljs.core.seq.call(null,vec__31769);
var first__31771 = cljs.core.first.call(null,seq__31770);
var seq__31770__$1 = cljs.core.next.call(null,seq__31770);
var map__31772 = first__31771;
var map__31772__$1 = cljs.core.__destructure_map.call(null,map__31772);
var msg = map__31772__$1;
var msg_name = cljs.core.get.call(null,map__31772__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31770__$1;
var pred__31773 = cljs.core._EQ_;
var expr__31774 = msg_name;
if(cljs.core.truth_(pred__31773.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31774))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31773.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31774))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23440__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23441__auto__ = (function (){var switch__23315__auto__ = (function (state_31863){
var state_val_31864 = (state_31863[(1)]);
if((state_val_31864 === (7))){
var inst_31783 = (state_31863[(2)]);
var state_31863__$1 = state_31863;
if(cljs.core.truth_(inst_31783)){
var statearr_31865_31913 = state_31863__$1;
(statearr_31865_31913[(1)] = (8));

} else {
var statearr_31866_31914 = state_31863__$1;
(statearr_31866_31914[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (20))){
var inst_31857 = (state_31863[(2)]);
var state_31863__$1 = state_31863;
var statearr_31867_31915 = state_31863__$1;
(statearr_31867_31915[(2)] = inst_31857);

(statearr_31867_31915[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (27))){
var inst_31853 = (state_31863[(2)]);
var state_31863__$1 = state_31863;
var statearr_31868_31916 = state_31863__$1;
(statearr_31868_31916[(2)] = inst_31853);

(statearr_31868_31916[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (1))){
var inst_31776 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31863__$1 = state_31863;
if(cljs.core.truth_(inst_31776)){
var statearr_31869_31917 = state_31863__$1;
(statearr_31869_31917[(1)] = (2));

} else {
var statearr_31870_31918 = state_31863__$1;
(statearr_31870_31918[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (24))){
var inst_31855 = (state_31863[(2)]);
var state_31863__$1 = state_31863;
var statearr_31871_31919 = state_31863__$1;
(statearr_31871_31919[(2)] = inst_31855);

(statearr_31871_31919[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (4))){
var inst_31861 = (state_31863[(2)]);
var state_31863__$1 = state_31863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31863__$1,inst_31861);
} else {
if((state_val_31864 === (15))){
var inst_31859 = (state_31863[(2)]);
var state_31863__$1 = state_31863;
var statearr_31872_31920 = state_31863__$1;
(statearr_31872_31920[(2)] = inst_31859);

(statearr_31872_31920[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (21))){
var inst_31812 = (state_31863[(2)]);
var inst_31813 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31814 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31813);
var state_31863__$1 = (function (){var statearr_31873 = state_31863;
(statearr_31873[(7)] = inst_31812);

return statearr_31873;
})();
var statearr_31874_31921 = state_31863__$1;
(statearr_31874_31921[(2)] = inst_31814);

(statearr_31874_31921[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (31))){
var inst_31842 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31863__$1 = state_31863;
if(inst_31842){
var statearr_31875_31922 = state_31863__$1;
(statearr_31875_31922[(1)] = (34));

} else {
var statearr_31876_31923 = state_31863__$1;
(statearr_31876_31923[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (32))){
var inst_31851 = (state_31863[(2)]);
var state_31863__$1 = state_31863;
var statearr_31877_31924 = state_31863__$1;
(statearr_31877_31924[(2)] = inst_31851);

(statearr_31877_31924[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (33))){
var inst_31838 = (state_31863[(2)]);
var inst_31839 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31840 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31839);
var state_31863__$1 = (function (){var statearr_31878 = state_31863;
(statearr_31878[(8)] = inst_31838);

return statearr_31878;
})();
var statearr_31879_31925 = state_31863__$1;
(statearr_31879_31925[(2)] = inst_31840);

(statearr_31879_31925[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (13))){
var inst_31797 = figwheel.client.heads_up.clear.call(null);
var state_31863__$1 = state_31863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31863__$1,(16),inst_31797);
} else {
if((state_val_31864 === (22))){
var inst_31818 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31819 = figwheel.client.heads_up.append_warning_message.call(null,inst_31818);
var state_31863__$1 = state_31863;
var statearr_31880_31926 = state_31863__$1;
(statearr_31880_31926[(2)] = inst_31819);

(statearr_31880_31926[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (36))){
var inst_31849 = (state_31863[(2)]);
var state_31863__$1 = state_31863;
var statearr_31881_31927 = state_31863__$1;
(statearr_31881_31927[(2)] = inst_31849);

(statearr_31881_31927[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (29))){
var inst_31829 = (state_31863[(2)]);
var inst_31830 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31831 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31830);
var state_31863__$1 = (function (){var statearr_31882 = state_31863;
(statearr_31882[(9)] = inst_31829);

return statearr_31882;
})();
var statearr_31883_31928 = state_31863__$1;
(statearr_31883_31928[(2)] = inst_31831);

(statearr_31883_31928[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (6))){
var inst_31778 = (state_31863[(10)]);
var state_31863__$1 = state_31863;
var statearr_31884_31929 = state_31863__$1;
(statearr_31884_31929[(2)] = inst_31778);

(statearr_31884_31929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (28))){
var inst_31825 = (state_31863[(2)]);
var inst_31826 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31827 = figwheel.client.heads_up.display_warning.call(null,inst_31826);
var state_31863__$1 = (function (){var statearr_31885 = state_31863;
(statearr_31885[(11)] = inst_31825);

return statearr_31885;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31863__$1,(29),inst_31827);
} else {
if((state_val_31864 === (25))){
var inst_31823 = figwheel.client.heads_up.clear.call(null);
var state_31863__$1 = state_31863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31863__$1,(28),inst_31823);
} else {
if((state_val_31864 === (34))){
var inst_31844 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31863__$1 = state_31863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31863__$1,(37),inst_31844);
} else {
if((state_val_31864 === (17))){
var inst_31803 = (state_31863[(2)]);
var inst_31804 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31805 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31804);
var state_31863__$1 = (function (){var statearr_31886 = state_31863;
(statearr_31886[(12)] = inst_31803);

return statearr_31886;
})();
var statearr_31887_31930 = state_31863__$1;
(statearr_31887_31930[(2)] = inst_31805);

(statearr_31887_31930[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (3))){
var inst_31795 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31863__$1 = state_31863;
if(inst_31795){
var statearr_31888_31931 = state_31863__$1;
(statearr_31888_31931[(1)] = (13));

} else {
var statearr_31889_31932 = state_31863__$1;
(statearr_31889_31932[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (12))){
var inst_31791 = (state_31863[(2)]);
var state_31863__$1 = state_31863;
var statearr_31890_31933 = state_31863__$1;
(statearr_31890_31933[(2)] = inst_31791);

(statearr_31890_31933[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (2))){
var inst_31778 = (state_31863[(10)]);
var inst_31778__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31863__$1 = (function (){var statearr_31891 = state_31863;
(statearr_31891[(10)] = inst_31778__$1);

return statearr_31891;
})();
if(cljs.core.truth_(inst_31778__$1)){
var statearr_31892_31934 = state_31863__$1;
(statearr_31892_31934[(1)] = (5));

} else {
var statearr_31893_31935 = state_31863__$1;
(statearr_31893_31935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (23))){
var inst_31821 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31863__$1 = state_31863;
if(inst_31821){
var statearr_31894_31936 = state_31863__$1;
(statearr_31894_31936[(1)] = (25));

} else {
var statearr_31895_31937 = state_31863__$1;
(statearr_31895_31937[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (35))){
var state_31863__$1 = state_31863;
var statearr_31896_31938 = state_31863__$1;
(statearr_31896_31938[(2)] = null);

(statearr_31896_31938[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (19))){
var inst_31816 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31863__$1 = state_31863;
if(inst_31816){
var statearr_31897_31939 = state_31863__$1;
(statearr_31897_31939[(1)] = (22));

} else {
var statearr_31898_31940 = state_31863__$1;
(statearr_31898_31940[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (11))){
var inst_31787 = (state_31863[(2)]);
var state_31863__$1 = state_31863;
var statearr_31899_31941 = state_31863__$1;
(statearr_31899_31941[(2)] = inst_31787);

(statearr_31899_31941[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (9))){
var inst_31789 = figwheel.client.heads_up.clear.call(null);
var state_31863__$1 = state_31863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31863__$1,(12),inst_31789);
} else {
if((state_val_31864 === (5))){
var inst_31780 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31863__$1 = state_31863;
var statearr_31900_31942 = state_31863__$1;
(statearr_31900_31942[(2)] = inst_31780);

(statearr_31900_31942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (14))){
var inst_31807 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31863__$1 = state_31863;
if(inst_31807){
var statearr_31901_31943 = state_31863__$1;
(statearr_31901_31943[(1)] = (18));

} else {
var statearr_31902_31944 = state_31863__$1;
(statearr_31902_31944[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (26))){
var inst_31833 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31863__$1 = state_31863;
if(inst_31833){
var statearr_31903_31945 = state_31863__$1;
(statearr_31903_31945[(1)] = (30));

} else {
var statearr_31904_31946 = state_31863__$1;
(statearr_31904_31946[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (16))){
var inst_31799 = (state_31863[(2)]);
var inst_31800 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31801 = figwheel.client.heads_up.display_exception.call(null,inst_31800);
var state_31863__$1 = (function (){var statearr_31905 = state_31863;
(statearr_31905[(13)] = inst_31799);

return statearr_31905;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31863__$1,(17),inst_31801);
} else {
if((state_val_31864 === (30))){
var inst_31835 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31836 = figwheel.client.heads_up.display_warning.call(null,inst_31835);
var state_31863__$1 = state_31863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31863__$1,(33),inst_31836);
} else {
if((state_val_31864 === (10))){
var inst_31793 = (state_31863[(2)]);
var state_31863__$1 = state_31863;
var statearr_31906_31947 = state_31863__$1;
(statearr_31906_31947[(2)] = inst_31793);

(statearr_31906_31947[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (18))){
var inst_31809 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31810 = figwheel.client.heads_up.display_exception.call(null,inst_31809);
var state_31863__$1 = state_31863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31863__$1,(21),inst_31810);
} else {
if((state_val_31864 === (37))){
var inst_31846 = (state_31863[(2)]);
var state_31863__$1 = state_31863;
var statearr_31907_31948 = state_31863__$1;
(statearr_31907_31948[(2)] = inst_31846);

(statearr_31907_31948[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (8))){
var inst_31785 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31863__$1 = state_31863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31863__$1,(11),inst_31785);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23316__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23316__auto____0 = (function (){
var statearr_31908 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31908[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23316__auto__);

(statearr_31908[(1)] = (1));

return statearr_31908;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23316__auto____1 = (function (state_31863){
while(true){
var ret_value__23317__auto__ = (function (){try{while(true){
var result__23318__auto__ = switch__23315__auto__.call(null,state_31863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23318__auto__;
}
break;
}
}catch (e31909){var ex__23319__auto__ = e31909;
var statearr_31910_31949 = state_31863;
(statearr_31910_31949[(2)] = ex__23319__auto__);


if(cljs.core.seq.call(null,(state_31863[(4)]))){
var statearr_31911_31950 = state_31863;
(statearr_31911_31950[(1)] = cljs.core.first.call(null,(state_31863[(4)])));

} else {
throw ex__23319__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31951 = state_31863;
state_31863 = G__31951;
continue;
} else {
return ret_value__23317__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23316__auto__ = function(state_31863){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23316__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23316__auto____1.call(this,state_31863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23316__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23316__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23316__auto__;
})()
})();
var state__23442__auto__ = (function (){var statearr_31912 = f__23441__auto__.call(null);
(statearr_31912[(6)] = c__23440__auto__);

return statearr_31912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23442__auto__);
}));

return c__23440__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23440__auto___31981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23441__auto__ = (function (){var switch__23315__auto__ = (function (state_31966){
var state_val_31967 = (state_31966[(1)]);
if((state_val_31967 === (1))){
var state_31966__$1 = state_31966;
var statearr_31968_31982 = state_31966__$1;
(statearr_31968_31982[(2)] = null);

(statearr_31968_31982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31967 === (2))){
var state_31966__$1 = state_31966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31966__$1,(4),ch);
} else {
if((state_val_31967 === (3))){
var inst_31964 = (state_31966[(2)]);
var state_31966__$1 = state_31966;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31966__$1,inst_31964);
} else {
if((state_val_31967 === (4))){
var inst_31954 = (state_31966[(7)]);
var inst_31954__$1 = (state_31966[(2)]);
var state_31966__$1 = (function (){var statearr_31969 = state_31966;
(statearr_31969[(7)] = inst_31954__$1);

return statearr_31969;
})();
if(cljs.core.truth_(inst_31954__$1)){
var statearr_31970_31983 = state_31966__$1;
(statearr_31970_31983[(1)] = (5));

} else {
var statearr_31971_31984 = state_31966__$1;
(statearr_31971_31984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31967 === (5))){
var inst_31954 = (state_31966[(7)]);
var inst_31956 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31954);
var state_31966__$1 = state_31966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31966__$1,(8),inst_31956);
} else {
if((state_val_31967 === (6))){
var state_31966__$1 = state_31966;
var statearr_31972_31985 = state_31966__$1;
(statearr_31972_31985[(2)] = null);

(statearr_31972_31985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31967 === (7))){
var inst_31962 = (state_31966[(2)]);
var state_31966__$1 = state_31966;
var statearr_31973_31986 = state_31966__$1;
(statearr_31973_31986[(2)] = inst_31962);

(statearr_31973_31986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31967 === (8))){
var inst_31958 = (state_31966[(2)]);
var state_31966__$1 = (function (){var statearr_31974 = state_31966;
(statearr_31974[(8)] = inst_31958);

return statearr_31974;
})();
var statearr_31975_31987 = state_31966__$1;
(statearr_31975_31987[(2)] = null);

(statearr_31975_31987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23316__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23316__auto____0 = (function (){
var statearr_31976 = [null,null,null,null,null,null,null,null,null];
(statearr_31976[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23316__auto__);

(statearr_31976[(1)] = (1));

return statearr_31976;
});
var figwheel$client$heads_up_plugin_$_state_machine__23316__auto____1 = (function (state_31966){
while(true){
var ret_value__23317__auto__ = (function (){try{while(true){
var result__23318__auto__ = switch__23315__auto__.call(null,state_31966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23318__auto__;
}
break;
}
}catch (e31977){var ex__23319__auto__ = e31977;
var statearr_31978_31988 = state_31966;
(statearr_31978_31988[(2)] = ex__23319__auto__);


if(cljs.core.seq.call(null,(state_31966[(4)]))){
var statearr_31979_31989 = state_31966;
(statearr_31979_31989[(1)] = cljs.core.first.call(null,(state_31966[(4)])));

} else {
throw ex__23319__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31990 = state_31966;
state_31966 = G__31990;
continue;
} else {
return ret_value__23317__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23316__auto__ = function(state_31966){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23316__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23316__auto____1.call(this,state_31966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23316__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23316__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23316__auto__;
})()
})();
var state__23442__auto__ = (function (){var statearr_31980 = f__23441__auto__.call(null);
(statearr_31980[(6)] = c__23440__auto___31981);

return statearr_31980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23442__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23440__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23441__auto__ = (function (){var switch__23315__auto__ = (function (state_31996){
var state_val_31997 = (state_31996[(1)]);
if((state_val_31997 === (1))){
var inst_31991 = cljs.core.async.timeout.call(null,(3000));
var state_31996__$1 = state_31996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31996__$1,(2),inst_31991);
} else {
if((state_val_31997 === (2))){
var inst_31993 = (state_31996[(2)]);
var inst_31994 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31996__$1 = (function (){var statearr_31998 = state_31996;
(statearr_31998[(7)] = inst_31993);

return statearr_31998;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31996__$1,inst_31994);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23316__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23316__auto____0 = (function (){
var statearr_31999 = [null,null,null,null,null,null,null,null];
(statearr_31999[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23316__auto__);

(statearr_31999[(1)] = (1));

return statearr_31999;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23316__auto____1 = (function (state_31996){
while(true){
var ret_value__23317__auto__ = (function (){try{while(true){
var result__23318__auto__ = switch__23315__auto__.call(null,state_31996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23318__auto__;
}
break;
}
}catch (e32000){var ex__23319__auto__ = e32000;
var statearr_32001_32004 = state_31996;
(statearr_32001_32004[(2)] = ex__23319__auto__);


if(cljs.core.seq.call(null,(state_31996[(4)]))){
var statearr_32002_32005 = state_31996;
(statearr_32002_32005[(1)] = cljs.core.first.call(null,(state_31996[(4)])));

} else {
throw ex__23319__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32006 = state_31996;
state_31996 = G__32006;
continue;
} else {
return ret_value__23317__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23316__auto__ = function(state_31996){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23316__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23316__auto____1.call(this,state_31996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23316__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23316__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23316__auto__;
})()
})();
var state__23442__auto__ = (function (){var statearr_32003 = f__23441__auto__.call(null);
(statearr_32003[(6)] = c__23440__auto__);

return statearr_32003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23442__auto__);
}));

return c__23440__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5753__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5753__auto__)){
var figwheel_version = temp__5753__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23440__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23441__auto__ = (function (){var switch__23315__auto__ = (function (state_32013){
var state_val_32014 = (state_32013[(1)]);
if((state_val_32014 === (1))){
var inst_32007 = cljs.core.async.timeout.call(null,(2000));
var state_32013__$1 = state_32013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32013__$1,(2),inst_32007);
} else {
if((state_val_32014 === (2))){
var inst_32009 = (state_32013[(2)]);
var inst_32010 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_32011 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_32010);
var state_32013__$1 = (function (){var statearr_32015 = state_32013;
(statearr_32015[(7)] = inst_32009);

return statearr_32015;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32013__$1,inst_32011);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23316__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23316__auto____0 = (function (){
var statearr_32016 = [null,null,null,null,null,null,null,null];
(statearr_32016[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23316__auto__);

(statearr_32016[(1)] = (1));

return statearr_32016;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23316__auto____1 = (function (state_32013){
while(true){
var ret_value__23317__auto__ = (function (){try{while(true){
var result__23318__auto__ = switch__23315__auto__.call(null,state_32013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23318__auto__;
}
break;
}
}catch (e32017){var ex__23319__auto__ = e32017;
var statearr_32018_32021 = state_32013;
(statearr_32018_32021[(2)] = ex__23319__auto__);


if(cljs.core.seq.call(null,(state_32013[(4)]))){
var statearr_32019_32022 = state_32013;
(statearr_32019_32022[(1)] = cljs.core.first.call(null,(state_32013[(4)])));

} else {
throw ex__23319__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32023 = state_32013;
state_32013 = G__32023;
continue;
} else {
return ret_value__23317__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23316__auto__ = function(state_32013){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23316__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23316__auto____1.call(this,state_32013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23316__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23316__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23316__auto__;
})()
})();
var state__23442__auto__ = (function (){var statearr_32020 = f__23441__auto__.call(null);
(statearr_32020[(6)] = c__23440__auto__);

return statearr_32020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23442__auto__);
}));

return c__23440__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__32024){
var map__32025 = p__32024;
var map__32025__$1 = cljs.core.__destructure_map.call(null,map__32025);
var file = cljs.core.get.call(null,map__32025__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__32025__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__32025__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__32026 = "";
var G__32026__$1 = (cljs.core.truth_(file)?[G__32026,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__32026);
var G__32026__$2 = (cljs.core.truth_(line)?[G__32026__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__32026__$1);
if(cljs.core.truth_((function (){var and__4251__auto__ = line;
if(cljs.core.truth_(and__4251__auto__)){
return column;
} else {
return and__4251__auto__;
}
})())){
return [G__32026__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__32026__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32027){
var map__32028 = p__32027;
var map__32028__$1 = cljs.core.__destructure_map.call(null,map__32028);
var ed = map__32028__$1;
var exception_data = cljs.core.get.call(null,map__32028__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__32028__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_32030 = (function (){var G__32029 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32029)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__32029;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_32030);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32031){
var map__32032 = p__32031;
var map__32032__$1 = cljs.core.__destructure_map.call(null,map__32032);
var w = map__32032__$1;
var message = cljs.core.get.call(null,map__32032__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"../static/cljs/dev/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"../static/cljs/dev/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4251__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4251__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4251__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__32033 = cljs.core.seq.call(null,plugins);
var chunk__32034 = null;
var count__32035 = (0);
var i__32036 = (0);
while(true){
if((i__32036 < count__32035)){
var vec__32043 = cljs.core._nth.call(null,chunk__32034,i__32036);
var k = cljs.core.nth.call(null,vec__32043,(0),null);
var plugin = cljs.core.nth.call(null,vec__32043,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32049 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32033,chunk__32034,count__32035,i__32036,pl_32049,vec__32043,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32049.call(null,msg_hist);
});})(seq__32033,chunk__32034,count__32035,i__32036,pl_32049,vec__32043,k,plugin))
);
} else {
}


var G__32050 = seq__32033;
var G__32051 = chunk__32034;
var G__32052 = count__32035;
var G__32053 = (i__32036 + (1));
seq__32033 = G__32050;
chunk__32034 = G__32051;
count__32035 = G__32052;
i__32036 = G__32053;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__32033);
if(temp__5753__auto__){
var seq__32033__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32033__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__32033__$1);
var G__32054 = cljs.core.chunk_rest.call(null,seq__32033__$1);
var G__32055 = c__4679__auto__;
var G__32056 = cljs.core.count.call(null,c__4679__auto__);
var G__32057 = (0);
seq__32033 = G__32054;
chunk__32034 = G__32055;
count__32035 = G__32056;
i__32036 = G__32057;
continue;
} else {
var vec__32046 = cljs.core.first.call(null,seq__32033__$1);
var k = cljs.core.nth.call(null,vec__32046,(0),null);
var plugin = cljs.core.nth.call(null,vec__32046,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32058 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32033,chunk__32034,count__32035,i__32036,pl_32058,vec__32046,k,plugin,seq__32033__$1,temp__5753__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32058.call(null,msg_hist);
});})(seq__32033,chunk__32034,count__32035,i__32036,pl_32058,vec__32046,k,plugin,seq__32033__$1,temp__5753__auto__))
);
} else {
}


var G__32059 = cljs.core.next.call(null,seq__32033__$1);
var G__32060 = null;
var G__32061 = (0);
var G__32062 = (0);
seq__32033 = G__32059;
chunk__32034 = G__32060;
count__32035 = G__32061;
i__32036 = G__32062;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__32064 = arguments.length;
switch (G__32064) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((((!((goog.dependencies_ == null)))) || ((((!((goog.debugLoader_ == null)))) && ((!((goog.debugLoader_.dependencies_ == null)))))))){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__32065_32070 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__32066_32071 = null;
var count__32067_32072 = (0);
var i__32068_32073 = (0);
while(true){
if((i__32068_32073 < count__32067_32072)){
var msg_32074 = cljs.core._nth.call(null,chunk__32066_32071,i__32068_32073);
figwheel.client.socket.handle_incoming_message.call(null,msg_32074);


var G__32075 = seq__32065_32070;
var G__32076 = chunk__32066_32071;
var G__32077 = count__32067_32072;
var G__32078 = (i__32068_32073 + (1));
seq__32065_32070 = G__32075;
chunk__32066_32071 = G__32076;
count__32067_32072 = G__32077;
i__32068_32073 = G__32078;
continue;
} else {
var temp__5753__auto___32079 = cljs.core.seq.call(null,seq__32065_32070);
if(temp__5753__auto___32079){
var seq__32065_32080__$1 = temp__5753__auto___32079;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32065_32080__$1)){
var c__4679__auto___32081 = cljs.core.chunk_first.call(null,seq__32065_32080__$1);
var G__32082 = cljs.core.chunk_rest.call(null,seq__32065_32080__$1);
var G__32083 = c__4679__auto___32081;
var G__32084 = cljs.core.count.call(null,c__4679__auto___32081);
var G__32085 = (0);
seq__32065_32070 = G__32082;
chunk__32066_32071 = G__32083;
count__32067_32072 = G__32084;
i__32068_32073 = G__32085;
continue;
} else {
var msg_32086 = cljs.core.first.call(null,seq__32065_32080__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_32086);


var G__32087 = cljs.core.next.call(null,seq__32065_32080__$1);
var G__32088 = null;
var G__32089 = (0);
var G__32090 = (0);
seq__32065_32070 = G__32087;
chunk__32066_32071 = G__32088;
count__32067_32072 = G__32089;
i__32068_32073 = G__32090;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
} else {
return null;
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4870__auto__ = [];
var len__4864__auto___32094 = arguments.length;
var i__4865__auto___32095 = (0);
while(true){
if((i__4865__auto___32095 < len__4864__auto___32094)){
args__4870__auto__.push((arguments[i__4865__auto___32095]));

var G__32096 = (i__4865__auto___32095 + (1));
i__4865__auto___32095 = G__32096;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32092){
var map__32093 = p__32092;
var map__32093__$1 = cljs.core.__destructure_map.call(null,map__32093);
var opts = map__32093__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32091){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32091));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,figwheel.client.goog$module$goog$object.get.call(null,window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e32097){if((e32097 instanceof Error)){
var e = e32097;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e32097;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__32098){
var map__32099 = p__32098;
var map__32099__$1 = cljs.core.__destructure_map.call(null,map__32099);
var msg_name = cljs.core.get.call(null,map__32099__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1658997509997
