// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('frontend.core');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('ajax.core');
cljs.core.enable_console_print_BANG_.call(null);
frontend.core.site = "";
frontend.core.status_codes = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
frontend.core.image_list = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
/**
 * HTMLの`tag`で指定されたところに`content`を描画する
 */
frontend.core.render = (function frontend$core$render(content,tag){
var dom_object = document.getElementById(tag);
if((dom_object == null)){
return cljs.core.println.call(null,"tag not found at rendering: ",tag);
} else {
return reagent.dom.render.call(null,content,dom_object);
}
});
/**
 * サーバー(`url-path`)からJSONで情報を取得し、`func`を適用して`store'に保存する
 */
frontend.core.get_json = (function frontend$core$get_json(url_path,store,func){
ajax.core.GET.call(null,url_path,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),"json"], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__1576_SHARP_){
cljs.core.reset_BANG_.call(null,store,func.call(null,p1__1576_SHARP_));

return cljs.core.println.call(null,p1__1576_SHARP_);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__1577_SHARP_){
return cljs.core.println.call(null,p1__1577_SHARP_);
})], null));

return store;
});
frontend.core.header = (function frontend$core$header(caption){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-indigo-600"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ml-5 py-4 font-large text-white"], null),caption], null)], null);
});
frontend.core.show_code_images = (function frontend$core$show_code_images(image_list){
return frontend.core.render.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"image-list",new cljs.core.Keyword(null,"class","class",-2030961996),[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.map.call(null,(function (p1__1578_SHARP_){
return cljs.core.identity.call(null,p1__1578_SHARP_);
}),new cljs.core.Keyword(null,"cats","cats",1252953802).cljs$core$IFn$_invoke$arity$1(image_list)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-wrap.-m-1.md:-m-2","div.flex.flex-wrap.-m-1.md:-m-2",-1597466269),cljs.core.map.call(null,(function (p1__1579_SHARP_){
return frontend.core.card.call(null,p1__1579_SHARP_);
}),new cljs.core.Keyword(null,"cats","cats",1252953802).cljs$core$IFn$_invoke$arity$1(image_list))], null)], null),"modal");
});
frontend.core.get_code_images = (function frontend$core$get_code_images(code){
dommy.core.remove_class_BANG_.call(null,dommy.core.remove_class_BANG_.call(null,document.getElementById("modal-panel"),"opacity-0"),"pointer-events-none");

dommy.core.add_class_BANG_.call(null,document.getElementById("body"),"modal-active");

return frontend.core.get_json.call(null,[frontend.core.site,"/status/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code)].join(''),frontend.core.image_list,frontend.core.show_code_images);
});
frontend.core.card = (function frontend$core$card(attrs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-center","div.flex.justify-center",-491420122),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"rounded-lg shadow-lg bg-white max-w-sm m-4"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-900 text-xl font-medium mb-2 bg-indigo-100 text-indigo-800 mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900"], null),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(attrs)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-700 text-base mb-4"], null),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(attrs)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#!",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.core.get_code_images.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(attrs));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.rounded-t-lg","img.rounded-t-lg",907464031),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"filepath","filepath",1097488485).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"filepath","filepath",1097488485).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"cats","cats",1252953802).cljs$core$IFn$_invoke$arity$1(attrs)));
}
})()], null)], null)], null)], null)], null)], null);
});
frontend.core.get_value = (function frontend$core$get_value(tag){
return dommy.core.value.call(null,document.querySelector(dommy.core.selector.call(null,tag)));
});
frontend.core.send = (function frontend$core$send(){
var code = frontend.core.get_value.call(null,new cljs.core.Keyword(null,"#code","#code",-440847056));
var message = frontend.core.get_value.call(null,new cljs.core.Keyword(null,"#message","#message",1863091909));
var url = frontend.core.get_value.call(null,new cljs.core.Keyword(null,"#url","#url",1335422659));
var data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"message","message",-406056002),message,new cljs.core.Keyword(null,"filepath","filepath",1097488485),url], null);
cljs.core.println.call(null,data);

return ajax.core.POST.call(null,[frontend.core.site,"/cat"].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"params","params",710516235),data,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (){
return frontend.core.get_code_images.call(null,code);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (){
return alert("\u9001\u4FE1\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F");
})], null));
});
frontend.core.content = (function frontend$core$content(){
return (function (){
var lcs = "block mb-2 text-gray-900";
var ics = "bg-gray-200 border border-gray-400 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5";
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-grow"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container text-sm font-medium px-5 py-2 mx-auto lg:pt-12 lg:px-32 bg-indigo-400 m-8"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid gap-6 mb-6 md:grid-cols-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),"code",new cljs.core.Keyword(null,"class","class",-2030961996),lcs], null),"\u30B9\u30C6\u30A4\u30BF\u30B9\u756A\u53F7"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"code",new cljs.core.Keyword(null,"required","required",1807647006),"",new cljs.core.Keyword(null,"pattern","pattern",242135423),"[0-9]{3}",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"000",new cljs.core.Keyword(null,"type","type",1174270348),"tel",new cljs.core.Keyword(null,"class","class",-2030961996),ics], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),"message",new cljs.core.Keyword(null,"class","class",-2030961996),lcs], null),"\u30E1\u30C3\u30BB\u30FC\u30B8"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"message",new cljs.core.Keyword(null,"required","required",1807647006),"",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"\u30E1\u30C3\u30BB\u30FC\u30B8",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),ics], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),"url",new cljs.core.Keyword(null,"class","class",-2030961996),lcs], null),"URL"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"url",new cljs.core.Keyword(null,"required","required",1807647006),"",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"image_site.com/address.jpg",new cljs.core.Keyword(null,"type","type",1174270348),"url",new cljs.core.Keyword(null,"class","class",-2030961996),ics], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 bg-indigo-500 p-3 my-6 rounded-lg text-white hover:bg-indigo-600",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"60px",new cljs.core.Keyword(null,"height","height",1025178622),"40px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.core.send.call(null);
})], null),"\u767B\u9332"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"overflow-hidden text-gray-700"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container px-5 py-2 mx-auto lg:pt-12 lg:px-32 bg-indigo-300"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-wrap.-m-1.md:-m-2","div.flex.flex-wrap.-m-1.md:-m-2",-1597466269),cljs.core.map.call(null,(function (p1__1580_SHARP_){
return frontend.core.card.call(null,p1__1580_SHARP_);
}),cljs.core.deref.call(null,frontend.core.status_codes))], null)], null)], null)], null);
});
});
frontend.core.footer = (function frontend$core$footer(caption){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-gray-200"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-2 text-center text-xs"], null),caption], null)], null);
});
frontend.core.update_status = (function frontend$core$update_status(){
return frontend.core.get_json.call(null,[frontend.core.site,"/status"].join(''),frontend.core.status_codes,cljs.core.identity);
});
frontend.core.main = (function frontend$core$main(){
frontend.core.render.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"cljs-app-content",new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col min-h-screen"], null),frontend.core.header.call(null,"HTTP Cat Clone with FastAPI"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.content], null),frontend.core.footer.call(null,[frontend.core.site,", 2022"].join(''))], null),"app");

return frontend.core.update_status.call(null);
});

//# sourceMappingURL=core.js.map?rel=1659000056668
