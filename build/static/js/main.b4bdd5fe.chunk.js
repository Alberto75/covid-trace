(this.webpackJsonpcovid19trace=this.webpackJsonpcovid19trace||[]).push([[0],{218:function(e,t,a){e.exports=a(422)},421:function(e,t,a){},422:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(28),o=a.n(i),s=a(179),c=a.n(s),d=a(42),l=a.n(d),u=a(68),m=a(180),p=a(181),v=a(104),h=a(215),g=a(213),f=a(424),b=a(428),D=a(140),E=a(433),y=a(430),w=a(427),x=a(425),C=a(85),N=a(51),j=a(432),_=a(431),P=a(429),I=a(426),k=a(84),O=a.n(k);function S(e){var t=new Date;t.setDate(t.getDate()-e);var a=t.getMonth()+1;return t.getFullYear()+"-"+(a<10?"0"+a:""+a)+"-"+(t.getDate()<10?"0"+t.getDate():""+t.getDate())}function z(){var e=new Date;return(e.getHours()<10?"0"+e.getHours():0+e.getHours())+":"+(e.getMinutes()<10?"0"+e.getMinutes():0+e.getMinutes())}function U(e){var t=new Date(e),a=t.getMonth()+1;return(t.getDate()<10?"0"+t.getDate():""+t.getDate())+"/"+(a<10?"0"+a:""+a)+"/"+t.getFullYear()}function A(e){return W.apply(this,arguments)}function W(){return(W=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={dataNationalUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json",dataRegionsUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json",dataProvincesUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province.json",dataWorldUrl:"https://pomber.github.io/covid19/timeseries.json",dataNoteUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-note.json"}.dataRegionsUrl,e.abrupt("return",O.a.get(a).then((function(e){return e.data.filter((function(e){return e.data.includes(t)}))})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e){return R.apply(this,arguments)}function R(){return(R=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={dataNationalUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json",dataRegionsUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json",dataProvincesUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province.json",dataWorldUrl:"https://pomber.github.io/covid19/timeseries.json",dataNoteUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-note.json"}.dataProvincesUrl,e.abrupt("return",O.a.get(a).then((function(e){return e.data.filter((function(e){return e.data.includes(t)})).filter((function(e){return"In fase di definizione/aggiornamento"!==e.denominazione_provincia}))})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(){return Y.apply(this,arguments)}function Y(){return(Y=Object(u.a)(l.a.mark((function e(){var t,a,r,n=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.length>0&&void 0!==n[0]?n[0]:0,a={dataNationalUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json",dataRegionsUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json",dataProvincesUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province.json",dataWorldUrl:"https://pomber.github.io/covid19/timeseries.json",dataNoteUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-note.json"}.dataNationalUrl,r=[],0===t){e.next=7;break}return e.abrupt("return",O.a.get(a).then((function(e){var a=e.data;return r.push(a.filter((function(e){return e.data.includes(t)}))[0].dimessi_guariti,a.filter((function(e){return e.data.includes(t)}))[0].deceduti,a.filter((function(e){return e.data.includes(t)}))[0].totale_casi,a.filter((function(e){return e.data.includes(t)}))[0].totale_positivi,a.filter((function(e){return e.data.includes(t)}))[0].variazione_totale_positivi),r})));case 7:return e.abrupt("return",O.a.get(a).then((function(e){var t=e.data,a=[],n=[],i=[],o=[],s=[];return t.forEach((function(e){a.push(e.data),n.push(e.nuovi_positivi),i.push(e.totale_positivi),o.push(e.dimessi_guariti),s.push(e.deceduti)})),r.push(a,n,i,o,s),r})));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return L.apply(this,arguments)}function L(){return(L=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={dataNationalUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json",dataRegionsUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json",dataProvincesUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province.json",dataWorldUrl:"https://pomber.github.io/covid19/timeseries.json",dataNoteUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-note.json"}.dataNoteUrl,e.abrupt("return",O.a.get(t).then((function(e){return e.data})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(){return G.apply(this,arguments)}function G(){return(G=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={dataNationalUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json",dataRegionsUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json",dataProvincesUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province.json",dataWorldUrl:"https://pomber.github.io/covid19/timeseries.json",dataNoteUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-note.json"}.dataWorldUrl,a=[],e.abrupt("return",fetch(t).then((function(e){return e.json()})).then((function(e){var t={country:"",confirmed:0,recovered:0,deaths:0};return Object.keys(e).map((function(e){return e})).forEach((function(r){var n=e[r];n=n[n.length-1],t={country:r,confirmed:n.confirmed,recovered:n.recovered,deaths:n.deaths},a.push(t)})),a})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var H=a(137),K=a(45),q=a.n(K),B=f.a.Content,J=f.a.Footer,$=b.a.Paragraph,Q=D.a.TabPane,X=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(e){var r;return Object(m.a)(this,a),(r=t.call(this,e)).state={startDate:q()(),today:q()(),itemsRegions:[],itemsProvincies:[],itemsNotes:[],itemsWorls:[],totWorldConfirmed:0,totWorldRecovered:0,totWorldDeaths:0,totDimessi:0,totDeceduti:0,totCasi:0,totPositivi:0,totDimessiPrev:0,totDecedutiPrev:0,totCasiPrev:0,totPositiviPrev:0,varPositivi:0,varPositiviPrev:0,DataChart1:{},DataChart2:{}},r.handleChange=r.handleChange.bind(Object(v.a)(r)),r}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,a,r=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=null,a=null,z()<"17:30"?(t=S(1),a=S(2)):(t=(new Date).toJSON().slice(0,10).replace(/-/g,"-"),a=S(1)),sessionStorage.setItem("DATIAGGIORNATIAL",U(t)),e.next=6,V(t).then((function(e){r.setState({totDimessi:e[0],totDeceduti:e[1],totCasi:e[2],totPositivi:e[3],varPositivi:e[4]})}));case 6:return e.next=8,V(a).then((function(e){r.setState({totDimessiPrev:e[0],totDecedutiPrev:e[1],totCasiPrev:e[2],totPositiviPrev:e[3],varPositiviPrev:e[4]})}));case 8:return e.next=10,A(t).then((function(e){r.setState({itemsRegions:e})}));case 10:return e.next=12,M(t).then((function(e){r.setState({itemsProvincies:e})}));case 12:return e.next=14,V().then((function(e){r.setState({DataChart1:{labels:e[0],datasets:[{data:e[1],backgroundColor:"rgba(255, 170, 0, 0.2)",borderColor:"rgba(255, 170, 0,1)",pointRadius:.5,borderWidth:1.5}]}})}));case 14:return e.next=16,V().then((function(e){r.setState({DataChart2:{labels:e[0],datasets:[{label:"Totale positivi",data:e[2],backgroundColor:"rgba(255, 170, 0, 0.2)",borderColor:"rgba(255, 170, 0, 1)",pointRadius:.5,borderWidth:1.5},{label:"Dimessi Guariti",data:e[3],backgroundColor:"rgba(76, 230, 0, 0.2)",borderColor:"rgba(76, 230, 0, 1)",pointRadius:.5,borderWidth:1.5},{label:"Deceduti",data:e[4],backgroundColor:"rgba(194, 194, 194, 0.2)",borderColor:"rgba(194, 194, 194, 1)",pointRadius:.5,borderWidth:1.5}]}})}));case 16:return e.next=18,T(t).then((function(e){r.setState({itemsNotes:e})}));case 18:return e.next=20,F().then((function(e){var t=0,a=0,n=0;e.forEach((function(e){var r=e.confirmed,i=e.recovered,o=e.deaths;t+=r,a+=i,n+=o})),r.setState({itemsWorls:e,totWorldConfirmed:t,totWorldRecovered:a,totWorldDeaths:n})}));case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e,t){var a=this,r=t;(new Date).getDate().toString()===e.format("D")&&(r=(r=e.subtract(1,"days")).format("YYYY-MM-DD")),V(r).then((function(e){a.setState({totDimessi:e[0],totDeceduti:e[1],totCasi:e[2],totPositivi:e[3],varPositivi:e[4]})})),V(e.subtract(1,"days").format("YYYY-MM-DD")).then((function(e){a.setState({totDimessiPrev:e[0],totDecedutiPrev:e[1],totCasiPrev:e[2],totPositiviPrev:e[3],varPositiviPrev:e[4]})})),A(r).then((function(e){a.setState({itemsRegions:e})})),M().then((function(e){a.setState({itemsProvincies:e})}))}},{key:"render",value:function(){var e=[{render:function(e){return n.a.createElement("span",{style:{color:"white"}},e)},title:"Regione",dataIndex:"denominazione_regione",key:"denominazione_regione",sorter:function(e,t){return e.denominazione_regione<t.denominazione_regione?-1:e.denominazione_regione>t.denominazione_regione?1:void 0},sortDirections:["descend","ascend"]},{render:function(e){return n.a.createElement("span",{style:{color:"#e60000"}},e)},title:"Totale casi",dataIndex:"totale_casi",key:"totale_casi",defaultSortOrder:"descend",sorter:function(e,t){return e.totale_casi<t.totale_casi?-1:e.totale_casi>t.totale_casi?1:void 0},sortDirections:["descend","ascend"]},{render:function(e){return n.a.createElement("span",{style:{color:"#ffaa00"}},e)},title:"Totale positivi",dataIndex:"totale_positivi",key:"totale_positivi",sorter:function(e,t){return e.totale_positivi<t.totale_positivi?-1:e.totale_positivi>t.totale_positivi?1:void 0},sortDirections:["descend","ascend"]},{render:function(e){return n.a.createElement("span",{style:{color:"#ffaa00"}},e)},title:"Nuovi positivi",dataIndex:"nuovi_positivi",key:"nuovi_positivi",sorter:function(e,t){return e.nuovi_positivi<t.nuovi_positivi?-1:e.nuovi_positivi>t.nuovi_positivi?1:void 0},sortDirections:["descend","ascend"]},{render:function(e){return n.a.createElement("span",{style:{color:"#4ce600"}},e)},title:"Dimessi Guariti",dataIndex:"dimessi_guariti",key:"dimessi_guariti",sorter:function(e,t){return e.dimessi_guariti<t.dimessi_guariti?-1:e.dimessi_guariti>t.dimessi_guariti?1:void 0},sortDirections:["descend","ascend"]},{render:function(e){return n.a.createElement("span",{style:{color:"#adadad"}},e)},title:"Deceduti",dataIndex:"deceduti",key:"deceduti",sorter:function(e,t){return e.deceduti<t.deceduti?-1:e.deceduti>t.deceduti?1:void 0},sortDirections:["descend","ascend"]}],t=[{dataIndex:"data",defaultSortOrder:"descend",render:function(e){return n.a.createElement("span",null,U(e))},key:"data",sorter:function(e,t){return e.data<t.data?-1:e.data>t.data?1:void 0},width:100},{dataIndex:"note",key:"note"}],a=[{render:function(e){return n.a.createElement("span",{style:{color:"white"}},e)},title:"Paese",dataIndex:"country",key:"country",sorter:function(e,t){return e.country<t.country?-1:e.country>t.country?1:void 0},sortDirections:["descend","ascend"]},{render:function(e){return n.a.createElement("span",{style:{color:"#e60000"}},e)},title:"Totale confermati",dataIndex:"confirmed",key:"confirmed",defaultSortOrder:"descend",sorter:function(e,t){return e.confirmed<t.confirmed?-1:e.confirmed>t.confirmed?1:void 0},sortDirections:["descend","ascend"]},{render:function(e){return n.a.createElement("span",{style:{color:"#ffaa00"}},e)},title:"Totale ricoverati",dataIndex:"recovered",key:"recovered",sorter:function(e,t){return e.recovered<t.recovered?-1:e.recovered>t.recovered?1:void 0},sortDirections:["descend","ascend"]},{render:function(e){return n.a.createElement("span",{style:{color:"#adadad"}},e)},title:"Deceduti",dataIndex:"deaths",key:"deaths",sorter:function(e,t){return e.deaths<t.deaths?-1:e.deaths>t.deaths?1:void 0},sortDirections:["descend","ascend"]}];return n.a.createElement("div",null,n.a.createElement(E.a,null),n.a.createElement(f.a,{className:"layout"},n.a.createElement(y.a,{style:{position:"fixed",zIndex:1,width:"100%"},className:"site-page-header-responsive",title:"DATI COVID-19",subTitle:"Situazione Italia e Mondo",extra:[n.a.createElement("span",null,"Dati aggiornati al "),n.a.createElement(w.a,{defaultValue:q()(sessionStorage.getItem("DATIAGGIORNATIAL"),"DD/MM/YYYY"),format:"YYYY-MM-DD",onChange:this.handleChange,disabledDate:function(e){return e&&e>q()().endOf("day")}})]}),n.a.createElement(B,{className:"site-layout",style:{marginTop:75}},n.a.createElement(x.a,{orientation:"left"},"Situazione Italia"),n.a.createElement("div",{className:"card-container"},n.a.createElement(C.a,{gutter:{xs:8,sm:16,md:24,lg:32}},n.a.createElement(N.a,{className:"gutter-row",span:6},n.a.createElement(j.a,{className:"card-wrapper",bordered:!1},n.a.createElement(_.a,{className:"card-wrapper-statistic",title:"Totale positivi",value:this.state.totPositivi,suffix:n.a.createElement("span",null," +",this.state.varPositivi),valueStyle:{color:"#ffaa00",textAlign:"center"}}),n.a.createElement($,{style:{textAlign:"center"}},n.a.createElement(P.a,{strokeLinecap:"square",strokeWidth:"15px",strokeColor:"#ffaa00",percent:(this.state.totPositivi/this.state.totCasi*100).toFixed(2)})))),n.a.createElement(N.a,{className:"gutter-row",span:6},n.a.createElement(j.a,{className:"card-wrapper",bordered:!1},n.a.createElement(_.a,{title:"Deceduti",value:this.state.totDeceduti,suffix:n.a.createElement("span",null," +",this.state.totDeceduti-this.state.totDecedutiPrev),valueStyle:{color:"#adadad",textAlign:"center"}}),n.a.createElement($,{style:{textAlign:"center"}},n.a.createElement(P.a,{strokeLinecap:"square",strokeWidth:"15px",strokeColor:"#adadad",percent:(this.state.totDeceduti/this.state.totCasi*100).toFixed(2)})))),n.a.createElement(N.a,{className:"gutter-row",span:6},n.a.createElement(j.a,{className:"card-wrapper",bordered:!1},n.a.createElement(_.a,{title:"Dimessi/Guariti",value:this.state.totDimessi,suffix:n.a.createElement("span",null," +",this.state.totDimessi-this.state.totDimessiPrev),valueStyle:{color:"#4ce600",textAlign:"center"}}),n.a.createElement($,{style:{textAlign:"center"}},n.a.createElement(P.a,{strokeLinecap:"square",strokeWidth:"15px",strokeColor:"#4ce600",percent:(this.state.totDimessi/this.state.totCasi*100).toFixed(2)})))),n.a.createElement(N.a,{className:"gutter-row",span:6},n.a.createElement(j.a,{className:"card-wrapper",bordered:!1},n.a.createElement(_.a,{title:"Totale casi",value:this.state.totCasi,valueStyle:{color:"#e60000",textAlign:"center"}}),n.a.createElement($,{style:{textAlign:"center"}},n.a.createElement("span",{style:{color:"#e60000"}},"+",this.state.totCasi-this.state.totCasiPrev)))))),n.a.createElement("div",{className:"card-container"},n.a.createElement(C.a,{gutter:{xs:8,sm:16,md:24,lg:32}},n.a.createElement(N.a,{className:"gutter-row",span:8},n.a.createElement(j.a,{className:"card-wrapper",bordered:!1},n.a.createElement(D.a,{defaultActiveKey:"1"},n.a.createElement(Q,{tab:"REGIONI",key:"1"},n.a.createElement(I.a,{dataSource:this.state.itemsRegions,pagination:{total:this.state.itemsRegions.length,pageSize:this.state.itemsRegions.length,hideOnSinglePage:!0},layout:"fixed",columns:e,bordered:!0,size:"middle",rowKey:"codice_regione",scroll:{y:203}})),n.a.createElement(Q,{tab:"PROVINCE",key:"2"},n.a.createElement(I.a,{dataSource:this.state.itemsProvincies,pagination:{total:this.state.itemsProvincies.length,pageSize:this.state.itemsProvincies.length,hideOnSinglePage:!0},layout:"fixed",columns:[{title:"Provincia",dataIndex:"denominazione_provincia",key:"denominazione_provincia",sorter:function(e,t){return e.denominazione_provincia<t.denominazione_provincia?-1:e.denominazione_provincia>t.denominazione_provincia?1:void 0},sortDirections:["descend","ascend"]},{title:"Totale casi",dataIndex:"totale_casi",defaultSortOrder:"descend",key:"totale_casi",sorter:function(e,t){return e.totale_casi<t.totale_casi?-1:e.totale_casi>t.totale_casi?1:void 0},sortDirections:["descend","ascend"]}],bordered:!0,size:"middle",rowKey:"codice_provincia",scroll:{y:203}}))))),n.a.createElement(N.a,{className:"gutter-row",span:8},n.a.createElement(j.a,{className:"card-wrapper",bordered:!1,title:"Nuovi positivi"},n.a.createElement(H.Line,{data:this.state.DataChart1,legend:{display:!1},options:{scales:{yAxes:[{ticks:{min:0,max:8e3,stepSize:2e3},gridLines:{color:"rgb(84, 86, 89)",borderDash:[2,2]},scaleLabel:{display:!0}}],xAxes:[{gridLines:{color:"rgb(84, 86, 89)",borderDash:[2,2]},type:"time",time:{unit:"month",unitStepSize:1,displayFormats:{month:"MMMM"}}}]}}}))),n.a.createElement(N.a,{className:"gutter-row",span:8},n.a.createElement(j.a,{className:"card-wrapper",bordered:!1,title:"Andamento nazionale"},n.a.createElement(H.Line,{data:this.state.DataChart2,options:{legend:{display:!0,position:"bottom"},scales:{yAxes:[{ticks:{min:0,max:25e4,stepSize:5e4},gridLines:{color:"rgb(84, 86, 89)",borderDash:[2,2]},scaleLabel:{display:!0}}],xAxes:[{gridLines:{color:"rgb(84, 86, 89)",borderDash:[2,2]},type:"time",time:{unit:"month",unitStepSize:1,displayFormats:{month:"MMMM"}}}]}}}))))),n.a.createElement("div",{className:"card-container"},n.a.createElement(C.a,{gutter:{xs:8,sm:16,md:24,lg:32}},n.a.createElement(N.a,{className:"gutter-row",span:8},n.a.createElement(j.a,{className:"card-wrapper",bordered:!1},n.a.createElement(I.a,{dataSource:this.state.itemsNotes,pagination:{total:this.state.itemsNotes.length,pageSize:this.state.itemsNotes.length,hideOnSinglePage:!0},showHeader:!1,columns:t,bordered:!0,title:function(){return"Note"},size:"small",scroll:{y:228}}))))),n.a.createElement(x.a,{orientation:"left"},"Situazione Mondiale"),n.a.createElement("div",{className:"card-container"},n.a.createElement(C.a,{gutter:{xs:8,sm:16,md:24,lg:32}},n.a.createElement(N.a,{className:"gutter-row",span:6},n.a.createElement(j.a,{className:"card-wrapper",bordered:!1},n.a.createElement(_.a,{className:"card-wrapper-statistic",title:"Totale ricoverati",value:this.state.totWorldRecovered,valueStyle:{color:"#ffaa00",textAlign:"center"}}))),n.a.createElement(N.a,{className:"gutter-row",span:6},n.a.createElement(j.a,{className:"card-wrapper",bordered:!1},n.a.createElement(_.a,{title:"Deceduti",value:this.state.totWorldDeaths,valueStyle:{color:"#adadad",textAlign:"center"}}))),n.a.createElement(N.a,{className:"gutter-row",span:6},n.a.createElement(j.a,{className:"card-wrapper",bordered:!1},n.a.createElement(_.a,{title:"Totale casi",value:this.state.totWorldConfirmed,valueStyle:{color:"#e60000",textAlign:"center"}}))))),n.a.createElement("div",{className:"card-container"},n.a.createElement(C.a,{gutter:{xs:8,sm:16,md:24,lg:32}},n.a.createElement(N.a,{className:"gutter-row",span:12},n.a.createElement(j.a,{className:"card-wrapper",bordered:!1},n.a.createElement(I.a,{dataSource:this.state.itemsWorls,pagination:!1,layout:"fixed",columns:a,bordered:!0,size:"middle",rowKey:"country",scroll:{y:228}})))))),n.a.createElement(J,null,"Albe \xa9 2020","\xa0","|","\xa0","Licenza:","\xa0",n.a.createElement("a",{href:"https://creativecommons.org/licenses/by/4.0/deed.en",target:"_blank",rel:"noopener noreferrer"},"CC-BY-4.0"),"\xa0","|","\xa0","Editore / Autore dataset Italia:","\xa0",n.a.createElement("a",{href:"http://www.protezionecivile.gov.it/home",target:"_blank",rel:"noopener noreferrer"},"Dipartimento della Protezione Civile"),"\xa0","|","\xa0","Editore / Autore dataset Mondo:","\xa0",n.a.createElement("a",{href:"https://github.com/pomber/covid19",target:"_blank",rel:"noopener noreferrer"},"Pomber"))))}}]),a}(r.Component);var Z=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,n.a.createElement(X,null)))};a(421),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[218,1,2]]]);
//# sourceMappingURL=main.b4bdd5fe.chunk.js.map