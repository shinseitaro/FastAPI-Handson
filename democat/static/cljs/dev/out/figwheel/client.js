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
}catch (e33269){if((e33269 instanceof Error)){
var e = e33269;
return "Error: Unable to stringify";
} else {
throw e33269;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__33272 = arguments.length;
switch (G__33272) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__33270_SHARP_){
if(typeof p1__33270_SHARP_ === 'string'){
return p1__33270_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__33270_SHARP_);
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
var len__4864__auto___33275 = arguments.length;
var i__4865__auto___33276 = (0);
while(true){
if((i__4865__auto___33276 < len__4864__auto___33275)){
args__4870__auto__.push((arguments[i__4865__auto___33276]));

var G__33277 = (i__4865__auto___33276 + (1));
i__4865__auto___33276 = G__33277;
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
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq33274){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33274));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4870__auto__ = [];
var len__4864__auto___33279 = arguments.length;
var i__4865__auto___33280 = (0);
while(true){
if((i__4865__auto___33280 < len__4864__auto___33279)){
args__4870__auto__.push((arguments[i__4865__auto___33280]));

var G__33281 = (i__4865__auto___33280 + (1));
i__4865__auto___33280 = G__33281;
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
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq33278){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33278));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__33282){
var map__33283 = p__33282;
var map__33283__$1 = cljs.core.__destructure_map.call(null,map__33283);
var message = cljs.core.get.call(null,map__33283__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__33283__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__29179__auto___33362 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29180__auto__ = (function (){var switch__29105__auto__ = (function (state_33333){
var state_val_33334 = (state_33333[(1)]);
if((state_val_33334 === (7))){
var inst_33329 = (state_33333[(2)]);
var state_33333__$1 = state_33333;
var statearr_33335_33363 = state_33333__$1;
(statearr_33335_33363[(2)] = inst_33329);

(statearr_33335_33363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33334 === (1))){
var state_33333__$1 = state_33333;
var statearr_33336_33364 = state_33333__$1;
(statearr_33336_33364[(2)] = null);

(statearr_33336_33364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33334 === (4))){
var inst_33286 = (state_33333[(7)]);
var inst_33286__$1 = (state_33333[(2)]);
var state_33333__$1 = (function (){var statearr_33337 = state_33333;
(statearr_33337[(7)] = inst_33286__$1);

return statearr_33337;
})();
if(cljs.core.truth_(inst_33286__$1)){
var statearr_33338_33365 = state_33333__$1;
(statearr_33338_33365[(1)] = (5));

} else {
var statearr_33339_33366 = state_33333__$1;
(statearr_33339_33366[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33334 === (15))){
var inst_33293 = (state_33333[(8)]);
var inst_33308 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33293);
var inst_33309 = cljs.core.first.call(null,inst_33308);
var inst_33310 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_33309);
var inst_33311 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33310)].join('');
var inst_33312 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_33311);
var state_33333__$1 = state_33333;
var statearr_33340_33367 = state_33333__$1;
(statearr_33340_33367[(2)] = inst_33312);

(statearr_33340_33367[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33334 === (13))){
var inst_33317 = (state_33333[(2)]);
var state_33333__$1 = state_33333;
var statearr_33341_33368 = state_33333__$1;
(statearr_33341_33368[(2)] = inst_33317);

(statearr_33341_33368[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33334 === (6))){
var state_33333__$1 = state_33333;
var statearr_33342_33369 = state_33333__$1;
(statearr_33342_33369[(2)] = null);

(statearr_33342_33369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33334 === (17))){
var inst_33315 = (state_33333[(2)]);
var state_33333__$1 = state_33333;
var statearr_33343_33370 = state_33333__$1;
(statearr_33343_33370[(2)] = inst_33315);

(statearr_33343_33370[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33334 === (3))){
var inst_33331 = (state_33333[(2)]);
var state_33333__$1 = state_33333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33333__$1,inst_33331);
} else {
if((state_val_33334 === (12))){
var inst_33292 = (state_33333[(9)]);
var inst_33306 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_33292,opts);
var state_33333__$1 = state_33333;
if(inst_33306){
var statearr_33344_33371 = state_33333__$1;
(statearr_33344_33371[(1)] = (15));

} else {
var statearr_33345_33372 = state_33333__$1;
(statearr_33345_33372[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33334 === (2))){
var state_33333__$1 = state_33333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33333__$1,(4),ch);
} else {
if((state_val_33334 === (11))){
var inst_33293 = (state_33333[(8)]);
var inst_33298 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33299 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_33293);
var inst_33300 = cljs.core.async.timeout.call(null,(1000));
var inst_33301 = [inst_33299,inst_33300];
var inst_33302 = (new cljs.core.PersistentVector(null,2,(5),inst_33298,inst_33301,null));
var state_33333__$1 = state_33333;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33333__$1,(14),inst_33302);
} else {
if((state_val_33334 === (9))){
var inst_33293 = (state_33333[(8)]);
var inst_33319 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_33320 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33293);
var inst_33321 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33320);
var inst_33322 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33321)].join('');
var inst_33323 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_33322);
var state_33333__$1 = (function (){var statearr_33346 = state_33333;
(statearr_33346[(10)] = inst_33319);

return statearr_33346;
})();
var statearr_33347_33373 = state_33333__$1;
(statearr_33347_33373[(2)] = inst_33323);

(statearr_33347_33373[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33334 === (5))){
var inst_33286 = (state_33333[(7)]);
var inst_33288 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_33289 = (new cljs.core.PersistentArrayMap(null,2,inst_33288,null));
var inst_33290 = (new cljs.core.PersistentHashSet(null,inst_33289,null));
var inst_33291 = figwheel.client.focus_msgs.call(null,inst_33290,inst_33286);
var inst_33292 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_33291);
var inst_33293 = cljs.core.first.call(null,inst_33291);
var inst_33294 = figwheel.client.autoload_QMARK_.call(null);
var state_33333__$1 = (function (){var statearr_33348 = state_33333;
(statearr_33348[(9)] = inst_33292);

(statearr_33348[(8)] = inst_33293);

return statearr_33348;
})();
if(cljs.core.truth_(inst_33294)){
var statearr_33349_33374 = state_33333__$1;
(statearr_33349_33374[(1)] = (8));

} else {
var statearr_33350_33375 = state_33333__$1;
(statearr_33350_33375[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33334 === (14))){
var inst_33304 = (state_33333[(2)]);
var state_33333__$1 = state_33333;
var statearr_33351_33376 = state_33333__$1;
(statearr_33351_33376[(2)] = inst_33304);

(statearr_33351_33376[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33334 === (16))){
var state_33333__$1 = state_33333;
var statearr_33352_33377 = state_33333__$1;
(statearr_33352_33377[(2)] = null);

(statearr_33352_33377[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33334 === (10))){
var inst_33325 = (state_33333[(2)]);
var state_33333__$1 = (function (){var statearr_33353 = state_33333;
(statearr_33353[(11)] = inst_33325);

return statearr_33353;
})();
var statearr_33354_33378 = state_33333__$1;
(statearr_33354_33378[(2)] = null);

(statearr_33354_33378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33334 === (8))){
var inst_33292 = (state_33333[(9)]);
var inst_33296 = figwheel.client.reload_file_state_QMARK_.call(null,inst_33292,opts);
var state_33333__$1 = state_33333;
if(cljs.core.truth_(inst_33296)){
var statearr_33355_33379 = state_33333__$1;
(statearr_33355_33379[(1)] = (11));

} else {
var statearr_33356_33380 = state_33333__$1;
(statearr_33356_33380[(1)] = (12));

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
var figwheel$client$file_reloader_plugin_$_state_machine__29106__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29106__auto____0 = (function (){
var statearr_33357 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33357[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29106__auto__);

(statearr_33357[(1)] = (1));

return statearr_33357;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29106__auto____1 = (function (state_33333){
while(true){
var ret_value__29107__auto__ = (function (){try{while(true){
var result__29108__auto__ = switch__29105__auto__.call(null,state_33333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29108__auto__;
}
break;
}
}catch (e33358){var ex__29109__auto__ = e33358;
var statearr_33359_33381 = state_33333;
(statearr_33359_33381[(2)] = ex__29109__auto__);


if(cljs.core.seq.call(null,(state_33333[(4)]))){
var statearr_33360_33382 = state_33333;
(statearr_33360_33382[(1)] = cljs.core.first.call(null,(state_33333[(4)])));

} else {
throw ex__29109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33383 = state_33333;
state_33333 = G__33383;
continue;
} else {
return ret_value__29107__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29106__auto__ = function(state_33333){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29106__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29106__auto____1.call(this,state_33333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29106__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29106__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29106__auto__;
})()
})();
var state__29181__auto__ = (function (){var statearr_33361 = f__29180__auto__.call(null);
(statearr_33361[(6)] = c__29179__auto___33362);

return statearr_33361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29181__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__33384_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__33384_SHARP_));
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
var base_path_33390 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33386 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33387 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33388 = true;
var _STAR_print_fn_STAR__temp_val__33389 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33388);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33389);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33387);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33386);
}}catch (e33385){if((e33385 instanceof Error)){
var e = e33385;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_33390], null));
} else {
var e = e33385;
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__33391){
var map__33392 = p__33391;
var map__33392__$1 = cljs.core.__destructure_map.call(null,map__33392);
var opts = map__33392__$1;
var build_id = cljs.core.get.call(null,map__33392__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__33393){
var vec__33394 = p__33393;
var seq__33395 = cljs.core.seq.call(null,vec__33394);
var first__33396 = cljs.core.first.call(null,seq__33395);
var seq__33395__$1 = cljs.core.next.call(null,seq__33395);
var map__33397 = first__33396;
var map__33397__$1 = cljs.core.__destructure_map.call(null,map__33397);
var msg = map__33397__$1;
var msg_name = cljs.core.get.call(null,map__33397__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33395__$1;
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
return (function (p__33398){
var vec__33399 = p__33398;
var seq__33400 = cljs.core.seq.call(null,vec__33399);
var first__33401 = cljs.core.first.call(null,seq__33400);
var seq__33400__$1 = cljs.core.next.call(null,seq__33400);
var map__33402 = first__33401;
var map__33402__$1 = cljs.core.__destructure_map.call(null,map__33402);
var msg = map__33402__$1;
var msg_name = cljs.core.get.call(null,map__33402__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33400__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__33403){
var map__33404 = p__33403;
var map__33404__$1 = cljs.core.__destructure_map.call(null,map__33404);
var on_compile_warning = cljs.core.get.call(null,map__33404__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__33404__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__33405){
var vec__33406 = p__33405;
var seq__33407 = cljs.core.seq.call(null,vec__33406);
var first__33408 = cljs.core.first.call(null,seq__33407);
var seq__33407__$1 = cljs.core.next.call(null,seq__33407);
var map__33409 = first__33408;
var map__33409__$1 = cljs.core.__destructure_map.call(null,map__33409);
var msg = map__33409__$1;
var msg_name = cljs.core.get.call(null,map__33409__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33407__$1;
var pred__33410 = cljs.core._EQ_;
var expr__33411 = msg_name;
if(cljs.core.truth_(pred__33410.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__33411))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__33410.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__33411))){
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
var c__29179__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29180__auto__ = (function (){var switch__29105__auto__ = (function (state_33500){
var state_val_33501 = (state_33500[(1)]);
if((state_val_33501 === (7))){
var inst_33420 = (state_33500[(2)]);
var state_33500__$1 = state_33500;
if(cljs.core.truth_(inst_33420)){
var statearr_33502_33550 = state_33500__$1;
(statearr_33502_33550[(1)] = (8));

} else {
var statearr_33503_33551 = state_33500__$1;
(statearr_33503_33551[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (20))){
var inst_33494 = (state_33500[(2)]);
var state_33500__$1 = state_33500;
var statearr_33504_33552 = state_33500__$1;
(statearr_33504_33552[(2)] = inst_33494);

(statearr_33504_33552[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (27))){
var inst_33490 = (state_33500[(2)]);
var state_33500__$1 = state_33500;
var statearr_33505_33553 = state_33500__$1;
(statearr_33505_33553[(2)] = inst_33490);

(statearr_33505_33553[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (1))){
var inst_33413 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_33500__$1 = state_33500;
if(cljs.core.truth_(inst_33413)){
var statearr_33506_33554 = state_33500__$1;
(statearr_33506_33554[(1)] = (2));

} else {
var statearr_33507_33555 = state_33500__$1;
(statearr_33507_33555[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (24))){
var inst_33492 = (state_33500[(2)]);
var state_33500__$1 = state_33500;
var statearr_33508_33556 = state_33500__$1;
(statearr_33508_33556[(2)] = inst_33492);

(statearr_33508_33556[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (4))){
var inst_33498 = (state_33500[(2)]);
var state_33500__$1 = state_33500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33500__$1,inst_33498);
} else {
if((state_val_33501 === (15))){
var inst_33496 = (state_33500[(2)]);
var state_33500__$1 = state_33500;
var statearr_33509_33557 = state_33500__$1;
(statearr_33509_33557[(2)] = inst_33496);

(statearr_33509_33557[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (21))){
var inst_33449 = (state_33500[(2)]);
var inst_33450 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33451 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33450);
var state_33500__$1 = (function (){var statearr_33510 = state_33500;
(statearr_33510[(7)] = inst_33449);

return statearr_33510;
})();
var statearr_33511_33558 = state_33500__$1;
(statearr_33511_33558[(2)] = inst_33451);

(statearr_33511_33558[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (31))){
var inst_33479 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_33500__$1 = state_33500;
if(inst_33479){
var statearr_33512_33559 = state_33500__$1;
(statearr_33512_33559[(1)] = (34));

} else {
var statearr_33513_33560 = state_33500__$1;
(statearr_33513_33560[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (32))){
var inst_33488 = (state_33500[(2)]);
var state_33500__$1 = state_33500;
var statearr_33514_33561 = state_33500__$1;
(statearr_33514_33561[(2)] = inst_33488);

(statearr_33514_33561[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (33))){
var inst_33475 = (state_33500[(2)]);
var inst_33476 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33477 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33476);
var state_33500__$1 = (function (){var statearr_33515 = state_33500;
(statearr_33515[(8)] = inst_33475);

return statearr_33515;
})();
var statearr_33516_33562 = state_33500__$1;
(statearr_33516_33562[(2)] = inst_33477);

(statearr_33516_33562[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (13))){
var inst_33434 = figwheel.client.heads_up.clear.call(null);
var state_33500__$1 = state_33500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33500__$1,(16),inst_33434);
} else {
if((state_val_33501 === (22))){
var inst_33455 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33456 = figwheel.client.heads_up.append_warning_message.call(null,inst_33455);
var state_33500__$1 = state_33500;
var statearr_33517_33563 = state_33500__$1;
(statearr_33517_33563[(2)] = inst_33456);

(statearr_33517_33563[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (36))){
var inst_33486 = (state_33500[(2)]);
var state_33500__$1 = state_33500;
var statearr_33518_33564 = state_33500__$1;
(statearr_33518_33564[(2)] = inst_33486);

(statearr_33518_33564[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (29))){
var inst_33466 = (state_33500[(2)]);
var inst_33467 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33468 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33467);
var state_33500__$1 = (function (){var statearr_33519 = state_33500;
(statearr_33519[(9)] = inst_33466);

return statearr_33519;
})();
var statearr_33520_33565 = state_33500__$1;
(statearr_33520_33565[(2)] = inst_33468);

(statearr_33520_33565[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (6))){
var inst_33415 = (state_33500[(10)]);
var state_33500__$1 = state_33500;
var statearr_33521_33566 = state_33500__$1;
(statearr_33521_33566[(2)] = inst_33415);

(statearr_33521_33566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (28))){
var inst_33462 = (state_33500[(2)]);
var inst_33463 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33464 = figwheel.client.heads_up.display_warning.call(null,inst_33463);
var state_33500__$1 = (function (){var statearr_33522 = state_33500;
(statearr_33522[(11)] = inst_33462);

return statearr_33522;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33500__$1,(29),inst_33464);
} else {
if((state_val_33501 === (25))){
var inst_33460 = figwheel.client.heads_up.clear.call(null);
var state_33500__$1 = state_33500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33500__$1,(28),inst_33460);
} else {
if((state_val_33501 === (34))){
var inst_33481 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33500__$1 = state_33500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33500__$1,(37),inst_33481);
} else {
if((state_val_33501 === (17))){
var inst_33440 = (state_33500[(2)]);
var inst_33441 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33442 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33441);
var state_33500__$1 = (function (){var statearr_33523 = state_33500;
(statearr_33523[(12)] = inst_33440);

return statearr_33523;
})();
var statearr_33524_33567 = state_33500__$1;
(statearr_33524_33567[(2)] = inst_33442);

(statearr_33524_33567[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (3))){
var inst_33432 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_33500__$1 = state_33500;
if(inst_33432){
var statearr_33525_33568 = state_33500__$1;
(statearr_33525_33568[(1)] = (13));

} else {
var statearr_33526_33569 = state_33500__$1;
(statearr_33526_33569[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (12))){
var inst_33428 = (state_33500[(2)]);
var state_33500__$1 = state_33500;
var statearr_33527_33570 = state_33500__$1;
(statearr_33527_33570[(2)] = inst_33428);

(statearr_33527_33570[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (2))){
var inst_33415 = (state_33500[(10)]);
var inst_33415__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_33500__$1 = (function (){var statearr_33528 = state_33500;
(statearr_33528[(10)] = inst_33415__$1);

return statearr_33528;
})();
if(cljs.core.truth_(inst_33415__$1)){
var statearr_33529_33571 = state_33500__$1;
(statearr_33529_33571[(1)] = (5));

} else {
var statearr_33530_33572 = state_33500__$1;
(statearr_33530_33572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (23))){
var inst_33458 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_33500__$1 = state_33500;
if(inst_33458){
var statearr_33531_33573 = state_33500__$1;
(statearr_33531_33573[(1)] = (25));

} else {
var statearr_33532_33574 = state_33500__$1;
(statearr_33532_33574[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (35))){
var state_33500__$1 = state_33500;
var statearr_33533_33575 = state_33500__$1;
(statearr_33533_33575[(2)] = null);

(statearr_33533_33575[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (19))){
var inst_33453 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_33500__$1 = state_33500;
if(inst_33453){
var statearr_33534_33576 = state_33500__$1;
(statearr_33534_33576[(1)] = (22));

} else {
var statearr_33535_33577 = state_33500__$1;
(statearr_33535_33577[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (11))){
var inst_33424 = (state_33500[(2)]);
var state_33500__$1 = state_33500;
var statearr_33536_33578 = state_33500__$1;
(statearr_33536_33578[(2)] = inst_33424);

(statearr_33536_33578[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (9))){
var inst_33426 = figwheel.client.heads_up.clear.call(null);
var state_33500__$1 = state_33500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33500__$1,(12),inst_33426);
} else {
if((state_val_33501 === (5))){
var inst_33417 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_33500__$1 = state_33500;
var statearr_33537_33579 = state_33500__$1;
(statearr_33537_33579[(2)] = inst_33417);

(statearr_33537_33579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (14))){
var inst_33444 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_33500__$1 = state_33500;
if(inst_33444){
var statearr_33538_33580 = state_33500__$1;
(statearr_33538_33580[(1)] = (18));

} else {
var statearr_33539_33581 = state_33500__$1;
(statearr_33539_33581[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (26))){
var inst_33470 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_33500__$1 = state_33500;
if(inst_33470){
var statearr_33540_33582 = state_33500__$1;
(statearr_33540_33582[(1)] = (30));

} else {
var statearr_33541_33583 = state_33500__$1;
(statearr_33541_33583[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (16))){
var inst_33436 = (state_33500[(2)]);
var inst_33437 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33438 = figwheel.client.heads_up.display_exception.call(null,inst_33437);
var state_33500__$1 = (function (){var statearr_33542 = state_33500;
(statearr_33542[(13)] = inst_33436);

return statearr_33542;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33500__$1,(17),inst_33438);
} else {
if((state_val_33501 === (30))){
var inst_33472 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33473 = figwheel.client.heads_up.display_warning.call(null,inst_33472);
var state_33500__$1 = state_33500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33500__$1,(33),inst_33473);
} else {
if((state_val_33501 === (10))){
var inst_33430 = (state_33500[(2)]);
var state_33500__$1 = state_33500;
var statearr_33543_33584 = state_33500__$1;
(statearr_33543_33584[(2)] = inst_33430);

(statearr_33543_33584[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (18))){
var inst_33446 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33447 = figwheel.client.heads_up.display_exception.call(null,inst_33446);
var state_33500__$1 = state_33500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33500__$1,(21),inst_33447);
} else {
if((state_val_33501 === (37))){
var inst_33483 = (state_33500[(2)]);
var state_33500__$1 = state_33500;
var statearr_33544_33585 = state_33500__$1;
(statearr_33544_33585[(2)] = inst_33483);

(statearr_33544_33585[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (8))){
var inst_33422 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33500__$1 = state_33500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33500__$1,(11),inst_33422);
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
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29106__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29106__auto____0 = (function (){
var statearr_33545 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33545[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29106__auto__);

(statearr_33545[(1)] = (1));

return statearr_33545;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29106__auto____1 = (function (state_33500){
while(true){
var ret_value__29107__auto__ = (function (){try{while(true){
var result__29108__auto__ = switch__29105__auto__.call(null,state_33500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29108__auto__;
}
break;
}
}catch (e33546){var ex__29109__auto__ = e33546;
var statearr_33547_33586 = state_33500;
(statearr_33547_33586[(2)] = ex__29109__auto__);


if(cljs.core.seq.call(null,(state_33500[(4)]))){
var statearr_33548_33587 = state_33500;
(statearr_33548_33587[(1)] = cljs.core.first.call(null,(state_33500[(4)])));

} else {
throw ex__29109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33588 = state_33500;
state_33500 = G__33588;
continue;
} else {
return ret_value__29107__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29106__auto__ = function(state_33500){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29106__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29106__auto____1.call(this,state_33500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29106__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29106__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29106__auto__;
})()
})();
var state__29181__auto__ = (function (){var statearr_33549 = f__29180__auto__.call(null);
(statearr_33549[(6)] = c__29179__auto__);

return statearr_33549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29181__auto__);
}));

return c__29179__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29179__auto___33618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29180__auto__ = (function (){var switch__29105__auto__ = (function (state_33603){
var state_val_33604 = (state_33603[(1)]);
if((state_val_33604 === (1))){
var state_33603__$1 = state_33603;
var statearr_33605_33619 = state_33603__$1;
(statearr_33605_33619[(2)] = null);

(statearr_33605_33619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33604 === (2))){
var state_33603__$1 = state_33603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33603__$1,(4),ch);
} else {
if((state_val_33604 === (3))){
var inst_33601 = (state_33603[(2)]);
var state_33603__$1 = state_33603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33603__$1,inst_33601);
} else {
if((state_val_33604 === (4))){
var inst_33591 = (state_33603[(7)]);
var inst_33591__$1 = (state_33603[(2)]);
var state_33603__$1 = (function (){var statearr_33606 = state_33603;
(statearr_33606[(7)] = inst_33591__$1);

return statearr_33606;
})();
if(cljs.core.truth_(inst_33591__$1)){
var statearr_33607_33620 = state_33603__$1;
(statearr_33607_33620[(1)] = (5));

} else {
var statearr_33608_33621 = state_33603__$1;
(statearr_33608_33621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33604 === (5))){
var inst_33591 = (state_33603[(7)]);
var inst_33593 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_33591);
var state_33603__$1 = state_33603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33603__$1,(8),inst_33593);
} else {
if((state_val_33604 === (6))){
var state_33603__$1 = state_33603;
var statearr_33609_33622 = state_33603__$1;
(statearr_33609_33622[(2)] = null);

(statearr_33609_33622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33604 === (7))){
var inst_33599 = (state_33603[(2)]);
var state_33603__$1 = state_33603;
var statearr_33610_33623 = state_33603__$1;
(statearr_33610_33623[(2)] = inst_33599);

(statearr_33610_33623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33604 === (8))){
var inst_33595 = (state_33603[(2)]);
var state_33603__$1 = (function (){var statearr_33611 = state_33603;
(statearr_33611[(8)] = inst_33595);

return statearr_33611;
})();
var statearr_33612_33624 = state_33603__$1;
(statearr_33612_33624[(2)] = null);

(statearr_33612_33624[(1)] = (2));


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
var figwheel$client$heads_up_plugin_$_state_machine__29106__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29106__auto____0 = (function (){
var statearr_33613 = [null,null,null,null,null,null,null,null,null];
(statearr_33613[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29106__auto__);

(statearr_33613[(1)] = (1));

return statearr_33613;
});
var figwheel$client$heads_up_plugin_$_state_machine__29106__auto____1 = (function (state_33603){
while(true){
var ret_value__29107__auto__ = (function (){try{while(true){
var result__29108__auto__ = switch__29105__auto__.call(null,state_33603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29108__auto__;
}
break;
}
}catch (e33614){var ex__29109__auto__ = e33614;
var statearr_33615_33625 = state_33603;
(statearr_33615_33625[(2)] = ex__29109__auto__);


if(cljs.core.seq.call(null,(state_33603[(4)]))){
var statearr_33616_33626 = state_33603;
(statearr_33616_33626[(1)] = cljs.core.first.call(null,(state_33603[(4)])));

} else {
throw ex__29109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33627 = state_33603;
state_33603 = G__33627;
continue;
} else {
return ret_value__29107__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29106__auto__ = function(state_33603){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29106__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29106__auto____1.call(this,state_33603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29106__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29106__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29106__auto__;
})()
})();
var state__29181__auto__ = (function (){var statearr_33617 = f__29180__auto__.call(null);
(statearr_33617[(6)] = c__29179__auto___33618);

return statearr_33617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29181__auto__);
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
var c__29179__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29180__auto__ = (function (){var switch__29105__auto__ = (function (state_33633){
var state_val_33634 = (state_33633[(1)]);
if((state_val_33634 === (1))){
var inst_33628 = cljs.core.async.timeout.call(null,(3000));
var state_33633__$1 = state_33633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33633__$1,(2),inst_33628);
} else {
if((state_val_33634 === (2))){
var inst_33630 = (state_33633[(2)]);
var inst_33631 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_33633__$1 = (function (){var statearr_33635 = state_33633;
(statearr_33635[(7)] = inst_33630);

return statearr_33635;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33633__$1,inst_33631);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29106__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29106__auto____0 = (function (){
var statearr_33636 = [null,null,null,null,null,null,null,null];
(statearr_33636[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29106__auto__);

(statearr_33636[(1)] = (1));

return statearr_33636;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29106__auto____1 = (function (state_33633){
while(true){
var ret_value__29107__auto__ = (function (){try{while(true){
var result__29108__auto__ = switch__29105__auto__.call(null,state_33633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29108__auto__;
}
break;
}
}catch (e33637){var ex__29109__auto__ = e33637;
var statearr_33638_33641 = state_33633;
(statearr_33638_33641[(2)] = ex__29109__auto__);


if(cljs.core.seq.call(null,(state_33633[(4)]))){
var statearr_33639_33642 = state_33633;
(statearr_33639_33642[(1)] = cljs.core.first.call(null,(state_33633[(4)])));

} else {
throw ex__29109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33643 = state_33633;
state_33633 = G__33643;
continue;
} else {
return ret_value__29107__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29106__auto__ = function(state_33633){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29106__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29106__auto____1.call(this,state_33633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29106__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29106__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29106__auto__;
})()
})();
var state__29181__auto__ = (function (){var statearr_33640 = f__29180__auto__.call(null);
(statearr_33640[(6)] = c__29179__auto__);

return statearr_33640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29181__auto__);
}));

return c__29179__auto__;
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
var c__29179__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29180__auto__ = (function (){var switch__29105__auto__ = (function (state_33650){
var state_val_33651 = (state_33650[(1)]);
if((state_val_33651 === (1))){
var inst_33644 = cljs.core.async.timeout.call(null,(2000));
var state_33650__$1 = state_33650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33650__$1,(2),inst_33644);
} else {
if((state_val_33651 === (2))){
var inst_33646 = (state_33650[(2)]);
var inst_33647 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_33648 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_33647);
var state_33650__$1 = (function (){var statearr_33652 = state_33650;
(statearr_33652[(7)] = inst_33646);

return statearr_33652;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33650__$1,inst_33648);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29106__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29106__auto____0 = (function (){
var statearr_33653 = [null,null,null,null,null,null,null,null];
(statearr_33653[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29106__auto__);

(statearr_33653[(1)] = (1));

return statearr_33653;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29106__auto____1 = (function (state_33650){
while(true){
var ret_value__29107__auto__ = (function (){try{while(true){
var result__29108__auto__ = switch__29105__auto__.call(null,state_33650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29108__auto__;
}
break;
}
}catch (e33654){var ex__29109__auto__ = e33654;
var statearr_33655_33658 = state_33650;
(statearr_33655_33658[(2)] = ex__29109__auto__);


if(cljs.core.seq.call(null,(state_33650[(4)]))){
var statearr_33656_33659 = state_33650;
(statearr_33656_33659[(1)] = cljs.core.first.call(null,(state_33650[(4)])));

} else {
throw ex__29109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33660 = state_33650;
state_33650 = G__33660;
continue;
} else {
return ret_value__29107__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29106__auto__ = function(state_33650){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29106__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29106__auto____1.call(this,state_33650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29106__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29106__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29106__auto__;
})()
})();
var state__29181__auto__ = (function (){var statearr_33657 = f__29180__auto__.call(null);
(statearr_33657[(6)] = c__29179__auto__);

return statearr_33657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29181__auto__);
}));

return c__29179__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__33661){
var map__33662 = p__33661;
var map__33662__$1 = cljs.core.__destructure_map.call(null,map__33662);
var file = cljs.core.get.call(null,map__33662__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__33662__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__33662__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__33663 = "";
var G__33663__$1 = (cljs.core.truth_(file)?[G__33663,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__33663);
var G__33663__$2 = (cljs.core.truth_(line)?[G__33663__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__33663__$1);
if(cljs.core.truth_((function (){var and__4251__auto__ = line;
if(cljs.core.truth_(and__4251__auto__)){
return column;
} else {
return and__4251__auto__;
}
})())){
return [G__33663__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__33663__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__33664){
var map__33665 = p__33664;
var map__33665__$1 = cljs.core.__destructure_map.call(null,map__33665);
var ed = map__33665__$1;
var exception_data = cljs.core.get.call(null,map__33665__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__33665__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_33667 = (function (){var G__33666 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33666)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__33666;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_33667);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__33668){
var map__33669 = p__33668;
var map__33669__$1 = cljs.core.__destructure_map.call(null,map__33669);
var w = map__33669__$1;
var message = cljs.core.get.call(null,map__33669__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__33670 = cljs.core.seq.call(null,plugins);
var chunk__33671 = null;
var count__33672 = (0);
var i__33673 = (0);
while(true){
if((i__33673 < count__33672)){
var vec__33680 = cljs.core._nth.call(null,chunk__33671,i__33673);
var k = cljs.core.nth.call(null,vec__33680,(0),null);
var plugin = cljs.core.nth.call(null,vec__33680,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33686 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33670,chunk__33671,count__33672,i__33673,pl_33686,vec__33680,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_33686.call(null,msg_hist);
});})(seq__33670,chunk__33671,count__33672,i__33673,pl_33686,vec__33680,k,plugin))
);
} else {
}


var G__33687 = seq__33670;
var G__33688 = chunk__33671;
var G__33689 = count__33672;
var G__33690 = (i__33673 + (1));
seq__33670 = G__33687;
chunk__33671 = G__33688;
count__33672 = G__33689;
i__33673 = G__33690;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__33670);
if(temp__5753__auto__){
var seq__33670__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33670__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__33670__$1);
var G__33691 = cljs.core.chunk_rest.call(null,seq__33670__$1);
var G__33692 = c__4679__auto__;
var G__33693 = cljs.core.count.call(null,c__4679__auto__);
var G__33694 = (0);
seq__33670 = G__33691;
chunk__33671 = G__33692;
count__33672 = G__33693;
i__33673 = G__33694;
continue;
} else {
var vec__33683 = cljs.core.first.call(null,seq__33670__$1);
var k = cljs.core.nth.call(null,vec__33683,(0),null);
var plugin = cljs.core.nth.call(null,vec__33683,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33695 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33670,chunk__33671,count__33672,i__33673,pl_33695,vec__33683,k,plugin,seq__33670__$1,temp__5753__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_33695.call(null,msg_hist);
});})(seq__33670,chunk__33671,count__33672,i__33673,pl_33695,vec__33683,k,plugin,seq__33670__$1,temp__5753__auto__))
);
} else {
}


var G__33696 = cljs.core.next.call(null,seq__33670__$1);
var G__33697 = null;
var G__33698 = (0);
var G__33699 = (0);
seq__33670 = G__33696;
chunk__33671 = G__33697;
count__33672 = G__33698;
i__33673 = G__33699;
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
var G__33701 = arguments.length;
switch (G__33701) {
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

var seq__33702_33707 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__33703_33708 = null;
var count__33704_33709 = (0);
var i__33705_33710 = (0);
while(true){
if((i__33705_33710 < count__33704_33709)){
var msg_33711 = cljs.core._nth.call(null,chunk__33703_33708,i__33705_33710);
figwheel.client.socket.handle_incoming_message.call(null,msg_33711);


var G__33712 = seq__33702_33707;
var G__33713 = chunk__33703_33708;
var G__33714 = count__33704_33709;
var G__33715 = (i__33705_33710 + (1));
seq__33702_33707 = G__33712;
chunk__33703_33708 = G__33713;
count__33704_33709 = G__33714;
i__33705_33710 = G__33715;
continue;
} else {
var temp__5753__auto___33716 = cljs.core.seq.call(null,seq__33702_33707);
if(temp__5753__auto___33716){
var seq__33702_33717__$1 = temp__5753__auto___33716;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33702_33717__$1)){
var c__4679__auto___33718 = cljs.core.chunk_first.call(null,seq__33702_33717__$1);
var G__33719 = cljs.core.chunk_rest.call(null,seq__33702_33717__$1);
var G__33720 = c__4679__auto___33718;
var G__33721 = cljs.core.count.call(null,c__4679__auto___33718);
var G__33722 = (0);
seq__33702_33707 = G__33719;
chunk__33703_33708 = G__33720;
count__33704_33709 = G__33721;
i__33705_33710 = G__33722;
continue;
} else {
var msg_33723 = cljs.core.first.call(null,seq__33702_33717__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_33723);


var G__33724 = cljs.core.next.call(null,seq__33702_33717__$1);
var G__33725 = null;
var G__33726 = (0);
var G__33727 = (0);
seq__33702_33707 = G__33724;
chunk__33703_33708 = G__33725;
count__33704_33709 = G__33726;
i__33705_33710 = G__33727;
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
var len__4864__auto___33731 = arguments.length;
var i__4865__auto___33732 = (0);
while(true){
if((i__4865__auto___33732 < len__4864__auto___33731)){
args__4870__auto__.push((arguments[i__4865__auto___33732]));

var G__33733 = (i__4865__auto___33732 + (1));
i__4865__auto___33732 = G__33733;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__33729){
var map__33730 = p__33729;
var map__33730__$1 = cljs.core.__destructure_map.call(null,map__33730);
var opts = map__33730__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq33728){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33728));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,figwheel.client.goog$module$goog$object.get.call(null,window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e33734){if((e33734 instanceof Error)){
var e = e33734;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e33734;

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

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__33735){
var map__33736 = p__33735;
var map__33736__$1 = cljs.core.__destructure_map.call(null,map__33736);
var msg_name = cljs.core.get.call(null,map__33736__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1658833865750
