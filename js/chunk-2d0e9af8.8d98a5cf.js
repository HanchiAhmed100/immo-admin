(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e9af8"],{"8f1e":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12 mb-2"},[n("houses-group-by-type")],1),n("div",{staticClass:"col-6 mb-2"},[n("houses-by-contrat")],1),n("div",{staticClass:"col-6 mb-2"},[n("houses-by-etat")],1),n("div",{staticClass:"col-12"},[n("houses-by-gouvernerat")],1)])},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mycard p-2 py-4"},[n("apexchart",{attrs:{exchart:"",type:"pie",height:"250",options:t.chartOptions,series:t.series}})],1)},o=[],u=n("1da1"),i=(n("96cf"),n("d4ec")),c=n("bee2"),p=n("bc3a"),l=n.n(p),h=function(){function t(){Object(i["a"])(this,t)}return Object(c["a"])(t,[{key:"LoadHousesGroupByType",value:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("https://immo-app-hanchi-ahmed.herokuapp.com/api/stats/by_type_log").then((function(t){e(t.data)})).catch((function(t){return console.log(t),null}));case 2:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"LoadHousesGroupByContrat",value:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("https://immo-app-hanchi-ahmed.herokuapp.com/api/stats/by_contrat").then((function(t){e(t.data)})).catch((function(t){return console.log(t),null}));case 2:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"LoadHousesGroupByEtat",value:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("https://immo-app-hanchi-ahmed.herokuapp.com/api/stats/by_etat").then((function(t){e(t.data)})).catch((function(t){return console.log(t),null}));case 2:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"LoadHousesByContratAndGouvernerat",value:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("https://immo-app-hanchi-ahmed.herokuapp.com/api/stats/by_contrat_and_gouvernerat").then((function(t){e(t.data)})).catch((function(t){return console.log(t),null}));case 2:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}]),t}(),d={name:"HousesGroupContrat",data:function(){return{series:[],chartOptions:{chart:{width:200,type:"pie"},labels:[],responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]}}},created:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new h,e.next=3,n.LoadHousesGroupByContrat((function(e){console.log(e);for(var n=0;n<e.length;n++){var r=e[n];t.series.push(r.nbr),t.chartOptions.labels.push(r.contrat)}}));case 3:case"end":return e.stop()}}),e)})))()}},m=d,f=n("2877"),b=Object(f["a"])(m,s,o,!1,null,null,null),y=b.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mycard p-2 py-4"},[n("apexchart",{attrs:{type:"donut",height:"250",options:t.chartOptions,series:t.series}})],1)},g=[],w={name:"HousesGroupByEtat",data:function(){return{series:[],chartOptions:{chart:{type:"donut"},labels:[],responsive:[{breakpoint:480,options:{chart:{width:380},legend:{position:"bottom"}}}]}}},created:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new h,e.next=3,n.LoadHousesGroupByEtat((function(e){console.log(e);for(var n=0;n<e.length;n++){var r=e[n];"0"==r.etat?(t.chartOptions.labels.push("Immobilier non expertiser"),t.series.push(r.nbr)):"1"==r.etat?(t.chartOptions.labels.push("En cours"),t.series.push(r.nbr)):"2"==r.etat&&(t.chartOptions.labels.push("Immobilier Expertiser"),t.series.push(r.nbr))}}));case 3:case"end":return e.stop()}}),e)})))()}},x=w,O=Object(f["a"])(x,v,g,!1,null,null,null),k=O.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mycard p-2 py-4"})},j=[],C={},H=Object(f["a"])(C,_,j,!1,null,null,null),R=H.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mycard p-2 py-4"},[n("apexchart",{attrs:{exchart:"",type:"bar",height:"350",options:t.chartOptions,series:t.series}})],1)},G=[],E={name:"HousesGroupByType",data:function(){return{series:[{data:[]}],chartOptions:{chart:{height:350,type:"bar"},colors:["#325288","#28b5b5","#184d47","#91c788"],plotOptions:{bar:{columnWidth:"45%",distributed:!0}},dataLabels:{enabled:!1},legend:{show:!1},xaxis:{categories:[],labels:{style:{colors:["#325288","#28b5b5","#184d47","#91c788"],fontSize:"12px"}}}}}},created:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new h,e.next=3,n.LoadHousesGroupByType((function(e){for(var n=0;n<e.length;n++){var r=e[n];t.series[0].data.push(r.nbr),t.chartOptions.xaxis.categories.push(r.type_log)}}));case 3:case"end":return e.stop()}}),e)})))()}},L=E,$=Object(f["a"])(L,B,G,!1,null,null,null),T=$.exports,I={components:{HousesGroupByType:T,HousesByContrat:y,HousesByEtat:k,HousesByGouvernerat:R},name:"Statistique"},J=I,S=Object(f["a"])(J,r,a,!1,null,null,null);e["default"]=S.exports}}]);
//# sourceMappingURL=chunk-2d0e9af8.8d98a5cf.js.map