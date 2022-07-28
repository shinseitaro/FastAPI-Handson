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
var G__25373 = arguments.length;
switch (G__25373) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25374 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25374 = (function (f,blockable,meta25375){
this.f = f;
this.blockable = blockable;
this.meta25375 = meta25375;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25376,meta25375__$1){
var self__ = this;
var _25376__$1 = this;
return (new cljs.core.async.t_cljs$core$async25374(self__.f,self__.blockable,meta25375__$1));
}));

(cljs.core.async.t_cljs$core$async25374.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25376){
var self__ = this;
var _25376__$1 = this;
return self__.meta25375;
}));

(cljs.core.async.t_cljs$core$async25374.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25374.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25374.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async25374.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async25374.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25375","meta25375",485912227,null)], null);
}));

(cljs.core.async.t_cljs$core$async25374.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25374.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25374");

(cljs.core.async.t_cljs$core$async25374.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async25374");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25374.
 */
cljs.core.async.__GT_t_cljs$core$async25374 = (function cljs$core$async$__GT_t_cljs$core$async25374(f__$1,blockable__$1,meta25375){
return (new cljs.core.async.t_cljs$core$async25374(f__$1,blockable__$1,meta25375));
});

}

return (new cljs.core.async.t_cljs$core$async25374(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__25380 = arguments.length;
switch (G__25380) {
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
var G__25383 = arguments.length;
switch (G__25383) {
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
var G__25386 = arguments.length;
switch (G__25386) {
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
var val_25388 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25388);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_25388);
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
var G__25390 = arguments.length;
switch (G__25390) {
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
var n__4741__auto___25392 = n;
var x_25393 = (0);
while(true){
if((x_25393 < n__4741__auto___25392)){
(a[x_25393] = x_25393);

var G__25394 = (x_25393 + (1));
x_25393 = G__25394;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25395 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25395 = (function (flag,meta25396){
this.flag = flag;
this.meta25396 = meta25396;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25397,meta25396__$1){
var self__ = this;
var _25397__$1 = this;
return (new cljs.core.async.t_cljs$core$async25395(self__.flag,meta25396__$1));
}));

(cljs.core.async.t_cljs$core$async25395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25397){
var self__ = this;
var _25397__$1 = this;
return self__.meta25396;
}));

(cljs.core.async.t_cljs$core$async25395.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25395.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async25395.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25395.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async25395.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25396","meta25396",-927522341,null)], null);
}));

(cljs.core.async.t_cljs$core$async25395.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25395.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25395");

(cljs.core.async.t_cljs$core$async25395.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async25395");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25395.
 */
cljs.core.async.__GT_t_cljs$core$async25395 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25395(flag__$1,meta25396){
return (new cljs.core.async.t_cljs$core$async25395(flag__$1,meta25396));
});

}

return (new cljs.core.async.t_cljs$core$async25395(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25398 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25398 = (function (flag,cb,meta25399){
this.flag = flag;
this.cb = cb;
this.meta25399 = meta25399;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25400,meta25399__$1){
var self__ = this;
var _25400__$1 = this;
return (new cljs.core.async.t_cljs$core$async25398(self__.flag,self__.cb,meta25399__$1));
}));

(cljs.core.async.t_cljs$core$async25398.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25400){
var self__ = this;
var _25400__$1 = this;
return self__.meta25399;
}));

(cljs.core.async.t_cljs$core$async25398.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25398.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async25398.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25398.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async25398.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25399","meta25399",772011110,null)], null);
}));

(cljs.core.async.t_cljs$core$async25398.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25398.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25398");

(cljs.core.async.t_cljs$core$async25398.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async25398");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25398.
 */
cljs.core.async.__GT_t_cljs$core$async25398 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25398(flag__$1,cb__$1,meta25399){
return (new cljs.core.async.t_cljs$core$async25398(flag__$1,cb__$1,meta25399));
});

}

return (new cljs.core.async.t_cljs$core$async25398(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__25401_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25401_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25402_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25402_SHARP_,port], null));
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
var G__25403 = (i + (1));
i = G__25403;
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
var len__4864__auto___25408 = arguments.length;
var i__4865__auto___25409 = (0);
while(true){
if((i__4865__auto___25409 < len__4864__auto___25408)){
args__4870__auto__.push((arguments[i__4865__auto___25409]));

var G__25410 = (i__4865__auto___25409 + (1));
i__4865__auto___25409 = G__25410;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25406){
var map__25407 = p__25406;
var map__25407__$1 = cljs.core.__destructure_map.call(null,map__25407);
var opts = map__25407__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25404){
var G__25405 = cljs.core.first.call(null,seq25404);
var seq25404__$1 = cljs.core.next.call(null,seq25404);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25405,seq25404__$1);
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
var G__25412 = arguments.length;
switch (G__25412) {
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
var c__23440__auto___25459 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23441__auto__ = (function (){var switch__23315__auto__ = (function (state_25436){
var state_val_25437 = (state_25436[(1)]);
if((state_val_25437 === (7))){
var inst_25432 = (state_25436[(2)]);
var state_25436__$1 = state_25436;
var statearr_25438_25460 = state_25436__$1;
(statearr_25438_25460[(2)] = inst_25432);

(statearr_25438_25460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25437 === (1))){
var state_25436__$1 = state_25436;
var statearr_25439_25461 = state_25436__$1;
(statearr_25439_25461[(2)] = null);

(statearr_25439_25461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25437 === (4))){
var inst_25415 = (state_25436[(7)]);
var inst_25415__$1 = (state_25436[(2)]);
var inst_25416 = (inst_25415__$1 == null);
var state_25436__$1 = (function (){var statearr_25440 = state_25436;
(statearr_25440[(7)] = inst_25415__$1);

return statearr_25440;
})();
if(cljs.core.truth_(inst_25416)){
var statearr_25441_25462 = state_25436__$1;
(statearr_25441_25462[(1)] = (5));

} else {
var statearr_25442_25463 = state_25436__$1;
(statearr_25442_25463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25437 === (13))){
var state_25436__$1 = state_25436;
var statearr_25443_25464 = state_25436__$1;
(statearr_25443_25464[(2)] = null);

(statearr_25443_25464[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25437 === (6))){
var inst_25415 = (state_25436[(7)]);
var state_25436__$1 = state_25436;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25436__$1,(11),to,inst_25415);
} else {
if((state_val_25437 === (3))){
var inst_25434 = (state_25436[(2)]);
var state_25436__$1 = state_25436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25436__$1,inst_25434);
} else {
if((state_val_25437 === (12))){
var state_25436__$1 = state_25436;
var statearr_25444_25465 = state_25436__$1;
(statearr_25444_25465[(2)] = null);

(statearr_25444_25465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25437 === (2))){
var state_25436__$1 = state_25436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25436__$1,(4),from);
} else {
if((state_val_25437 === (11))){
var inst_25425 = (state_25436[(2)]);
var state_25436__$1 = state_25436;
if(cljs.core.truth_(inst_25425)){
var statearr_25445_25466 = state_25436__$1;
(statearr_25445_25466[(1)] = (12));

} else {
var statearr_25446_25467 = state_25436__$1;
(statearr_25446_25467[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25437 === (9))){
var state_25436__$1 = state_25436;
var statearr_25447_25468 = state_25436__$1;
(statearr_25447_25468[(2)] = null);

(statearr_25447_25468[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25437 === (5))){
var state_25436__$1 = state_25436;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25448_25469 = state_25436__$1;
(statearr_25448_25469[(1)] = (8));

} else {
var statearr_25449_25470 = state_25436__$1;
(statearr_25449_25470[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25437 === (14))){
var inst_25430 = (state_25436[(2)]);
var state_25436__$1 = state_25436;
var statearr_25450_25471 = state_25436__$1;
(statearr_25450_25471[(2)] = inst_25430);

(statearr_25450_25471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25437 === (10))){
var inst_25422 = (state_25436[(2)]);
var state_25436__$1 = state_25436;
var statearr_25451_25472 = state_25436__$1;
(statearr_25451_25472[(2)] = inst_25422);

(statearr_25451_25472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25437 === (8))){
var inst_25419 = cljs.core.async.close_BANG_.call(null,to);
var state_25436__$1 = state_25436;
var statearr_25452_25473 = state_25436__$1;
(statearr_25452_25473[(2)] = inst_25419);

(statearr_25452_25473[(1)] = (10));


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
var cljs$core$async$state_machine__23316__auto__ = null;
var cljs$core$async$state_machine__23316__auto____0 = (function (){
var statearr_25453 = [null,null,null,null,null,null,null,null];
(statearr_25453[(0)] = cljs$core$async$state_machine__23316__auto__);

(statearr_25453[(1)] = (1));

return statearr_25453;
});
var cljs$core$async$state_machine__23316__auto____1 = (function (state_25436){
while(true){
var ret_value__23317__auto__ = (function (){try{while(true){
var result__23318__auto__ = switch__23315__auto__.call(null,state_25436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23318__auto__;
}
break;
}
}catch (e25454){var ex__23319__auto__ = e25454;
var statearr_25455_25474 = state_25436;
(statearr_25455_25474[(2)] = ex__23319__auto__);


if(cljs.core.seq.call(null,(state_25436[(4)]))){
var statearr_25456_25475 = state_25436;
(statearr_25456_25475[(1)] = cljs.core.first.call(null,(state_25436[(4)])));

} else {
throw ex__23319__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25476 = state_25436;
state_25436 = G__25476;
continue;
} else {
return ret_value__23317__auto__;
}
break;
}
});
cljs$core$async$state_machine__23316__auto__ = function(state_25436){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23316__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23316__auto____1.call(this,state_25436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23316__auto____0;
cljs$core$async$state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23316__auto____1;
return cljs$core$async$state_machine__23316__auto__;
})()
})();
var state__23442__auto__ = (function (){var statearr_25457 = f__23441__auto__.call(null);
(statearr_25457[(6)] = c__23440__auto___25459);

return statearr_25457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23442__auto__);
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
var process = (function (p__25477){
var vec__25478 = p__25477;
var v = cljs.core.nth.call(null,vec__25478,(0),null);
var p = cljs.core.nth.call(null,vec__25478,(1),null);
var job = vec__25478;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23440__auto___25654 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23441__auto__ = (function (){var switch__23315__auto__ = (function (state_25485){
var state_val_25486 = (state_25485[(1)]);
if((state_val_25486 === (1))){
var state_25485__$1 = state_25485;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25485__$1,(2),res,v);
} else {
if((state_val_25486 === (2))){
var inst_25482 = (state_25485[(2)]);
var inst_25483 = cljs.core.async.close_BANG_.call(null,res);
var state_25485__$1 = (function (){var statearr_25487 = state_25485;
(statearr_25487[(7)] = inst_25482);

return statearr_25487;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25485__$1,inst_25483);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23316__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23316__auto____0 = (function (){
var statearr_25488 = [null,null,null,null,null,null,null,null];
(statearr_25488[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23316__auto__);

(statearr_25488[(1)] = (1));

return statearr_25488;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23316__auto____1 = (function (state_25485){
while(true){
var ret_value__23317__auto__ = (function (){try{while(true){
var result__23318__auto__ = switch__23315__auto__.call(null,state_25485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23318__auto__;
}
break;
}
}catch (e25489){var ex__23319__auto__ = e25489;
var statearr_25490_25655 = state_25485;
(statearr_25490_25655[(2)] = ex__23319__auto__);


if(cljs.core.seq.call(null,(state_25485[(4)]))){
var statearr_25491_25656 = state_25485;
(statearr_25491_25656[(1)] = cljs.core.first.call(null,(state_25485[(4)])));

} else {
throw ex__23319__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25657 = state_25485;
state_25485 = G__25657;
continue;
} else {
return ret_value__23317__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23316__auto__ = function(state_25485){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23316__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23316__auto____1.call(this,state_25485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23316__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23316__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23316__auto__;
})()
})();
var state__23442__auto__ = (function (){var statearr_25492 = f__23441__auto__.call(null);
(statearr_25492[(6)] = c__23440__auto___25654);

return statearr_25492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23442__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__25493){
var vec__25494 = p__25493;
var v = cljs.core.nth.call(null,vec__25494,(0),null);
var p = cljs.core.nth.call(null,vec__25494,(1),null);
var job = vec__25494;
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
var n__4741__auto___25658 = n;
var __25659 = (0);
while(true){
if((__25659 < n__4741__auto___25658)){
var G__25497_25660 = type;
var G__25497_25661__$1 = (((G__25497_25660 instanceof cljs.core.Keyword))?G__25497_25660.fqn:null);
switch (G__25497_25661__$1) {
case "compute":
var c__23440__auto___25663 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25659,c__23440__auto___25663,G__25497_25660,G__25497_25661__$1,n__4741__auto___25658,jobs,results,process,async){
return (function (){
var f__23441__auto__ = (function (){var switch__23315__auto__ = ((function (__25659,c__23440__auto___25663,G__25497_25660,G__25497_25661__$1,n__4741__auto___25658,jobs,results,process,async){
return (function (state_25510){
var state_val_25511 = (state_25510[(1)]);
if((state_val_25511 === (1))){
var state_25510__$1 = state_25510;
var statearr_25512_25664 = state_25510__$1;
(statearr_25512_25664[(2)] = null);

(statearr_25512_25664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25511 === (2))){
var state_25510__$1 = state_25510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25510__$1,(4),jobs);
} else {
if((state_val_25511 === (3))){
var inst_25508 = (state_25510[(2)]);
var state_25510__$1 = state_25510;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25510__$1,inst_25508);
} else {
if((state_val_25511 === (4))){
var inst_25500 = (state_25510[(2)]);
var inst_25501 = process.call(null,inst_25500);
var state_25510__$1 = state_25510;
if(cljs.core.truth_(inst_25501)){
var statearr_25513_25665 = state_25510__$1;
(statearr_25513_25665[(1)] = (5));

} else {
var statearr_25514_25666 = state_25510__$1;
(statearr_25514_25666[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25511 === (5))){
var state_25510__$1 = state_25510;
var statearr_25515_25667 = state_25510__$1;
(statearr_25515_25667[(2)] = null);

(statearr_25515_25667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25511 === (6))){
var state_25510__$1 = state_25510;
var statearr_25516_25668 = state_25510__$1;
(statearr_25516_25668[(2)] = null);

(statearr_25516_25668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25511 === (7))){
var inst_25506 = (state_25510[(2)]);
var state_25510__$1 = state_25510;
var statearr_25517_25669 = state_25510__$1;
(statearr_25517_25669[(2)] = inst_25506);

(statearr_25517_25669[(1)] = (3));


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
});})(__25659,c__23440__auto___25663,G__25497_25660,G__25497_25661__$1,n__4741__auto___25658,jobs,results,process,async))
;
return ((function (__25659,switch__23315__auto__,c__23440__auto___25663,G__25497_25660,G__25497_25661__$1,n__4741__auto___25658,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23316__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23316__auto____0 = (function (){
var statearr_25518 = [null,null,null,null,null,null,null];
(statearr_25518[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23316__auto__);

(statearr_25518[(1)] = (1));

return statearr_25518;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23316__auto____1 = (function (state_25510){
while(true){
var ret_value__23317__auto__ = (function (){try{while(true){
var result__23318__auto__ = switch__23315__auto__.call(null,state_25510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23318__auto__;
}
break;
}
}catch (e25519){var ex__23319__auto__ = e25519;
var statearr_25520_25670 = state_25510;
(statearr_25520_25670[(2)] = ex__23319__auto__);


if(cljs.core.seq.call(null,(state_25510[(4)]))){
var statearr_25521_25671 = state_25510;
(statearr_25521_25671[(1)] = cljs.core.first.call(null,(state_25510[(4)])));

} else {
throw ex__23319__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25672 = state_25510;
state_25510 = G__25672;
continue;
} else {
return ret_value__23317__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23316__auto__ = function(state_25510){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23316__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23316__auto____1.call(this,state_25510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23316__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23316__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23316__auto__;
})()
;})(__25659,switch__23315__auto__,c__23440__auto___25663,G__25497_25660,G__25497_25661__$1,n__4741__auto___25658,jobs,results,process,async))
})();
var state__23442__auto__ = (function (){var statearr_25522 = f__23441__auto__.call(null);
(statearr_25522[(6)] = c__23440__auto___25663);

return statearr_25522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23442__auto__);
});})(__25659,c__23440__auto___25663,G__25497_25660,G__25497_25661__$1,n__4741__auto___25658,jobs,results,process,async))
);


break;
case "async":
var c__23440__auto___25673 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25659,c__23440__auto___25673,G__25497_25660,G__25497_25661__$1,n__4741__auto___25658,jobs,results,process,async){
return (function (){
var f__23441__auto__ = (function (){var switch__23315__auto__ = ((function (__25659,c__23440__auto___25673,G__25497_25660,G__25497_25661__$1,n__4741__auto___25658,jobs,results,process,async){
return (function (state_25535){
var state_val_25536 = (state_25535[(1)]);
if((state_val_25536 === (1))){
var state_25535__$1 = state_25535;
var statearr_25537_25674 = state_25535__$1;
(statearr_25537_25674[(2)] = null);

(statearr_25537_25674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25536 === (2))){
var state_25535__$1 = state_25535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25535__$1,(4),jobs);
} else {
if((state_val_25536 === (3))){
var inst_25533 = (state_25535[(2)]);
var state_25535__$1 = state_25535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25535__$1,inst_25533);
} else {
if((state_val_25536 === (4))){
var inst_25525 = (state_25535[(2)]);
var inst_25526 = async.call(null,inst_25525);
var state_25535__$1 = state_25535;
if(cljs.core.truth_(inst_25526)){
var statearr_25538_25675 = state_25535__$1;
(statearr_25538_25675[(1)] = (5));

} else {
var statearr_25539_25676 = state_25535__$1;
(statearr_25539_25676[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25536 === (5))){
var state_25535__$1 = state_25535;
var statearr_25540_25677 = state_25535__$1;
(statearr_25540_25677[(2)] = null);

(statearr_25540_25677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25536 === (6))){
var state_25535__$1 = state_25535;
var statearr_25541_25678 = state_25535__$1;
(statearr_25541_25678[(2)] = null);

(statearr_25541_25678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25536 === (7))){
var inst_25531 = (state_25535[(2)]);
var state_25535__$1 = state_25535;
var statearr_25542_25679 = state_25535__$1;
(statearr_25542_25679[(2)] = inst_25531);

(statearr_25542_25679[(1)] = (3));


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
});})(__25659,c__23440__auto___25673,G__25497_25660,G__25497_25661__$1,n__4741__auto___25658,jobs,results,process,async))
;
return ((function (__25659,switch__23315__auto__,c__23440__auto___25673,G__25497_25660,G__25497_25661__$1,n__4741__auto___25658,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23316__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23316__auto____0 = (function (){
var statearr_25543 = [null,null,null,null,null,null,null];
(statearr_25543[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23316__auto__);

(statearr_25543[(1)] = (1));

return statearr_25543;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23316__auto____1 = (function (state_25535){
while(true){
var ret_value__23317__auto__ = (function (){try{while(true){
var result__23318__auto__ = switch__23315__auto__.call(null,state_25535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23318__auto__;
}
break;
}
}catch (e25544){var ex__23319__auto__ = e25544;
var statearr_25545_25680 = state_25535;
(statearr_25545_25680[(2)] = ex__23319__auto__);


if(cljs.core.seq.call(null,(state_25535[(4)]))){
var statearr_25546_25681 = state_25535;
(statearr_25546_25681[(1)] = cljs.core.first.call(null,(state_25535[(4)])));

} else {
throw ex__23319__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25682 = state_25535;
state_25535 = G__25682;
continue;
} else {
return ret_value__23317__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23316__auto__ = function(state_25535){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23316__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23316__auto____1.call(this,state_25535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23316__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23316__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23316__auto__;
})()
;})(__25659,switch__23315__auto__,c__23440__auto___25673,G__25497_25660,G__25497_25661__$1,n__4741__auto___25658,jobs,results,process,async))
})();
var state__23442__auto__ = (function (){var statearr_25547 = f__23441__auto__.call(null);
(statearr_25547[(6)] = c__23440__auto___25673);

return statearr_25547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23442__auto__);
});})(__25659,c__23440__auto___25673,G__25497_25660,G__25497_25661__$1,n__4741__auto___25658,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25497_25661__$1)].join('')));

}

var G__25683 = (__25659 + (1));
__25659 = G__25683;
continue;
} else {
}
break;
}

var c__23440__auto___25684 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23441__auto__ = (function (){var switch__23315__auto__ = (function (state_25569){
var state_val_25570 = (state_25569[(1)]);
if((state_val_25570 === (7))){
var inst_25565 = (state_25569[(2)]);
var state_25569__$1 = state_25569;
var statearr_25571_25685 = state_25569__$1;
(statearr_25571_25685[(2)] = inst_25565);

(statearr_25571_25685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25570 === (1))){
var state_25569__$1 = state_25569;
var statearr_25572_25686 = state_25569__$1;
(statearr_25572_25686[(2)] = null);

(statearr_25572_25686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25570 === (4))){
var inst_25550 = (state_25569[(7)]);
var inst_25550__$1 = (state_25569[(2)]);
var inst_25551 = (inst_25550__$1 == null);
var state_25569__$1 = (function (){var statearr_25573 = state_25569;
(statearr_25573[(7)] = inst_25550__$1);

return statearr_25573;
})();
if(cljs.core.truth_(inst_25551)){
var statearr_25574_25687 = state_25569__$1;
(statearr_25574_25687[(1)] = (5));

} else {
var statearr_25575_25688 = state_25569__$1;
(statearr_25575_25688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25570 === (6))){
var inst_25555 = (state_25569[(8)]);
var inst_25550 = (state_25569[(7)]);
var inst_25555__$1 = cljs.core.async.chan.call(null,(1));
var inst_25556 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25557 = [inst_25550,inst_25555__$1];
var inst_25558 = (new cljs.core.PersistentVector(null,2,(5),inst_25556,inst_25557,null));
var state_25569__$1 = (function (){var statearr_25576 = state_25569;
(statearr_25576[(8)] = inst_25555__$1);

return statearr_25576;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25569__$1,(8),jobs,inst_25558);
} else {
if((state_val_25570 === (3))){
var inst_25567 = (state_25569[(2)]);
var state_25569__$1 = state_25569;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25569__$1,inst_25567);
} else {
if((state_val_25570 === (2))){
var state_25569__$1 = state_25569;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25569__$1,(4),from);
} else {
if((state_val_25570 === (9))){
var inst_25562 = (state_25569[(2)]);
var state_25569__$1 = (function (){var statearr_25577 = state_25569;
(statearr_25577[(9)] = inst_25562);

return statearr_25577;
})();
var statearr_25578_25689 = state_25569__$1;
(statearr_25578_25689[(2)] = null);

(statearr_25578_25689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25570 === (5))){
var inst_25553 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25569__$1 = state_25569;
var statearr_25579_25690 = state_25569__$1;
(statearr_25579_25690[(2)] = inst_25553);

(statearr_25579_25690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25570 === (8))){
var inst_25555 = (state_25569[(8)]);
var inst_25560 = (state_25569[(2)]);
var state_25569__$1 = (function (){var statearr_25580 = state_25569;
(statearr_25580[(10)] = inst_25560);

return statearr_25580;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25569__$1,(9),results,inst_25555);
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
var cljs$core$async$pipeline_STAR__$_state_machine__23316__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23316__auto____0 = (function (){
var statearr_25581 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25581[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23316__auto__);

(statearr_25581[(1)] = (1));

return statearr_25581;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23316__auto____1 = (function (state_25569){
while(true){
var ret_value__23317__auto__ = (function (){try{while(true){
var result__23318__auto__ = switch__23315__auto__.call(null,state_25569);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23318__auto__;
}
break;
}
}catch (e25582){var ex__23319__auto__ = e25582;
var statearr_25583_25691 = state_25569;
(statearr_25583_25691[(2)] = ex__23319__auto__);


if(cljs.core.seq.call(null,(state_25569[(4)]))){
var statearr_25584_25692 = state_25569;
(statearr_25584_25692[(1)] = cljs.core.first.call(null,(state_25569[(4)])));

} else {
throw ex__23319__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25693 = state_25569;
state_25569 = G__25693;
continue;
} else {
return ret_value__23317__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23316__auto__ = function(state_25569){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23316__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23316__auto____1.call(this,state_25569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23316__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23316__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23316__auto__;
})()
})();
var state__23442__auto__ = (function (){var statearr_25585 = f__23441__auto__.call(null);
(statearr_25585[(6)] = c__23440__auto___25684);

return statearr_25585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23442__auto__);
}));


var c__23440__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23441__auto__ = (function (){var switch__23315__auto__ = (function (state_25623){
var state_val_25624 = (state_25623[(1)]);
if((state_val_25624 === (7))){
var inst_25619 = (state_25623[(2)]);
var state_25623__$1 = state_25623;
var statearr_25625_25694 = state_25623__$1;
(statearr_25625_25694[(2)] = inst_25619);

(statearr_25625_25694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (20))){
var state_25623__$1 = state_25623;
var statearr_25626_25695 = state_25623__$1;
(statearr_25626_25695[(2)] = null);

(statearr_25626_25695[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (1))){
var state_25623__$1 = state_25623;
var statearr_25627_25696 = state_25623__$1;
(statearr_25627_25696[(2)] = null);

(statearr_25627_25696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (4))){
var inst_25588 = (state_25623[(7)]);
var inst_25588__$1 = (state_25623[(2)]);
var inst_25589 = (inst_25588__$1 == null);
var state_25623__$1 = (function (){var statearr_25628 = state_25623;
(statearr_25628[(7)] = inst_25588__$1);

return statearr_25628;
})();
if(cljs.core.truth_(inst_25589)){
var statearr_25629_25697 = state_25623__$1;
(statearr_25629_25697[(1)] = (5));

} else {
var statearr_25630_25698 = state_25623__$1;
(statearr_25630_25698[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (15))){
var inst_25601 = (state_25623[(8)]);
var state_25623__$1 = state_25623;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25623__$1,(18),to,inst_25601);
} else {
if((state_val_25624 === (21))){
var inst_25614 = (state_25623[(2)]);
var state_25623__$1 = state_25623;
var statearr_25631_25699 = state_25623__$1;
(statearr_25631_25699[(2)] = inst_25614);

(statearr_25631_25699[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (13))){
var inst_25616 = (state_25623[(2)]);
var state_25623__$1 = (function (){var statearr_25632 = state_25623;
(statearr_25632[(9)] = inst_25616);

return statearr_25632;
})();
var statearr_25633_25700 = state_25623__$1;
(statearr_25633_25700[(2)] = null);

(statearr_25633_25700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (6))){
var inst_25588 = (state_25623[(7)]);
var state_25623__$1 = state_25623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25623__$1,(11),inst_25588);
} else {
if((state_val_25624 === (17))){
var inst_25609 = (state_25623[(2)]);
var state_25623__$1 = state_25623;
if(cljs.core.truth_(inst_25609)){
var statearr_25634_25701 = state_25623__$1;
(statearr_25634_25701[(1)] = (19));

} else {
var statearr_25635_25702 = state_25623__$1;
(statearr_25635_25702[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (3))){
var inst_25621 = (state_25623[(2)]);
var state_25623__$1 = state_25623;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25623__$1,inst_25621);
} else {
if((state_val_25624 === (12))){
var inst_25598 = (state_25623[(10)]);
var state_25623__$1 = state_25623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25623__$1,(14),inst_25598);
} else {
if((state_val_25624 === (2))){
var state_25623__$1 = state_25623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25623__$1,(4),results);
} else {
if((state_val_25624 === (19))){
var state_25623__$1 = state_25623;
var statearr_25636_25703 = state_25623__$1;
(statearr_25636_25703[(2)] = null);

(statearr_25636_25703[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (11))){
var inst_25598 = (state_25623[(2)]);
var state_25623__$1 = (function (){var statearr_25637 = state_25623;
(statearr_25637[(10)] = inst_25598);

return statearr_25637;
})();
var statearr_25638_25704 = state_25623__$1;
(statearr_25638_25704[(2)] = null);

(statearr_25638_25704[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (9))){
var state_25623__$1 = state_25623;
var statearr_25639_25705 = state_25623__$1;
(statearr_25639_25705[(2)] = null);

(statearr_25639_25705[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (5))){
var state_25623__$1 = state_25623;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25640_25706 = state_25623__$1;
(statearr_25640_25706[(1)] = (8));

} else {
var statearr_25641_25707 = state_25623__$1;
(statearr_25641_25707[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (14))){
var inst_25603 = (state_25623[(11)]);
var inst_25601 = (state_25623[(8)]);
var inst_25601__$1 = (state_25623[(2)]);
var inst_25602 = (inst_25601__$1 == null);
var inst_25603__$1 = cljs.core.not.call(null,inst_25602);
var state_25623__$1 = (function (){var statearr_25642 = state_25623;
(statearr_25642[(11)] = inst_25603__$1);

(statearr_25642[(8)] = inst_25601__$1);

return statearr_25642;
})();
if(inst_25603__$1){
var statearr_25643_25708 = state_25623__$1;
(statearr_25643_25708[(1)] = (15));

} else {
var statearr_25644_25709 = state_25623__$1;
(statearr_25644_25709[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (16))){
var inst_25603 = (state_25623[(11)]);
var state_25623__$1 = state_25623;
var statearr_25645_25710 = state_25623__$1;
(statearr_25645_25710[(2)] = inst_25603);

(statearr_25645_25710[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (10))){
var inst_25595 = (state_25623[(2)]);
var state_25623__$1 = state_25623;
var statearr_25646_25711 = state_25623__$1;
(statearr_25646_25711[(2)] = inst_25595);

(statearr_25646_25711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (18))){
var inst_25606 = (state_25623[(2)]);
var state_25623__$1 = state_25623;
var statearr_25647_25712 = state_25623__$1;
(statearr_25647_25712[(2)] = inst_25606);

(statearr_25647_25712[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (8))){
var inst_25592 = cljs.core.async.close_BANG_.call(null,to);
var state_25623__$1 = state_25623;
var statearr_25648_25713 = state_25623__$1;
(statearr_25648_25713[(2)] = inst_25592);

(statearr_25648_25713[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__23316__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23316__auto____0 = (function (){
var statearr_25649 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25649[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23316__auto__);

(statearr_25649[(1)] = (1));

return statearr_25649;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23316__auto____1 = (function (state_25623){
while(true){
var ret_value__23317__auto__ = (function (){try{while(true){
var result__23318__auto__ = switch__23315__auto__.call(null,state_25623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23318__auto__;
}
break;
}
}catch (e25650){var ex__23319__auto__ = e25650;
var statearr_25651_25714 = state_25623;
(statearr_25651_25714[(2)] = ex__23319__auto__);


if(cljs.core.seq.call(null,(state_25623[(4)]))){
var statearr_25652_25715 = state_25623;
(statearr_25652_25715[(1)] = cljs.core.first.call(null,(state_25623[(4)])));

} else {
throw ex__23319__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25716 = state_25623;
state_25623 = G__25716;
continue;
} else {
return ret_value__23317__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23316__auto__ = function(state_25623){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23316__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23316__auto____1.call(this,state_25623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23316__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23316__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23316__auto__;
})()
})();
var state__23442__auto__ = (function (){var statearr_25653 = f__23441__auto__.call(null);
(statearr_25653[(6)] = c__23440__auto__);

return statearr_25653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23442__auto__);
}));

return c__23440__auto__;
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
var G__25718 = arguments.length;
switch (G__25718) {
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
var G__25721 = arguments.length;
switch (G__25721) {
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
var G__25724 = arguments.length;
switch (G__25724) {
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
var c__23440__auto___25774 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23441__auto__ = (function (){var switch__23315__auto__ = (function (state_25750){
var state_val_25751 = (state_25750[(1)]);
if((state_val_25751 === (7))){
var inst_25746 = (state_25750[(2)]);
var state_25750__$1 = state_25750;
var statearr_25752_25775 = state_25750__$1;
(statearr_25752_25775[(2)] = inst_25746);

(statearr_25752_25775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25751 === (1))){
var state_25750__$1 = state_25750;
var statearr_25753_25776 = state_25750__$1;
(statearr_25753_25776[(2)] = null);

(statearr_25753_25776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25751 === (4))){
var inst_25727 = (state_25750[(7)]);
var inst_25727__$1 = (state_25750[(2)]);
var inst_25728 = (inst_25727__$1 == null);
var state_25750__$1 = (function (){var statearr_25754 = state_25750;
(statearr_25754[(7)] = inst_25727__$1);

return statearr_25754;
})();
if(cljs.core.truth_(inst_25728)){
var statearr_25755_25777 = state_25750__$1;
(statearr_25755_25777[(1)] = (5));

} else {
var statearr_25756_25778 = state_25750__$1;
(statearr_25756_25778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25751 === (13))){
var state_25750__$1 = state_25750;
var statearr_25757_25779 = state_25750__$1;
(statearr_25757_25779[(2)] = null);

(statearr_25757_25779[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25751 === (6))){
var inst_25727 = (state_25750[(7)]);
var inst_25733 = p.call(null,inst_25727);
var state_25750__$1 = state_25750;
if(cljs.core.truth_(inst_25733)){
var statearr_25758_25780 = state_25750__$1;
(statearr_25758_25780[(1)] = (9));

} else {
var statearr_25759_25781 = state_25750__$1;
(statearr_25759_25781[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25751 === (3))){
var inst_25748 = (state_25750[(2)]);
var state_25750__$1 = state_25750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25750__$1,inst_25748);
} else {
if((state_val_25751 === (12))){
var state_25750__$1 = state_25750;
var statearr_25760_25782 = state_25750__$1;
(statearr_25760_25782[(2)] = null);

(statearr_25760_25782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25751 === (2))){
var state_25750__$1 = state_25750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25750__$1,(4),ch);
} else {
if((state_val_25751 === (11))){
var inst_25727 = (state_25750[(7)]);
var inst_25737 = (state_25750[(2)]);
var state_25750__$1 = state_25750;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25750__$1,(8),inst_25737,inst_25727);
} else {
if((state_val_25751 === (9))){
var state_25750__$1 = state_25750;
var statearr_25761_25783 = state_25750__$1;
(statearr_25761_25783[(2)] = tc);

(statearr_25761_25783[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25751 === (5))){
var inst_25730 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25731 = cljs.core.async.close_BANG_.call(null,fc);
var state_25750__$1 = (function (){var statearr_25762 = state_25750;
(statearr_25762[(8)] = inst_25730);

return statearr_25762;
})();
var statearr_25763_25784 = state_25750__$1;
(statearr_25763_25784[(2)] = inst_25731);

(statearr_25763_25784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25751 === (14))){
var inst_25744 = (state_25750[(2)]);
var state_25750__$1 = state_25750;
var statearr_25764_25785 = state_25750__$1;
(statearr_25764_25785[(2)] = inst_25744);

(statearr_25764_25785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25751 === (10))){
var state_25750__$1 = state_25750;
var statearr_25765_25786 = state_25750__$1;
(statearr_25765_25786[(2)] = fc);

(statearr_25765_25786[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25751 === (8))){
var inst_25739 = (state_25750[(2)]);
var state_25750__$1 = state_25750;
if(cljs.core.truth_(inst_25739)){
var statearr_25766_25787 = state_25750__$1;
(statearr_25766_25787[(1)] = (12));

} else {
var statearr_25767_25788 = state_25750__$1;
(statearr_25767_25788[(1)] = (13));

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
var cljs$core$async$state_machine__23316__auto__ = null;
var cljs$core$async$state_machine__23316__auto____0 = (function (){
var statearr_25768 = [null,null,null,null,null,null,null,null,null];
(statearr_25768[(0)] = cljs$core$async$state_machine__23316__auto__);

(statearr_25768[(1)] = (1));

return statearr_25768;
});
var cljs$core$async$state_machine__23316__auto____1 = (function (state_25750){
while(true){
var ret_value__23317__auto__ = (function (){try{while(true){
var result__23318__auto__ = switch__23315__auto__.call(null,state_25750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23318__auto__;
}
break;
}
}catch (e25769){var ex__23319__auto__ = e25769;
var statearr_25770_25789 = state_25750;
(statearr_25770_25789[(2)] = ex__23319__auto__);


if(cljs.core.seq.call(null,(state_25750[(4)]))){
var statearr_25771_25790 = state_25750;
(statearr_25771_25790[(1)] = cljs.core.first.call(null,(state_25750[(4)])));

} else {
throw ex__23319__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25791 = state_25750;
state_25750 = G__25791;
continue;
} else {
return ret_value__23317__auto__;
}
break;
}
});
cljs$core$async$state_machine__23316__auto__ = function(state_25750){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23316__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23316__auto____1.call(this,state_25750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23316__auto____0;
cljs$core$async$state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23316__auto____1;
return cljs$core$async$state_machine__23316__auto__;
})()
})();
var state__23442__auto__ = (function (){var statearr_25772 = f__23441__auto__.call(null);
(statearr_25772[(6)] = c__23440__auto___25774);

return statearr_25772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23442__auto__);
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
var c__23440__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23441__auto__ = (function (){var switch__23315__auto__ = (function (state_25813){
var state_val_25814 = (state_25813[(1)]);
if((state_val_25814 === (7))){
var inst_25809 = (state_25813[(2)]);
var state_25813__$1 = state_25813;
var statearr_25815_25834 = state_25813__$1;
(statearr_25815_25834[(2)] = inst_25809);

(statearr_25815_25834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (1))){
var inst_25792 = init;
var inst_25793 = inst_25792;
var state_25813__$1 = (function (){var statearr_25816 = state_25813;
(statearr_25816[(7)] = inst_25793);

return statearr_25816;
})();
var statearr_25817_25835 = state_25813__$1;
(statearr_25817_25835[(2)] = null);

(statearr_25817_25835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (4))){
var inst_25796 = (state_25813[(8)]);
var inst_25796__$1 = (state_25813[(2)]);
var inst_25797 = (inst_25796__$1 == null);
var state_25813__$1 = (function (){var statearr_25818 = state_25813;
(statearr_25818[(8)] = inst_25796__$1);

return statearr_25818;
})();
if(cljs.core.truth_(inst_25797)){
var statearr_25819_25836 = state_25813__$1;
(statearr_25819_25836[(1)] = (5));

} else {
var statearr_25820_25837 = state_25813__$1;
(statearr_25820_25837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (6))){
var inst_25796 = (state_25813[(8)]);
var inst_25800 = (state_25813[(9)]);
var inst_25793 = (state_25813[(7)]);
var inst_25800__$1 = f.call(null,inst_25793,inst_25796);
var inst_25801 = cljs.core.reduced_QMARK_.call(null,inst_25800__$1);
var state_25813__$1 = (function (){var statearr_25821 = state_25813;
(statearr_25821[(9)] = inst_25800__$1);

return statearr_25821;
})();
if(inst_25801){
var statearr_25822_25838 = state_25813__$1;
(statearr_25822_25838[(1)] = (8));

} else {
var statearr_25823_25839 = state_25813__$1;
(statearr_25823_25839[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (3))){
var inst_25811 = (state_25813[(2)]);
var state_25813__$1 = state_25813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25813__$1,inst_25811);
} else {
if((state_val_25814 === (2))){
var state_25813__$1 = state_25813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25813__$1,(4),ch);
} else {
if((state_val_25814 === (9))){
var inst_25800 = (state_25813[(9)]);
var inst_25793 = inst_25800;
var state_25813__$1 = (function (){var statearr_25824 = state_25813;
(statearr_25824[(7)] = inst_25793);

return statearr_25824;
})();
var statearr_25825_25840 = state_25813__$1;
(statearr_25825_25840[(2)] = null);

(statearr_25825_25840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (5))){
var inst_25793 = (state_25813[(7)]);
var state_25813__$1 = state_25813;
var statearr_25826_25841 = state_25813__$1;
(statearr_25826_25841[(2)] = inst_25793);

(statearr_25826_25841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (10))){
var inst_25807 = (state_25813[(2)]);
var state_25813__$1 = state_25813;
var statearr_25827_25842 = state_25813__$1;
(statearr_25827_25842[(2)] = inst_25807);

(statearr_25827_25842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (8))){
var inst_25800 = (state_25813[(9)]);
var inst_25803 = cljs.core.deref.call(null,inst_25800);
var state_25813__$1 = state_25813;
var statearr_25828_25843 = state_25813__$1;
(statearr_25828_25843[(2)] = inst_25803);

(statearr_25828_25843[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__23316__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23316__auto____0 = (function (){
var statearr_25829 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25829[(0)] = cljs$core$async$reduce_$_state_machine__23316__auto__);

(statearr_25829[(1)] = (1));

return statearr_25829;
});
var cljs$core$async$reduce_$_state_machine__23316__auto____1 = (function (state_25813){
while(true){
var ret_value__23317__auto__ = (function (){try{while(true){
var result__23318__auto__ = switch__23315__auto__.call(null,state_25813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23318__auto__;
}
break;
}
}catch (e25830){var ex__23319__auto__ = e25830;
var statearr_25831_25844 = state_25813;
(statearr_25831_25844[(2)] = ex__23319__auto__);


if(cljs.core.seq.call(null,(state_25813[(4)]))){
var statearr_25832_25845 = state_25813;
(statearr_25832_25845[(1)] = cljs.core.first.call(null,(state_25813[(4)])));

} else {
throw ex__23319__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25846 = state_25813;
state_25813 = G__25846;
continue;
} else {
return ret_value__23317__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23316__auto__ = function(state_25813){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23316__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23316__auto____1.call(this,state_25813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23316__auto____0;
cljs$core$async$reduce_$_state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23316__auto____1;
return cljs$core$async$reduce_$_state_machine__23316__auto__;
})()
})();
var state__23442__auto__ = (function (){var statearr_25833 = f__23441__auto__.call(null);
(statearr_25833[(6)] = c__23440__auto__);

return statearr_25833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23442__auto__);
}));

return c__23440__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23440__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23441__auto__ = (function (){var switch__23315__auto__ = (function (state_25852){
var state_val_25853 = (state_25852[(1)]);
if((state_val_25853 === (1))){
var inst_25847 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_25852__$1 = state_25852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25852__$1,(2),inst_25847);
} else {
if((state_val_25853 === (2))){
var inst_25849 = (state_25852[(2)]);
var inst_25850 = f__$1.call(null,inst_25849);
var state_25852__$1 = state_25852;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25852__$1,inst_25850);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__23316__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23316__auto____0 = (function (){
var statearr_25854 = [null,null,null,null,null,null,null];
(statearr_25854[(0)] = cljs$core$async$transduce_$_state_machine__23316__auto__);

(statearr_25854[(1)] = (1));

return statearr_25854;
});
var cljs$core$async$transduce_$_state_machine__23316__auto____1 = (function (state_25852){
while(true){
var ret_value__23317__auto__ = (function (){try{while(true){
var result__23318__auto__ = switch__23315__auto__.call(null,state_25852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23318__auto__;
}
break;
}
}catch (e25855){var ex__23319__auto__ = e25855;
var statearr_25856_25859 = state_25852;
(statearr_25856_25859[(2)] = ex__23319__auto__);


if(cljs.core.seq.call(null,(state_25852[(4)]))){
var statearr_25857_25860 = state_25852;
(statearr_25857_25860[(1)] = cljs.core.first.call(null,(state_25852[(4)])));

} else {
throw ex__23319__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25861 = state_25852;
state_25852 = G__25861;
continue;
} else {
return ret_value__23317__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23316__auto__ = function(state_25852){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23316__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23316__auto____1.call(this,state_25852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23316__auto____0;
cljs$core$async$transduce_$_state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23316__auto____1;
return cljs$core$async$transduce_$_state_machine__23316__auto__;
})()
})();
var state__23442__auto__ = (function (){var statearr_25858 = f__23441__auto__.call(null);
(statearr_25858[(6)] = c__23440__auto__);

return statearr_25858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23442__auto__);
}));

return c__23440__auto__;
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
var G__25863 = arguments.length;
switch (G__25863) {
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
var c__23440__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23441__auto__ = (function (){var switch__23315__auto__ = (function (state_25888){
var state_val_25889 = (state_25888[(1)]);
if((state_val_25889 === (7))){
var inst_25870 = (state_25888[(2)]);
var state_25888__$1 = state_25888;
var statearr_25890_25912 = state_25888__$1;
(statearr_25890_25912[(2)] = inst_25870);

(statearr_25890_25912[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25889 === (1))){
var inst_25864 = cljs.core.seq.call(null,coll);
var inst_25865 = inst_25864;
var state_25888__$1 = (function (){var statearr_25891 = state_25888;
(statearr_25891[(7)] = inst_25865);

return statearr_25891;
})();
var statearr_25892_25913 = state_25888__$1;
(statearr_25892_25913[(2)] = null);

(statearr_25892_25913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25889 === (4))){
var inst_25865 = (state_25888[(7)]);
var inst_25868 = cljs.core.first.call(null,inst_25865);
var state_25888__$1 = state_25888;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25888__$1,(7),ch,inst_25868);
} else {
if((state_val_25889 === (13))){
var inst_25882 = (state_25888[(2)]);
var state_25888__$1 = state_25888;
var statearr_25893_25914 = state_25888__$1;
(statearr_25893_25914[(2)] = inst_25882);

(statearr_25893_25914[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25889 === (6))){
var inst_25873 = (state_25888[(2)]);
var state_25888__$1 = state_25888;
if(cljs.core.truth_(inst_25873)){
var statearr_25894_25915 = state_25888__$1;
(statearr_25894_25915[(1)] = (8));

} else {
var statearr_25895_25916 = state_25888__$1;
(statearr_25895_25916[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25889 === (3))){
var inst_25886 = (state_25888[(2)]);
var state_25888__$1 = state_25888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25888__$1,inst_25886);
} else {
if((state_val_25889 === (12))){
var state_25888__$1 = state_25888;
var statearr_25896_25917 = state_25888__$1;
(statearr_25896_25917[(2)] = null);

(statearr_25896_25917[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25889 === (2))){
var inst_25865 = (state_25888[(7)]);
var state_25888__$1 = state_25888;
if(cljs.core.truth_(inst_25865)){
var statearr_25897_25918 = state_25888__$1;
(statearr_25897_25918[(1)] = (4));

} else {
var statearr_25898_25919 = state_25888__$1;
(statearr_25898_25919[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25889 === (11))){
var inst_25879 = cljs.core.async.close_BANG_.call(null,ch);
var state_25888__$1 = state_25888;
var statearr_25899_25920 = state_25888__$1;
(statearr_25899_25920[(2)] = inst_25879);

(statearr_25899_25920[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25889 === (9))){
var state_25888__$1 = state_25888;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25900_25921 = state_25888__$1;
(statearr_25900_25921[(1)] = (11));

} else {
var statearr_25901_25922 = state_25888__$1;
(statearr_25901_25922[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25889 === (5))){
var inst_25865 = (state_25888[(7)]);
var state_25888__$1 = state_25888;
var statearr_25902_25923 = state_25888__$1;
(statearr_25902_25923[(2)] = inst_25865);

(statearr_25902_25923[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25889 === (10))){
var inst_25884 = (state_25888[(2)]);
var state_25888__$1 = state_25888;
var statearr_25903_25924 = state_25888__$1;
(statearr_25903_25924[(2)] = inst_25884);

(statearr_25903_25924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25889 === (8))){
var inst_25865 = (state_25888[(7)]);
var inst_25875 = cljs.core.next.call(null,inst_25865);
var inst_25865__$1 = inst_25875;
var state_25888__$1 = (function (){var statearr_25904 = state_25888;
(statearr_25904[(7)] = inst_25865__$1);

return statearr_25904;
})();
var statearr_25905_25925 = state_25888__$1;
(statearr_25905_25925[(2)] = null);

(statearr_25905_25925[(1)] = (2));


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
var cljs$core$async$state_machine__23316__auto__ = null;
var cljs$core$async$state_machine__23316__auto____0 = (function (){
var statearr_25906 = [null,null,null,null,null,null,null,null];
(statearr_25906[(0)] = cljs$core$async$state_machine__23316__auto__);

(statearr_25906[(1)] = (1));

return statearr_25906;
});
var cljs$core$async$state_machine__23316__auto____1 = (function (state_25888){
while(true){
var ret_value__23317__auto__ = (function (){try{while(true){
var result__23318__auto__ = switch__23315__auto__.call(null,state_25888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23318__auto__;
}
break;
}
}catch (e25907){var ex__23319__auto__ = e25907;
var statearr_25908_25926 = state_25888;
(statearr_25908_25926[(2)] = ex__23319__auto__);


if(cljs.core.seq.call(null,(state_25888[(4)]))){
var statearr_25909_25927 = state_25888;
(statearr_25909_25927[(1)] = cljs.core.first.call(null,(state_25888[(4)])));

} else {
throw ex__23319__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25928 = state_25888;
state_25888 = G__25928;
continue;
} else {
return ret_value__23317__auto__;
}
break;
}
});
cljs$core$async$state_machine__23316__auto__ = function(state_25888){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23316__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23316__auto____1.call(this,state_25888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23316__auto____0;
cljs$core$async$state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23316__auto____1;
return cljs$core$async$state_machine__23316__auto__;
})()
})();
var state__23442__auto__ = (function (){var statearr_25910 = f__23441__auto__.call(null);
(statearr_25910[(6)] = c__23440__auto__);

return statearr_25910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23442__auto__);
}));

return c__23440__auto__;
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
var G__25930 = arguments.length;
switch (G__25930) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_25932 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_25932.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_25933 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_25933.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_25934 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_25934.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_25935 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_25935.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25936 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25936 = (function (ch,cs,meta25937){
this.ch = ch;
this.cs = cs;
this.meta25937 = meta25937;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25938,meta25937__$1){
var self__ = this;
var _25938__$1 = this;
return (new cljs.core.async.t_cljs$core$async25936(self__.ch,self__.cs,meta25937__$1));
}));

(cljs.core.async.t_cljs$core$async25936.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25938){
var self__ = this;
var _25938__$1 = this;
return self__.meta25937;
}));

(cljs.core.async.t_cljs$core$async25936.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25936.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async25936.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25936.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async25936.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async25936.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async25936.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25937","meta25937",-1919691209,null)], null);
}));

(cljs.core.async.t_cljs$core$async25936.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25936.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25936");

(cljs.core.async.t_cljs$core$async25936.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async25936");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25936.
 */
cljs.core.async.__GT_t_cljs$core$async25936 = (function cljs$core$async$mult_$___GT_t_cljs$core$async25936(ch__$1,cs__$1,meta25937){
return (new cljs.core.async.t_cljs$core$async25936(ch__$1,cs__$1,meta25937));
});

}

return (new cljs.core.async.t_cljs$core$async25936(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__23440__auto___26155 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23441__auto__ = (function (){var switch__23315__auto__ = (function (state_26071){
var state_val_26072 = (state_26071[(1)]);
if((state_val_26072 === (7))){
var inst_26067 = (state_26071[(2)]);
var state_26071__$1 = state_26071;
var statearr_26073_26156 = state_26071__$1;
(statearr_26073_26156[(2)] = inst_26067);

(statearr_26073_26156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (20))){
var inst_25972 = (state_26071[(7)]);
var inst_25984 = cljs.core.first.call(null,inst_25972);
var inst_25985 = cljs.core.nth.call(null,inst_25984,(0),null);
var inst_25986 = cljs.core.nth.call(null,inst_25984,(1),null);
var state_26071__$1 = (function (){var statearr_26074 = state_26071;
(statearr_26074[(8)] = inst_25985);

return statearr_26074;
})();
if(cljs.core.truth_(inst_25986)){
var statearr_26075_26157 = state_26071__$1;
(statearr_26075_26157[(1)] = (22));

} else {
var statearr_26076_26158 = state_26071__$1;
(statearr_26076_26158[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (27))){
var inst_25941 = (state_26071[(9)]);
var inst_26014 = (state_26071[(10)]);
var inst_26016 = (state_26071[(11)]);
var inst_26021 = (state_26071[(12)]);
var inst_26021__$1 = cljs.core._nth.call(null,inst_26014,inst_26016);
var inst_26022 = cljs.core.async.put_BANG_.call(null,inst_26021__$1,inst_25941,done);
var state_26071__$1 = (function (){var statearr_26077 = state_26071;
(statearr_26077[(12)] = inst_26021__$1);

return statearr_26077;
})();
if(cljs.core.truth_(inst_26022)){
var statearr_26078_26159 = state_26071__$1;
(statearr_26078_26159[(1)] = (30));

} else {
var statearr_26079_26160 = state_26071__$1;
(statearr_26079_26160[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (1))){
var state_26071__$1 = state_26071;
var statearr_26080_26161 = state_26071__$1;
(statearr_26080_26161[(2)] = null);

(statearr_26080_26161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (24))){
var inst_25972 = (state_26071[(7)]);
var inst_25991 = (state_26071[(2)]);
var inst_25992 = cljs.core.next.call(null,inst_25972);
var inst_25950 = inst_25992;
var inst_25951 = null;
var inst_25952 = (0);
var inst_25953 = (0);
var state_26071__$1 = (function (){var statearr_26081 = state_26071;
(statearr_26081[(13)] = inst_25991);

(statearr_26081[(14)] = inst_25951);

(statearr_26081[(15)] = inst_25952);

(statearr_26081[(16)] = inst_25953);

(statearr_26081[(17)] = inst_25950);

return statearr_26081;
})();
var statearr_26082_26162 = state_26071__$1;
(statearr_26082_26162[(2)] = null);

(statearr_26082_26162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (39))){
var state_26071__$1 = state_26071;
var statearr_26086_26163 = state_26071__$1;
(statearr_26086_26163[(2)] = null);

(statearr_26086_26163[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (4))){
var inst_25941 = (state_26071[(9)]);
var inst_25941__$1 = (state_26071[(2)]);
var inst_25942 = (inst_25941__$1 == null);
var state_26071__$1 = (function (){var statearr_26087 = state_26071;
(statearr_26087[(9)] = inst_25941__$1);

return statearr_26087;
})();
if(cljs.core.truth_(inst_25942)){
var statearr_26088_26164 = state_26071__$1;
(statearr_26088_26164[(1)] = (5));

} else {
var statearr_26089_26165 = state_26071__$1;
(statearr_26089_26165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (15))){
var inst_25951 = (state_26071[(14)]);
var inst_25952 = (state_26071[(15)]);
var inst_25953 = (state_26071[(16)]);
var inst_25950 = (state_26071[(17)]);
var inst_25968 = (state_26071[(2)]);
var inst_25969 = (inst_25953 + (1));
var tmp26083 = inst_25951;
var tmp26084 = inst_25952;
var tmp26085 = inst_25950;
var inst_25950__$1 = tmp26085;
var inst_25951__$1 = tmp26083;
var inst_25952__$1 = tmp26084;
var inst_25953__$1 = inst_25969;
var state_26071__$1 = (function (){var statearr_26090 = state_26071;
(statearr_26090[(18)] = inst_25968);

(statearr_26090[(14)] = inst_25951__$1);

(statearr_26090[(15)] = inst_25952__$1);

(statearr_26090[(16)] = inst_25953__$1);

(statearr_26090[(17)] = inst_25950__$1);

return statearr_26090;
})();
var statearr_26091_26166 = state_26071__$1;
(statearr_26091_26166[(2)] = null);

(statearr_26091_26166[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (21))){
var inst_25995 = (state_26071[(2)]);
var state_26071__$1 = state_26071;
var statearr_26095_26167 = state_26071__$1;
(statearr_26095_26167[(2)] = inst_25995);

(statearr_26095_26167[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (31))){
var inst_26021 = (state_26071[(12)]);
var inst_26025 = cljs.core.async.untap_STAR_.call(null,m,inst_26021);
var state_26071__$1 = state_26071;
var statearr_26096_26168 = state_26071__$1;
(statearr_26096_26168[(2)] = inst_26025);

(statearr_26096_26168[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (32))){
var inst_26013 = (state_26071[(19)]);
var inst_26015 = (state_26071[(20)]);
var inst_26014 = (state_26071[(10)]);
var inst_26016 = (state_26071[(11)]);
var inst_26027 = (state_26071[(2)]);
var inst_26028 = (inst_26016 + (1));
var tmp26092 = inst_26013;
var tmp26093 = inst_26015;
var tmp26094 = inst_26014;
var inst_26013__$1 = tmp26092;
var inst_26014__$1 = tmp26094;
var inst_26015__$1 = tmp26093;
var inst_26016__$1 = inst_26028;
var state_26071__$1 = (function (){var statearr_26097 = state_26071;
(statearr_26097[(19)] = inst_26013__$1);

(statearr_26097[(20)] = inst_26015__$1);

(statearr_26097[(10)] = inst_26014__$1);

(statearr_26097[(21)] = inst_26027);

(statearr_26097[(11)] = inst_26016__$1);

return statearr_26097;
})();
var statearr_26098_26169 = state_26071__$1;
(statearr_26098_26169[(2)] = null);

(statearr_26098_26169[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (40))){
var inst_26040 = (state_26071[(22)]);
var inst_26044 = cljs.core.async.untap_STAR_.call(null,m,inst_26040);
var state_26071__$1 = state_26071;
var statearr_26099_26170 = state_26071__$1;
(statearr_26099_26170[(2)] = inst_26044);

(statearr_26099_26170[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (33))){
var inst_26031 = (state_26071[(23)]);
var inst_26033 = cljs.core.chunked_seq_QMARK_.call(null,inst_26031);
var state_26071__$1 = state_26071;
if(inst_26033){
var statearr_26100_26171 = state_26071__$1;
(statearr_26100_26171[(1)] = (36));

} else {
var statearr_26101_26172 = state_26071__$1;
(statearr_26101_26172[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (13))){
var inst_25962 = (state_26071[(24)]);
var inst_25965 = cljs.core.async.close_BANG_.call(null,inst_25962);
var state_26071__$1 = state_26071;
var statearr_26102_26173 = state_26071__$1;
(statearr_26102_26173[(2)] = inst_25965);

(statearr_26102_26173[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (22))){
var inst_25985 = (state_26071[(8)]);
var inst_25988 = cljs.core.async.close_BANG_.call(null,inst_25985);
var state_26071__$1 = state_26071;
var statearr_26103_26174 = state_26071__$1;
(statearr_26103_26174[(2)] = inst_25988);

(statearr_26103_26174[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (36))){
var inst_26031 = (state_26071[(23)]);
var inst_26035 = cljs.core.chunk_first.call(null,inst_26031);
var inst_26036 = cljs.core.chunk_rest.call(null,inst_26031);
var inst_26037 = cljs.core.count.call(null,inst_26035);
var inst_26013 = inst_26036;
var inst_26014 = inst_26035;
var inst_26015 = inst_26037;
var inst_26016 = (0);
var state_26071__$1 = (function (){var statearr_26104 = state_26071;
(statearr_26104[(19)] = inst_26013);

(statearr_26104[(20)] = inst_26015);

(statearr_26104[(10)] = inst_26014);

(statearr_26104[(11)] = inst_26016);

return statearr_26104;
})();
var statearr_26105_26175 = state_26071__$1;
(statearr_26105_26175[(2)] = null);

(statearr_26105_26175[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (41))){
var inst_26031 = (state_26071[(23)]);
var inst_26046 = (state_26071[(2)]);
var inst_26047 = cljs.core.next.call(null,inst_26031);
var inst_26013 = inst_26047;
var inst_26014 = null;
var inst_26015 = (0);
var inst_26016 = (0);
var state_26071__$1 = (function (){var statearr_26106 = state_26071;
(statearr_26106[(19)] = inst_26013);

(statearr_26106[(20)] = inst_26015);

(statearr_26106[(10)] = inst_26014);

(statearr_26106[(11)] = inst_26016);

(statearr_26106[(25)] = inst_26046);

return statearr_26106;
})();
var statearr_26107_26176 = state_26071__$1;
(statearr_26107_26176[(2)] = null);

(statearr_26107_26176[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (43))){
var state_26071__$1 = state_26071;
var statearr_26108_26177 = state_26071__$1;
(statearr_26108_26177[(2)] = null);

(statearr_26108_26177[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (29))){
var inst_26055 = (state_26071[(2)]);
var state_26071__$1 = state_26071;
var statearr_26109_26178 = state_26071__$1;
(statearr_26109_26178[(2)] = inst_26055);

(statearr_26109_26178[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (44))){
var inst_26064 = (state_26071[(2)]);
var state_26071__$1 = (function (){var statearr_26110 = state_26071;
(statearr_26110[(26)] = inst_26064);

return statearr_26110;
})();
var statearr_26111_26179 = state_26071__$1;
(statearr_26111_26179[(2)] = null);

(statearr_26111_26179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (6))){
var inst_26005 = (state_26071[(27)]);
var inst_26004 = cljs.core.deref.call(null,cs);
var inst_26005__$1 = cljs.core.keys.call(null,inst_26004);
var inst_26006 = cljs.core.count.call(null,inst_26005__$1);
var inst_26007 = cljs.core.reset_BANG_.call(null,dctr,inst_26006);
var inst_26012 = cljs.core.seq.call(null,inst_26005__$1);
var inst_26013 = inst_26012;
var inst_26014 = null;
var inst_26015 = (0);
var inst_26016 = (0);
var state_26071__$1 = (function (){var statearr_26112 = state_26071;
(statearr_26112[(19)] = inst_26013);

(statearr_26112[(27)] = inst_26005__$1);

(statearr_26112[(20)] = inst_26015);

(statearr_26112[(10)] = inst_26014);

(statearr_26112[(11)] = inst_26016);

(statearr_26112[(28)] = inst_26007);

return statearr_26112;
})();
var statearr_26113_26180 = state_26071__$1;
(statearr_26113_26180[(2)] = null);

(statearr_26113_26180[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (28))){
var inst_26013 = (state_26071[(19)]);
var inst_26031 = (state_26071[(23)]);
var inst_26031__$1 = cljs.core.seq.call(null,inst_26013);
var state_26071__$1 = (function (){var statearr_26114 = state_26071;
(statearr_26114[(23)] = inst_26031__$1);

return statearr_26114;
})();
if(inst_26031__$1){
var statearr_26115_26181 = state_26071__$1;
(statearr_26115_26181[(1)] = (33));

} else {
var statearr_26116_26182 = state_26071__$1;
(statearr_26116_26182[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (25))){
var inst_26015 = (state_26071[(20)]);
var inst_26016 = (state_26071[(11)]);
var inst_26018 = (inst_26016 < inst_26015);
var inst_26019 = inst_26018;
var state_26071__$1 = state_26071;
if(cljs.core.truth_(inst_26019)){
var statearr_26117_26183 = state_26071__$1;
(statearr_26117_26183[(1)] = (27));

} else {
var statearr_26118_26184 = state_26071__$1;
(statearr_26118_26184[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (34))){
var state_26071__$1 = state_26071;
var statearr_26119_26185 = state_26071__$1;
(statearr_26119_26185[(2)] = null);

(statearr_26119_26185[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (17))){
var state_26071__$1 = state_26071;
var statearr_26120_26186 = state_26071__$1;
(statearr_26120_26186[(2)] = null);

(statearr_26120_26186[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (3))){
var inst_26069 = (state_26071[(2)]);
var state_26071__$1 = state_26071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26071__$1,inst_26069);
} else {
if((state_val_26072 === (12))){
var inst_26000 = (state_26071[(2)]);
var state_26071__$1 = state_26071;
var statearr_26121_26187 = state_26071__$1;
(statearr_26121_26187[(2)] = inst_26000);

(statearr_26121_26187[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (2))){
var state_26071__$1 = state_26071;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26071__$1,(4),ch);
} else {
if((state_val_26072 === (23))){
var state_26071__$1 = state_26071;
var statearr_26122_26188 = state_26071__$1;
(statearr_26122_26188[(2)] = null);

(statearr_26122_26188[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (35))){
var inst_26053 = (state_26071[(2)]);
var state_26071__$1 = state_26071;
var statearr_26123_26189 = state_26071__$1;
(statearr_26123_26189[(2)] = inst_26053);

(statearr_26123_26189[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (19))){
var inst_25972 = (state_26071[(7)]);
var inst_25976 = cljs.core.chunk_first.call(null,inst_25972);
var inst_25977 = cljs.core.chunk_rest.call(null,inst_25972);
var inst_25978 = cljs.core.count.call(null,inst_25976);
var inst_25950 = inst_25977;
var inst_25951 = inst_25976;
var inst_25952 = inst_25978;
var inst_25953 = (0);
var state_26071__$1 = (function (){var statearr_26124 = state_26071;
(statearr_26124[(14)] = inst_25951);

(statearr_26124[(15)] = inst_25952);

(statearr_26124[(16)] = inst_25953);

(statearr_26124[(17)] = inst_25950);

return statearr_26124;
})();
var statearr_26125_26190 = state_26071__$1;
(statearr_26125_26190[(2)] = null);

(statearr_26125_26190[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (11))){
var inst_25972 = (state_26071[(7)]);
var inst_25950 = (state_26071[(17)]);
var inst_25972__$1 = cljs.core.seq.call(null,inst_25950);
var state_26071__$1 = (function (){var statearr_26126 = state_26071;
(statearr_26126[(7)] = inst_25972__$1);

return statearr_26126;
})();
if(inst_25972__$1){
var statearr_26127_26191 = state_26071__$1;
(statearr_26127_26191[(1)] = (16));

} else {
var statearr_26128_26192 = state_26071__$1;
(statearr_26128_26192[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (9))){
var inst_26002 = (state_26071[(2)]);
var state_26071__$1 = state_26071;
var statearr_26129_26193 = state_26071__$1;
(statearr_26129_26193[(2)] = inst_26002);

(statearr_26129_26193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (5))){
var inst_25948 = cljs.core.deref.call(null,cs);
var inst_25949 = cljs.core.seq.call(null,inst_25948);
var inst_25950 = inst_25949;
var inst_25951 = null;
var inst_25952 = (0);
var inst_25953 = (0);
var state_26071__$1 = (function (){var statearr_26130 = state_26071;
(statearr_26130[(14)] = inst_25951);

(statearr_26130[(15)] = inst_25952);

(statearr_26130[(16)] = inst_25953);

(statearr_26130[(17)] = inst_25950);

return statearr_26130;
})();
var statearr_26131_26194 = state_26071__$1;
(statearr_26131_26194[(2)] = null);

(statearr_26131_26194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (14))){
var state_26071__$1 = state_26071;
var statearr_26132_26195 = state_26071__$1;
(statearr_26132_26195[(2)] = null);

(statearr_26132_26195[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (45))){
var inst_26061 = (state_26071[(2)]);
var state_26071__$1 = state_26071;
var statearr_26133_26196 = state_26071__$1;
(statearr_26133_26196[(2)] = inst_26061);

(statearr_26133_26196[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (26))){
var inst_26005 = (state_26071[(27)]);
var inst_26057 = (state_26071[(2)]);
var inst_26058 = cljs.core.seq.call(null,inst_26005);
var state_26071__$1 = (function (){var statearr_26134 = state_26071;
(statearr_26134[(29)] = inst_26057);

return statearr_26134;
})();
if(inst_26058){
var statearr_26135_26197 = state_26071__$1;
(statearr_26135_26197[(1)] = (42));

} else {
var statearr_26136_26198 = state_26071__$1;
(statearr_26136_26198[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (16))){
var inst_25972 = (state_26071[(7)]);
var inst_25974 = cljs.core.chunked_seq_QMARK_.call(null,inst_25972);
var state_26071__$1 = state_26071;
if(inst_25974){
var statearr_26137_26199 = state_26071__$1;
(statearr_26137_26199[(1)] = (19));

} else {
var statearr_26138_26200 = state_26071__$1;
(statearr_26138_26200[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (38))){
var inst_26050 = (state_26071[(2)]);
var state_26071__$1 = state_26071;
var statearr_26139_26201 = state_26071__$1;
(statearr_26139_26201[(2)] = inst_26050);

(statearr_26139_26201[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (30))){
var state_26071__$1 = state_26071;
var statearr_26140_26202 = state_26071__$1;
(statearr_26140_26202[(2)] = null);

(statearr_26140_26202[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (10))){
var inst_25951 = (state_26071[(14)]);
var inst_25953 = (state_26071[(16)]);
var inst_25961 = cljs.core._nth.call(null,inst_25951,inst_25953);
var inst_25962 = cljs.core.nth.call(null,inst_25961,(0),null);
var inst_25963 = cljs.core.nth.call(null,inst_25961,(1),null);
var state_26071__$1 = (function (){var statearr_26141 = state_26071;
(statearr_26141[(24)] = inst_25962);

return statearr_26141;
})();
if(cljs.core.truth_(inst_25963)){
var statearr_26142_26203 = state_26071__$1;
(statearr_26142_26203[(1)] = (13));

} else {
var statearr_26143_26204 = state_26071__$1;
(statearr_26143_26204[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (18))){
var inst_25998 = (state_26071[(2)]);
var state_26071__$1 = state_26071;
var statearr_26144_26205 = state_26071__$1;
(statearr_26144_26205[(2)] = inst_25998);

(statearr_26144_26205[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (42))){
var state_26071__$1 = state_26071;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26071__$1,(45),dchan);
} else {
if((state_val_26072 === (37))){
var inst_26040 = (state_26071[(22)]);
var inst_25941 = (state_26071[(9)]);
var inst_26031 = (state_26071[(23)]);
var inst_26040__$1 = cljs.core.first.call(null,inst_26031);
var inst_26041 = cljs.core.async.put_BANG_.call(null,inst_26040__$1,inst_25941,done);
var state_26071__$1 = (function (){var statearr_26145 = state_26071;
(statearr_26145[(22)] = inst_26040__$1);

return statearr_26145;
})();
if(cljs.core.truth_(inst_26041)){
var statearr_26146_26206 = state_26071__$1;
(statearr_26146_26206[(1)] = (39));

} else {
var statearr_26147_26207 = state_26071__$1;
(statearr_26147_26207[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26072 === (8))){
var inst_25952 = (state_26071[(15)]);
var inst_25953 = (state_26071[(16)]);
var inst_25955 = (inst_25953 < inst_25952);
var inst_25956 = inst_25955;
var state_26071__$1 = state_26071;
if(cljs.core.truth_(inst_25956)){
var statearr_26148_26208 = state_26071__$1;
(statearr_26148_26208[(1)] = (10));

} else {
var statearr_26149_26209 = state_26071__$1;
(statearr_26149_26209[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__23316__auto__ = null;
var cljs$core$async$mult_$_state_machine__23316__auto____0 = (function (){
var statearr_26150 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26150[(0)] = cljs$core$async$mult_$_state_machine__23316__auto__);

(statearr_26150[(1)] = (1));

return statearr_26150;
});
var cljs$core$async$mult_$_state_machine__23316__auto____1 = (function (state_26071){
while(true){
var ret_value__23317__auto__ = (function (){try{while(true){
var result__23318__auto__ = switch__23315__auto__.call(null,state_26071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23318__auto__;
}
break;
}
}catch (e26151){var ex__23319__auto__ = e26151;
var statearr_26152_26210 = state_26071;
(statearr_26152_26210[(2)] = ex__23319__auto__);


if(cljs.core.seq.call(null,(state_26071[(4)]))){
var statearr_26153_26211 = state_26071;
(statearr_26153_26211[(1)] = cljs.core.first.call(null,(state_26071[(4)])));

} else {
throw ex__23319__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26212 = state_26071;
state_26071 = G__26212;
continue;
} else {
return ret_value__23317__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23316__auto__ = function(state_26071){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23316__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23316__auto____1.call(this,state_26071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23316__auto____0;
cljs$core$async$mult_$_state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23316__auto____1;
return cljs$core$async$mult_$_state_machine__23316__auto__;
})()
})();
var state__23442__auto__ = (function (){var statearr_26154 = f__23441__auto__.call(null);
(statearr_26154[(6)] = c__23440__auto___26155);

return statearr_26154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23442__auto__);
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
var G__26214 = arguments.length;
switch (G__26214) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_26216 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_26216.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_26217 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_26217.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_26218 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_26218.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_26219 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_26219.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_26220 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_26220.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26230 = arguments.length;
var i__4865__auto___26231 = (0);
while(true){
if((i__4865__auto___26231 < len__4864__auto___26230)){
args__4870__auto__.push((arguments[i__4865__auto___26231]));

var G__26232 = (i__4865__auto___26231 + (1));
i__4865__auto___26231 = G__26232;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26225){
var map__26226 = p__26225;
var map__26226__$1 = cljs.core.__destructure_map.call(null,map__26226);
var opts = map__26226__$1;
var statearr_26227_26233 = state;
(statearr_26227_26233[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_26228_26234 = state;
(statearr_26228_26234[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_26229_26235 = state;
(statearr_26229_26235[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26221){
var G__26222 = cljs.core.first.call(null,seq26221);
var seq26221__$1 = cljs.core.next.call(null,seq26221);
var G__26223 = cljs.core.first.call(null,seq26221__$1);
var seq26221__$2 = cljs.core.next.call(null,seq26221__$1);
var G__26224 = cljs.core.first.call(null,seq26221__$2);
var seq26221__$3 = cljs.core.next.call(null,seq26221__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26222,G__26223,G__26224,seq26221__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26236 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26236 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26237){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta26237 = meta26237;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26238,meta26237__$1){
var self__ = this;
var _26238__$1 = this;
return (new cljs.core.async.t_cljs$core$async26236(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26237__$1));
}));

(cljs.core.async.t_cljs$core$async26236.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26238){
var self__ = this;
var _26238__$1 = this;
return self__.meta26237;
}));

(cljs.core.async.t_cljs$core$async26236.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26236.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async26236.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26236.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async26236.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async26236.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async26236.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async26236.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async26236.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26237","meta26237",-83384336,null)], null);
}));

(cljs.core.async.t_cljs$core$async26236.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26236.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26236");

(cljs.core.async.t_cljs$core$async26236.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async26236");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26236.
 */
cljs.core.async.__GT_t_cljs$core$async26236 = (function cljs$core$async$mix_$___GT_t_cljs$core$async26236(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26237){
return (new cljs.core.async.t_cljs$core$async26236(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26237));
});

}

return (new cljs.core.async.t_cljs$core$async26236(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23440__auto___26351 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23441__auto__ = (function (){var switch__23315__auto__ = (function (state_26306){
var state_val_26307 = (state_26306[(1)]);
if((state_val_26307 === (7))){
var inst_26266 = (state_26306[(2)]);
var state_26306__$1 = state_26306;
if(cljs.core.truth_(inst_26266)){
var statearr_26308_26352 = state_26306__$1;
(statearr_26308_26352[(1)] = (8));

} else {
var statearr_26309_26353 = state_26306__$1;
(statearr_26309_26353[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26307 === (20))){
var inst_26259 = (state_26306[(7)]);
var state_26306__$1 = state_26306;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26306__$1,(23),out,inst_26259);
} else {
if((state_val_26307 === (1))){
var inst_26242 = calc_state.call(null);
var inst_26243 = cljs.core.__destructure_map.call(null,inst_26242);
var inst_26244 = cljs.core.get.call(null,inst_26243,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26245 = cljs.core.get.call(null,inst_26243,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26246 = cljs.core.get.call(null,inst_26243,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26247 = inst_26242;
var state_26306__$1 = (function (){var statearr_26310 = state_26306;
(statearr_26310[(8)] = inst_26245);

(statearr_26310[(9)] = inst_26244);

(statearr_26310[(10)] = inst_26247);

(statearr_26310[(11)] = inst_26246);

return statearr_26310;
})();
var statearr_26311_26354 = state_26306__$1;
(statearr_26311_26354[(2)] = null);

(statearr_26311_26354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26307 === (24))){
var inst_26250 = (state_26306[(12)]);
var inst_26247 = inst_26250;
var state_26306__$1 = (function (){var statearr_26312 = state_26306;
(statearr_26312[(10)] = inst_26247);

return statearr_26312;
})();
var statearr_26313_26355 = state_26306__$1;
(statearr_26313_26355[(2)] = null);

(statearr_26313_26355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26307 === (4))){
var inst_26261 = (state_26306[(13)]);
var inst_26259 = (state_26306[(7)]);
var inst_26258 = (state_26306[(2)]);
var inst_26259__$1 = cljs.core.nth.call(null,inst_26258,(0),null);
var inst_26260 = cljs.core.nth.call(null,inst_26258,(1),null);
var inst_26261__$1 = (inst_26259__$1 == null);
var state_26306__$1 = (function (){var statearr_26314 = state_26306;
(statearr_26314[(13)] = inst_26261__$1);

(statearr_26314[(14)] = inst_26260);

(statearr_26314[(7)] = inst_26259__$1);

return statearr_26314;
})();
if(cljs.core.truth_(inst_26261__$1)){
var statearr_26315_26356 = state_26306__$1;
(statearr_26315_26356[(1)] = (5));

} else {
var statearr_26316_26357 = state_26306__$1;
(statearr_26316_26357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26307 === (15))){
var inst_26251 = (state_26306[(15)]);
var inst_26280 = (state_26306[(16)]);
var inst_26280__$1 = cljs.core.empty_QMARK_.call(null,inst_26251);
var state_26306__$1 = (function (){var statearr_26317 = state_26306;
(statearr_26317[(16)] = inst_26280__$1);

return statearr_26317;
})();
if(inst_26280__$1){
var statearr_26318_26358 = state_26306__$1;
(statearr_26318_26358[(1)] = (17));

} else {
var statearr_26319_26359 = state_26306__$1;
(statearr_26319_26359[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26307 === (21))){
var inst_26250 = (state_26306[(12)]);
var inst_26247 = inst_26250;
var state_26306__$1 = (function (){var statearr_26320 = state_26306;
(statearr_26320[(10)] = inst_26247);

return statearr_26320;
})();
var statearr_26321_26360 = state_26306__$1;
(statearr_26321_26360[(2)] = null);

(statearr_26321_26360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26307 === (13))){
var inst_26273 = (state_26306[(2)]);
var inst_26274 = calc_state.call(null);
var inst_26247 = inst_26274;
var state_26306__$1 = (function (){var statearr_26322 = state_26306;
(statearr_26322[(17)] = inst_26273);

(statearr_26322[(10)] = inst_26247);

return statearr_26322;
})();
var statearr_26323_26361 = state_26306__$1;
(statearr_26323_26361[(2)] = null);

(statearr_26323_26361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26307 === (22))){
var inst_26300 = (state_26306[(2)]);
var state_26306__$1 = state_26306;
var statearr_26324_26362 = state_26306__$1;
(statearr_26324_26362[(2)] = inst_26300);

(statearr_26324_26362[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26307 === (6))){
var inst_26260 = (state_26306[(14)]);
var inst_26264 = cljs.core._EQ_.call(null,inst_26260,change);
var state_26306__$1 = state_26306;
var statearr_26325_26363 = state_26306__$1;
(statearr_26325_26363[(2)] = inst_26264);

(statearr_26325_26363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26307 === (25))){
var state_26306__$1 = state_26306;
var statearr_26326_26364 = state_26306__$1;
(statearr_26326_26364[(2)] = null);

(statearr_26326_26364[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26307 === (17))){
var inst_26252 = (state_26306[(18)]);
var inst_26260 = (state_26306[(14)]);
var inst_26282 = inst_26252.call(null,inst_26260);
var inst_26283 = cljs.core.not.call(null,inst_26282);
var state_26306__$1 = state_26306;
var statearr_26327_26365 = state_26306__$1;
(statearr_26327_26365[(2)] = inst_26283);

(statearr_26327_26365[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26307 === (3))){
var inst_26304 = (state_26306[(2)]);
var state_26306__$1 = state_26306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26306__$1,inst_26304);
} else {
if((state_val_26307 === (12))){
var state_26306__$1 = state_26306;
var statearr_26328_26366 = state_26306__$1;
(statearr_26328_26366[(2)] = null);

(statearr_26328_26366[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26307 === (2))){
var inst_26250 = (state_26306[(12)]);
var inst_26247 = (state_26306[(10)]);
var inst_26250__$1 = cljs.core.__destructure_map.call(null,inst_26247);
var inst_26251 = cljs.core.get.call(null,inst_26250__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26252 = cljs.core.get.call(null,inst_26250__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26253 = cljs.core.get.call(null,inst_26250__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26306__$1 = (function (){var statearr_26329 = state_26306;
(statearr_26329[(12)] = inst_26250__$1);

(statearr_26329[(18)] = inst_26252);

(statearr_26329[(15)] = inst_26251);

return statearr_26329;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26306__$1,(4),inst_26253);
} else {
if((state_val_26307 === (23))){
var inst_26291 = (state_26306[(2)]);
var state_26306__$1 = state_26306;
if(cljs.core.truth_(inst_26291)){
var statearr_26330_26367 = state_26306__$1;
(statearr_26330_26367[(1)] = (24));

} else {
var statearr_26331_26368 = state_26306__$1;
(statearr_26331_26368[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26307 === (19))){
var inst_26286 = (state_26306[(2)]);
var state_26306__$1 = state_26306;
var statearr_26332_26369 = state_26306__$1;
(statearr_26332_26369[(2)] = inst_26286);

(statearr_26332_26369[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26307 === (11))){
var inst_26260 = (state_26306[(14)]);
var inst_26270 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26260);
var state_26306__$1 = state_26306;
var statearr_26333_26370 = state_26306__$1;
(statearr_26333_26370[(2)] = inst_26270);

(statearr_26333_26370[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26307 === (9))){
var inst_26251 = (state_26306[(15)]);
var inst_26260 = (state_26306[(14)]);
var inst_26277 = (state_26306[(19)]);
var inst_26277__$1 = inst_26251.call(null,inst_26260);
var state_26306__$1 = (function (){var statearr_26334 = state_26306;
(statearr_26334[(19)] = inst_26277__$1);

return statearr_26334;
})();
if(cljs.core.truth_(inst_26277__$1)){
var statearr_26335_26371 = state_26306__$1;
(statearr_26335_26371[(1)] = (14));

} else {
var statearr_26336_26372 = state_26306__$1;
(statearr_26336_26372[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26307 === (5))){
var inst_26261 = (state_26306[(13)]);
var state_26306__$1 = state_26306;
var statearr_26337_26373 = state_26306__$1;
(statearr_26337_26373[(2)] = inst_26261);

(statearr_26337_26373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26307 === (14))){
var inst_26277 = (state_26306[(19)]);
var state_26306__$1 = state_26306;
var statearr_26338_26374 = state_26306__$1;
(statearr_26338_26374[(2)] = inst_26277);

(statearr_26338_26374[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26307 === (26))){
var inst_26296 = (state_26306[(2)]);
var state_26306__$1 = state_26306;
var statearr_26339_26375 = state_26306__$1;
(statearr_26339_26375[(2)] = inst_26296);

(statearr_26339_26375[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26307 === (16))){
var inst_26288 = (state_26306[(2)]);
var state_26306__$1 = state_26306;
if(cljs.core.truth_(inst_26288)){
var statearr_26340_26376 = state_26306__$1;
(statearr_26340_26376[(1)] = (20));

} else {
var statearr_26341_26377 = state_26306__$1;
(statearr_26341_26377[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26307 === (10))){
var inst_26302 = (state_26306[(2)]);
var state_26306__$1 = state_26306;
var statearr_26342_26378 = state_26306__$1;
(statearr_26342_26378[(2)] = inst_26302);

(statearr_26342_26378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26307 === (18))){
var inst_26280 = (state_26306[(16)]);
var state_26306__$1 = state_26306;
var statearr_26343_26379 = state_26306__$1;
(statearr_26343_26379[(2)] = inst_26280);

(statearr_26343_26379[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26307 === (8))){
var inst_26259 = (state_26306[(7)]);
var inst_26268 = (inst_26259 == null);
var state_26306__$1 = state_26306;
if(cljs.core.truth_(inst_26268)){
var statearr_26344_26380 = state_26306__$1;
(statearr_26344_26380[(1)] = (11));

} else {
var statearr_26345_26381 = state_26306__$1;
(statearr_26345_26381[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__23316__auto__ = null;
var cljs$core$async$mix_$_state_machine__23316__auto____0 = (function (){
var statearr_26346 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26346[(0)] = cljs$core$async$mix_$_state_machine__23316__auto__);

(statearr_26346[(1)] = (1));

return statearr_26346;
});
var cljs$core$async$mix_$_state_machine__23316__auto____1 = (function (state_26306){
while(true){
var ret_value__23317__auto__ = (function (){try{while(true){
var result__23318__auto__ = switch__23315__auto__.call(null,state_26306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23318__auto__;
}
break;
}
}catch (e26347){var ex__23319__auto__ = e26347;
var statearr_26348_26382 = state_26306;
(statearr_26348_26382[(2)] = ex__23319__auto__);


if(cljs.core.seq.call(null,(state_26306[(4)]))){
var statearr_26349_26383 = state_26306;
(statearr_26349_26383[(1)] = cljs.core.first.call(null,(state_26306[(4)])));

} else {
throw ex__23319__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26384 = state_26306;
state_26306 = G__26384;
continue;
} else {
return ret_value__23317__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23316__auto__ = function(state_26306){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23316__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23316__auto____1.call(this,state_26306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23316__auto____0;
cljs$core$async$mix_$_state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23316__auto____1;
return cljs$core$async$mix_$_state_machine__23316__auto__;
})()
})();
var state__23442__auto__ = (function (){var statearr_26350 = f__23441__auto__.call(null);
(statearr_26350[(6)] = c__23440__auto___26351);

return statearr_26350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23442__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_26387 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_26387.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_26388 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_26388.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_26389 = (function() {
var G__26390 = null;
var G__26390__1 = (function (p){
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
var G__26390__2 = (function (p,v){
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
G__26390 = function(p,v){
switch(arguments.length){
case 1:
return G__26390__1.call(this,p);
case 2:
return G__26390__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26390.cljs$core$IFn$_invoke$arity$1 = G__26390__1;
G__26390.cljs$core$IFn$_invoke$arity$2 = G__26390__2;
return G__26390;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__26386 = arguments.length;
switch (G__26386) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_26389.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_26389.call(null,p,v);
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
var G__26394 = arguments.length;
switch (G__26394) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__26392_SHARP_){
if(cljs.core.truth_(p1__26392_SHARP_.call(null,topic))){
return p1__26392_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26392_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26395 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26395 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26396){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26396 = meta26396;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26397,meta26396__$1){
var self__ = this;
var _26397__$1 = this;
return (new cljs.core.async.t_cljs$core$async26395(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26396__$1));
}));

(cljs.core.async.t_cljs$core$async26395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26397){
var self__ = this;
var _26397__$1 = this;
return self__.meta26396;
}));

(cljs.core.async.t_cljs$core$async26395.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26395.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async26395.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26395.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async26395.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async26395.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async26395.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async26395.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26396","meta26396",2129826306,null)], null);
}));

(cljs.core.async.t_cljs$core$async26395.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26395.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26395");

(cljs.core.async.t_cljs$core$async26395.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async26395");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26395.
 */
cljs.core.async.__GT_t_cljs$core$async26395 = (function cljs$core$async$__GT_t_cljs$core$async26395(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26396){
return (new cljs.core.async.t_cljs$core$async26395(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26396));
});

}

return (new cljs.core.async.t_cljs$core$async26395(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23440__auto___26516 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23441__auto__ = (function (){var switch__23315__auto__ = (function (state_26469){
var state_val_26470 = (state_26469[(1)]);
if((state_val_26470 === (7))){
var inst_26465 = (state_26469[(2)]);
var state_26469__$1 = state_26469;
var statearr_26471_26517 = state_26469__$1;
(statearr_26471_26517[(2)] = inst_26465);

(statearr_26471_26517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26470 === (20))){
var state_26469__$1 = state_26469;
var statearr_26472_26518 = state_26469__$1;
(statearr_26472_26518[(2)] = null);

(statearr_26472_26518[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26470 === (1))){
var state_26469__$1 = state_26469;
var statearr_26473_26519 = state_26469__$1;
(statearr_26473_26519[(2)] = null);

(statearr_26473_26519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26470 === (24))){
var inst_26448 = (state_26469[(7)]);
var inst_26457 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26448);
var state_26469__$1 = state_26469;
var statearr_26474_26520 = state_26469__$1;
(statearr_26474_26520[(2)] = inst_26457);

(statearr_26474_26520[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26470 === (4))){
var inst_26400 = (state_26469[(8)]);
var inst_26400__$1 = (state_26469[(2)]);
var inst_26401 = (inst_26400__$1 == null);
var state_26469__$1 = (function (){var statearr_26475 = state_26469;
(statearr_26475[(8)] = inst_26400__$1);

return statearr_26475;
})();
if(cljs.core.truth_(inst_26401)){
var statearr_26476_26521 = state_26469__$1;
(statearr_26476_26521[(1)] = (5));

} else {
var statearr_26477_26522 = state_26469__$1;
(statearr_26477_26522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26470 === (15))){
var inst_26442 = (state_26469[(2)]);
var state_26469__$1 = state_26469;
var statearr_26478_26523 = state_26469__$1;
(statearr_26478_26523[(2)] = inst_26442);

(statearr_26478_26523[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26470 === (21))){
var inst_26462 = (state_26469[(2)]);
var state_26469__$1 = (function (){var statearr_26479 = state_26469;
(statearr_26479[(9)] = inst_26462);

return statearr_26479;
})();
var statearr_26480_26524 = state_26469__$1;
(statearr_26480_26524[(2)] = null);

(statearr_26480_26524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26470 === (13))){
var inst_26424 = (state_26469[(10)]);
var inst_26426 = cljs.core.chunked_seq_QMARK_.call(null,inst_26424);
var state_26469__$1 = state_26469;
if(inst_26426){
var statearr_26481_26525 = state_26469__$1;
(statearr_26481_26525[(1)] = (16));

} else {
var statearr_26482_26526 = state_26469__$1;
(statearr_26482_26526[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26470 === (22))){
var inst_26454 = (state_26469[(2)]);
var state_26469__$1 = state_26469;
if(cljs.core.truth_(inst_26454)){
var statearr_26483_26527 = state_26469__$1;
(statearr_26483_26527[(1)] = (23));

} else {
var statearr_26484_26528 = state_26469__$1;
(statearr_26484_26528[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26470 === (6))){
var inst_26450 = (state_26469[(11)]);
var inst_26400 = (state_26469[(8)]);
var inst_26448 = (state_26469[(7)]);
var inst_26448__$1 = topic_fn.call(null,inst_26400);
var inst_26449 = cljs.core.deref.call(null,mults);
var inst_26450__$1 = cljs.core.get.call(null,inst_26449,inst_26448__$1);
var state_26469__$1 = (function (){var statearr_26485 = state_26469;
(statearr_26485[(11)] = inst_26450__$1);

(statearr_26485[(7)] = inst_26448__$1);

return statearr_26485;
})();
if(cljs.core.truth_(inst_26450__$1)){
var statearr_26486_26529 = state_26469__$1;
(statearr_26486_26529[(1)] = (19));

} else {
var statearr_26487_26530 = state_26469__$1;
(statearr_26487_26530[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26470 === (25))){
var inst_26459 = (state_26469[(2)]);
var state_26469__$1 = state_26469;
var statearr_26488_26531 = state_26469__$1;
(statearr_26488_26531[(2)] = inst_26459);

(statearr_26488_26531[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26470 === (17))){
var inst_26424 = (state_26469[(10)]);
var inst_26433 = cljs.core.first.call(null,inst_26424);
var inst_26434 = cljs.core.async.muxch_STAR_.call(null,inst_26433);
var inst_26435 = cljs.core.async.close_BANG_.call(null,inst_26434);
var inst_26436 = cljs.core.next.call(null,inst_26424);
var inst_26410 = inst_26436;
var inst_26411 = null;
var inst_26412 = (0);
var inst_26413 = (0);
var state_26469__$1 = (function (){var statearr_26489 = state_26469;
(statearr_26489[(12)] = inst_26412);

(statearr_26489[(13)] = inst_26411);

(statearr_26489[(14)] = inst_26413);

(statearr_26489[(15)] = inst_26435);

(statearr_26489[(16)] = inst_26410);

return statearr_26489;
})();
var statearr_26490_26532 = state_26469__$1;
(statearr_26490_26532[(2)] = null);

(statearr_26490_26532[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26470 === (3))){
var inst_26467 = (state_26469[(2)]);
var state_26469__$1 = state_26469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26469__$1,inst_26467);
} else {
if((state_val_26470 === (12))){
var inst_26444 = (state_26469[(2)]);
var state_26469__$1 = state_26469;
var statearr_26491_26533 = state_26469__$1;
(statearr_26491_26533[(2)] = inst_26444);

(statearr_26491_26533[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26470 === (2))){
var state_26469__$1 = state_26469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26469__$1,(4),ch);
} else {
if((state_val_26470 === (23))){
var state_26469__$1 = state_26469;
var statearr_26492_26534 = state_26469__$1;
(statearr_26492_26534[(2)] = null);

(statearr_26492_26534[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26470 === (19))){
var inst_26450 = (state_26469[(11)]);
var inst_26400 = (state_26469[(8)]);
var inst_26452 = cljs.core.async.muxch_STAR_.call(null,inst_26450);
var state_26469__$1 = state_26469;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26469__$1,(22),inst_26452,inst_26400);
} else {
if((state_val_26470 === (11))){
var inst_26424 = (state_26469[(10)]);
var inst_26410 = (state_26469[(16)]);
var inst_26424__$1 = cljs.core.seq.call(null,inst_26410);
var state_26469__$1 = (function (){var statearr_26493 = state_26469;
(statearr_26493[(10)] = inst_26424__$1);

return statearr_26493;
})();
if(inst_26424__$1){
var statearr_26494_26535 = state_26469__$1;
(statearr_26494_26535[(1)] = (13));

} else {
var statearr_26495_26536 = state_26469__$1;
(statearr_26495_26536[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26470 === (9))){
var inst_26446 = (state_26469[(2)]);
var state_26469__$1 = state_26469;
var statearr_26496_26537 = state_26469__$1;
(statearr_26496_26537[(2)] = inst_26446);

(statearr_26496_26537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26470 === (5))){
var inst_26407 = cljs.core.deref.call(null,mults);
var inst_26408 = cljs.core.vals.call(null,inst_26407);
var inst_26409 = cljs.core.seq.call(null,inst_26408);
var inst_26410 = inst_26409;
var inst_26411 = null;
var inst_26412 = (0);
var inst_26413 = (0);
var state_26469__$1 = (function (){var statearr_26497 = state_26469;
(statearr_26497[(12)] = inst_26412);

(statearr_26497[(13)] = inst_26411);

(statearr_26497[(14)] = inst_26413);

(statearr_26497[(16)] = inst_26410);

return statearr_26497;
})();
var statearr_26498_26538 = state_26469__$1;
(statearr_26498_26538[(2)] = null);

(statearr_26498_26538[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26470 === (14))){
var state_26469__$1 = state_26469;
var statearr_26502_26539 = state_26469__$1;
(statearr_26502_26539[(2)] = null);

(statearr_26502_26539[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26470 === (16))){
var inst_26424 = (state_26469[(10)]);
var inst_26428 = cljs.core.chunk_first.call(null,inst_26424);
var inst_26429 = cljs.core.chunk_rest.call(null,inst_26424);
var inst_26430 = cljs.core.count.call(null,inst_26428);
var inst_26410 = inst_26429;
var inst_26411 = inst_26428;
var inst_26412 = inst_26430;
var inst_26413 = (0);
var state_26469__$1 = (function (){var statearr_26503 = state_26469;
(statearr_26503[(12)] = inst_26412);

(statearr_26503[(13)] = inst_26411);

(statearr_26503[(14)] = inst_26413);

(statearr_26503[(16)] = inst_26410);

return statearr_26503;
})();
var statearr_26504_26540 = state_26469__$1;
(statearr_26504_26540[(2)] = null);

(statearr_26504_26540[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26470 === (10))){
var inst_26412 = (state_26469[(12)]);
var inst_26411 = (state_26469[(13)]);
var inst_26413 = (state_26469[(14)]);
var inst_26410 = (state_26469[(16)]);
var inst_26418 = cljs.core._nth.call(null,inst_26411,inst_26413);
var inst_26419 = cljs.core.async.muxch_STAR_.call(null,inst_26418);
var inst_26420 = cljs.core.async.close_BANG_.call(null,inst_26419);
var inst_26421 = (inst_26413 + (1));
var tmp26499 = inst_26412;
var tmp26500 = inst_26411;
var tmp26501 = inst_26410;
var inst_26410__$1 = tmp26501;
var inst_26411__$1 = tmp26500;
var inst_26412__$1 = tmp26499;
var inst_26413__$1 = inst_26421;
var state_26469__$1 = (function (){var statearr_26505 = state_26469;
(statearr_26505[(12)] = inst_26412__$1);

(statearr_26505[(17)] = inst_26420);

(statearr_26505[(13)] = inst_26411__$1);

(statearr_26505[(14)] = inst_26413__$1);

(statearr_26505[(16)] = inst_26410__$1);

return statearr_26505;
})();
var statearr_26506_26541 = state_26469__$1;
(statearr_26506_26541[(2)] = null);

(statearr_26506_26541[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26470 === (18))){
var inst_26439 = (state_26469[(2)]);
var state_26469__$1 = state_26469;
var statearr_26507_26542 = state_26469__$1;
(statearr_26507_26542[(2)] = inst_26439);

(statearr_26507_26542[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26470 === (8))){
var inst_26412 = (state_26469[(12)]);
var inst_26413 = (state_26469[(14)]);
var inst_26415 = (inst_26413 < inst_26412);
var inst_26416 = inst_26415;
var state_26469__$1 = state_26469;
if(cljs.core.truth_(inst_26416)){
var statearr_26508_26543 = state_26469__$1;
(statearr_26508_26543[(1)] = (10));

} else {
var statearr_26509_26544 = state_26469__$1;
(statearr_26509_26544[(1)] = (11));

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
var cljs$core$async$state_machine__23316__auto__ = null;
var cljs$core$async$state_machine__23316__auto____0 = (function (){
var statearr_26510 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26510[(0)] = cljs$core$async$state_machine__23316__auto__);

(statearr_26510[(1)] = (1));

return statearr_26510;
});
var cljs$core$async$state_machine__23316__auto____1 = (function (state_26469){
while(true){
var ret_value__23317__auto__ = (function (){try{while(true){
var result__23318__auto__ = switch__23315__auto__.call(null,state_26469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23318__auto__;
}
break;
}
}catch (e26511){var ex__23319__auto__ = e26511;
var statearr_26512_26545 = state_26469;
(statearr_26512_26545[(2)] = ex__23319__auto__);


if(cljs.core.seq.call(null,(state_26469[(4)]))){
var statearr_26513_26546 = state_26469;
(statearr_26513_26546[(1)] = cljs.core.first.call(null,(state_26469[(4)])));

} else {
throw ex__23319__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26547 = state_26469;
state_26469 = G__26547;
continue;
} else {
return ret_value__23317__auto__;
}
break;
}
});
cljs$core$async$state_machine__23316__auto__ = function(state_26469){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23316__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23316__auto____1.call(this,state_26469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23316__auto____0;
cljs$core$async$state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23316__auto____1;
return cljs$core$async$state_machine__23316__auto__;
})()
})();
var state__23442__auto__ = (function (){var statearr_26514 = f__23441__auto__.call(null);
(statearr_26514[(6)] = c__23440__auto___26516);

return statearr_26514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23442__auto__);
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
var G__26549 = arguments.length;
switch (G__26549) {
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
var G__26552 = arguments.length;
switch (G__26552) {
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
var G__26555 = arguments.length;
switch (G__26555) {
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
var c__23440__auto___26633 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23441__auto__ = (function (){var switch__23315__auto__ = (function (state_26598){
var state_val_26599 = (state_26598[(1)]);
if((state_val_26599 === (7))){
var state_26598__$1 = state_26598;
var statearr_26600_26634 = state_26598__$1;
(statearr_26600_26634[(2)] = null);

(statearr_26600_26634[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26599 === (1))){
var state_26598__$1 = state_26598;
var statearr_26601_26635 = state_26598__$1;
(statearr_26601_26635[(2)] = null);

(statearr_26601_26635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26599 === (4))){
var inst_26558 = (state_26598[(7)]);
var inst_26559 = (state_26598[(8)]);
var inst_26561 = (inst_26559 < inst_26558);
var state_26598__$1 = state_26598;
if(cljs.core.truth_(inst_26561)){
var statearr_26602_26636 = state_26598__$1;
(statearr_26602_26636[(1)] = (6));

} else {
var statearr_26603_26637 = state_26598__$1;
(statearr_26603_26637[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26599 === (15))){
var inst_26584 = (state_26598[(9)]);
var inst_26589 = cljs.core.apply.call(null,f,inst_26584);
var state_26598__$1 = state_26598;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26598__$1,(17),out,inst_26589);
} else {
if((state_val_26599 === (13))){
var inst_26584 = (state_26598[(9)]);
var inst_26584__$1 = (state_26598[(2)]);
var inst_26585 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26584__$1);
var state_26598__$1 = (function (){var statearr_26604 = state_26598;
(statearr_26604[(9)] = inst_26584__$1);

return statearr_26604;
})();
if(cljs.core.truth_(inst_26585)){
var statearr_26605_26638 = state_26598__$1;
(statearr_26605_26638[(1)] = (14));

} else {
var statearr_26606_26639 = state_26598__$1;
(statearr_26606_26639[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26599 === (6))){
var state_26598__$1 = state_26598;
var statearr_26607_26640 = state_26598__$1;
(statearr_26607_26640[(2)] = null);

(statearr_26607_26640[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26599 === (17))){
var inst_26591 = (state_26598[(2)]);
var state_26598__$1 = (function (){var statearr_26609 = state_26598;
(statearr_26609[(10)] = inst_26591);

return statearr_26609;
})();
var statearr_26610_26641 = state_26598__$1;
(statearr_26610_26641[(2)] = null);

(statearr_26610_26641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26599 === (3))){
var inst_26596 = (state_26598[(2)]);
var state_26598__$1 = state_26598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26598__$1,inst_26596);
} else {
if((state_val_26599 === (12))){
var _ = (function (){var statearr_26611 = state_26598;
(statearr_26611[(4)] = cljs.core.rest.call(null,(state_26598[(4)])));

return statearr_26611;
})();
var state_26598__$1 = state_26598;
var ex26608 = (state_26598__$1[(2)]);
var statearr_26612_26642 = state_26598__$1;
(statearr_26612_26642[(5)] = ex26608);


if((ex26608 instanceof Object)){
var statearr_26613_26643 = state_26598__$1;
(statearr_26613_26643[(1)] = (11));

(statearr_26613_26643[(5)] = null);

} else {
throw ex26608;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26599 === (2))){
var inst_26557 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26558 = cnt;
var inst_26559 = (0);
var state_26598__$1 = (function (){var statearr_26614 = state_26598;
(statearr_26614[(7)] = inst_26558);

(statearr_26614[(8)] = inst_26559);

(statearr_26614[(11)] = inst_26557);

return statearr_26614;
})();
var statearr_26615_26644 = state_26598__$1;
(statearr_26615_26644[(2)] = null);

(statearr_26615_26644[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26599 === (11))){
var inst_26563 = (state_26598[(2)]);
var inst_26564 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26598__$1 = (function (){var statearr_26616 = state_26598;
(statearr_26616[(12)] = inst_26563);

return statearr_26616;
})();
var statearr_26617_26645 = state_26598__$1;
(statearr_26617_26645[(2)] = inst_26564);

(statearr_26617_26645[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26599 === (9))){
var inst_26559 = (state_26598[(8)]);
var _ = (function (){var statearr_26618 = state_26598;
(statearr_26618[(4)] = cljs.core.cons.call(null,(12),(state_26598[(4)])));

return statearr_26618;
})();
var inst_26570 = chs__$1.call(null,inst_26559);
var inst_26571 = done.call(null,inst_26559);
var inst_26572 = cljs.core.async.take_BANG_.call(null,inst_26570,inst_26571);
var ___$1 = (function (){var statearr_26619 = state_26598;
(statearr_26619[(4)] = cljs.core.rest.call(null,(state_26598[(4)])));

return statearr_26619;
})();
var state_26598__$1 = state_26598;
var statearr_26620_26646 = state_26598__$1;
(statearr_26620_26646[(2)] = inst_26572);

(statearr_26620_26646[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26599 === (5))){
var inst_26582 = (state_26598[(2)]);
var state_26598__$1 = (function (){var statearr_26621 = state_26598;
(statearr_26621[(13)] = inst_26582);

return statearr_26621;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26598__$1,(13),dchan);
} else {
if((state_val_26599 === (14))){
var inst_26587 = cljs.core.async.close_BANG_.call(null,out);
var state_26598__$1 = state_26598;
var statearr_26622_26647 = state_26598__$1;
(statearr_26622_26647[(2)] = inst_26587);

(statearr_26622_26647[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26599 === (16))){
var inst_26594 = (state_26598[(2)]);
var state_26598__$1 = state_26598;
var statearr_26623_26648 = state_26598__$1;
(statearr_26623_26648[(2)] = inst_26594);

(statearr_26623_26648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26599 === (10))){
var inst_26559 = (state_26598[(8)]);
var inst_26575 = (state_26598[(2)]);
var inst_26576 = (inst_26559 + (1));
var inst_26559__$1 = inst_26576;
var state_26598__$1 = (function (){var statearr_26624 = state_26598;
(statearr_26624[(14)] = inst_26575);

(statearr_26624[(8)] = inst_26559__$1);

return statearr_26624;
})();
var statearr_26625_26649 = state_26598__$1;
(statearr_26625_26649[(2)] = null);

(statearr_26625_26649[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26599 === (8))){
var inst_26580 = (state_26598[(2)]);
var state_26598__$1 = state_26598;
var statearr_26626_26650 = state_26598__$1;
(statearr_26626_26650[(2)] = inst_26580);

(statearr_26626_26650[(1)] = (5));


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
var cljs$core$async$state_machine__23316__auto__ = null;
var cljs$core$async$state_machine__23316__auto____0 = (function (){
var statearr_26627 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26627[(0)] = cljs$core$async$state_machine__23316__auto__);

(statearr_26627[(1)] = (1));

return statearr_26627;
});
var cljs$core$async$state_machine__23316__auto____1 = (function (state_26598){
while(true){
var ret_value__23317__auto__ = (function (){try{while(true){
var result__23318__auto__ = switch__23315__auto__.call(null,state_26598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23318__auto__;
}
break;
}
}catch (e26628){var ex__23319__auto__ = e26628;
var statearr_26629_26651 = state_26598;
(statearr_26629_26651[(2)] = ex__23319__auto__);


if(cljs.core.seq.call(null,(state_26598[(4)]))){
var statearr_26630_26652 = state_26598;
(statearr_26630_26652[(1)] = cljs.core.first.call(null,(state_26598[(4)])));

} else {
throw ex__23319__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26653 = state_26598;
state_26598 = G__26653;
continue;
} else {
return ret_value__23317__auto__;
}
break;
}
});
cljs$core$async$state_machine__23316__auto__ = function(state_26598){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23316__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23316__auto____1.call(this,state_26598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23316__auto____0;
cljs$core$async$state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23316__auto____1;
return cljs$core$async$state_machine__23316__auto__;
})()
})();
var state__23442__auto__ = (function (){var statearr_26631 = f__23441__auto__.call(null);
(statearr_26631[(6)] = c__23440__auto___26633);

return statearr_26631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23442__auto__);
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
var G__26656 = arguments.length;
switch (G__26656) {
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
var c__23440__auto___26711 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23441__auto__ = (function (){var switch__23315__auto__ = (function (state_26688){
var state_val_26689 = (state_26688[(1)]);
if((state_val_26689 === (7))){
var inst_26668 = (state_26688[(7)]);
var inst_26667 = (state_26688[(8)]);
var inst_26667__$1 = (state_26688[(2)]);
var inst_26668__$1 = cljs.core.nth.call(null,inst_26667__$1,(0),null);
var inst_26669 = cljs.core.nth.call(null,inst_26667__$1,(1),null);
var inst_26670 = (inst_26668__$1 == null);
var state_26688__$1 = (function (){var statearr_26690 = state_26688;
(statearr_26690[(7)] = inst_26668__$1);

(statearr_26690[(8)] = inst_26667__$1);

(statearr_26690[(9)] = inst_26669);

return statearr_26690;
})();
if(cljs.core.truth_(inst_26670)){
var statearr_26691_26712 = state_26688__$1;
(statearr_26691_26712[(1)] = (8));

} else {
var statearr_26692_26713 = state_26688__$1;
(statearr_26692_26713[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26689 === (1))){
var inst_26657 = cljs.core.vec.call(null,chs);
var inst_26658 = inst_26657;
var state_26688__$1 = (function (){var statearr_26693 = state_26688;
(statearr_26693[(10)] = inst_26658);

return statearr_26693;
})();
var statearr_26694_26714 = state_26688__$1;
(statearr_26694_26714[(2)] = null);

(statearr_26694_26714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26689 === (4))){
var inst_26658 = (state_26688[(10)]);
var state_26688__$1 = state_26688;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26688__$1,(7),inst_26658);
} else {
if((state_val_26689 === (6))){
var inst_26684 = (state_26688[(2)]);
var state_26688__$1 = state_26688;
var statearr_26695_26715 = state_26688__$1;
(statearr_26695_26715[(2)] = inst_26684);

(statearr_26695_26715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26689 === (3))){
var inst_26686 = (state_26688[(2)]);
var state_26688__$1 = state_26688;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26688__$1,inst_26686);
} else {
if((state_val_26689 === (2))){
var inst_26658 = (state_26688[(10)]);
var inst_26660 = cljs.core.count.call(null,inst_26658);
var inst_26661 = (inst_26660 > (0));
var state_26688__$1 = state_26688;
if(cljs.core.truth_(inst_26661)){
var statearr_26697_26716 = state_26688__$1;
(statearr_26697_26716[(1)] = (4));

} else {
var statearr_26698_26717 = state_26688__$1;
(statearr_26698_26717[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26689 === (11))){
var inst_26658 = (state_26688[(10)]);
var inst_26677 = (state_26688[(2)]);
var tmp26696 = inst_26658;
var inst_26658__$1 = tmp26696;
var state_26688__$1 = (function (){var statearr_26699 = state_26688;
(statearr_26699[(11)] = inst_26677);

(statearr_26699[(10)] = inst_26658__$1);

return statearr_26699;
})();
var statearr_26700_26718 = state_26688__$1;
(statearr_26700_26718[(2)] = null);

(statearr_26700_26718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26689 === (9))){
var inst_26668 = (state_26688[(7)]);
var state_26688__$1 = state_26688;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26688__$1,(11),out,inst_26668);
} else {
if((state_val_26689 === (5))){
var inst_26682 = cljs.core.async.close_BANG_.call(null,out);
var state_26688__$1 = state_26688;
var statearr_26701_26719 = state_26688__$1;
(statearr_26701_26719[(2)] = inst_26682);

(statearr_26701_26719[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26689 === (10))){
var inst_26680 = (state_26688[(2)]);
var state_26688__$1 = state_26688;
var statearr_26702_26720 = state_26688__$1;
(statearr_26702_26720[(2)] = inst_26680);

(statearr_26702_26720[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26689 === (8))){
var inst_26668 = (state_26688[(7)]);
var inst_26667 = (state_26688[(8)]);
var inst_26669 = (state_26688[(9)]);
var inst_26658 = (state_26688[(10)]);
var inst_26672 = (function (){var cs = inst_26658;
var vec__26663 = inst_26667;
var v = inst_26668;
var c = inst_26669;
return (function (p1__26654_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26654_SHARP_);
});
})();
var inst_26673 = cljs.core.filterv.call(null,inst_26672,inst_26658);
var inst_26658__$1 = inst_26673;
var state_26688__$1 = (function (){var statearr_26703 = state_26688;
(statearr_26703[(10)] = inst_26658__$1);

return statearr_26703;
})();
var statearr_26704_26721 = state_26688__$1;
(statearr_26704_26721[(2)] = null);

(statearr_26704_26721[(1)] = (2));


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
var cljs$core$async$state_machine__23316__auto__ = null;
var cljs$core$async$state_machine__23316__auto____0 = (function (){
var statearr_26705 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26705[(0)] = cljs$core$async$state_machine__23316__auto__);

(statearr_26705[(1)] = (1));

return statearr_26705;
});
var cljs$core$async$state_machine__23316__auto____1 = (function (state_26688){
while(true){
var ret_value__23317__auto__ = (function (){try{while(true){
var result__23318__auto__ = switch__23315__auto__.call(null,state_26688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23318__auto__;
}
break;
}
}catch (e26706){var ex__23319__auto__ = e26706;
var statearr_26707_26722 = state_26688;
(statearr_26707_26722[(2)] = ex__23319__auto__);


if(cljs.core.seq.call(null,(state_26688[(4)]))){
var statearr_26708_26723 = state_26688;
(statearr_26708_26723[(1)] = cljs.core.first.call(null,(state_26688[(4)])));

} else {
throw ex__23319__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26724 = state_26688;
state_26688 = G__26724;
continue;
} else {
return ret_value__23317__auto__;
}
break;
}
});
cljs$core$async$state_machine__23316__auto__ = function(state_26688){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23316__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23316__auto____1.call(this,state_26688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23316__auto____0;
cljs$core$async$state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23316__auto____1;
return cljs$core$async$state_machine__23316__auto__;
})()
})();
var state__23442__auto__ = (function (){var statearr_26709 = f__23441__auto__.call(null);
(statearr_26709[(6)] = c__23440__auto___26711);

return statearr_26709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23442__auto__);
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
var G__26726 = arguments.length;
switch (G__26726) {
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
var c__23440__auto___26772 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23441__auto__ = (function (){var switch__23315__auto__ = (function (state_26750){
var state_val_26751 = (state_26750[(1)]);
if((state_val_26751 === (7))){
var inst_26732 = (state_26750[(7)]);
var inst_26732__$1 = (state_26750[(2)]);
var inst_26733 = (inst_26732__$1 == null);
var inst_26734 = cljs.core.not.call(null,inst_26733);
var state_26750__$1 = (function (){var statearr_26752 = state_26750;
(statearr_26752[(7)] = inst_26732__$1);

return statearr_26752;
})();
if(inst_26734){
var statearr_26753_26773 = state_26750__$1;
(statearr_26753_26773[(1)] = (8));

} else {
var statearr_26754_26774 = state_26750__$1;
(statearr_26754_26774[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (1))){
var inst_26727 = (0);
var state_26750__$1 = (function (){var statearr_26755 = state_26750;
(statearr_26755[(8)] = inst_26727);

return statearr_26755;
})();
var statearr_26756_26775 = state_26750__$1;
(statearr_26756_26775[(2)] = null);

(statearr_26756_26775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (4))){
var state_26750__$1 = state_26750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26750__$1,(7),ch);
} else {
if((state_val_26751 === (6))){
var inst_26745 = (state_26750[(2)]);
var state_26750__$1 = state_26750;
var statearr_26757_26776 = state_26750__$1;
(statearr_26757_26776[(2)] = inst_26745);

(statearr_26757_26776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (3))){
var inst_26747 = (state_26750[(2)]);
var inst_26748 = cljs.core.async.close_BANG_.call(null,out);
var state_26750__$1 = (function (){var statearr_26758 = state_26750;
(statearr_26758[(9)] = inst_26747);

return statearr_26758;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26750__$1,inst_26748);
} else {
if((state_val_26751 === (2))){
var inst_26727 = (state_26750[(8)]);
var inst_26729 = (inst_26727 < n);
var state_26750__$1 = state_26750;
if(cljs.core.truth_(inst_26729)){
var statearr_26759_26777 = state_26750__$1;
(statearr_26759_26777[(1)] = (4));

} else {
var statearr_26760_26778 = state_26750__$1;
(statearr_26760_26778[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (11))){
var inst_26727 = (state_26750[(8)]);
var inst_26737 = (state_26750[(2)]);
var inst_26738 = (inst_26727 + (1));
var inst_26727__$1 = inst_26738;
var state_26750__$1 = (function (){var statearr_26761 = state_26750;
(statearr_26761[(10)] = inst_26737);

(statearr_26761[(8)] = inst_26727__$1);

return statearr_26761;
})();
var statearr_26762_26779 = state_26750__$1;
(statearr_26762_26779[(2)] = null);

(statearr_26762_26779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (9))){
var state_26750__$1 = state_26750;
var statearr_26763_26780 = state_26750__$1;
(statearr_26763_26780[(2)] = null);

(statearr_26763_26780[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (5))){
var state_26750__$1 = state_26750;
var statearr_26764_26781 = state_26750__$1;
(statearr_26764_26781[(2)] = null);

(statearr_26764_26781[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (10))){
var inst_26742 = (state_26750[(2)]);
var state_26750__$1 = state_26750;
var statearr_26765_26782 = state_26750__$1;
(statearr_26765_26782[(2)] = inst_26742);

(statearr_26765_26782[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (8))){
var inst_26732 = (state_26750[(7)]);
var state_26750__$1 = state_26750;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26750__$1,(11),out,inst_26732);
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
var cljs$core$async$state_machine__23316__auto__ = null;
var cljs$core$async$state_machine__23316__auto____0 = (function (){
var statearr_26766 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26766[(0)] = cljs$core$async$state_machine__23316__auto__);

(statearr_26766[(1)] = (1));

return statearr_26766;
});
var cljs$core$async$state_machine__23316__auto____1 = (function (state_26750){
while(true){
var ret_value__23317__auto__ = (function (){try{while(true){
var result__23318__auto__ = switch__23315__auto__.call(null,state_26750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23318__auto__;
}
break;
}
}catch (e26767){var ex__23319__auto__ = e26767;
var statearr_26768_26783 = state_26750;
(statearr_26768_26783[(2)] = ex__23319__auto__);


if(cljs.core.seq.call(null,(state_26750[(4)]))){
var statearr_26769_26784 = state_26750;
(statearr_26769_26784[(1)] = cljs.core.first.call(null,(state_26750[(4)])));

} else {
throw ex__23319__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26785 = state_26750;
state_26750 = G__26785;
continue;
} else {
return ret_value__23317__auto__;
}
break;
}
});
cljs$core$async$state_machine__23316__auto__ = function(state_26750){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23316__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23316__auto____1.call(this,state_26750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23316__auto____0;
cljs$core$async$state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23316__auto____1;
return cljs$core$async$state_machine__23316__auto__;
})()
})();
var state__23442__auto__ = (function (){var statearr_26770 = f__23441__auto__.call(null);
(statearr_26770[(6)] = c__23440__auto___26772);

return statearr_26770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23442__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26787 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26787 = (function (f,ch,meta26788){
this.f = f;
this.ch = ch;
this.meta26788 = meta26788;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26789,meta26788__$1){
var self__ = this;
var _26789__$1 = this;
return (new cljs.core.async.t_cljs$core$async26787(self__.f,self__.ch,meta26788__$1));
}));

(cljs.core.async.t_cljs$core$async26787.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26789){
var self__ = this;
var _26789__$1 = this;
return self__.meta26788;
}));

(cljs.core.async.t_cljs$core$async26787.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26787.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async26787.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async26787.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26787.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26790 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26790 = (function (f,ch,meta26788,_,fn1,meta26791){
this.f = f;
this.ch = ch;
this.meta26788 = meta26788;
this._ = _;
this.fn1 = fn1;
this.meta26791 = meta26791;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26792,meta26791__$1){
var self__ = this;
var _26792__$1 = this;
return (new cljs.core.async.t_cljs$core$async26790(self__.f,self__.ch,self__.meta26788,self__._,self__.fn1,meta26791__$1));
}));

(cljs.core.async.t_cljs$core$async26790.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26792){
var self__ = this;
var _26792__$1 = this;
return self__.meta26791;
}));

(cljs.core.async.t_cljs$core$async26790.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26790.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async26790.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26790.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__26786_SHARP_){
return f1.call(null,(((p1__26786_SHARP_ == null))?null:self__.f.call(null,p1__26786_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async26790.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26788","meta26788",-1596918922,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26787","cljs.core.async/t_cljs$core$async26787",719634071,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26791","meta26791",-1467222175,null)], null);
}));

(cljs.core.async.t_cljs$core$async26790.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26790.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26790");

(cljs.core.async.t_cljs$core$async26790.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async26790");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26790.
 */
cljs.core.async.__GT_t_cljs$core$async26790 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26790(f__$1,ch__$1,meta26788__$1,___$2,fn1__$1,meta26791){
return (new cljs.core.async.t_cljs$core$async26790(f__$1,ch__$1,meta26788__$1,___$2,fn1__$1,meta26791));
});

}

return (new cljs.core.async.t_cljs$core$async26790(self__.f,self__.ch,self__.meta26788,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async26787.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26787.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async26787.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26788","meta26788",-1596918922,null)], null);
}));

(cljs.core.async.t_cljs$core$async26787.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26787.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26787");

(cljs.core.async.t_cljs$core$async26787.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async26787");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26787.
 */
cljs.core.async.__GT_t_cljs$core$async26787 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26787(f__$1,ch__$1,meta26788){
return (new cljs.core.async.t_cljs$core$async26787(f__$1,ch__$1,meta26788));
});

}

return (new cljs.core.async.t_cljs$core$async26787(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26793 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26793 = (function (f,ch,meta26794){
this.f = f;
this.ch = ch;
this.meta26794 = meta26794;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26795,meta26794__$1){
var self__ = this;
var _26795__$1 = this;
return (new cljs.core.async.t_cljs$core$async26793(self__.f,self__.ch,meta26794__$1));
}));

(cljs.core.async.t_cljs$core$async26793.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26795){
var self__ = this;
var _26795__$1 = this;
return self__.meta26794;
}));

(cljs.core.async.t_cljs$core$async26793.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26793.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async26793.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26793.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async26793.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26793.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async26793.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26794","meta26794",-1050717068,null)], null);
}));

(cljs.core.async.t_cljs$core$async26793.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26793.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26793");

(cljs.core.async.t_cljs$core$async26793.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async26793");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26793.
 */
cljs.core.async.__GT_t_cljs$core$async26793 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26793(f__$1,ch__$1,meta26794){
return (new cljs.core.async.t_cljs$core$async26793(f__$1,ch__$1,meta26794));
});

}

return (new cljs.core.async.t_cljs$core$async26793(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26796 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26796 = (function (p,ch,meta26797){
this.p = p;
this.ch = ch;
this.meta26797 = meta26797;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26798,meta26797__$1){
var self__ = this;
var _26798__$1 = this;
return (new cljs.core.async.t_cljs$core$async26796(self__.p,self__.ch,meta26797__$1));
}));

(cljs.core.async.t_cljs$core$async26796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26798){
var self__ = this;
var _26798__$1 = this;
return self__.meta26797;
}));

(cljs.core.async.t_cljs$core$async26796.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26796.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async26796.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async26796.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26796.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async26796.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26796.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async26796.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26797","meta26797",1106750986,null)], null);
}));

(cljs.core.async.t_cljs$core$async26796.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26796.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26796");

(cljs.core.async.t_cljs$core$async26796.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async26796");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26796.
 */
cljs.core.async.__GT_t_cljs$core$async26796 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26796(p__$1,ch__$1,meta26797){
return (new cljs.core.async.t_cljs$core$async26796(p__$1,ch__$1,meta26797));
});

}

return (new cljs.core.async.t_cljs$core$async26796(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__26800 = arguments.length;
switch (G__26800) {
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
var c__23440__auto___26841 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23441__auto__ = (function (){var switch__23315__auto__ = (function (state_26821){
var state_val_26822 = (state_26821[(1)]);
if((state_val_26822 === (7))){
var inst_26817 = (state_26821[(2)]);
var state_26821__$1 = state_26821;
var statearr_26823_26842 = state_26821__$1;
(statearr_26823_26842[(2)] = inst_26817);

(statearr_26823_26842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (1))){
var state_26821__$1 = state_26821;
var statearr_26824_26843 = state_26821__$1;
(statearr_26824_26843[(2)] = null);

(statearr_26824_26843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (4))){
var inst_26803 = (state_26821[(7)]);
var inst_26803__$1 = (state_26821[(2)]);
var inst_26804 = (inst_26803__$1 == null);
var state_26821__$1 = (function (){var statearr_26825 = state_26821;
(statearr_26825[(7)] = inst_26803__$1);

return statearr_26825;
})();
if(cljs.core.truth_(inst_26804)){
var statearr_26826_26844 = state_26821__$1;
(statearr_26826_26844[(1)] = (5));

} else {
var statearr_26827_26845 = state_26821__$1;
(statearr_26827_26845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (6))){
var inst_26803 = (state_26821[(7)]);
var inst_26808 = p.call(null,inst_26803);
var state_26821__$1 = state_26821;
if(cljs.core.truth_(inst_26808)){
var statearr_26828_26846 = state_26821__$1;
(statearr_26828_26846[(1)] = (8));

} else {
var statearr_26829_26847 = state_26821__$1;
(statearr_26829_26847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (3))){
var inst_26819 = (state_26821[(2)]);
var state_26821__$1 = state_26821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26821__$1,inst_26819);
} else {
if((state_val_26822 === (2))){
var state_26821__$1 = state_26821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26821__$1,(4),ch);
} else {
if((state_val_26822 === (11))){
var inst_26811 = (state_26821[(2)]);
var state_26821__$1 = state_26821;
var statearr_26830_26848 = state_26821__$1;
(statearr_26830_26848[(2)] = inst_26811);

(statearr_26830_26848[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (9))){
var state_26821__$1 = state_26821;
var statearr_26831_26849 = state_26821__$1;
(statearr_26831_26849[(2)] = null);

(statearr_26831_26849[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (5))){
var inst_26806 = cljs.core.async.close_BANG_.call(null,out);
var state_26821__$1 = state_26821;
var statearr_26832_26850 = state_26821__$1;
(statearr_26832_26850[(2)] = inst_26806);

(statearr_26832_26850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (10))){
var inst_26814 = (state_26821[(2)]);
var state_26821__$1 = (function (){var statearr_26833 = state_26821;
(statearr_26833[(8)] = inst_26814);

return statearr_26833;
})();
var statearr_26834_26851 = state_26821__$1;
(statearr_26834_26851[(2)] = null);

(statearr_26834_26851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26822 === (8))){
var inst_26803 = (state_26821[(7)]);
var state_26821__$1 = state_26821;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26821__$1,(11),out,inst_26803);
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
var cljs$core$async$state_machine__23316__auto__ = null;
var cljs$core$async$state_machine__23316__auto____0 = (function (){
var statearr_26835 = [null,null,null,null,null,null,null,null,null];
(statearr_26835[(0)] = cljs$core$async$state_machine__23316__auto__);

(statearr_26835[(1)] = (1));

return statearr_26835;
});
var cljs$core$async$state_machine__23316__auto____1 = (function (state_26821){
while(true){
var ret_value__23317__auto__ = (function (){try{while(true){
var result__23318__auto__ = switch__23315__auto__.call(null,state_26821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23318__auto__;
}
break;
}
}catch (e26836){var ex__23319__auto__ = e26836;
var statearr_26837_26852 = state_26821;
(statearr_26837_26852[(2)] = ex__23319__auto__);


if(cljs.core.seq.call(null,(state_26821[(4)]))){
var statearr_26838_26853 = state_26821;
(statearr_26838_26853[(1)] = cljs.core.first.call(null,(state_26821[(4)])));

} else {
throw ex__23319__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26854 = state_26821;
state_26821 = G__26854;
continue;
} else {
return ret_value__23317__auto__;
}
break;
}
});
cljs$core$async$state_machine__23316__auto__ = function(state_26821){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23316__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23316__auto____1.call(this,state_26821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23316__auto____0;
cljs$core$async$state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23316__auto____1;
return cljs$core$async$state_machine__23316__auto__;
})()
})();
var state__23442__auto__ = (function (){var statearr_26839 = f__23441__auto__.call(null);
(statearr_26839[(6)] = c__23440__auto___26841);

return statearr_26839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23442__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__26856 = arguments.length;
switch (G__26856) {
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
var c__23440__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23441__auto__ = (function (){var switch__23315__auto__ = (function (state_26919){
var state_val_26920 = (state_26919[(1)]);
if((state_val_26920 === (7))){
var inst_26915 = (state_26919[(2)]);
var state_26919__$1 = state_26919;
var statearr_26921_26960 = state_26919__$1;
(statearr_26921_26960[(2)] = inst_26915);

(statearr_26921_26960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (20))){
var inst_26885 = (state_26919[(7)]);
var inst_26896 = (state_26919[(2)]);
var inst_26897 = cljs.core.next.call(null,inst_26885);
var inst_26871 = inst_26897;
var inst_26872 = null;
var inst_26873 = (0);
var inst_26874 = (0);
var state_26919__$1 = (function (){var statearr_26922 = state_26919;
(statearr_26922[(8)] = inst_26873);

(statearr_26922[(9)] = inst_26896);

(statearr_26922[(10)] = inst_26872);

(statearr_26922[(11)] = inst_26874);

(statearr_26922[(12)] = inst_26871);

return statearr_26922;
})();
var statearr_26923_26961 = state_26919__$1;
(statearr_26923_26961[(2)] = null);

(statearr_26923_26961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (1))){
var state_26919__$1 = state_26919;
var statearr_26924_26962 = state_26919__$1;
(statearr_26924_26962[(2)] = null);

(statearr_26924_26962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (4))){
var inst_26860 = (state_26919[(13)]);
var inst_26860__$1 = (state_26919[(2)]);
var inst_26861 = (inst_26860__$1 == null);
var state_26919__$1 = (function (){var statearr_26925 = state_26919;
(statearr_26925[(13)] = inst_26860__$1);

return statearr_26925;
})();
if(cljs.core.truth_(inst_26861)){
var statearr_26926_26963 = state_26919__$1;
(statearr_26926_26963[(1)] = (5));

} else {
var statearr_26927_26964 = state_26919__$1;
(statearr_26927_26964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (15))){
var state_26919__$1 = state_26919;
var statearr_26931_26965 = state_26919__$1;
(statearr_26931_26965[(2)] = null);

(statearr_26931_26965[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (21))){
var state_26919__$1 = state_26919;
var statearr_26932_26966 = state_26919__$1;
(statearr_26932_26966[(2)] = null);

(statearr_26932_26966[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (13))){
var inst_26873 = (state_26919[(8)]);
var inst_26872 = (state_26919[(10)]);
var inst_26874 = (state_26919[(11)]);
var inst_26871 = (state_26919[(12)]);
var inst_26881 = (state_26919[(2)]);
var inst_26882 = (inst_26874 + (1));
var tmp26928 = inst_26873;
var tmp26929 = inst_26872;
var tmp26930 = inst_26871;
var inst_26871__$1 = tmp26930;
var inst_26872__$1 = tmp26929;
var inst_26873__$1 = tmp26928;
var inst_26874__$1 = inst_26882;
var state_26919__$1 = (function (){var statearr_26933 = state_26919;
(statearr_26933[(8)] = inst_26873__$1);

(statearr_26933[(10)] = inst_26872__$1);

(statearr_26933[(11)] = inst_26874__$1);

(statearr_26933[(14)] = inst_26881);

(statearr_26933[(12)] = inst_26871__$1);

return statearr_26933;
})();
var statearr_26934_26967 = state_26919__$1;
(statearr_26934_26967[(2)] = null);

(statearr_26934_26967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (22))){
var state_26919__$1 = state_26919;
var statearr_26935_26968 = state_26919__$1;
(statearr_26935_26968[(2)] = null);

(statearr_26935_26968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (6))){
var inst_26860 = (state_26919[(13)]);
var inst_26869 = f.call(null,inst_26860);
var inst_26870 = cljs.core.seq.call(null,inst_26869);
var inst_26871 = inst_26870;
var inst_26872 = null;
var inst_26873 = (0);
var inst_26874 = (0);
var state_26919__$1 = (function (){var statearr_26936 = state_26919;
(statearr_26936[(8)] = inst_26873);

(statearr_26936[(10)] = inst_26872);

(statearr_26936[(11)] = inst_26874);

(statearr_26936[(12)] = inst_26871);

return statearr_26936;
})();
var statearr_26937_26969 = state_26919__$1;
(statearr_26937_26969[(2)] = null);

(statearr_26937_26969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (17))){
var inst_26885 = (state_26919[(7)]);
var inst_26889 = cljs.core.chunk_first.call(null,inst_26885);
var inst_26890 = cljs.core.chunk_rest.call(null,inst_26885);
var inst_26891 = cljs.core.count.call(null,inst_26889);
var inst_26871 = inst_26890;
var inst_26872 = inst_26889;
var inst_26873 = inst_26891;
var inst_26874 = (0);
var state_26919__$1 = (function (){var statearr_26938 = state_26919;
(statearr_26938[(8)] = inst_26873);

(statearr_26938[(10)] = inst_26872);

(statearr_26938[(11)] = inst_26874);

(statearr_26938[(12)] = inst_26871);

return statearr_26938;
})();
var statearr_26939_26970 = state_26919__$1;
(statearr_26939_26970[(2)] = null);

(statearr_26939_26970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (3))){
var inst_26917 = (state_26919[(2)]);
var state_26919__$1 = state_26919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26919__$1,inst_26917);
} else {
if((state_val_26920 === (12))){
var inst_26905 = (state_26919[(2)]);
var state_26919__$1 = state_26919;
var statearr_26940_26971 = state_26919__$1;
(statearr_26940_26971[(2)] = inst_26905);

(statearr_26940_26971[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (2))){
var state_26919__$1 = state_26919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26919__$1,(4),in$);
} else {
if((state_val_26920 === (23))){
var inst_26913 = (state_26919[(2)]);
var state_26919__$1 = state_26919;
var statearr_26941_26972 = state_26919__$1;
(statearr_26941_26972[(2)] = inst_26913);

(statearr_26941_26972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (19))){
var inst_26900 = (state_26919[(2)]);
var state_26919__$1 = state_26919;
var statearr_26942_26973 = state_26919__$1;
(statearr_26942_26973[(2)] = inst_26900);

(statearr_26942_26973[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (11))){
var inst_26885 = (state_26919[(7)]);
var inst_26871 = (state_26919[(12)]);
var inst_26885__$1 = cljs.core.seq.call(null,inst_26871);
var state_26919__$1 = (function (){var statearr_26943 = state_26919;
(statearr_26943[(7)] = inst_26885__$1);

return statearr_26943;
})();
if(inst_26885__$1){
var statearr_26944_26974 = state_26919__$1;
(statearr_26944_26974[(1)] = (14));

} else {
var statearr_26945_26975 = state_26919__$1;
(statearr_26945_26975[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (9))){
var inst_26907 = (state_26919[(2)]);
var inst_26908 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26919__$1 = (function (){var statearr_26946 = state_26919;
(statearr_26946[(15)] = inst_26907);

return statearr_26946;
})();
if(cljs.core.truth_(inst_26908)){
var statearr_26947_26976 = state_26919__$1;
(statearr_26947_26976[(1)] = (21));

} else {
var statearr_26948_26977 = state_26919__$1;
(statearr_26948_26977[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (5))){
var inst_26863 = cljs.core.async.close_BANG_.call(null,out);
var state_26919__$1 = state_26919;
var statearr_26949_26978 = state_26919__$1;
(statearr_26949_26978[(2)] = inst_26863);

(statearr_26949_26978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (14))){
var inst_26885 = (state_26919[(7)]);
var inst_26887 = cljs.core.chunked_seq_QMARK_.call(null,inst_26885);
var state_26919__$1 = state_26919;
if(inst_26887){
var statearr_26950_26979 = state_26919__$1;
(statearr_26950_26979[(1)] = (17));

} else {
var statearr_26951_26980 = state_26919__$1;
(statearr_26951_26980[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (16))){
var inst_26903 = (state_26919[(2)]);
var state_26919__$1 = state_26919;
var statearr_26952_26981 = state_26919__$1;
(statearr_26952_26981[(2)] = inst_26903);

(statearr_26952_26981[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26920 === (10))){
var inst_26872 = (state_26919[(10)]);
var inst_26874 = (state_26919[(11)]);
var inst_26879 = cljs.core._nth.call(null,inst_26872,inst_26874);
var state_26919__$1 = state_26919;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26919__$1,(13),out,inst_26879);
} else {
if((state_val_26920 === (18))){
var inst_26885 = (state_26919[(7)]);
var inst_26894 = cljs.core.first.call(null,inst_26885);
var state_26919__$1 = state_26919;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26919__$1,(20),out,inst_26894);
} else {
if((state_val_26920 === (8))){
var inst_26873 = (state_26919[(8)]);
var inst_26874 = (state_26919[(11)]);
var inst_26876 = (inst_26874 < inst_26873);
var inst_26877 = inst_26876;
var state_26919__$1 = state_26919;
if(cljs.core.truth_(inst_26877)){
var statearr_26953_26982 = state_26919__$1;
(statearr_26953_26982[(1)] = (10));

} else {
var statearr_26954_26983 = state_26919__$1;
(statearr_26954_26983[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__23316__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23316__auto____0 = (function (){
var statearr_26955 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26955[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23316__auto__);

(statearr_26955[(1)] = (1));

return statearr_26955;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23316__auto____1 = (function (state_26919){
while(true){
var ret_value__23317__auto__ = (function (){try{while(true){
var result__23318__auto__ = switch__23315__auto__.call(null,state_26919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23318__auto__;
}
break;
}
}catch (e26956){var ex__23319__auto__ = e26956;
var statearr_26957_26984 = state_26919;
(statearr_26957_26984[(2)] = ex__23319__auto__);


if(cljs.core.seq.call(null,(state_26919[(4)]))){
var statearr_26958_26985 = state_26919;
(statearr_26958_26985[(1)] = cljs.core.first.call(null,(state_26919[(4)])));

} else {
throw ex__23319__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26986 = state_26919;
state_26919 = G__26986;
continue;
} else {
return ret_value__23317__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23316__auto__ = function(state_26919){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23316__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23316__auto____1.call(this,state_26919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23316__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23316__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23316__auto__;
})()
})();
var state__23442__auto__ = (function (){var statearr_26959 = f__23441__auto__.call(null);
(statearr_26959[(6)] = c__23440__auto__);

return statearr_26959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23442__auto__);
}));

return c__23440__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__26988 = arguments.length;
switch (G__26988) {
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
var G__26991 = arguments.length;
switch (G__26991) {
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
var G__26994 = arguments.length;
switch (G__26994) {
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
var c__23440__auto___27042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23441__auto__ = (function (){var switch__23315__auto__ = (function (state_27018){
var state_val_27019 = (state_27018[(1)]);
if((state_val_27019 === (7))){
var inst_27013 = (state_27018[(2)]);
var state_27018__$1 = state_27018;
var statearr_27020_27043 = state_27018__$1;
(statearr_27020_27043[(2)] = inst_27013);

(statearr_27020_27043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27019 === (1))){
var inst_26995 = null;
var state_27018__$1 = (function (){var statearr_27021 = state_27018;
(statearr_27021[(7)] = inst_26995);

return statearr_27021;
})();
var statearr_27022_27044 = state_27018__$1;
(statearr_27022_27044[(2)] = null);

(statearr_27022_27044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27019 === (4))){
var inst_26998 = (state_27018[(8)]);
var inst_26998__$1 = (state_27018[(2)]);
var inst_26999 = (inst_26998__$1 == null);
var inst_27000 = cljs.core.not.call(null,inst_26999);
var state_27018__$1 = (function (){var statearr_27023 = state_27018;
(statearr_27023[(8)] = inst_26998__$1);

return statearr_27023;
})();
if(inst_27000){
var statearr_27024_27045 = state_27018__$1;
(statearr_27024_27045[(1)] = (5));

} else {
var statearr_27025_27046 = state_27018__$1;
(statearr_27025_27046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27019 === (6))){
var state_27018__$1 = state_27018;
var statearr_27026_27047 = state_27018__$1;
(statearr_27026_27047[(2)] = null);

(statearr_27026_27047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27019 === (3))){
var inst_27015 = (state_27018[(2)]);
var inst_27016 = cljs.core.async.close_BANG_.call(null,out);
var state_27018__$1 = (function (){var statearr_27027 = state_27018;
(statearr_27027[(9)] = inst_27015);

return statearr_27027;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27018__$1,inst_27016);
} else {
if((state_val_27019 === (2))){
var state_27018__$1 = state_27018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27018__$1,(4),ch);
} else {
if((state_val_27019 === (11))){
var inst_26998 = (state_27018[(8)]);
var inst_27007 = (state_27018[(2)]);
var inst_26995 = inst_26998;
var state_27018__$1 = (function (){var statearr_27028 = state_27018;
(statearr_27028[(10)] = inst_27007);

(statearr_27028[(7)] = inst_26995);

return statearr_27028;
})();
var statearr_27029_27048 = state_27018__$1;
(statearr_27029_27048[(2)] = null);

(statearr_27029_27048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27019 === (9))){
var inst_26998 = (state_27018[(8)]);
var state_27018__$1 = state_27018;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27018__$1,(11),out,inst_26998);
} else {
if((state_val_27019 === (5))){
var inst_26998 = (state_27018[(8)]);
var inst_26995 = (state_27018[(7)]);
var inst_27002 = cljs.core._EQ_.call(null,inst_26998,inst_26995);
var state_27018__$1 = state_27018;
if(inst_27002){
var statearr_27031_27049 = state_27018__$1;
(statearr_27031_27049[(1)] = (8));

} else {
var statearr_27032_27050 = state_27018__$1;
(statearr_27032_27050[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27019 === (10))){
var inst_27010 = (state_27018[(2)]);
var state_27018__$1 = state_27018;
var statearr_27033_27051 = state_27018__$1;
(statearr_27033_27051[(2)] = inst_27010);

(statearr_27033_27051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27019 === (8))){
var inst_26995 = (state_27018[(7)]);
var tmp27030 = inst_26995;
var inst_26995__$1 = tmp27030;
var state_27018__$1 = (function (){var statearr_27034 = state_27018;
(statearr_27034[(7)] = inst_26995__$1);

return statearr_27034;
})();
var statearr_27035_27052 = state_27018__$1;
(statearr_27035_27052[(2)] = null);

(statearr_27035_27052[(1)] = (2));


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
var cljs$core$async$state_machine__23316__auto__ = null;
var cljs$core$async$state_machine__23316__auto____0 = (function (){
var statearr_27036 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27036[(0)] = cljs$core$async$state_machine__23316__auto__);

(statearr_27036[(1)] = (1));

return statearr_27036;
});
var cljs$core$async$state_machine__23316__auto____1 = (function (state_27018){
while(true){
var ret_value__23317__auto__ = (function (){try{while(true){
var result__23318__auto__ = switch__23315__auto__.call(null,state_27018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23318__auto__;
}
break;
}
}catch (e27037){var ex__23319__auto__ = e27037;
var statearr_27038_27053 = state_27018;
(statearr_27038_27053[(2)] = ex__23319__auto__);


if(cljs.core.seq.call(null,(state_27018[(4)]))){
var statearr_27039_27054 = state_27018;
(statearr_27039_27054[(1)] = cljs.core.first.call(null,(state_27018[(4)])));

} else {
throw ex__23319__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27055 = state_27018;
state_27018 = G__27055;
continue;
} else {
return ret_value__23317__auto__;
}
break;
}
});
cljs$core$async$state_machine__23316__auto__ = function(state_27018){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23316__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23316__auto____1.call(this,state_27018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23316__auto____0;
cljs$core$async$state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23316__auto____1;
return cljs$core$async$state_machine__23316__auto__;
})()
})();
var state__23442__auto__ = (function (){var statearr_27040 = f__23441__auto__.call(null);
(statearr_27040[(6)] = c__23440__auto___27042);

return statearr_27040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23442__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__27057 = arguments.length;
switch (G__27057) {
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
var c__23440__auto___27124 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23441__auto__ = (function (){var switch__23315__auto__ = (function (state_27095){
var state_val_27096 = (state_27095[(1)]);
if((state_val_27096 === (7))){
var inst_27091 = (state_27095[(2)]);
var state_27095__$1 = state_27095;
var statearr_27097_27125 = state_27095__$1;
(statearr_27097_27125[(2)] = inst_27091);

(statearr_27097_27125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (1))){
var inst_27058 = (new Array(n));
var inst_27059 = inst_27058;
var inst_27060 = (0);
var state_27095__$1 = (function (){var statearr_27098 = state_27095;
(statearr_27098[(7)] = inst_27060);

(statearr_27098[(8)] = inst_27059);

return statearr_27098;
})();
var statearr_27099_27126 = state_27095__$1;
(statearr_27099_27126[(2)] = null);

(statearr_27099_27126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (4))){
var inst_27063 = (state_27095[(9)]);
var inst_27063__$1 = (state_27095[(2)]);
var inst_27064 = (inst_27063__$1 == null);
var inst_27065 = cljs.core.not.call(null,inst_27064);
var state_27095__$1 = (function (){var statearr_27100 = state_27095;
(statearr_27100[(9)] = inst_27063__$1);

return statearr_27100;
})();
if(inst_27065){
var statearr_27101_27127 = state_27095__$1;
(statearr_27101_27127[(1)] = (5));

} else {
var statearr_27102_27128 = state_27095__$1;
(statearr_27102_27128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (15))){
var inst_27085 = (state_27095[(2)]);
var state_27095__$1 = state_27095;
var statearr_27103_27129 = state_27095__$1;
(statearr_27103_27129[(2)] = inst_27085);

(statearr_27103_27129[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (13))){
var state_27095__$1 = state_27095;
var statearr_27104_27130 = state_27095__$1;
(statearr_27104_27130[(2)] = null);

(statearr_27104_27130[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (6))){
var inst_27060 = (state_27095[(7)]);
var inst_27081 = (inst_27060 > (0));
var state_27095__$1 = state_27095;
if(cljs.core.truth_(inst_27081)){
var statearr_27105_27131 = state_27095__$1;
(statearr_27105_27131[(1)] = (12));

} else {
var statearr_27106_27132 = state_27095__$1;
(statearr_27106_27132[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (3))){
var inst_27093 = (state_27095[(2)]);
var state_27095__$1 = state_27095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27095__$1,inst_27093);
} else {
if((state_val_27096 === (12))){
var inst_27059 = (state_27095[(8)]);
var inst_27083 = cljs.core.vec.call(null,inst_27059);
var state_27095__$1 = state_27095;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27095__$1,(15),out,inst_27083);
} else {
if((state_val_27096 === (2))){
var state_27095__$1 = state_27095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27095__$1,(4),ch);
} else {
if((state_val_27096 === (11))){
var inst_27075 = (state_27095[(2)]);
var inst_27076 = (new Array(n));
var inst_27059 = inst_27076;
var inst_27060 = (0);
var state_27095__$1 = (function (){var statearr_27107 = state_27095;
(statearr_27107[(10)] = inst_27075);

(statearr_27107[(7)] = inst_27060);

(statearr_27107[(8)] = inst_27059);

return statearr_27107;
})();
var statearr_27108_27133 = state_27095__$1;
(statearr_27108_27133[(2)] = null);

(statearr_27108_27133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (9))){
var inst_27059 = (state_27095[(8)]);
var inst_27073 = cljs.core.vec.call(null,inst_27059);
var state_27095__$1 = state_27095;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27095__$1,(11),out,inst_27073);
} else {
if((state_val_27096 === (5))){
var inst_27063 = (state_27095[(9)]);
var inst_27068 = (state_27095[(11)]);
var inst_27060 = (state_27095[(7)]);
var inst_27059 = (state_27095[(8)]);
var inst_27067 = (inst_27059[inst_27060] = inst_27063);
var inst_27068__$1 = (inst_27060 + (1));
var inst_27069 = (inst_27068__$1 < n);
var state_27095__$1 = (function (){var statearr_27109 = state_27095;
(statearr_27109[(11)] = inst_27068__$1);

(statearr_27109[(12)] = inst_27067);

return statearr_27109;
})();
if(cljs.core.truth_(inst_27069)){
var statearr_27110_27134 = state_27095__$1;
(statearr_27110_27134[(1)] = (8));

} else {
var statearr_27111_27135 = state_27095__$1;
(statearr_27111_27135[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (14))){
var inst_27088 = (state_27095[(2)]);
var inst_27089 = cljs.core.async.close_BANG_.call(null,out);
var state_27095__$1 = (function (){var statearr_27113 = state_27095;
(statearr_27113[(13)] = inst_27088);

return statearr_27113;
})();
var statearr_27114_27136 = state_27095__$1;
(statearr_27114_27136[(2)] = inst_27089);

(statearr_27114_27136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (10))){
var inst_27079 = (state_27095[(2)]);
var state_27095__$1 = state_27095;
var statearr_27115_27137 = state_27095__$1;
(statearr_27115_27137[(2)] = inst_27079);

(statearr_27115_27137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (8))){
var inst_27068 = (state_27095[(11)]);
var inst_27059 = (state_27095[(8)]);
var tmp27112 = inst_27059;
var inst_27059__$1 = tmp27112;
var inst_27060 = inst_27068;
var state_27095__$1 = (function (){var statearr_27116 = state_27095;
(statearr_27116[(7)] = inst_27060);

(statearr_27116[(8)] = inst_27059__$1);

return statearr_27116;
})();
var statearr_27117_27138 = state_27095__$1;
(statearr_27117_27138[(2)] = null);

(statearr_27117_27138[(1)] = (2));


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
var cljs$core$async$state_machine__23316__auto__ = null;
var cljs$core$async$state_machine__23316__auto____0 = (function (){
var statearr_27118 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27118[(0)] = cljs$core$async$state_machine__23316__auto__);

(statearr_27118[(1)] = (1));

return statearr_27118;
});
var cljs$core$async$state_machine__23316__auto____1 = (function (state_27095){
while(true){
var ret_value__23317__auto__ = (function (){try{while(true){
var result__23318__auto__ = switch__23315__auto__.call(null,state_27095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23318__auto__;
}
break;
}
}catch (e27119){var ex__23319__auto__ = e27119;
var statearr_27120_27139 = state_27095;
(statearr_27120_27139[(2)] = ex__23319__auto__);


if(cljs.core.seq.call(null,(state_27095[(4)]))){
var statearr_27121_27140 = state_27095;
(statearr_27121_27140[(1)] = cljs.core.first.call(null,(state_27095[(4)])));

} else {
throw ex__23319__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27141 = state_27095;
state_27095 = G__27141;
continue;
} else {
return ret_value__23317__auto__;
}
break;
}
});
cljs$core$async$state_machine__23316__auto__ = function(state_27095){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23316__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23316__auto____1.call(this,state_27095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23316__auto____0;
cljs$core$async$state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23316__auto____1;
return cljs$core$async$state_machine__23316__auto__;
})()
})();
var state__23442__auto__ = (function (){var statearr_27122 = f__23441__auto__.call(null);
(statearr_27122[(6)] = c__23440__auto___27124);

return statearr_27122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23442__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__27143 = arguments.length;
switch (G__27143) {
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
var c__23440__auto___27221 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23441__auto__ = (function (){var switch__23315__auto__ = (function (state_27188){
var state_val_27189 = (state_27188[(1)]);
if((state_val_27189 === (7))){
var inst_27184 = (state_27188[(2)]);
var state_27188__$1 = state_27188;
var statearr_27190_27222 = state_27188__$1;
(statearr_27190_27222[(2)] = inst_27184);

(statearr_27190_27222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27189 === (1))){
var inst_27144 = [];
var inst_27145 = inst_27144;
var inst_27146 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27188__$1 = (function (){var statearr_27191 = state_27188;
(statearr_27191[(7)] = inst_27146);

(statearr_27191[(8)] = inst_27145);

return statearr_27191;
})();
var statearr_27192_27223 = state_27188__$1;
(statearr_27192_27223[(2)] = null);

(statearr_27192_27223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27189 === (4))){
var inst_27149 = (state_27188[(9)]);
var inst_27149__$1 = (state_27188[(2)]);
var inst_27150 = (inst_27149__$1 == null);
var inst_27151 = cljs.core.not.call(null,inst_27150);
var state_27188__$1 = (function (){var statearr_27193 = state_27188;
(statearr_27193[(9)] = inst_27149__$1);

return statearr_27193;
})();
if(inst_27151){
var statearr_27194_27224 = state_27188__$1;
(statearr_27194_27224[(1)] = (5));

} else {
var statearr_27195_27225 = state_27188__$1;
(statearr_27195_27225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27189 === (15))){
var inst_27145 = (state_27188[(8)]);
var inst_27176 = cljs.core.vec.call(null,inst_27145);
var state_27188__$1 = state_27188;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27188__$1,(18),out,inst_27176);
} else {
if((state_val_27189 === (13))){
var inst_27171 = (state_27188[(2)]);
var state_27188__$1 = state_27188;
var statearr_27196_27226 = state_27188__$1;
(statearr_27196_27226[(2)] = inst_27171);

(statearr_27196_27226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27189 === (6))){
var inst_27145 = (state_27188[(8)]);
var inst_27173 = inst_27145.length;
var inst_27174 = (inst_27173 > (0));
var state_27188__$1 = state_27188;
if(cljs.core.truth_(inst_27174)){
var statearr_27197_27227 = state_27188__$1;
(statearr_27197_27227[(1)] = (15));

} else {
var statearr_27198_27228 = state_27188__$1;
(statearr_27198_27228[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27189 === (17))){
var inst_27181 = (state_27188[(2)]);
var inst_27182 = cljs.core.async.close_BANG_.call(null,out);
var state_27188__$1 = (function (){var statearr_27199 = state_27188;
(statearr_27199[(10)] = inst_27181);

return statearr_27199;
})();
var statearr_27200_27229 = state_27188__$1;
(statearr_27200_27229[(2)] = inst_27182);

(statearr_27200_27229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27189 === (3))){
var inst_27186 = (state_27188[(2)]);
var state_27188__$1 = state_27188;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27188__$1,inst_27186);
} else {
if((state_val_27189 === (12))){
var inst_27145 = (state_27188[(8)]);
var inst_27164 = cljs.core.vec.call(null,inst_27145);
var state_27188__$1 = state_27188;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27188__$1,(14),out,inst_27164);
} else {
if((state_val_27189 === (2))){
var state_27188__$1 = state_27188;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27188__$1,(4),ch);
} else {
if((state_val_27189 === (11))){
var inst_27149 = (state_27188[(9)]);
var inst_27145 = (state_27188[(8)]);
var inst_27153 = (state_27188[(11)]);
var inst_27161 = inst_27145.push(inst_27149);
var tmp27201 = inst_27145;
var inst_27145__$1 = tmp27201;
var inst_27146 = inst_27153;
var state_27188__$1 = (function (){var statearr_27202 = state_27188;
(statearr_27202[(7)] = inst_27146);

(statearr_27202[(8)] = inst_27145__$1);

(statearr_27202[(12)] = inst_27161);

return statearr_27202;
})();
var statearr_27203_27230 = state_27188__$1;
(statearr_27203_27230[(2)] = null);

(statearr_27203_27230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27189 === (9))){
var inst_27146 = (state_27188[(7)]);
var inst_27157 = cljs.core.keyword_identical_QMARK_.call(null,inst_27146,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_27188__$1 = state_27188;
var statearr_27204_27231 = state_27188__$1;
(statearr_27204_27231[(2)] = inst_27157);

(statearr_27204_27231[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27189 === (5))){
var inst_27146 = (state_27188[(7)]);
var inst_27149 = (state_27188[(9)]);
var inst_27154 = (state_27188[(13)]);
var inst_27153 = (state_27188[(11)]);
var inst_27153__$1 = f.call(null,inst_27149);
var inst_27154__$1 = cljs.core._EQ_.call(null,inst_27153__$1,inst_27146);
var state_27188__$1 = (function (){var statearr_27205 = state_27188;
(statearr_27205[(13)] = inst_27154__$1);

(statearr_27205[(11)] = inst_27153__$1);

return statearr_27205;
})();
if(inst_27154__$1){
var statearr_27206_27232 = state_27188__$1;
(statearr_27206_27232[(1)] = (8));

} else {
var statearr_27207_27233 = state_27188__$1;
(statearr_27207_27233[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27189 === (14))){
var inst_27149 = (state_27188[(9)]);
var inst_27153 = (state_27188[(11)]);
var inst_27166 = (state_27188[(2)]);
var inst_27167 = [];
var inst_27168 = inst_27167.push(inst_27149);
var inst_27145 = inst_27167;
var inst_27146 = inst_27153;
var state_27188__$1 = (function (){var statearr_27208 = state_27188;
(statearr_27208[(7)] = inst_27146);

(statearr_27208[(14)] = inst_27168);

(statearr_27208[(8)] = inst_27145);

(statearr_27208[(15)] = inst_27166);

return statearr_27208;
})();
var statearr_27209_27234 = state_27188__$1;
(statearr_27209_27234[(2)] = null);

(statearr_27209_27234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27189 === (16))){
var state_27188__$1 = state_27188;
var statearr_27210_27235 = state_27188__$1;
(statearr_27210_27235[(2)] = null);

(statearr_27210_27235[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27189 === (10))){
var inst_27159 = (state_27188[(2)]);
var state_27188__$1 = state_27188;
if(cljs.core.truth_(inst_27159)){
var statearr_27211_27236 = state_27188__$1;
(statearr_27211_27236[(1)] = (11));

} else {
var statearr_27212_27237 = state_27188__$1;
(statearr_27212_27237[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27189 === (18))){
var inst_27178 = (state_27188[(2)]);
var state_27188__$1 = state_27188;
var statearr_27213_27238 = state_27188__$1;
(statearr_27213_27238[(2)] = inst_27178);

(statearr_27213_27238[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27189 === (8))){
var inst_27154 = (state_27188[(13)]);
var state_27188__$1 = state_27188;
var statearr_27214_27239 = state_27188__$1;
(statearr_27214_27239[(2)] = inst_27154);

(statearr_27214_27239[(1)] = (10));


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
var cljs$core$async$state_machine__23316__auto__ = null;
var cljs$core$async$state_machine__23316__auto____0 = (function (){
var statearr_27215 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27215[(0)] = cljs$core$async$state_machine__23316__auto__);

(statearr_27215[(1)] = (1));

return statearr_27215;
});
var cljs$core$async$state_machine__23316__auto____1 = (function (state_27188){
while(true){
var ret_value__23317__auto__ = (function (){try{while(true){
var result__23318__auto__ = switch__23315__auto__.call(null,state_27188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23318__auto__;
}
break;
}
}catch (e27216){var ex__23319__auto__ = e27216;
var statearr_27217_27240 = state_27188;
(statearr_27217_27240[(2)] = ex__23319__auto__);


if(cljs.core.seq.call(null,(state_27188[(4)]))){
var statearr_27218_27241 = state_27188;
(statearr_27218_27241[(1)] = cljs.core.first.call(null,(state_27188[(4)])));

} else {
throw ex__23319__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27242 = state_27188;
state_27188 = G__27242;
continue;
} else {
return ret_value__23317__auto__;
}
break;
}
});
cljs$core$async$state_machine__23316__auto__ = function(state_27188){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23316__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23316__auto____1.call(this,state_27188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23316__auto____0;
cljs$core$async$state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23316__auto____1;
return cljs$core$async$state_machine__23316__auto__;
})()
})();
var state__23442__auto__ = (function (){var statearr_27219 = f__23441__auto__.call(null);
(statearr_27219[(6)] = c__23440__auto___27221);

return statearr_27219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23442__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1658997506350
