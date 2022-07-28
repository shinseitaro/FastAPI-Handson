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
var G__1413 = arguments.length;
switch (G__1413) {
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
var G__1416 = arguments.length;
switch (G__1416) {
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
var G__1420 = arguments.length;
switch (G__1420) {
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
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__1418_SHARP_){
return (!((p1__1418_SHARP_ === base)));
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
var len__4864__auto___1440 = arguments.length;
var i__4865__auto___1441 = (0);
while(true){
if((i__4865__auto___1441 < len__4864__auto___1440)){
args__4870__auto__.push((arguments[i__4865__auto___1441]));

var G__1442 = (i__4865__auto___1441 + (1));
i__4865__auto___1441 = G__1442;
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
var seq__1424_1443 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__1425_1444 = null;
var count__1426_1445 = (0);
var i__1427_1446 = (0);
while(true){
if((i__1427_1446 < count__1426_1445)){
var vec__1434_1447 = cljs.core._nth.call(null,chunk__1425_1444,i__1427_1446);
var k_1448 = cljs.core.nth.call(null,vec__1434_1447,(0),null);
var v_1449 = cljs.core.nth.call(null,vec__1434_1447,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_1448),v_1449);


var G__1450 = seq__1424_1443;
var G__1451 = chunk__1425_1444;
var G__1452 = count__1426_1445;
var G__1453 = (i__1427_1446 + (1));
seq__1424_1443 = G__1450;
chunk__1425_1444 = G__1451;
count__1426_1445 = G__1452;
i__1427_1446 = G__1453;
continue;
} else {
var temp__5753__auto___1454 = cljs.core.seq.call(null,seq__1424_1443);
if(temp__5753__auto___1454){
var seq__1424_1455__$1 = temp__5753__auto___1454;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1424_1455__$1)){
var c__4679__auto___1456 = cljs.core.chunk_first.call(null,seq__1424_1455__$1);
var G__1457 = cljs.core.chunk_rest.call(null,seq__1424_1455__$1);
var G__1458 = c__4679__auto___1456;
var G__1459 = cljs.core.count.call(null,c__4679__auto___1456);
var G__1460 = (0);
seq__1424_1443 = G__1457;
chunk__1425_1444 = G__1458;
count__1426_1445 = G__1459;
i__1427_1446 = G__1460;
continue;
} else {
var vec__1437_1461 = cljs.core.first.call(null,seq__1424_1455__$1);
var k_1462 = cljs.core.nth.call(null,vec__1437_1461,(0),null);
var v_1463 = cljs.core.nth.call(null,vec__1437_1461,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_1462),v_1463);


var G__1464 = cljs.core.next.call(null,seq__1424_1455__$1);
var G__1465 = null;
var G__1466 = (0);
var G__1467 = (0);
seq__1424_1443 = G__1464;
chunk__1425_1444 = G__1465;
count__1426_1445 = G__1466;
i__1427_1446 = G__1467;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq1422){
var G__1423 = cljs.core.first.call(null,seq1422);
var seq1422__$1 = cljs.core.next.call(null,seq1422);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1423,seq1422__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___1474 = arguments.length;
var i__4865__auto___1475 = (0);
while(true){
if((i__4865__auto___1475 < len__4864__auto___1474)){
args__4870__auto__.push((arguments[i__4865__auto___1475]));

var G__1476 = (i__4865__auto___1475 + (1));
i__4865__auto___1475 = G__1476;
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
var seq__1470_1477 = cljs.core.seq.call(null,keywords);
var chunk__1471_1478 = null;
var count__1472_1479 = (0);
var i__1473_1480 = (0);
while(true){
if((i__1473_1480 < count__1472_1479)){
var kw_1481 = cljs.core._nth.call(null,chunk__1471_1478,i__1473_1480);
style.removeProperty(dommy.utils.as_str.call(null,kw_1481));


var G__1482 = seq__1470_1477;
var G__1483 = chunk__1471_1478;
var G__1484 = count__1472_1479;
var G__1485 = (i__1473_1480 + (1));
seq__1470_1477 = G__1482;
chunk__1471_1478 = G__1483;
count__1472_1479 = G__1484;
i__1473_1480 = G__1485;
continue;
} else {
var temp__5753__auto___1486 = cljs.core.seq.call(null,seq__1470_1477);
if(temp__5753__auto___1486){
var seq__1470_1487__$1 = temp__5753__auto___1486;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1470_1487__$1)){
var c__4679__auto___1488 = cljs.core.chunk_first.call(null,seq__1470_1487__$1);
var G__1489 = cljs.core.chunk_rest.call(null,seq__1470_1487__$1);
var G__1490 = c__4679__auto___1488;
var G__1491 = cljs.core.count.call(null,c__4679__auto___1488);
var G__1492 = (0);
seq__1470_1477 = G__1489;
chunk__1471_1478 = G__1490;
count__1472_1479 = G__1491;
i__1473_1480 = G__1492;
continue;
} else {
var kw_1493 = cljs.core.first.call(null,seq__1470_1487__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_1493));


var G__1494 = cljs.core.next.call(null,seq__1470_1487__$1);
var G__1495 = null;
var G__1496 = (0);
var G__1497 = (0);
seq__1470_1477 = G__1494;
chunk__1471_1478 = G__1495;
count__1472_1479 = G__1496;
i__1473_1480 = G__1497;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq1468){
var G__1469 = cljs.core.first.call(null,seq1468);
var seq1468__$1 = cljs.core.next.call(null,seq1468);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1469,seq1468__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___1516 = arguments.length;
var i__4865__auto___1517 = (0);
while(true){
if((i__4865__auto___1517 < len__4864__auto___1516)){
args__4870__auto__.push((arguments[i__4865__auto___1517]));

var G__1518 = (i__4865__auto___1517 + (1));
i__4865__auto___1517 = G__1518;
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

var seq__1500_1519 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__1501_1520 = null;
var count__1502_1521 = (0);
var i__1503_1522 = (0);
while(true){
if((i__1503_1522 < count__1502_1521)){
var vec__1510_1523 = cljs.core._nth.call(null,chunk__1501_1520,i__1503_1522);
var k_1524 = cljs.core.nth.call(null,vec__1510_1523,(0),null);
var v_1525 = cljs.core.nth.call(null,vec__1510_1523,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_1524,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_1525),"px"].join(''));


var G__1526 = seq__1500_1519;
var G__1527 = chunk__1501_1520;
var G__1528 = count__1502_1521;
var G__1529 = (i__1503_1522 + (1));
seq__1500_1519 = G__1526;
chunk__1501_1520 = G__1527;
count__1502_1521 = G__1528;
i__1503_1522 = G__1529;
continue;
} else {
var temp__5753__auto___1530 = cljs.core.seq.call(null,seq__1500_1519);
if(temp__5753__auto___1530){
var seq__1500_1531__$1 = temp__5753__auto___1530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1500_1531__$1)){
var c__4679__auto___1532 = cljs.core.chunk_first.call(null,seq__1500_1531__$1);
var G__1533 = cljs.core.chunk_rest.call(null,seq__1500_1531__$1);
var G__1534 = c__4679__auto___1532;
var G__1535 = cljs.core.count.call(null,c__4679__auto___1532);
var G__1536 = (0);
seq__1500_1519 = G__1533;
chunk__1501_1520 = G__1534;
count__1502_1521 = G__1535;
i__1503_1522 = G__1536;
continue;
} else {
var vec__1513_1537 = cljs.core.first.call(null,seq__1500_1531__$1);
var k_1538 = cljs.core.nth.call(null,vec__1513_1537,(0),null);
var v_1539 = cljs.core.nth.call(null,vec__1513_1537,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_1538,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_1539),"px"].join(''));


var G__1540 = cljs.core.next.call(null,seq__1500_1531__$1);
var G__1541 = null;
var G__1542 = (0);
var G__1543 = (0);
seq__1500_1519 = G__1540;
chunk__1501_1520 = G__1541;
count__1502_1521 = G__1542;
i__1503_1522 = G__1543;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq1498){
var G__1499 = cljs.core.first.call(null,seq1498);
var seq1498__$1 = cljs.core.next.call(null,seq1498);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1499,seq1498__$1);
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
var G__1549 = arguments.length;
switch (G__1549) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___1569 = arguments.length;
var i__4865__auto___1570 = (0);
while(true){
if((i__4865__auto___1570 < len__4864__auto___1569)){
args_arr__4885__auto__.push((arguments[i__4865__auto___1570]));

var G__1571 = (i__4865__auto___1570 + (1));
i__4865__auto___1570 = G__1571;
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
var G__1550 = elem;
(G__1550[k__$1] = v);

return G__1550;
} else {
var G__1551 = elem;
G__1551.setAttribute(k__$1,v);

return G__1551;
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

var seq__1552_1572 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__1553_1573 = null;
var count__1554_1574 = (0);
var i__1555_1575 = (0);
while(true){
if((i__1555_1575 < count__1554_1574)){
var vec__1562_1576 = cljs.core._nth.call(null,chunk__1553_1573,i__1555_1575);
var k_1577__$1 = cljs.core.nth.call(null,vec__1562_1576,(0),null);
var v_1578__$1 = cljs.core.nth.call(null,vec__1562_1576,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_1577__$1,v_1578__$1);


var G__1579 = seq__1552_1572;
var G__1580 = chunk__1553_1573;
var G__1581 = count__1554_1574;
var G__1582 = (i__1555_1575 + (1));
seq__1552_1572 = G__1579;
chunk__1553_1573 = G__1580;
count__1554_1574 = G__1581;
i__1555_1575 = G__1582;
continue;
} else {
var temp__5753__auto___1583 = cljs.core.seq.call(null,seq__1552_1572);
if(temp__5753__auto___1583){
var seq__1552_1584__$1 = temp__5753__auto___1583;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1552_1584__$1)){
var c__4679__auto___1585 = cljs.core.chunk_first.call(null,seq__1552_1584__$1);
var G__1586 = cljs.core.chunk_rest.call(null,seq__1552_1584__$1);
var G__1587 = c__4679__auto___1585;
var G__1588 = cljs.core.count.call(null,c__4679__auto___1585);
var G__1589 = (0);
seq__1552_1572 = G__1586;
chunk__1553_1573 = G__1587;
count__1554_1574 = G__1588;
i__1555_1575 = G__1589;
continue;
} else {
var vec__1565_1590 = cljs.core.first.call(null,seq__1552_1584__$1);
var k_1591__$1 = cljs.core.nth.call(null,vec__1565_1590,(0),null);
var v_1592__$1 = cljs.core.nth.call(null,vec__1565_1590,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_1591__$1,v_1592__$1);


var G__1593 = cljs.core.next.call(null,seq__1552_1584__$1);
var G__1594 = null;
var G__1595 = (0);
var G__1596 = (0);
seq__1552_1572 = G__1593;
chunk__1553_1573 = G__1594;
count__1554_1574 = G__1595;
i__1555_1575 = G__1596;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq1545){
var G__1546 = cljs.core.first.call(null,seq1545);
var seq1545__$1 = cljs.core.next.call(null,seq1545);
var G__1547 = cljs.core.first.call(null,seq1545__$1);
var seq1545__$2 = cljs.core.next.call(null,seq1545__$1);
var G__1548 = cljs.core.first.call(null,seq1545__$2);
var seq1545__$3 = cljs.core.next.call(null,seq1545__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1546,G__1547,G__1548,seq1545__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__1601 = arguments.length;
switch (G__1601) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___1607 = arguments.length;
var i__4865__auto___1608 = (0);
while(true){
if((i__4865__auto___1608 < len__4864__auto___1607)){
args_arr__4885__auto__.push((arguments[i__4865__auto___1608]));

var G__1609 = (i__4865__auto___1608 + (1));
i__4865__auto___1608 = G__1609;
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
var k_1610__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_1610__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_1610__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__1602_1611 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__1603_1612 = null;
var count__1604_1613 = (0);
var i__1605_1614 = (0);
while(true){
if((i__1605_1614 < count__1604_1613)){
var k_1615__$1 = cljs.core._nth.call(null,chunk__1603_1612,i__1605_1614);
dommy.core.remove_attr_BANG_.call(null,elem,k_1615__$1);


var G__1616 = seq__1602_1611;
var G__1617 = chunk__1603_1612;
var G__1618 = count__1604_1613;
var G__1619 = (i__1605_1614 + (1));
seq__1602_1611 = G__1616;
chunk__1603_1612 = G__1617;
count__1604_1613 = G__1618;
i__1605_1614 = G__1619;
continue;
} else {
var temp__5753__auto___1620 = cljs.core.seq.call(null,seq__1602_1611);
if(temp__5753__auto___1620){
var seq__1602_1621__$1 = temp__5753__auto___1620;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1602_1621__$1)){
var c__4679__auto___1622 = cljs.core.chunk_first.call(null,seq__1602_1621__$1);
var G__1623 = cljs.core.chunk_rest.call(null,seq__1602_1621__$1);
var G__1624 = c__4679__auto___1622;
var G__1625 = cljs.core.count.call(null,c__4679__auto___1622);
var G__1626 = (0);
seq__1602_1611 = G__1623;
chunk__1603_1612 = G__1624;
count__1604_1613 = G__1625;
i__1605_1614 = G__1626;
continue;
} else {
var k_1627__$1 = cljs.core.first.call(null,seq__1602_1621__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_1627__$1);


var G__1628 = cljs.core.next.call(null,seq__1602_1621__$1);
var G__1629 = null;
var G__1630 = (0);
var G__1631 = (0);
seq__1602_1611 = G__1628;
chunk__1603_1612 = G__1629;
count__1604_1613 = G__1630;
i__1605_1614 = G__1631;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq1598){
var G__1599 = cljs.core.first.call(null,seq1598);
var seq1598__$1 = cljs.core.next.call(null,seq1598);
var G__1600 = cljs.core.first.call(null,seq1598__$1);
var seq1598__$2 = cljs.core.next.call(null,seq1598__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1599,G__1600,seq1598__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__1633 = arguments.length;
switch (G__1633) {
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
var G__1639 = arguments.length;
switch (G__1639) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___1653 = arguments.length;
var i__4865__auto___1654 = (0);
while(true){
if((i__4865__auto___1654 < len__4864__auto___1653)){
args_arr__4885__auto__.push((arguments[i__4865__auto___1654]));

var G__1655 = (i__4865__auto___1654 + (1));
i__4865__auto___1654 = G__1655;
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
var temp__5751__auto___1656 = elem.classList;
if(cljs.core.truth_(temp__5751__auto___1656)){
var class_list_1657 = temp__5751__auto___1656;
var seq__1640_1658 = cljs.core.seq.call(null,classes__$1);
var chunk__1641_1659 = null;
var count__1642_1660 = (0);
var i__1643_1661 = (0);
while(true){
if((i__1643_1661 < count__1642_1660)){
var c_1662 = cljs.core._nth.call(null,chunk__1641_1659,i__1643_1661);
class_list_1657.add(c_1662);


var G__1663 = seq__1640_1658;
var G__1664 = chunk__1641_1659;
var G__1665 = count__1642_1660;
var G__1666 = (i__1643_1661 + (1));
seq__1640_1658 = G__1663;
chunk__1641_1659 = G__1664;
count__1642_1660 = G__1665;
i__1643_1661 = G__1666;
continue;
} else {
var temp__5753__auto___1667 = cljs.core.seq.call(null,seq__1640_1658);
if(temp__5753__auto___1667){
var seq__1640_1668__$1 = temp__5753__auto___1667;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1640_1668__$1)){
var c__4679__auto___1669 = cljs.core.chunk_first.call(null,seq__1640_1668__$1);
var G__1670 = cljs.core.chunk_rest.call(null,seq__1640_1668__$1);
var G__1671 = c__4679__auto___1669;
var G__1672 = cljs.core.count.call(null,c__4679__auto___1669);
var G__1673 = (0);
seq__1640_1658 = G__1670;
chunk__1641_1659 = G__1671;
count__1642_1660 = G__1672;
i__1643_1661 = G__1673;
continue;
} else {
var c_1674 = cljs.core.first.call(null,seq__1640_1668__$1);
class_list_1657.add(c_1674);


var G__1675 = cljs.core.next.call(null,seq__1640_1668__$1);
var G__1676 = null;
var G__1677 = (0);
var G__1678 = (0);
seq__1640_1658 = G__1675;
chunk__1641_1659 = G__1676;
count__1642_1660 = G__1677;
i__1643_1661 = G__1678;
continue;
}
} else {
}
}
break;
}
} else {
var seq__1644_1679 = cljs.core.seq.call(null,classes__$1);
var chunk__1645_1680 = null;
var count__1646_1681 = (0);
var i__1647_1682 = (0);
while(true){
if((i__1647_1682 < count__1646_1681)){
var c_1683 = cljs.core._nth.call(null,chunk__1645_1680,i__1647_1682);
var class_name_1684 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_1684,c_1683))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_1684 === ""))?c_1683:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_1684)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_1683)].join('')));
}


var G__1685 = seq__1644_1679;
var G__1686 = chunk__1645_1680;
var G__1687 = count__1646_1681;
var G__1688 = (i__1647_1682 + (1));
seq__1644_1679 = G__1685;
chunk__1645_1680 = G__1686;
count__1646_1681 = G__1687;
i__1647_1682 = G__1688;
continue;
} else {
var temp__5753__auto___1689 = cljs.core.seq.call(null,seq__1644_1679);
if(temp__5753__auto___1689){
var seq__1644_1690__$1 = temp__5753__auto___1689;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1644_1690__$1)){
var c__4679__auto___1691 = cljs.core.chunk_first.call(null,seq__1644_1690__$1);
var G__1692 = cljs.core.chunk_rest.call(null,seq__1644_1690__$1);
var G__1693 = c__4679__auto___1691;
var G__1694 = cljs.core.count.call(null,c__4679__auto___1691);
var G__1695 = (0);
seq__1644_1679 = G__1692;
chunk__1645_1680 = G__1693;
count__1646_1681 = G__1694;
i__1647_1682 = G__1695;
continue;
} else {
var c_1696 = cljs.core.first.call(null,seq__1644_1690__$1);
var class_name_1697 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_1697,c_1696))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_1697 === ""))?c_1696:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_1697)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_1696)].join('')));
}


var G__1698 = cljs.core.next.call(null,seq__1644_1690__$1);
var G__1699 = null;
var G__1700 = (0);
var G__1701 = (0);
seq__1644_1679 = G__1698;
chunk__1645_1680 = G__1699;
count__1646_1681 = G__1700;
i__1647_1682 = G__1701;
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
var seq__1648_1702 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__1649_1703 = null;
var count__1650_1704 = (0);
var i__1651_1705 = (0);
while(true){
if((i__1651_1705 < count__1650_1704)){
var c_1706 = cljs.core._nth.call(null,chunk__1649_1703,i__1651_1705);
dommy.core.add_class_BANG_.call(null,elem,c_1706);


var G__1707 = seq__1648_1702;
var G__1708 = chunk__1649_1703;
var G__1709 = count__1650_1704;
var G__1710 = (i__1651_1705 + (1));
seq__1648_1702 = G__1707;
chunk__1649_1703 = G__1708;
count__1650_1704 = G__1709;
i__1651_1705 = G__1710;
continue;
} else {
var temp__5753__auto___1711 = cljs.core.seq.call(null,seq__1648_1702);
if(temp__5753__auto___1711){
var seq__1648_1712__$1 = temp__5753__auto___1711;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1648_1712__$1)){
var c__4679__auto___1713 = cljs.core.chunk_first.call(null,seq__1648_1712__$1);
var G__1714 = cljs.core.chunk_rest.call(null,seq__1648_1712__$1);
var G__1715 = c__4679__auto___1713;
var G__1716 = cljs.core.count.call(null,c__4679__auto___1713);
var G__1717 = (0);
seq__1648_1702 = G__1714;
chunk__1649_1703 = G__1715;
count__1650_1704 = G__1716;
i__1651_1705 = G__1717;
continue;
} else {
var c_1718 = cljs.core.first.call(null,seq__1648_1712__$1);
dommy.core.add_class_BANG_.call(null,elem,c_1718);


var G__1719 = cljs.core.next.call(null,seq__1648_1712__$1);
var G__1720 = null;
var G__1721 = (0);
var G__1722 = (0);
seq__1648_1702 = G__1719;
chunk__1649_1703 = G__1720;
count__1650_1704 = G__1721;
i__1651_1705 = G__1722;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq1636){
var G__1637 = cljs.core.first.call(null,seq1636);
var seq1636__$1 = cljs.core.next.call(null,seq1636);
var G__1638 = cljs.core.first.call(null,seq1636__$1);
var seq1636__$2 = cljs.core.next.call(null,seq1636__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1637,G__1638,seq1636__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__1727 = arguments.length;
switch (G__1727) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___1733 = arguments.length;
var i__4865__auto___1734 = (0);
while(true){
if((i__4865__auto___1734 < len__4864__auto___1733)){
args_arr__4885__auto__.push((arguments[i__4865__auto___1734]));

var G__1735 = (i__4865__auto___1734 + (1));
i__4865__auto___1734 = G__1735;
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
var temp__5751__auto___1736 = elem.classList;
if(cljs.core.truth_(temp__5751__auto___1736)){
var class_list_1737 = temp__5751__auto___1736;
class_list_1737.remove(c__$1);
} else {
var class_name_1738 = dommy.core.class$.call(null,elem);
var new_class_name_1739 = dommy.utils.remove_class_str.call(null,class_name_1738,c__$1);
if((class_name_1738 === new_class_name_1739)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_1739);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__1728 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__1729 = null;
var count__1730 = (0);
var i__1731 = (0);
while(true){
if((i__1731 < count__1730)){
var c = cljs.core._nth.call(null,chunk__1729,i__1731);
dommy.core.remove_class_BANG_.call(null,elem,c);


var G__1740 = seq__1728;
var G__1741 = chunk__1729;
var G__1742 = count__1730;
var G__1743 = (i__1731 + (1));
seq__1728 = G__1740;
chunk__1729 = G__1741;
count__1730 = G__1742;
i__1731 = G__1743;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__1728);
if(temp__5753__auto__){
var seq__1728__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1728__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__1728__$1);
var G__1744 = cljs.core.chunk_rest.call(null,seq__1728__$1);
var G__1745 = c__4679__auto__;
var G__1746 = cljs.core.count.call(null,c__4679__auto__);
var G__1747 = (0);
seq__1728 = G__1744;
chunk__1729 = G__1745;
count__1730 = G__1746;
i__1731 = G__1747;
continue;
} else {
var c = cljs.core.first.call(null,seq__1728__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);


var G__1748 = cljs.core.next.call(null,seq__1728__$1);
var G__1749 = null;
var G__1750 = (0);
var G__1751 = (0);
seq__1728 = G__1748;
chunk__1729 = G__1749;
count__1730 = G__1750;
i__1731 = G__1751;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq1724){
var G__1725 = cljs.core.first.call(null,seq1724);
var seq1724__$1 = cljs.core.next.call(null,seq1724);
var G__1726 = cljs.core.first.call(null,seq1724__$1);
var seq1724__$2 = cljs.core.next.call(null,seq1724__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1725,G__1726,seq1724__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__1753 = arguments.length;
switch (G__1753) {
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
var temp__5751__auto___1755 = elem.classList;
if(cljs.core.truth_(temp__5751__auto___1755)){
var class_list_1756 = temp__5751__auto___1755;
class_list_1756.toggle(c__$1);
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
var G__1758 = arguments.length;
switch (G__1758) {
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
var G__1761 = arguments.length;
switch (G__1761) {
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
var G__1767 = arguments.length;
switch (G__1767) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___1774 = arguments.length;
var i__4865__auto___1775 = (0);
while(true){
if((i__4865__auto___1775 < len__4864__auto___1774)){
args_arr__4885__auto__.push((arguments[i__4865__auto___1775]));

var G__1776 = (i__4865__auto___1775 + (1));
i__4865__auto___1775 = G__1776;
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
var G__1768 = parent;
G__1768.appendChild(child);

return G__1768;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__1769_1777 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__1770_1778 = null;
var count__1771_1779 = (0);
var i__1772_1780 = (0);
while(true){
if((i__1772_1780 < count__1771_1779)){
var c_1781 = cljs.core._nth.call(null,chunk__1770_1778,i__1772_1780);
dommy.core.append_BANG_.call(null,parent,c_1781);


var G__1782 = seq__1769_1777;
var G__1783 = chunk__1770_1778;
var G__1784 = count__1771_1779;
var G__1785 = (i__1772_1780 + (1));
seq__1769_1777 = G__1782;
chunk__1770_1778 = G__1783;
count__1771_1779 = G__1784;
i__1772_1780 = G__1785;
continue;
} else {
var temp__5753__auto___1786 = cljs.core.seq.call(null,seq__1769_1777);
if(temp__5753__auto___1786){
var seq__1769_1787__$1 = temp__5753__auto___1786;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1769_1787__$1)){
var c__4679__auto___1788 = cljs.core.chunk_first.call(null,seq__1769_1787__$1);
var G__1789 = cljs.core.chunk_rest.call(null,seq__1769_1787__$1);
var G__1790 = c__4679__auto___1788;
var G__1791 = cljs.core.count.call(null,c__4679__auto___1788);
var G__1792 = (0);
seq__1769_1777 = G__1789;
chunk__1770_1778 = G__1790;
count__1771_1779 = G__1791;
i__1772_1780 = G__1792;
continue;
} else {
var c_1793 = cljs.core.first.call(null,seq__1769_1787__$1);
dommy.core.append_BANG_.call(null,parent,c_1793);


var G__1794 = cljs.core.next.call(null,seq__1769_1787__$1);
var G__1795 = null;
var G__1796 = (0);
var G__1797 = (0);
seq__1769_1777 = G__1794;
chunk__1770_1778 = G__1795;
count__1771_1779 = G__1796;
i__1772_1780 = G__1797;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq1764){
var G__1765 = cljs.core.first.call(null,seq1764);
var seq1764__$1 = cljs.core.next.call(null,seq1764);
var G__1766 = cljs.core.first.call(null,seq1764__$1);
var seq1764__$2 = cljs.core.next.call(null,seq1764__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1765,G__1766,seq1764__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__1802 = arguments.length;
switch (G__1802) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___1809 = arguments.length;
var i__4865__auto___1810 = (0);
while(true){
if((i__4865__auto___1810 < len__4864__auto___1809)){
args_arr__4885__auto__.push((arguments[i__4865__auto___1810]));

var G__1811 = (i__4865__auto___1810 + (1));
i__4865__auto___1810 = G__1811;
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
var G__1803 = parent;
G__1803.insertBefore(child,parent.firstChild);

return G__1803;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__1804_1812 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__1805_1813 = null;
var count__1806_1814 = (0);
var i__1807_1815 = (0);
while(true){
if((i__1807_1815 < count__1806_1814)){
var c_1816 = cljs.core._nth.call(null,chunk__1805_1813,i__1807_1815);
dommy.core.prepend_BANG_.call(null,parent,c_1816);


var G__1817 = seq__1804_1812;
var G__1818 = chunk__1805_1813;
var G__1819 = count__1806_1814;
var G__1820 = (i__1807_1815 + (1));
seq__1804_1812 = G__1817;
chunk__1805_1813 = G__1818;
count__1806_1814 = G__1819;
i__1807_1815 = G__1820;
continue;
} else {
var temp__5753__auto___1821 = cljs.core.seq.call(null,seq__1804_1812);
if(temp__5753__auto___1821){
var seq__1804_1822__$1 = temp__5753__auto___1821;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1804_1822__$1)){
var c__4679__auto___1823 = cljs.core.chunk_first.call(null,seq__1804_1822__$1);
var G__1824 = cljs.core.chunk_rest.call(null,seq__1804_1822__$1);
var G__1825 = c__4679__auto___1823;
var G__1826 = cljs.core.count.call(null,c__4679__auto___1823);
var G__1827 = (0);
seq__1804_1812 = G__1824;
chunk__1805_1813 = G__1825;
count__1806_1814 = G__1826;
i__1807_1815 = G__1827;
continue;
} else {
var c_1828 = cljs.core.first.call(null,seq__1804_1822__$1);
dommy.core.prepend_BANG_.call(null,parent,c_1828);


var G__1829 = cljs.core.next.call(null,seq__1804_1822__$1);
var G__1830 = null;
var G__1831 = (0);
var G__1832 = (0);
seq__1804_1812 = G__1829;
chunk__1805_1813 = G__1830;
count__1806_1814 = G__1831;
i__1807_1815 = G__1832;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq1799){
var G__1800 = cljs.core.first.call(null,seq1799);
var seq1799__$1 = cljs.core.next.call(null,seq1799);
var G__1801 = cljs.core.first.call(null,seq1799__$1);
var seq1799__$2 = cljs.core.next.call(null,seq1799__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1800,G__1801,seq1799__$2);
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
var temp__5751__auto___1833 = other.nextSibling;
if(cljs.core.truth_(temp__5751__auto___1833)){
var next_1834 = temp__5751__auto___1833;
dommy.core.insert_before_BANG_.call(null,elem,next_1834);
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
var G__1836 = arguments.length;
switch (G__1836) {
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
var G__1837 = p;
G__1837.removeChild(elem);

return G__1837;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__1839){
var vec__1840 = p__1839;
var special_mouse_event = cljs.core.nth.call(null,vec__1840,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__1840,(1),null);
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
var len__4864__auto___1846 = arguments.length;
var i__4865__auto___1847 = (0);
while(true){
if((i__4865__auto___1847 < len__4864__auto___1846)){
args__4870__auto__.push((arguments[i__4865__auto___1847]));

var G__1848 = (i__4865__auto___1847 + (1));
i__4865__auto___1847 = G__1848;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq1843){
var G__1844 = cljs.core.first.call(null,seq1843);
var seq1843__$1 = cljs.core.next.call(null,seq1843);
var G__1845 = cljs.core.first.call(null,seq1843__$1);
var seq1843__$2 = cljs.core.next.call(null,seq1843__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1844,G__1845,seq1843__$2);
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
var len__4864__auto___1930 = arguments.length;
var i__4865__auto___1931 = (0);
while(true){
if((i__4865__auto___1931 < len__4864__auto___1930)){
args__4870__auto__.push((arguments[i__4865__auto___1931]));

var G__1932 = (i__4865__auto___1931 + (1));
i__4865__auto___1931 = G__1932;
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

var vec__1851_1933 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_1934 = cljs.core.nth.call(null,vec__1851_1933,(0),null);
var selector_1935 = cljs.core.nth.call(null,vec__1851_1933,(1),null);
var seq__1854_1936 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__1861_1937 = null;
var count__1862_1938 = (0);
var i__1863_1939 = (0);
while(true){
if((i__1863_1939 < count__1862_1938)){
var vec__1900_1940 = cljs.core._nth.call(null,chunk__1861_1937,i__1863_1939);
var orig_type_1941 = cljs.core.nth.call(null,vec__1900_1940,(0),null);
var f_1942 = cljs.core.nth.call(null,vec__1900_1940,(1),null);
var seq__1864_1943 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_1941,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_1941,cljs.core.identity])));
var chunk__1866_1944 = null;
var count__1867_1945 = (0);
var i__1868_1946 = (0);
while(true){
if((i__1868_1946 < count__1867_1945)){
var vec__1909_1947 = cljs.core._nth.call(null,chunk__1866_1944,i__1868_1946);
var actual_type_1948 = cljs.core.nth.call(null,vec__1909_1947,(0),null);
var factory_1949 = cljs.core.nth.call(null,vec__1909_1947,(1),null);
var canonical_f_1950 = (cljs.core.truth_(selector_1935)?cljs.core.partial.call(null,dommy.core.live_listener,elem_1934,selector_1935):cljs.core.identity).call(null,factory_1949.call(null,f_1942));
dommy.core.update_event_listeners_BANG_.call(null,elem_1934,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_1935,actual_type_1948,f_1942], null),canonical_f_1950);

if(cljs.core.truth_(elem_1934.addEventListener)){
elem_1934.addEventListener(cljs.core.name.call(null,actual_type_1948),canonical_f_1950);
} else {
elem_1934.attachEvent(cljs.core.name.call(null,actual_type_1948),canonical_f_1950);
}


var G__1951 = seq__1864_1943;
var G__1952 = chunk__1866_1944;
var G__1953 = count__1867_1945;
var G__1954 = (i__1868_1946 + (1));
seq__1864_1943 = G__1951;
chunk__1866_1944 = G__1952;
count__1867_1945 = G__1953;
i__1868_1946 = G__1954;
continue;
} else {
var temp__5753__auto___1955 = cljs.core.seq.call(null,seq__1864_1943);
if(temp__5753__auto___1955){
var seq__1864_1956__$1 = temp__5753__auto___1955;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1864_1956__$1)){
var c__4679__auto___1957 = cljs.core.chunk_first.call(null,seq__1864_1956__$1);
var G__1958 = cljs.core.chunk_rest.call(null,seq__1864_1956__$1);
var G__1959 = c__4679__auto___1957;
var G__1960 = cljs.core.count.call(null,c__4679__auto___1957);
var G__1961 = (0);
seq__1864_1943 = G__1958;
chunk__1866_1944 = G__1959;
count__1867_1945 = G__1960;
i__1868_1946 = G__1961;
continue;
} else {
var vec__1912_1962 = cljs.core.first.call(null,seq__1864_1956__$1);
var actual_type_1963 = cljs.core.nth.call(null,vec__1912_1962,(0),null);
var factory_1964 = cljs.core.nth.call(null,vec__1912_1962,(1),null);
var canonical_f_1965 = (cljs.core.truth_(selector_1935)?cljs.core.partial.call(null,dommy.core.live_listener,elem_1934,selector_1935):cljs.core.identity).call(null,factory_1964.call(null,f_1942));
dommy.core.update_event_listeners_BANG_.call(null,elem_1934,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_1935,actual_type_1963,f_1942], null),canonical_f_1965);

if(cljs.core.truth_(elem_1934.addEventListener)){
elem_1934.addEventListener(cljs.core.name.call(null,actual_type_1963),canonical_f_1965);
} else {
elem_1934.attachEvent(cljs.core.name.call(null,actual_type_1963),canonical_f_1965);
}


var G__1966 = cljs.core.next.call(null,seq__1864_1956__$1);
var G__1967 = null;
var G__1968 = (0);
var G__1969 = (0);
seq__1864_1943 = G__1966;
chunk__1866_1944 = G__1967;
count__1867_1945 = G__1968;
i__1868_1946 = G__1969;
continue;
}
} else {
}
}
break;
}

var G__1970 = seq__1854_1936;
var G__1971 = chunk__1861_1937;
var G__1972 = count__1862_1938;
var G__1973 = (i__1863_1939 + (1));
seq__1854_1936 = G__1970;
chunk__1861_1937 = G__1971;
count__1862_1938 = G__1972;
i__1863_1939 = G__1973;
continue;
} else {
var temp__5753__auto___1974 = cljs.core.seq.call(null,seq__1854_1936);
if(temp__5753__auto___1974){
var seq__1854_1975__$1 = temp__5753__auto___1974;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1854_1975__$1)){
var c__4679__auto___1976 = cljs.core.chunk_first.call(null,seq__1854_1975__$1);
var G__1977 = cljs.core.chunk_rest.call(null,seq__1854_1975__$1);
var G__1978 = c__4679__auto___1976;
var G__1979 = cljs.core.count.call(null,c__4679__auto___1976);
var G__1980 = (0);
seq__1854_1936 = G__1977;
chunk__1861_1937 = G__1978;
count__1862_1938 = G__1979;
i__1863_1939 = G__1980;
continue;
} else {
var vec__1915_1981 = cljs.core.first.call(null,seq__1854_1975__$1);
var orig_type_1982 = cljs.core.nth.call(null,vec__1915_1981,(0),null);
var f_1983 = cljs.core.nth.call(null,vec__1915_1981,(1),null);
var seq__1855_1984 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_1982,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_1982,cljs.core.identity])));
var chunk__1857_1985 = null;
var count__1858_1986 = (0);
var i__1859_1987 = (0);
while(true){
if((i__1859_1987 < count__1858_1986)){
var vec__1924_1988 = cljs.core._nth.call(null,chunk__1857_1985,i__1859_1987);
var actual_type_1989 = cljs.core.nth.call(null,vec__1924_1988,(0),null);
var factory_1990 = cljs.core.nth.call(null,vec__1924_1988,(1),null);
var canonical_f_1991 = (cljs.core.truth_(selector_1935)?cljs.core.partial.call(null,dommy.core.live_listener,elem_1934,selector_1935):cljs.core.identity).call(null,factory_1990.call(null,f_1983));
dommy.core.update_event_listeners_BANG_.call(null,elem_1934,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_1935,actual_type_1989,f_1983], null),canonical_f_1991);

if(cljs.core.truth_(elem_1934.addEventListener)){
elem_1934.addEventListener(cljs.core.name.call(null,actual_type_1989),canonical_f_1991);
} else {
elem_1934.attachEvent(cljs.core.name.call(null,actual_type_1989),canonical_f_1991);
}


var G__1992 = seq__1855_1984;
var G__1993 = chunk__1857_1985;
var G__1994 = count__1858_1986;
var G__1995 = (i__1859_1987 + (1));
seq__1855_1984 = G__1992;
chunk__1857_1985 = G__1993;
count__1858_1986 = G__1994;
i__1859_1987 = G__1995;
continue;
} else {
var temp__5753__auto___1996__$1 = cljs.core.seq.call(null,seq__1855_1984);
if(temp__5753__auto___1996__$1){
var seq__1855_1997__$1 = temp__5753__auto___1996__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1855_1997__$1)){
var c__4679__auto___1998 = cljs.core.chunk_first.call(null,seq__1855_1997__$1);
var G__1999 = cljs.core.chunk_rest.call(null,seq__1855_1997__$1);
var G__2000 = c__4679__auto___1998;
var G__2001 = cljs.core.count.call(null,c__4679__auto___1998);
var G__2002 = (0);
seq__1855_1984 = G__1999;
chunk__1857_1985 = G__2000;
count__1858_1986 = G__2001;
i__1859_1987 = G__2002;
continue;
} else {
var vec__1927_2003 = cljs.core.first.call(null,seq__1855_1997__$1);
var actual_type_2004 = cljs.core.nth.call(null,vec__1927_2003,(0),null);
var factory_2005 = cljs.core.nth.call(null,vec__1927_2003,(1),null);
var canonical_f_2006 = (cljs.core.truth_(selector_1935)?cljs.core.partial.call(null,dommy.core.live_listener,elem_1934,selector_1935):cljs.core.identity).call(null,factory_2005.call(null,f_1983));
dommy.core.update_event_listeners_BANG_.call(null,elem_1934,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_1935,actual_type_2004,f_1983], null),canonical_f_2006);

if(cljs.core.truth_(elem_1934.addEventListener)){
elem_1934.addEventListener(cljs.core.name.call(null,actual_type_2004),canonical_f_2006);
} else {
elem_1934.attachEvent(cljs.core.name.call(null,actual_type_2004),canonical_f_2006);
}


var G__2007 = cljs.core.next.call(null,seq__1855_1997__$1);
var G__2008 = null;
var G__2009 = (0);
var G__2010 = (0);
seq__1855_1984 = G__2007;
chunk__1857_1985 = G__2008;
count__1858_1986 = G__2009;
i__1859_1987 = G__2010;
continue;
}
} else {
}
}
break;
}

var G__2011 = cljs.core.next.call(null,seq__1854_1975__$1);
var G__2012 = null;
var G__2013 = (0);
var G__2014 = (0);
seq__1854_1936 = G__2011;
chunk__1861_1937 = G__2012;
count__1862_1938 = G__2013;
i__1863_1939 = G__2014;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq1849){
var G__1850 = cljs.core.first.call(null,seq1849);
var seq1849__$1 = cljs.core.next.call(null,seq1849);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1850,seq1849__$1);
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
var len__4864__auto___2096 = arguments.length;
var i__4865__auto___2097 = (0);
while(true){
if((i__4865__auto___2097 < len__4864__auto___2096)){
args__4870__auto__.push((arguments[i__4865__auto___2097]));

var G__2098 = (i__4865__auto___2097 + (1));
i__4865__auto___2097 = G__2098;
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

var vec__2017_2099 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_2100 = cljs.core.nth.call(null,vec__2017_2099,(0),null);
var selector_2101 = cljs.core.nth.call(null,vec__2017_2099,(1),null);
var seq__2020_2102 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__2027_2103 = null;
var count__2028_2104 = (0);
var i__2029_2105 = (0);
while(true){
if((i__2029_2105 < count__2028_2104)){
var vec__2066_2106 = cljs.core._nth.call(null,chunk__2027_2103,i__2029_2105);
var orig_type_2107 = cljs.core.nth.call(null,vec__2066_2106,(0),null);
var f_2108 = cljs.core.nth.call(null,vec__2066_2106,(1),null);
var seq__2030_2109 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_2107,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_2107,cljs.core.identity])));
var chunk__2032_2110 = null;
var count__2033_2111 = (0);
var i__2034_2112 = (0);
while(true){
if((i__2034_2112 < count__2033_2111)){
var vec__2075_2113 = cljs.core._nth.call(null,chunk__2032_2110,i__2034_2112);
var actual_type_2114 = cljs.core.nth.call(null,vec__2075_2113,(0),null);
var __2115 = cljs.core.nth.call(null,vec__2075_2113,(1),null);
var keys_2116 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_2101,actual_type_2114,f_2108], null);
var canonical_f_2117 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_2100),keys_2116);
dommy.core.update_event_listeners_BANG_.call(null,elem_2100,dommy.utils.dissoc_in,keys_2116);

if(cljs.core.truth_(elem_2100.removeEventListener)){
elem_2100.removeEventListener(cljs.core.name.call(null,actual_type_2114),canonical_f_2117);
} else {
elem_2100.detachEvent(cljs.core.name.call(null,actual_type_2114),canonical_f_2117);
}


var G__2118 = seq__2030_2109;
var G__2119 = chunk__2032_2110;
var G__2120 = count__2033_2111;
var G__2121 = (i__2034_2112 + (1));
seq__2030_2109 = G__2118;
chunk__2032_2110 = G__2119;
count__2033_2111 = G__2120;
i__2034_2112 = G__2121;
continue;
} else {
var temp__5753__auto___2122 = cljs.core.seq.call(null,seq__2030_2109);
if(temp__5753__auto___2122){
var seq__2030_2123__$1 = temp__5753__auto___2122;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2030_2123__$1)){
var c__4679__auto___2124 = cljs.core.chunk_first.call(null,seq__2030_2123__$1);
var G__2125 = cljs.core.chunk_rest.call(null,seq__2030_2123__$1);
var G__2126 = c__4679__auto___2124;
var G__2127 = cljs.core.count.call(null,c__4679__auto___2124);
var G__2128 = (0);
seq__2030_2109 = G__2125;
chunk__2032_2110 = G__2126;
count__2033_2111 = G__2127;
i__2034_2112 = G__2128;
continue;
} else {
var vec__2078_2129 = cljs.core.first.call(null,seq__2030_2123__$1);
var actual_type_2130 = cljs.core.nth.call(null,vec__2078_2129,(0),null);
var __2131 = cljs.core.nth.call(null,vec__2078_2129,(1),null);
var keys_2132 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_2101,actual_type_2130,f_2108], null);
var canonical_f_2133 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_2100),keys_2132);
dommy.core.update_event_listeners_BANG_.call(null,elem_2100,dommy.utils.dissoc_in,keys_2132);

if(cljs.core.truth_(elem_2100.removeEventListener)){
elem_2100.removeEventListener(cljs.core.name.call(null,actual_type_2130),canonical_f_2133);
} else {
elem_2100.detachEvent(cljs.core.name.call(null,actual_type_2130),canonical_f_2133);
}


var G__2134 = cljs.core.next.call(null,seq__2030_2123__$1);
var G__2135 = null;
var G__2136 = (0);
var G__2137 = (0);
seq__2030_2109 = G__2134;
chunk__2032_2110 = G__2135;
count__2033_2111 = G__2136;
i__2034_2112 = G__2137;
continue;
}
} else {
}
}
break;
}

var G__2138 = seq__2020_2102;
var G__2139 = chunk__2027_2103;
var G__2140 = count__2028_2104;
var G__2141 = (i__2029_2105 + (1));
seq__2020_2102 = G__2138;
chunk__2027_2103 = G__2139;
count__2028_2104 = G__2140;
i__2029_2105 = G__2141;
continue;
} else {
var temp__5753__auto___2142 = cljs.core.seq.call(null,seq__2020_2102);
if(temp__5753__auto___2142){
var seq__2020_2143__$1 = temp__5753__auto___2142;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2020_2143__$1)){
var c__4679__auto___2144 = cljs.core.chunk_first.call(null,seq__2020_2143__$1);
var G__2145 = cljs.core.chunk_rest.call(null,seq__2020_2143__$1);
var G__2146 = c__4679__auto___2144;
var G__2147 = cljs.core.count.call(null,c__4679__auto___2144);
var G__2148 = (0);
seq__2020_2102 = G__2145;
chunk__2027_2103 = G__2146;
count__2028_2104 = G__2147;
i__2029_2105 = G__2148;
continue;
} else {
var vec__2081_2149 = cljs.core.first.call(null,seq__2020_2143__$1);
var orig_type_2150 = cljs.core.nth.call(null,vec__2081_2149,(0),null);
var f_2151 = cljs.core.nth.call(null,vec__2081_2149,(1),null);
var seq__2021_2152 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_2150,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_2150,cljs.core.identity])));
var chunk__2023_2153 = null;
var count__2024_2154 = (0);
var i__2025_2155 = (0);
while(true){
if((i__2025_2155 < count__2024_2154)){
var vec__2090_2156 = cljs.core._nth.call(null,chunk__2023_2153,i__2025_2155);
var actual_type_2157 = cljs.core.nth.call(null,vec__2090_2156,(0),null);
var __2158 = cljs.core.nth.call(null,vec__2090_2156,(1),null);
var keys_2159 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_2101,actual_type_2157,f_2151], null);
var canonical_f_2160 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_2100),keys_2159);
dommy.core.update_event_listeners_BANG_.call(null,elem_2100,dommy.utils.dissoc_in,keys_2159);

if(cljs.core.truth_(elem_2100.removeEventListener)){
elem_2100.removeEventListener(cljs.core.name.call(null,actual_type_2157),canonical_f_2160);
} else {
elem_2100.detachEvent(cljs.core.name.call(null,actual_type_2157),canonical_f_2160);
}


var G__2161 = seq__2021_2152;
var G__2162 = chunk__2023_2153;
var G__2163 = count__2024_2154;
var G__2164 = (i__2025_2155 + (1));
seq__2021_2152 = G__2161;
chunk__2023_2153 = G__2162;
count__2024_2154 = G__2163;
i__2025_2155 = G__2164;
continue;
} else {
var temp__5753__auto___2165__$1 = cljs.core.seq.call(null,seq__2021_2152);
if(temp__5753__auto___2165__$1){
var seq__2021_2166__$1 = temp__5753__auto___2165__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2021_2166__$1)){
var c__4679__auto___2167 = cljs.core.chunk_first.call(null,seq__2021_2166__$1);
var G__2168 = cljs.core.chunk_rest.call(null,seq__2021_2166__$1);
var G__2169 = c__4679__auto___2167;
var G__2170 = cljs.core.count.call(null,c__4679__auto___2167);
var G__2171 = (0);
seq__2021_2152 = G__2168;
chunk__2023_2153 = G__2169;
count__2024_2154 = G__2170;
i__2025_2155 = G__2171;
continue;
} else {
var vec__2093_2172 = cljs.core.first.call(null,seq__2021_2166__$1);
var actual_type_2173 = cljs.core.nth.call(null,vec__2093_2172,(0),null);
var __2174 = cljs.core.nth.call(null,vec__2093_2172,(1),null);
var keys_2175 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_2101,actual_type_2173,f_2151], null);
var canonical_f_2176 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_2100),keys_2175);
dommy.core.update_event_listeners_BANG_.call(null,elem_2100,dommy.utils.dissoc_in,keys_2175);

if(cljs.core.truth_(elem_2100.removeEventListener)){
elem_2100.removeEventListener(cljs.core.name.call(null,actual_type_2173),canonical_f_2176);
} else {
elem_2100.detachEvent(cljs.core.name.call(null,actual_type_2173),canonical_f_2176);
}


var G__2177 = cljs.core.next.call(null,seq__2021_2166__$1);
var G__2178 = null;
var G__2179 = (0);
var G__2180 = (0);
seq__2021_2152 = G__2177;
chunk__2023_2153 = G__2178;
count__2024_2154 = G__2179;
i__2025_2155 = G__2180;
continue;
}
} else {
}
}
break;
}

var G__2181 = cljs.core.next.call(null,seq__2020_2143__$1);
var G__2182 = null;
var G__2183 = (0);
var G__2184 = (0);
seq__2020_2102 = G__2181;
chunk__2027_2103 = G__2182;
count__2028_2104 = G__2183;
i__2029_2105 = G__2184;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq2015){
var G__2016 = cljs.core.first.call(null,seq2015);
var seq2015__$1 = cljs.core.next.call(null,seq2015);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2016,seq2015__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___2206 = arguments.length;
var i__4865__auto___2207 = (0);
while(true){
if((i__4865__auto___2207 < len__4864__auto___2206)){
args__4870__auto__.push((arguments[i__4865__auto___2207]));

var G__2208 = (i__4865__auto___2207 + (1));
i__4865__auto___2207 = G__2208;
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

var vec__2187_2209 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_2210 = cljs.core.nth.call(null,vec__2187_2209,(0),null);
var selector_2211 = cljs.core.nth.call(null,vec__2187_2209,(1),null);
var seq__2190_2212 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__2191_2213 = null;
var count__2192_2214 = (0);
var i__2193_2215 = (0);
while(true){
if((i__2193_2215 < count__2192_2214)){
var vec__2200_2216 = cljs.core._nth.call(null,chunk__2191_2213,i__2193_2215);
var type_2217 = cljs.core.nth.call(null,vec__2200_2216,(0),null);
var f_2218 = cljs.core.nth.call(null,vec__2200_2216,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_2217,((function (seq__2190_2212,chunk__2191_2213,count__2192_2214,i__2193_2215,vec__2200_2216,type_2217,f_2218,vec__2187_2209,elem_2210,selector_2211){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_2217,dommy$core$this_fn);

return f_2218.call(null,e);
});})(seq__2190_2212,chunk__2191_2213,count__2192_2214,i__2193_2215,vec__2200_2216,type_2217,f_2218,vec__2187_2209,elem_2210,selector_2211))
);


var G__2219 = seq__2190_2212;
var G__2220 = chunk__2191_2213;
var G__2221 = count__2192_2214;
var G__2222 = (i__2193_2215 + (1));
seq__2190_2212 = G__2219;
chunk__2191_2213 = G__2220;
count__2192_2214 = G__2221;
i__2193_2215 = G__2222;
continue;
} else {
var temp__5753__auto___2223 = cljs.core.seq.call(null,seq__2190_2212);
if(temp__5753__auto___2223){
var seq__2190_2224__$1 = temp__5753__auto___2223;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2190_2224__$1)){
var c__4679__auto___2225 = cljs.core.chunk_first.call(null,seq__2190_2224__$1);
var G__2226 = cljs.core.chunk_rest.call(null,seq__2190_2224__$1);
var G__2227 = c__4679__auto___2225;
var G__2228 = cljs.core.count.call(null,c__4679__auto___2225);
var G__2229 = (0);
seq__2190_2212 = G__2226;
chunk__2191_2213 = G__2227;
count__2192_2214 = G__2228;
i__2193_2215 = G__2229;
continue;
} else {
var vec__2203_2230 = cljs.core.first.call(null,seq__2190_2224__$1);
var type_2231 = cljs.core.nth.call(null,vec__2203_2230,(0),null);
var f_2232 = cljs.core.nth.call(null,vec__2203_2230,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_2231,((function (seq__2190_2212,chunk__2191_2213,count__2192_2214,i__2193_2215,vec__2203_2230,type_2231,f_2232,seq__2190_2224__$1,temp__5753__auto___2223,vec__2187_2209,elem_2210,selector_2211){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_2231,dommy$core$this_fn);

return f_2232.call(null,e);
});})(seq__2190_2212,chunk__2191_2213,count__2192_2214,i__2193_2215,vec__2203_2230,type_2231,f_2232,seq__2190_2224__$1,temp__5753__auto___2223,vec__2187_2209,elem_2210,selector_2211))
);


var G__2233 = cljs.core.next.call(null,seq__2190_2224__$1);
var G__2234 = null;
var G__2235 = (0);
var G__2236 = (0);
seq__2190_2212 = G__2233;
chunk__2191_2213 = G__2234;
count__2192_2214 = G__2235;
i__2193_2215 = G__2236;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq2185){
var G__2186 = cljs.core.first.call(null,seq2185);
var seq2185__$1 = cljs.core.next.call(null,seq2185);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2186,seq2185__$1);
}));


//# sourceMappingURL=core.js.map?rel=1658833216558
