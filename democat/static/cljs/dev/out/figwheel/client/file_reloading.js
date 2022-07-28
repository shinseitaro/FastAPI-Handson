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
var G__28339 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.debugLoader_.dependencies_,path);
if((G__28339 == null)){
return null;
} else {
return figwheel.client.file_reloading.goog$module$goog$object.get.call(null,G__28339,"requires");
}
}):(function (path){
var G__28340 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.dependencies_.requires,path);
if((G__28340 == null)){
return null;
} else {
return figwheel.client.file_reloading.goog$module$goog$object.getKeys.call(null,G__28340);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28341_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28341_SHARP_)));
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
var G__28342 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.debugLoader_.dependencies_,path);
var G__28342__$1 = (((G__28342 == null))?null:figwheel.client.file_reloading.goog$module$goog$object.get.call(null,G__28342,"provides"));
if((G__28342__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__28342__$1);
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
var seq__28343 = cljs.core.seq.call(null,provides);
var chunk__28344 = null;
var count__28345 = (0);
var i__28346 = (0);
while(true){
if((i__28346 < count__28345)){
var prov = cljs.core._nth.call(null,chunk__28344,i__28346);
var seq__28355_28367 = cljs.core.seq.call(null,requires);
var chunk__28356_28368 = null;
var count__28357_28369 = (0);
var i__28358_28370 = (0);
while(true){
if((i__28358_28370 < count__28357_28369)){
var req_28371 = cljs.core._nth.call(null,chunk__28356_28368,i__28358_28370);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28371,prov);


var G__28372 = seq__28355_28367;
var G__28373 = chunk__28356_28368;
var G__28374 = count__28357_28369;
var G__28375 = (i__28358_28370 + (1));
seq__28355_28367 = G__28372;
chunk__28356_28368 = G__28373;
count__28357_28369 = G__28374;
i__28358_28370 = G__28375;
continue;
} else {
var temp__5753__auto___28376 = cljs.core.seq.call(null,seq__28355_28367);
if(temp__5753__auto___28376){
var seq__28355_28377__$1 = temp__5753__auto___28376;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28355_28377__$1)){
var c__4679__auto___28378 = cljs.core.chunk_first.call(null,seq__28355_28377__$1);
var G__28379 = cljs.core.chunk_rest.call(null,seq__28355_28377__$1);
var G__28380 = c__4679__auto___28378;
var G__28381 = cljs.core.count.call(null,c__4679__auto___28378);
var G__28382 = (0);
seq__28355_28367 = G__28379;
chunk__28356_28368 = G__28380;
count__28357_28369 = G__28381;
i__28358_28370 = G__28382;
continue;
} else {
var req_28383 = cljs.core.first.call(null,seq__28355_28377__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28383,prov);


var G__28384 = cljs.core.next.call(null,seq__28355_28377__$1);
var G__28385 = null;
var G__28386 = (0);
var G__28387 = (0);
seq__28355_28367 = G__28384;
chunk__28356_28368 = G__28385;
count__28357_28369 = G__28386;
i__28358_28370 = G__28387;
continue;
}
} else {
}
}
break;
}


var G__28388 = seq__28343;
var G__28389 = chunk__28344;
var G__28390 = count__28345;
var G__28391 = (i__28346 + (1));
seq__28343 = G__28388;
chunk__28344 = G__28389;
count__28345 = G__28390;
i__28346 = G__28391;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__28343);
if(temp__5753__auto__){
var seq__28343__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28343__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__28343__$1);
var G__28392 = cljs.core.chunk_rest.call(null,seq__28343__$1);
var G__28393 = c__4679__auto__;
var G__28394 = cljs.core.count.call(null,c__4679__auto__);
var G__28395 = (0);
seq__28343 = G__28392;
chunk__28344 = G__28393;
count__28345 = G__28394;
i__28346 = G__28395;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28343__$1);
var seq__28359_28396 = cljs.core.seq.call(null,requires);
var chunk__28360_28397 = null;
var count__28361_28398 = (0);
var i__28362_28399 = (0);
while(true){
if((i__28362_28399 < count__28361_28398)){
var req_28400 = cljs.core._nth.call(null,chunk__28360_28397,i__28362_28399);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28400,prov);


var G__28401 = seq__28359_28396;
var G__28402 = chunk__28360_28397;
var G__28403 = count__28361_28398;
var G__28404 = (i__28362_28399 + (1));
seq__28359_28396 = G__28401;
chunk__28360_28397 = G__28402;
count__28361_28398 = G__28403;
i__28362_28399 = G__28404;
continue;
} else {
var temp__5753__auto___28405__$1 = cljs.core.seq.call(null,seq__28359_28396);
if(temp__5753__auto___28405__$1){
var seq__28359_28406__$1 = temp__5753__auto___28405__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28359_28406__$1)){
var c__4679__auto___28407 = cljs.core.chunk_first.call(null,seq__28359_28406__$1);
var G__28408 = cljs.core.chunk_rest.call(null,seq__28359_28406__$1);
var G__28409 = c__4679__auto___28407;
var G__28410 = cljs.core.count.call(null,c__4679__auto___28407);
var G__28411 = (0);
seq__28359_28396 = G__28408;
chunk__28360_28397 = G__28409;
count__28361_28398 = G__28410;
i__28362_28399 = G__28411;
continue;
} else {
var req_28412 = cljs.core.first.call(null,seq__28359_28406__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28412,prov);


var G__28413 = cljs.core.next.call(null,seq__28359_28406__$1);
var G__28414 = null;
var G__28415 = (0);
var G__28416 = (0);
seq__28359_28396 = G__28413;
chunk__28360_28397 = G__28414;
count__28361_28398 = G__28415;
i__28362_28399 = G__28416;
continue;
}
} else {
}
}
break;
}


var G__28417 = cljs.core.next.call(null,seq__28343__$1);
var G__28418 = null;
var G__28419 = (0);
var G__28420 = (0);
seq__28343 = G__28417;
chunk__28344 = G__28418;
count__28345 = G__28419;
i__28346 = G__28420;
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
var seq__28363 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__28364 = null;
var count__28365 = (0);
var i__28366 = (0);
while(true){
if((i__28366 < count__28365)){
var prov = cljs.core._nth.call(null,chunk__28364,i__28366);
figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,deps,((function (seq__28363,chunk__28364,count__28365,i__28366,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__28363,chunk__28364,count__28365,i__28366,prov,requires))
);


var G__28421 = seq__28363;
var G__28422 = chunk__28364;
var G__28423 = count__28365;
var G__28424 = (i__28366 + (1));
seq__28363 = G__28421;
chunk__28364 = G__28422;
count__28365 = G__28423;
i__28366 = G__28424;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__28363);
if(temp__5753__auto__){
var seq__28363__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28363__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__28363__$1);
var G__28425 = cljs.core.chunk_rest.call(null,seq__28363__$1);
var G__28426 = c__4679__auto__;
var G__28427 = cljs.core.count.call(null,c__4679__auto__);
var G__28428 = (0);
seq__28363 = G__28425;
chunk__28364 = G__28426;
count__28365 = G__28427;
i__28366 = G__28428;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28363__$1);
figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,deps,((function (seq__28363,chunk__28364,count__28365,i__28366,prov,seq__28363__$1,temp__5753__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__28363,chunk__28364,count__28365,i__28366,prov,seq__28363__$1,temp__5753__auto__,requires))
);


var G__28429 = cljs.core.next.call(null,seq__28363__$1);
var G__28430 = null;
var G__28431 = (0);
var G__28432 = (0);
seq__28363 = G__28429;
chunk__28364 = G__28430;
count__28365 = G__28431;
i__28366 = G__28432;
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
return cljs.core.some.call(null,(function (p__28433){
var vec__28434 = p__28433;
var _ = cljs.core.nth.call(null,vec__28434,(0),null);
var v = cljs.core.nth.call(null,vec__28434,(1),null);
var and__4251__auto__ = v;
if(cljs.core.truth_(and__4251__auto__)){
return v.call(null,dep);
} else {
return and__4251__auto__;
}
}),cljs.core.filter.call(null,(function (p__28437){
var vec__28438 = p__28437;
var k = cljs.core.nth.call(null,vec__28438,(0),null);
var v = cljs.core.nth.call(null,vec__28438,(1),null);
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

var seq__28450_28458 = cljs.core.seq.call(null,deps);
var chunk__28451_28459 = null;
var count__28452_28460 = (0);
var i__28453_28461 = (0);
while(true){
if((i__28453_28461 < count__28452_28460)){
var dep_28462 = cljs.core._nth.call(null,chunk__28451_28459,i__28453_28461);
if(cljs.core.truth_((function (){var and__4251__auto__ = dep_28462;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28462));
} else {
return and__4251__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28462,(depth + (1)),state);
} else {
}


var G__28463 = seq__28450_28458;
var G__28464 = chunk__28451_28459;
var G__28465 = count__28452_28460;
var G__28466 = (i__28453_28461 + (1));
seq__28450_28458 = G__28463;
chunk__28451_28459 = G__28464;
count__28452_28460 = G__28465;
i__28453_28461 = G__28466;
continue;
} else {
var temp__5753__auto___28467 = cljs.core.seq.call(null,seq__28450_28458);
if(temp__5753__auto___28467){
var seq__28450_28468__$1 = temp__5753__auto___28467;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28450_28468__$1)){
var c__4679__auto___28469 = cljs.core.chunk_first.call(null,seq__28450_28468__$1);
var G__28470 = cljs.core.chunk_rest.call(null,seq__28450_28468__$1);
var G__28471 = c__4679__auto___28469;
var G__28472 = cljs.core.count.call(null,c__4679__auto___28469);
var G__28473 = (0);
seq__28450_28458 = G__28470;
chunk__28451_28459 = G__28471;
count__28452_28460 = G__28472;
i__28453_28461 = G__28473;
continue;
} else {
var dep_28474 = cljs.core.first.call(null,seq__28450_28468__$1);
if(cljs.core.truth_((function (){var and__4251__auto__ = dep_28474;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28474));
} else {
return and__4251__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28474,(depth + (1)),state);
} else {
}


var G__28475 = cljs.core.next.call(null,seq__28450_28468__$1);
var G__28476 = null;
var G__28477 = (0);
var G__28478 = (0);
seq__28450_28458 = G__28475;
chunk__28451_28459 = G__28476;
count__28452_28460 = G__28477;
i__28453_28461 = G__28478;
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
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28454){
var vec__28455 = p__28454;
var seq__28456 = cljs.core.seq.call(null,vec__28455);
var first__28457 = cljs.core.first.call(null,seq__28456);
var seq__28456__$1 = cljs.core.next.call(null,seq__28456);
var x = first__28457;
var xs = seq__28456__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__28441_SHARP_){
return clojure.set.difference.call(null,p1__28441_SHARP_,x);
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
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__28479_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__28479_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28480 = cljs.core.seq.call(null,provides);
var chunk__28481 = null;
var count__28482 = (0);
var i__28483 = (0);
while(true){
if((i__28483 < count__28482)){
var prov = cljs.core._nth.call(null,chunk__28481,i__28483);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28492_28500 = cljs.core.seq.call(null,requires);
var chunk__28493_28501 = null;
var count__28494_28502 = (0);
var i__28495_28503 = (0);
while(true){
if((i__28495_28503 < count__28494_28502)){
var req_28504 = cljs.core._nth.call(null,chunk__28493_28501,i__28495_28503);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28504,prov);


var G__28505 = seq__28492_28500;
var G__28506 = chunk__28493_28501;
var G__28507 = count__28494_28502;
var G__28508 = (i__28495_28503 + (1));
seq__28492_28500 = G__28505;
chunk__28493_28501 = G__28506;
count__28494_28502 = G__28507;
i__28495_28503 = G__28508;
continue;
} else {
var temp__5753__auto___28509 = cljs.core.seq.call(null,seq__28492_28500);
if(temp__5753__auto___28509){
var seq__28492_28510__$1 = temp__5753__auto___28509;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28492_28510__$1)){
var c__4679__auto___28511 = cljs.core.chunk_first.call(null,seq__28492_28510__$1);
var G__28512 = cljs.core.chunk_rest.call(null,seq__28492_28510__$1);
var G__28513 = c__4679__auto___28511;
var G__28514 = cljs.core.count.call(null,c__4679__auto___28511);
var G__28515 = (0);
seq__28492_28500 = G__28512;
chunk__28493_28501 = G__28513;
count__28494_28502 = G__28514;
i__28495_28503 = G__28515;
continue;
} else {
var req_28516 = cljs.core.first.call(null,seq__28492_28510__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28516,prov);


var G__28517 = cljs.core.next.call(null,seq__28492_28510__$1);
var G__28518 = null;
var G__28519 = (0);
var G__28520 = (0);
seq__28492_28500 = G__28517;
chunk__28493_28501 = G__28518;
count__28494_28502 = G__28519;
i__28495_28503 = G__28520;
continue;
}
} else {
}
}
break;
}


var G__28521 = seq__28480;
var G__28522 = chunk__28481;
var G__28523 = count__28482;
var G__28524 = (i__28483 + (1));
seq__28480 = G__28521;
chunk__28481 = G__28522;
count__28482 = G__28523;
i__28483 = G__28524;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__28480);
if(temp__5753__auto__){
var seq__28480__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28480__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__28480__$1);
var G__28525 = cljs.core.chunk_rest.call(null,seq__28480__$1);
var G__28526 = c__4679__auto__;
var G__28527 = cljs.core.count.call(null,c__4679__auto__);
var G__28528 = (0);
seq__28480 = G__28525;
chunk__28481 = G__28526;
count__28482 = G__28527;
i__28483 = G__28528;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28480__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28496_28529 = cljs.core.seq.call(null,requires);
var chunk__28497_28530 = null;
var count__28498_28531 = (0);
var i__28499_28532 = (0);
while(true){
if((i__28499_28532 < count__28498_28531)){
var req_28533 = cljs.core._nth.call(null,chunk__28497_28530,i__28499_28532);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28533,prov);


var G__28534 = seq__28496_28529;
var G__28535 = chunk__28497_28530;
var G__28536 = count__28498_28531;
var G__28537 = (i__28499_28532 + (1));
seq__28496_28529 = G__28534;
chunk__28497_28530 = G__28535;
count__28498_28531 = G__28536;
i__28499_28532 = G__28537;
continue;
} else {
var temp__5753__auto___28538__$1 = cljs.core.seq.call(null,seq__28496_28529);
if(temp__5753__auto___28538__$1){
var seq__28496_28539__$1 = temp__5753__auto___28538__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28496_28539__$1)){
var c__4679__auto___28540 = cljs.core.chunk_first.call(null,seq__28496_28539__$1);
var G__28541 = cljs.core.chunk_rest.call(null,seq__28496_28539__$1);
var G__28542 = c__4679__auto___28540;
var G__28543 = cljs.core.count.call(null,c__4679__auto___28540);
var G__28544 = (0);
seq__28496_28529 = G__28541;
chunk__28497_28530 = G__28542;
count__28498_28531 = G__28543;
i__28499_28532 = G__28544;
continue;
} else {
var req_28545 = cljs.core.first.call(null,seq__28496_28539__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28545,prov);


var G__28546 = cljs.core.next.call(null,seq__28496_28539__$1);
var G__28547 = null;
var G__28548 = (0);
var G__28549 = (0);
seq__28496_28529 = G__28546;
chunk__28497_28530 = G__28547;
count__28498_28531 = G__28548;
i__28499_28532 = G__28549;
continue;
}
} else {
}
}
break;
}


var G__28550 = cljs.core.next.call(null,seq__28480__$1);
var G__28551 = null;
var G__28552 = (0);
var G__28553 = (0);
seq__28480 = G__28550;
chunk__28481 = G__28551;
count__28482 = G__28552;
i__28483 = G__28553;
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
var seq__28554_28558 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28555_28559 = null;
var count__28556_28560 = (0);
var i__28557_28561 = (0);
while(true){
if((i__28557_28561 < count__28556_28560)){
var ns_28562 = cljs.core._nth.call(null,chunk__28555_28559,i__28557_28561);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28562);


var G__28563 = seq__28554_28558;
var G__28564 = chunk__28555_28559;
var G__28565 = count__28556_28560;
var G__28566 = (i__28557_28561 + (1));
seq__28554_28558 = G__28563;
chunk__28555_28559 = G__28564;
count__28556_28560 = G__28565;
i__28557_28561 = G__28566;
continue;
} else {
var temp__5753__auto___28567 = cljs.core.seq.call(null,seq__28554_28558);
if(temp__5753__auto___28567){
var seq__28554_28568__$1 = temp__5753__auto___28567;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28554_28568__$1)){
var c__4679__auto___28569 = cljs.core.chunk_first.call(null,seq__28554_28568__$1);
var G__28570 = cljs.core.chunk_rest.call(null,seq__28554_28568__$1);
var G__28571 = c__4679__auto___28569;
var G__28572 = cljs.core.count.call(null,c__4679__auto___28569);
var G__28573 = (0);
seq__28554_28558 = G__28570;
chunk__28555_28559 = G__28571;
count__28556_28560 = G__28572;
i__28557_28561 = G__28573;
continue;
} else {
var ns_28574 = cljs.core.first.call(null,seq__28554_28568__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28574);


var G__28575 = cljs.core.next.call(null,seq__28554_28568__$1);
var G__28576 = null;
var G__28577 = (0);
var G__28578 = (0);
seq__28554_28558 = G__28575;
chunk__28555_28559 = G__28576;
count__28556_28560 = G__28577;
i__28557_28561 = G__28578;
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
var G__28579__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28579 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28580__i = 0, G__28580__a = new Array(arguments.length -  0);
while (G__28580__i < G__28580__a.length) {G__28580__a[G__28580__i] = arguments[G__28580__i + 0]; ++G__28580__i;}
  args = new cljs.core.IndexedSeq(G__28580__a,0,null);
} 
return G__28579__delegate.call(this,args);};
G__28579.cljs$lang$maxFixedArity = 0;
G__28579.cljs$lang$applyTo = (function (arglist__28581){
var args = cljs.core.seq(arglist__28581);
return G__28579__delegate(args);
});
G__28579.cljs$core$IFn$_invoke$arity$variadic = G__28579__delegate;
return G__28579;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__28582_SHARP_,p2__28583_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28582_SHARP_)),p2__28583_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__28584_SHARP_,p2__28585_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28584_SHARP_),p2__28585_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__28586 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__28586.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__28586.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__28586;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28587){if((e28587 instanceof Error)){
var e = e28587;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28587;

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
}catch (e28588){if((e28588 instanceof Error)){
var e = e28588;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28588;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28589 = cljs.core._EQ_;
var expr__28590 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28589.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28590))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__28589.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28590))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__28589.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28590))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28592,callback){
var map__28593 = p__28592;
var map__28593__$1 = cljs.core.__destructure_map.call(null,map__28593);
var file_msg = map__28593__$1;
var request_url = cljs.core.get.call(null,map__28593__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
figwheel.client.file_reloading.reloader_loop = (function (){var c__23440__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23441__auto__ = (function (){var switch__23315__auto__ = (function (state_28630){
var state_val_28631 = (state_28630[(1)]);
if((state_val_28631 === (7))){
var inst_28626 = (state_28630[(2)]);
var state_28630__$1 = state_28630;
var statearr_28632_28659 = state_28630__$1;
(statearr_28632_28659[(2)] = inst_28626);

(statearr_28632_28659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28631 === (1))){
var state_28630__$1 = state_28630;
var statearr_28633_28660 = state_28630__$1;
(statearr_28633_28660[(2)] = null);

(statearr_28633_28660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28631 === (4))){
var inst_28596 = (state_28630[(7)]);
var inst_28596__$1 = (state_28630[(2)]);
var state_28630__$1 = (function (){var statearr_28634 = state_28630;
(statearr_28634[(7)] = inst_28596__$1);

return statearr_28634;
})();
if(cljs.core.truth_(inst_28596__$1)){
var statearr_28635_28661 = state_28630__$1;
(statearr_28635_28661[(1)] = (5));

} else {
var statearr_28636_28662 = state_28630__$1;
(statearr_28636_28662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28631 === (15))){
var inst_28611 = (state_28630[(8)]);
var inst_28609 = (state_28630[(9)]);
var inst_28613 = inst_28611.call(null,inst_28609);
var state_28630__$1 = state_28630;
var statearr_28637_28663 = state_28630__$1;
(statearr_28637_28663[(2)] = inst_28613);

(statearr_28637_28663[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28631 === (13))){
var inst_28620 = (state_28630[(2)]);
var state_28630__$1 = state_28630;
var statearr_28638_28664 = state_28630__$1;
(statearr_28638_28664[(2)] = inst_28620);

(statearr_28638_28664[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28631 === (6))){
var state_28630__$1 = state_28630;
var statearr_28639_28665 = state_28630__$1;
(statearr_28639_28665[(2)] = null);

(statearr_28639_28665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28631 === (17))){
var inst_28617 = (state_28630[(2)]);
var state_28630__$1 = state_28630;
var statearr_28640_28666 = state_28630__$1;
(statearr_28640_28666[(2)] = inst_28617);

(statearr_28640_28666[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28631 === (3))){
var inst_28628 = (state_28630[(2)]);
var state_28630__$1 = state_28630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28630__$1,inst_28628);
} else {
if((state_val_28631 === (12))){
var state_28630__$1 = state_28630;
var statearr_28641_28667 = state_28630__$1;
(statearr_28641_28667[(2)] = null);

(statearr_28641_28667[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28631 === (2))){
var state_28630__$1 = state_28630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28630__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28631 === (11))){
var inst_28601 = (state_28630[(10)]);
var inst_28607 = figwheel.client.file_reloading.blocking_load.call(null,inst_28601);
var state_28630__$1 = state_28630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28630__$1,(14),inst_28607);
} else {
if((state_val_28631 === (9))){
var inst_28601 = (state_28630[(10)]);
var state_28630__$1 = state_28630;
if(cljs.core.truth_(inst_28601)){
var statearr_28642_28668 = state_28630__$1;
(statearr_28642_28668[(1)] = (11));

} else {
var statearr_28643_28669 = state_28630__$1;
(statearr_28643_28669[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28631 === (5))){
var inst_28602 = (state_28630[(11)]);
var inst_28596 = (state_28630[(7)]);
var inst_28601 = cljs.core.nth.call(null,inst_28596,(0),null);
var inst_28602__$1 = cljs.core.nth.call(null,inst_28596,(1),null);
var state_28630__$1 = (function (){var statearr_28644 = state_28630;
(statearr_28644[(11)] = inst_28602__$1);

(statearr_28644[(10)] = inst_28601);

return statearr_28644;
})();
if(cljs.core.truth_(inst_28602__$1)){
var statearr_28645_28670 = state_28630__$1;
(statearr_28645_28670[(1)] = (8));

} else {
var statearr_28646_28671 = state_28630__$1;
(statearr_28646_28671[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28631 === (14))){
var inst_28611 = (state_28630[(8)]);
var inst_28601 = (state_28630[(10)]);
var inst_28609 = (state_28630[(2)]);
var inst_28610 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28611__$1 = cljs.core.get.call(null,inst_28610,inst_28601);
var state_28630__$1 = (function (){var statearr_28647 = state_28630;
(statearr_28647[(8)] = inst_28611__$1);

(statearr_28647[(9)] = inst_28609);

return statearr_28647;
})();
if(cljs.core.truth_(inst_28611__$1)){
var statearr_28648_28672 = state_28630__$1;
(statearr_28648_28672[(1)] = (15));

} else {
var statearr_28649_28673 = state_28630__$1;
(statearr_28649_28673[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28631 === (16))){
var inst_28609 = (state_28630[(9)]);
var inst_28615 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28609);
var state_28630__$1 = state_28630;
var statearr_28650_28674 = state_28630__$1;
(statearr_28650_28674[(2)] = inst_28615);

(statearr_28650_28674[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28631 === (10))){
var inst_28622 = (state_28630[(2)]);
var state_28630__$1 = (function (){var statearr_28651 = state_28630;
(statearr_28651[(12)] = inst_28622);

return statearr_28651;
})();
var statearr_28652_28675 = state_28630__$1;
(statearr_28652_28675[(2)] = null);

(statearr_28652_28675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28631 === (8))){
var inst_28602 = (state_28630[(11)]);
var inst_28604 = eval(inst_28602);
var state_28630__$1 = state_28630;
var statearr_28653_28676 = state_28630__$1;
(statearr_28653_28676[(2)] = inst_28604);

(statearr_28653_28676[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__23316__auto__ = null;
var figwheel$client$file_reloading$state_machine__23316__auto____0 = (function (){
var statearr_28654 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28654[(0)] = figwheel$client$file_reloading$state_machine__23316__auto__);

(statearr_28654[(1)] = (1));

return statearr_28654;
});
var figwheel$client$file_reloading$state_machine__23316__auto____1 = (function (state_28630){
while(true){
var ret_value__23317__auto__ = (function (){try{while(true){
var result__23318__auto__ = switch__23315__auto__.call(null,state_28630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23318__auto__;
}
break;
}
}catch (e28655){var ex__23319__auto__ = e28655;
var statearr_28656_28677 = state_28630;
(statearr_28656_28677[(2)] = ex__23319__auto__);


if(cljs.core.seq.call(null,(state_28630[(4)]))){
var statearr_28657_28678 = state_28630;
(statearr_28657_28678[(1)] = cljs.core.first.call(null,(state_28630[(4)])));

} else {
throw ex__23319__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28679 = state_28630;
state_28630 = G__28679;
continue;
} else {
return ret_value__23317__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23316__auto__ = function(state_28630){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23316__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23316__auto____1.call(this,state_28630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23316__auto____0;
figwheel$client$file_reloading$state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23316__auto____1;
return figwheel$client$file_reloading$state_machine__23316__auto__;
})()
})();
var state__23442__auto__ = (function (){var statearr_28658 = f__23441__auto__.call(null);
(statearr_28658[(6)] = c__23440__auto__);

return statearr_28658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23442__auto__);
}));

return c__23440__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28681 = arguments.length;
switch (G__28681) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28683,callback){
var map__28684 = p__28683;
var map__28684__$1 = cljs.core.__destructure_map.call(null,map__28684);
var file_msg = map__28684__$1;
var namespace = cljs.core.get.call(null,map__28684__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28685){
var map__28686 = p__28685;
var map__28686__$1 = cljs.core.__destructure_map.call(null,map__28686);
var file_msg = map__28686__$1;
var namespace = cljs.core.get.call(null,map__28686__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,figwheel.client.file_reloading.goog$module$goog$object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28687){
var map__28688 = p__28687;
var map__28688__$1 = cljs.core.__destructure_map.call(null,map__28688);
var file_msg = map__28688__$1;
var namespace = cljs.core.get.call(null,map__28688__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28689,callback){
var map__28690 = p__28689;
var map__28690__$1 = cljs.core.__destructure_map.call(null,map__28690);
var file_msg = map__28690__$1;
var request_url = cljs.core.get.call(null,map__28690__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28690__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__23440__auto___28741 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23441__auto__ = (function (){var switch__23315__auto__ = (function (state_28725){
var state_val_28726 = (state_28725[(1)]);
if((state_val_28726 === (1))){
var inst_28698 = files;
var inst_28699 = cljs.core.seq.call(null,inst_28698);
var inst_28700 = cljs.core.first.call(null,inst_28699);
var inst_28701 = cljs.core.next.call(null,inst_28699);
var inst_28702 = inst_28698;
var state_28725__$1 = (function (){var statearr_28727 = state_28725;
(statearr_28727[(7)] = inst_28702);

(statearr_28727[(8)] = inst_28700);

(statearr_28727[(9)] = inst_28701);

return statearr_28727;
})();
var statearr_28728_28742 = state_28725__$1;
(statearr_28728_28742[(2)] = null);

(statearr_28728_28742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (2))){
var inst_28702 = (state_28725[(7)]);
var inst_28708 = (state_28725[(10)]);
var inst_28707 = cljs.core.seq.call(null,inst_28702);
var inst_28708__$1 = cljs.core.first.call(null,inst_28707);
var inst_28709 = cljs.core.next.call(null,inst_28707);
var inst_28710 = (inst_28708__$1 == null);
var inst_28711 = cljs.core.not.call(null,inst_28710);
var state_28725__$1 = (function (){var statearr_28729 = state_28725;
(statearr_28729[(11)] = inst_28709);

(statearr_28729[(10)] = inst_28708__$1);

return statearr_28729;
})();
if(inst_28711){
var statearr_28730_28743 = state_28725__$1;
(statearr_28730_28743[(1)] = (4));

} else {
var statearr_28731_28744 = state_28725__$1;
(statearr_28731_28744[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (3))){
var inst_28723 = (state_28725[(2)]);
var state_28725__$1 = state_28725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28725__$1,inst_28723);
} else {
if((state_val_28726 === (4))){
var inst_28708 = (state_28725[(10)]);
var inst_28713 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28708);
var state_28725__$1 = state_28725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28725__$1,(7),inst_28713);
} else {
if((state_val_28726 === (5))){
var inst_28719 = cljs.core.async.close_BANG_.call(null,out);
var state_28725__$1 = state_28725;
var statearr_28732_28745 = state_28725__$1;
(statearr_28732_28745[(2)] = inst_28719);

(statearr_28732_28745[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (6))){
var inst_28721 = (state_28725[(2)]);
var state_28725__$1 = state_28725;
var statearr_28733_28746 = state_28725__$1;
(statearr_28733_28746[(2)] = inst_28721);

(statearr_28733_28746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (7))){
var inst_28709 = (state_28725[(11)]);
var inst_28715 = (state_28725[(2)]);
var inst_28716 = cljs.core.async.put_BANG_.call(null,out,inst_28715);
var inst_28702 = inst_28709;
var state_28725__$1 = (function (){var statearr_28734 = state_28725;
(statearr_28734[(7)] = inst_28702);

(statearr_28734[(12)] = inst_28716);

return statearr_28734;
})();
var statearr_28735_28747 = state_28725__$1;
(statearr_28735_28747[(2)] = null);

(statearr_28735_28747[(1)] = (2));


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
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23316__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23316__auto____0 = (function (){
var statearr_28736 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28736[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23316__auto__);

(statearr_28736[(1)] = (1));

return statearr_28736;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23316__auto____1 = (function (state_28725){
while(true){
var ret_value__23317__auto__ = (function (){try{while(true){
var result__23318__auto__ = switch__23315__auto__.call(null,state_28725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23318__auto__;
}
break;
}
}catch (e28737){var ex__23319__auto__ = e28737;
var statearr_28738_28748 = state_28725;
(statearr_28738_28748[(2)] = ex__23319__auto__);


if(cljs.core.seq.call(null,(state_28725[(4)]))){
var statearr_28739_28749 = state_28725;
(statearr_28739_28749[(1)] = cljs.core.first.call(null,(state_28725[(4)])));

} else {
throw ex__23319__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28750 = state_28725;
state_28725 = G__28750;
continue;
} else {
return ret_value__23317__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23316__auto__ = function(state_28725){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23316__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23316__auto____1.call(this,state_28725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23316__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23316__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23316__auto__;
})()
})();
var state__23442__auto__ = (function (){var statearr_28740 = f__23441__auto__.call(null);
(statearr_28740[(6)] = c__23440__auto___28741);

return statearr_28740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23442__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28751,opts){
var map__28752 = p__28751;
var map__28752__$1 = cljs.core.__destructure_map.call(null,map__28752);
var eval_body = cljs.core.get.call(null,map__28752__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28752__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e28753){var e = e28753;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5751__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__28754_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28754_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__28755){
var vec__28756 = p__28755;
var k = cljs.core.nth.call(null,vec__28756,(0),null);
var v = cljs.core.nth.call(null,vec__28756,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28759){
var vec__28760 = p__28759;
var k = cljs.core.nth.call(null,vec__28760,(0),null);
var v = cljs.core.nth.call(null,vec__28760,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28766,p__28767){
var map__28768 = p__28766;
var map__28768__$1 = cljs.core.__destructure_map.call(null,map__28768);
var opts = map__28768__$1;
var before_jsload = cljs.core.get.call(null,map__28768__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28768__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28768__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28769 = p__28767;
var map__28769__$1 = cljs.core.__destructure_map.call(null,map__28769);
var msg = map__28769__$1;
var files = cljs.core.get.call(null,map__28769__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28769__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28769__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23440__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__23441__auto__ = (function (){var switch__23315__auto__ = (function (state_28902){
var state_val_28903 = (state_28902[(1)]);
if((state_val_28903 === (7))){
var inst_28784 = (state_28902[(7)]);
var inst_28782 = (state_28902[(8)]);
var inst_28783 = (state_28902[(9)]);
var inst_28781 = (state_28902[(10)]);
var inst_28789 = cljs.core._nth.call(null,inst_28782,inst_28784);
var inst_28790 = figwheel.client.file_reloading.eval_body.call(null,inst_28789,opts);
var inst_28791 = (inst_28784 + (1));
var tmp28904 = inst_28782;
var tmp28905 = inst_28783;
var tmp28906 = inst_28781;
var inst_28781__$1 = tmp28906;
var inst_28782__$1 = tmp28904;
var inst_28783__$1 = tmp28905;
var inst_28784__$1 = inst_28791;
var state_28902__$1 = (function (){var statearr_28907 = state_28902;
(statearr_28907[(11)] = inst_28790);

(statearr_28907[(7)] = inst_28784__$1);

(statearr_28907[(8)] = inst_28782__$1);

(statearr_28907[(9)] = inst_28783__$1);

(statearr_28907[(10)] = inst_28781__$1);

return statearr_28907;
})();
var statearr_28908_28976 = state_28902__$1;
(statearr_28908_28976[(2)] = null);

(statearr_28908_28976[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (20))){
var inst_28824 = (state_28902[(12)]);
var inst_28833 = figwheel.client.file_reloading.sort_files.call(null,inst_28824);
var state_28902__$1 = state_28902;
var statearr_28909_28977 = state_28902__$1;
(statearr_28909_28977[(2)] = inst_28833);

(statearr_28909_28977[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (27))){
var state_28902__$1 = state_28902;
var statearr_28910_28978 = state_28902__$1;
(statearr_28910_28978[(2)] = null);

(statearr_28910_28978[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (1))){
var inst_28773 = (state_28902[(13)]);
var inst_28770 = before_jsload.call(null,files);
var inst_28771 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28772 = (function (){return (function (p1__28763_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28763_SHARP_);
});
})();
var inst_28773__$1 = cljs.core.filter.call(null,inst_28772,files);
var inst_28774 = cljs.core.not_empty.call(null,inst_28773__$1);
var state_28902__$1 = (function (){var statearr_28911 = state_28902;
(statearr_28911[(13)] = inst_28773__$1);

(statearr_28911[(14)] = inst_28770);

(statearr_28911[(15)] = inst_28771);

return statearr_28911;
})();
if(cljs.core.truth_(inst_28774)){
var statearr_28912_28979 = state_28902__$1;
(statearr_28912_28979[(1)] = (2));

} else {
var statearr_28913_28980 = state_28902__$1;
(statearr_28913_28980[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (24))){
var state_28902__$1 = state_28902;
var statearr_28914_28981 = state_28902__$1;
(statearr_28914_28981[(2)] = null);

(statearr_28914_28981[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (4))){
var inst_28825 = (state_28902[(16)]);
var inst_28818 = (state_28902[(2)]);
var inst_28819 = cljs.core.List.EMPTY;
var inst_28820 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28819);
var inst_28821 = (function (){return (function (p1__28764_SHARP_){
var and__4251__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28764_SHARP_);
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28764_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__28764_SHARP_))));
} else {
return and__4251__auto__;
}
});
})();
var inst_28822 = cljs.core.filter.call(null,inst_28821,files);
var inst_28823 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28824 = cljs.core.concat.call(null,inst_28822,inst_28823);
var inst_28825__$1 = reload_dependents;
var state_28902__$1 = (function (){var statearr_28915 = state_28902;
(statearr_28915[(17)] = inst_28818);

(statearr_28915[(16)] = inst_28825__$1);

(statearr_28915[(12)] = inst_28824);

(statearr_28915[(18)] = inst_28820);

return statearr_28915;
})();
if(cljs.core.truth_(inst_28825__$1)){
var statearr_28916_28982 = state_28902__$1;
(statearr_28916_28982[(1)] = (16));

} else {
var statearr_28917_28983 = state_28902__$1;
(statearr_28917_28983[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (15))){
var inst_28808 = (state_28902[(2)]);
var state_28902__$1 = state_28902;
var statearr_28918_28984 = state_28902__$1;
(statearr_28918_28984[(2)] = inst_28808);

(statearr_28918_28984[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (21))){
var inst_28835 = (state_28902[(19)]);
var inst_28835__$1 = (state_28902[(2)]);
var inst_28836 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28835__$1);
var state_28902__$1 = (function (){var statearr_28919 = state_28902;
(statearr_28919[(19)] = inst_28835__$1);

return statearr_28919;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28902__$1,(22),inst_28836);
} else {
if((state_val_28903 === (31))){
var inst_28900 = (state_28902[(2)]);
var state_28902__$1 = state_28902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28902__$1,inst_28900);
} else {
if((state_val_28903 === (32))){
var inst_28877 = (state_28902[(20)]);
var inst_28881 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28882 = cljs.core.map.call(null,inst_28881,inst_28877);
var inst_28883 = cljs.core.pr_str.call(null,inst_28882);
var inst_28884 = ["figwheel-no-load meta-data: ",inst_28883].join('');
var inst_28885 = figwheel.client.utils.log.call(null,inst_28884);
var state_28902__$1 = state_28902;
var statearr_28920_28985 = state_28902__$1;
(statearr_28920_28985[(2)] = inst_28885);

(statearr_28920_28985[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (33))){
var state_28902__$1 = state_28902;
var statearr_28921_28986 = state_28902__$1;
(statearr_28921_28986[(2)] = null);

(statearr_28921_28986[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (13))){
var inst_28794 = (state_28902[(21)]);
var inst_28798 = cljs.core.chunk_first.call(null,inst_28794);
var inst_28799 = cljs.core.chunk_rest.call(null,inst_28794);
var inst_28800 = cljs.core.count.call(null,inst_28798);
var inst_28781 = inst_28799;
var inst_28782 = inst_28798;
var inst_28783 = inst_28800;
var inst_28784 = (0);
var state_28902__$1 = (function (){var statearr_28922 = state_28902;
(statearr_28922[(7)] = inst_28784);

(statearr_28922[(8)] = inst_28782);

(statearr_28922[(9)] = inst_28783);

(statearr_28922[(10)] = inst_28781);

return statearr_28922;
})();
var statearr_28923_28987 = state_28902__$1;
(statearr_28923_28987[(2)] = null);

(statearr_28923_28987[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (22))){
var inst_28839 = (state_28902[(22)]);
var inst_28838 = (state_28902[(23)]);
var inst_28835 = (state_28902[(19)]);
var inst_28843 = (state_28902[(24)]);
var inst_28838__$1 = (state_28902[(2)]);
var inst_28839__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28838__$1);
var inst_28840 = (function (){var all_files = inst_28835;
var res_SINGLEQUOTE_ = inst_28838__$1;
var res = inst_28839__$1;
return (function (p1__28765_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28765_SHARP_));
});
})();
var inst_28841 = cljs.core.filter.call(null,inst_28840,inst_28838__$1);
var inst_28842 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28843__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28842);
var inst_28844 = cljs.core.not_empty.call(null,inst_28843__$1);
var state_28902__$1 = (function (){var statearr_28924 = state_28902;
(statearr_28924[(22)] = inst_28839__$1);

(statearr_28924[(23)] = inst_28838__$1);

(statearr_28924[(25)] = inst_28841);

(statearr_28924[(24)] = inst_28843__$1);

return statearr_28924;
})();
if(cljs.core.truth_(inst_28844)){
var statearr_28925_28988 = state_28902__$1;
(statearr_28925_28988[(1)] = (23));

} else {
var statearr_28926_28989 = state_28902__$1;
(statearr_28926_28989[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (36))){
var state_28902__$1 = state_28902;
var statearr_28927_28990 = state_28902__$1;
(statearr_28927_28990[(2)] = null);

(statearr_28927_28990[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (29))){
var inst_28839 = (state_28902[(22)]);
var inst_28838 = (state_28902[(23)]);
var inst_28877 = (state_28902[(20)]);
var inst_28835 = (state_28902[(19)]);
var inst_28841 = (state_28902[(25)]);
var inst_28843 = (state_28902[(24)]);
var inst_28871 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28874 = (function (){var all_files = inst_28835;
var res_SINGLEQUOTE_ = inst_28838;
var res = inst_28839;
var files_not_loaded = inst_28841;
var dependencies_that_loaded = inst_28843;
return (function (p__28873){
var map__28928 = p__28873;
var map__28928__$1 = cljs.core.__destructure_map.call(null,map__28928);
var namespace = cljs.core.get.call(null,map__28928__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
var inst_28875 = cljs.core.group_by.call(null,inst_28874,inst_28841);
var inst_28876 = cljs.core.__destructure_map.call(null,inst_28875);
var inst_28877__$1 = cljs.core.get.call(null,inst_28876,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28878 = cljs.core.get.call(null,inst_28876,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28879 = cljs.core.not_empty.call(null,inst_28877__$1);
var state_28902__$1 = (function (){var statearr_28929 = state_28902;
(statearr_28929[(26)] = inst_28871);

(statearr_28929[(20)] = inst_28877__$1);

(statearr_28929[(27)] = inst_28878);

return statearr_28929;
})();
if(cljs.core.truth_(inst_28879)){
var statearr_28930_28991 = state_28902__$1;
(statearr_28930_28991[(1)] = (32));

} else {
var statearr_28931_28992 = state_28902__$1;
(statearr_28931_28992[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (6))){
var inst_28815 = (state_28902[(2)]);
var state_28902__$1 = state_28902;
var statearr_28932_28993 = state_28902__$1;
(statearr_28932_28993[(2)] = inst_28815);

(statearr_28932_28993[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (28))){
var inst_28841 = (state_28902[(25)]);
var inst_28868 = (state_28902[(2)]);
var inst_28869 = cljs.core.not_empty.call(null,inst_28841);
var state_28902__$1 = (function (){var statearr_28933 = state_28902;
(statearr_28933[(28)] = inst_28868);

return statearr_28933;
})();
if(cljs.core.truth_(inst_28869)){
var statearr_28934_28994 = state_28902__$1;
(statearr_28934_28994[(1)] = (29));

} else {
var statearr_28935_28995 = state_28902__$1;
(statearr_28935_28995[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (25))){
var inst_28839 = (state_28902[(22)]);
var inst_28855 = (state_28902[(2)]);
var inst_28856 = cljs.core.not_empty.call(null,inst_28839);
var state_28902__$1 = (function (){var statearr_28936 = state_28902;
(statearr_28936[(29)] = inst_28855);

return statearr_28936;
})();
if(cljs.core.truth_(inst_28856)){
var statearr_28937_28996 = state_28902__$1;
(statearr_28937_28996[(1)] = (26));

} else {
var statearr_28938_28997 = state_28902__$1;
(statearr_28938_28997[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (34))){
var inst_28878 = (state_28902[(27)]);
var inst_28888 = (state_28902[(2)]);
var inst_28889 = cljs.core.not_empty.call(null,inst_28878);
var state_28902__$1 = (function (){var statearr_28939 = state_28902;
(statearr_28939[(30)] = inst_28888);

return statearr_28939;
})();
if(cljs.core.truth_(inst_28889)){
var statearr_28940_28998 = state_28902__$1;
(statearr_28940_28998[(1)] = (35));

} else {
var statearr_28941_28999 = state_28902__$1;
(statearr_28941_28999[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (17))){
var state_28902__$1 = state_28902;
var statearr_28942_29000 = state_28902__$1;
(statearr_28942_29000[(2)] = recompile_dependents);

(statearr_28942_29000[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (3))){
var state_28902__$1 = state_28902;
var statearr_28943_29001 = state_28902__$1;
(statearr_28943_29001[(2)] = null);

(statearr_28943_29001[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (12))){
var inst_28811 = (state_28902[(2)]);
var state_28902__$1 = state_28902;
var statearr_28944_29002 = state_28902__$1;
(statearr_28944_29002[(2)] = inst_28811);

(statearr_28944_29002[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (2))){
var inst_28773 = (state_28902[(13)]);
var inst_28780 = cljs.core.seq.call(null,inst_28773);
var inst_28781 = inst_28780;
var inst_28782 = null;
var inst_28783 = (0);
var inst_28784 = (0);
var state_28902__$1 = (function (){var statearr_28945 = state_28902;
(statearr_28945[(7)] = inst_28784);

(statearr_28945[(8)] = inst_28782);

(statearr_28945[(9)] = inst_28783);

(statearr_28945[(10)] = inst_28781);

return statearr_28945;
})();
var statearr_28946_29003 = state_28902__$1;
(statearr_28946_29003[(2)] = null);

(statearr_28946_29003[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (23))){
var inst_28839 = (state_28902[(22)]);
var inst_28838 = (state_28902[(23)]);
var inst_28835 = (state_28902[(19)]);
var inst_28841 = (state_28902[(25)]);
var inst_28843 = (state_28902[(24)]);
var inst_28846 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28848 = (function (){var all_files = inst_28835;
var res_SINGLEQUOTE_ = inst_28838;
var res = inst_28839;
var files_not_loaded = inst_28841;
var dependencies_that_loaded = inst_28843;
return (function (p__28847){
var map__28947 = p__28847;
var map__28947__$1 = cljs.core.__destructure_map.call(null,map__28947);
var request_url = cljs.core.get.call(null,map__28947__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_28849 = cljs.core.reverse.call(null,inst_28843);
var inst_28850 = cljs.core.map.call(null,inst_28848,inst_28849);
var inst_28851 = cljs.core.pr_str.call(null,inst_28850);
var inst_28852 = figwheel.client.utils.log.call(null,inst_28851);
var state_28902__$1 = (function (){var statearr_28948 = state_28902;
(statearr_28948[(31)] = inst_28846);

return statearr_28948;
})();
var statearr_28949_29004 = state_28902__$1;
(statearr_28949_29004[(2)] = inst_28852);

(statearr_28949_29004[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (35))){
var inst_28878 = (state_28902[(27)]);
var inst_28891 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28878);
var inst_28892 = cljs.core.pr_str.call(null,inst_28891);
var inst_28893 = ["not required: ",inst_28892].join('');
var inst_28894 = figwheel.client.utils.log.call(null,inst_28893);
var state_28902__$1 = state_28902;
var statearr_28950_29005 = state_28902__$1;
(statearr_28950_29005[(2)] = inst_28894);

(statearr_28950_29005[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (19))){
var inst_28824 = (state_28902[(12)]);
var inst_28831 = figwheel.client.file_reloading.expand_files.call(null,inst_28824);
var state_28902__$1 = state_28902;
var statearr_28951_29006 = state_28902__$1;
(statearr_28951_29006[(2)] = inst_28831);

(statearr_28951_29006[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (11))){
var state_28902__$1 = state_28902;
var statearr_28952_29007 = state_28902__$1;
(statearr_28952_29007[(2)] = null);

(statearr_28952_29007[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (9))){
var inst_28813 = (state_28902[(2)]);
var state_28902__$1 = state_28902;
var statearr_28953_29008 = state_28902__$1;
(statearr_28953_29008[(2)] = inst_28813);

(statearr_28953_29008[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (5))){
var inst_28784 = (state_28902[(7)]);
var inst_28783 = (state_28902[(9)]);
var inst_28786 = (inst_28784 < inst_28783);
var inst_28787 = inst_28786;
var state_28902__$1 = state_28902;
if(cljs.core.truth_(inst_28787)){
var statearr_28954_29009 = state_28902__$1;
(statearr_28954_29009[(1)] = (7));

} else {
var statearr_28955_29010 = state_28902__$1;
(statearr_28955_29010[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (14))){
var inst_28794 = (state_28902[(21)]);
var inst_28803 = cljs.core.first.call(null,inst_28794);
var inst_28804 = figwheel.client.file_reloading.eval_body.call(null,inst_28803,opts);
var inst_28805 = cljs.core.next.call(null,inst_28794);
var inst_28781 = inst_28805;
var inst_28782 = null;
var inst_28783 = (0);
var inst_28784 = (0);
var state_28902__$1 = (function (){var statearr_28956 = state_28902;
(statearr_28956[(32)] = inst_28804);

(statearr_28956[(7)] = inst_28784);

(statearr_28956[(8)] = inst_28782);

(statearr_28956[(9)] = inst_28783);

(statearr_28956[(10)] = inst_28781);

return statearr_28956;
})();
var statearr_28957_29011 = state_28902__$1;
(statearr_28957_29011[(2)] = null);

(statearr_28957_29011[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (26))){
var inst_28839 = (state_28902[(22)]);
var inst_28838 = (state_28902[(23)]);
var inst_28835 = (state_28902[(19)]);
var inst_28841 = (state_28902[(25)]);
var inst_28843 = (state_28902[(24)]);
var inst_28858 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28860 = (function (){var all_files = inst_28835;
var res_SINGLEQUOTE_ = inst_28838;
var res = inst_28839;
var files_not_loaded = inst_28841;
var dependencies_that_loaded = inst_28843;
return (function (p__28859){
var map__28958 = p__28859;
var map__28958__$1 = cljs.core.__destructure_map.call(null,map__28958);
var namespace = cljs.core.get.call(null,map__28958__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28958__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_28861 = cljs.core.map.call(null,inst_28860,inst_28839);
var inst_28862 = cljs.core.pr_str.call(null,inst_28861);
var inst_28863 = figwheel.client.utils.log.call(null,inst_28862);
var inst_28864 = (function (){var all_files = inst_28835;
var res_SINGLEQUOTE_ = inst_28838;
var res = inst_28839;
var files_not_loaded = inst_28841;
var dependencies_that_loaded = inst_28843;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_28865 = setTimeout(inst_28864,(10));
var state_28902__$1 = (function (){var statearr_28959 = state_28902;
(statearr_28959[(33)] = inst_28863);

(statearr_28959[(34)] = inst_28858);

return statearr_28959;
})();
var statearr_28960_29012 = state_28902__$1;
(statearr_28960_29012[(2)] = inst_28865);

(statearr_28960_29012[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (16))){
var inst_28825 = (state_28902[(16)]);
var state_28902__$1 = state_28902;
var statearr_28961_29013 = state_28902__$1;
(statearr_28961_29013[(2)] = inst_28825);

(statearr_28961_29013[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (30))){
var state_28902__$1 = state_28902;
var statearr_28962_29014 = state_28902__$1;
(statearr_28962_29014[(2)] = null);

(statearr_28962_29014[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (10))){
var inst_28794 = (state_28902[(21)]);
var inst_28796 = cljs.core.chunked_seq_QMARK_.call(null,inst_28794);
var state_28902__$1 = state_28902;
if(inst_28796){
var statearr_28963_29015 = state_28902__$1;
(statearr_28963_29015[(1)] = (13));

} else {
var statearr_28964_29016 = state_28902__$1;
(statearr_28964_29016[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (18))){
var inst_28829 = (state_28902[(2)]);
var state_28902__$1 = state_28902;
if(cljs.core.truth_(inst_28829)){
var statearr_28965_29017 = state_28902__$1;
(statearr_28965_29017[(1)] = (19));

} else {
var statearr_28966_29018 = state_28902__$1;
(statearr_28966_29018[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (37))){
var inst_28897 = (state_28902[(2)]);
var state_28902__$1 = state_28902;
var statearr_28967_29019 = state_28902__$1;
(statearr_28967_29019[(2)] = inst_28897);

(statearr_28967_29019[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (8))){
var inst_28794 = (state_28902[(21)]);
var inst_28781 = (state_28902[(10)]);
var inst_28794__$1 = cljs.core.seq.call(null,inst_28781);
var state_28902__$1 = (function (){var statearr_28968 = state_28902;
(statearr_28968[(21)] = inst_28794__$1);

return statearr_28968;
})();
if(inst_28794__$1){
var statearr_28969_29020 = state_28902__$1;
(statearr_28969_29020[(1)] = (10));

} else {
var statearr_28970_29021 = state_28902__$1;
(statearr_28970_29021[(1)] = (11));

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
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23316__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23316__auto____0 = (function (){
var statearr_28971 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28971[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23316__auto__);

(statearr_28971[(1)] = (1));

return statearr_28971;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23316__auto____1 = (function (state_28902){
while(true){
var ret_value__23317__auto__ = (function (){try{while(true){
var result__23318__auto__ = switch__23315__auto__.call(null,state_28902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23318__auto__;
}
break;
}
}catch (e28972){var ex__23319__auto__ = e28972;
var statearr_28973_29022 = state_28902;
(statearr_28973_29022[(2)] = ex__23319__auto__);


if(cljs.core.seq.call(null,(state_28902[(4)]))){
var statearr_28974_29023 = state_28902;
(statearr_28974_29023[(1)] = cljs.core.first.call(null,(state_28902[(4)])));

} else {
throw ex__23319__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29024 = state_28902;
state_28902 = G__29024;
continue;
} else {
return ret_value__23317__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23316__auto__ = function(state_28902){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23316__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23316__auto____1.call(this,state_28902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23316__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23316__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23316__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23316__auto__;
})()
})();
var state__23442__auto__ = (function (){var statearr_28975 = f__23441__auto__.call(null);
(statearr_28975[(6)] = c__23440__auto__);

return statearr_28975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23442__auto__);
}));

return c__23440__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29027,link){
var map__29028 = p__29027;
var map__29028__$1 = cljs.core.__destructure_map.call(null,map__29028);
var file = cljs.core.get.call(null,map__29028__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5753__auto__ = link.href;
if(cljs.core.truth_(temp__5753__auto__)){
var link_href = temp__5753__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__29025_SHARP_,p2__29026_SHARP_){
if(cljs.core._EQ_.call(null,p1__29025_SHARP_,p2__29026_SHARP_)){
return p1__29025_SHARP_;
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
var temp__5753__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29030){
var map__29031 = p__29030;
var map__29031__$1 = cljs.core.__destructure_map.call(null,map__29031);
var match_length = cljs.core.get.call(null,map__29031__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29031__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29029_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29029_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29032_SHARP_,p2__29033_SHARP_){
return cljs.core.assoc.call(null,p1__29032_SHARP_,cljs.core.get.call(null,p2__29033_SHARP_,key),p2__29033_SHARP_);
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
var loaded_f_datas_29034 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29034);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29034);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29035,p__29036){
var map__29037 = p__29035;
var map__29037__$1 = cljs.core.__destructure_map.call(null,map__29037);
var on_cssload = cljs.core.get.call(null,map__29037__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29038 = p__29036;
var map__29038__$1 = cljs.core.__destructure_map.call(null,map__29038);
var files_msg = map__29038__$1;
var files = cljs.core.get.call(null,map__29038__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1658997507408
