// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy.core.selector,data));
} else {
if(((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__4253__auto__ = elem.textContent;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__4086 = arguments.length;
switch (G__4086) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
}));

(dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
}));

(dommy.core.style.cljs$lang$maxFixedArity = 2);

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__5751__auto__ = elem.classList;
if(cljs.core.truth_(temp__5751__auto__)){
var class_list = temp__5751__auto__;
return class_list.contains(c__$1);
} else {
var temp__5753__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__5753__auto__)){
var class_name = temp__5753__auto__;
var temp__5753__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__5753__auto____$1)){
var i = temp__5753__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__4089 = arguments.length;
switch (G__4089) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
}));

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.call(null,document,selector);
}));

(dommy.core.matches_pred.cljs$lang$maxFixedArity = 2);

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__4093 = arguments.length;
switch (G__4093) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__4091_SHARP_){
return (!((p1__4091_SHARP_ === base)));
}),dommy.core.ancestors.call(null,elem))));
}));

(dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.call(null,document.body,elem,selector);
}));

(dommy.core.closest.cljs$lang$maxFixedArity = 3);

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if((!((void 0 === elem.textContent)))){
(elem.textContent = text);
} else {
(elem.innerText = text);
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
(elem.innerHTML = html);

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
(elem.value = value);

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return (elem.className = c);
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___4113 = arguments.length;
var i__4865__auto___4114 = (0);
while(true){
if((i__4865__auto___4114 < len__4864__auto___4113)){
args__4870__auto__.push((arguments[i__4865__auto___4114]));

var G__4115 = (i__4865__auto___4114 + (1));
i__4865__auto___4114 = G__4115;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__4097_4116 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__4098_4117 = null;
var count__4099_4118 = (0);
var i__4100_4119 = (0);
while(true){
if((i__4100_4119 < count__4099_4118)){
var vec__4107_4120 = cljs.core._nth.call(null,chunk__4098_4117,i__4100_4119);
var k_4121 = cljs.core.nth.call(null,vec__4107_4120,(0),null);
var v_4122 = cljs.core.nth.call(null,vec__4107_4120,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_4121),v_4122);


var G__4123 = seq__4097_4116;
var G__4124 = chunk__4098_4117;
var G__4125 = count__4099_4118;
var G__4126 = (i__4100_4119 + (1));
seq__4097_4116 = G__4123;
chunk__4098_4117 = G__4124;
count__4099_4118 = G__4125;
i__4100_4119 = G__4126;
continue;
} else {
var temp__5753__auto___4127 = cljs.core.seq.call(null,seq__4097_4116);
if(temp__5753__auto___4127){
var seq__4097_4128__$1 = temp__5753__auto___4127;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4097_4128__$1)){
var c__4679__auto___4129 = cljs.core.chunk_first.call(null,seq__4097_4128__$1);
var G__4130 = cljs.core.chunk_rest.call(null,seq__4097_4128__$1);
var G__4131 = c__4679__auto___4129;
var G__4132 = cljs.core.count.call(null,c__4679__auto___4129);
var G__4133 = (0);
seq__4097_4116 = G__4130;
chunk__4098_4117 = G__4131;
count__4099_4118 = G__4132;
i__4100_4119 = G__4133;
continue;
} else {
var vec__4110_4134 = cljs.core.first.call(null,seq__4097_4128__$1);
var k_4135 = cljs.core.nth.call(null,vec__4110_4134,(0),null);
var v_4136 = cljs.core.nth.call(null,vec__4110_4134,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_4135),v_4136);


var G__4137 = cljs.core.next.call(null,seq__4097_4128__$1);
var G__4138 = null;
var G__4139 = (0);
var G__4140 = (0);
seq__4097_4116 = G__4137;
chunk__4098_4117 = G__4138;
count__4099_4118 = G__4139;
i__4100_4119 = G__4140;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq4095){
var G__4096 = cljs.core.first.call(null,seq4095);
var seq4095__$1 = cljs.core.next.call(null,seq4095);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4096,seq4095__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___4147 = arguments.length;
var i__4865__auto___4148 = (0);
while(true){
if((i__4865__auto___4148 < len__4864__auto___4147)){
args__4870__auto__.push((arguments[i__4865__auto___4148]));

var G__4149 = (i__4865__auto___4148 + (1));
i__4865__auto___4148 = G__4149;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__4143_4150 = cljs.core.seq.call(null,keywords);
var chunk__4144_4151 = null;
var count__4145_4152 = (0);
var i__4146_4153 = (0);
while(true){
if((i__4146_4153 < count__4145_4152)){
var kw_4154 = cljs.core._nth.call(null,chunk__4144_4151,i__4146_4153);
style.removeProperty(dommy.utils.as_str.call(null,kw_4154));


var G__4155 = seq__4143_4150;
var G__4156 = chunk__4144_4151;
var G__4157 = count__4145_4152;
var G__4158 = (i__4146_4153 + (1));
seq__4143_4150 = G__4155;
chunk__4144_4151 = G__4156;
count__4145_4152 = G__4157;
i__4146_4153 = G__4158;
continue;
} else {
var temp__5753__auto___4159 = cljs.core.seq.call(null,seq__4143_4150);
if(temp__5753__auto___4159){
var seq__4143_4160__$1 = temp__5753__auto___4159;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4143_4160__$1)){
var c__4679__auto___4161 = cljs.core.chunk_first.call(null,seq__4143_4160__$1);
var G__4162 = cljs.core.chunk_rest.call(null,seq__4143_4160__$1);
var G__4163 = c__4679__auto___4161;
var G__4164 = cljs.core.count.call(null,c__4679__auto___4161);
var G__4165 = (0);
seq__4143_4150 = G__4162;
chunk__4144_4151 = G__4163;
count__4145_4152 = G__4164;
i__4146_4153 = G__4165;
continue;
} else {
var kw_4166 = cljs.core.first.call(null,seq__4143_4160__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_4166));


var G__4167 = cljs.core.next.call(null,seq__4143_4160__$1);
var G__4168 = null;
var G__4169 = (0);
var G__4170 = (0);
seq__4143_4150 = G__4167;
chunk__4144_4151 = G__4168;
count__4145_4152 = G__4169;
i__4146_4153 = G__4170;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq4141){
var G__4142 = cljs.core.first.call(null,seq4141);
var seq4141__$1 = cljs.core.next.call(null,seq4141);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4142,seq4141__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___4189 = arguments.length;
var i__4865__auto___4190 = (0);
while(true){
if((i__4865__auto___4190 < len__4864__auto___4189)){
args__4870__auto__.push((arguments[i__4865__auto___4190]));

var G__4191 = (i__4865__auto___4190 + (1));
i__4865__auto___4190 = G__4191;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__4173_4192 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__4174_4193 = null;
var count__4175_4194 = (0);
var i__4176_4195 = (0);
while(true){
if((i__4176_4195 < count__4175_4194)){
var vec__4183_4196 = cljs.core._nth.call(null,chunk__4174_4193,i__4176_4195);
var k_4197 = cljs.core.nth.call(null,vec__4183_4196,(0),null);
var v_4198 = cljs.core.nth.call(null,vec__4183_4196,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_4197,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_4198),"px"].join(''));


var G__4199 = seq__4173_4192;
var G__4200 = chunk__4174_4193;
var G__4201 = count__4175_4194;
var G__4202 = (i__4176_4195 + (1));
seq__4173_4192 = G__4199;
chunk__4174_4193 = G__4200;
count__4175_4194 = G__4201;
i__4176_4195 = G__4202;
continue;
} else {
var temp__5753__auto___4203 = cljs.core.seq.call(null,seq__4173_4192);
if(temp__5753__auto___4203){
var seq__4173_4204__$1 = temp__5753__auto___4203;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4173_4204__$1)){
var c__4679__auto___4205 = cljs.core.chunk_first.call(null,seq__4173_4204__$1);
var G__4206 = cljs.core.chunk_rest.call(null,seq__4173_4204__$1);
var G__4207 = c__4679__auto___4205;
var G__4208 = cljs.core.count.call(null,c__4679__auto___4205);
var G__4209 = (0);
seq__4173_4192 = G__4206;
chunk__4174_4193 = G__4207;
count__4175_4194 = G__4208;
i__4176_4195 = G__4209;
continue;
} else {
var vec__4186_4210 = cljs.core.first.call(null,seq__4173_4204__$1);
var k_4211 = cljs.core.nth.call(null,vec__4186_4210,(0),null);
var v_4212 = cljs.core.nth.call(null,vec__4186_4210,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_4211,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_4212),"px"].join(''));


var G__4213 = cljs.core.next.call(null,seq__4173_4204__$1);
var G__4214 = null;
var G__4215 = (0);
var G__4216 = (0);
seq__4173_4192 = G__4213;
chunk__4174_4193 = G__4214;
count__4175_4194 = G__4215;
i__4176_4195 = G__4216;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq4171){
var G__4172 = cljs.core.first.call(null,seq4171);
var seq4171__$1 = cljs.core.next.call(null,seq4171);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4172,seq4171__$1);
}));

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var G__4222 = arguments.length;
switch (G__4222) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___4242 = arguments.length;
var i__4865__auto___4243 = (0);
while(true){
if((i__4865__auto___4243 < len__4864__auto___4242)){
args_arr__4885__auto__.push((arguments[i__4865__auto___4243]));

var G__4244 = (i__4865__auto___4243 + (1));
i__4865__auto___4243 = G__4244;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4886__auto__);

}
});

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__4223 = elem;
(G__4223[k__$1] = v);

return G__4223;
} else {
var G__4224 = elem;
G__4224.setAttribute(k__$1,v);

return G__4224;
}
} else {
return null;
}
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__4225_4245 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__4226_4246 = null;
var count__4227_4247 = (0);
var i__4228_4248 = (0);
while(true){
if((i__4228_4248 < count__4227_4247)){
var vec__4235_4249 = cljs.core._nth.call(null,chunk__4226_4246,i__4228_4248);
var k_4250__$1 = cljs.core.nth.call(null,vec__4235_4249,(0),null);
var v_4251__$1 = cljs.core.nth.call(null,vec__4235_4249,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_4250__$1,v_4251__$1);


var G__4252 = seq__4225_4245;
var G__4253 = chunk__4226_4246;
var G__4254 = count__4227_4247;
var G__4255 = (i__4228_4248 + (1));
seq__4225_4245 = G__4252;
chunk__4226_4246 = G__4253;
count__4227_4247 = G__4254;
i__4228_4248 = G__4255;
continue;
} else {
var temp__5753__auto___4256 = cljs.core.seq.call(null,seq__4225_4245);
if(temp__5753__auto___4256){
var seq__4225_4257__$1 = temp__5753__auto___4256;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4225_4257__$1)){
var c__4679__auto___4258 = cljs.core.chunk_first.call(null,seq__4225_4257__$1);
var G__4259 = cljs.core.chunk_rest.call(null,seq__4225_4257__$1);
var G__4260 = c__4679__auto___4258;
var G__4261 = cljs.core.count.call(null,c__4679__auto___4258);
var G__4262 = (0);
seq__4225_4245 = G__4259;
chunk__4226_4246 = G__4260;
count__4227_4247 = G__4261;
i__4228_4248 = G__4262;
continue;
} else {
var vec__4238_4263 = cljs.core.first.call(null,seq__4225_4257__$1);
var k_4264__$1 = cljs.core.nth.call(null,vec__4238_4263,(0),null);
var v_4265__$1 = cljs.core.nth.call(null,vec__4238_4263,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_4264__$1,v_4265__$1);


var G__4266 = cljs.core.next.call(null,seq__4225_4257__$1);
var G__4267 = null;
var G__4268 = (0);
var G__4269 = (0);
seq__4225_4245 = G__4266;
chunk__4226_4246 = G__4267;
count__4227_4247 = G__4268;
i__4228_4248 = G__4269;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq4218){
var G__4219 = cljs.core.first.call(null,seq4218);
var seq4218__$1 = cljs.core.next.call(null,seq4218);
var G__4220 = cljs.core.first.call(null,seq4218__$1);
var seq4218__$2 = cljs.core.next.call(null,seq4218__$1);
var G__4221 = cljs.core.first.call(null,seq4218__$2);
var seq4218__$3 = cljs.core.next.call(null,seq4218__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4219,G__4220,G__4221,seq4218__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__4274 = arguments.length;
switch (G__4274) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___4280 = arguments.length;
var i__4865__auto___4281 = (0);
while(true){
if((i__4865__auto___4281 < len__4864__auto___4280)){
args_arr__4885__auto__.push((arguments[i__4865__auto___4281]));

var G__4282 = (i__4865__auto___4281 + (1));
i__4865__auto___4281 = G__4282;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_4283__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_4283__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_4283__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__4275_4284 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__4276_4285 = null;
var count__4277_4286 = (0);
var i__4278_4287 = (0);
while(true){
if((i__4278_4287 < count__4277_4286)){
var k_4288__$1 = cljs.core._nth.call(null,chunk__4276_4285,i__4278_4287);
dommy.core.remove_attr_BANG_.call(null,elem,k_4288__$1);


var G__4289 = seq__4275_4284;
var G__4290 = chunk__4276_4285;
var G__4291 = count__4277_4286;
var G__4292 = (i__4278_4287 + (1));
seq__4275_4284 = G__4289;
chunk__4276_4285 = G__4290;
count__4277_4286 = G__4291;
i__4278_4287 = G__4292;
continue;
} else {
var temp__5753__auto___4293 = cljs.core.seq.call(null,seq__4275_4284);
if(temp__5753__auto___4293){
var seq__4275_4294__$1 = temp__5753__auto___4293;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4275_4294__$1)){
var c__4679__auto___4295 = cljs.core.chunk_first.call(null,seq__4275_4294__$1);
var G__4296 = cljs.core.chunk_rest.call(null,seq__4275_4294__$1);
var G__4297 = c__4679__auto___4295;
var G__4298 = cljs.core.count.call(null,c__4679__auto___4295);
var G__4299 = (0);
seq__4275_4284 = G__4296;
chunk__4276_4285 = G__4297;
count__4277_4286 = G__4298;
i__4278_4287 = G__4299;
continue;
} else {
var k_4300__$1 = cljs.core.first.call(null,seq__4275_4294__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_4300__$1);


var G__4301 = cljs.core.next.call(null,seq__4275_4294__$1);
var G__4302 = null;
var G__4303 = (0);
var G__4304 = (0);
seq__4275_4284 = G__4301;
chunk__4276_4285 = G__4302;
count__4277_4286 = G__4303;
i__4278_4287 = G__4304;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq4271){
var G__4272 = cljs.core.first.call(null,seq4271);
var seq4271__$1 = cljs.core.next.call(null,seq4271);
var G__4273 = cljs.core.first.call(null,seq4271__$1);
var seq4271__$2 = cljs.core.next.call(null,seq4271__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4272,G__4273,seq4271__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__4306 = arguments.length;
switch (G__4306) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
}));

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
}));

(dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__4312 = arguments.length;
switch (G__4312) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___4326 = arguments.length;
var i__4865__auto___4327 = (0);
while(true){
if((i__4865__auto___4327 < len__4864__auto___4326)){
args_arr__4885__auto__.push((arguments[i__4865__auto___4327]));

var G__4328 = (i__4865__auto___4327 + (1));
i__4865__auto___4327 = G__4328;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__5751__auto___4329 = elem.classList;
if(cljs.core.truth_(temp__5751__auto___4329)){
var class_list_4330 = temp__5751__auto___4329;
var seq__4313_4331 = cljs.core.seq.call(null,classes__$1);
var chunk__4314_4332 = null;
var count__4315_4333 = (0);
var i__4316_4334 = (0);
while(true){
if((i__4316_4334 < count__4315_4333)){
var c_4335 = cljs.core._nth.call(null,chunk__4314_4332,i__4316_4334);
class_list_4330.add(c_4335);


var G__4336 = seq__4313_4331;
var G__4337 = chunk__4314_4332;
var G__4338 = count__4315_4333;
var G__4339 = (i__4316_4334 + (1));
seq__4313_4331 = G__4336;
chunk__4314_4332 = G__4337;
count__4315_4333 = G__4338;
i__4316_4334 = G__4339;
continue;
} else {
var temp__5753__auto___4340 = cljs.core.seq.call(null,seq__4313_4331);
if(temp__5753__auto___4340){
var seq__4313_4341__$1 = temp__5753__auto___4340;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4313_4341__$1)){
var c__4679__auto___4342 = cljs.core.chunk_first.call(null,seq__4313_4341__$1);
var G__4343 = cljs.core.chunk_rest.call(null,seq__4313_4341__$1);
var G__4344 = c__4679__auto___4342;
var G__4345 = cljs.core.count.call(null,c__4679__auto___4342);
var G__4346 = (0);
seq__4313_4331 = G__4343;
chunk__4314_4332 = G__4344;
count__4315_4333 = G__4345;
i__4316_4334 = G__4346;
continue;
} else {
var c_4347 = cljs.core.first.call(null,seq__4313_4341__$1);
class_list_4330.add(c_4347);


var G__4348 = cljs.core.next.call(null,seq__4313_4341__$1);
var G__4349 = null;
var G__4350 = (0);
var G__4351 = (0);
seq__4313_4331 = G__4348;
chunk__4314_4332 = G__4349;
count__4315_4333 = G__4350;
i__4316_4334 = G__4351;
continue;
}
} else {
}
}
break;
}
} else {
var seq__4317_4352 = cljs.core.seq.call(null,classes__$1);
var chunk__4318_4353 = null;
var count__4319_4354 = (0);
var i__4320_4355 = (0);
while(true){
if((i__4320_4355 < count__4319_4354)){
var c_4356 = cljs.core._nth.call(null,chunk__4318_4353,i__4320_4355);
var class_name_4357 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_4357,c_4356))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_4357 === ""))?c_4356:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_4357)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_4356)].join('')));
}


var G__4358 = seq__4317_4352;
var G__4359 = chunk__4318_4353;
var G__4360 = count__4319_4354;
var G__4361 = (i__4320_4355 + (1));
seq__4317_4352 = G__4358;
chunk__4318_4353 = G__4359;
count__4319_4354 = G__4360;
i__4320_4355 = G__4361;
continue;
} else {
var temp__5753__auto___4362 = cljs.core.seq.call(null,seq__4317_4352);
if(temp__5753__auto___4362){
var seq__4317_4363__$1 = temp__5753__auto___4362;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4317_4363__$1)){
var c__4679__auto___4364 = cljs.core.chunk_first.call(null,seq__4317_4363__$1);
var G__4365 = cljs.core.chunk_rest.call(null,seq__4317_4363__$1);
var G__4366 = c__4679__auto___4364;
var G__4367 = cljs.core.count.call(null,c__4679__auto___4364);
var G__4368 = (0);
seq__4317_4352 = G__4365;
chunk__4318_4353 = G__4366;
count__4319_4354 = G__4367;
i__4320_4355 = G__4368;
continue;
} else {
var c_4369 = cljs.core.first.call(null,seq__4317_4363__$1);
var class_name_4370 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_4370,c_4369))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_4370 === ""))?c_4369:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_4370)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_4369)].join('')));
}


var G__4371 = cljs.core.next.call(null,seq__4317_4363__$1);
var G__4372 = null;
var G__4373 = (0);
var G__4374 = (0);
seq__4317_4352 = G__4371;
chunk__4318_4353 = G__4372;
count__4319_4354 = G__4373;
i__4320_4355 = G__4374;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
}));

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__4321_4375 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__4322_4376 = null;
var count__4323_4377 = (0);
var i__4324_4378 = (0);
while(true){
if((i__4324_4378 < count__4323_4377)){
var c_4379 = cljs.core._nth.call(null,chunk__4322_4376,i__4324_4378);
dommy.core.add_class_BANG_.call(null,elem,c_4379);


var G__4380 = seq__4321_4375;
var G__4381 = chunk__4322_4376;
var G__4382 = count__4323_4377;
var G__4383 = (i__4324_4378 + (1));
seq__4321_4375 = G__4380;
chunk__4322_4376 = G__4381;
count__4323_4377 = G__4382;
i__4324_4378 = G__4383;
continue;
} else {
var temp__5753__auto___4384 = cljs.core.seq.call(null,seq__4321_4375);
if(temp__5753__auto___4384){
var seq__4321_4385__$1 = temp__5753__auto___4384;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4321_4385__$1)){
var c__4679__auto___4386 = cljs.core.chunk_first.call(null,seq__4321_4385__$1);
var G__4387 = cljs.core.chunk_rest.call(null,seq__4321_4385__$1);
var G__4388 = c__4679__auto___4386;
var G__4389 = cljs.core.count.call(null,c__4679__auto___4386);
var G__4390 = (0);
seq__4321_4375 = G__4387;
chunk__4322_4376 = G__4388;
count__4323_4377 = G__4389;
i__4324_4378 = G__4390;
continue;
} else {
var c_4391 = cljs.core.first.call(null,seq__4321_4385__$1);
dommy.core.add_class_BANG_.call(null,elem,c_4391);


var G__4392 = cljs.core.next.call(null,seq__4321_4385__$1);
var G__4393 = null;
var G__4394 = (0);
var G__4395 = (0);
seq__4321_4375 = G__4392;
chunk__4322_4376 = G__4393;
count__4323_4377 = G__4394;
i__4324_4378 = G__4395;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq4309){
var G__4310 = cljs.core.first.call(null,seq4309);
var seq4309__$1 = cljs.core.next.call(null,seq4309);
var G__4311 = cljs.core.first.call(null,seq4309__$1);
var seq4309__$2 = cljs.core.next.call(null,seq4309__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4310,G__4311,seq4309__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__4400 = arguments.length;
switch (G__4400) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___4406 = arguments.length;
var i__4865__auto___4407 = (0);
while(true){
if((i__4865__auto___4407 < len__4864__auto___4406)){
args_arr__4885__auto__.push((arguments[i__4865__auto___4407]));

var G__4408 = (i__4865__auto___4407 + (1));
i__4865__auto___4407 = G__4408;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__5751__auto___4409 = elem.classList;
if(cljs.core.truth_(temp__5751__auto___4409)){
var class_list_4410 = temp__5751__auto___4409;
class_list_4410.remove(c__$1);
} else {
var class_name_4411 = dommy.core.class$.call(null,elem);
var new_class_name_4412 = dommy.utils.remove_class_str.call(null,class_name_4411,c__$1);
if((class_name_4411 === new_class_name_4412)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_4412);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__4401 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__4402 = null;
var count__4403 = (0);
var i__4404 = (0);
while(true){
if((i__4404 < count__4403)){
var c = cljs.core._nth.call(null,chunk__4402,i__4404);
dommy.core.remove_class_BANG_.call(null,elem,c);


var G__4413 = seq__4401;
var G__4414 = chunk__4402;
var G__4415 = count__4403;
var G__4416 = (i__4404 + (1));
seq__4401 = G__4413;
chunk__4402 = G__4414;
count__4403 = G__4415;
i__4404 = G__4416;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__4401);
if(temp__5753__auto__){
var seq__4401__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4401__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__4401__$1);
var G__4417 = cljs.core.chunk_rest.call(null,seq__4401__$1);
var G__4418 = c__4679__auto__;
var G__4419 = cljs.core.count.call(null,c__4679__auto__);
var G__4420 = (0);
seq__4401 = G__4417;
chunk__4402 = G__4418;
count__4403 = G__4419;
i__4404 = G__4420;
continue;
} else {
var c = cljs.core.first.call(null,seq__4401__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);


var G__4421 = cljs.core.next.call(null,seq__4401__$1);
var G__4422 = null;
var G__4423 = (0);
var G__4424 = (0);
seq__4401 = G__4421;
chunk__4402 = G__4422;
count__4403 = G__4423;
i__4404 = G__4424;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq4397){
var G__4398 = cljs.core.first.call(null,seq4397);
var seq4397__$1 = cljs.core.next.call(null,seq4397);
var G__4399 = cljs.core.first.call(null,seq4397__$1);
var seq4397__$2 = cljs.core.next.call(null,seq4397__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4398,G__4399,seq4397__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__4426 = arguments.length;
switch (G__4426) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__5751__auto___4428 = elem.classList;
if(cljs.core.truth_(temp__5751__auto___4428)){
var class_list_4429 = temp__5751__auto___4428;
class_list_4429.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.call(null,elem,c__$1,(!(dommy.core.has_class_QMARK_.call(null,elem,c__$1))));
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__4431 = arguments.length;
switch (G__4431) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
}));

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
}));

(dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__4434 = arguments.length;
switch (G__4434) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
}));

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
}));

(dommy.core.create_element.cljs$lang$maxFixedArity = 2);

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__4440 = arguments.length;
switch (G__4440) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___4447 = arguments.length;
var i__4865__auto___4448 = (0);
while(true){
if((i__4865__auto___4448 < len__4864__auto___4447)){
args_arr__4885__auto__.push((arguments[i__4865__auto___4448]));

var G__4449 = (i__4865__auto___4448 + (1));
i__4865__auto___4448 = G__4449;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__4441 = parent;
G__4441.appendChild(child);

return G__4441;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__4442_4450 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__4443_4451 = null;
var count__4444_4452 = (0);
var i__4445_4453 = (0);
while(true){
if((i__4445_4453 < count__4444_4452)){
var c_4454 = cljs.core._nth.call(null,chunk__4443_4451,i__4445_4453);
dommy.core.append_BANG_.call(null,parent,c_4454);


var G__4455 = seq__4442_4450;
var G__4456 = chunk__4443_4451;
var G__4457 = count__4444_4452;
var G__4458 = (i__4445_4453 + (1));
seq__4442_4450 = G__4455;
chunk__4443_4451 = G__4456;
count__4444_4452 = G__4457;
i__4445_4453 = G__4458;
continue;
} else {
var temp__5753__auto___4459 = cljs.core.seq.call(null,seq__4442_4450);
if(temp__5753__auto___4459){
var seq__4442_4460__$1 = temp__5753__auto___4459;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4442_4460__$1)){
var c__4679__auto___4461 = cljs.core.chunk_first.call(null,seq__4442_4460__$1);
var G__4462 = cljs.core.chunk_rest.call(null,seq__4442_4460__$1);
var G__4463 = c__4679__auto___4461;
var G__4464 = cljs.core.count.call(null,c__4679__auto___4461);
var G__4465 = (0);
seq__4442_4450 = G__4462;
chunk__4443_4451 = G__4463;
count__4444_4452 = G__4464;
i__4445_4453 = G__4465;
continue;
} else {
var c_4466 = cljs.core.first.call(null,seq__4442_4460__$1);
dommy.core.append_BANG_.call(null,parent,c_4466);


var G__4467 = cljs.core.next.call(null,seq__4442_4460__$1);
var G__4468 = null;
var G__4469 = (0);
var G__4470 = (0);
seq__4442_4450 = G__4467;
chunk__4443_4451 = G__4468;
count__4444_4452 = G__4469;
i__4445_4453 = G__4470;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq4437){
var G__4438 = cljs.core.first.call(null,seq4437);
var seq4437__$1 = cljs.core.next.call(null,seq4437);
var G__4439 = cljs.core.first.call(null,seq4437__$1);
var seq4437__$2 = cljs.core.next.call(null,seq4437__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4438,G__4439,seq4437__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__4475 = arguments.length;
switch (G__4475) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___4482 = arguments.length;
var i__4865__auto___4483 = (0);
while(true){
if((i__4865__auto___4483 < len__4864__auto___4482)){
args_arr__4885__auto__.push((arguments[i__4865__auto___4483]));

var G__4484 = (i__4865__auto___4483 + (1));
i__4865__auto___4483 = G__4484;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__4476 = parent;
G__4476.insertBefore(child,parent.firstChild);

return G__4476;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__4477_4485 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__4478_4486 = null;
var count__4479_4487 = (0);
var i__4480_4488 = (0);
while(true){
if((i__4480_4488 < count__4479_4487)){
var c_4489 = cljs.core._nth.call(null,chunk__4478_4486,i__4480_4488);
dommy.core.prepend_BANG_.call(null,parent,c_4489);


var G__4490 = seq__4477_4485;
var G__4491 = chunk__4478_4486;
var G__4492 = count__4479_4487;
var G__4493 = (i__4480_4488 + (1));
seq__4477_4485 = G__4490;
chunk__4478_4486 = G__4491;
count__4479_4487 = G__4492;
i__4480_4488 = G__4493;
continue;
} else {
var temp__5753__auto___4494 = cljs.core.seq.call(null,seq__4477_4485);
if(temp__5753__auto___4494){
var seq__4477_4495__$1 = temp__5753__auto___4494;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4477_4495__$1)){
var c__4679__auto___4496 = cljs.core.chunk_first.call(null,seq__4477_4495__$1);
var G__4497 = cljs.core.chunk_rest.call(null,seq__4477_4495__$1);
var G__4498 = c__4679__auto___4496;
var G__4499 = cljs.core.count.call(null,c__4679__auto___4496);
var G__4500 = (0);
seq__4477_4485 = G__4497;
chunk__4478_4486 = G__4498;
count__4479_4487 = G__4499;
i__4480_4488 = G__4500;
continue;
} else {
var c_4501 = cljs.core.first.call(null,seq__4477_4495__$1);
dommy.core.prepend_BANG_.call(null,parent,c_4501);


var G__4502 = cljs.core.next.call(null,seq__4477_4495__$1);
var G__4503 = null;
var G__4504 = (0);
var G__4505 = (0);
seq__4477_4485 = G__4502;
chunk__4478_4486 = G__4503;
count__4479_4487 = G__4504;
i__4480_4488 = G__4505;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq4472){
var G__4473 = cljs.core.first.call(null,seq4472);
var seq4472__$1 = cljs.core.next.call(null,seq4472);
var G__4474 = cljs.core.first.call(null,seq4472__$1);
var seq4472__$2 = cljs.core.next.call(null,seq4472__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4473,G__4474,seq4472__$2);
}));

(dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__5751__auto___4506 = other.nextSibling;
if(cljs.core.truth_(temp__5751__auto___4506)){
var next_4507 = temp__5751__auto___4506;
dommy.core.insert_before_BANG_.call(null,elem,next_4507);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__4509 = arguments.length;
switch (G__4509) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
}));

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__4510 = p;
G__4510.removeChild(elem);

return G__4510;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__4512){
var vec__4513 = p__4512;
var special_mouse_event = cljs.core.nth.call(null,vec__4513,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__4513,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__4253__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__4251__auto__ = related_target;
if(cljs.core.truth_(and__4251__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__4251__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
})])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__4251__auto__ = selected_target;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__4251__auto__;
}
})())){
(event.selectedTarget = selected_target);

return f.call(null,event);
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__4253__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___4519 = arguments.length;
var i__4865__auto___4520 = (0);
while(true){
if((i__4865__auto___4520 < len__4864__auto___4519)){
args__4870__auto__.push((arguments[i__4865__auto___4520]));

var G__4521 = (i__4865__auto___4520 + (1));
i__4865__auto___4520 = G__4521;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return (elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args));
}));

(dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq4516){
var G__4517 = cljs.core.first.call(null,seq4516);
var seq4516__$1 = cljs.core.next.call(null,seq4516);
var G__4518 = cljs.core.first.call(null,seq4516__$1);
var seq4516__$2 = cljs.core.next.call(null,seq4516__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4517,G__4518,seq4516__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___4603 = arguments.length;
var i__4865__auto___4604 = (0);
while(true){
if((i__4865__auto___4604 < len__4864__auto___4603)){
args__4870__auto__.push((arguments[i__4865__auto___4604]));

var G__4605 = (i__4865__auto___4604 + (1));
i__4865__auto___4604 = G__4605;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__4524_4606 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_4607 = cljs.core.nth.call(null,vec__4524_4606,(0),null);
var selector_4608 = cljs.core.nth.call(null,vec__4524_4606,(1),null);
var seq__4527_4609 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__4534_4610 = null;
var count__4535_4611 = (0);
var i__4536_4612 = (0);
while(true){
if((i__4536_4612 < count__4535_4611)){
var vec__4573_4613 = cljs.core._nth.call(null,chunk__4534_4610,i__4536_4612);
var orig_type_4614 = cljs.core.nth.call(null,vec__4573_4613,(0),null);
var f_4615 = cljs.core.nth.call(null,vec__4573_4613,(1),null);
var seq__4537_4616 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_4614,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_4614,cljs.core.identity])));
var chunk__4539_4617 = null;
var count__4540_4618 = (0);
var i__4541_4619 = (0);
while(true){
if((i__4541_4619 < count__4540_4618)){
var vec__4582_4620 = cljs.core._nth.call(null,chunk__4539_4617,i__4541_4619);
var actual_type_4621 = cljs.core.nth.call(null,vec__4582_4620,(0),null);
var factory_4622 = cljs.core.nth.call(null,vec__4582_4620,(1),null);
var canonical_f_4623 = (cljs.core.truth_(selector_4608)?cljs.core.partial.call(null,dommy.core.live_listener,elem_4607,selector_4608):cljs.core.identity).call(null,factory_4622.call(null,f_4615));
dommy.core.update_event_listeners_BANG_.call(null,elem_4607,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_4608,actual_type_4621,f_4615], null),canonical_f_4623);

if(cljs.core.truth_(elem_4607.addEventListener)){
elem_4607.addEventListener(cljs.core.name.call(null,actual_type_4621),canonical_f_4623);
} else {
elem_4607.attachEvent(cljs.core.name.call(null,actual_type_4621),canonical_f_4623);
}


var G__4624 = seq__4537_4616;
var G__4625 = chunk__4539_4617;
var G__4626 = count__4540_4618;
var G__4627 = (i__4541_4619 + (1));
seq__4537_4616 = G__4624;
chunk__4539_4617 = G__4625;
count__4540_4618 = G__4626;
i__4541_4619 = G__4627;
continue;
} else {
var temp__5753__auto___4628 = cljs.core.seq.call(null,seq__4537_4616);
if(temp__5753__auto___4628){
var seq__4537_4629__$1 = temp__5753__auto___4628;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4537_4629__$1)){
var c__4679__auto___4630 = cljs.core.chunk_first.call(null,seq__4537_4629__$1);
var G__4631 = cljs.core.chunk_rest.call(null,seq__4537_4629__$1);
var G__4632 = c__4679__auto___4630;
var G__4633 = cljs.core.count.call(null,c__4679__auto___4630);
var G__4634 = (0);
seq__4537_4616 = G__4631;
chunk__4539_4617 = G__4632;
count__4540_4618 = G__4633;
i__4541_4619 = G__4634;
continue;
} else {
var vec__4585_4635 = cljs.core.first.call(null,seq__4537_4629__$1);
var actual_type_4636 = cljs.core.nth.call(null,vec__4585_4635,(0),null);
var factory_4637 = cljs.core.nth.call(null,vec__4585_4635,(1),null);
var canonical_f_4638 = (cljs.core.truth_(selector_4608)?cljs.core.partial.call(null,dommy.core.live_listener,elem_4607,selector_4608):cljs.core.identity).call(null,factory_4637.call(null,f_4615));
dommy.core.update_event_listeners_BANG_.call(null,elem_4607,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_4608,actual_type_4636,f_4615], null),canonical_f_4638);

if(cljs.core.truth_(elem_4607.addEventListener)){
elem_4607.addEventListener(cljs.core.name.call(null,actual_type_4636),canonical_f_4638);
} else {
elem_4607.attachEvent(cljs.core.name.call(null,actual_type_4636),canonical_f_4638);
}


var G__4639 = cljs.core.next.call(null,seq__4537_4629__$1);
var G__4640 = null;
var G__4641 = (0);
var G__4642 = (0);
seq__4537_4616 = G__4639;
chunk__4539_4617 = G__4640;
count__4540_4618 = G__4641;
i__4541_4619 = G__4642;
continue;
}
} else {
}
}
break;
}

var G__4643 = seq__4527_4609;
var G__4644 = chunk__4534_4610;
var G__4645 = count__4535_4611;
var G__4646 = (i__4536_4612 + (1));
seq__4527_4609 = G__4643;
chunk__4534_4610 = G__4644;
count__4535_4611 = G__4645;
i__4536_4612 = G__4646;
continue;
} else {
var temp__5753__auto___4647 = cljs.core.seq.call(null,seq__4527_4609);
if(temp__5753__auto___4647){
var seq__4527_4648__$1 = temp__5753__auto___4647;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4527_4648__$1)){
var c__4679__auto___4649 = cljs.core.chunk_first.call(null,seq__4527_4648__$1);
var G__4650 = cljs.core.chunk_rest.call(null,seq__4527_4648__$1);
var G__4651 = c__4679__auto___4649;
var G__4652 = cljs.core.count.call(null,c__4679__auto___4649);
var G__4653 = (0);
seq__4527_4609 = G__4650;
chunk__4534_4610 = G__4651;
count__4535_4611 = G__4652;
i__4536_4612 = G__4653;
continue;
} else {
var vec__4588_4654 = cljs.core.first.call(null,seq__4527_4648__$1);
var orig_type_4655 = cljs.core.nth.call(null,vec__4588_4654,(0),null);
var f_4656 = cljs.core.nth.call(null,vec__4588_4654,(1),null);
var seq__4528_4657 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_4655,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_4655,cljs.core.identity])));
var chunk__4530_4658 = null;
var count__4531_4659 = (0);
var i__4532_4660 = (0);
while(true){
if((i__4532_4660 < count__4531_4659)){
var vec__4597_4661 = cljs.core._nth.call(null,chunk__4530_4658,i__4532_4660);
var actual_type_4662 = cljs.core.nth.call(null,vec__4597_4661,(0),null);
var factory_4663 = cljs.core.nth.call(null,vec__4597_4661,(1),null);
var canonical_f_4664 = (cljs.core.truth_(selector_4608)?cljs.core.partial.call(null,dommy.core.live_listener,elem_4607,selector_4608):cljs.core.identity).call(null,factory_4663.call(null,f_4656));
dommy.core.update_event_listeners_BANG_.call(null,elem_4607,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_4608,actual_type_4662,f_4656], null),canonical_f_4664);

if(cljs.core.truth_(elem_4607.addEventListener)){
elem_4607.addEventListener(cljs.core.name.call(null,actual_type_4662),canonical_f_4664);
} else {
elem_4607.attachEvent(cljs.core.name.call(null,actual_type_4662),canonical_f_4664);
}


var G__4665 = seq__4528_4657;
var G__4666 = chunk__4530_4658;
var G__4667 = count__4531_4659;
var G__4668 = (i__4532_4660 + (1));
seq__4528_4657 = G__4665;
chunk__4530_4658 = G__4666;
count__4531_4659 = G__4667;
i__4532_4660 = G__4668;
continue;
} else {
var temp__5753__auto___4669__$1 = cljs.core.seq.call(null,seq__4528_4657);
if(temp__5753__auto___4669__$1){
var seq__4528_4670__$1 = temp__5753__auto___4669__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4528_4670__$1)){
var c__4679__auto___4671 = cljs.core.chunk_first.call(null,seq__4528_4670__$1);
var G__4672 = cljs.core.chunk_rest.call(null,seq__4528_4670__$1);
var G__4673 = c__4679__auto___4671;
var G__4674 = cljs.core.count.call(null,c__4679__auto___4671);
var G__4675 = (0);
seq__4528_4657 = G__4672;
chunk__4530_4658 = G__4673;
count__4531_4659 = G__4674;
i__4532_4660 = G__4675;
continue;
} else {
var vec__4600_4676 = cljs.core.first.call(null,seq__4528_4670__$1);
var actual_type_4677 = cljs.core.nth.call(null,vec__4600_4676,(0),null);
var factory_4678 = cljs.core.nth.call(null,vec__4600_4676,(1),null);
var canonical_f_4679 = (cljs.core.truth_(selector_4608)?cljs.core.partial.call(null,dommy.core.live_listener,elem_4607,selector_4608):cljs.core.identity).call(null,factory_4678.call(null,f_4656));
dommy.core.update_event_listeners_BANG_.call(null,elem_4607,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_4608,actual_type_4677,f_4656], null),canonical_f_4679);

if(cljs.core.truth_(elem_4607.addEventListener)){
elem_4607.addEventListener(cljs.core.name.call(null,actual_type_4677),canonical_f_4679);
} else {
elem_4607.attachEvent(cljs.core.name.call(null,actual_type_4677),canonical_f_4679);
}


var G__4680 = cljs.core.next.call(null,seq__4528_4670__$1);
var G__4681 = null;
var G__4682 = (0);
var G__4683 = (0);
seq__4528_4657 = G__4680;
chunk__4530_4658 = G__4681;
count__4531_4659 = G__4682;
i__4532_4660 = G__4683;
continue;
}
} else {
}
}
break;
}

var G__4684 = cljs.core.next.call(null,seq__4527_4648__$1);
var G__4685 = null;
var G__4686 = (0);
var G__4687 = (0);
seq__4527_4609 = G__4684;
chunk__4534_4610 = G__4685;
count__4535_4611 = G__4686;
i__4536_4612 = G__4687;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq4522){
var G__4523 = cljs.core.first.call(null,seq4522);
var seq4522__$1 = cljs.core.next.call(null,seq4522);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4523,seq4522__$1);
}));

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___4769 = arguments.length;
var i__4865__auto___4770 = (0);
while(true){
if((i__4865__auto___4770 < len__4864__auto___4769)){
args__4870__auto__.push((arguments[i__4865__auto___4770]));

var G__4771 = (i__4865__auto___4770 + (1));
i__4865__auto___4770 = G__4771;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__4690_4772 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_4773 = cljs.core.nth.call(null,vec__4690_4772,(0),null);
var selector_4774 = cljs.core.nth.call(null,vec__4690_4772,(1),null);
var seq__4693_4775 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__4700_4776 = null;
var count__4701_4777 = (0);
var i__4702_4778 = (0);
while(true){
if((i__4702_4778 < count__4701_4777)){
var vec__4739_4779 = cljs.core._nth.call(null,chunk__4700_4776,i__4702_4778);
var orig_type_4780 = cljs.core.nth.call(null,vec__4739_4779,(0),null);
var f_4781 = cljs.core.nth.call(null,vec__4739_4779,(1),null);
var seq__4703_4782 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_4780,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_4780,cljs.core.identity])));
var chunk__4705_4783 = null;
var count__4706_4784 = (0);
var i__4707_4785 = (0);
while(true){
if((i__4707_4785 < count__4706_4784)){
var vec__4748_4786 = cljs.core._nth.call(null,chunk__4705_4783,i__4707_4785);
var actual_type_4787 = cljs.core.nth.call(null,vec__4748_4786,(0),null);
var __4788 = cljs.core.nth.call(null,vec__4748_4786,(1),null);
var keys_4789 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_4774,actual_type_4787,f_4781], null);
var canonical_f_4790 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_4773),keys_4789);
dommy.core.update_event_listeners_BANG_.call(null,elem_4773,dommy.utils.dissoc_in,keys_4789);

if(cljs.core.truth_(elem_4773.removeEventListener)){
elem_4773.removeEventListener(cljs.core.name.call(null,actual_type_4787),canonical_f_4790);
} else {
elem_4773.detachEvent(cljs.core.name.call(null,actual_type_4787),canonical_f_4790);
}


var G__4791 = seq__4703_4782;
var G__4792 = chunk__4705_4783;
var G__4793 = count__4706_4784;
var G__4794 = (i__4707_4785 + (1));
seq__4703_4782 = G__4791;
chunk__4705_4783 = G__4792;
count__4706_4784 = G__4793;
i__4707_4785 = G__4794;
continue;
} else {
var temp__5753__auto___4795 = cljs.core.seq.call(null,seq__4703_4782);
if(temp__5753__auto___4795){
var seq__4703_4796__$1 = temp__5753__auto___4795;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4703_4796__$1)){
var c__4679__auto___4797 = cljs.core.chunk_first.call(null,seq__4703_4796__$1);
var G__4798 = cljs.core.chunk_rest.call(null,seq__4703_4796__$1);
var G__4799 = c__4679__auto___4797;
var G__4800 = cljs.core.count.call(null,c__4679__auto___4797);
var G__4801 = (0);
seq__4703_4782 = G__4798;
chunk__4705_4783 = G__4799;
count__4706_4784 = G__4800;
i__4707_4785 = G__4801;
continue;
} else {
var vec__4751_4802 = cljs.core.first.call(null,seq__4703_4796__$1);
var actual_type_4803 = cljs.core.nth.call(null,vec__4751_4802,(0),null);
var __4804 = cljs.core.nth.call(null,vec__4751_4802,(1),null);
var keys_4805 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_4774,actual_type_4803,f_4781], null);
var canonical_f_4806 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_4773),keys_4805);
dommy.core.update_event_listeners_BANG_.call(null,elem_4773,dommy.utils.dissoc_in,keys_4805);

if(cljs.core.truth_(elem_4773.removeEventListener)){
elem_4773.removeEventListener(cljs.core.name.call(null,actual_type_4803),canonical_f_4806);
} else {
elem_4773.detachEvent(cljs.core.name.call(null,actual_type_4803),canonical_f_4806);
}


var G__4807 = cljs.core.next.call(null,seq__4703_4796__$1);
var G__4808 = null;
var G__4809 = (0);
var G__4810 = (0);
seq__4703_4782 = G__4807;
chunk__4705_4783 = G__4808;
count__4706_4784 = G__4809;
i__4707_4785 = G__4810;
continue;
}
} else {
}
}
break;
}

var G__4811 = seq__4693_4775;
var G__4812 = chunk__4700_4776;
var G__4813 = count__4701_4777;
var G__4814 = (i__4702_4778 + (1));
seq__4693_4775 = G__4811;
chunk__4700_4776 = G__4812;
count__4701_4777 = G__4813;
i__4702_4778 = G__4814;
continue;
} else {
var temp__5753__auto___4815 = cljs.core.seq.call(null,seq__4693_4775);
if(temp__5753__auto___4815){
var seq__4693_4816__$1 = temp__5753__auto___4815;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4693_4816__$1)){
var c__4679__auto___4817 = cljs.core.chunk_first.call(null,seq__4693_4816__$1);
var G__4818 = cljs.core.chunk_rest.call(null,seq__4693_4816__$1);
var G__4819 = c__4679__auto___4817;
var G__4820 = cljs.core.count.call(null,c__4679__auto___4817);
var G__4821 = (0);
seq__4693_4775 = G__4818;
chunk__4700_4776 = G__4819;
count__4701_4777 = G__4820;
i__4702_4778 = G__4821;
continue;
} else {
var vec__4754_4822 = cljs.core.first.call(null,seq__4693_4816__$1);
var orig_type_4823 = cljs.core.nth.call(null,vec__4754_4822,(0),null);
var f_4824 = cljs.core.nth.call(null,vec__4754_4822,(1),null);
var seq__4694_4825 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_4823,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_4823,cljs.core.identity])));
var chunk__4696_4826 = null;
var count__4697_4827 = (0);
var i__4698_4828 = (0);
while(true){
if((i__4698_4828 < count__4697_4827)){
var vec__4763_4829 = cljs.core._nth.call(null,chunk__4696_4826,i__4698_4828);
var actual_type_4830 = cljs.core.nth.call(null,vec__4763_4829,(0),null);
var __4831 = cljs.core.nth.call(null,vec__4763_4829,(1),null);
var keys_4832 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_4774,actual_type_4830,f_4824], null);
var canonical_f_4833 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_4773),keys_4832);
dommy.core.update_event_listeners_BANG_.call(null,elem_4773,dommy.utils.dissoc_in,keys_4832);

if(cljs.core.truth_(elem_4773.removeEventListener)){
elem_4773.removeEventListener(cljs.core.name.call(null,actual_type_4830),canonical_f_4833);
} else {
elem_4773.detachEvent(cljs.core.name.call(null,actual_type_4830),canonical_f_4833);
}


var G__4834 = seq__4694_4825;
var G__4835 = chunk__4696_4826;
var G__4836 = count__4697_4827;
var G__4837 = (i__4698_4828 + (1));
seq__4694_4825 = G__4834;
chunk__4696_4826 = G__4835;
count__4697_4827 = G__4836;
i__4698_4828 = G__4837;
continue;
} else {
var temp__5753__auto___4838__$1 = cljs.core.seq.call(null,seq__4694_4825);
if(temp__5753__auto___4838__$1){
var seq__4694_4839__$1 = temp__5753__auto___4838__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4694_4839__$1)){
var c__4679__auto___4840 = cljs.core.chunk_first.call(null,seq__4694_4839__$1);
var G__4841 = cljs.core.chunk_rest.call(null,seq__4694_4839__$1);
var G__4842 = c__4679__auto___4840;
var G__4843 = cljs.core.count.call(null,c__4679__auto___4840);
var G__4844 = (0);
seq__4694_4825 = G__4841;
chunk__4696_4826 = G__4842;
count__4697_4827 = G__4843;
i__4698_4828 = G__4844;
continue;
} else {
var vec__4766_4845 = cljs.core.first.call(null,seq__4694_4839__$1);
var actual_type_4846 = cljs.core.nth.call(null,vec__4766_4845,(0),null);
var __4847 = cljs.core.nth.call(null,vec__4766_4845,(1),null);
var keys_4848 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_4774,actual_type_4846,f_4824], null);
var canonical_f_4849 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_4773),keys_4848);
dommy.core.update_event_listeners_BANG_.call(null,elem_4773,dommy.utils.dissoc_in,keys_4848);

if(cljs.core.truth_(elem_4773.removeEventListener)){
elem_4773.removeEventListener(cljs.core.name.call(null,actual_type_4846),canonical_f_4849);
} else {
elem_4773.detachEvent(cljs.core.name.call(null,actual_type_4846),canonical_f_4849);
}


var G__4850 = cljs.core.next.call(null,seq__4694_4839__$1);
var G__4851 = null;
var G__4852 = (0);
var G__4853 = (0);
seq__4694_4825 = G__4850;
chunk__4696_4826 = G__4851;
count__4697_4827 = G__4852;
i__4698_4828 = G__4853;
continue;
}
} else {
}
}
break;
}

var G__4854 = cljs.core.next.call(null,seq__4693_4816__$1);
var G__4855 = null;
var G__4856 = (0);
var G__4857 = (0);
seq__4693_4775 = G__4854;
chunk__4700_4776 = G__4855;
count__4701_4777 = G__4856;
i__4702_4778 = G__4857;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq4688){
var G__4689 = cljs.core.first.call(null,seq4688);
var seq4688__$1 = cljs.core.next.call(null,seq4688);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4689,seq4688__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___4879 = arguments.length;
var i__4865__auto___4880 = (0);
while(true){
if((i__4865__auto___4880 < len__4864__auto___4879)){
args__4870__auto__.push((arguments[i__4865__auto___4880]));

var G__4881 = (i__4865__auto___4880 + (1));
i__4865__auto___4880 = G__4881;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__4860_4882 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_4883 = cljs.core.nth.call(null,vec__4860_4882,(0),null);
var selector_4884 = cljs.core.nth.call(null,vec__4860_4882,(1),null);
var seq__4863_4885 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__4864_4886 = null;
var count__4865_4887 = (0);
var i__4866_4888 = (0);
while(true){
if((i__4866_4888 < count__4865_4887)){
var vec__4873_4889 = cljs.core._nth.call(null,chunk__4864_4886,i__4866_4888);
var type_4890 = cljs.core.nth.call(null,vec__4873_4889,(0),null);
var f_4891 = cljs.core.nth.call(null,vec__4873_4889,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_4890,((function (seq__4863_4885,chunk__4864_4886,count__4865_4887,i__4866_4888,vec__4873_4889,type_4890,f_4891,vec__4860_4882,elem_4883,selector_4884){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_4890,dommy$core$this_fn);

return f_4891.call(null,e);
});})(seq__4863_4885,chunk__4864_4886,count__4865_4887,i__4866_4888,vec__4873_4889,type_4890,f_4891,vec__4860_4882,elem_4883,selector_4884))
);


var G__4892 = seq__4863_4885;
var G__4893 = chunk__4864_4886;
var G__4894 = count__4865_4887;
var G__4895 = (i__4866_4888 + (1));
seq__4863_4885 = G__4892;
chunk__4864_4886 = G__4893;
count__4865_4887 = G__4894;
i__4866_4888 = G__4895;
continue;
} else {
var temp__5753__auto___4896 = cljs.core.seq.call(null,seq__4863_4885);
if(temp__5753__auto___4896){
var seq__4863_4897__$1 = temp__5753__auto___4896;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4863_4897__$1)){
var c__4679__auto___4898 = cljs.core.chunk_first.call(null,seq__4863_4897__$1);
var G__4899 = cljs.core.chunk_rest.call(null,seq__4863_4897__$1);
var G__4900 = c__4679__auto___4898;
var G__4901 = cljs.core.count.call(null,c__4679__auto___4898);
var G__4902 = (0);
seq__4863_4885 = G__4899;
chunk__4864_4886 = G__4900;
count__4865_4887 = G__4901;
i__4866_4888 = G__4902;
continue;
} else {
var vec__4876_4903 = cljs.core.first.call(null,seq__4863_4897__$1);
var type_4904 = cljs.core.nth.call(null,vec__4876_4903,(0),null);
var f_4905 = cljs.core.nth.call(null,vec__4876_4903,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_4904,((function (seq__4863_4885,chunk__4864_4886,count__4865_4887,i__4866_4888,vec__4876_4903,type_4904,f_4905,seq__4863_4897__$1,temp__5753__auto___4896,vec__4860_4882,elem_4883,selector_4884){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_4904,dommy$core$this_fn);

return f_4905.call(null,e);
});})(seq__4863_4885,chunk__4864_4886,count__4865_4887,i__4866_4888,vec__4876_4903,type_4904,f_4905,seq__4863_4897__$1,temp__5753__auto___4896,vec__4860_4882,elem_4883,selector_4884))
);


var G__4906 = cljs.core.next.call(null,seq__4863_4897__$1);
var G__4907 = null;
var G__4908 = (0);
var G__4909 = (0);
seq__4863_4885 = G__4906;
chunk__4864_4886 = G__4907;
count__4865_4887 = G__4908;
i__4866_4888 = G__4909;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq4858){
var G__4859 = cljs.core.first.call(null,seq4858);
var seq4858__$1 = cljs.core.next.call(null,seq4858);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4859,seq4858__$1);
}));


//# sourceMappingURL=core.js.map?rel=1658996655686
