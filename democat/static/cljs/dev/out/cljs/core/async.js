// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
goog.scope(function(){
cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29239 = arguments.length;
switch (G__29239) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29240 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29240 = (function (f,blockable,meta29241){
this.f = f;
this.blockable = blockable;
this.meta29241 = meta29241;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29242,meta29241__$1){
var self__ = this;
var _29242__$1 = this;
return (new cljs.core.async.t_cljs$core$async29240(self__.f,self__.blockable,meta29241__$1));
}));

(cljs.core.async.t_cljs$core$async29240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29242){
var self__ = this;
var _29242__$1 = this;
return self__.meta29241;
}));

(cljs.core.async.t_cljs$core$async29240.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29240.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29240.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29240.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29240.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29241","meta29241",-1117953873,null)], null);
}));

(cljs.core.async.t_cljs$core$async29240.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29240.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29240");

(cljs.core.async.t_cljs$core$async29240.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async29240");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29240.
 */
cljs.core.async.__GT_t_cljs$core$async29240 = (function cljs$core$async$__GT_t_cljs$core$async29240(f__$1,blockable__$1,meta29241){
return (new cljs.core.async.t_cljs$core$async29240(f__$1,blockable__$1,meta29241));
});

}

return (new cljs.core.async.t_cljs$core$async29240(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__29246 = arguments.length;
switch (G__29246) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29249 = arguments.length;
switch (G__29249) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__29252 = arguments.length;
switch (G__29252) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29254 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29254);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_29254);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29256 = arguments.length;
switch (G__29256) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___29258 = n;
var x_29259 = (0);
while(true){
if((x_29259 < n__4741__auto___29258)){
(a[x_29259] = x_29259);

var G__29260 = (x_29259 + (1));
x_29259 = G__29260;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle.call(null,a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29261 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29261 = (function (flag,meta29262){
this.flag = flag;
this.meta29262 = meta29262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29263,meta29262__$1){
var self__ = this;
var _29263__$1 = this;
return (new cljs.core.async.t_cljs$core$async29261(self__.flag,meta29262__$1));
}));

(cljs.core.async.t_cljs$core$async29261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29263){
var self__ = this;
var _29263__$1 = this;
return self__.meta29262;
}));

(cljs.core.async.t_cljs$core$async29261.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29261.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async29261.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29261.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29261.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29262","meta29262",750927162,null)], null);
}));

(cljs.core.async.t_cljs$core$async29261.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29261.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29261");

(cljs.core.async.t_cljs$core$async29261.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async29261");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29261.
 */
cljs.core.async.__GT_t_cljs$core$async29261 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29261(flag__$1,meta29262){
return (new cljs.core.async.t_cljs$core$async29261(flag__$1,meta29262));
});

}

return (new cljs.core.async.t_cljs$core$async29261(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29264 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29264 = (function (flag,cb,meta29265){
this.flag = flag;
this.cb = cb;
this.meta29265 = meta29265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29266,meta29265__$1){
var self__ = this;
var _29266__$1 = this;
return (new cljs.core.async.t_cljs$core$async29264(self__.flag,self__.cb,meta29265__$1));
}));

(cljs.core.async.t_cljs$core$async29264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29266){
var self__ = this;
var _29266__$1 = this;
return self__.meta29265;
}));

(cljs.core.async.t_cljs$core$async29264.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29264.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async29264.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29264.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29264.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29265","meta29265",1066510009,null)], null);
}));

(cljs.core.async.t_cljs$core$async29264.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29264.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29264");

(cljs.core.async.t_cljs$core$async29264.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async29264");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29264.
 */
cljs.core.async.__GT_t_cljs$core$async29264 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29264(flag__$1,cb__$1,meta29265){
return (new cljs.core.async.t_cljs$core$async29264(flag__$1,cb__$1,meta29265));
});

}

return (new cljs.core.async.t_cljs$core$async29264(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29267_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29267_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29268_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29268_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29269 = (i + (1));
i = G__29269;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___29274 = arguments.length;
var i__4865__auto___29275 = (0);
while(true){
if((i__4865__auto___29275 < len__4864__auto___29274)){
args__4870__auto__.push((arguments[i__4865__auto___29275]));

var G__29276 = (i__4865__auto___29275 + (1));
i__4865__auto___29275 = G__29276;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29272){
var map__29273 = p__29272;
var map__29273__$1 = cljs.core.__destructure_map.call(null,map__29273);
var opts = map__29273__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29270){
var G__29271 = cljs.core.first.call(null,seq29270);
var seq29270__$1 = cljs.core.next.call(null,seq29270);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29271,seq29270__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__29278 = arguments.length;
switch (G__29278) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29179__auto___29325 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29180__auto__ = (function (){var switch__29105__auto__ = (function (state_29302){
var state_val_29303 = (state_29302[(1)]);
if((state_val_29303 === (7))){
var inst_29298 = (state_29302[(2)]);
var state_29302__$1 = state_29302;
var statearr_29304_29326 = state_29302__$1;
(statearr_29304_29326[(2)] = inst_29298);

(statearr_29304_29326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29303 === (1))){
var state_29302__$1 = state_29302;
var statearr_29305_29327 = state_29302__$1;
(statearr_29305_29327[(2)] = null);

(statearr_29305_29327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29303 === (4))){
var inst_29281 = (state_29302[(7)]);
var inst_29281__$1 = (state_29302[(2)]);
var inst_29282 = (inst_29281__$1 == null);
var state_29302__$1 = (function (){var statearr_29306 = state_29302;
(statearr_29306[(7)] = inst_29281__$1);

return statearr_29306;
})();
if(cljs.core.truth_(inst_29282)){
var statearr_29307_29328 = state_29302__$1;
(statearr_29307_29328[(1)] = (5));

} else {
var statearr_29308_29329 = state_29302__$1;
(statearr_29308_29329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29303 === (13))){
var state_29302__$1 = state_29302;
var statearr_29309_29330 = state_29302__$1;
(statearr_29309_29330[(2)] = null);

(statearr_29309_29330[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29303 === (6))){
var inst_29281 = (state_29302[(7)]);
var state_29302__$1 = state_29302;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29302__$1,(11),to,inst_29281);
} else {
if((state_val_29303 === (3))){
var inst_29300 = (state_29302[(2)]);
var state_29302__$1 = state_29302;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29302__$1,inst_29300);
} else {
if((state_val_29303 === (12))){
var state_29302__$1 = state_29302;
var statearr_29310_29331 = state_29302__$1;
(statearr_29310_29331[(2)] = null);

(statearr_29310_29331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29303 === (2))){
var state_29302__$1 = state_29302;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29302__$1,(4),from);
} else {
if((state_val_29303 === (11))){
var inst_29291 = (state_29302[(2)]);
var state_29302__$1 = state_29302;
if(cljs.core.truth_(inst_29291)){
var statearr_29311_29332 = state_29302__$1;
(statearr_29311_29332[(1)] = (12));

} else {
var statearr_29312_29333 = state_29302__$1;
(statearr_29312_29333[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29303 === (9))){
var state_29302__$1 = state_29302;
var statearr_29313_29334 = state_29302__$1;
(statearr_29313_29334[(2)] = null);

(statearr_29313_29334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29303 === (5))){
var state_29302__$1 = state_29302;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29314_29335 = state_29302__$1;
(statearr_29314_29335[(1)] = (8));

} else {
var statearr_29315_29336 = state_29302__$1;
(statearr_29315_29336[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29303 === (14))){
var inst_29296 = (state_29302[(2)]);
var state_29302__$1 = state_29302;
var statearr_29316_29337 = state_29302__$1;
(statearr_29316_29337[(2)] = inst_29296);

(statearr_29316_29337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29303 === (10))){
var inst_29288 = (state_29302[(2)]);
var state_29302__$1 = state_29302;
var statearr_29317_29338 = state_29302__$1;
(statearr_29317_29338[(2)] = inst_29288);

(statearr_29317_29338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29303 === (8))){
var inst_29285 = cljs.core.async.close_BANG_.call(null,to);
var state_29302__$1 = state_29302;
var statearr_29318_29339 = state_29302__$1;
(statearr_29318_29339[(2)] = inst_29285);

(statearr_29318_29339[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__29106__auto__ = null;
var cljs$core$async$state_machine__29106__auto____0 = (function (){
var statearr_29319 = [null,null,null,null,null,null,null,null];
(statearr_29319[(0)] = cljs$core$async$state_machine__29106__auto__);

(statearr_29319[(1)] = (1));

return statearr_29319;
});
var cljs$core$async$state_machine__29106__auto____1 = (function (state_29302){
while(true){
var ret_value__29107__auto__ = (function (){try{while(true){
var result__29108__auto__ = switch__29105__auto__.call(null,state_29302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29108__auto__;
}
break;
}
}catch (e29320){var ex__29109__auto__ = e29320;
var statearr_29321_29340 = state_29302;
(statearr_29321_29340[(2)] = ex__29109__auto__);


if(cljs.core.seq.call(null,(state_29302[(4)]))){
var statearr_29322_29341 = state_29302;
(statearr_29322_29341[(1)] = cljs.core.first.call(null,(state_29302[(4)])));

} else {
throw ex__29109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29342 = state_29302;
state_29302 = G__29342;
continue;
} else {
return ret_value__29107__auto__;
}
break;
}
});
cljs$core$async$state_machine__29106__auto__ = function(state_29302){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29106__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29106__auto____1.call(this,state_29302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29106__auto____0;
cljs$core$async$state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29106__auto____1;
return cljs$core$async$state_machine__29106__auto__;
})()
})();
var state__29181__auto__ = (function (){var statearr_29323 = f__29180__auto__.call(null);
(statearr_29323[(6)] = c__29179__auto___29325);

return statearr_29323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29181__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__29343){
var vec__29344 = p__29343;
var v = cljs.core.nth.call(null,vec__29344,(0),null);
var p = cljs.core.nth.call(null,vec__29344,(1),null);
var job = vec__29344;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29179__auto___29520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29180__auto__ = (function (){var switch__29105__auto__ = (function (state_29351){
var state_val_29352 = (state_29351[(1)]);
if((state_val_29352 === (1))){
var state_29351__$1 = state_29351;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29351__$1,(2),res,v);
} else {
if((state_val_29352 === (2))){
var inst_29348 = (state_29351[(2)]);
var inst_29349 = cljs.core.async.close_BANG_.call(null,res);
var state_29351__$1 = (function (){var statearr_29353 = state_29351;
(statearr_29353[(7)] = inst_29348);

return statearr_29353;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29351__$1,inst_29349);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29106__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29106__auto____0 = (function (){
var statearr_29354 = [null,null,null,null,null,null,null,null];
(statearr_29354[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29106__auto__);

(statearr_29354[(1)] = (1));

return statearr_29354;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29106__auto____1 = (function (state_29351){
while(true){
var ret_value__29107__auto__ = (function (){try{while(true){
var result__29108__auto__ = switch__29105__auto__.call(null,state_29351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29108__auto__;
}
break;
}
}catch (e29355){var ex__29109__auto__ = e29355;
var statearr_29356_29521 = state_29351;
(statearr_29356_29521[(2)] = ex__29109__auto__);


if(cljs.core.seq.call(null,(state_29351[(4)]))){
var statearr_29357_29522 = state_29351;
(statearr_29357_29522[(1)] = cljs.core.first.call(null,(state_29351[(4)])));

} else {
throw ex__29109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29523 = state_29351;
state_29351 = G__29523;
continue;
} else {
return ret_value__29107__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29106__auto__ = function(state_29351){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29106__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29106__auto____1.call(this,state_29351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29106__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29106__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29106__auto__;
})()
})();
var state__29181__auto__ = (function (){var statearr_29358 = f__29180__auto__.call(null);
(statearr_29358[(6)] = c__29179__auto___29520);

return statearr_29358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29181__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__29359){
var vec__29360 = p__29359;
var v = cljs.core.nth.call(null,vec__29360,(0),null);
var p = cljs.core.nth.call(null,vec__29360,(1),null);
var job = vec__29360;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4741__auto___29524 = n;
var __29525 = (0);
while(true){
if((__29525 < n__4741__auto___29524)){
var G__29363_29526 = type;
var G__29363_29527__$1 = (((G__29363_29526 instanceof cljs.core.Keyword))?G__29363_29526.fqn:null);
switch (G__29363_29527__$1) {
case "compute":
var c__29179__auto___29529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29525,c__29179__auto___29529,G__29363_29526,G__29363_29527__$1,n__4741__auto___29524,jobs,results,process,async){
return (function (){
var f__29180__auto__ = (function (){var switch__29105__auto__ = ((function (__29525,c__29179__auto___29529,G__29363_29526,G__29363_29527__$1,n__4741__auto___29524,jobs,results,process,async){
return (function (state_29376){
var state_val_29377 = (state_29376[(1)]);
if((state_val_29377 === (1))){
var state_29376__$1 = state_29376;
var statearr_29378_29530 = state_29376__$1;
(statearr_29378_29530[(2)] = null);

(statearr_29378_29530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (2))){
var state_29376__$1 = state_29376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29376__$1,(4),jobs);
} else {
if((state_val_29377 === (3))){
var inst_29374 = (state_29376[(2)]);
var state_29376__$1 = state_29376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29376__$1,inst_29374);
} else {
if((state_val_29377 === (4))){
var inst_29366 = (state_29376[(2)]);
var inst_29367 = process.call(null,inst_29366);
var state_29376__$1 = state_29376;
if(cljs.core.truth_(inst_29367)){
var statearr_29379_29531 = state_29376__$1;
(statearr_29379_29531[(1)] = (5));

} else {
var statearr_29380_29532 = state_29376__$1;
(statearr_29380_29532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (5))){
var state_29376__$1 = state_29376;
var statearr_29381_29533 = state_29376__$1;
(statearr_29381_29533[(2)] = null);

(statearr_29381_29533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (6))){
var state_29376__$1 = state_29376;
var statearr_29382_29534 = state_29376__$1;
(statearr_29382_29534[(2)] = null);

(statearr_29382_29534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29377 === (7))){
var inst_29372 = (state_29376[(2)]);
var state_29376__$1 = state_29376;
var statearr_29383_29535 = state_29376__$1;
(statearr_29383_29535[(2)] = inst_29372);

(statearr_29383_29535[(1)] = (3));


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
});})(__29525,c__29179__auto___29529,G__29363_29526,G__29363_29527__$1,n__4741__auto___29524,jobs,results,process,async))
;
return ((function (__29525,switch__29105__auto__,c__29179__auto___29529,G__29363_29526,G__29363_29527__$1,n__4741__auto___29524,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29106__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29106__auto____0 = (function (){
var statearr_29384 = [null,null,null,null,null,null,null];
(statearr_29384[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29106__auto__);

(statearr_29384[(1)] = (1));

return statearr_29384;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29106__auto____1 = (function (state_29376){
while(true){
var ret_value__29107__auto__ = (function (){try{while(true){
var result__29108__auto__ = switch__29105__auto__.call(null,state_29376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29108__auto__;
}
break;
}
}catch (e29385){var ex__29109__auto__ = e29385;
var statearr_29386_29536 = state_29376;
(statearr_29386_29536[(2)] = ex__29109__auto__);


if(cljs.core.seq.call(null,(state_29376[(4)]))){
var statearr_29387_29537 = state_29376;
(statearr_29387_29537[(1)] = cljs.core.first.call(null,(state_29376[(4)])));

} else {
throw ex__29109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29538 = state_29376;
state_29376 = G__29538;
continue;
} else {
return ret_value__29107__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29106__auto__ = function(state_29376){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29106__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29106__auto____1.call(this,state_29376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29106__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29106__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29106__auto__;
})()
;})(__29525,switch__29105__auto__,c__29179__auto___29529,G__29363_29526,G__29363_29527__$1,n__4741__auto___29524,jobs,results,process,async))
})();
var state__29181__auto__ = (function (){var statearr_29388 = f__29180__auto__.call(null);
(statearr_29388[(6)] = c__29179__auto___29529);

return statearr_29388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29181__auto__);
});})(__29525,c__29179__auto___29529,G__29363_29526,G__29363_29527__$1,n__4741__auto___29524,jobs,results,process,async))
);


break;
case "async":
var c__29179__auto___29539 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29525,c__29179__auto___29539,G__29363_29526,G__29363_29527__$1,n__4741__auto___29524,jobs,results,process,async){
return (function (){
var f__29180__auto__ = (function (){var switch__29105__auto__ = ((function (__29525,c__29179__auto___29539,G__29363_29526,G__29363_29527__$1,n__4741__auto___29524,jobs,results,process,async){
return (function (state_29401){
var state_val_29402 = (state_29401[(1)]);
if((state_val_29402 === (1))){
var state_29401__$1 = state_29401;
var statearr_29403_29540 = state_29401__$1;
(statearr_29403_29540[(2)] = null);

(statearr_29403_29540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (2))){
var state_29401__$1 = state_29401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29401__$1,(4),jobs);
} else {
if((state_val_29402 === (3))){
var inst_29399 = (state_29401[(2)]);
var state_29401__$1 = state_29401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29401__$1,inst_29399);
} else {
if((state_val_29402 === (4))){
var inst_29391 = (state_29401[(2)]);
var inst_29392 = async.call(null,inst_29391);
var state_29401__$1 = state_29401;
if(cljs.core.truth_(inst_29392)){
var statearr_29404_29541 = state_29401__$1;
(statearr_29404_29541[(1)] = (5));

} else {
var statearr_29405_29542 = state_29401__$1;
(statearr_29405_29542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (5))){
var state_29401__$1 = state_29401;
var statearr_29406_29543 = state_29401__$1;
(statearr_29406_29543[(2)] = null);

(statearr_29406_29543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (6))){
var state_29401__$1 = state_29401;
var statearr_29407_29544 = state_29401__$1;
(statearr_29407_29544[(2)] = null);

(statearr_29407_29544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (7))){
var inst_29397 = (state_29401[(2)]);
var state_29401__$1 = state_29401;
var statearr_29408_29545 = state_29401__$1;
(statearr_29408_29545[(2)] = inst_29397);

(statearr_29408_29545[(1)] = (3));


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
});})(__29525,c__29179__auto___29539,G__29363_29526,G__29363_29527__$1,n__4741__auto___29524,jobs,results,process,async))
;
return ((function (__29525,switch__29105__auto__,c__29179__auto___29539,G__29363_29526,G__29363_29527__$1,n__4741__auto___29524,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29106__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29106__auto____0 = (function (){
var statearr_29409 = [null,null,null,null,null,null,null];
(statearr_29409[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29106__auto__);

(statearr_29409[(1)] = (1));

return statearr_29409;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29106__auto____1 = (function (state_29401){
while(true){
var ret_value__29107__auto__ = (function (){try{while(true){
var result__29108__auto__ = switch__29105__auto__.call(null,state_29401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29108__auto__;
}
break;
}
}catch (e29410){var ex__29109__auto__ = e29410;
var statearr_29411_29546 = state_29401;
(statearr_29411_29546[(2)] = ex__29109__auto__);


if(cljs.core.seq.call(null,(state_29401[(4)]))){
var statearr_29412_29547 = state_29401;
(statearr_29412_29547[(1)] = cljs.core.first.call(null,(state_29401[(4)])));

} else {
throw ex__29109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29548 = state_29401;
state_29401 = G__29548;
continue;
} else {
return ret_value__29107__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29106__auto__ = function(state_29401){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29106__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29106__auto____1.call(this,state_29401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29106__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29106__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29106__auto__;
})()
;})(__29525,switch__29105__auto__,c__29179__auto___29539,G__29363_29526,G__29363_29527__$1,n__4741__auto___29524,jobs,results,process,async))
})();
var state__29181__auto__ = (function (){var statearr_29413 = f__29180__auto__.call(null);
(statearr_29413[(6)] = c__29179__auto___29539);

return statearr_29413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29181__auto__);
});})(__29525,c__29179__auto___29539,G__29363_29526,G__29363_29527__$1,n__4741__auto___29524,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29363_29527__$1)].join('')));

}

var G__29549 = (__29525 + (1));
__29525 = G__29549;
continue;
} else {
}
break;
}

var c__29179__auto___29550 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29180__auto__ = (function (){var switch__29105__auto__ = (function (state_29435){
var state_val_29436 = (state_29435[(1)]);
if((state_val_29436 === (7))){
var inst_29431 = (state_29435[(2)]);
var state_29435__$1 = state_29435;
var statearr_29437_29551 = state_29435__$1;
(statearr_29437_29551[(2)] = inst_29431);

(statearr_29437_29551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29436 === (1))){
var state_29435__$1 = state_29435;
var statearr_29438_29552 = state_29435__$1;
(statearr_29438_29552[(2)] = null);

(statearr_29438_29552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29436 === (4))){
var inst_29416 = (state_29435[(7)]);
var inst_29416__$1 = (state_29435[(2)]);
var inst_29417 = (inst_29416__$1 == null);
var state_29435__$1 = (function (){var statearr_29439 = state_29435;
(statearr_29439[(7)] = inst_29416__$1);

return statearr_29439;
})();
if(cljs.core.truth_(inst_29417)){
var statearr_29440_29553 = state_29435__$1;
(statearr_29440_29553[(1)] = (5));

} else {
var statearr_29441_29554 = state_29435__$1;
(statearr_29441_29554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29436 === (6))){
var inst_29416 = (state_29435[(7)]);
var inst_29421 = (state_29435[(8)]);
var inst_29421__$1 = cljs.core.async.chan.call(null,(1));
var inst_29422 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29423 = [inst_29416,inst_29421__$1];
var inst_29424 = (new cljs.core.PersistentVector(null,2,(5),inst_29422,inst_29423,null));
var state_29435__$1 = (function (){var statearr_29442 = state_29435;
(statearr_29442[(8)] = inst_29421__$1);

return statearr_29442;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29435__$1,(8),jobs,inst_29424);
} else {
if((state_val_29436 === (3))){
var inst_29433 = (state_29435[(2)]);
var state_29435__$1 = state_29435;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29435__$1,inst_29433);
} else {
if((state_val_29436 === (2))){
var state_29435__$1 = state_29435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29435__$1,(4),from);
} else {
if((state_val_29436 === (9))){
var inst_29428 = (state_29435[(2)]);
var state_29435__$1 = (function (){var statearr_29443 = state_29435;
(statearr_29443[(9)] = inst_29428);

return statearr_29443;
})();
var statearr_29444_29555 = state_29435__$1;
(statearr_29444_29555[(2)] = null);

(statearr_29444_29555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29436 === (5))){
var inst_29419 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29435__$1 = state_29435;
var statearr_29445_29556 = state_29435__$1;
(statearr_29445_29556[(2)] = inst_29419);

(statearr_29445_29556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29436 === (8))){
var inst_29421 = (state_29435[(8)]);
var inst_29426 = (state_29435[(2)]);
var state_29435__$1 = (function (){var statearr_29446 = state_29435;
(statearr_29446[(10)] = inst_29426);

return statearr_29446;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29435__$1,(9),results,inst_29421);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29106__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29106__auto____0 = (function (){
var statearr_29447 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29447[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29106__auto__);

(statearr_29447[(1)] = (1));

return statearr_29447;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29106__auto____1 = (function (state_29435){
while(true){
var ret_value__29107__auto__ = (function (){try{while(true){
var result__29108__auto__ = switch__29105__auto__.call(null,state_29435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29108__auto__;
}
break;
}
}catch (e29448){var ex__29109__auto__ = e29448;
var statearr_29449_29557 = state_29435;
(statearr_29449_29557[(2)] = ex__29109__auto__);


if(cljs.core.seq.call(null,(state_29435[(4)]))){
var statearr_29450_29558 = state_29435;
(statearr_29450_29558[(1)] = cljs.core.first.call(null,(state_29435[(4)])));

} else {
throw ex__29109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29559 = state_29435;
state_29435 = G__29559;
continue;
} else {
return ret_value__29107__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29106__auto__ = function(state_29435){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29106__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29106__auto____1.call(this,state_29435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29106__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29106__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29106__auto__;
})()
})();
var state__29181__auto__ = (function (){var statearr_29451 = f__29180__auto__.call(null);
(statearr_29451[(6)] = c__29179__auto___29550);

return statearr_29451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29181__auto__);
}));


var c__29179__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29180__auto__ = (function (){var switch__29105__auto__ = (function (state_29489){
var state_val_29490 = (state_29489[(1)]);
if((state_val_29490 === (7))){
var inst_29485 = (state_29489[(2)]);
var state_29489__$1 = state_29489;
var statearr_29491_29560 = state_29489__$1;
(statearr_29491_29560[(2)] = inst_29485);

(statearr_29491_29560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (20))){
var state_29489__$1 = state_29489;
var statearr_29492_29561 = state_29489__$1;
(statearr_29492_29561[(2)] = null);

(statearr_29492_29561[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (1))){
var state_29489__$1 = state_29489;
var statearr_29493_29562 = state_29489__$1;
(statearr_29493_29562[(2)] = null);

(statearr_29493_29562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (4))){
var inst_29454 = (state_29489[(7)]);
var inst_29454__$1 = (state_29489[(2)]);
var inst_29455 = (inst_29454__$1 == null);
var state_29489__$1 = (function (){var statearr_29494 = state_29489;
(statearr_29494[(7)] = inst_29454__$1);

return statearr_29494;
})();
if(cljs.core.truth_(inst_29455)){
var statearr_29495_29563 = state_29489__$1;
(statearr_29495_29563[(1)] = (5));

} else {
var statearr_29496_29564 = state_29489__$1;
(statearr_29496_29564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (15))){
var inst_29467 = (state_29489[(8)]);
var state_29489__$1 = state_29489;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29489__$1,(18),to,inst_29467);
} else {
if((state_val_29490 === (21))){
var inst_29480 = (state_29489[(2)]);
var state_29489__$1 = state_29489;
var statearr_29497_29565 = state_29489__$1;
(statearr_29497_29565[(2)] = inst_29480);

(statearr_29497_29565[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (13))){
var inst_29482 = (state_29489[(2)]);
var state_29489__$1 = (function (){var statearr_29498 = state_29489;
(statearr_29498[(9)] = inst_29482);

return statearr_29498;
})();
var statearr_29499_29566 = state_29489__$1;
(statearr_29499_29566[(2)] = null);

(statearr_29499_29566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (6))){
var inst_29454 = (state_29489[(7)]);
var state_29489__$1 = state_29489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29489__$1,(11),inst_29454);
} else {
if((state_val_29490 === (17))){
var inst_29475 = (state_29489[(2)]);
var state_29489__$1 = state_29489;
if(cljs.core.truth_(inst_29475)){
var statearr_29500_29567 = state_29489__$1;
(statearr_29500_29567[(1)] = (19));

} else {
var statearr_29501_29568 = state_29489__$1;
(statearr_29501_29568[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (3))){
var inst_29487 = (state_29489[(2)]);
var state_29489__$1 = state_29489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29489__$1,inst_29487);
} else {
if((state_val_29490 === (12))){
var inst_29464 = (state_29489[(10)]);
var state_29489__$1 = state_29489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29489__$1,(14),inst_29464);
} else {
if((state_val_29490 === (2))){
var state_29489__$1 = state_29489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29489__$1,(4),results);
} else {
if((state_val_29490 === (19))){
var state_29489__$1 = state_29489;
var statearr_29502_29569 = state_29489__$1;
(statearr_29502_29569[(2)] = null);

(statearr_29502_29569[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (11))){
var inst_29464 = (state_29489[(2)]);
var state_29489__$1 = (function (){var statearr_29503 = state_29489;
(statearr_29503[(10)] = inst_29464);

return statearr_29503;
})();
var statearr_29504_29570 = state_29489__$1;
(statearr_29504_29570[(2)] = null);

(statearr_29504_29570[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (9))){
var state_29489__$1 = state_29489;
var statearr_29505_29571 = state_29489__$1;
(statearr_29505_29571[(2)] = null);

(statearr_29505_29571[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (5))){
var state_29489__$1 = state_29489;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29506_29572 = state_29489__$1;
(statearr_29506_29572[(1)] = (8));

} else {
var statearr_29507_29573 = state_29489__$1;
(statearr_29507_29573[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (14))){
var inst_29467 = (state_29489[(8)]);
var inst_29469 = (state_29489[(11)]);
var inst_29467__$1 = (state_29489[(2)]);
var inst_29468 = (inst_29467__$1 == null);
var inst_29469__$1 = cljs.core.not.call(null,inst_29468);
var state_29489__$1 = (function (){var statearr_29508 = state_29489;
(statearr_29508[(8)] = inst_29467__$1);

(statearr_29508[(11)] = inst_29469__$1);

return statearr_29508;
})();
if(inst_29469__$1){
var statearr_29509_29574 = state_29489__$1;
(statearr_29509_29574[(1)] = (15));

} else {
var statearr_29510_29575 = state_29489__$1;
(statearr_29510_29575[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (16))){
var inst_29469 = (state_29489[(11)]);
var state_29489__$1 = state_29489;
var statearr_29511_29576 = state_29489__$1;
(statearr_29511_29576[(2)] = inst_29469);

(statearr_29511_29576[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (10))){
var inst_29461 = (state_29489[(2)]);
var state_29489__$1 = state_29489;
var statearr_29512_29577 = state_29489__$1;
(statearr_29512_29577[(2)] = inst_29461);

(statearr_29512_29577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (18))){
var inst_29472 = (state_29489[(2)]);
var state_29489__$1 = state_29489;
var statearr_29513_29578 = state_29489__$1;
(statearr_29513_29578[(2)] = inst_29472);

(statearr_29513_29578[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (8))){
var inst_29458 = cljs.core.async.close_BANG_.call(null,to);
var state_29489__$1 = state_29489;
var statearr_29514_29579 = state_29489__$1;
(statearr_29514_29579[(2)] = inst_29458);

(statearr_29514_29579[(1)] = (10));


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
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29106__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29106__auto____0 = (function (){
var statearr_29515 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29515[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29106__auto__);

(statearr_29515[(1)] = (1));

return statearr_29515;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29106__auto____1 = (function (state_29489){
while(true){
var ret_value__29107__auto__ = (function (){try{while(true){
var result__29108__auto__ = switch__29105__auto__.call(null,state_29489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29108__auto__;
}
break;
}
}catch (e29516){var ex__29109__auto__ = e29516;
var statearr_29517_29580 = state_29489;
(statearr_29517_29580[(2)] = ex__29109__auto__);


if(cljs.core.seq.call(null,(state_29489[(4)]))){
var statearr_29518_29581 = state_29489;
(statearr_29518_29581[(1)] = cljs.core.first.call(null,(state_29489[(4)])));

} else {
throw ex__29109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29582 = state_29489;
state_29489 = G__29582;
continue;
} else {
return ret_value__29107__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29106__auto__ = function(state_29489){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29106__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29106__auto____1.call(this,state_29489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29106__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29106__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29106__auto__;
})()
})();
var state__29181__auto__ = (function (){var statearr_29519 = f__29180__auto__.call(null);
(statearr_29519[(6)] = c__29179__auto__);

return statearr_29519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29181__auto__);
}));

return c__29179__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__29584 = arguments.length;
switch (G__29584) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__29587 = arguments.length;
switch (G__29587) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__29590 = arguments.length;
switch (G__29590) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29179__auto___29640 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29180__auto__ = (function (){var switch__29105__auto__ = (function (state_29616){
var state_val_29617 = (state_29616[(1)]);
if((state_val_29617 === (7))){
var inst_29612 = (state_29616[(2)]);
var state_29616__$1 = state_29616;
var statearr_29618_29641 = state_29616__$1;
(statearr_29618_29641[(2)] = inst_29612);

(statearr_29618_29641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29617 === (1))){
var state_29616__$1 = state_29616;
var statearr_29619_29642 = state_29616__$1;
(statearr_29619_29642[(2)] = null);

(statearr_29619_29642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29617 === (4))){
var inst_29593 = (state_29616[(7)]);
var inst_29593__$1 = (state_29616[(2)]);
var inst_29594 = (inst_29593__$1 == null);
var state_29616__$1 = (function (){var statearr_29620 = state_29616;
(statearr_29620[(7)] = inst_29593__$1);

return statearr_29620;
})();
if(cljs.core.truth_(inst_29594)){
var statearr_29621_29643 = state_29616__$1;
(statearr_29621_29643[(1)] = (5));

} else {
var statearr_29622_29644 = state_29616__$1;
(statearr_29622_29644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29617 === (13))){
var state_29616__$1 = state_29616;
var statearr_29623_29645 = state_29616__$1;
(statearr_29623_29645[(2)] = null);

(statearr_29623_29645[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29617 === (6))){
var inst_29593 = (state_29616[(7)]);
var inst_29599 = p.call(null,inst_29593);
var state_29616__$1 = state_29616;
if(cljs.core.truth_(inst_29599)){
var statearr_29624_29646 = state_29616__$1;
(statearr_29624_29646[(1)] = (9));

} else {
var statearr_29625_29647 = state_29616__$1;
(statearr_29625_29647[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29617 === (3))){
var inst_29614 = (state_29616[(2)]);
var state_29616__$1 = state_29616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29616__$1,inst_29614);
} else {
if((state_val_29617 === (12))){
var state_29616__$1 = state_29616;
var statearr_29626_29648 = state_29616__$1;
(statearr_29626_29648[(2)] = null);

(statearr_29626_29648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29617 === (2))){
var state_29616__$1 = state_29616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29616__$1,(4),ch);
} else {
if((state_val_29617 === (11))){
var inst_29593 = (state_29616[(7)]);
var inst_29603 = (state_29616[(2)]);
var state_29616__$1 = state_29616;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29616__$1,(8),inst_29603,inst_29593);
} else {
if((state_val_29617 === (9))){
var state_29616__$1 = state_29616;
var statearr_29627_29649 = state_29616__$1;
(statearr_29627_29649[(2)] = tc);

(statearr_29627_29649[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29617 === (5))){
var inst_29596 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29597 = cljs.core.async.close_BANG_.call(null,fc);
var state_29616__$1 = (function (){var statearr_29628 = state_29616;
(statearr_29628[(8)] = inst_29596);

return statearr_29628;
})();
var statearr_29629_29650 = state_29616__$1;
(statearr_29629_29650[(2)] = inst_29597);

(statearr_29629_29650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29617 === (14))){
var inst_29610 = (state_29616[(2)]);
var state_29616__$1 = state_29616;
var statearr_29630_29651 = state_29616__$1;
(statearr_29630_29651[(2)] = inst_29610);

(statearr_29630_29651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29617 === (10))){
var state_29616__$1 = state_29616;
var statearr_29631_29652 = state_29616__$1;
(statearr_29631_29652[(2)] = fc);

(statearr_29631_29652[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29617 === (8))){
var inst_29605 = (state_29616[(2)]);
var state_29616__$1 = state_29616;
if(cljs.core.truth_(inst_29605)){
var statearr_29632_29653 = state_29616__$1;
(statearr_29632_29653[(1)] = (12));

} else {
var statearr_29633_29654 = state_29616__$1;
(statearr_29633_29654[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__29106__auto__ = null;
var cljs$core$async$state_machine__29106__auto____0 = (function (){
var statearr_29634 = [null,null,null,null,null,null,null,null,null];
(statearr_29634[(0)] = cljs$core$async$state_machine__29106__auto__);

(statearr_29634[(1)] = (1));

return statearr_29634;
});
var cljs$core$async$state_machine__29106__auto____1 = (function (state_29616){
while(true){
var ret_value__29107__auto__ = (function (){try{while(true){
var result__29108__auto__ = switch__29105__auto__.call(null,state_29616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29108__auto__;
}
break;
}
}catch (e29635){var ex__29109__auto__ = e29635;
var statearr_29636_29655 = state_29616;
(statearr_29636_29655[(2)] = ex__29109__auto__);


if(cljs.core.seq.call(null,(state_29616[(4)]))){
var statearr_29637_29656 = state_29616;
(statearr_29637_29656[(1)] = cljs.core.first.call(null,(state_29616[(4)])));

} else {
throw ex__29109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29657 = state_29616;
state_29616 = G__29657;
continue;
} else {
return ret_value__29107__auto__;
}
break;
}
});
cljs$core$async$state_machine__29106__auto__ = function(state_29616){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29106__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29106__auto____1.call(this,state_29616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29106__auto____0;
cljs$core$async$state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29106__auto____1;
return cljs$core$async$state_machine__29106__auto__;
})()
})();
var state__29181__auto__ = (function (){var statearr_29638 = f__29180__auto__.call(null);
(statearr_29638[(6)] = c__29179__auto___29640);

return statearr_29638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29181__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29179__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29180__auto__ = (function (){var switch__29105__auto__ = (function (state_29679){
var state_val_29680 = (state_29679[(1)]);
if((state_val_29680 === (7))){
var inst_29675 = (state_29679[(2)]);
var state_29679__$1 = state_29679;
var statearr_29681_29700 = state_29679__$1;
(statearr_29681_29700[(2)] = inst_29675);

(statearr_29681_29700[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (1))){
var inst_29658 = init;
var inst_29659 = inst_29658;
var state_29679__$1 = (function (){var statearr_29682 = state_29679;
(statearr_29682[(7)] = inst_29659);

return statearr_29682;
})();
var statearr_29683_29701 = state_29679__$1;
(statearr_29683_29701[(2)] = null);

(statearr_29683_29701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (4))){
var inst_29662 = (state_29679[(8)]);
var inst_29662__$1 = (state_29679[(2)]);
var inst_29663 = (inst_29662__$1 == null);
var state_29679__$1 = (function (){var statearr_29684 = state_29679;
(statearr_29684[(8)] = inst_29662__$1);

return statearr_29684;
})();
if(cljs.core.truth_(inst_29663)){
var statearr_29685_29702 = state_29679__$1;
(statearr_29685_29702[(1)] = (5));

} else {
var statearr_29686_29703 = state_29679__$1;
(statearr_29686_29703[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (6))){
var inst_29666 = (state_29679[(9)]);
var inst_29659 = (state_29679[(7)]);
var inst_29662 = (state_29679[(8)]);
var inst_29666__$1 = f.call(null,inst_29659,inst_29662);
var inst_29667 = cljs.core.reduced_QMARK_.call(null,inst_29666__$1);
var state_29679__$1 = (function (){var statearr_29687 = state_29679;
(statearr_29687[(9)] = inst_29666__$1);

return statearr_29687;
})();
if(inst_29667){
var statearr_29688_29704 = state_29679__$1;
(statearr_29688_29704[(1)] = (8));

} else {
var statearr_29689_29705 = state_29679__$1;
(statearr_29689_29705[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (3))){
var inst_29677 = (state_29679[(2)]);
var state_29679__$1 = state_29679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29679__$1,inst_29677);
} else {
if((state_val_29680 === (2))){
var state_29679__$1 = state_29679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29679__$1,(4),ch);
} else {
if((state_val_29680 === (9))){
var inst_29666 = (state_29679[(9)]);
var inst_29659 = inst_29666;
var state_29679__$1 = (function (){var statearr_29690 = state_29679;
(statearr_29690[(7)] = inst_29659);

return statearr_29690;
})();
var statearr_29691_29706 = state_29679__$1;
(statearr_29691_29706[(2)] = null);

(statearr_29691_29706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (5))){
var inst_29659 = (state_29679[(7)]);
var state_29679__$1 = state_29679;
var statearr_29692_29707 = state_29679__$1;
(statearr_29692_29707[(2)] = inst_29659);

(statearr_29692_29707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (10))){
var inst_29673 = (state_29679[(2)]);
var state_29679__$1 = state_29679;
var statearr_29693_29708 = state_29679__$1;
(statearr_29693_29708[(2)] = inst_29673);

(statearr_29693_29708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (8))){
var inst_29666 = (state_29679[(9)]);
var inst_29669 = cljs.core.deref.call(null,inst_29666);
var state_29679__$1 = state_29679;
var statearr_29694_29709 = state_29679__$1;
(statearr_29694_29709[(2)] = inst_29669);

(statearr_29694_29709[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29106__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29106__auto____0 = (function (){
var statearr_29695 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29695[(0)] = cljs$core$async$reduce_$_state_machine__29106__auto__);

(statearr_29695[(1)] = (1));

return statearr_29695;
});
var cljs$core$async$reduce_$_state_machine__29106__auto____1 = (function (state_29679){
while(true){
var ret_value__29107__auto__ = (function (){try{while(true){
var result__29108__auto__ = switch__29105__auto__.call(null,state_29679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29108__auto__;
}
break;
}
}catch (e29696){var ex__29109__auto__ = e29696;
var statearr_29697_29710 = state_29679;
(statearr_29697_29710[(2)] = ex__29109__auto__);


if(cljs.core.seq.call(null,(state_29679[(4)]))){
var statearr_29698_29711 = state_29679;
(statearr_29698_29711[(1)] = cljs.core.first.call(null,(state_29679[(4)])));

} else {
throw ex__29109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29712 = state_29679;
state_29679 = G__29712;
continue;
} else {
return ret_value__29107__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29106__auto__ = function(state_29679){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29106__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29106__auto____1.call(this,state_29679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29106__auto____0;
cljs$core$async$reduce_$_state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29106__auto____1;
return cljs$core$async$reduce_$_state_machine__29106__auto__;
})()
})();
var state__29181__auto__ = (function (){var statearr_29699 = f__29180__auto__.call(null);
(statearr_29699[(6)] = c__29179__auto__);

return statearr_29699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29181__auto__);
}));

return c__29179__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__29179__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29180__auto__ = (function (){var switch__29105__auto__ = (function (state_29718){
var state_val_29719 = (state_29718[(1)]);
if((state_val_29719 === (1))){
var inst_29713 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_29718__$1 = state_29718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29718__$1,(2),inst_29713);
} else {
if((state_val_29719 === (2))){
var inst_29715 = (state_29718[(2)]);
var inst_29716 = f__$1.call(null,inst_29715);
var state_29718__$1 = state_29718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29718__$1,inst_29716);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29106__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29106__auto____0 = (function (){
var statearr_29720 = [null,null,null,null,null,null,null];
(statearr_29720[(0)] = cljs$core$async$transduce_$_state_machine__29106__auto__);

(statearr_29720[(1)] = (1));

return statearr_29720;
});
var cljs$core$async$transduce_$_state_machine__29106__auto____1 = (function (state_29718){
while(true){
var ret_value__29107__auto__ = (function (){try{while(true){
var result__29108__auto__ = switch__29105__auto__.call(null,state_29718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29108__auto__;
}
break;
}
}catch (e29721){var ex__29109__auto__ = e29721;
var statearr_29722_29725 = state_29718;
(statearr_29722_29725[(2)] = ex__29109__auto__);


if(cljs.core.seq.call(null,(state_29718[(4)]))){
var statearr_29723_29726 = state_29718;
(statearr_29723_29726[(1)] = cljs.core.first.call(null,(state_29718[(4)])));

} else {
throw ex__29109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29727 = state_29718;
state_29718 = G__29727;
continue;
} else {
return ret_value__29107__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29106__auto__ = function(state_29718){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29106__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29106__auto____1.call(this,state_29718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29106__auto____0;
cljs$core$async$transduce_$_state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29106__auto____1;
return cljs$core$async$transduce_$_state_machine__29106__auto__;
})()
})();
var state__29181__auto__ = (function (){var statearr_29724 = f__29180__auto__.call(null);
(statearr_29724[(6)] = c__29179__auto__);

return statearr_29724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29181__auto__);
}));

return c__29179__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__29729 = arguments.length;
switch (G__29729) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29179__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29180__auto__ = (function (){var switch__29105__auto__ = (function (state_29754){
var state_val_29755 = (state_29754[(1)]);
if((state_val_29755 === (7))){
var inst_29736 = (state_29754[(2)]);
var state_29754__$1 = state_29754;
var statearr_29756_29778 = state_29754__$1;
(statearr_29756_29778[(2)] = inst_29736);

(statearr_29756_29778[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29755 === (1))){
var inst_29730 = cljs.core.seq.call(null,coll);
var inst_29731 = inst_29730;
var state_29754__$1 = (function (){var statearr_29757 = state_29754;
(statearr_29757[(7)] = inst_29731);

return statearr_29757;
})();
var statearr_29758_29779 = state_29754__$1;
(statearr_29758_29779[(2)] = null);

(statearr_29758_29779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29755 === (4))){
var inst_29731 = (state_29754[(7)]);
var inst_29734 = cljs.core.first.call(null,inst_29731);
var state_29754__$1 = state_29754;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29754__$1,(7),ch,inst_29734);
} else {
if((state_val_29755 === (13))){
var inst_29748 = (state_29754[(2)]);
var state_29754__$1 = state_29754;
var statearr_29759_29780 = state_29754__$1;
(statearr_29759_29780[(2)] = inst_29748);

(statearr_29759_29780[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29755 === (6))){
var inst_29739 = (state_29754[(2)]);
var state_29754__$1 = state_29754;
if(cljs.core.truth_(inst_29739)){
var statearr_29760_29781 = state_29754__$1;
(statearr_29760_29781[(1)] = (8));

} else {
var statearr_29761_29782 = state_29754__$1;
(statearr_29761_29782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29755 === (3))){
var inst_29752 = (state_29754[(2)]);
var state_29754__$1 = state_29754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29754__$1,inst_29752);
} else {
if((state_val_29755 === (12))){
var state_29754__$1 = state_29754;
var statearr_29762_29783 = state_29754__$1;
(statearr_29762_29783[(2)] = null);

(statearr_29762_29783[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29755 === (2))){
var inst_29731 = (state_29754[(7)]);
var state_29754__$1 = state_29754;
if(cljs.core.truth_(inst_29731)){
var statearr_29763_29784 = state_29754__$1;
(statearr_29763_29784[(1)] = (4));

} else {
var statearr_29764_29785 = state_29754__$1;
(statearr_29764_29785[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29755 === (11))){
var inst_29745 = cljs.core.async.close_BANG_.call(null,ch);
var state_29754__$1 = state_29754;
var statearr_29765_29786 = state_29754__$1;
(statearr_29765_29786[(2)] = inst_29745);

(statearr_29765_29786[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29755 === (9))){
var state_29754__$1 = state_29754;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29766_29787 = state_29754__$1;
(statearr_29766_29787[(1)] = (11));

} else {
var statearr_29767_29788 = state_29754__$1;
(statearr_29767_29788[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29755 === (5))){
var inst_29731 = (state_29754[(7)]);
var state_29754__$1 = state_29754;
var statearr_29768_29789 = state_29754__$1;
(statearr_29768_29789[(2)] = inst_29731);

(statearr_29768_29789[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29755 === (10))){
var inst_29750 = (state_29754[(2)]);
var state_29754__$1 = state_29754;
var statearr_29769_29790 = state_29754__$1;
(statearr_29769_29790[(2)] = inst_29750);

(statearr_29769_29790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29755 === (8))){
var inst_29731 = (state_29754[(7)]);
var inst_29741 = cljs.core.next.call(null,inst_29731);
var inst_29731__$1 = inst_29741;
var state_29754__$1 = (function (){var statearr_29770 = state_29754;
(statearr_29770[(7)] = inst_29731__$1);

return statearr_29770;
})();
var statearr_29771_29791 = state_29754__$1;
(statearr_29771_29791[(2)] = null);

(statearr_29771_29791[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__29106__auto__ = null;
var cljs$core$async$state_machine__29106__auto____0 = (function (){
var statearr_29772 = [null,null,null,null,null,null,null,null];
(statearr_29772[(0)] = cljs$core$async$state_machine__29106__auto__);

(statearr_29772[(1)] = (1));

return statearr_29772;
});
var cljs$core$async$state_machine__29106__auto____1 = (function (state_29754){
while(true){
var ret_value__29107__auto__ = (function (){try{while(true){
var result__29108__auto__ = switch__29105__auto__.call(null,state_29754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29108__auto__;
}
break;
}
}catch (e29773){var ex__29109__auto__ = e29773;
var statearr_29774_29792 = state_29754;
(statearr_29774_29792[(2)] = ex__29109__auto__);


if(cljs.core.seq.call(null,(state_29754[(4)]))){
var statearr_29775_29793 = state_29754;
(statearr_29775_29793[(1)] = cljs.core.first.call(null,(state_29754[(4)])));

} else {
throw ex__29109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29794 = state_29754;
state_29754 = G__29794;
continue;
} else {
return ret_value__29107__auto__;
}
break;
}
});
cljs$core$async$state_machine__29106__auto__ = function(state_29754){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29106__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29106__auto____1.call(this,state_29754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29106__auto____0;
cljs$core$async$state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29106__auto____1;
return cljs$core$async$state_machine__29106__auto__;
})()
})();
var state__29181__auto__ = (function (){var statearr_29776 = f__29180__auto__.call(null);
(statearr_29776[(6)] = c__29179__auto__);

return statearr_29776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29181__auto__);
}));

return c__29179__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan_BANG_.call(null,ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__29796 = arguments.length;
switch (G__29796) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_.call(null,coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_29798 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,_);
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_29798.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_29799 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_29799.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_29800 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,m,ch);
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_29800.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_29801 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,m);
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_29801.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29802 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29802 = (function (ch,cs,meta29803){
this.ch = ch;
this.cs = cs;
this.meta29803 = meta29803;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29804,meta29803__$1){
var self__ = this;
var _29804__$1 = this;
return (new cljs.core.async.t_cljs$core$async29802(self__.ch,self__.cs,meta29803__$1));
}));

(cljs.core.async.t_cljs$core$async29802.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29804){
var self__ = this;
var _29804__$1 = this;
return self__.meta29803;
}));

(cljs.core.async.t_cljs$core$async29802.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29802.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async29802.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29802.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async29802.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async29802.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async29802.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29803","meta29803",-1591329239,null)], null);
}));

(cljs.core.async.t_cljs$core$async29802.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29802.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29802");

(cljs.core.async.t_cljs$core$async29802.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async29802");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29802.
 */
cljs.core.async.__GT_t_cljs$core$async29802 = (function cljs$core$async$mult_$___GT_t_cljs$core$async29802(ch__$1,cs__$1,meta29803){
return (new cljs.core.async.t_cljs$core$async29802(ch__$1,cs__$1,meta29803));
});

}

return (new cljs.core.async.t_cljs$core$async29802(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__29179__auto___30021 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29180__auto__ = (function (){var switch__29105__auto__ = (function (state_29937){
var state_val_29938 = (state_29937[(1)]);
if((state_val_29938 === (7))){
var inst_29933 = (state_29937[(2)]);
var state_29937__$1 = state_29937;
var statearr_29939_30022 = state_29937__$1;
(statearr_29939_30022[(2)] = inst_29933);

(statearr_29939_30022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (20))){
var inst_29838 = (state_29937[(7)]);
var inst_29850 = cljs.core.first.call(null,inst_29838);
var inst_29851 = cljs.core.nth.call(null,inst_29850,(0),null);
var inst_29852 = cljs.core.nth.call(null,inst_29850,(1),null);
var state_29937__$1 = (function (){var statearr_29940 = state_29937;
(statearr_29940[(8)] = inst_29851);

return statearr_29940;
})();
if(cljs.core.truth_(inst_29852)){
var statearr_29941_30023 = state_29937__$1;
(statearr_29941_30023[(1)] = (22));

} else {
var statearr_29942_30024 = state_29937__$1;
(statearr_29942_30024[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (27))){
var inst_29887 = (state_29937[(9)]);
var inst_29807 = (state_29937[(10)]);
var inst_29882 = (state_29937[(11)]);
var inst_29880 = (state_29937[(12)]);
var inst_29887__$1 = cljs.core._nth.call(null,inst_29880,inst_29882);
var inst_29888 = cljs.core.async.put_BANG_.call(null,inst_29887__$1,inst_29807,done);
var state_29937__$1 = (function (){var statearr_29943 = state_29937;
(statearr_29943[(9)] = inst_29887__$1);

return statearr_29943;
})();
if(cljs.core.truth_(inst_29888)){
var statearr_29944_30025 = state_29937__$1;
(statearr_29944_30025[(1)] = (30));

} else {
var statearr_29945_30026 = state_29937__$1;
(statearr_29945_30026[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (1))){
var state_29937__$1 = state_29937;
var statearr_29946_30027 = state_29937__$1;
(statearr_29946_30027[(2)] = null);

(statearr_29946_30027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (24))){
var inst_29838 = (state_29937[(7)]);
var inst_29857 = (state_29937[(2)]);
var inst_29858 = cljs.core.next.call(null,inst_29838);
var inst_29816 = inst_29858;
var inst_29817 = null;
var inst_29818 = (0);
var inst_29819 = (0);
var state_29937__$1 = (function (){var statearr_29947 = state_29937;
(statearr_29947[(13)] = inst_29816);

(statearr_29947[(14)] = inst_29857);

(statearr_29947[(15)] = inst_29818);

(statearr_29947[(16)] = inst_29817);

(statearr_29947[(17)] = inst_29819);

return statearr_29947;
})();
var statearr_29948_30028 = state_29937__$1;
(statearr_29948_30028[(2)] = null);

(statearr_29948_30028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (39))){
var state_29937__$1 = state_29937;
var statearr_29952_30029 = state_29937__$1;
(statearr_29952_30029[(2)] = null);

(statearr_29952_30029[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (4))){
var inst_29807 = (state_29937[(10)]);
var inst_29807__$1 = (state_29937[(2)]);
var inst_29808 = (inst_29807__$1 == null);
var state_29937__$1 = (function (){var statearr_29953 = state_29937;
(statearr_29953[(10)] = inst_29807__$1);

return statearr_29953;
})();
if(cljs.core.truth_(inst_29808)){
var statearr_29954_30030 = state_29937__$1;
(statearr_29954_30030[(1)] = (5));

} else {
var statearr_29955_30031 = state_29937__$1;
(statearr_29955_30031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (15))){
var inst_29816 = (state_29937[(13)]);
var inst_29818 = (state_29937[(15)]);
var inst_29817 = (state_29937[(16)]);
var inst_29819 = (state_29937[(17)]);
var inst_29834 = (state_29937[(2)]);
var inst_29835 = (inst_29819 + (1));
var tmp29949 = inst_29816;
var tmp29950 = inst_29818;
var tmp29951 = inst_29817;
var inst_29816__$1 = tmp29949;
var inst_29817__$1 = tmp29951;
var inst_29818__$1 = tmp29950;
var inst_29819__$1 = inst_29835;
var state_29937__$1 = (function (){var statearr_29956 = state_29937;
(statearr_29956[(13)] = inst_29816__$1);

(statearr_29956[(15)] = inst_29818__$1);

(statearr_29956[(18)] = inst_29834);

(statearr_29956[(16)] = inst_29817__$1);

(statearr_29956[(17)] = inst_29819__$1);

return statearr_29956;
})();
var statearr_29957_30032 = state_29937__$1;
(statearr_29957_30032[(2)] = null);

(statearr_29957_30032[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (21))){
var inst_29861 = (state_29937[(2)]);
var state_29937__$1 = state_29937;
var statearr_29961_30033 = state_29937__$1;
(statearr_29961_30033[(2)] = inst_29861);

(statearr_29961_30033[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (31))){
var inst_29887 = (state_29937[(9)]);
var inst_29891 = cljs.core.async.untap_STAR_.call(null,m,inst_29887);
var state_29937__$1 = state_29937;
var statearr_29962_30034 = state_29937__$1;
(statearr_29962_30034[(2)] = inst_29891);

(statearr_29962_30034[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (32))){
var inst_29882 = (state_29937[(11)]);
var inst_29880 = (state_29937[(12)]);
var inst_29879 = (state_29937[(19)]);
var inst_29881 = (state_29937[(20)]);
var inst_29893 = (state_29937[(2)]);
var inst_29894 = (inst_29882 + (1));
var tmp29958 = inst_29880;
var tmp29959 = inst_29879;
var tmp29960 = inst_29881;
var inst_29879__$1 = tmp29959;
var inst_29880__$1 = tmp29958;
var inst_29881__$1 = tmp29960;
var inst_29882__$1 = inst_29894;
var state_29937__$1 = (function (){var statearr_29963 = state_29937;
(statearr_29963[(11)] = inst_29882__$1);

(statearr_29963[(12)] = inst_29880__$1);

(statearr_29963[(21)] = inst_29893);

(statearr_29963[(19)] = inst_29879__$1);

(statearr_29963[(20)] = inst_29881__$1);

return statearr_29963;
})();
var statearr_29964_30035 = state_29937__$1;
(statearr_29964_30035[(2)] = null);

(statearr_29964_30035[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (40))){
var inst_29906 = (state_29937[(22)]);
var inst_29910 = cljs.core.async.untap_STAR_.call(null,m,inst_29906);
var state_29937__$1 = state_29937;
var statearr_29965_30036 = state_29937__$1;
(statearr_29965_30036[(2)] = inst_29910);

(statearr_29965_30036[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (33))){
var inst_29897 = (state_29937[(23)]);
var inst_29899 = cljs.core.chunked_seq_QMARK_.call(null,inst_29897);
var state_29937__$1 = state_29937;
if(inst_29899){
var statearr_29966_30037 = state_29937__$1;
(statearr_29966_30037[(1)] = (36));

} else {
var statearr_29967_30038 = state_29937__$1;
(statearr_29967_30038[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (13))){
var inst_29828 = (state_29937[(24)]);
var inst_29831 = cljs.core.async.close_BANG_.call(null,inst_29828);
var state_29937__$1 = state_29937;
var statearr_29968_30039 = state_29937__$1;
(statearr_29968_30039[(2)] = inst_29831);

(statearr_29968_30039[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (22))){
var inst_29851 = (state_29937[(8)]);
var inst_29854 = cljs.core.async.close_BANG_.call(null,inst_29851);
var state_29937__$1 = state_29937;
var statearr_29969_30040 = state_29937__$1;
(statearr_29969_30040[(2)] = inst_29854);

(statearr_29969_30040[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (36))){
var inst_29897 = (state_29937[(23)]);
var inst_29901 = cljs.core.chunk_first.call(null,inst_29897);
var inst_29902 = cljs.core.chunk_rest.call(null,inst_29897);
var inst_29903 = cljs.core.count.call(null,inst_29901);
var inst_29879 = inst_29902;
var inst_29880 = inst_29901;
var inst_29881 = inst_29903;
var inst_29882 = (0);
var state_29937__$1 = (function (){var statearr_29970 = state_29937;
(statearr_29970[(11)] = inst_29882);

(statearr_29970[(12)] = inst_29880);

(statearr_29970[(19)] = inst_29879);

(statearr_29970[(20)] = inst_29881);

return statearr_29970;
})();
var statearr_29971_30041 = state_29937__$1;
(statearr_29971_30041[(2)] = null);

(statearr_29971_30041[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (41))){
var inst_29897 = (state_29937[(23)]);
var inst_29912 = (state_29937[(2)]);
var inst_29913 = cljs.core.next.call(null,inst_29897);
var inst_29879 = inst_29913;
var inst_29880 = null;
var inst_29881 = (0);
var inst_29882 = (0);
var state_29937__$1 = (function (){var statearr_29972 = state_29937;
(statearr_29972[(25)] = inst_29912);

(statearr_29972[(11)] = inst_29882);

(statearr_29972[(12)] = inst_29880);

(statearr_29972[(19)] = inst_29879);

(statearr_29972[(20)] = inst_29881);

return statearr_29972;
})();
var statearr_29973_30042 = state_29937__$1;
(statearr_29973_30042[(2)] = null);

(statearr_29973_30042[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (43))){
var state_29937__$1 = state_29937;
var statearr_29974_30043 = state_29937__$1;
(statearr_29974_30043[(2)] = null);

(statearr_29974_30043[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (29))){
var inst_29921 = (state_29937[(2)]);
var state_29937__$1 = state_29937;
var statearr_29975_30044 = state_29937__$1;
(statearr_29975_30044[(2)] = inst_29921);

(statearr_29975_30044[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (44))){
var inst_29930 = (state_29937[(2)]);
var state_29937__$1 = (function (){var statearr_29976 = state_29937;
(statearr_29976[(26)] = inst_29930);

return statearr_29976;
})();
var statearr_29977_30045 = state_29937__$1;
(statearr_29977_30045[(2)] = null);

(statearr_29977_30045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (6))){
var inst_29871 = (state_29937[(27)]);
var inst_29870 = cljs.core.deref.call(null,cs);
var inst_29871__$1 = cljs.core.keys.call(null,inst_29870);
var inst_29872 = cljs.core.count.call(null,inst_29871__$1);
var inst_29873 = cljs.core.reset_BANG_.call(null,dctr,inst_29872);
var inst_29878 = cljs.core.seq.call(null,inst_29871__$1);
var inst_29879 = inst_29878;
var inst_29880 = null;
var inst_29881 = (0);
var inst_29882 = (0);
var state_29937__$1 = (function (){var statearr_29978 = state_29937;
(statearr_29978[(27)] = inst_29871__$1);

(statearr_29978[(11)] = inst_29882);

(statearr_29978[(12)] = inst_29880);

(statearr_29978[(28)] = inst_29873);

(statearr_29978[(19)] = inst_29879);

(statearr_29978[(20)] = inst_29881);

return statearr_29978;
})();
var statearr_29979_30046 = state_29937__$1;
(statearr_29979_30046[(2)] = null);

(statearr_29979_30046[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (28))){
var inst_29897 = (state_29937[(23)]);
var inst_29879 = (state_29937[(19)]);
var inst_29897__$1 = cljs.core.seq.call(null,inst_29879);
var state_29937__$1 = (function (){var statearr_29980 = state_29937;
(statearr_29980[(23)] = inst_29897__$1);

return statearr_29980;
})();
if(inst_29897__$1){
var statearr_29981_30047 = state_29937__$1;
(statearr_29981_30047[(1)] = (33));

} else {
var statearr_29982_30048 = state_29937__$1;
(statearr_29982_30048[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (25))){
var inst_29882 = (state_29937[(11)]);
var inst_29881 = (state_29937[(20)]);
var inst_29884 = (inst_29882 < inst_29881);
var inst_29885 = inst_29884;
var state_29937__$1 = state_29937;
if(cljs.core.truth_(inst_29885)){
var statearr_29983_30049 = state_29937__$1;
(statearr_29983_30049[(1)] = (27));

} else {
var statearr_29984_30050 = state_29937__$1;
(statearr_29984_30050[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (34))){
var state_29937__$1 = state_29937;
var statearr_29985_30051 = state_29937__$1;
(statearr_29985_30051[(2)] = null);

(statearr_29985_30051[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (17))){
var state_29937__$1 = state_29937;
var statearr_29986_30052 = state_29937__$1;
(statearr_29986_30052[(2)] = null);

(statearr_29986_30052[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (3))){
var inst_29935 = (state_29937[(2)]);
var state_29937__$1 = state_29937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29937__$1,inst_29935);
} else {
if((state_val_29938 === (12))){
var inst_29866 = (state_29937[(2)]);
var state_29937__$1 = state_29937;
var statearr_29987_30053 = state_29937__$1;
(statearr_29987_30053[(2)] = inst_29866);

(statearr_29987_30053[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (2))){
var state_29937__$1 = state_29937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29937__$1,(4),ch);
} else {
if((state_val_29938 === (23))){
var state_29937__$1 = state_29937;
var statearr_29988_30054 = state_29937__$1;
(statearr_29988_30054[(2)] = null);

(statearr_29988_30054[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (35))){
var inst_29919 = (state_29937[(2)]);
var state_29937__$1 = state_29937;
var statearr_29989_30055 = state_29937__$1;
(statearr_29989_30055[(2)] = inst_29919);

(statearr_29989_30055[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (19))){
var inst_29838 = (state_29937[(7)]);
var inst_29842 = cljs.core.chunk_first.call(null,inst_29838);
var inst_29843 = cljs.core.chunk_rest.call(null,inst_29838);
var inst_29844 = cljs.core.count.call(null,inst_29842);
var inst_29816 = inst_29843;
var inst_29817 = inst_29842;
var inst_29818 = inst_29844;
var inst_29819 = (0);
var state_29937__$1 = (function (){var statearr_29990 = state_29937;
(statearr_29990[(13)] = inst_29816);

(statearr_29990[(15)] = inst_29818);

(statearr_29990[(16)] = inst_29817);

(statearr_29990[(17)] = inst_29819);

return statearr_29990;
})();
var statearr_29991_30056 = state_29937__$1;
(statearr_29991_30056[(2)] = null);

(statearr_29991_30056[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (11))){
var inst_29816 = (state_29937[(13)]);
var inst_29838 = (state_29937[(7)]);
var inst_29838__$1 = cljs.core.seq.call(null,inst_29816);
var state_29937__$1 = (function (){var statearr_29992 = state_29937;
(statearr_29992[(7)] = inst_29838__$1);

return statearr_29992;
})();
if(inst_29838__$1){
var statearr_29993_30057 = state_29937__$1;
(statearr_29993_30057[(1)] = (16));

} else {
var statearr_29994_30058 = state_29937__$1;
(statearr_29994_30058[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (9))){
var inst_29868 = (state_29937[(2)]);
var state_29937__$1 = state_29937;
var statearr_29995_30059 = state_29937__$1;
(statearr_29995_30059[(2)] = inst_29868);

(statearr_29995_30059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (5))){
var inst_29814 = cljs.core.deref.call(null,cs);
var inst_29815 = cljs.core.seq.call(null,inst_29814);
var inst_29816 = inst_29815;
var inst_29817 = null;
var inst_29818 = (0);
var inst_29819 = (0);
var state_29937__$1 = (function (){var statearr_29996 = state_29937;
(statearr_29996[(13)] = inst_29816);

(statearr_29996[(15)] = inst_29818);

(statearr_29996[(16)] = inst_29817);

(statearr_29996[(17)] = inst_29819);

return statearr_29996;
})();
var statearr_29997_30060 = state_29937__$1;
(statearr_29997_30060[(2)] = null);

(statearr_29997_30060[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (14))){
var state_29937__$1 = state_29937;
var statearr_29998_30061 = state_29937__$1;
(statearr_29998_30061[(2)] = null);

(statearr_29998_30061[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (45))){
var inst_29927 = (state_29937[(2)]);
var state_29937__$1 = state_29937;
var statearr_29999_30062 = state_29937__$1;
(statearr_29999_30062[(2)] = inst_29927);

(statearr_29999_30062[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (26))){
var inst_29871 = (state_29937[(27)]);
var inst_29923 = (state_29937[(2)]);
var inst_29924 = cljs.core.seq.call(null,inst_29871);
var state_29937__$1 = (function (){var statearr_30000 = state_29937;
(statearr_30000[(29)] = inst_29923);

return statearr_30000;
})();
if(inst_29924){
var statearr_30001_30063 = state_29937__$1;
(statearr_30001_30063[(1)] = (42));

} else {
var statearr_30002_30064 = state_29937__$1;
(statearr_30002_30064[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (16))){
var inst_29838 = (state_29937[(7)]);
var inst_29840 = cljs.core.chunked_seq_QMARK_.call(null,inst_29838);
var state_29937__$1 = state_29937;
if(inst_29840){
var statearr_30003_30065 = state_29937__$1;
(statearr_30003_30065[(1)] = (19));

} else {
var statearr_30004_30066 = state_29937__$1;
(statearr_30004_30066[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (38))){
var inst_29916 = (state_29937[(2)]);
var state_29937__$1 = state_29937;
var statearr_30005_30067 = state_29937__$1;
(statearr_30005_30067[(2)] = inst_29916);

(statearr_30005_30067[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (30))){
var state_29937__$1 = state_29937;
var statearr_30006_30068 = state_29937__$1;
(statearr_30006_30068[(2)] = null);

(statearr_30006_30068[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (10))){
var inst_29817 = (state_29937[(16)]);
var inst_29819 = (state_29937[(17)]);
var inst_29827 = cljs.core._nth.call(null,inst_29817,inst_29819);
var inst_29828 = cljs.core.nth.call(null,inst_29827,(0),null);
var inst_29829 = cljs.core.nth.call(null,inst_29827,(1),null);
var state_29937__$1 = (function (){var statearr_30007 = state_29937;
(statearr_30007[(24)] = inst_29828);

return statearr_30007;
})();
if(cljs.core.truth_(inst_29829)){
var statearr_30008_30069 = state_29937__$1;
(statearr_30008_30069[(1)] = (13));

} else {
var statearr_30009_30070 = state_29937__$1;
(statearr_30009_30070[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (18))){
var inst_29864 = (state_29937[(2)]);
var state_29937__$1 = state_29937;
var statearr_30010_30071 = state_29937__$1;
(statearr_30010_30071[(2)] = inst_29864);

(statearr_30010_30071[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (42))){
var state_29937__$1 = state_29937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29937__$1,(45),dchan);
} else {
if((state_val_29938 === (37))){
var inst_29807 = (state_29937[(10)]);
var inst_29897 = (state_29937[(23)]);
var inst_29906 = (state_29937[(22)]);
var inst_29906__$1 = cljs.core.first.call(null,inst_29897);
var inst_29907 = cljs.core.async.put_BANG_.call(null,inst_29906__$1,inst_29807,done);
var state_29937__$1 = (function (){var statearr_30011 = state_29937;
(statearr_30011[(22)] = inst_29906__$1);

return statearr_30011;
})();
if(cljs.core.truth_(inst_29907)){
var statearr_30012_30072 = state_29937__$1;
(statearr_30012_30072[(1)] = (39));

} else {
var statearr_30013_30073 = state_29937__$1;
(statearr_30013_30073[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (8))){
var inst_29818 = (state_29937[(15)]);
var inst_29819 = (state_29937[(17)]);
var inst_29821 = (inst_29819 < inst_29818);
var inst_29822 = inst_29821;
var state_29937__$1 = state_29937;
if(cljs.core.truth_(inst_29822)){
var statearr_30014_30074 = state_29937__$1;
(statearr_30014_30074[(1)] = (10));

} else {
var statearr_30015_30075 = state_29937__$1;
(statearr_30015_30075[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__29106__auto__ = null;
var cljs$core$async$mult_$_state_machine__29106__auto____0 = (function (){
var statearr_30016 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30016[(0)] = cljs$core$async$mult_$_state_machine__29106__auto__);

(statearr_30016[(1)] = (1));

return statearr_30016;
});
var cljs$core$async$mult_$_state_machine__29106__auto____1 = (function (state_29937){
while(true){
var ret_value__29107__auto__ = (function (){try{while(true){
var result__29108__auto__ = switch__29105__auto__.call(null,state_29937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29108__auto__;
}
break;
}
}catch (e30017){var ex__29109__auto__ = e30017;
var statearr_30018_30076 = state_29937;
(statearr_30018_30076[(2)] = ex__29109__auto__);


if(cljs.core.seq.call(null,(state_29937[(4)]))){
var statearr_30019_30077 = state_29937;
(statearr_30019_30077[(1)] = cljs.core.first.call(null,(state_29937[(4)])));

} else {
throw ex__29109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30078 = state_29937;
state_29937 = G__30078;
continue;
} else {
return ret_value__29107__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29106__auto__ = function(state_29937){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29106__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29106__auto____1.call(this,state_29937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29106__auto____0;
cljs$core$async$mult_$_state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29106__auto____1;
return cljs$core$async$mult_$_state_machine__29106__auto__;
})()
})();
var state__29181__auto__ = (function (){var statearr_30020 = f__29180__auto__.call(null);
(statearr_30020[(6)] = c__29179__auto___30021);

return statearr_30020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29181__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__30080 = arguments.length;
switch (G__30080) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_30082 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,m,ch);
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_30082.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_30083 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,m,ch);
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_30083.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_30084 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,m);
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_30084.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_30085 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,m,state_map);
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_30085.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_30086 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,m,mode);
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_30086.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___30096 = arguments.length;
var i__4865__auto___30097 = (0);
while(true){
if((i__4865__auto___30097 < len__4864__auto___30096)){
args__4870__auto__.push((arguments[i__4865__auto___30097]));

var G__30098 = (i__4865__auto___30097 + (1));
i__4865__auto___30097 = G__30098;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30091){
var map__30092 = p__30091;
var map__30092__$1 = cljs.core.__destructure_map.call(null,map__30092);
var opts = map__30092__$1;
var statearr_30093_30099 = state;
(statearr_30093_30099[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_30094_30100 = state;
(statearr_30094_30100[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_30095_30101 = state;
(statearr_30095_30101[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30087){
var G__30088 = cljs.core.first.call(null,seq30087);
var seq30087__$1 = cljs.core.next.call(null,seq30087);
var G__30089 = cljs.core.first.call(null,seq30087__$1);
var seq30087__$2 = cljs.core.next.call(null,seq30087__$1);
var G__30090 = cljs.core.first.call(null,seq30087__$2);
var seq30087__$3 = cljs.core.next.call(null,seq30087__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30088,G__30089,G__30090,seq30087__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30102 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30102 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30103){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30103 = meta30103;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30104,meta30103__$1){
var self__ = this;
var _30104__$1 = this;
return (new cljs.core.async.t_cljs$core$async30102(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30103__$1));
}));

(cljs.core.async.t_cljs$core$async30102.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30104){
var self__ = this;
var _30104__$1 = this;
return self__.meta30103;
}));

(cljs.core.async.t_cljs$core$async30102.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30102.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async30102.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30102.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async30102.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async30102.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async30102.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async30102.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async30102.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30103","meta30103",34994744,null)], null);
}));

(cljs.core.async.t_cljs$core$async30102.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30102.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30102");

(cljs.core.async.t_cljs$core$async30102.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async30102");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30102.
 */
cljs.core.async.__GT_t_cljs$core$async30102 = (function cljs$core$async$mix_$___GT_t_cljs$core$async30102(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30103){
return (new cljs.core.async.t_cljs$core$async30102(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30103));
});

}

return (new cljs.core.async.t_cljs$core$async30102(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29179__auto___30217 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29180__auto__ = (function (){var switch__29105__auto__ = (function (state_30172){
var state_val_30173 = (state_30172[(1)]);
if((state_val_30173 === (7))){
var inst_30132 = (state_30172[(2)]);
var state_30172__$1 = state_30172;
if(cljs.core.truth_(inst_30132)){
var statearr_30174_30218 = state_30172__$1;
(statearr_30174_30218[(1)] = (8));

} else {
var statearr_30175_30219 = state_30172__$1;
(statearr_30175_30219[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30173 === (20))){
var inst_30125 = (state_30172[(7)]);
var state_30172__$1 = state_30172;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30172__$1,(23),out,inst_30125);
} else {
if((state_val_30173 === (1))){
var inst_30108 = calc_state.call(null);
var inst_30109 = cljs.core.__destructure_map.call(null,inst_30108);
var inst_30110 = cljs.core.get.call(null,inst_30109,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30111 = cljs.core.get.call(null,inst_30109,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30112 = cljs.core.get.call(null,inst_30109,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30113 = inst_30108;
var state_30172__$1 = (function (){var statearr_30176 = state_30172;
(statearr_30176[(8)] = inst_30110);

(statearr_30176[(9)] = inst_30113);

(statearr_30176[(10)] = inst_30111);

(statearr_30176[(11)] = inst_30112);

return statearr_30176;
})();
var statearr_30177_30220 = state_30172__$1;
(statearr_30177_30220[(2)] = null);

(statearr_30177_30220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30173 === (24))){
var inst_30116 = (state_30172[(12)]);
var inst_30113 = inst_30116;
var state_30172__$1 = (function (){var statearr_30178 = state_30172;
(statearr_30178[(9)] = inst_30113);

return statearr_30178;
})();
var statearr_30179_30221 = state_30172__$1;
(statearr_30179_30221[(2)] = null);

(statearr_30179_30221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30173 === (4))){
var inst_30127 = (state_30172[(13)]);
var inst_30125 = (state_30172[(7)]);
var inst_30124 = (state_30172[(2)]);
var inst_30125__$1 = cljs.core.nth.call(null,inst_30124,(0),null);
var inst_30126 = cljs.core.nth.call(null,inst_30124,(1),null);
var inst_30127__$1 = (inst_30125__$1 == null);
var state_30172__$1 = (function (){var statearr_30180 = state_30172;
(statearr_30180[(14)] = inst_30126);

(statearr_30180[(13)] = inst_30127__$1);

(statearr_30180[(7)] = inst_30125__$1);

return statearr_30180;
})();
if(cljs.core.truth_(inst_30127__$1)){
var statearr_30181_30222 = state_30172__$1;
(statearr_30181_30222[(1)] = (5));

} else {
var statearr_30182_30223 = state_30172__$1;
(statearr_30182_30223[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30173 === (15))){
var inst_30146 = (state_30172[(15)]);
var inst_30117 = (state_30172[(16)]);
var inst_30146__$1 = cljs.core.empty_QMARK_.call(null,inst_30117);
var state_30172__$1 = (function (){var statearr_30183 = state_30172;
(statearr_30183[(15)] = inst_30146__$1);

return statearr_30183;
})();
if(inst_30146__$1){
var statearr_30184_30224 = state_30172__$1;
(statearr_30184_30224[(1)] = (17));

} else {
var statearr_30185_30225 = state_30172__$1;
(statearr_30185_30225[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30173 === (21))){
var inst_30116 = (state_30172[(12)]);
var inst_30113 = inst_30116;
var state_30172__$1 = (function (){var statearr_30186 = state_30172;
(statearr_30186[(9)] = inst_30113);

return statearr_30186;
})();
var statearr_30187_30226 = state_30172__$1;
(statearr_30187_30226[(2)] = null);

(statearr_30187_30226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30173 === (13))){
var inst_30139 = (state_30172[(2)]);
var inst_30140 = calc_state.call(null);
var inst_30113 = inst_30140;
var state_30172__$1 = (function (){var statearr_30188 = state_30172;
(statearr_30188[(9)] = inst_30113);

(statearr_30188[(17)] = inst_30139);

return statearr_30188;
})();
var statearr_30189_30227 = state_30172__$1;
(statearr_30189_30227[(2)] = null);

(statearr_30189_30227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30173 === (22))){
var inst_30166 = (state_30172[(2)]);
var state_30172__$1 = state_30172;
var statearr_30190_30228 = state_30172__$1;
(statearr_30190_30228[(2)] = inst_30166);

(statearr_30190_30228[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30173 === (6))){
var inst_30126 = (state_30172[(14)]);
var inst_30130 = cljs.core._EQ_.call(null,inst_30126,change);
var state_30172__$1 = state_30172;
var statearr_30191_30229 = state_30172__$1;
(statearr_30191_30229[(2)] = inst_30130);

(statearr_30191_30229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30173 === (25))){
var state_30172__$1 = state_30172;
var statearr_30192_30230 = state_30172__$1;
(statearr_30192_30230[(2)] = null);

(statearr_30192_30230[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30173 === (17))){
var inst_30126 = (state_30172[(14)]);
var inst_30118 = (state_30172[(18)]);
var inst_30148 = inst_30118.call(null,inst_30126);
var inst_30149 = cljs.core.not.call(null,inst_30148);
var state_30172__$1 = state_30172;
var statearr_30193_30231 = state_30172__$1;
(statearr_30193_30231[(2)] = inst_30149);

(statearr_30193_30231[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30173 === (3))){
var inst_30170 = (state_30172[(2)]);
var state_30172__$1 = state_30172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30172__$1,inst_30170);
} else {
if((state_val_30173 === (12))){
var state_30172__$1 = state_30172;
var statearr_30194_30232 = state_30172__$1;
(statearr_30194_30232[(2)] = null);

(statearr_30194_30232[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30173 === (2))){
var inst_30113 = (state_30172[(9)]);
var inst_30116 = (state_30172[(12)]);
var inst_30116__$1 = cljs.core.__destructure_map.call(null,inst_30113);
var inst_30117 = cljs.core.get.call(null,inst_30116__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30118 = cljs.core.get.call(null,inst_30116__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30119 = cljs.core.get.call(null,inst_30116__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30172__$1 = (function (){var statearr_30195 = state_30172;
(statearr_30195[(16)] = inst_30117);

(statearr_30195[(18)] = inst_30118);

(statearr_30195[(12)] = inst_30116__$1);

return statearr_30195;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30172__$1,(4),inst_30119);
} else {
if((state_val_30173 === (23))){
var inst_30157 = (state_30172[(2)]);
var state_30172__$1 = state_30172;
if(cljs.core.truth_(inst_30157)){
var statearr_30196_30233 = state_30172__$1;
(statearr_30196_30233[(1)] = (24));

} else {
var statearr_30197_30234 = state_30172__$1;
(statearr_30197_30234[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30173 === (19))){
var inst_30152 = (state_30172[(2)]);
var state_30172__$1 = state_30172;
var statearr_30198_30235 = state_30172__$1;
(statearr_30198_30235[(2)] = inst_30152);

(statearr_30198_30235[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30173 === (11))){
var inst_30126 = (state_30172[(14)]);
var inst_30136 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30126);
var state_30172__$1 = state_30172;
var statearr_30199_30236 = state_30172__$1;
(statearr_30199_30236[(2)] = inst_30136);

(statearr_30199_30236[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30173 === (9))){
var inst_30117 = (state_30172[(16)]);
var inst_30126 = (state_30172[(14)]);
var inst_30143 = (state_30172[(19)]);
var inst_30143__$1 = inst_30117.call(null,inst_30126);
var state_30172__$1 = (function (){var statearr_30200 = state_30172;
(statearr_30200[(19)] = inst_30143__$1);

return statearr_30200;
})();
if(cljs.core.truth_(inst_30143__$1)){
var statearr_30201_30237 = state_30172__$1;
(statearr_30201_30237[(1)] = (14));

} else {
var statearr_30202_30238 = state_30172__$1;
(statearr_30202_30238[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30173 === (5))){
var inst_30127 = (state_30172[(13)]);
var state_30172__$1 = state_30172;
var statearr_30203_30239 = state_30172__$1;
(statearr_30203_30239[(2)] = inst_30127);

(statearr_30203_30239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30173 === (14))){
var inst_30143 = (state_30172[(19)]);
var state_30172__$1 = state_30172;
var statearr_30204_30240 = state_30172__$1;
(statearr_30204_30240[(2)] = inst_30143);

(statearr_30204_30240[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30173 === (26))){
var inst_30162 = (state_30172[(2)]);
var state_30172__$1 = state_30172;
var statearr_30205_30241 = state_30172__$1;
(statearr_30205_30241[(2)] = inst_30162);

(statearr_30205_30241[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30173 === (16))){
var inst_30154 = (state_30172[(2)]);
var state_30172__$1 = state_30172;
if(cljs.core.truth_(inst_30154)){
var statearr_30206_30242 = state_30172__$1;
(statearr_30206_30242[(1)] = (20));

} else {
var statearr_30207_30243 = state_30172__$1;
(statearr_30207_30243[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30173 === (10))){
var inst_30168 = (state_30172[(2)]);
var state_30172__$1 = state_30172;
var statearr_30208_30244 = state_30172__$1;
(statearr_30208_30244[(2)] = inst_30168);

(statearr_30208_30244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30173 === (18))){
var inst_30146 = (state_30172[(15)]);
var state_30172__$1 = state_30172;
var statearr_30209_30245 = state_30172__$1;
(statearr_30209_30245[(2)] = inst_30146);

(statearr_30209_30245[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30173 === (8))){
var inst_30125 = (state_30172[(7)]);
var inst_30134 = (inst_30125 == null);
var state_30172__$1 = state_30172;
if(cljs.core.truth_(inst_30134)){
var statearr_30210_30246 = state_30172__$1;
(statearr_30210_30246[(1)] = (11));

} else {
var statearr_30211_30247 = state_30172__$1;
(statearr_30211_30247[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__29106__auto__ = null;
var cljs$core$async$mix_$_state_machine__29106__auto____0 = (function (){
var statearr_30212 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30212[(0)] = cljs$core$async$mix_$_state_machine__29106__auto__);

(statearr_30212[(1)] = (1));

return statearr_30212;
});
var cljs$core$async$mix_$_state_machine__29106__auto____1 = (function (state_30172){
while(true){
var ret_value__29107__auto__ = (function (){try{while(true){
var result__29108__auto__ = switch__29105__auto__.call(null,state_30172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29108__auto__;
}
break;
}
}catch (e30213){var ex__29109__auto__ = e30213;
var statearr_30214_30248 = state_30172;
(statearr_30214_30248[(2)] = ex__29109__auto__);


if(cljs.core.seq.call(null,(state_30172[(4)]))){
var statearr_30215_30249 = state_30172;
(statearr_30215_30249[(1)] = cljs.core.first.call(null,(state_30172[(4)])));

} else {
throw ex__29109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30250 = state_30172;
state_30172 = G__30250;
continue;
} else {
return ret_value__29107__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29106__auto__ = function(state_30172){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29106__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29106__auto____1.call(this,state_30172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29106__auto____0;
cljs$core$async$mix_$_state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29106__auto____1;
return cljs$core$async$mix_$_state_machine__29106__auto__;
})()
})();
var state__29181__auto__ = (function (){var statearr_30216 = f__29180__auto__.call(null);
(statearr_30216[(6)] = c__29179__auto___30217);

return statearr_30216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29181__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_30253 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_30253.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_30254 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,p,v,ch);
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_30254.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_30255 = (function() {
var G__30256 = null;
var G__30256__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,p);
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__30256__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,p,v);
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__30256 = function(p,v){
switch(arguments.length){
case 1:
return G__30256__1.call(this,p);
case 2:
return G__30256__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30256.cljs$core$IFn$_invoke$arity$1 = G__30256__1;
G__30256.cljs$core$IFn$_invoke$arity$2 = G__30256__2;
return G__30256;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__30252 = arguments.length;
switch (G__30252) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_30255.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_30255.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__30260 = arguments.length;
switch (G__30260) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__30258_SHARP_){
if(cljs.core.truth_(p1__30258_SHARP_.call(null,topic))){
return p1__30258_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30258_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30261 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30261 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30262){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30262 = meta30262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30263,meta30262__$1){
var self__ = this;
var _30263__$1 = this;
return (new cljs.core.async.t_cljs$core$async30261(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30262__$1));
}));

(cljs.core.async.t_cljs$core$async30261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30263){
var self__ = this;
var _30263__$1 = this;
return self__.meta30262;
}));

(cljs.core.async.t_cljs$core$async30261.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30261.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30261.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30261.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async30261.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async30261.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async30261.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async30261.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30262","meta30262",-698852150,null)], null);
}));

(cljs.core.async.t_cljs$core$async30261.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30261.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30261");

(cljs.core.async.t_cljs$core$async30261.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async30261");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30261.
 */
cljs.core.async.__GT_t_cljs$core$async30261 = (function cljs$core$async$__GT_t_cljs$core$async30261(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30262){
return (new cljs.core.async.t_cljs$core$async30261(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30262));
});

}

return (new cljs.core.async.t_cljs$core$async30261(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29179__auto___30382 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29180__auto__ = (function (){var switch__29105__auto__ = (function (state_30335){
var state_val_30336 = (state_30335[(1)]);
if((state_val_30336 === (7))){
var inst_30331 = (state_30335[(2)]);
var state_30335__$1 = state_30335;
var statearr_30337_30383 = state_30335__$1;
(statearr_30337_30383[(2)] = inst_30331);

(statearr_30337_30383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (20))){
var state_30335__$1 = state_30335;
var statearr_30338_30384 = state_30335__$1;
(statearr_30338_30384[(2)] = null);

(statearr_30338_30384[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (1))){
var state_30335__$1 = state_30335;
var statearr_30339_30385 = state_30335__$1;
(statearr_30339_30385[(2)] = null);

(statearr_30339_30385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (24))){
var inst_30314 = (state_30335[(7)]);
var inst_30323 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30314);
var state_30335__$1 = state_30335;
var statearr_30340_30386 = state_30335__$1;
(statearr_30340_30386[(2)] = inst_30323);

(statearr_30340_30386[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (4))){
var inst_30266 = (state_30335[(8)]);
var inst_30266__$1 = (state_30335[(2)]);
var inst_30267 = (inst_30266__$1 == null);
var state_30335__$1 = (function (){var statearr_30341 = state_30335;
(statearr_30341[(8)] = inst_30266__$1);

return statearr_30341;
})();
if(cljs.core.truth_(inst_30267)){
var statearr_30342_30387 = state_30335__$1;
(statearr_30342_30387[(1)] = (5));

} else {
var statearr_30343_30388 = state_30335__$1;
(statearr_30343_30388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (15))){
var inst_30308 = (state_30335[(2)]);
var state_30335__$1 = state_30335;
var statearr_30344_30389 = state_30335__$1;
(statearr_30344_30389[(2)] = inst_30308);

(statearr_30344_30389[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (21))){
var inst_30328 = (state_30335[(2)]);
var state_30335__$1 = (function (){var statearr_30345 = state_30335;
(statearr_30345[(9)] = inst_30328);

return statearr_30345;
})();
var statearr_30346_30390 = state_30335__$1;
(statearr_30346_30390[(2)] = null);

(statearr_30346_30390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (13))){
var inst_30290 = (state_30335[(10)]);
var inst_30292 = cljs.core.chunked_seq_QMARK_.call(null,inst_30290);
var state_30335__$1 = state_30335;
if(inst_30292){
var statearr_30347_30391 = state_30335__$1;
(statearr_30347_30391[(1)] = (16));

} else {
var statearr_30348_30392 = state_30335__$1;
(statearr_30348_30392[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (22))){
var inst_30320 = (state_30335[(2)]);
var state_30335__$1 = state_30335;
if(cljs.core.truth_(inst_30320)){
var statearr_30349_30393 = state_30335__$1;
(statearr_30349_30393[(1)] = (23));

} else {
var statearr_30350_30394 = state_30335__$1;
(statearr_30350_30394[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (6))){
var inst_30314 = (state_30335[(7)]);
var inst_30266 = (state_30335[(8)]);
var inst_30316 = (state_30335[(11)]);
var inst_30314__$1 = topic_fn.call(null,inst_30266);
var inst_30315 = cljs.core.deref.call(null,mults);
var inst_30316__$1 = cljs.core.get.call(null,inst_30315,inst_30314__$1);
var state_30335__$1 = (function (){var statearr_30351 = state_30335;
(statearr_30351[(7)] = inst_30314__$1);

(statearr_30351[(11)] = inst_30316__$1);

return statearr_30351;
})();
if(cljs.core.truth_(inst_30316__$1)){
var statearr_30352_30395 = state_30335__$1;
(statearr_30352_30395[(1)] = (19));

} else {
var statearr_30353_30396 = state_30335__$1;
(statearr_30353_30396[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (25))){
var inst_30325 = (state_30335[(2)]);
var state_30335__$1 = state_30335;
var statearr_30354_30397 = state_30335__$1;
(statearr_30354_30397[(2)] = inst_30325);

(statearr_30354_30397[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (17))){
var inst_30290 = (state_30335[(10)]);
var inst_30299 = cljs.core.first.call(null,inst_30290);
var inst_30300 = cljs.core.async.muxch_STAR_.call(null,inst_30299);
var inst_30301 = cljs.core.async.close_BANG_.call(null,inst_30300);
var inst_30302 = cljs.core.next.call(null,inst_30290);
var inst_30276 = inst_30302;
var inst_30277 = null;
var inst_30278 = (0);
var inst_30279 = (0);
var state_30335__$1 = (function (){var statearr_30355 = state_30335;
(statearr_30355[(12)] = inst_30278);

(statearr_30355[(13)] = inst_30277);

(statearr_30355[(14)] = inst_30301);

(statearr_30355[(15)] = inst_30279);

(statearr_30355[(16)] = inst_30276);

return statearr_30355;
})();
var statearr_30356_30398 = state_30335__$1;
(statearr_30356_30398[(2)] = null);

(statearr_30356_30398[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (3))){
var inst_30333 = (state_30335[(2)]);
var state_30335__$1 = state_30335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30335__$1,inst_30333);
} else {
if((state_val_30336 === (12))){
var inst_30310 = (state_30335[(2)]);
var state_30335__$1 = state_30335;
var statearr_30357_30399 = state_30335__$1;
(statearr_30357_30399[(2)] = inst_30310);

(statearr_30357_30399[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (2))){
var state_30335__$1 = state_30335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30335__$1,(4),ch);
} else {
if((state_val_30336 === (23))){
var state_30335__$1 = state_30335;
var statearr_30358_30400 = state_30335__$1;
(statearr_30358_30400[(2)] = null);

(statearr_30358_30400[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (19))){
var inst_30266 = (state_30335[(8)]);
var inst_30316 = (state_30335[(11)]);
var inst_30318 = cljs.core.async.muxch_STAR_.call(null,inst_30316);
var state_30335__$1 = state_30335;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30335__$1,(22),inst_30318,inst_30266);
} else {
if((state_val_30336 === (11))){
var inst_30276 = (state_30335[(16)]);
var inst_30290 = (state_30335[(10)]);
var inst_30290__$1 = cljs.core.seq.call(null,inst_30276);
var state_30335__$1 = (function (){var statearr_30359 = state_30335;
(statearr_30359[(10)] = inst_30290__$1);

return statearr_30359;
})();
if(inst_30290__$1){
var statearr_30360_30401 = state_30335__$1;
(statearr_30360_30401[(1)] = (13));

} else {
var statearr_30361_30402 = state_30335__$1;
(statearr_30361_30402[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (9))){
var inst_30312 = (state_30335[(2)]);
var state_30335__$1 = state_30335;
var statearr_30362_30403 = state_30335__$1;
(statearr_30362_30403[(2)] = inst_30312);

(statearr_30362_30403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (5))){
var inst_30273 = cljs.core.deref.call(null,mults);
var inst_30274 = cljs.core.vals.call(null,inst_30273);
var inst_30275 = cljs.core.seq.call(null,inst_30274);
var inst_30276 = inst_30275;
var inst_30277 = null;
var inst_30278 = (0);
var inst_30279 = (0);
var state_30335__$1 = (function (){var statearr_30363 = state_30335;
(statearr_30363[(12)] = inst_30278);

(statearr_30363[(13)] = inst_30277);

(statearr_30363[(15)] = inst_30279);

(statearr_30363[(16)] = inst_30276);

return statearr_30363;
})();
var statearr_30364_30404 = state_30335__$1;
(statearr_30364_30404[(2)] = null);

(statearr_30364_30404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (14))){
var state_30335__$1 = state_30335;
var statearr_30368_30405 = state_30335__$1;
(statearr_30368_30405[(2)] = null);

(statearr_30368_30405[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (16))){
var inst_30290 = (state_30335[(10)]);
var inst_30294 = cljs.core.chunk_first.call(null,inst_30290);
var inst_30295 = cljs.core.chunk_rest.call(null,inst_30290);
var inst_30296 = cljs.core.count.call(null,inst_30294);
var inst_30276 = inst_30295;
var inst_30277 = inst_30294;
var inst_30278 = inst_30296;
var inst_30279 = (0);
var state_30335__$1 = (function (){var statearr_30369 = state_30335;
(statearr_30369[(12)] = inst_30278);

(statearr_30369[(13)] = inst_30277);

(statearr_30369[(15)] = inst_30279);

(statearr_30369[(16)] = inst_30276);

return statearr_30369;
})();
var statearr_30370_30406 = state_30335__$1;
(statearr_30370_30406[(2)] = null);

(statearr_30370_30406[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (10))){
var inst_30278 = (state_30335[(12)]);
var inst_30277 = (state_30335[(13)]);
var inst_30279 = (state_30335[(15)]);
var inst_30276 = (state_30335[(16)]);
var inst_30284 = cljs.core._nth.call(null,inst_30277,inst_30279);
var inst_30285 = cljs.core.async.muxch_STAR_.call(null,inst_30284);
var inst_30286 = cljs.core.async.close_BANG_.call(null,inst_30285);
var inst_30287 = (inst_30279 + (1));
var tmp30365 = inst_30278;
var tmp30366 = inst_30277;
var tmp30367 = inst_30276;
var inst_30276__$1 = tmp30367;
var inst_30277__$1 = tmp30366;
var inst_30278__$1 = tmp30365;
var inst_30279__$1 = inst_30287;
var state_30335__$1 = (function (){var statearr_30371 = state_30335;
(statearr_30371[(12)] = inst_30278__$1);

(statearr_30371[(13)] = inst_30277__$1);

(statearr_30371[(15)] = inst_30279__$1);

(statearr_30371[(16)] = inst_30276__$1);

(statearr_30371[(17)] = inst_30286);

return statearr_30371;
})();
var statearr_30372_30407 = state_30335__$1;
(statearr_30372_30407[(2)] = null);

(statearr_30372_30407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (18))){
var inst_30305 = (state_30335[(2)]);
var state_30335__$1 = state_30335;
var statearr_30373_30408 = state_30335__$1;
(statearr_30373_30408[(2)] = inst_30305);

(statearr_30373_30408[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (8))){
var inst_30278 = (state_30335[(12)]);
var inst_30279 = (state_30335[(15)]);
var inst_30281 = (inst_30279 < inst_30278);
var inst_30282 = inst_30281;
var state_30335__$1 = state_30335;
if(cljs.core.truth_(inst_30282)){
var statearr_30374_30409 = state_30335__$1;
(statearr_30374_30409[(1)] = (10));

} else {
var statearr_30375_30410 = state_30335__$1;
(statearr_30375_30410[(1)] = (11));

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
var cljs$core$async$state_machine__29106__auto__ = null;
var cljs$core$async$state_machine__29106__auto____0 = (function (){
var statearr_30376 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30376[(0)] = cljs$core$async$state_machine__29106__auto__);

(statearr_30376[(1)] = (1));

return statearr_30376;
});
var cljs$core$async$state_machine__29106__auto____1 = (function (state_30335){
while(true){
var ret_value__29107__auto__ = (function (){try{while(true){
var result__29108__auto__ = switch__29105__auto__.call(null,state_30335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29108__auto__;
}
break;
}
}catch (e30377){var ex__29109__auto__ = e30377;
var statearr_30378_30411 = state_30335;
(statearr_30378_30411[(2)] = ex__29109__auto__);


if(cljs.core.seq.call(null,(state_30335[(4)]))){
var statearr_30379_30412 = state_30335;
(statearr_30379_30412[(1)] = cljs.core.first.call(null,(state_30335[(4)])));

} else {
throw ex__29109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30413 = state_30335;
state_30335 = G__30413;
continue;
} else {
return ret_value__29107__auto__;
}
break;
}
});
cljs$core$async$state_machine__29106__auto__ = function(state_30335){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29106__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29106__auto____1.call(this,state_30335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29106__auto____0;
cljs$core$async$state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29106__auto____1;
return cljs$core$async$state_machine__29106__auto__;
})()
})();
var state__29181__auto__ = (function (){var statearr_30380 = f__29180__auto__.call(null);
(statearr_30380[(6)] = c__29179__auto___30382);

return statearr_30380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29181__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__30415 = arguments.length;
switch (G__30415) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__30418 = arguments.length;
switch (G__30418) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__30421 = arguments.length;
switch (G__30421) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_.call(null,out);
} else {
var c__29179__auto___30499 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29180__auto__ = (function (){var switch__29105__auto__ = (function (state_30464){
var state_val_30465 = (state_30464[(1)]);
if((state_val_30465 === (7))){
var state_30464__$1 = state_30464;
var statearr_30466_30500 = state_30464__$1;
(statearr_30466_30500[(2)] = null);

(statearr_30466_30500[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30465 === (1))){
var state_30464__$1 = state_30464;
var statearr_30467_30501 = state_30464__$1;
(statearr_30467_30501[(2)] = null);

(statearr_30467_30501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30465 === (4))){
var inst_30424 = (state_30464[(7)]);
var inst_30425 = (state_30464[(8)]);
var inst_30427 = (inst_30425 < inst_30424);
var state_30464__$1 = state_30464;
if(cljs.core.truth_(inst_30427)){
var statearr_30468_30502 = state_30464__$1;
(statearr_30468_30502[(1)] = (6));

} else {
var statearr_30469_30503 = state_30464__$1;
(statearr_30469_30503[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30465 === (15))){
var inst_30450 = (state_30464[(9)]);
var inst_30455 = cljs.core.apply.call(null,f,inst_30450);
var state_30464__$1 = state_30464;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30464__$1,(17),out,inst_30455);
} else {
if((state_val_30465 === (13))){
var inst_30450 = (state_30464[(9)]);
var inst_30450__$1 = (state_30464[(2)]);
var inst_30451 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30450__$1);
var state_30464__$1 = (function (){var statearr_30470 = state_30464;
(statearr_30470[(9)] = inst_30450__$1);

return statearr_30470;
})();
if(cljs.core.truth_(inst_30451)){
var statearr_30471_30504 = state_30464__$1;
(statearr_30471_30504[(1)] = (14));

} else {
var statearr_30472_30505 = state_30464__$1;
(statearr_30472_30505[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30465 === (6))){
var state_30464__$1 = state_30464;
var statearr_30473_30506 = state_30464__$1;
(statearr_30473_30506[(2)] = null);

(statearr_30473_30506[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30465 === (17))){
var inst_30457 = (state_30464[(2)]);
var state_30464__$1 = (function (){var statearr_30475 = state_30464;
(statearr_30475[(10)] = inst_30457);

return statearr_30475;
})();
var statearr_30476_30507 = state_30464__$1;
(statearr_30476_30507[(2)] = null);

(statearr_30476_30507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30465 === (3))){
var inst_30462 = (state_30464[(2)]);
var state_30464__$1 = state_30464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30464__$1,inst_30462);
} else {
if((state_val_30465 === (12))){
var _ = (function (){var statearr_30477 = state_30464;
(statearr_30477[(4)] = cljs.core.rest.call(null,(state_30464[(4)])));

return statearr_30477;
})();
var state_30464__$1 = state_30464;
var ex30474 = (state_30464__$1[(2)]);
var statearr_30478_30508 = state_30464__$1;
(statearr_30478_30508[(5)] = ex30474);


if((ex30474 instanceof Object)){
var statearr_30479_30509 = state_30464__$1;
(statearr_30479_30509[(1)] = (11));

(statearr_30479_30509[(5)] = null);

} else {
throw ex30474;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30465 === (2))){
var inst_30423 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30424 = cnt;
var inst_30425 = (0);
var state_30464__$1 = (function (){var statearr_30480 = state_30464;
(statearr_30480[(11)] = inst_30423);

(statearr_30480[(7)] = inst_30424);

(statearr_30480[(8)] = inst_30425);

return statearr_30480;
})();
var statearr_30481_30510 = state_30464__$1;
(statearr_30481_30510[(2)] = null);

(statearr_30481_30510[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30465 === (11))){
var inst_30429 = (state_30464[(2)]);
var inst_30430 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30464__$1 = (function (){var statearr_30482 = state_30464;
(statearr_30482[(12)] = inst_30429);

return statearr_30482;
})();
var statearr_30483_30511 = state_30464__$1;
(statearr_30483_30511[(2)] = inst_30430);

(statearr_30483_30511[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30465 === (9))){
var inst_30425 = (state_30464[(8)]);
var _ = (function (){var statearr_30484 = state_30464;
(statearr_30484[(4)] = cljs.core.cons.call(null,(12),(state_30464[(4)])));

return statearr_30484;
})();
var inst_30436 = chs__$1.call(null,inst_30425);
var inst_30437 = done.call(null,inst_30425);
var inst_30438 = cljs.core.async.take_BANG_.call(null,inst_30436,inst_30437);
var ___$1 = (function (){var statearr_30485 = state_30464;
(statearr_30485[(4)] = cljs.core.rest.call(null,(state_30464[(4)])));

return statearr_30485;
})();
var state_30464__$1 = state_30464;
var statearr_30486_30512 = state_30464__$1;
(statearr_30486_30512[(2)] = inst_30438);

(statearr_30486_30512[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30465 === (5))){
var inst_30448 = (state_30464[(2)]);
var state_30464__$1 = (function (){var statearr_30487 = state_30464;
(statearr_30487[(13)] = inst_30448);

return statearr_30487;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30464__$1,(13),dchan);
} else {
if((state_val_30465 === (14))){
var inst_30453 = cljs.core.async.close_BANG_.call(null,out);
var state_30464__$1 = state_30464;
var statearr_30488_30513 = state_30464__$1;
(statearr_30488_30513[(2)] = inst_30453);

(statearr_30488_30513[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30465 === (16))){
var inst_30460 = (state_30464[(2)]);
var state_30464__$1 = state_30464;
var statearr_30489_30514 = state_30464__$1;
(statearr_30489_30514[(2)] = inst_30460);

(statearr_30489_30514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30465 === (10))){
var inst_30425 = (state_30464[(8)]);
var inst_30441 = (state_30464[(2)]);
var inst_30442 = (inst_30425 + (1));
var inst_30425__$1 = inst_30442;
var state_30464__$1 = (function (){var statearr_30490 = state_30464;
(statearr_30490[(14)] = inst_30441);

(statearr_30490[(8)] = inst_30425__$1);

return statearr_30490;
})();
var statearr_30491_30515 = state_30464__$1;
(statearr_30491_30515[(2)] = null);

(statearr_30491_30515[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30465 === (8))){
var inst_30446 = (state_30464[(2)]);
var state_30464__$1 = state_30464;
var statearr_30492_30516 = state_30464__$1;
(statearr_30492_30516[(2)] = inst_30446);

(statearr_30492_30516[(1)] = (5));


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
var cljs$core$async$state_machine__29106__auto__ = null;
var cljs$core$async$state_machine__29106__auto____0 = (function (){
var statearr_30493 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30493[(0)] = cljs$core$async$state_machine__29106__auto__);

(statearr_30493[(1)] = (1));

return statearr_30493;
});
var cljs$core$async$state_machine__29106__auto____1 = (function (state_30464){
while(true){
var ret_value__29107__auto__ = (function (){try{while(true){
var result__29108__auto__ = switch__29105__auto__.call(null,state_30464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29108__auto__;
}
break;
}
}catch (e30494){var ex__29109__auto__ = e30494;
var statearr_30495_30517 = state_30464;
(statearr_30495_30517[(2)] = ex__29109__auto__);


if(cljs.core.seq.call(null,(state_30464[(4)]))){
var statearr_30496_30518 = state_30464;
(statearr_30496_30518[(1)] = cljs.core.first.call(null,(state_30464[(4)])));

} else {
throw ex__29109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30519 = state_30464;
state_30464 = G__30519;
continue;
} else {
return ret_value__29107__auto__;
}
break;
}
});
cljs$core$async$state_machine__29106__auto__ = function(state_30464){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29106__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29106__auto____1.call(this,state_30464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29106__auto____0;
cljs$core$async$state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29106__auto____1;
return cljs$core$async$state_machine__29106__auto__;
})()
})();
var state__29181__auto__ = (function (){var statearr_30497 = f__29180__auto__.call(null);
(statearr_30497[(6)] = c__29179__auto___30499);

return statearr_30497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29181__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__30522 = arguments.length;
switch (G__30522) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29179__auto___30577 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29180__auto__ = (function (){var switch__29105__auto__ = (function (state_30554){
var state_val_30555 = (state_30554[(1)]);
if((state_val_30555 === (7))){
var inst_30534 = (state_30554[(7)]);
var inst_30533 = (state_30554[(8)]);
var inst_30533__$1 = (state_30554[(2)]);
var inst_30534__$1 = cljs.core.nth.call(null,inst_30533__$1,(0),null);
var inst_30535 = cljs.core.nth.call(null,inst_30533__$1,(1),null);
var inst_30536 = (inst_30534__$1 == null);
var state_30554__$1 = (function (){var statearr_30556 = state_30554;
(statearr_30556[(9)] = inst_30535);

(statearr_30556[(7)] = inst_30534__$1);

(statearr_30556[(8)] = inst_30533__$1);

return statearr_30556;
})();
if(cljs.core.truth_(inst_30536)){
var statearr_30557_30578 = state_30554__$1;
(statearr_30557_30578[(1)] = (8));

} else {
var statearr_30558_30579 = state_30554__$1;
(statearr_30558_30579[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (1))){
var inst_30523 = cljs.core.vec.call(null,chs);
var inst_30524 = inst_30523;
var state_30554__$1 = (function (){var statearr_30559 = state_30554;
(statearr_30559[(10)] = inst_30524);

return statearr_30559;
})();
var statearr_30560_30580 = state_30554__$1;
(statearr_30560_30580[(2)] = null);

(statearr_30560_30580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (4))){
var inst_30524 = (state_30554[(10)]);
var state_30554__$1 = state_30554;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30554__$1,(7),inst_30524);
} else {
if((state_val_30555 === (6))){
var inst_30550 = (state_30554[(2)]);
var state_30554__$1 = state_30554;
var statearr_30561_30581 = state_30554__$1;
(statearr_30561_30581[(2)] = inst_30550);

(statearr_30561_30581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (3))){
var inst_30552 = (state_30554[(2)]);
var state_30554__$1 = state_30554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30554__$1,inst_30552);
} else {
if((state_val_30555 === (2))){
var inst_30524 = (state_30554[(10)]);
var inst_30526 = cljs.core.count.call(null,inst_30524);
var inst_30527 = (inst_30526 > (0));
var state_30554__$1 = state_30554;
if(cljs.core.truth_(inst_30527)){
var statearr_30563_30582 = state_30554__$1;
(statearr_30563_30582[(1)] = (4));

} else {
var statearr_30564_30583 = state_30554__$1;
(statearr_30564_30583[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (11))){
var inst_30524 = (state_30554[(10)]);
var inst_30543 = (state_30554[(2)]);
var tmp30562 = inst_30524;
var inst_30524__$1 = tmp30562;
var state_30554__$1 = (function (){var statearr_30565 = state_30554;
(statearr_30565[(10)] = inst_30524__$1);

(statearr_30565[(11)] = inst_30543);

return statearr_30565;
})();
var statearr_30566_30584 = state_30554__$1;
(statearr_30566_30584[(2)] = null);

(statearr_30566_30584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (9))){
var inst_30534 = (state_30554[(7)]);
var state_30554__$1 = state_30554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30554__$1,(11),out,inst_30534);
} else {
if((state_val_30555 === (5))){
var inst_30548 = cljs.core.async.close_BANG_.call(null,out);
var state_30554__$1 = state_30554;
var statearr_30567_30585 = state_30554__$1;
(statearr_30567_30585[(2)] = inst_30548);

(statearr_30567_30585[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (10))){
var inst_30546 = (state_30554[(2)]);
var state_30554__$1 = state_30554;
var statearr_30568_30586 = state_30554__$1;
(statearr_30568_30586[(2)] = inst_30546);

(statearr_30568_30586[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (8))){
var inst_30535 = (state_30554[(9)]);
var inst_30534 = (state_30554[(7)]);
var inst_30524 = (state_30554[(10)]);
var inst_30533 = (state_30554[(8)]);
var inst_30538 = (function (){var cs = inst_30524;
var vec__30529 = inst_30533;
var v = inst_30534;
var c = inst_30535;
return (function (p1__30520_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30520_SHARP_);
});
})();
var inst_30539 = cljs.core.filterv.call(null,inst_30538,inst_30524);
var inst_30524__$1 = inst_30539;
var state_30554__$1 = (function (){var statearr_30569 = state_30554;
(statearr_30569[(10)] = inst_30524__$1);

return statearr_30569;
})();
var statearr_30570_30587 = state_30554__$1;
(statearr_30570_30587[(2)] = null);

(statearr_30570_30587[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__29106__auto__ = null;
var cljs$core$async$state_machine__29106__auto____0 = (function (){
var statearr_30571 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30571[(0)] = cljs$core$async$state_machine__29106__auto__);

(statearr_30571[(1)] = (1));

return statearr_30571;
});
var cljs$core$async$state_machine__29106__auto____1 = (function (state_30554){
while(true){
var ret_value__29107__auto__ = (function (){try{while(true){
var result__29108__auto__ = switch__29105__auto__.call(null,state_30554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29108__auto__;
}
break;
}
}catch (e30572){var ex__29109__auto__ = e30572;
var statearr_30573_30588 = state_30554;
(statearr_30573_30588[(2)] = ex__29109__auto__);


if(cljs.core.seq.call(null,(state_30554[(4)]))){
var statearr_30574_30589 = state_30554;
(statearr_30574_30589[(1)] = cljs.core.first.call(null,(state_30554[(4)])));

} else {
throw ex__29109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30590 = state_30554;
state_30554 = G__30590;
continue;
} else {
return ret_value__29107__auto__;
}
break;
}
});
cljs$core$async$state_machine__29106__auto__ = function(state_30554){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29106__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29106__auto____1.call(this,state_30554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29106__auto____0;
cljs$core$async$state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29106__auto____1;
return cljs$core$async$state_machine__29106__auto__;
})()
})();
var state__29181__auto__ = (function (){var statearr_30575 = f__29180__auto__.call(null);
(statearr_30575[(6)] = c__29179__auto___30577);

return statearr_30575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29181__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__30592 = arguments.length;
switch (G__30592) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29179__auto___30638 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29180__auto__ = (function (){var switch__29105__auto__ = (function (state_30616){
var state_val_30617 = (state_30616[(1)]);
if((state_val_30617 === (7))){
var inst_30598 = (state_30616[(7)]);
var inst_30598__$1 = (state_30616[(2)]);
var inst_30599 = (inst_30598__$1 == null);
var inst_30600 = cljs.core.not.call(null,inst_30599);
var state_30616__$1 = (function (){var statearr_30618 = state_30616;
(statearr_30618[(7)] = inst_30598__$1);

return statearr_30618;
})();
if(inst_30600){
var statearr_30619_30639 = state_30616__$1;
(statearr_30619_30639[(1)] = (8));

} else {
var statearr_30620_30640 = state_30616__$1;
(statearr_30620_30640[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30617 === (1))){
var inst_30593 = (0);
var state_30616__$1 = (function (){var statearr_30621 = state_30616;
(statearr_30621[(8)] = inst_30593);

return statearr_30621;
})();
var statearr_30622_30641 = state_30616__$1;
(statearr_30622_30641[(2)] = null);

(statearr_30622_30641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30617 === (4))){
var state_30616__$1 = state_30616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30616__$1,(7),ch);
} else {
if((state_val_30617 === (6))){
var inst_30611 = (state_30616[(2)]);
var state_30616__$1 = state_30616;
var statearr_30623_30642 = state_30616__$1;
(statearr_30623_30642[(2)] = inst_30611);

(statearr_30623_30642[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30617 === (3))){
var inst_30613 = (state_30616[(2)]);
var inst_30614 = cljs.core.async.close_BANG_.call(null,out);
var state_30616__$1 = (function (){var statearr_30624 = state_30616;
(statearr_30624[(9)] = inst_30613);

return statearr_30624;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30616__$1,inst_30614);
} else {
if((state_val_30617 === (2))){
var inst_30593 = (state_30616[(8)]);
var inst_30595 = (inst_30593 < n);
var state_30616__$1 = state_30616;
if(cljs.core.truth_(inst_30595)){
var statearr_30625_30643 = state_30616__$1;
(statearr_30625_30643[(1)] = (4));

} else {
var statearr_30626_30644 = state_30616__$1;
(statearr_30626_30644[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30617 === (11))){
var inst_30593 = (state_30616[(8)]);
var inst_30603 = (state_30616[(2)]);
var inst_30604 = (inst_30593 + (1));
var inst_30593__$1 = inst_30604;
var state_30616__$1 = (function (){var statearr_30627 = state_30616;
(statearr_30627[(10)] = inst_30603);

(statearr_30627[(8)] = inst_30593__$1);

return statearr_30627;
})();
var statearr_30628_30645 = state_30616__$1;
(statearr_30628_30645[(2)] = null);

(statearr_30628_30645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30617 === (9))){
var state_30616__$1 = state_30616;
var statearr_30629_30646 = state_30616__$1;
(statearr_30629_30646[(2)] = null);

(statearr_30629_30646[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30617 === (5))){
var state_30616__$1 = state_30616;
var statearr_30630_30647 = state_30616__$1;
(statearr_30630_30647[(2)] = null);

(statearr_30630_30647[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30617 === (10))){
var inst_30608 = (state_30616[(2)]);
var state_30616__$1 = state_30616;
var statearr_30631_30648 = state_30616__$1;
(statearr_30631_30648[(2)] = inst_30608);

(statearr_30631_30648[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30617 === (8))){
var inst_30598 = (state_30616[(7)]);
var state_30616__$1 = state_30616;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30616__$1,(11),out,inst_30598);
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
});
return (function() {
var cljs$core$async$state_machine__29106__auto__ = null;
var cljs$core$async$state_machine__29106__auto____0 = (function (){
var statearr_30632 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30632[(0)] = cljs$core$async$state_machine__29106__auto__);

(statearr_30632[(1)] = (1));

return statearr_30632;
});
var cljs$core$async$state_machine__29106__auto____1 = (function (state_30616){
while(true){
var ret_value__29107__auto__ = (function (){try{while(true){
var result__29108__auto__ = switch__29105__auto__.call(null,state_30616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29108__auto__;
}
break;
}
}catch (e30633){var ex__29109__auto__ = e30633;
var statearr_30634_30649 = state_30616;
(statearr_30634_30649[(2)] = ex__29109__auto__);


if(cljs.core.seq.call(null,(state_30616[(4)]))){
var statearr_30635_30650 = state_30616;
(statearr_30635_30650[(1)] = cljs.core.first.call(null,(state_30616[(4)])));

} else {
throw ex__29109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30651 = state_30616;
state_30616 = G__30651;
continue;
} else {
return ret_value__29107__auto__;
}
break;
}
});
cljs$core$async$state_machine__29106__auto__ = function(state_30616){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29106__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29106__auto____1.call(this,state_30616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29106__auto____0;
cljs$core$async$state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29106__auto____1;
return cljs$core$async$state_machine__29106__auto__;
})()
})();
var state__29181__auto__ = (function (){var statearr_30636 = f__29180__auto__.call(null);
(statearr_30636[(6)] = c__29179__auto___30638);

return statearr_30636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29181__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30653 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30653 = (function (f,ch,meta30654){
this.f = f;
this.ch = ch;
this.meta30654 = meta30654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30655,meta30654__$1){
var self__ = this;
var _30655__$1 = this;
return (new cljs.core.async.t_cljs$core$async30653(self__.f,self__.ch,meta30654__$1));
}));

(cljs.core.async.t_cljs$core$async30653.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30655){
var self__ = this;
var _30655__$1 = this;
return self__.meta30654;
}));

(cljs.core.async.t_cljs$core$async30653.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30653.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async30653.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async30653.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30653.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30656 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30656 = (function (f,ch,meta30654,_,fn1,meta30657){
this.f = f;
this.ch = ch;
this.meta30654 = meta30654;
this._ = _;
this.fn1 = fn1;
this.meta30657 = meta30657;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30658,meta30657__$1){
var self__ = this;
var _30658__$1 = this;
return (new cljs.core.async.t_cljs$core$async30656(self__.f,self__.ch,self__.meta30654,self__._,self__.fn1,meta30657__$1));
}));

(cljs.core.async.t_cljs$core$async30656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30658){
var self__ = this;
var _30658__$1 = this;
return self__.meta30657;
}));

(cljs.core.async.t_cljs$core$async30656.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30656.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async30656.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30656.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__30652_SHARP_){
return f1.call(null,(((p1__30652_SHARP_ == null))?null:self__.f.call(null,p1__30652_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async30656.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30654","meta30654",2086584519,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30653","cljs.core.async/t_cljs$core$async30653",-843068668,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30657","meta30657",-287606410,null)], null);
}));

(cljs.core.async.t_cljs$core$async30656.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30656.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30656");

(cljs.core.async.t_cljs$core$async30656.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async30656");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30656.
 */
cljs.core.async.__GT_t_cljs$core$async30656 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30656(f__$1,ch__$1,meta30654__$1,___$2,fn1__$1,meta30657){
return (new cljs.core.async.t_cljs$core$async30656(f__$1,ch__$1,meta30654__$1,___$2,fn1__$1,meta30657));
});

}

return (new cljs.core.async.t_cljs$core$async30656(self__.f,self__.ch,self__.meta30654,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async30653.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30653.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async30653.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30654","meta30654",2086584519,null)], null);
}));

(cljs.core.async.t_cljs$core$async30653.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30653.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30653");

(cljs.core.async.t_cljs$core$async30653.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async30653");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30653.
 */
cljs.core.async.__GT_t_cljs$core$async30653 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30653(f__$1,ch__$1,meta30654){
return (new cljs.core.async.t_cljs$core$async30653(f__$1,ch__$1,meta30654));
});

}

return (new cljs.core.async.t_cljs$core$async30653(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30659 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30659 = (function (f,ch,meta30660){
this.f = f;
this.ch = ch;
this.meta30660 = meta30660;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30661,meta30660__$1){
var self__ = this;
var _30661__$1 = this;
return (new cljs.core.async.t_cljs$core$async30659(self__.f,self__.ch,meta30660__$1));
}));

(cljs.core.async.t_cljs$core$async30659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30661){
var self__ = this;
var _30661__$1 = this;
return self__.meta30660;
}));

(cljs.core.async.t_cljs$core$async30659.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30659.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async30659.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30659.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async30659.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30659.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async30659.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30660","meta30660",1854046391,null)], null);
}));

(cljs.core.async.t_cljs$core$async30659.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30659.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30659");

(cljs.core.async.t_cljs$core$async30659.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async30659");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30659.
 */
cljs.core.async.__GT_t_cljs$core$async30659 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30659(f__$1,ch__$1,meta30660){
return (new cljs.core.async.t_cljs$core$async30659(f__$1,ch__$1,meta30660));
});

}

return (new cljs.core.async.t_cljs$core$async30659(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30662 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30662 = (function (p,ch,meta30663){
this.p = p;
this.ch = ch;
this.meta30663 = meta30663;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30664,meta30663__$1){
var self__ = this;
var _30664__$1 = this;
return (new cljs.core.async.t_cljs$core$async30662(self__.p,self__.ch,meta30663__$1));
}));

(cljs.core.async.t_cljs$core$async30662.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30664){
var self__ = this;
var _30664__$1 = this;
return self__.meta30663;
}));

(cljs.core.async.t_cljs$core$async30662.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30662.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async30662.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async30662.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30662.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async30662.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30662.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async30662.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30663","meta30663",-1002559602,null)], null);
}));

(cljs.core.async.t_cljs$core$async30662.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30662.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30662");

(cljs.core.async.t_cljs$core$async30662.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async30662");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30662.
 */
cljs.core.async.__GT_t_cljs$core$async30662 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30662(p__$1,ch__$1,meta30663){
return (new cljs.core.async.t_cljs$core$async30662(p__$1,ch__$1,meta30663));
});

}

return (new cljs.core.async.t_cljs$core$async30662(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__30666 = arguments.length;
switch (G__30666) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29179__auto___30707 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29180__auto__ = (function (){var switch__29105__auto__ = (function (state_30687){
var state_val_30688 = (state_30687[(1)]);
if((state_val_30688 === (7))){
var inst_30683 = (state_30687[(2)]);
var state_30687__$1 = state_30687;
var statearr_30689_30708 = state_30687__$1;
(statearr_30689_30708[(2)] = inst_30683);

(statearr_30689_30708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (1))){
var state_30687__$1 = state_30687;
var statearr_30690_30709 = state_30687__$1;
(statearr_30690_30709[(2)] = null);

(statearr_30690_30709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (4))){
var inst_30669 = (state_30687[(7)]);
var inst_30669__$1 = (state_30687[(2)]);
var inst_30670 = (inst_30669__$1 == null);
var state_30687__$1 = (function (){var statearr_30691 = state_30687;
(statearr_30691[(7)] = inst_30669__$1);

return statearr_30691;
})();
if(cljs.core.truth_(inst_30670)){
var statearr_30692_30710 = state_30687__$1;
(statearr_30692_30710[(1)] = (5));

} else {
var statearr_30693_30711 = state_30687__$1;
(statearr_30693_30711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (6))){
var inst_30669 = (state_30687[(7)]);
var inst_30674 = p.call(null,inst_30669);
var state_30687__$1 = state_30687;
if(cljs.core.truth_(inst_30674)){
var statearr_30694_30712 = state_30687__$1;
(statearr_30694_30712[(1)] = (8));

} else {
var statearr_30695_30713 = state_30687__$1;
(statearr_30695_30713[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (3))){
var inst_30685 = (state_30687[(2)]);
var state_30687__$1 = state_30687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30687__$1,inst_30685);
} else {
if((state_val_30688 === (2))){
var state_30687__$1 = state_30687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30687__$1,(4),ch);
} else {
if((state_val_30688 === (11))){
var inst_30677 = (state_30687[(2)]);
var state_30687__$1 = state_30687;
var statearr_30696_30714 = state_30687__$1;
(statearr_30696_30714[(2)] = inst_30677);

(statearr_30696_30714[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (9))){
var state_30687__$1 = state_30687;
var statearr_30697_30715 = state_30687__$1;
(statearr_30697_30715[(2)] = null);

(statearr_30697_30715[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (5))){
var inst_30672 = cljs.core.async.close_BANG_.call(null,out);
var state_30687__$1 = state_30687;
var statearr_30698_30716 = state_30687__$1;
(statearr_30698_30716[(2)] = inst_30672);

(statearr_30698_30716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (10))){
var inst_30680 = (state_30687[(2)]);
var state_30687__$1 = (function (){var statearr_30699 = state_30687;
(statearr_30699[(8)] = inst_30680);

return statearr_30699;
})();
var statearr_30700_30717 = state_30687__$1;
(statearr_30700_30717[(2)] = null);

(statearr_30700_30717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30688 === (8))){
var inst_30669 = (state_30687[(7)]);
var state_30687__$1 = state_30687;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30687__$1,(11),out,inst_30669);
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
});
return (function() {
var cljs$core$async$state_machine__29106__auto__ = null;
var cljs$core$async$state_machine__29106__auto____0 = (function (){
var statearr_30701 = [null,null,null,null,null,null,null,null,null];
(statearr_30701[(0)] = cljs$core$async$state_machine__29106__auto__);

(statearr_30701[(1)] = (1));

return statearr_30701;
});
var cljs$core$async$state_machine__29106__auto____1 = (function (state_30687){
while(true){
var ret_value__29107__auto__ = (function (){try{while(true){
var result__29108__auto__ = switch__29105__auto__.call(null,state_30687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29108__auto__;
}
break;
}
}catch (e30702){var ex__29109__auto__ = e30702;
var statearr_30703_30718 = state_30687;
(statearr_30703_30718[(2)] = ex__29109__auto__);


if(cljs.core.seq.call(null,(state_30687[(4)]))){
var statearr_30704_30719 = state_30687;
(statearr_30704_30719[(1)] = cljs.core.first.call(null,(state_30687[(4)])));

} else {
throw ex__29109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30720 = state_30687;
state_30687 = G__30720;
continue;
} else {
return ret_value__29107__auto__;
}
break;
}
});
cljs$core$async$state_machine__29106__auto__ = function(state_30687){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29106__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29106__auto____1.call(this,state_30687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29106__auto____0;
cljs$core$async$state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29106__auto____1;
return cljs$core$async$state_machine__29106__auto__;
})()
})();
var state__29181__auto__ = (function (){var statearr_30705 = f__29180__auto__.call(null);
(statearr_30705[(6)] = c__29179__auto___30707);

return statearr_30705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29181__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__30722 = arguments.length;
switch (G__30722) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29179__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29180__auto__ = (function (){var switch__29105__auto__ = (function (state_30785){
var state_val_30786 = (state_30785[(1)]);
if((state_val_30786 === (7))){
var inst_30781 = (state_30785[(2)]);
var state_30785__$1 = state_30785;
var statearr_30787_30826 = state_30785__$1;
(statearr_30787_30826[(2)] = inst_30781);

(statearr_30787_30826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30786 === (20))){
var inst_30751 = (state_30785[(7)]);
var inst_30762 = (state_30785[(2)]);
var inst_30763 = cljs.core.next.call(null,inst_30751);
var inst_30737 = inst_30763;
var inst_30738 = null;
var inst_30739 = (0);
var inst_30740 = (0);
var state_30785__$1 = (function (){var statearr_30788 = state_30785;
(statearr_30788[(8)] = inst_30762);

(statearr_30788[(9)] = inst_30740);

(statearr_30788[(10)] = inst_30737);

(statearr_30788[(11)] = inst_30739);

(statearr_30788[(12)] = inst_30738);

return statearr_30788;
})();
var statearr_30789_30827 = state_30785__$1;
(statearr_30789_30827[(2)] = null);

(statearr_30789_30827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30786 === (1))){
var state_30785__$1 = state_30785;
var statearr_30790_30828 = state_30785__$1;
(statearr_30790_30828[(2)] = null);

(statearr_30790_30828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30786 === (4))){
var inst_30726 = (state_30785[(13)]);
var inst_30726__$1 = (state_30785[(2)]);
var inst_30727 = (inst_30726__$1 == null);
var state_30785__$1 = (function (){var statearr_30791 = state_30785;
(statearr_30791[(13)] = inst_30726__$1);

return statearr_30791;
})();
if(cljs.core.truth_(inst_30727)){
var statearr_30792_30829 = state_30785__$1;
(statearr_30792_30829[(1)] = (5));

} else {
var statearr_30793_30830 = state_30785__$1;
(statearr_30793_30830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30786 === (15))){
var state_30785__$1 = state_30785;
var statearr_30797_30831 = state_30785__$1;
(statearr_30797_30831[(2)] = null);

(statearr_30797_30831[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30786 === (21))){
var state_30785__$1 = state_30785;
var statearr_30798_30832 = state_30785__$1;
(statearr_30798_30832[(2)] = null);

(statearr_30798_30832[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30786 === (13))){
var inst_30740 = (state_30785[(9)]);
var inst_30737 = (state_30785[(10)]);
var inst_30739 = (state_30785[(11)]);
var inst_30738 = (state_30785[(12)]);
var inst_30747 = (state_30785[(2)]);
var inst_30748 = (inst_30740 + (1));
var tmp30794 = inst_30737;
var tmp30795 = inst_30739;
var tmp30796 = inst_30738;
var inst_30737__$1 = tmp30794;
var inst_30738__$1 = tmp30796;
var inst_30739__$1 = tmp30795;
var inst_30740__$1 = inst_30748;
var state_30785__$1 = (function (){var statearr_30799 = state_30785;
(statearr_30799[(14)] = inst_30747);

(statearr_30799[(9)] = inst_30740__$1);

(statearr_30799[(10)] = inst_30737__$1);

(statearr_30799[(11)] = inst_30739__$1);

(statearr_30799[(12)] = inst_30738__$1);

return statearr_30799;
})();
var statearr_30800_30833 = state_30785__$1;
(statearr_30800_30833[(2)] = null);

(statearr_30800_30833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30786 === (22))){
var state_30785__$1 = state_30785;
var statearr_30801_30834 = state_30785__$1;
(statearr_30801_30834[(2)] = null);

(statearr_30801_30834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30786 === (6))){
var inst_30726 = (state_30785[(13)]);
var inst_30735 = f.call(null,inst_30726);
var inst_30736 = cljs.core.seq.call(null,inst_30735);
var inst_30737 = inst_30736;
var inst_30738 = null;
var inst_30739 = (0);
var inst_30740 = (0);
var state_30785__$1 = (function (){var statearr_30802 = state_30785;
(statearr_30802[(9)] = inst_30740);

(statearr_30802[(10)] = inst_30737);

(statearr_30802[(11)] = inst_30739);

(statearr_30802[(12)] = inst_30738);

return statearr_30802;
})();
var statearr_30803_30835 = state_30785__$1;
(statearr_30803_30835[(2)] = null);

(statearr_30803_30835[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30786 === (17))){
var inst_30751 = (state_30785[(7)]);
var inst_30755 = cljs.core.chunk_first.call(null,inst_30751);
var inst_30756 = cljs.core.chunk_rest.call(null,inst_30751);
var inst_30757 = cljs.core.count.call(null,inst_30755);
var inst_30737 = inst_30756;
var inst_30738 = inst_30755;
var inst_30739 = inst_30757;
var inst_30740 = (0);
var state_30785__$1 = (function (){var statearr_30804 = state_30785;
(statearr_30804[(9)] = inst_30740);

(statearr_30804[(10)] = inst_30737);

(statearr_30804[(11)] = inst_30739);

(statearr_30804[(12)] = inst_30738);

return statearr_30804;
})();
var statearr_30805_30836 = state_30785__$1;
(statearr_30805_30836[(2)] = null);

(statearr_30805_30836[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30786 === (3))){
var inst_30783 = (state_30785[(2)]);
var state_30785__$1 = state_30785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30785__$1,inst_30783);
} else {
if((state_val_30786 === (12))){
var inst_30771 = (state_30785[(2)]);
var state_30785__$1 = state_30785;
var statearr_30806_30837 = state_30785__$1;
(statearr_30806_30837[(2)] = inst_30771);

(statearr_30806_30837[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30786 === (2))){
var state_30785__$1 = state_30785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30785__$1,(4),in$);
} else {
if((state_val_30786 === (23))){
var inst_30779 = (state_30785[(2)]);
var state_30785__$1 = state_30785;
var statearr_30807_30838 = state_30785__$1;
(statearr_30807_30838[(2)] = inst_30779);

(statearr_30807_30838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30786 === (19))){
var inst_30766 = (state_30785[(2)]);
var state_30785__$1 = state_30785;
var statearr_30808_30839 = state_30785__$1;
(statearr_30808_30839[(2)] = inst_30766);

(statearr_30808_30839[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30786 === (11))){
var inst_30737 = (state_30785[(10)]);
var inst_30751 = (state_30785[(7)]);
var inst_30751__$1 = cljs.core.seq.call(null,inst_30737);
var state_30785__$1 = (function (){var statearr_30809 = state_30785;
(statearr_30809[(7)] = inst_30751__$1);

return statearr_30809;
})();
if(inst_30751__$1){
var statearr_30810_30840 = state_30785__$1;
(statearr_30810_30840[(1)] = (14));

} else {
var statearr_30811_30841 = state_30785__$1;
(statearr_30811_30841[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30786 === (9))){
var inst_30773 = (state_30785[(2)]);
var inst_30774 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30785__$1 = (function (){var statearr_30812 = state_30785;
(statearr_30812[(15)] = inst_30773);

return statearr_30812;
})();
if(cljs.core.truth_(inst_30774)){
var statearr_30813_30842 = state_30785__$1;
(statearr_30813_30842[(1)] = (21));

} else {
var statearr_30814_30843 = state_30785__$1;
(statearr_30814_30843[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30786 === (5))){
var inst_30729 = cljs.core.async.close_BANG_.call(null,out);
var state_30785__$1 = state_30785;
var statearr_30815_30844 = state_30785__$1;
(statearr_30815_30844[(2)] = inst_30729);

(statearr_30815_30844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30786 === (14))){
var inst_30751 = (state_30785[(7)]);
var inst_30753 = cljs.core.chunked_seq_QMARK_.call(null,inst_30751);
var state_30785__$1 = state_30785;
if(inst_30753){
var statearr_30816_30845 = state_30785__$1;
(statearr_30816_30845[(1)] = (17));

} else {
var statearr_30817_30846 = state_30785__$1;
(statearr_30817_30846[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30786 === (16))){
var inst_30769 = (state_30785[(2)]);
var state_30785__$1 = state_30785;
var statearr_30818_30847 = state_30785__$1;
(statearr_30818_30847[(2)] = inst_30769);

(statearr_30818_30847[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30786 === (10))){
var inst_30740 = (state_30785[(9)]);
var inst_30738 = (state_30785[(12)]);
var inst_30745 = cljs.core._nth.call(null,inst_30738,inst_30740);
var state_30785__$1 = state_30785;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30785__$1,(13),out,inst_30745);
} else {
if((state_val_30786 === (18))){
var inst_30751 = (state_30785[(7)]);
var inst_30760 = cljs.core.first.call(null,inst_30751);
var state_30785__$1 = state_30785;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30785__$1,(20),out,inst_30760);
} else {
if((state_val_30786 === (8))){
var inst_30740 = (state_30785[(9)]);
var inst_30739 = (state_30785[(11)]);
var inst_30742 = (inst_30740 < inst_30739);
var inst_30743 = inst_30742;
var state_30785__$1 = state_30785;
if(cljs.core.truth_(inst_30743)){
var statearr_30819_30848 = state_30785__$1;
(statearr_30819_30848[(1)] = (10));

} else {
var statearr_30820_30849 = state_30785__$1;
(statearr_30820_30849[(1)] = (11));

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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29106__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29106__auto____0 = (function (){
var statearr_30821 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30821[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29106__auto__);

(statearr_30821[(1)] = (1));

return statearr_30821;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29106__auto____1 = (function (state_30785){
while(true){
var ret_value__29107__auto__ = (function (){try{while(true){
var result__29108__auto__ = switch__29105__auto__.call(null,state_30785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29108__auto__;
}
break;
}
}catch (e30822){var ex__29109__auto__ = e30822;
var statearr_30823_30850 = state_30785;
(statearr_30823_30850[(2)] = ex__29109__auto__);


if(cljs.core.seq.call(null,(state_30785[(4)]))){
var statearr_30824_30851 = state_30785;
(statearr_30824_30851[(1)] = cljs.core.first.call(null,(state_30785[(4)])));

} else {
throw ex__29109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30852 = state_30785;
state_30785 = G__30852;
continue;
} else {
return ret_value__29107__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29106__auto__ = function(state_30785){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29106__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29106__auto____1.call(this,state_30785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29106__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29106__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29106__auto__;
})()
})();
var state__29181__auto__ = (function (){var statearr_30825 = f__29180__auto__.call(null);
(statearr_30825[(6)] = c__29179__auto__);

return statearr_30825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29181__auto__);
}));

return c__29179__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__30854 = arguments.length;
switch (G__30854) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__30857 = arguments.length;
switch (G__30857) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__30860 = arguments.length;
switch (G__30860) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29179__auto___30908 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29180__auto__ = (function (){var switch__29105__auto__ = (function (state_30884){
var state_val_30885 = (state_30884[(1)]);
if((state_val_30885 === (7))){
var inst_30879 = (state_30884[(2)]);
var state_30884__$1 = state_30884;
var statearr_30886_30909 = state_30884__$1;
(statearr_30886_30909[(2)] = inst_30879);

(statearr_30886_30909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30885 === (1))){
var inst_30861 = null;
var state_30884__$1 = (function (){var statearr_30887 = state_30884;
(statearr_30887[(7)] = inst_30861);

return statearr_30887;
})();
var statearr_30888_30910 = state_30884__$1;
(statearr_30888_30910[(2)] = null);

(statearr_30888_30910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30885 === (4))){
var inst_30864 = (state_30884[(8)]);
var inst_30864__$1 = (state_30884[(2)]);
var inst_30865 = (inst_30864__$1 == null);
var inst_30866 = cljs.core.not.call(null,inst_30865);
var state_30884__$1 = (function (){var statearr_30889 = state_30884;
(statearr_30889[(8)] = inst_30864__$1);

return statearr_30889;
})();
if(inst_30866){
var statearr_30890_30911 = state_30884__$1;
(statearr_30890_30911[(1)] = (5));

} else {
var statearr_30891_30912 = state_30884__$1;
(statearr_30891_30912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30885 === (6))){
var state_30884__$1 = state_30884;
var statearr_30892_30913 = state_30884__$1;
(statearr_30892_30913[(2)] = null);

(statearr_30892_30913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30885 === (3))){
var inst_30881 = (state_30884[(2)]);
var inst_30882 = cljs.core.async.close_BANG_.call(null,out);
var state_30884__$1 = (function (){var statearr_30893 = state_30884;
(statearr_30893[(9)] = inst_30881);

return statearr_30893;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30884__$1,inst_30882);
} else {
if((state_val_30885 === (2))){
var state_30884__$1 = state_30884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30884__$1,(4),ch);
} else {
if((state_val_30885 === (11))){
var inst_30864 = (state_30884[(8)]);
var inst_30873 = (state_30884[(2)]);
var inst_30861 = inst_30864;
var state_30884__$1 = (function (){var statearr_30894 = state_30884;
(statearr_30894[(10)] = inst_30873);

(statearr_30894[(7)] = inst_30861);

return statearr_30894;
})();
var statearr_30895_30914 = state_30884__$1;
(statearr_30895_30914[(2)] = null);

(statearr_30895_30914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30885 === (9))){
var inst_30864 = (state_30884[(8)]);
var state_30884__$1 = state_30884;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30884__$1,(11),out,inst_30864);
} else {
if((state_val_30885 === (5))){
var inst_30864 = (state_30884[(8)]);
var inst_30861 = (state_30884[(7)]);
var inst_30868 = cljs.core._EQ_.call(null,inst_30864,inst_30861);
var state_30884__$1 = state_30884;
if(inst_30868){
var statearr_30897_30915 = state_30884__$1;
(statearr_30897_30915[(1)] = (8));

} else {
var statearr_30898_30916 = state_30884__$1;
(statearr_30898_30916[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30885 === (10))){
var inst_30876 = (state_30884[(2)]);
var state_30884__$1 = state_30884;
var statearr_30899_30917 = state_30884__$1;
(statearr_30899_30917[(2)] = inst_30876);

(statearr_30899_30917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30885 === (8))){
var inst_30861 = (state_30884[(7)]);
var tmp30896 = inst_30861;
var inst_30861__$1 = tmp30896;
var state_30884__$1 = (function (){var statearr_30900 = state_30884;
(statearr_30900[(7)] = inst_30861__$1);

return statearr_30900;
})();
var statearr_30901_30918 = state_30884__$1;
(statearr_30901_30918[(2)] = null);

(statearr_30901_30918[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__29106__auto__ = null;
var cljs$core$async$state_machine__29106__auto____0 = (function (){
var statearr_30902 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30902[(0)] = cljs$core$async$state_machine__29106__auto__);

(statearr_30902[(1)] = (1));

return statearr_30902;
});
var cljs$core$async$state_machine__29106__auto____1 = (function (state_30884){
while(true){
var ret_value__29107__auto__ = (function (){try{while(true){
var result__29108__auto__ = switch__29105__auto__.call(null,state_30884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29108__auto__;
}
break;
}
}catch (e30903){var ex__29109__auto__ = e30903;
var statearr_30904_30919 = state_30884;
(statearr_30904_30919[(2)] = ex__29109__auto__);


if(cljs.core.seq.call(null,(state_30884[(4)]))){
var statearr_30905_30920 = state_30884;
(statearr_30905_30920[(1)] = cljs.core.first.call(null,(state_30884[(4)])));

} else {
throw ex__29109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30921 = state_30884;
state_30884 = G__30921;
continue;
} else {
return ret_value__29107__auto__;
}
break;
}
});
cljs$core$async$state_machine__29106__auto__ = function(state_30884){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29106__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29106__auto____1.call(this,state_30884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29106__auto____0;
cljs$core$async$state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29106__auto____1;
return cljs$core$async$state_machine__29106__auto__;
})()
})();
var state__29181__auto__ = (function (){var statearr_30906 = f__29180__auto__.call(null);
(statearr_30906[(6)] = c__29179__auto___30908);

return statearr_30906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29181__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__30923 = arguments.length;
switch (G__30923) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29179__auto___30990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29180__auto__ = (function (){var switch__29105__auto__ = (function (state_30961){
var state_val_30962 = (state_30961[(1)]);
if((state_val_30962 === (7))){
var inst_30957 = (state_30961[(2)]);
var state_30961__$1 = state_30961;
var statearr_30963_30991 = state_30961__$1;
(statearr_30963_30991[(2)] = inst_30957);

(statearr_30963_30991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30962 === (1))){
var inst_30924 = (new Array(n));
var inst_30925 = inst_30924;
var inst_30926 = (0);
var state_30961__$1 = (function (){var statearr_30964 = state_30961;
(statearr_30964[(7)] = inst_30925);

(statearr_30964[(8)] = inst_30926);

return statearr_30964;
})();
var statearr_30965_30992 = state_30961__$1;
(statearr_30965_30992[(2)] = null);

(statearr_30965_30992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30962 === (4))){
var inst_30929 = (state_30961[(9)]);
var inst_30929__$1 = (state_30961[(2)]);
var inst_30930 = (inst_30929__$1 == null);
var inst_30931 = cljs.core.not.call(null,inst_30930);
var state_30961__$1 = (function (){var statearr_30966 = state_30961;
(statearr_30966[(9)] = inst_30929__$1);

return statearr_30966;
})();
if(inst_30931){
var statearr_30967_30993 = state_30961__$1;
(statearr_30967_30993[(1)] = (5));

} else {
var statearr_30968_30994 = state_30961__$1;
(statearr_30968_30994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30962 === (15))){
var inst_30951 = (state_30961[(2)]);
var state_30961__$1 = state_30961;
var statearr_30969_30995 = state_30961__$1;
(statearr_30969_30995[(2)] = inst_30951);

(statearr_30969_30995[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30962 === (13))){
var state_30961__$1 = state_30961;
var statearr_30970_30996 = state_30961__$1;
(statearr_30970_30996[(2)] = null);

(statearr_30970_30996[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30962 === (6))){
var inst_30926 = (state_30961[(8)]);
var inst_30947 = (inst_30926 > (0));
var state_30961__$1 = state_30961;
if(cljs.core.truth_(inst_30947)){
var statearr_30971_30997 = state_30961__$1;
(statearr_30971_30997[(1)] = (12));

} else {
var statearr_30972_30998 = state_30961__$1;
(statearr_30972_30998[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30962 === (3))){
var inst_30959 = (state_30961[(2)]);
var state_30961__$1 = state_30961;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30961__$1,inst_30959);
} else {
if((state_val_30962 === (12))){
var inst_30925 = (state_30961[(7)]);
var inst_30949 = cljs.core.vec.call(null,inst_30925);
var state_30961__$1 = state_30961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30961__$1,(15),out,inst_30949);
} else {
if((state_val_30962 === (2))){
var state_30961__$1 = state_30961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30961__$1,(4),ch);
} else {
if((state_val_30962 === (11))){
var inst_30941 = (state_30961[(2)]);
var inst_30942 = (new Array(n));
var inst_30925 = inst_30942;
var inst_30926 = (0);
var state_30961__$1 = (function (){var statearr_30973 = state_30961;
(statearr_30973[(7)] = inst_30925);

(statearr_30973[(10)] = inst_30941);

(statearr_30973[(8)] = inst_30926);

return statearr_30973;
})();
var statearr_30974_30999 = state_30961__$1;
(statearr_30974_30999[(2)] = null);

(statearr_30974_30999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30962 === (9))){
var inst_30925 = (state_30961[(7)]);
var inst_30939 = cljs.core.vec.call(null,inst_30925);
var state_30961__$1 = state_30961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30961__$1,(11),out,inst_30939);
} else {
if((state_val_30962 === (5))){
var inst_30929 = (state_30961[(9)]);
var inst_30925 = (state_30961[(7)]);
var inst_30934 = (state_30961[(11)]);
var inst_30926 = (state_30961[(8)]);
var inst_30933 = (inst_30925[inst_30926] = inst_30929);
var inst_30934__$1 = (inst_30926 + (1));
var inst_30935 = (inst_30934__$1 < n);
var state_30961__$1 = (function (){var statearr_30975 = state_30961;
(statearr_30975[(11)] = inst_30934__$1);

(statearr_30975[(12)] = inst_30933);

return statearr_30975;
})();
if(cljs.core.truth_(inst_30935)){
var statearr_30976_31000 = state_30961__$1;
(statearr_30976_31000[(1)] = (8));

} else {
var statearr_30977_31001 = state_30961__$1;
(statearr_30977_31001[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30962 === (14))){
var inst_30954 = (state_30961[(2)]);
var inst_30955 = cljs.core.async.close_BANG_.call(null,out);
var state_30961__$1 = (function (){var statearr_30979 = state_30961;
(statearr_30979[(13)] = inst_30954);

return statearr_30979;
})();
var statearr_30980_31002 = state_30961__$1;
(statearr_30980_31002[(2)] = inst_30955);

(statearr_30980_31002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30962 === (10))){
var inst_30945 = (state_30961[(2)]);
var state_30961__$1 = state_30961;
var statearr_30981_31003 = state_30961__$1;
(statearr_30981_31003[(2)] = inst_30945);

(statearr_30981_31003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30962 === (8))){
var inst_30925 = (state_30961[(7)]);
var inst_30934 = (state_30961[(11)]);
var tmp30978 = inst_30925;
var inst_30925__$1 = tmp30978;
var inst_30926 = inst_30934;
var state_30961__$1 = (function (){var statearr_30982 = state_30961;
(statearr_30982[(7)] = inst_30925__$1);

(statearr_30982[(8)] = inst_30926);

return statearr_30982;
})();
var statearr_30983_31004 = state_30961__$1;
(statearr_30983_31004[(2)] = null);

(statearr_30983_31004[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__29106__auto__ = null;
var cljs$core$async$state_machine__29106__auto____0 = (function (){
var statearr_30984 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30984[(0)] = cljs$core$async$state_machine__29106__auto__);

(statearr_30984[(1)] = (1));

return statearr_30984;
});
var cljs$core$async$state_machine__29106__auto____1 = (function (state_30961){
while(true){
var ret_value__29107__auto__ = (function (){try{while(true){
var result__29108__auto__ = switch__29105__auto__.call(null,state_30961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29108__auto__;
}
break;
}
}catch (e30985){var ex__29109__auto__ = e30985;
var statearr_30986_31005 = state_30961;
(statearr_30986_31005[(2)] = ex__29109__auto__);


if(cljs.core.seq.call(null,(state_30961[(4)]))){
var statearr_30987_31006 = state_30961;
(statearr_30987_31006[(1)] = cljs.core.first.call(null,(state_30961[(4)])));

} else {
throw ex__29109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31007 = state_30961;
state_30961 = G__31007;
continue;
} else {
return ret_value__29107__auto__;
}
break;
}
});
cljs$core$async$state_machine__29106__auto__ = function(state_30961){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29106__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29106__auto____1.call(this,state_30961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29106__auto____0;
cljs$core$async$state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29106__auto____1;
return cljs$core$async$state_machine__29106__auto__;
})()
})();
var state__29181__auto__ = (function (){var statearr_30988 = f__29180__auto__.call(null);
(statearr_30988[(6)] = c__29179__auto___30990);

return statearr_30988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29181__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31009 = arguments.length;
switch (G__31009) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29179__auto___31087 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29180__auto__ = (function (){var switch__29105__auto__ = (function (state_31054){
var state_val_31055 = (state_31054[(1)]);
if((state_val_31055 === (7))){
var inst_31050 = (state_31054[(2)]);
var state_31054__$1 = state_31054;
var statearr_31056_31088 = state_31054__$1;
(statearr_31056_31088[(2)] = inst_31050);

(statearr_31056_31088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31055 === (1))){
var inst_31010 = [];
var inst_31011 = inst_31010;
var inst_31012 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31054__$1 = (function (){var statearr_31057 = state_31054;
(statearr_31057[(7)] = inst_31011);

(statearr_31057[(8)] = inst_31012);

return statearr_31057;
})();
var statearr_31058_31089 = state_31054__$1;
(statearr_31058_31089[(2)] = null);

(statearr_31058_31089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31055 === (4))){
var inst_31015 = (state_31054[(9)]);
var inst_31015__$1 = (state_31054[(2)]);
var inst_31016 = (inst_31015__$1 == null);
var inst_31017 = cljs.core.not.call(null,inst_31016);
var state_31054__$1 = (function (){var statearr_31059 = state_31054;
(statearr_31059[(9)] = inst_31015__$1);

return statearr_31059;
})();
if(inst_31017){
var statearr_31060_31090 = state_31054__$1;
(statearr_31060_31090[(1)] = (5));

} else {
var statearr_31061_31091 = state_31054__$1;
(statearr_31061_31091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31055 === (15))){
var inst_31011 = (state_31054[(7)]);
var inst_31042 = cljs.core.vec.call(null,inst_31011);
var state_31054__$1 = state_31054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31054__$1,(18),out,inst_31042);
} else {
if((state_val_31055 === (13))){
var inst_31037 = (state_31054[(2)]);
var state_31054__$1 = state_31054;
var statearr_31062_31092 = state_31054__$1;
(statearr_31062_31092[(2)] = inst_31037);

(statearr_31062_31092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31055 === (6))){
var inst_31011 = (state_31054[(7)]);
var inst_31039 = inst_31011.length;
var inst_31040 = (inst_31039 > (0));
var state_31054__$1 = state_31054;
if(cljs.core.truth_(inst_31040)){
var statearr_31063_31093 = state_31054__$1;
(statearr_31063_31093[(1)] = (15));

} else {
var statearr_31064_31094 = state_31054__$1;
(statearr_31064_31094[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31055 === (17))){
var inst_31047 = (state_31054[(2)]);
var inst_31048 = cljs.core.async.close_BANG_.call(null,out);
var state_31054__$1 = (function (){var statearr_31065 = state_31054;
(statearr_31065[(10)] = inst_31047);

return statearr_31065;
})();
var statearr_31066_31095 = state_31054__$1;
(statearr_31066_31095[(2)] = inst_31048);

(statearr_31066_31095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31055 === (3))){
var inst_31052 = (state_31054[(2)]);
var state_31054__$1 = state_31054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31054__$1,inst_31052);
} else {
if((state_val_31055 === (12))){
var inst_31011 = (state_31054[(7)]);
var inst_31030 = cljs.core.vec.call(null,inst_31011);
var state_31054__$1 = state_31054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31054__$1,(14),out,inst_31030);
} else {
if((state_val_31055 === (2))){
var state_31054__$1 = state_31054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31054__$1,(4),ch);
} else {
if((state_val_31055 === (11))){
var inst_31015 = (state_31054[(9)]);
var inst_31011 = (state_31054[(7)]);
var inst_31019 = (state_31054[(11)]);
var inst_31027 = inst_31011.push(inst_31015);
var tmp31067 = inst_31011;
var inst_31011__$1 = tmp31067;
var inst_31012 = inst_31019;
var state_31054__$1 = (function (){var statearr_31068 = state_31054;
(statearr_31068[(7)] = inst_31011__$1);

(statearr_31068[(12)] = inst_31027);

(statearr_31068[(8)] = inst_31012);

return statearr_31068;
})();
var statearr_31069_31096 = state_31054__$1;
(statearr_31069_31096[(2)] = null);

(statearr_31069_31096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31055 === (9))){
var inst_31012 = (state_31054[(8)]);
var inst_31023 = cljs.core.keyword_identical_QMARK_.call(null,inst_31012,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_31054__$1 = state_31054;
var statearr_31070_31097 = state_31054__$1;
(statearr_31070_31097[(2)] = inst_31023);

(statearr_31070_31097[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31055 === (5))){
var inst_31015 = (state_31054[(9)]);
var inst_31020 = (state_31054[(13)]);
var inst_31012 = (state_31054[(8)]);
var inst_31019 = (state_31054[(11)]);
var inst_31019__$1 = f.call(null,inst_31015);
var inst_31020__$1 = cljs.core._EQ_.call(null,inst_31019__$1,inst_31012);
var state_31054__$1 = (function (){var statearr_31071 = state_31054;
(statearr_31071[(13)] = inst_31020__$1);

(statearr_31071[(11)] = inst_31019__$1);

return statearr_31071;
})();
if(inst_31020__$1){
var statearr_31072_31098 = state_31054__$1;
(statearr_31072_31098[(1)] = (8));

} else {
var statearr_31073_31099 = state_31054__$1;
(statearr_31073_31099[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31055 === (14))){
var inst_31015 = (state_31054[(9)]);
var inst_31019 = (state_31054[(11)]);
var inst_31032 = (state_31054[(2)]);
var inst_31033 = [];
var inst_31034 = inst_31033.push(inst_31015);
var inst_31011 = inst_31033;
var inst_31012 = inst_31019;
var state_31054__$1 = (function (){var statearr_31074 = state_31054;
(statearr_31074[(14)] = inst_31034);

(statearr_31074[(15)] = inst_31032);

(statearr_31074[(7)] = inst_31011);

(statearr_31074[(8)] = inst_31012);

return statearr_31074;
})();
var statearr_31075_31100 = state_31054__$1;
(statearr_31075_31100[(2)] = null);

(statearr_31075_31100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31055 === (16))){
var state_31054__$1 = state_31054;
var statearr_31076_31101 = state_31054__$1;
(statearr_31076_31101[(2)] = null);

(statearr_31076_31101[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31055 === (10))){
var inst_31025 = (state_31054[(2)]);
var state_31054__$1 = state_31054;
if(cljs.core.truth_(inst_31025)){
var statearr_31077_31102 = state_31054__$1;
(statearr_31077_31102[(1)] = (11));

} else {
var statearr_31078_31103 = state_31054__$1;
(statearr_31078_31103[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31055 === (18))){
var inst_31044 = (state_31054[(2)]);
var state_31054__$1 = state_31054;
var statearr_31079_31104 = state_31054__$1;
(statearr_31079_31104[(2)] = inst_31044);

(statearr_31079_31104[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31055 === (8))){
var inst_31020 = (state_31054[(13)]);
var state_31054__$1 = state_31054;
var statearr_31080_31105 = state_31054__$1;
(statearr_31080_31105[(2)] = inst_31020);

(statearr_31080_31105[(1)] = (10));


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
}
});
return (function() {
var cljs$core$async$state_machine__29106__auto__ = null;
var cljs$core$async$state_machine__29106__auto____0 = (function (){
var statearr_31081 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31081[(0)] = cljs$core$async$state_machine__29106__auto__);

(statearr_31081[(1)] = (1));

return statearr_31081;
});
var cljs$core$async$state_machine__29106__auto____1 = (function (state_31054){
while(true){
var ret_value__29107__auto__ = (function (){try{while(true){
var result__29108__auto__ = switch__29105__auto__.call(null,state_31054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29108__auto__;
}
break;
}
}catch (e31082){var ex__29109__auto__ = e31082;
var statearr_31083_31106 = state_31054;
(statearr_31083_31106[(2)] = ex__29109__auto__);


if(cljs.core.seq.call(null,(state_31054[(4)]))){
var statearr_31084_31107 = state_31054;
(statearr_31084_31107[(1)] = cljs.core.first.call(null,(state_31054[(4)])));

} else {
throw ex__29109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31108 = state_31054;
state_31054 = G__31108;
continue;
} else {
return ret_value__29107__auto__;
}
break;
}
});
cljs$core$async$state_machine__29106__auto__ = function(state_31054){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29106__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29106__auto____1.call(this,state_31054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29106__auto____0;
cljs$core$async$state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29106__auto____1;
return cljs$core$async$state_machine__29106__auto__;
})()
})();
var state__29181__auto__ = (function (){var statearr_31085 = f__29180__auto__.call(null);
(statearr_31085[(6)] = c__29179__auto___31087);

return statearr_31085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29181__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1658833864364
