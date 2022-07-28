// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
goog.require('goog.object');
goog.scope(function(){
figwheel.client.file_reloading.goog$module$goog$object = goog.module.get('goog.object');
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.debug_loader_QMARK_ = (function figwheel$client$file_reloading$debug_loader_QMARK_(){
return (!((goog.debugLoader_ == null)));
});
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4253__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (((typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))))))));
if(or__4253__auto__){
return or__4253__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){

return goog.debugLoader_.getPathFromDeps_(ns);
}):(function (ns){

return figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.dependencies_.nameToPath,ns);
}));
figwheel.client.file_reloading.provided_QMARK_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
return goog.getObjectByName(ns);
}):(function (ns){
return figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
}));
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(ns){
return ((cljs.core._EQ_.call(null,"goog",ns)) || (((cljs.core._EQ_.call(null,"cljs.core",ns)) || (((cljs.core._EQ_.call(null,"cljs.nodejs",ns)) || (((goog.string.startsWith(ns,"clojure.")) || (goog.string.startsWith(ns,"goog.")))))))));
});
figwheel.client.file_reloading.base_requires_for_ns_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__31393 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.debugLoader_.dependencies_,path);
if((G__31393 == null)){
return null;
} else {
return figwheel.client.file_reloading.goog$module$goog$object.get.call(null,G__31393,"requires");
}
}):(function (path){
var G__31394 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.dependencies_.requires,path);
if((G__31394 == null)){
return null;
} else {
return figwheel.client.file_reloading.goog$module$goog$object.getKeys.call(null,G__31394);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__31395_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__31395_SHARP_)));
}),figwheel.client.file_reloading.base_requires_for_ns_path.call(null,figwheel.client.file_reloading.name__GT_path.call(null,ns))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (_,___$1){
return null;
}):(function (path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
}));
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return null;
}):(function (){
var nameToPath = figwheel.client.file_reloading.goog$module$goog$object.filter.call(null,goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
}));
figwheel.client.file_reloading.path__GT_name = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__31396 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.debugLoader_.dependencies_,path);
var G__31396__$1 = (((G__31396 == null))?null:figwheel.client.file_reloading.goog$module$goog$object.get.call(null,G__31396,"provides"));
if((G__31396__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__31396__$1);
}
}):(function (path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
}));
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),parent_ns);
});
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,figwheel.client.file_reloading.goog$module$goog$object.filter.call(null,goog.debugLoader_.dependencies_,(function (dep,path,_){
return cljs.core.not.call(null,cljs.core.some.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_,figwheel.client.file_reloading.goog$module$goog$object.get.call(null,dep,"provides")));
})),(function (dep,path,_){
var provides = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,dep,"provides");
var requires = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,dep,"requires");
var seq__31397 = cljs.core.seq.call(null,provides);
var chunk__31398 = null;
var count__31399 = (0);
var i__31400 = (0);
while(true){
if((i__31400 < count__31399)){
var prov = cljs.core._nth.call(null,chunk__31398,i__31400);
var seq__31409_31421 = cljs.core.seq.call(null,requires);
var chunk__31410_31422 = null;
var count__31411_31423 = (0);
var i__31412_31424 = (0);
while(true){
if((i__31412_31424 < count__31411_31423)){
var req_31425 = cljs.core._nth.call(null,chunk__31410_31422,i__31412_31424);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31425,prov);


var G__31426 = seq__31409_31421;
var G__31427 = chunk__31410_31422;
var G__31428 = count__31411_31423;
var G__31429 = (i__31412_31424 + (1));
seq__31409_31421 = G__31426;
chunk__31410_31422 = G__31427;
count__31411_31423 = G__31428;
i__31412_31424 = G__31429;
continue;
} else {
var temp__5753__auto___31430 = cljs.core.seq.call(null,seq__31409_31421);
if(temp__5753__auto___31430){
var seq__31409_31431__$1 = temp__5753__auto___31430;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31409_31431__$1)){
var c__4679__auto___31432 = cljs.core.chunk_first.call(null,seq__31409_31431__$1);
var G__31433 = cljs.core.chunk_rest.call(null,seq__31409_31431__$1);
var G__31434 = c__4679__auto___31432;
var G__31435 = cljs.core.count.call(null,c__4679__auto___31432);
var G__31436 = (0);
seq__31409_31421 = G__31433;
chunk__31410_31422 = G__31434;
count__31411_31423 = G__31435;
i__31412_31424 = G__31436;
continue;
} else {
var req_31437 = cljs.core.first.call(null,seq__31409_31431__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31437,prov);


var G__31438 = cljs.core.next.call(null,seq__31409_31431__$1);
var G__31439 = null;
var G__31440 = (0);
var G__31441 = (0);
seq__31409_31421 = G__31438;
chunk__31410_31422 = G__31439;
count__31411_31423 = G__31440;
i__31412_31424 = G__31441;
continue;
}
} else {
}
}
break;
}


var G__31442 = seq__31397;
var G__31443 = chunk__31398;
var G__31444 = count__31399;
var G__31445 = (i__31400 + (1));
seq__31397 = G__31442;
chunk__31398 = G__31443;
count__31399 = G__31444;
i__31400 = G__31445;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__31397);
if(temp__5753__auto__){
var seq__31397__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31397__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__31397__$1);
var G__31446 = cljs.core.chunk_rest.call(null,seq__31397__$1);
var G__31447 = c__4679__auto__;
var G__31448 = cljs.core.count.call(null,c__4679__auto__);
var G__31449 = (0);
seq__31397 = G__31446;
chunk__31398 = G__31447;
count__31399 = G__31448;
i__31400 = G__31449;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31397__$1);
var seq__31413_31450 = cljs.core.seq.call(null,requires);
var chunk__31414_31451 = null;
var count__31415_31452 = (0);
var i__31416_31453 = (0);
while(true){
if((i__31416_31453 < count__31415_31452)){
var req_31454 = cljs.core._nth.call(null,chunk__31414_31451,i__31416_31453);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31454,prov);


var G__31455 = seq__31413_31450;
var G__31456 = chunk__31414_31451;
var G__31457 = count__31415_31452;
var G__31458 = (i__31416_31453 + (1));
seq__31413_31450 = G__31455;
chunk__31414_31451 = G__31456;
count__31415_31452 = G__31457;
i__31416_31453 = G__31458;
continue;
} else {
var temp__5753__auto___31459__$1 = cljs.core.seq.call(null,seq__31413_31450);
if(temp__5753__auto___31459__$1){
var seq__31413_31460__$1 = temp__5753__auto___31459__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31413_31460__$1)){
var c__4679__auto___31461 = cljs.core.chunk_first.call(null,seq__31413_31460__$1);
var G__31462 = cljs.core.chunk_rest.call(null,seq__31413_31460__$1);
var G__31463 = c__4679__auto___31461;
var G__31464 = cljs.core.count.call(null,c__4679__auto___31461);
var G__31465 = (0);
seq__31413_31450 = G__31462;
chunk__31414_31451 = G__31463;
count__31415_31452 = G__31464;
i__31416_31453 = G__31465;
continue;
} else {
var req_31466 = cljs.core.first.call(null,seq__31413_31460__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31466,prov);


var G__31467 = cljs.core.next.call(null,seq__31413_31460__$1);
var G__31468 = null;
var G__31469 = (0);
var G__31470 = (0);
seq__31413_31450 = G__31467;
chunk__31414_31451 = G__31468;
count__31415_31452 = G__31469;
i__31416_31453 = G__31470;
continue;
}
} else {
}
}
break;
}


var G__31471 = cljs.core.next.call(null,seq__31397__$1);
var G__31472 = null;
var G__31473 = (0);
var G__31474 = (0);
seq__31397 = G__31471;
chunk__31398 = G__31472;
count__31399 = G__31473;
i__31400 = G__31474;
continue;
}
} else {
return null;
}
}
break;
}
}));
}):(function (){
var requires = figwheel.client.file_reloading.goog$module$goog$object.filter.call(null,goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,requires,(function (deps,path,_){
var seq__31417 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__31418 = null;
var count__31419 = (0);
var i__31420 = (0);
while(true){
if((i__31420 < count__31419)){
var prov = cljs.core._nth.call(null,chunk__31418,i__31420);
figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,deps,((function (seq__31417,chunk__31418,count__31419,i__31420,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__31417,chunk__31418,count__31419,i__31420,prov,requires))
);


var G__31475 = seq__31417;
var G__31476 = chunk__31418;
var G__31477 = count__31419;
var G__31478 = (i__31420 + (1));
seq__31417 = G__31475;
chunk__31418 = G__31476;
count__31419 = G__31477;
i__31420 = G__31478;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__31417);
if(temp__5753__auto__){
var seq__31417__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31417__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__31417__$1);
var G__31479 = cljs.core.chunk_rest.call(null,seq__31417__$1);
var G__31480 = c__4679__auto__;
var G__31481 = cljs.core.count.call(null,c__4679__auto__);
var G__31482 = (0);
seq__31417 = G__31479;
chunk__31418 = G__31480;
count__31419 = G__31481;
i__31420 = G__31482;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31417__$1);
figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,deps,((function (seq__31417,chunk__31418,count__31419,i__31420,prov,seq__31417__$1,temp__5753__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__31417,chunk__31418,count__31419,i__31420,prov,seq__31417__$1,temp__5753__auto__,requires))
);


var G__31483 = cljs.core.next.call(null,seq__31417__$1);
var G__31484 = null;
var G__31485 = (0);
var G__31486 = (0);
seq__31417 = G__31483;
chunk__31418 = G__31484;
count__31419 = G__31485;
i__31420 = G__31486;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__31487){
var vec__31488 = p__31487;
var _ = cljs.core.nth.call(null,vec__31488,(0),null);
var v = cljs.core.nth.call(null,vec__31488,(1),null);
var and__4251__auto__ = v;
if(cljs.core.truth_(and__4251__auto__)){
return v.call(null,dep);
} else {
return and__4251__auto__;
}
}),cljs.core.filter.call(null,(function (p__31491){
var vec__31492 = p__31491;
var k = cljs.core.nth.call(null,vec__31492,(0),null);
var v = cljs.core.nth.call(null,vec__31492,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__31504_31512 = cljs.core.seq.call(null,deps);
var chunk__31505_31513 = null;
var count__31506_31514 = (0);
var i__31507_31515 = (0);
while(true){
if((i__31507_31515 < count__31506_31514)){
var dep_31516 = cljs.core._nth.call(null,chunk__31505_31513,i__31507_31515);
if(cljs.core.truth_((function (){var and__4251__auto__ = dep_31516;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_31516));
} else {
return and__4251__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_31516,(depth + (1)),state);
} else {
}


var G__31517 = seq__31504_31512;
var G__31518 = chunk__31505_31513;
var G__31519 = count__31506_31514;
var G__31520 = (i__31507_31515 + (1));
seq__31504_31512 = G__31517;
chunk__31505_31513 = G__31518;
count__31506_31514 = G__31519;
i__31507_31515 = G__31520;
continue;
} else {
var temp__5753__auto___31521 = cljs.core.seq.call(null,seq__31504_31512);
if(temp__5753__auto___31521){
var seq__31504_31522__$1 = temp__5753__auto___31521;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31504_31522__$1)){
var c__4679__auto___31523 = cljs.core.chunk_first.call(null,seq__31504_31522__$1);
var G__31524 = cljs.core.chunk_rest.call(null,seq__31504_31522__$1);
var G__31525 = c__4679__auto___31523;
var G__31526 = cljs.core.count.call(null,c__4679__auto___31523);
var G__31527 = (0);
seq__31504_31512 = G__31524;
chunk__31505_31513 = G__31525;
count__31506_31514 = G__31526;
i__31507_31515 = G__31527;
continue;
} else {
var dep_31528 = cljs.core.first.call(null,seq__31504_31522__$1);
if(cljs.core.truth_((function (){var and__4251__auto__ = dep_31528;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_31528));
} else {
return and__4251__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_31528,(depth + (1)),state);
} else {
}


var G__31529 = cljs.core.next.call(null,seq__31504_31522__$1);
var G__31530 = null;
var G__31531 = (0);
var G__31532 = (0);
seq__31504_31512 = G__31529;
chunk__31505_31513 = G__31530;
count__31506_31514 = G__31531;
i__31507_31515 = G__31532;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__31508){
var vec__31509 = p__31508;
var seq__31510 = cljs.core.seq.call(null,vec__31509);
var first__31511 = cljs.core.first.call(null,seq__31510);
var seq__31510__$1 = cljs.core.next.call(null,seq__31510);
var x = first__31511;
var xs = seq__31510__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__31495_SHARP_){
return clojure.set.difference.call(null,p1__31495_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.debugLoader_.written_,path);

return figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}):(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.dependencies_.visited,path);

figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.dependencies_.written,path);

return figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}));
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__31533_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__31533_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__31534 = cljs.core.seq.call(null,provides);
var chunk__31535 = null;
var count__31536 = (0);
var i__31537 = (0);
while(true){
if((i__31537 < count__31536)){
var prov = cljs.core._nth.call(null,chunk__31535,i__31537);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31546_31554 = cljs.core.seq.call(null,requires);
var chunk__31547_31555 = null;
var count__31548_31556 = (0);
var i__31549_31557 = (0);
while(true){
if((i__31549_31557 < count__31548_31556)){
var req_31558 = cljs.core._nth.call(null,chunk__31547_31555,i__31549_31557);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31558,prov);


var G__31559 = seq__31546_31554;
var G__31560 = chunk__31547_31555;
var G__31561 = count__31548_31556;
var G__31562 = (i__31549_31557 + (1));
seq__31546_31554 = G__31559;
chunk__31547_31555 = G__31560;
count__31548_31556 = G__31561;
i__31549_31557 = G__31562;
continue;
} else {
var temp__5753__auto___31563 = cljs.core.seq.call(null,seq__31546_31554);
if(temp__5753__auto___31563){
var seq__31546_31564__$1 = temp__5753__auto___31563;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31546_31564__$1)){
var c__4679__auto___31565 = cljs.core.chunk_first.call(null,seq__31546_31564__$1);
var G__31566 = cljs.core.chunk_rest.call(null,seq__31546_31564__$1);
var G__31567 = c__4679__auto___31565;
var G__31568 = cljs.core.count.call(null,c__4679__auto___31565);
var G__31569 = (0);
seq__31546_31554 = G__31566;
chunk__31547_31555 = G__31567;
count__31548_31556 = G__31568;
i__31549_31557 = G__31569;
continue;
} else {
var req_31570 = cljs.core.first.call(null,seq__31546_31564__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31570,prov);


var G__31571 = cljs.core.next.call(null,seq__31546_31564__$1);
var G__31572 = null;
var G__31573 = (0);
var G__31574 = (0);
seq__31546_31554 = G__31571;
chunk__31547_31555 = G__31572;
count__31548_31556 = G__31573;
i__31549_31557 = G__31574;
continue;
}
} else {
}
}
break;
}


var G__31575 = seq__31534;
var G__31576 = chunk__31535;
var G__31577 = count__31536;
var G__31578 = (i__31537 + (1));
seq__31534 = G__31575;
chunk__31535 = G__31576;
count__31536 = G__31577;
i__31537 = G__31578;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__31534);
if(temp__5753__auto__){
var seq__31534__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31534__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__31534__$1);
var G__31579 = cljs.core.chunk_rest.call(null,seq__31534__$1);
var G__31580 = c__4679__auto__;
var G__31581 = cljs.core.count.call(null,c__4679__auto__);
var G__31582 = (0);
seq__31534 = G__31579;
chunk__31535 = G__31580;
count__31536 = G__31581;
i__31537 = G__31582;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31534__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31550_31583 = cljs.core.seq.call(null,requires);
var chunk__31551_31584 = null;
var count__31552_31585 = (0);
var i__31553_31586 = (0);
while(true){
if((i__31553_31586 < count__31552_31585)){
var req_31587 = cljs.core._nth.call(null,chunk__31551_31584,i__31553_31586);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31587,prov);


var G__31588 = seq__31550_31583;
var G__31589 = chunk__31551_31584;
var G__31590 = count__31552_31585;
var G__31591 = (i__31553_31586 + (1));
seq__31550_31583 = G__31588;
chunk__31551_31584 = G__31589;
count__31552_31585 = G__31590;
i__31553_31586 = G__31591;
continue;
} else {
var temp__5753__auto___31592__$1 = cljs.core.seq.call(null,seq__31550_31583);
if(temp__5753__auto___31592__$1){
var seq__31550_31593__$1 = temp__5753__auto___31592__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31550_31593__$1)){
var c__4679__auto___31594 = cljs.core.chunk_first.call(null,seq__31550_31593__$1);
var G__31595 = cljs.core.chunk_rest.call(null,seq__31550_31593__$1);
var G__31596 = c__4679__auto___31594;
var G__31597 = cljs.core.count.call(null,c__4679__auto___31594);
var G__31598 = (0);
seq__31550_31583 = G__31595;
chunk__31551_31584 = G__31596;
count__31552_31585 = G__31597;
i__31553_31586 = G__31598;
continue;
} else {
var req_31599 = cljs.core.first.call(null,seq__31550_31593__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31599,prov);


var G__31600 = cljs.core.next.call(null,seq__31550_31593__$1);
var G__31601 = null;
var G__31602 = (0);
var G__31603 = (0);
seq__31550_31583 = G__31600;
chunk__31551_31584 = G__31601;
count__31552_31585 = G__31602;
i__31553_31586 = G__31603;
continue;
}
} else {
}
}
break;
}


var G__31604 = cljs.core.next.call(null,seq__31534__$1);
var G__31605 = null;
var G__31606 = (0);
var G__31607 = (0);
seq__31534 = G__31604;
chunk__31535 = G__31605;
count__31536 = G__31606;
i__31537 = G__31607;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__31608_31612 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__31609_31613 = null;
var count__31610_31614 = (0);
var i__31611_31615 = (0);
while(true){
if((i__31611_31615 < count__31610_31614)){
var ns_31616 = cljs.core._nth.call(null,chunk__31609_31613,i__31611_31615);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31616);


var G__31617 = seq__31608_31612;
var G__31618 = chunk__31609_31613;
var G__31619 = count__31610_31614;
var G__31620 = (i__31611_31615 + (1));
seq__31608_31612 = G__31617;
chunk__31609_31613 = G__31618;
count__31610_31614 = G__31619;
i__31611_31615 = G__31620;
continue;
} else {
var temp__5753__auto___31621 = cljs.core.seq.call(null,seq__31608_31612);
if(temp__5753__auto___31621){
var seq__31608_31622__$1 = temp__5753__auto___31621;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31608_31622__$1)){
var c__4679__auto___31623 = cljs.core.chunk_first.call(null,seq__31608_31622__$1);
var G__31624 = cljs.core.chunk_rest.call(null,seq__31608_31622__$1);
var G__31625 = c__4679__auto___31623;
var G__31626 = cljs.core.count.call(null,c__4679__auto___31623);
var G__31627 = (0);
seq__31608_31612 = G__31624;
chunk__31609_31613 = G__31625;
count__31610_31614 = G__31626;
i__31611_31615 = G__31627;
continue;
} else {
var ns_31628 = cljs.core.first.call(null,seq__31608_31622__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31628);


var G__31629 = cljs.core.next.call(null,seq__31608_31622__$1);
var G__31630 = null;
var G__31631 = (0);
var G__31632 = (0);
seq__31608_31612 = G__31629;
chunk__31609_31613 = G__31630;
count__31610_31614 = G__31631;
i__31611_31615 = G__31632;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require_figwheel_backup_ = (function (){var or__4253__auto__ = goog.require__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__31633__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__31633 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31634__i = 0, G__31634__a = new Array(arguments.length -  0);
while (G__31634__i < G__31634__a.length) {G__31634__a[G__31634__i] = arguments[G__31634__i + 0]; ++G__31634__i;}
  args = new cljs.core.IndexedSeq(G__31634__a,0,null);
} 
return G__31633__delegate.call(this,args);};
G__31633.cljs$lang$maxFixedArity = 0;
G__31633.cljs$lang$applyTo = (function (arglist__31635){
var args = cljs.core.seq(arglist__31635);
return G__31633__delegate(args);
});
G__31633.cljs$core$IFn$_invoke$arity$variadic = G__31633__delegate;
return G__31633;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__31636_SHARP_,p2__31637_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31636_SHARP_)),p2__31637_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__31638_SHARP_,p2__31639_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31638_SHARP_),p2__31639_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__31640 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__31640.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__31640.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__31640;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e31641){if((e31641 instanceof Error)){
var e = e31641;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31641;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = figwheel.client.file_reloading.goog$module$goog$object.findKey.call(null,require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e31642){if((e31642 instanceof Error)){
var e = e31642;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31642;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__31643 = cljs.core._EQ_;
var expr__31644 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__31643.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__31644))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__31643.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__31644))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__31643.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__31644))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__31646,callback){
var map__31647 = p__31646;
var map__31647__$1 = cljs.core.__destructure_map.call(null,map__31647);
var file_msg = map__31647__$1;
var request_url = cljs.core.get.call(null,map__31647__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4253__auto__ = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__29179__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29180__auto__ = (function (){var switch__29105__auto__ = (function (state_31684){
var state_val_31685 = (state_31684[(1)]);
if((state_val_31685 === (7))){
var inst_31680 = (state_31684[(2)]);
var state_31684__$1 = state_31684;
var statearr_31686_31713 = state_31684__$1;
(statearr_31686_31713[(2)] = inst_31680);

(statearr_31686_31713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31685 === (1))){
var state_31684__$1 = state_31684;
var statearr_31687_31714 = state_31684__$1;
(statearr_31687_31714[(2)] = null);

(statearr_31687_31714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31685 === (4))){
var inst_31650 = (state_31684[(7)]);
var inst_31650__$1 = (state_31684[(2)]);
var state_31684__$1 = (function (){var statearr_31688 = state_31684;
(statearr_31688[(7)] = inst_31650__$1);

return statearr_31688;
})();
if(cljs.core.truth_(inst_31650__$1)){
var statearr_31689_31715 = state_31684__$1;
(statearr_31689_31715[(1)] = (5));

} else {
var statearr_31690_31716 = state_31684__$1;
(statearr_31690_31716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31685 === (15))){
var inst_31665 = (state_31684[(8)]);
var inst_31663 = (state_31684[(9)]);
var inst_31667 = inst_31665.call(null,inst_31663);
var state_31684__$1 = state_31684;
var statearr_31691_31717 = state_31684__$1;
(statearr_31691_31717[(2)] = inst_31667);

(statearr_31691_31717[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31685 === (13))){
var inst_31674 = (state_31684[(2)]);
var state_31684__$1 = state_31684;
var statearr_31692_31718 = state_31684__$1;
(statearr_31692_31718[(2)] = inst_31674);

(statearr_31692_31718[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31685 === (6))){
var state_31684__$1 = state_31684;
var statearr_31693_31719 = state_31684__$1;
(statearr_31693_31719[(2)] = null);

(statearr_31693_31719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31685 === (17))){
var inst_31671 = (state_31684[(2)]);
var state_31684__$1 = state_31684;
var statearr_31694_31720 = state_31684__$1;
(statearr_31694_31720[(2)] = inst_31671);

(statearr_31694_31720[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31685 === (3))){
var inst_31682 = (state_31684[(2)]);
var state_31684__$1 = state_31684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31684__$1,inst_31682);
} else {
if((state_val_31685 === (12))){
var state_31684__$1 = state_31684;
var statearr_31695_31721 = state_31684__$1;
(statearr_31695_31721[(2)] = null);

(statearr_31695_31721[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31685 === (2))){
var state_31684__$1 = state_31684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31684__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_31685 === (11))){
var inst_31655 = (state_31684[(10)]);
var inst_31661 = figwheel.client.file_reloading.blocking_load.call(null,inst_31655);
var state_31684__$1 = state_31684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31684__$1,(14),inst_31661);
} else {
if((state_val_31685 === (9))){
var inst_31655 = (state_31684[(10)]);
var state_31684__$1 = state_31684;
if(cljs.core.truth_(inst_31655)){
var statearr_31696_31722 = state_31684__$1;
(statearr_31696_31722[(1)] = (11));

} else {
var statearr_31697_31723 = state_31684__$1;
(statearr_31697_31723[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31685 === (5))){
var inst_31656 = (state_31684[(11)]);
var inst_31650 = (state_31684[(7)]);
var inst_31655 = cljs.core.nth.call(null,inst_31650,(0),null);
var inst_31656__$1 = cljs.core.nth.call(null,inst_31650,(1),null);
var state_31684__$1 = (function (){var statearr_31698 = state_31684;
(statearr_31698[(11)] = inst_31656__$1);

(statearr_31698[(10)] = inst_31655);

return statearr_31698;
})();
if(cljs.core.truth_(inst_31656__$1)){
var statearr_31699_31724 = state_31684__$1;
(statearr_31699_31724[(1)] = (8));

} else {
var statearr_31700_31725 = state_31684__$1;
(statearr_31700_31725[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31685 === (14))){
var inst_31665 = (state_31684[(8)]);
var inst_31655 = (state_31684[(10)]);
var inst_31663 = (state_31684[(2)]);
var inst_31664 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_31665__$1 = cljs.core.get.call(null,inst_31664,inst_31655);
var state_31684__$1 = (function (){var statearr_31701 = state_31684;
(statearr_31701[(8)] = inst_31665__$1);

(statearr_31701[(9)] = inst_31663);

return statearr_31701;
})();
if(cljs.core.truth_(inst_31665__$1)){
var statearr_31702_31726 = state_31684__$1;
(statearr_31702_31726[(1)] = (15));

} else {
var statearr_31703_31727 = state_31684__$1;
(statearr_31703_31727[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31685 === (16))){
var inst_31663 = (state_31684[(9)]);
var inst_31669 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_31663);
var state_31684__$1 = state_31684;
var statearr_31704_31728 = state_31684__$1;
(statearr_31704_31728[(2)] = inst_31669);

(statearr_31704_31728[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31685 === (10))){
var inst_31676 = (state_31684[(2)]);
var state_31684__$1 = (function (){var statearr_31705 = state_31684;
(statearr_31705[(12)] = inst_31676);

return statearr_31705;
})();
var statearr_31706_31729 = state_31684__$1;
(statearr_31706_31729[(2)] = null);

(statearr_31706_31729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31685 === (8))){
var inst_31656 = (state_31684[(11)]);
var inst_31658 = eval(inst_31656);
var state_31684__$1 = state_31684;
var statearr_31707_31730 = state_31684__$1;
(statearr_31707_31730[(2)] = inst_31658);

(statearr_31707_31730[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__29106__auto__ = null;
var figwheel$client$file_reloading$state_machine__29106__auto____0 = (function (){
var statearr_31708 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31708[(0)] = figwheel$client$file_reloading$state_machine__29106__auto__);

(statearr_31708[(1)] = (1));

return statearr_31708;
});
var figwheel$client$file_reloading$state_machine__29106__auto____1 = (function (state_31684){
while(true){
var ret_value__29107__auto__ = (function (){try{while(true){
var result__29108__auto__ = switch__29105__auto__.call(null,state_31684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29108__auto__;
}
break;
}
}catch (e31709){var ex__29109__auto__ = e31709;
var statearr_31710_31731 = state_31684;
(statearr_31710_31731[(2)] = ex__29109__auto__);


if(cljs.core.seq.call(null,(state_31684[(4)]))){
var statearr_31711_31732 = state_31684;
(statearr_31711_31732[(1)] = cljs.core.first.call(null,(state_31684[(4)])));

} else {
throw ex__29109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31733 = state_31684;
state_31684 = G__31733;
continue;
} else {
return ret_value__29107__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29106__auto__ = function(state_31684){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29106__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29106__auto____1.call(this,state_31684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29106__auto____0;
figwheel$client$file_reloading$state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29106__auto____1;
return figwheel$client$file_reloading$state_machine__29106__auto__;
})()
})();
var state__29181__auto__ = (function (){var statearr_31712 = f__29180__auto__.call(null);
(statearr_31712[(6)] = c__29179__auto__);

return statearr_31712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29181__auto__);
}));

return c__29179__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__31735 = arguments.length;
switch (G__31735) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__31737,callback){
var map__31738 = p__31737;
var map__31738__$1 = cljs.core.__destructure_map.call(null,map__31738);
var file_msg = map__31738__$1;
var namespace = cljs.core.get.call(null,map__31738__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__31739){
var map__31740 = p__31739;
var map__31740__$1 = cljs.core.__destructure_map.call(null,map__31740);
var file_msg = map__31740__$1;
var namespace = cljs.core.get.call(null,map__31740__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,figwheel.client.file_reloading.goog$module$goog$object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__31741){
var map__31742 = p__31741;
var map__31742__$1 = cljs.core.__destructure_map.call(null,map__31742);
var file_msg = map__31742__$1;
var namespace = cljs.core.get.call(null,map__31742__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4251__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4251__auto__){
var or__4253__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4251__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__31743,callback){
var map__31744 = p__31743;
var map__31744__$1 = cljs.core.__destructure_map.call(null,map__31744);
var file_msg = map__31744__$1;
var request_url = cljs.core.get.call(null,map__31744__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__31744__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__29179__auto___31795 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29180__auto__ = (function (){var switch__29105__auto__ = (function (state_31779){
var state_val_31780 = (state_31779[(1)]);
if((state_val_31780 === (1))){
var inst_31752 = files;
var inst_31753 = cljs.core.seq.call(null,inst_31752);
var inst_31754 = cljs.core.first.call(null,inst_31753);
var inst_31755 = cljs.core.next.call(null,inst_31753);
var inst_31756 = inst_31752;
var state_31779__$1 = (function (){var statearr_31781 = state_31779;
(statearr_31781[(7)] = inst_31755);

(statearr_31781[(8)] = inst_31756);

(statearr_31781[(9)] = inst_31754);

return statearr_31781;
})();
var statearr_31782_31796 = state_31779__$1;
(statearr_31782_31796[(2)] = null);

(statearr_31782_31796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (2))){
var inst_31756 = (state_31779[(8)]);
var inst_31762 = (state_31779[(10)]);
var inst_31761 = cljs.core.seq.call(null,inst_31756);
var inst_31762__$1 = cljs.core.first.call(null,inst_31761);
var inst_31763 = cljs.core.next.call(null,inst_31761);
var inst_31764 = (inst_31762__$1 == null);
var inst_31765 = cljs.core.not.call(null,inst_31764);
var state_31779__$1 = (function (){var statearr_31783 = state_31779;
(statearr_31783[(11)] = inst_31763);

(statearr_31783[(10)] = inst_31762__$1);

return statearr_31783;
})();
if(inst_31765){
var statearr_31784_31797 = state_31779__$1;
(statearr_31784_31797[(1)] = (4));

} else {
var statearr_31785_31798 = state_31779__$1;
(statearr_31785_31798[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (3))){
var inst_31777 = (state_31779[(2)]);
var state_31779__$1 = state_31779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31779__$1,inst_31777);
} else {
if((state_val_31780 === (4))){
var inst_31762 = (state_31779[(10)]);
var inst_31767 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31762);
var state_31779__$1 = state_31779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31779__$1,(7),inst_31767);
} else {
if((state_val_31780 === (5))){
var inst_31773 = cljs.core.async.close_BANG_.call(null,out);
var state_31779__$1 = state_31779;
var statearr_31786_31799 = state_31779__$1;
(statearr_31786_31799[(2)] = inst_31773);

(statearr_31786_31799[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (6))){
var inst_31775 = (state_31779[(2)]);
var state_31779__$1 = state_31779;
var statearr_31787_31800 = state_31779__$1;
(statearr_31787_31800[(2)] = inst_31775);

(statearr_31787_31800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31780 === (7))){
var inst_31763 = (state_31779[(11)]);
var inst_31769 = (state_31779[(2)]);
var inst_31770 = cljs.core.async.put_BANG_.call(null,out,inst_31769);
var inst_31756 = inst_31763;
var state_31779__$1 = (function (){var statearr_31788 = state_31779;
(statearr_31788[(12)] = inst_31770);

(statearr_31788[(8)] = inst_31756);

return statearr_31788;
})();
var statearr_31789_31801 = state_31779__$1;
(statearr_31789_31801[(2)] = null);

(statearr_31789_31801[(1)] = (2));


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
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29106__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29106__auto____0 = (function (){
var statearr_31790 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31790[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29106__auto__);

(statearr_31790[(1)] = (1));

return statearr_31790;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29106__auto____1 = (function (state_31779){
while(true){
var ret_value__29107__auto__ = (function (){try{while(true){
var result__29108__auto__ = switch__29105__auto__.call(null,state_31779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29108__auto__;
}
break;
}
}catch (e31791){var ex__29109__auto__ = e31791;
var statearr_31792_31802 = state_31779;
(statearr_31792_31802[(2)] = ex__29109__auto__);


if(cljs.core.seq.call(null,(state_31779[(4)]))){
var statearr_31793_31803 = state_31779;
(statearr_31793_31803[(1)] = cljs.core.first.call(null,(state_31779[(4)])));

} else {
throw ex__29109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31804 = state_31779;
state_31779 = G__31804;
continue;
} else {
return ret_value__29107__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29106__auto__ = function(state_31779){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29106__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29106__auto____1.call(this,state_31779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29106__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29106__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29106__auto__;
})()
})();
var state__29181__auto__ = (function (){var statearr_31794 = f__29180__auto__.call(null);
(statearr_31794[(6)] = c__29179__auto___31795);

return statearr_31794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29181__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31805,opts){
var map__31806 = p__31805;
var map__31806__$1 = cljs.core.__destructure_map.call(null,map__31806);
var eval_body = cljs.core.get.call(null,map__31806__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__31806__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4251__auto__ = eval_body;
if(cljs.core.truth_(and__4251__auto__)){
return typeof eval_body === 'string';
} else {
return and__4251__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e31807){var e = e31807;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5751__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__31808_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31808_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5751__auto__)){
var file_msg = temp__5751__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__31809){
var vec__31810 = p__31809;
var k = cljs.core.nth.call(null,vec__31810,(0),null);
var v = cljs.core.nth.call(null,vec__31810,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__31813){
var vec__31814 = p__31813;
var k = cljs.core.nth.call(null,vec__31814,(0),null);
var v = cljs.core.nth.call(null,vec__31814,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31820,p__31821){
var map__31822 = p__31820;
var map__31822__$1 = cljs.core.__destructure_map.call(null,map__31822);
var opts = map__31822__$1;
var before_jsload = cljs.core.get.call(null,map__31822__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31822__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__31822__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__31823 = p__31821;
var map__31823__$1 = cljs.core.__destructure_map.call(null,map__31823);
var msg = map__31823__$1;
var files = cljs.core.get.call(null,map__31823__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__31823__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__31823__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29179__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29180__auto__ = (function (){var switch__29105__auto__ = (function (state_31956){
var state_val_31957 = (state_31956[(1)]);
if((state_val_31957 === (7))){
var inst_31838 = (state_31956[(7)]);
var inst_31836 = (state_31956[(8)]);
var inst_31837 = (state_31956[(9)]);
var inst_31835 = (state_31956[(10)]);
var inst_31843 = cljs.core._nth.call(null,inst_31836,inst_31838);
var inst_31844 = figwheel.client.file_reloading.eval_body.call(null,inst_31843,opts);
var inst_31845 = (inst_31838 + (1));
var tmp31958 = inst_31836;
var tmp31959 = inst_31837;
var tmp31960 = inst_31835;
var inst_31835__$1 = tmp31960;
var inst_31836__$1 = tmp31958;
var inst_31837__$1 = tmp31959;
var inst_31838__$1 = inst_31845;
var state_31956__$1 = (function (){var statearr_31961 = state_31956;
(statearr_31961[(7)] = inst_31838__$1);

(statearr_31961[(11)] = inst_31844);

(statearr_31961[(8)] = inst_31836__$1);

(statearr_31961[(9)] = inst_31837__$1);

(statearr_31961[(10)] = inst_31835__$1);

return statearr_31961;
})();
var statearr_31962_32030 = state_31956__$1;
(statearr_31962_32030[(2)] = null);

(statearr_31962_32030[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (20))){
var inst_31878 = (state_31956[(12)]);
var inst_31887 = figwheel.client.file_reloading.sort_files.call(null,inst_31878);
var state_31956__$1 = state_31956;
var statearr_31963_32031 = state_31956__$1;
(statearr_31963_32031[(2)] = inst_31887);

(statearr_31963_32031[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (27))){
var state_31956__$1 = state_31956;
var statearr_31964_32032 = state_31956__$1;
(statearr_31964_32032[(2)] = null);

(statearr_31964_32032[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (1))){
var inst_31827 = (state_31956[(13)]);
var inst_31824 = before_jsload.call(null,files);
var inst_31825 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31826 = (function (){return (function (p1__31817_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31817_SHARP_);
});
})();
var inst_31827__$1 = cljs.core.filter.call(null,inst_31826,files);
var inst_31828 = cljs.core.not_empty.call(null,inst_31827__$1);
var state_31956__$1 = (function (){var statearr_31965 = state_31956;
(statearr_31965[(14)] = inst_31825);

(statearr_31965[(15)] = inst_31824);

(statearr_31965[(13)] = inst_31827__$1);

return statearr_31965;
})();
if(cljs.core.truth_(inst_31828)){
var statearr_31966_32033 = state_31956__$1;
(statearr_31966_32033[(1)] = (2));

} else {
var statearr_31967_32034 = state_31956__$1;
(statearr_31967_32034[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (24))){
var state_31956__$1 = state_31956;
var statearr_31968_32035 = state_31956__$1;
(statearr_31968_32035[(2)] = null);

(statearr_31968_32035[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (4))){
var inst_31879 = (state_31956[(16)]);
var inst_31872 = (state_31956[(2)]);
var inst_31873 = cljs.core.List.EMPTY;
var inst_31874 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31873);
var inst_31875 = (function (){return (function (p1__31818_SHARP_){
var and__4251__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31818_SHARP_);
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31818_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__31818_SHARP_))));
} else {
return and__4251__auto__;
}
});
})();
var inst_31876 = cljs.core.filter.call(null,inst_31875,files);
var inst_31877 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_31878 = cljs.core.concat.call(null,inst_31876,inst_31877);
var inst_31879__$1 = reload_dependents;
var state_31956__$1 = (function (){var statearr_31969 = state_31956;
(statearr_31969[(16)] = inst_31879__$1);

(statearr_31969[(12)] = inst_31878);

(statearr_31969[(17)] = inst_31872);

(statearr_31969[(18)] = inst_31874);

return statearr_31969;
})();
if(cljs.core.truth_(inst_31879__$1)){
var statearr_31970_32036 = state_31956__$1;
(statearr_31970_32036[(1)] = (16));

} else {
var statearr_31971_32037 = state_31956__$1;
(statearr_31971_32037[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (15))){
var inst_31862 = (state_31956[(2)]);
var state_31956__$1 = state_31956;
var statearr_31972_32038 = state_31956__$1;
(statearr_31972_32038[(2)] = inst_31862);

(statearr_31972_32038[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (21))){
var inst_31889 = (state_31956[(19)]);
var inst_31889__$1 = (state_31956[(2)]);
var inst_31890 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31889__$1);
var state_31956__$1 = (function (){var statearr_31973 = state_31956;
(statearr_31973[(19)] = inst_31889__$1);

return statearr_31973;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31956__$1,(22),inst_31890);
} else {
if((state_val_31957 === (31))){
var inst_31954 = (state_31956[(2)]);
var state_31956__$1 = state_31956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31956__$1,inst_31954);
} else {
if((state_val_31957 === (32))){
var inst_31931 = (state_31956[(20)]);
var inst_31935 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_31936 = cljs.core.map.call(null,inst_31935,inst_31931);
var inst_31937 = cljs.core.pr_str.call(null,inst_31936);
var inst_31938 = ["figwheel-no-load meta-data: ",inst_31937].join('');
var inst_31939 = figwheel.client.utils.log.call(null,inst_31938);
var state_31956__$1 = state_31956;
var statearr_31974_32039 = state_31956__$1;
(statearr_31974_32039[(2)] = inst_31939);

(statearr_31974_32039[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (33))){
var state_31956__$1 = state_31956;
var statearr_31975_32040 = state_31956__$1;
(statearr_31975_32040[(2)] = null);

(statearr_31975_32040[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (13))){
var inst_31848 = (state_31956[(21)]);
var inst_31852 = cljs.core.chunk_first.call(null,inst_31848);
var inst_31853 = cljs.core.chunk_rest.call(null,inst_31848);
var inst_31854 = cljs.core.count.call(null,inst_31852);
var inst_31835 = inst_31853;
var inst_31836 = inst_31852;
var inst_31837 = inst_31854;
var inst_31838 = (0);
var state_31956__$1 = (function (){var statearr_31976 = state_31956;
(statearr_31976[(7)] = inst_31838);

(statearr_31976[(8)] = inst_31836);

(statearr_31976[(9)] = inst_31837);

(statearr_31976[(10)] = inst_31835);

return statearr_31976;
})();
var statearr_31977_32041 = state_31956__$1;
(statearr_31977_32041[(2)] = null);

(statearr_31977_32041[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (22))){
var inst_31889 = (state_31956[(19)]);
var inst_31897 = (state_31956[(22)]);
var inst_31893 = (state_31956[(23)]);
var inst_31892 = (state_31956[(24)]);
var inst_31892__$1 = (state_31956[(2)]);
var inst_31893__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31892__$1);
var inst_31894 = (function (){var all_files = inst_31889;
var res_SINGLEQUOTE_ = inst_31892__$1;
var res = inst_31893__$1;
return (function (p1__31819_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31819_SHARP_));
});
})();
var inst_31895 = cljs.core.filter.call(null,inst_31894,inst_31892__$1);
var inst_31896 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_31897__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31896);
var inst_31898 = cljs.core.not_empty.call(null,inst_31897__$1);
var state_31956__$1 = (function (){var statearr_31978 = state_31956;
(statearr_31978[(22)] = inst_31897__$1);

(statearr_31978[(23)] = inst_31893__$1);

(statearr_31978[(24)] = inst_31892__$1);

(statearr_31978[(25)] = inst_31895);

return statearr_31978;
})();
if(cljs.core.truth_(inst_31898)){
var statearr_31979_32042 = state_31956__$1;
(statearr_31979_32042[(1)] = (23));

} else {
var statearr_31980_32043 = state_31956__$1;
(statearr_31980_32043[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (36))){
var state_31956__$1 = state_31956;
var statearr_31981_32044 = state_31956__$1;
(statearr_31981_32044[(2)] = null);

(statearr_31981_32044[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (29))){
var inst_31889 = (state_31956[(19)]);
var inst_31897 = (state_31956[(22)]);
var inst_31893 = (state_31956[(23)]);
var inst_31931 = (state_31956[(20)]);
var inst_31892 = (state_31956[(24)]);
var inst_31895 = (state_31956[(25)]);
var inst_31925 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31928 = (function (){var all_files = inst_31889;
var res_SINGLEQUOTE_ = inst_31892;
var res = inst_31893;
var files_not_loaded = inst_31895;
var dependencies_that_loaded = inst_31897;
return (function (p__31927){
var map__31982 = p__31927;
var map__31982__$1 = cljs.core.__destructure_map.call(null,map__31982);
var namespace = cljs.core.get.call(null,map__31982__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
})();
var inst_31929 = cljs.core.group_by.call(null,inst_31928,inst_31895);
var inst_31930 = cljs.core.__destructure_map.call(null,inst_31929);
var inst_31931__$1 = cljs.core.get.call(null,inst_31930,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31932 = cljs.core.get.call(null,inst_31930,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31933 = cljs.core.not_empty.call(null,inst_31931__$1);
var state_31956__$1 = (function (){var statearr_31983 = state_31956;
(statearr_31983[(20)] = inst_31931__$1);

(statearr_31983[(26)] = inst_31932);

(statearr_31983[(27)] = inst_31925);

return statearr_31983;
})();
if(cljs.core.truth_(inst_31933)){
var statearr_31984_32045 = state_31956__$1;
(statearr_31984_32045[(1)] = (32));

} else {
var statearr_31985_32046 = state_31956__$1;
(statearr_31985_32046[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (6))){
var inst_31869 = (state_31956[(2)]);
var state_31956__$1 = state_31956;
var statearr_31986_32047 = state_31956__$1;
(statearr_31986_32047[(2)] = inst_31869);

(statearr_31986_32047[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (28))){
var inst_31895 = (state_31956[(25)]);
var inst_31922 = (state_31956[(2)]);
var inst_31923 = cljs.core.not_empty.call(null,inst_31895);
var state_31956__$1 = (function (){var statearr_31987 = state_31956;
(statearr_31987[(28)] = inst_31922);

return statearr_31987;
})();
if(cljs.core.truth_(inst_31923)){
var statearr_31988_32048 = state_31956__$1;
(statearr_31988_32048[(1)] = (29));

} else {
var statearr_31989_32049 = state_31956__$1;
(statearr_31989_32049[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (25))){
var inst_31893 = (state_31956[(23)]);
var inst_31909 = (state_31956[(2)]);
var inst_31910 = cljs.core.not_empty.call(null,inst_31893);
var state_31956__$1 = (function (){var statearr_31990 = state_31956;
(statearr_31990[(29)] = inst_31909);

return statearr_31990;
})();
if(cljs.core.truth_(inst_31910)){
var statearr_31991_32050 = state_31956__$1;
(statearr_31991_32050[(1)] = (26));

} else {
var statearr_31992_32051 = state_31956__$1;
(statearr_31992_32051[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (34))){
var inst_31932 = (state_31956[(26)]);
var inst_31942 = (state_31956[(2)]);
var inst_31943 = cljs.core.not_empty.call(null,inst_31932);
var state_31956__$1 = (function (){var statearr_31993 = state_31956;
(statearr_31993[(30)] = inst_31942);

return statearr_31993;
})();
if(cljs.core.truth_(inst_31943)){
var statearr_31994_32052 = state_31956__$1;
(statearr_31994_32052[(1)] = (35));

} else {
var statearr_31995_32053 = state_31956__$1;
(statearr_31995_32053[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (17))){
var state_31956__$1 = state_31956;
var statearr_31996_32054 = state_31956__$1;
(statearr_31996_32054[(2)] = recompile_dependents);

(statearr_31996_32054[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (3))){
var state_31956__$1 = state_31956;
var statearr_31997_32055 = state_31956__$1;
(statearr_31997_32055[(2)] = null);

(statearr_31997_32055[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (12))){
var inst_31865 = (state_31956[(2)]);
var state_31956__$1 = state_31956;
var statearr_31998_32056 = state_31956__$1;
(statearr_31998_32056[(2)] = inst_31865);

(statearr_31998_32056[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (2))){
var inst_31827 = (state_31956[(13)]);
var inst_31834 = cljs.core.seq.call(null,inst_31827);
var inst_31835 = inst_31834;
var inst_31836 = null;
var inst_31837 = (0);
var inst_31838 = (0);
var state_31956__$1 = (function (){var statearr_31999 = state_31956;
(statearr_31999[(7)] = inst_31838);

(statearr_31999[(8)] = inst_31836);

(statearr_31999[(9)] = inst_31837);

(statearr_31999[(10)] = inst_31835);

return statearr_31999;
})();
var statearr_32000_32057 = state_31956__$1;
(statearr_32000_32057[(2)] = null);

(statearr_32000_32057[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (23))){
var inst_31889 = (state_31956[(19)]);
var inst_31897 = (state_31956[(22)]);
var inst_31893 = (state_31956[(23)]);
var inst_31892 = (state_31956[(24)]);
var inst_31895 = (state_31956[(25)]);
var inst_31900 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_31902 = (function (){var all_files = inst_31889;
var res_SINGLEQUOTE_ = inst_31892;
var res = inst_31893;
var files_not_loaded = inst_31895;
var dependencies_that_loaded = inst_31897;
return (function (p__31901){
var map__32001 = p__31901;
var map__32001__$1 = cljs.core.__destructure_map.call(null,map__32001);
var request_url = cljs.core.get.call(null,map__32001__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_31903 = cljs.core.reverse.call(null,inst_31897);
var inst_31904 = cljs.core.map.call(null,inst_31902,inst_31903);
var inst_31905 = cljs.core.pr_str.call(null,inst_31904);
var inst_31906 = figwheel.client.utils.log.call(null,inst_31905);
var state_31956__$1 = (function (){var statearr_32002 = state_31956;
(statearr_32002[(31)] = inst_31900);

return statearr_32002;
})();
var statearr_32003_32058 = state_31956__$1;
(statearr_32003_32058[(2)] = inst_31906);

(statearr_32003_32058[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (35))){
var inst_31932 = (state_31956[(26)]);
var inst_31945 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31932);
var inst_31946 = cljs.core.pr_str.call(null,inst_31945);
var inst_31947 = ["not required: ",inst_31946].join('');
var inst_31948 = figwheel.client.utils.log.call(null,inst_31947);
var state_31956__$1 = state_31956;
var statearr_32004_32059 = state_31956__$1;
(statearr_32004_32059[(2)] = inst_31948);

(statearr_32004_32059[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (19))){
var inst_31878 = (state_31956[(12)]);
var inst_31885 = figwheel.client.file_reloading.expand_files.call(null,inst_31878);
var state_31956__$1 = state_31956;
var statearr_32005_32060 = state_31956__$1;
(statearr_32005_32060[(2)] = inst_31885);

(statearr_32005_32060[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (11))){
var state_31956__$1 = state_31956;
var statearr_32006_32061 = state_31956__$1;
(statearr_32006_32061[(2)] = null);

(statearr_32006_32061[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (9))){
var inst_31867 = (state_31956[(2)]);
var state_31956__$1 = state_31956;
var statearr_32007_32062 = state_31956__$1;
(statearr_32007_32062[(2)] = inst_31867);

(statearr_32007_32062[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (5))){
var inst_31838 = (state_31956[(7)]);
var inst_31837 = (state_31956[(9)]);
var inst_31840 = (inst_31838 < inst_31837);
var inst_31841 = inst_31840;
var state_31956__$1 = state_31956;
if(cljs.core.truth_(inst_31841)){
var statearr_32008_32063 = state_31956__$1;
(statearr_32008_32063[(1)] = (7));

} else {
var statearr_32009_32064 = state_31956__$1;
(statearr_32009_32064[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (14))){
var inst_31848 = (state_31956[(21)]);
var inst_31857 = cljs.core.first.call(null,inst_31848);
var inst_31858 = figwheel.client.file_reloading.eval_body.call(null,inst_31857,opts);
var inst_31859 = cljs.core.next.call(null,inst_31848);
var inst_31835 = inst_31859;
var inst_31836 = null;
var inst_31837 = (0);
var inst_31838 = (0);
var state_31956__$1 = (function (){var statearr_32010 = state_31956;
(statearr_32010[(7)] = inst_31838);

(statearr_32010[(32)] = inst_31858);

(statearr_32010[(8)] = inst_31836);

(statearr_32010[(9)] = inst_31837);

(statearr_32010[(10)] = inst_31835);

return statearr_32010;
})();
var statearr_32011_32065 = state_31956__$1;
(statearr_32011_32065[(2)] = null);

(statearr_32011_32065[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (26))){
var inst_31889 = (state_31956[(19)]);
var inst_31897 = (state_31956[(22)]);
var inst_31893 = (state_31956[(23)]);
var inst_31892 = (state_31956[(24)]);
var inst_31895 = (state_31956[(25)]);
var inst_31912 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31914 = (function (){var all_files = inst_31889;
var res_SINGLEQUOTE_ = inst_31892;
var res = inst_31893;
var files_not_loaded = inst_31895;
var dependencies_that_loaded = inst_31897;
return (function (p__31913){
var map__32012 = p__31913;
var map__32012__$1 = cljs.core.__destructure_map.call(null,map__32012);
var namespace = cljs.core.get.call(null,map__32012__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__32012__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_31915 = cljs.core.map.call(null,inst_31914,inst_31893);
var inst_31916 = cljs.core.pr_str.call(null,inst_31915);
var inst_31917 = figwheel.client.utils.log.call(null,inst_31916);
var inst_31918 = (function (){var all_files = inst_31889;
var res_SINGLEQUOTE_ = inst_31892;
var res = inst_31893;
var files_not_loaded = inst_31895;
var dependencies_that_loaded = inst_31897;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_31919 = setTimeout(inst_31918,(10));
var state_31956__$1 = (function (){var statearr_32013 = state_31956;
(statearr_32013[(33)] = inst_31912);

(statearr_32013[(34)] = inst_31917);

return statearr_32013;
})();
var statearr_32014_32066 = state_31956__$1;
(statearr_32014_32066[(2)] = inst_31919);

(statearr_32014_32066[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (16))){
var inst_31879 = (state_31956[(16)]);
var state_31956__$1 = state_31956;
var statearr_32015_32067 = state_31956__$1;
(statearr_32015_32067[(2)] = inst_31879);

(statearr_32015_32067[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (30))){
var state_31956__$1 = state_31956;
var statearr_32016_32068 = state_31956__$1;
(statearr_32016_32068[(2)] = null);

(statearr_32016_32068[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (10))){
var inst_31848 = (state_31956[(21)]);
var inst_31850 = cljs.core.chunked_seq_QMARK_.call(null,inst_31848);
var state_31956__$1 = state_31956;
if(inst_31850){
var statearr_32017_32069 = state_31956__$1;
(statearr_32017_32069[(1)] = (13));

} else {
var statearr_32018_32070 = state_31956__$1;
(statearr_32018_32070[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (18))){
var inst_31883 = (state_31956[(2)]);
var state_31956__$1 = state_31956;
if(cljs.core.truth_(inst_31883)){
var statearr_32019_32071 = state_31956__$1;
(statearr_32019_32071[(1)] = (19));

} else {
var statearr_32020_32072 = state_31956__$1;
(statearr_32020_32072[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (37))){
var inst_31951 = (state_31956[(2)]);
var state_31956__$1 = state_31956;
var statearr_32021_32073 = state_31956__$1;
(statearr_32021_32073[(2)] = inst_31951);

(statearr_32021_32073[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (8))){
var inst_31835 = (state_31956[(10)]);
var inst_31848 = (state_31956[(21)]);
var inst_31848__$1 = cljs.core.seq.call(null,inst_31835);
var state_31956__$1 = (function (){var statearr_32022 = state_31956;
(statearr_32022[(21)] = inst_31848__$1);

return statearr_32022;
})();
if(inst_31848__$1){
var statearr_32023_32074 = state_31956__$1;
(statearr_32023_32074[(1)] = (10));

} else {
var statearr_32024_32075 = state_31956__$1;
(statearr_32024_32075[(1)] = (11));

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
});
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29106__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29106__auto____0 = (function (){
var statearr_32025 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32025[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29106__auto__);

(statearr_32025[(1)] = (1));

return statearr_32025;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29106__auto____1 = (function (state_31956){
while(true){
var ret_value__29107__auto__ = (function (){try{while(true){
var result__29108__auto__ = switch__29105__auto__.call(null,state_31956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29108__auto__;
}
break;
}
}catch (e32026){var ex__29109__auto__ = e32026;
var statearr_32027_32076 = state_31956;
(statearr_32027_32076[(2)] = ex__29109__auto__);


if(cljs.core.seq.call(null,(state_31956[(4)]))){
var statearr_32028_32077 = state_31956;
(statearr_32028_32077[(1)] = cljs.core.first.call(null,(state_31956[(4)])));

} else {
throw ex__29109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32078 = state_31956;
state_31956 = G__32078;
continue;
} else {
return ret_value__29107__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29106__auto__ = function(state_31956){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29106__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29106__auto____1.call(this,state_31956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29106__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29106__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29106__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29106__auto__;
})()
})();
var state__29181__auto__ = (function (){var statearr_32029 = f__29180__auto__.call(null);
(statearr_32029[(6)] = c__29179__auto__);

return statearr_32029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29181__auto__);
}));

return c__29179__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__32081,link){
var map__32082 = p__32081;
var map__32082__$1 = cljs.core.__destructure_map.call(null,map__32082);
var file = cljs.core.get.call(null,map__32082__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5753__auto__ = link.href;
if(cljs.core.truth_(temp__5753__auto__)){
var link_href = temp__5753__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__32079_SHARP_,p2__32080_SHARP_){
if(cljs.core._EQ_.call(null,p1__32079_SHARP_,p2__32080_SHARP_)){
return p1__32079_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5753__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32084){
var map__32085 = p__32084;
var map__32085__$1 = cljs.core.__destructure_map.call(null,map__32085);
var match_length = cljs.core.get.call(null,map__32085__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__32085__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32083_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32083_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5753__auto__)){
var res = temp__5753__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__32086_SHARP_,p2__32087_SHARP_){
return cljs.core.assoc.call(null,p1__32086_SHARP_,cljs.core.get.call(null,p2__32087_SHARP_,key),p2__32087_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5751__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5751__auto__)){
var link = temp__5751__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_32088 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_32088);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_32088);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__32089,p__32090){
var map__32091 = p__32089;
var map__32091__$1 = cljs.core.__destructure_map.call(null,map__32091);
var on_cssload = cljs.core.get.call(null,map__32091__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__32092 = p__32090;
var map__32092__$1 = cljs.core.__destructure_map.call(null,map__32092);
var files_msg = map__32092__$1;
var files = cljs.core.get.call(null,map__32092__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5753__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5753__auto__)){
var f_datas = temp__5753__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1658833864795
