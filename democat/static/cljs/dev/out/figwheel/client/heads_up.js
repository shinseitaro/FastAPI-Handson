// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.dom');
goog.require('cljs.pprint');
goog.require('goog.object');
goog.scope(function(){
figwheel.client.heads_up.goog$module$goog$object = goog.module.get('goog.object');
});

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__4870__auto__ = [];
var len__4864__auto___30993 = arguments.length;
var i__4865__auto___30994 = (0);
while(true){
if((i__4865__auto___30994 < len__4864__auto___30993)){
args__4870__auto__.push((arguments[i__4865__auto___30994]));

var G__30995 = (i__4865__auto___30994 + (1));
i__4865__auto___30994 = G__30995;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__30985_30996 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__30986_30997 = null;
var count__30987_30998 = (0);
var i__30988_30999 = (0);
while(true){
if((i__30988_30999 < count__30987_30998)){
var k_31000 = cljs.core._nth.call(null,chunk__30986_30997,i__30988_30999);
e.setAttribute(cljs.core.name.call(null,k_31000),cljs.core.get.call(null,attrs,k_31000));


var G__31001 = seq__30985_30996;
var G__31002 = chunk__30986_30997;
var G__31003 = count__30987_30998;
var G__31004 = (i__30988_30999 + (1));
seq__30985_30996 = G__31001;
chunk__30986_30997 = G__31002;
count__30987_30998 = G__31003;
i__30988_30999 = G__31004;
continue;
} else {
var temp__5753__auto___31005 = cljs.core.seq.call(null,seq__30985_30996);
if(temp__5753__auto___31005){
var seq__30985_31006__$1 = temp__5753__auto___31005;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30985_31006__$1)){
var c__4679__auto___31007 = cljs.core.chunk_first.call(null,seq__30985_31006__$1);
var G__31008 = cljs.core.chunk_rest.call(null,seq__30985_31006__$1);
var G__31009 = c__4679__auto___31007;
var G__31010 = cljs.core.count.call(null,c__4679__auto___31007);
var G__31011 = (0);
seq__30985_30996 = G__31008;
chunk__30986_30997 = G__31009;
count__30987_30998 = G__31010;
i__30988_30999 = G__31011;
continue;
} else {
var k_31012 = cljs.core.first.call(null,seq__30985_31006__$1);
e.setAttribute(cljs.core.name.call(null,k_31012),cljs.core.get.call(null,attrs,k_31012));


var G__31013 = cljs.core.next.call(null,seq__30985_31006__$1);
var G__31014 = null;
var G__31015 = (0);
var G__31016 = (0);
seq__30985_30996 = G__31013;
chunk__30986_30997 = G__31014;
count__30987_30998 = G__31015;
i__30988_30999 = G__31016;
continue;
}
} else {
}
}
break;
}

var seq__30989_31017 = cljs.core.seq.call(null,children);
var chunk__30990_31018 = null;
var count__30991_31019 = (0);
var i__30992_31020 = (0);
while(true){
if((i__30992_31020 < count__30991_31019)){
var ch_31021 = cljs.core._nth.call(null,chunk__30990_31018,i__30992_31020);
e.appendChild(ch_31021);


var G__31022 = seq__30989_31017;
var G__31023 = chunk__30990_31018;
var G__31024 = count__30991_31019;
var G__31025 = (i__30992_31020 + (1));
seq__30989_31017 = G__31022;
chunk__30990_31018 = G__31023;
count__30991_31019 = G__31024;
i__30992_31020 = G__31025;
continue;
} else {
var temp__5753__auto___31026 = cljs.core.seq.call(null,seq__30989_31017);
if(temp__5753__auto___31026){
var seq__30989_31027__$1 = temp__5753__auto___31026;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30989_31027__$1)){
var c__4679__auto___31028 = cljs.core.chunk_first.call(null,seq__30989_31027__$1);
var G__31029 = cljs.core.chunk_rest.call(null,seq__30989_31027__$1);
var G__31030 = c__4679__auto___31028;
var G__31031 = cljs.core.count.call(null,c__4679__auto___31028);
var G__31032 = (0);
seq__30989_31017 = G__31029;
chunk__30990_31018 = G__31030;
count__30991_31019 = G__31031;
i__30992_31020 = G__31032;
continue;
} else {
var ch_31033 = cljs.core.first.call(null,seq__30989_31027__$1);
e.appendChild(ch_31033);


var G__31034 = cljs.core.next.call(null,seq__30989_31027__$1);
var G__31035 = null;
var G__31036 = (0);
var G__31037 = (0);
seq__30989_31017 = G__31034;
chunk__30990_31018 = G__31035;
count__30991_31019 = G__31036;
i__30992_31020 = G__31037;
continue;
}
} else {
}
}
break;
}

return e;
}));

(figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq30982){
var G__30983 = cljs.core.first.call(null,seq30982);
var seq30982__$1 = cljs.core.next.call(null,seq30982);
var G__30984 = cljs.core.first.call(null,seq30982__$1);
var seq30982__$2 = cljs.core.next.call(null,seq30982__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30983,G__30984,seq30982__$2);
}));

if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.heads_up !== 'undefined') && (typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined')){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),(function (dataset){
return dataset.figwheelEvent;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector(["#",cont_id].join('')))){
var el_31038 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),["-webkit-transition: all 0.2s ease-in-out;","-moz-transition: all 0.2s ease-in-out;","-o-transition: all 0.2s ease-in-out;","transition: all 0.2s ease-in-out;","font-size: 13px;","border-top: 1px solid #f5f5f5;","box-shadow: 0px 0px 1px #aaaaaa;","line-height: 18px;","color: #333;","font-family: monospace;","padding: 0px 10px 0px 70px;","position: fixed;","bottom: 0px;","left: 0px;","height: 0px;","opacity: 0.0;","box-sizing: border-box;","z-index: 10000;","text-align: left;"].join('')], null));
(el_31038.onclick = figwheel.client.heads_up.heads_up_onclick_handler);

(el_31038.innerHTML = figwheel.client.heads_up.cljs_logo_svg);

el_31038.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_31038);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__31039,st_map){
var map__31040 = p__31039;
var map__31040__$1 = cljs.core.__destructure_map.call(null,map__31040);
var container_el = cljs.core.get.call(null,map__31040__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,(function (p__31041){
var vec__31042 = p__31041;
var k = cljs.core.nth.call(null,vec__31042,(0),null);
var v = cljs.core.nth.call(null,vec__31042,(1),null);
return figwheel.client.heads_up.goog$module$goog$object.set.call(null,container_el.style,cljs.core.name.call(null,k),v);
}),st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__31045,dom_str){
var map__31046 = p__31045;
var map__31046__$1 = cljs.core.__destructure_map.call(null,map__31046);
var c = map__31046__$1;
var content_area_el = cljs.core.get.call(null,map__31046__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return (content_area_el.innerHTML = dom_str);
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__31047){
var map__31048 = p__31047;
var map__31048__$1 = cljs.core.__destructure_map.call(null,map__31048);
var content_area_el = cljs.core.get.call(null,map__31048__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return ["<a style=\"","float: right;","font-size: 18px;","text-decoration: none;","text-align: right;","width: 30px;","height: 30px;","color: rgba(84,84,84, 0.5);","\" href=\"#\"  data-figwheel-event=\"close-heads-up\">","x","</a>"].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__23440__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23441__auto__ = (function (){var switch__23315__auto__ = (function (state_31064){
var state_val_31065 = (state_31064[(1)]);
if((state_val_31065 === (1))){
var inst_31049 = (state_31064[(7)]);
var inst_31049__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_31050 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_31051 = ["10px","10px","100%","68px","1.0"];
var inst_31052 = cljs.core.PersistentHashMap.fromArrays(inst_31050,inst_31051);
var inst_31053 = cljs.core.merge.call(null,inst_31052,style);
var inst_31054 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31049__$1,inst_31053);
var inst_31055 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_31049__$1,msg);
var inst_31056 = cljs.core.async.timeout.call(null,(300));
var state_31064__$1 = (function (){var statearr_31066 = state_31064;
(statearr_31066[(7)] = inst_31049__$1);

(statearr_31066[(8)] = inst_31055);

(statearr_31066[(9)] = inst_31054);

return statearr_31066;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31064__$1,(2),inst_31056);
} else {
if((state_val_31065 === (2))){
var inst_31049 = (state_31064[(7)]);
var inst_31058 = (state_31064[(2)]);
var inst_31059 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_31060 = ["auto"];
var inst_31061 = cljs.core.PersistentHashMap.fromArrays(inst_31059,inst_31060);
var inst_31062 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31049,inst_31061);
var state_31064__$1 = (function (){var statearr_31067 = state_31064;
(statearr_31067[(10)] = inst_31058);

return statearr_31067;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31064__$1,inst_31062);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__23316__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__23316__auto____0 = (function (){
var statearr_31068 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31068[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__23316__auto__);

(statearr_31068[(1)] = (1));

return statearr_31068;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__23316__auto____1 = (function (state_31064){
while(true){
var ret_value__23317__auto__ = (function (){try{while(true){
var result__23318__auto__ = switch__23315__auto__.call(null,state_31064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23318__auto__;
}
break;
}
}catch (e31069){var ex__23319__auto__ = e31069;
var statearr_31070_31073 = state_31064;
(statearr_31070_31073[(2)] = ex__23319__auto__);


if(cljs.core.seq.call(null,(state_31064[(4)]))){
var statearr_31071_31074 = state_31064;
(statearr_31071_31074[(1)] = cljs.core.first.call(null,(state_31064[(4)])));

} else {
throw ex__23319__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31075 = state_31064;
state_31064 = G__31075;
continue;
} else {
return ret_value__23317__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__23316__auto__ = function(state_31064){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__23316__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__23316__auto____1.call(this,state_31064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__23316__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__23316__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__23316__auto__;
})()
})();
var state__23442__auto__ = (function (){var statearr_31072 = f__23441__auto__.call(null);
(statearr_31072[(6)] = c__23440__auto__);

return statearr_31072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23442__auto__);
}));

return c__23440__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var G__31077 = arguments.length;
switch (G__31077) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
}));

(figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return ["<div style=\"","font-size: 26px;","line-height: 26px;","margin-bottom: 2px;","padding-top: 1px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," <span style=\"","display: inline-block;","font-size: 13px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),"</span></div>"].join('');
}));

(figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2);

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return ["<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),"\" data-file-line=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"\" data-file-column=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),"\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__31079){
var map__31080 = p__31079;
var map__31080__$1 = cljs.core.__destructure_map.call(null,map__31080);
var file = cljs.core.get.call(null,map__31080__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31080__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31080__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__4253__auto__ = file;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return ["<div>",msg__$1,"</div>"].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return ["<span style='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),"'>","<span style='color: #757575;'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"  </span>",figwheel.client.heads_up.escape.call(null,line),"</span>"].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__31081){
var vec__31082 = p__31081;
var typ = cljs.core.nth.call(null,vec__31082,(0),null);
var line_number = cljs.core.nth.call(null,vec__31082,(1),null);
var line = cljs.core.nth.call(null,vec__31082,(2),null);
var pred__31085 = cljs.core._EQ_;
var expr__31086 = typ;
if(cljs.core.truth_(pred__31085.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__31086))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__31085.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__31086))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__31085.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__31086))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = ((cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))).length);
return cljs.core.map.call(null,(function (p1__31088_SHARP_){
return cljs.core.update_in.call(null,p1__31088_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
}),inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return ["<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"," line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>",clojure.string.join.call(null,"\n",lines),"</pre>"].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__31089_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__31089_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__31092){
var map__31093 = p__31092;
var map__31093__$1 = cljs.core.__destructure_map.call(null,map__31093);
var exception = map__31093__$1;
var message = cljs.core.get.call(null,map__31093__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var failed_loading_clj_file = cljs.core.get.call(null,map__31093__$1,new cljs.core.Keyword(null,"failed-loading-clj-file","failed-loading-clj-file",-1682536481));
var reader_exception = cljs.core.get.call(null,map__31093__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var file = cljs.core.get.call(null,map__31093__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var column = cljs.core.get.call(null,map__31093__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var failed_compiling = cljs.core.get.call(null,map__31093__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var error_inline = cljs.core.get.call(null,map__31093__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var line = cljs.core.get.call(null,map__31093__$1,new cljs.core.Keyword(null,"line","line",212345235));
var class$ = cljs.core.get.call(null,map__31093__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var analysis_exception = cljs.core.get.call(null,map__31093__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var display_ex_data = cljs.core.get.call(null,map__31093__$1,new cljs.core.Keyword(null,"display-ex-data","display-ex-data",-1611558730));
var last_message = (cljs.core.truth_((function (){var and__4251__auto__ = file;
if(cljs.core.truth_(and__4251__auto__)){
return line;
} else {
return and__4251__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__31090_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31090_SHARP_),"</div>"].join('');
}),(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[(cljs.core.truth_(class$)?[figwheel.client.heads_up.escape.call(null,class$),": "].join(''):""),"<span style=\"font-weight:bold;\">",figwheel.client.heads_up.escape.call(null,message),"</span>"].join(''),(cljs.core.truth_(display_ex_data)?["<pre style=\"white-space: pre-wrap\">",figwheel.client.utils.pprint_to_string.call(null,display_ex_data),"</pre>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,(function (p1__31091_SHARP_){
return [figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__31091_SHARP_)),": ",figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__31091_SHARP_))].join('');
}),figwheel.client.heads_up.flatten_exception.call(null,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px;\">",figwheel.client.heads_up.escape.call(null,last_message),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__31094){
var map__31095 = p__31094;
var map__31095__$1 = cljs.core.__destructure_map.call(null,map__31095);
var file = cljs.core.get.call(null,map__31095__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31095__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31095__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),new cljs.core.Keyword(null,"file-column","file-column",1543934780),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__31097 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__31097__$1 = cljs.core.__destructure_map.call(null,map__31097);
var head = cljs.core.get.call(null,map__31097__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__31097__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__31097__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__31097__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__31097__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31097__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31097__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[figwheel.client.heads_up.close_link.call(null),figwheel.client.heads_up.heading.call(null,head,sub_head),figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg)].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__31099){
var map__31100 = p__31099;
var map__31100__$1 = cljs.core.__destructure_map.call(null,map__31100);
var warning_data = map__31100__$1;
var file = cljs.core.get.call(null,map__31100__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31100__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31100__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__31100__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__31100__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__4251__auto__ = file;
if(cljs.core.truth_(and__4251__auto__)){
return line;
} else {
return and__4251__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__31098_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31098_SHARP_),"</div>"].join('');
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?["<span style=\"font-weight:bold;\">",figwheel.client.heads_up.escape.call(null,message),"</span>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">",figwheel.client.heads_up.escape.call(null,last_message),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[figwheel.client.heads_up.close_link.call(null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),"<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__31101 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__31101__$1 = cljs.core.__destructure_map.call(null,map__31101);
var head = cljs.core.get.call(null,map__31101__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__31101__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__31101__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__31101__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__31101__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31101__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31101__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[figwheel.client.heads_up.close_link.call(null),figwheel.client.heads_up.heading.call(null,head,sub_head),figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg)].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__31102){
var map__31103 = p__31102;
var map__31103__$1 = cljs.core.__destructure_map.call(null,map__31103);
var warning_data = map__31103__$1;
var message = cljs.core.get.call(null,map__31103__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__31103__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31103__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31103__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31104 = message;
var G__31104__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31104)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31104);
var G__31104__$2 = (cljs.core.truth_((function (){var and__4251__auto__ = line;
if(cljs.core.truth_(and__4251__auto__)){
return column;
} else {
return and__4251__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31104__$1),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__31104__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31104__$2)," in file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__31104__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__31105){
var map__31106 = p__31105;
var map__31106__$1 = cljs.core.__destructure_map.call(null,map__31106);
var warning_data = map__31106__$1;
var message = cljs.core.get.call(null,map__31106__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__31106__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31106__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31106__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__31107 = figwheel.client.heads_up.ensure_container.call(null);
var map__31107__$1 = cljs.core.__destructure_map.call(null,map__31107);
var content_area_el = cljs.core.get.call(null,map__31107__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
(el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data));

return goog.dom.append(content_area_el,el);
} else {
var temp__5753__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__5753__auto__)){
var last_child = temp__5753__auto__;
var temp__5751__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__5751__auto__)){
var message_count = temp__5751__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return (last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1)," more warnings have not been displayed ..."].join(''));
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__23440__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23441__auto__ = (function (){var switch__23315__auto__ = (function (state_31125){
var state_val_31126 = (state_31125[(1)]);
if((state_val_31126 === (1))){
var inst_31108 = (state_31125[(7)]);
var inst_31108__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_31109 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_31110 = ["0.0"];
var inst_31111 = cljs.core.PersistentHashMap.fromArrays(inst_31109,inst_31110);
var inst_31112 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31108__$1,inst_31111);
var inst_31113 = cljs.core.async.timeout.call(null,(300));
var state_31125__$1 = (function (){var statearr_31127 = state_31125;
(statearr_31127[(8)] = inst_31112);

(statearr_31127[(7)] = inst_31108__$1);

return statearr_31127;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31125__$1,(2),inst_31113);
} else {
if((state_val_31126 === (2))){
var inst_31108 = (state_31125[(7)]);
var inst_31115 = (state_31125[(2)]);
var inst_31116 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_31117 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_31118 = cljs.core.PersistentHashMap.fromArrays(inst_31116,inst_31117);
var inst_31119 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31108,inst_31118);
var inst_31120 = cljs.core.async.timeout.call(null,(200));
var state_31125__$1 = (function (){var statearr_31128 = state_31125;
(statearr_31128[(9)] = inst_31115);

(statearr_31128[(10)] = inst_31119);

return statearr_31128;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31125__$1,(3),inst_31120);
} else {
if((state_val_31126 === (3))){
var inst_31108 = (state_31125[(7)]);
var inst_31122 = (state_31125[(2)]);
var inst_31123 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_31108,"");
var state_31125__$1 = (function (){var statearr_31129 = state_31125;
(statearr_31129[(11)] = inst_31122);

return statearr_31129;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31125__$1,inst_31123);
} else {
return null;
}
}
}
});
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__23316__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__23316__auto____0 = (function (){
var statearr_31130 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31130[(0)] = figwheel$client$heads_up$clear_$_state_machine__23316__auto__);

(statearr_31130[(1)] = (1));

return statearr_31130;
});
var figwheel$client$heads_up$clear_$_state_machine__23316__auto____1 = (function (state_31125){
while(true){
var ret_value__23317__auto__ = (function (){try{while(true){
var result__23318__auto__ = switch__23315__auto__.call(null,state_31125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23318__auto__;
}
break;
}
}catch (e31131){var ex__23319__auto__ = e31131;
var statearr_31132_31135 = state_31125;
(statearr_31132_31135[(2)] = ex__23319__auto__);


if(cljs.core.seq.call(null,(state_31125[(4)]))){
var statearr_31133_31136 = state_31125;
(statearr_31133_31136[(1)] = cljs.core.first.call(null,(state_31125[(4)])));

} else {
throw ex__23319__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31137 = state_31125;
state_31125 = G__31137;
continue;
} else {
return ret_value__23317__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__23316__auto__ = function(state_31125){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__23316__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__23316__auto____1.call(this,state_31125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__23316__auto____0;
figwheel$client$heads_up$clear_$_state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__23316__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__23316__auto__;
})()
})();
var state__23442__auto__ = (function (){var statearr_31134 = f__23441__auto__.call(null);
(statearr_31134[(6)] = c__23440__auto__);

return statearr_31134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23442__auto__);
}));

return c__23440__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__23440__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23441__auto__ = (function (){var switch__23315__auto__ = (function (state_31148){
var state_val_31149 = (state_31148[(1)]);
if((state_val_31149 === (1))){
var inst_31138 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_31148__$1 = state_31148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31148__$1,(2),inst_31138);
} else {
if((state_val_31149 === (2))){
var inst_31140 = (state_31148[(2)]);
var inst_31141 = cljs.core.async.timeout.call(null,(400));
var state_31148__$1 = (function (){var statearr_31150 = state_31148;
(statearr_31150[(7)] = inst_31140);

return statearr_31150;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31148__$1,(3),inst_31141);
} else {
if((state_val_31149 === (3))){
var inst_31143 = (state_31148[(2)]);
var inst_31144 = figwheel.client.heads_up.clear.call(null);
var state_31148__$1 = (function (){var statearr_31151 = state_31148;
(statearr_31151[(8)] = inst_31143);

return statearr_31151;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31148__$1,(4),inst_31144);
} else {
if((state_val_31149 === (4))){
var inst_31146 = (state_31148[(2)]);
var state_31148__$1 = state_31148;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31148__$1,inst_31146);
} else {
return null;
}
}
}
}
});
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__23316__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__23316__auto____0 = (function (){
var statearr_31152 = [null,null,null,null,null,null,null,null,null];
(statearr_31152[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__23316__auto__);

(statearr_31152[(1)] = (1));

return statearr_31152;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__23316__auto____1 = (function (state_31148){
while(true){
var ret_value__23317__auto__ = (function (){try{while(true){
var result__23318__auto__ = switch__23315__auto__.call(null,state_31148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23318__auto__;
}
break;
}
}catch (e31153){var ex__23319__auto__ = e31153;
var statearr_31154_31157 = state_31148;
(statearr_31154_31157[(2)] = ex__23319__auto__);


if(cljs.core.seq.call(null,(state_31148[(4)]))){
var statearr_31155_31158 = state_31148;
(statearr_31155_31158[(1)] = cljs.core.first.call(null,(state_31148[(4)])));

} else {
throw ex__23319__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31159 = state_31148;
state_31148 = G__31159;
continue;
} else {
return ret_value__23317__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__23316__auto__ = function(state_31148){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__23316__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__23316__auto____1.call(this,state_31148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__23316__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__23316__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__23316__auto__;
})()
})();
var state__23442__auto__ = (function (){var statearr_31156 = f__23441__auto__.call(null);
(statearr_31156[(6)] = c__23440__auto__);

return statearr_31156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23442__auto__);
}));

return c__23440__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__5753__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__5753__auto__)){
var el = temp__5753__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": ["background-color: rgba(24, 26, 38, 0.95);","position: absolute;","z-index: 9000;","width: 100vw;","height: 100vh;","top: 0px; left: 0px;","font-family: monospace"].join('')}),goog.dom.createDom("div",({"class": "message", "style": ["color: #FFF5DB;","width: 100vw;","margin: auto;","margin-top: 10px;","text-align: center; ","padding: 2px 0px;","font-size: 13px;","position: relative"].join('')}),goog.dom.createDom("a",({"onclick": (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
}), "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map?rel=1658997509551
