(this.webpackJsonpcovid19trace=this.webpackJsonpcovid19trace||[]).push([[0],{220:function(t,e,a){t.exports=a(424)},423:function(t,e,a){},424:function(t,e,a){"use strict";a.r(e);var r=a(0),n=a.n(r),i=a(28),o=a.n(i),s=a(181),c=a.n(s),d=a(41),l=a.n(d),u=a(65),p=a(182),m=a(183),h=a(105),v=a(217),g=a(215),f=a(426),b=a(430),D=a(142),E=a(435),C=a(431),w=a(429),y=a(427),j=a(85),x=a(51),I=a(434),N=a(433),_=a(432),O=a(428),k=a(120),P=a(70),z=a.n(P);function U(t){var e=new Date;e.setDate(e.getDate()-t);var a=e.getMonth()+1;return e.getFullYear()+"-"+(a<10?"0"+a:""+a)+"-"+(e.getDate()<10?"0"+e.getDate():""+e.getDate())}function S(){var t=new Date;return(t.getHours()<10?"0"+t.getHours():0+t.getHours())+":"+(t.getMinutes()<10?"0"+t.getMinutes():0+t.getMinutes())}function V(t){var e=new Date(t),a=e.getMonth()+1;return(e.getDate()<10?"0"+e.getDate():""+e.getDate())+"/"+(a<10?"0"+a:""+a)+"/"+e.getFullYear()}function R(){return W.apply(this,arguments)}function W(){return(W=Object(u.a)(l.a.mark((function t(){var e,a,r,n,i=arguments;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=i.length>0&&void 0!==i[0]?i[0]:0,a={dataNationalUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json",dataRegionsUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json",dataProvincesUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province.json",dataWorldUrl:"https://pomber.github.io/covid19/timeseries.json",dataNoteUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-note.json",dataRegionsLatestUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json",dataNationalLatestUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json"}.dataRegionsUrl,r=[],0===e){t.next=7;break}return t.abrupt("return",z.a.get(a).then((function(t){return t.data.filter((function(t){return t.data.includes(e)}))})));case 7:return n={dataNationalUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json",dataRegionsUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json",dataProvincesUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province.json",dataWorldUrl:"https://pomber.github.io/covid19/timeseries.json",dataNoteUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-note.json",dataRegionsLatestUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json",dataNationalLatestUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json"}.dataRegionsLatestUrl,t.abrupt("return",z.a.get(n).then((function(t){var e=t.data,a=[],n=[],i=[],o=[],s=[],c=[];return e.sort((function(t,e){return e.totale_positivi-t.totale_positivi})).slice(0,12).forEach((function(t){c.push(t.denominazione_regione),a.push(t.ricoverati_con_sintomi),n.push(t.terapia_intensiva),i.push(t.totale_ospedalizzati),o.push(t.isolamento_domiciliare),s.push(t.totale_positivi)})),r.push(c,a,n,i,o,s),r})));case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function L(t){return T.apply(this,arguments)}function T(){return(T=Object(u.a)(l.a.mark((function t(e){var a,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={dataNationalUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json",dataRegionsUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json",dataProvincesUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province.json",dataWorldUrl:"https://pomber.github.io/covid19/timeseries.json",dataNoteUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-note.json",dataRegionsLatestUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json",dataNationalLatestUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json"}.dataRegionsLatestUrl,r=[],t.abrupt("return",z.a.get(a).then((function(t){var a,n=t.data,i=[],o=[],s=[],c=[];return"positivi"===e?a=n.sort((function(t,e){return e.totale_positivi-t.totale_positivi})).slice(0,12):"ricoverati"===e?a=n.sort((function(t,e){return e.totale_ospedalizzati-t.totale_ospedalizzati})).slice(0,10):"deceduti"===e&&(a=n.sort((function(t,e){return e.deceduti-t.deceduti})).slice(0,12)),a.forEach((function(t){i.push(t.denominazione_regione),"positivi"===e?(o.push(t.totale_positivi),s.push("rgba(255, 170, 0, 0.2)"),c.push("rgba(255, 170, 0,1)")):"ricoverati"===e?(o.push(t.totale_ospedalizzati),s.push("rgba(230, 0, 0, 0.2)"),c.push("rgba(230, 0, 0, 1)")):"deceduti"===e&&(o.push(t.deceduti),s.push("rgba(173, 173, 173, 0.2)"),c.push("rgba(173, 173, 173, 1)"))})),r.push(i,o,s,c),r})));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function A(t){return M.apply(this,arguments)}function M(){return(M=Object(u.a)(l.a.mark((function t(e){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={dataNationalUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json",dataRegionsUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json",dataProvincesUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province.json",dataWorldUrl:"https://pomber.github.io/covid19/timeseries.json",dataNoteUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-note.json",dataRegionsLatestUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json",dataNationalLatestUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json"}.dataProvincesUrl,t.abrupt("return",z.a.get(a).then((function(t){return t.data.filter((function(t){return t.data.includes(e)})).filter((function(t){return"In fase di definizione/aggiornamento"!==t.denominazione_provincia}))})));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Y(){return F.apply(this,arguments)}function F(){return(F=Object(u.a)(l.a.mark((function t(){var e,a,r,n=arguments;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=n.length>0&&void 0!==n[0]?n[0]:0,a={dataNationalUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json",dataRegionsUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json",dataProvincesUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province.json",dataWorldUrl:"https://pomber.github.io/covid19/timeseries.json",dataNoteUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-note.json",dataRegionsLatestUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json",dataNationalLatestUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json"}.dataNationalUrl,r=[],0===e){t.next=7;break}return t.abrupt("return",z.a.get(a).then((function(t){var a=t.data;return r.push(a.filter((function(t){return t.data.includes(e)}))[0].dimessi_guariti,a.filter((function(t){return t.data.includes(e)}))[0].deceduti,a.filter((function(t){return t.data.includes(e)}))[0].totale_casi,a.filter((function(t){return t.data.includes(e)}))[0].totale_positivi,a.filter((function(t){return t.data.includes(e)}))[0].variazione_totale_positivi,a.filter((function(t){return t.data.includes(e)}))[0].tamponi),r})));case 7:return t.abrupt("return",z.a.get(a).then((function(t){var e=t.data,a=[],n=[],i=[],o=[],s=[],c=[];return e.forEach((function(t){a.push(t.data),n.push(t.nuovi_positivi),i.push(t.totale_positivi),o.push(t.dimessi_guariti),s.push(t.deceduti),c.push(t.tamponi)})),r.push(a,n,i,o,s,c),r})));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function B(){return G.apply(this,arguments)}function G(){return(G=Object(u.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={dataNationalUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json",dataRegionsUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json",dataProvincesUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province.json",dataWorldUrl:"https://pomber.github.io/covid19/timeseries.json",dataNoteUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-note.json",dataRegionsLatestUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json",dataNationalLatestUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json"}.dataNoteUrl,t.abrupt("return",z.a.get(e).then((function(t){return t.data})));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function q(){return H.apply(this,arguments)}function H(){return(H=Object(u.a)(l.a.mark((function t(){var e,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={dataNationalUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json",dataRegionsUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json",dataProvincesUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province.json",dataWorldUrl:"https://pomber.github.io/covid19/timeseries.json",dataNoteUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-note.json",dataRegionsLatestUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json",dataNationalLatestUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json"}.dataWorldUrl,a=[],t.abrupt("return",fetch(e).then((function(t){return t.json()})).then((function(t){var e={country:"",confirmed:0,recovered:0,deaths:0};return Object.keys(t).map((function(t){return t})).forEach((function(r){var n=t[r];n=n[n.length-1],e={country:r,confirmed:n.confirmed,recovered:n.recovered,deaths:n.deaths},a.push(e)})),a})));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var K=a(96),J=a(43),$=a.n(J),Q=f.a.Content,X=f.a.Footer,Z=b.a.Paragraph,tt=D.a.TabPane,et=function(t){Object(v.a)(a,t);var e=Object(g.a)(a);function a(t){var r;return Object(p.a)(this,a),(r=e.call(this,t)).state={startDate:$()(),today:$()(),itemsRegions:[],itemsProvincies:[],itemsNotes:[],itemsWorls:[],totWorldConfirmed:0,totWorldRecovered:0,totWorldDeaths:0,totDimessi:0,totDeceduti:0,totCasi:0,totPositivi:0,totDimessiPrev:0,totDecedutiPrev:0,totCasiPrev:0,totPositiviPrev:0,varPositivi:0,varPositiviPrev:0,DataChart1:{},DataChart2:{},DataChart3:{},DataChart4:{},radarData:"positivi"},r.handleChange=r.handleChange.bind(Object(h.a)(r)),r}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var t=Object(u.a)(l.a.mark((function t(){var e,a,r=this;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=null,a=null,S()<"17:30"?(e=U(1),a=U(2)):(e=(new Date).toJSON().slice(0,10).replace(/-/g,"-"),a=U(1)),sessionStorage.setItem("DATIAGGIORNATIAL",V(e)),t.next=6,Y(e).then((function(t){r.setState({totDimessi:t[0],totDeceduti:t[1],totCasi:t[2],totPositivi:t[3],varPositivi:t[4],varTamponi:t[5]})}));case 6:return t.next=8,Y(a).then((function(t){r.setState({totDimessiPrev:t[0],totDecedutiPrev:t[1],totCasiPrev:t[2],totPositiviPrev:t[3],varPositiviPrev:t[4],varTamponiPrev:t[5]})}));case 8:return t.next=10,R(e).then((function(t){r.setState({itemsRegions:t})}));case 10:return t.next=12,R().then((function(t){r.setState({DataChart4:{labels:t[0],datasets:[{label:"Ricoverati con sintomi",data:t[1],backgroundColor:"#ffaa00"},{label:"Terapia intensiva",data:t[2],backgroundColor:"#e60000"}]}})}));case 12:return"positivi",t.next=15,L("positivi").then((function(t){r.setState({DataChart3:{labels:t[0],datasets:[{label:"Totale positivi",data:t[1],backgroundColor:"rgba(255, 170, 0, 0.2)",borderColor:"rgba(255, 170, 0,1)",pointRadius:.5,borderWidth:1.5}]}})}));case 15:return t.next=17,A(e).then((function(t){r.setState({itemsProvincies:t})}));case 17:return t.next=19,Y().then((function(t){r.setState({DataChart1:{labels:t[0],datasets:[{data:t[1],backgroundColor:"rgba(255, 170, 0, 0.2)",borderColor:"rgba(255, 170, 0,1)",pointRadius:.5,borderWidth:1.5}]},DataChart2:{labels:t[0],datasets:[{label:"Totale positivi",data:t[2],backgroundColor:"rgba(255, 170, 0, 0.2)",borderColor:"rgba(255, 170, 0, 1)",pointRadius:.5,borderWidth:1.5},{label:"Dimessi Guariti",data:t[3],backgroundColor:"rgba(76, 230, 0, 0.2)",borderColor:"rgba(76, 230, 0, 1)",pointRadius:.5,borderWidth:1.5},{label:"Deceduti",data:t[4],backgroundColor:"rgba(194, 194, 194, 0.2)",borderColor:"rgba(194, 194, 194, 1)",pointRadius:.5,borderWidth:1.5}]}})}));case 19:return t.next=21,B(e).then((function(t){r.setState({itemsNotes:t})}));case 21:return t.next=23,q().then((function(t){var e=0,a=0,n=0;t.forEach((function(t){var r=t.confirmed,i=t.recovered,o=t.deaths;e+=r,a+=i,n+=o})),r.setState({itemsWorls:t,totWorldConfirmed:e,totWorldRecovered:a,totWorldDeaths:n})}));case 23:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"handleChange",value:function(t,e){var a=this,r=e;(new Date).getDate().toString()===t.format("D")&&(r=(r=t.subtract(1,"days")).format("YYYY-MM-DD")),Y(r).then((function(t){a.setState({totDimessi:t[0],totDeceduti:t[1],totCasi:t[2],totPositivi:t[3],varPositivi:t[4],varTamponi:t[5]})})),Y(t.subtract(1,"days").format("YYYY-MM-DD")).then((function(t){a.setState({totDimessiPrev:t[0],totDecedutiPrev:t[1],totCasiPrev:t[2],totPositiviPrev:t[3],varPositiviPrev:t[4],varTamponiPrev:t[5]})})),R(r).then((function(t){a.setState({itemsRegions:t})})),A().then((function(t){a.setState({itemsProvincies:t})}))}},{key:"handleDataChange",value:function(t){var e=this;L(t.target.value).then((function(a){e.setState({radarData:t.target.value,DataChart3:{labels:a[0],datasets:[{label:"Totale "+t.target.value,data:a[1],backgroundColor:a[2],borderColor:a[3],pointRadius:.5,borderWidth:1.5}]}})}))}},{key:"render",value:function(){var t=[{render:function(t){return n.a.createElement("span",{style:{color:"white"}},t)},title:"Regione",dataIndex:"denominazione_regione",key:"denominazione_regione",sorter:function(t,e){return t.denominazione_regione<e.denominazione_regione?-1:t.denominazione_regione>e.denominazione_regione?1:void 0},sortDirections:["descend","ascend"]},{render:function(t){return n.a.createElement("span",{style:{color:"#e60000"}},t)},title:"Totale casi",dataIndex:"totale_casi",key:"totale_casi",defaultSortOrder:"descend",sorter:function(t,e){return t.totale_casi<e.totale_casi?-1:t.totale_casi>e.totale_casi?1:void 0},sortDirections:["descend","ascend"]},{render:function(t){return n.a.createElement("span",{style:{color:"#ffaa00"}},t)},title:"Totale positivi",dataIndex:"totale_positivi",key:"totale_positivi",sorter:function(t,e){return t.totale_positivi<e.totale_positivi?-1:t.totale_positivi>e.totale_positivi?1:void 0},sortDirections:["descend","ascend"]},{render:function(t){return n.a.createElement("span",{style:{color:"#ffaa00"}},t)},title:"Nuovi positivi",dataIndex:"nuovi_positivi",key:"nuovi_positivi",sorter:function(t,e){return t.nuovi_positivi<e.nuovi_positivi?-1:t.nuovi_positivi>e.nuovi_positivi?1:void 0},sortDirections:["descend","ascend"]},{render:function(t){return n.a.createElement("span",{style:{color:"#4ce600"}},t)},title:"Dimessi Guariti",dataIndex:"dimessi_guariti",key:"dimessi_guariti",sorter:function(t,e){return t.dimessi_guariti<e.dimessi_guariti?-1:t.dimessi_guariti>e.dimessi_guariti?1:void 0},sortDirections:["descend","ascend"]},{render:function(t){return n.a.createElement("span",{style:{color:"#adadad"}},t)},title:"Deceduti",dataIndex:"deceduti",key:"deceduti",sorter:function(t,e){return t.deceduti<e.deceduti?-1:t.deceduti>e.deceduti?1:void 0},sortDirections:["descend","ascend"]}],e=[{dataIndex:"data",defaultSortOrder:"descend",render:function(t){return n.a.createElement("span",null,V(t))},key:"data",sorter:function(t,e){return t.data<e.data?-1:t.data>e.data?1:void 0},width:100},{dataIndex:"note",key:"note"}],a=[{render:function(t){return n.a.createElement("span",{style:{color:"white"}},t)},title:"Paese",dataIndex:"country",key:"country",sorter:function(t,e){return t.country<e.country?-1:t.country>e.country?1:void 0},sortDirections:["descend","ascend"]},{render:function(t){return n.a.createElement("span",{style:{color:"#e60000"}},t)},title:"Totale confermati",dataIndex:"confirmed",key:"confirmed",defaultSortOrder:"descend",sorter:function(t,e){return t.confirmed<e.confirmed?-1:t.confirmed>e.confirmed?1:void 0},sortDirections:["descend","ascend"]},{render:function(t){return n.a.createElement("span",{style:{color:"#ffaa00"}},t)},title:"Totale ricoverati",dataIndex:"recovered",key:"recovered",sorter:function(t,e){return t.recovered<e.recovered?-1:t.recovered>e.recovered?1:void 0},sortDirections:["descend","ascend"]},{render:function(t){return n.a.createElement("span",{style:{color:"#adadad"}},t)},title:"Deceduti",dataIndex:"deaths",key:"deaths",sorter:function(t,e){return t.deaths<e.deaths?-1:t.deaths>e.deaths?1:void 0},sortDirections:["descend","ascend"]}];return n.a.createElement("div",null,n.a.createElement(E.a,null),n.a.createElement(f.a,{className:"layout"},n.a.createElement(C.a,{style:{position:"fixed",zIndex:1,width:"100%"},className:"site-page-header-responsive",title:"DATI COVID-19",subTitle:"Situazione Italia e Mondo",extra:[n.a.createElement("span",null,"Dati aggiornati al "),n.a.createElement(w.a,{defaultValue:$()(this.state.today,"YYYY-MM-DD"),format:"YYYY-MM-DD",onChange:this.handleChange,disabledDate:function(t){return t<$()("2020-02-25","YYYY-MM-DD")||t>$()().endOf("day")}})]}),n.a.createElement(Q,{className:"site-layout",style:{marginTop:75}},n.a.createElement(y.a,{orientation:"left"},"Situazione Italia"),n.a.createElement("div",{className:"card-container"},n.a.createElement(j.a,{gutter:{xs:8,sm:16,md:24,lg:32}},n.a.createElement(x.a,{className:"gutter-row",span:6},n.a.createElement(I.a,{className:"card-wrapper",bordered:!1},n.a.createElement(N.a,{className:"card-wrapper-statistic",title:"Totale positivi",value:this.state.totPositivi,suffix:n.a.createElement("span",null," +",this.state.varPositivi),valueStyle:{color:"#ffaa00",textAlign:"center"}}),n.a.createElement(Z,{style:{textAlign:"center"}},n.a.createElement(_.a,{strokeLinecap:"square",strokeWidth:"15px",strokeColor:"#ffaa00",percent:(this.state.totPositivi/this.state.totCasi*100).toFixed(2)})))),n.a.createElement(x.a,{className:"gutter-row",span:6},n.a.createElement(I.a,{className:"card-wrapper",bordered:!1},n.a.createElement(N.a,{title:"Deceduti",value:this.state.totDeceduti,suffix:n.a.createElement("span",null," +",this.state.totDeceduti-this.state.totDecedutiPrev),valueStyle:{color:"#adadad",textAlign:"center"}}),n.a.createElement(Z,{style:{textAlign:"center"}},n.a.createElement(_.a,{strokeLinecap:"square",strokeWidth:"15px",strokeColor:"#adadad",percent:(this.state.totDeceduti/this.state.totCasi*100).toFixed(2)})))),n.a.createElement(x.a,{className:"gutter-row",span:6},n.a.createElement(I.a,{className:"card-wrapper",bordered:!1},n.a.createElement(N.a,{title:"Dimessi/Guariti",value:this.state.totDimessi,suffix:n.a.createElement("span",null," +",this.state.totDimessi-this.state.totDimessiPrev),valueStyle:{color:"#4ce600",textAlign:"center"}}),n.a.createElement(Z,{style:{textAlign:"center"}},n.a.createElement(_.a,{strokeLinecap:"square",strokeWidth:"15px",strokeColor:"#4ce600",percent:(this.state.totDimessi/this.state.totCasi*100).toFixed(2)})))),n.a.createElement(x.a,{className:"gutter-row",span:6},n.a.createElement(I.a,{className:"card-wrapper",bordered:!1},n.a.createElement(N.a,{title:"Totale casi",value:this.state.totCasi,suffix:n.a.createElement("div",{style:{textAlign:"left"}},n.a.createElement("p",{style:{marginBottom:"0.2em"}}," +",this.state.totCasi-this.state.totCasiPrev),n.a.createElement("p",{style:{color:"#7c878e",fontSize:"12px"}},"Su ",this.state.varTamponi-this.state.varTamponiPrev," Tamponi")),valueStyle:{color:"#e60000",textAlign:"center"}}),n.a.createElement(Z,{style:{textAlign:"center"}},n.a.createElement(_.a,{strokeLinecap:"square",strokeWidth:"15px",strokeColor:"#e60000",percent:((this.state.totCasi-this.state.totCasiPrev)/(this.state.varTamponi-this.state.varTamponiPrev)*100).toFixed(2)})))))),n.a.createElement("div",{className:"card-container"},n.a.createElement(j.a,{gutter:{xs:8,sm:16,md:24,lg:32}},n.a.createElement(x.a,{className:"gutter-row",span:8},n.a.createElement(I.a,{className:"card-wrapper",bordered:!1},n.a.createElement(D.a,{defaultActiveKey:"1"},n.a.createElement(tt,{tab:"REGIONI",key:"1"},n.a.createElement(O.a,{dataSource:this.state.itemsRegions,pagination:{total:this.state.itemsRegions.length,pageSize:this.state.itemsRegions.length,hideOnSinglePage:!0},layout:"fixed",columns:t,bordered:!0,size:"middle",rowKey:"codice_regione",scroll:{y:237}})),n.a.createElement(tt,{tab:"PROVINCE",key:"2"},n.a.createElement(O.a,{dataSource:this.state.itemsProvincies,pagination:{total:this.state.itemsProvincies.length,pageSize:this.state.itemsProvincies.length,hideOnSinglePage:!0},layout:"fixed",columns:[{title:"Provincia",dataIndex:"denominazione_provincia",key:"denominazione_provincia",sorter:function(t,e){return t.denominazione_provincia<e.denominazione_provincia?-1:t.denominazione_provincia>e.denominazione_provincia?1:void 0},sortDirections:["descend","ascend"]},{title:"Totale casi",dataIndex:"totale_casi",defaultSortOrder:"descend",key:"totale_casi",sorter:function(t,e){return t.totale_casi<e.totale_casi?-1:t.totale_casi>e.totale_casi?1:void 0},sortDirections:["descend","ascend"]}],bordered:!0,size:"middle",rowKey:"codice_provincia",scroll:{y:257}}))))),n.a.createElement(x.a,{className:"gutter-row",span:8},n.a.createElement(I.a,{className:"card-wrapper",bordered:!1,title:"Nuovi positivi"},n.a.createElement(K.Line,{data:this.state.DataChart1,legend:{display:!1},options:{scales:{yAxes:[{ticks:{min:0,max:45e3,stepSize:5e3},gridLines:{color:"rgb(84, 86, 89)",borderDash:[2,2]},scaleLabel:{display:!0}}],xAxes:[{gridLines:{color:"rgb(84, 86, 89)",borderDash:[2,2]},type:"time",time:{unit:"month",unitStepSize:1,displayFormats:{month:"MMMM"}}}]}}}))),n.a.createElement(x.a,{className:"gutter-row",span:8},n.a.createElement(I.a,{className:"card-wrapper",bordered:!1,title:"Andamento nazionale"},n.a.createElement(K.Line,{data:this.state.DataChart2,options:{legend:{display:!0,position:"bottom"},scales:{yAxes:[{ticks:{min:0,max:7e5,stepSize:15e4},gridLines:{color:"rgb(84, 86, 89)",borderDash:[2,2]},scaleLabel:{display:!0}}],xAxes:[{gridLines:{color:"rgb(84, 86, 89)",borderDash:[2,2]},type:"time",time:{unit:"month",unitStepSize:1,displayFormats:{month:"MMMM"}}}]}}}))))),n.a.createElement("div",{className:"card-container"},n.a.createElement(j.a,{gutter:{xs:8,sm:16,md:24,lg:32}},n.a.createElement(x.a,{className:"gutter-row",span:8},n.a.createElement(I.a,{className:"card-wrapper",bordered:!1},n.a.createElement(O.a,{dataSource:this.state.itemsNotes,pagination:{total:this.state.itemsNotes.length,pageSize:this.state.itemsNotes.length,hideOnSinglePage:!0},showHeader:!1,columns:e,bordered:!0,title:function(){return"Note"},size:"small",scroll:{y:355}}))),n.a.createElement(x.a,{className:"gutter-row",span:8},n.a.createElement(I.a,{className:"card-wrapper",bordered:!1,title:n.a.createElement("span",null,"12 Regioni con il maggior numero di ",this.state.radarData)},n.a.createElement(k.a.Group,{value:this.state.radarData,onChange:this.handleDataChange.bind(this),style:{right:"0px"}},n.a.createElement(k.a.Button,{value:"positivi"},"Positivi"),n.a.createElement(k.a.Button,{value:"ricoverati"},"Ricoverati"),n.a.createElement(k.a.Button,{value:"deceduti"},"Deceduti")),n.a.createElement(K.Radar,{data:this.state.DataChart3,options:{legend:{display:!1},title:{display:!1},scale:{angleLines:{color:"rgb(84, 86, 89)",borderDash:[2,2]},gridLines:{color:"rgb(84, 86, 89)",borderDash:[2,2]},ticks:{callback:function(){return""},backdropColor:"rgba(0, 0, 0, 0)"}}}}))),n.a.createElement(x.a,{className:"gutter-row",span:8},n.a.createElement(I.a,{className:"card-wrapper",bordered:!1,title:"Dettaglio ospedalizzati per le 12 Regioni con il maggior numero di positivi"},n.a.createElement(K.Bar,{data:this.state.DataChart4,options:{scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!0}]}}}))))),n.a.createElement(y.a,{orientation:"left"},"Situazione Mondiale"),n.a.createElement("div",{className:"card-container"},n.a.createElement(j.a,{gutter:{xs:8,sm:16,md:24,lg:32}},n.a.createElement(x.a,{className:"gutter-row",span:6},n.a.createElement(I.a,{className:"card-wrapper",bordered:!1},n.a.createElement(N.a,{className:"card-wrapper-statistic",title:"Totale ricoverati",value:this.state.totWorldRecovered,valueStyle:{color:"#ffaa00",textAlign:"center"}}))),n.a.createElement(x.a,{className:"gutter-row",span:6},n.a.createElement(I.a,{className:"card-wrapper",bordered:!1},n.a.createElement(N.a,{title:"Deceduti",value:this.state.totWorldDeaths,valueStyle:{color:"#adadad",textAlign:"center"}}))),n.a.createElement(x.a,{className:"gutter-row",span:6},n.a.createElement(I.a,{className:"card-wrapper",bordered:!1},n.a.createElement(N.a,{title:"Totale casi",value:this.state.totWorldConfirmed,valueStyle:{color:"#e60000",textAlign:"center"}}))))),n.a.createElement("div",{className:"card-container"},n.a.createElement(j.a,{gutter:{xs:8,sm:16,md:24,lg:32}},n.a.createElement(x.a,{className:"gutter-row",span:12},n.a.createElement(I.a,{className:"card-wrapper",bordered:!1},n.a.createElement(O.a,{dataSource:this.state.itemsWorls,pagination:!1,layout:"fixed",columns:a,bordered:!0,size:"middle",rowKey:"country",scroll:{y:228}})))))),n.a.createElement(X,null,n.a.createElement("span",null,"\xa9 2020 by ",n.a.createElement("a",{href:"https://github.com/Alberto75",target:"_blank",rel:"noopener noreferrer"},"Albe")," | "),n.a.createElement("a",{href:"https://creativecommons.org/licenses/by/4.0/deed.en",target:"_blank",rel:"noopener noreferrer"},"CC-BY-4.0"),n.a.createElement("div",{className:"right"},"Dataset COVID-19 Italia by","\xa0",n.a.createElement("a",{href:"https://github.com/pcm-dpc/COVID-19",target:"_blank",rel:"noopener noreferrer"},"Dipartimento della Protezione Civile"),"\xa0","|","\xa0","Dataset COVID-19 Mondo by","\xa0",n.a.createElement("a",{href:"https://github.com/pomber/covid19",target:"_blank",rel:"noopener noreferrer"},"Pomber")))))}}]),a}(r.Component);var at=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,n.a.createElement(et,null)))};a(423),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(at,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[220,1,2]]]);
//# sourceMappingURL=main.548723f8.chunk.js.map