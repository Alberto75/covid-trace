(this.webpackJsonpcovid19trace=this.webpackJsonpcovid19trace||[]).push([[0],{220:function(e,t,a){e.exports=a(424)},423:function(e,t,a){},424:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(28),o=a.n(i),s=a(181),c=a.n(s),d=a(41),l=a.n(d),u=a(65),m=a(182),p=a(183),h=a(104),v=a(217),g=a(215),f=a(426),b=a(430),D=a(142),E=a(435),y=a(431),w=a(429),C=a(427),j=a(85),x=a(51),N=a(434),I=a(433),P=a(432),_=a(428),k=a(119),O=a(75),S=a.n(O);function z(e){var t=new Date;t.setDate(t.getDate()-e);var a=t.getMonth()+1;return t.getFullYear()+"-"+(a<10?"0"+a:""+a)+"-"+(t.getDate()<10?"0"+t.getDate():""+t.getDate())}function U(){var e=new Date;return(e.getHours()<10?"0"+e.getHours():0+e.getHours())+":"+(e.getMinutes()<10?"0"+e.getMinutes():0+e.getMinutes())}function R(e){var t=new Date(e),a=t.getMonth()+1;return(t.getDate()<10?"0"+t.getDate():""+t.getDate())+"/"+(a<10?"0"+a:""+a)+"/"+t.getFullYear()}function V(e){return W.apply(this,arguments)}function W(){return(W=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={dataNationalUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json",dataRegionsUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json",dataProvincesUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province.json",dataWorldUrl:"https://pomber.github.io/covid19/timeseries.json",dataNoteUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-note.json",dataRegioonsLatestUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json"}.dataRegionsUrl,e.abrupt("return",S.a.get(a).then((function(e){return e.data.filter((function(e){return e.data.includes(t)}))})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e){return T.apply(this,arguments)}function T(){return(T=Object(u.a)(l.a.mark((function e(t){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={dataNationalUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json",dataRegionsUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json",dataProvincesUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province.json",dataWorldUrl:"https://pomber.github.io/covid19/timeseries.json",dataNoteUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-note.json",dataRegioonsLatestUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json"}.dataRegioonsLatestUrl,r=[],e.abrupt("return",S.a.get(a).then((function(e){var a=e.data,n=[],i=[],o=[],s=[];return a.sort((function(e,t){return t.totale_positivi-e.totale_positivi})).slice(0,12).forEach((function(e){n.push(e.denominazione_regione),"positivi"===t?(i.push(e.totale_positivi),o.push("rgba(255, 170, 0, 0.2)"),s.push("rgba(255, 170, 0,1)")):"ricoverati"===t?(i.push(e.totale_ospedalizzati),o.push("rgba(230, 0, 0, 0.2)"),s.push("rgba(230, 0, 0, 1)")):"deceduti"===t&&(i.push(e.deceduti),o.push("rgba(173, 173, 173, 0.2)"),s.push("rgba(173, 173, 173, 1)"))})),r.push(n,i,o,s),r})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){return Y.apply(this,arguments)}function Y(){return(Y=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={dataNationalUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json",dataRegionsUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json",dataProvincesUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province.json",dataWorldUrl:"https://pomber.github.io/covid19/timeseries.json",dataNoteUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-note.json",dataRegioonsLatestUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json"}.dataProvincesUrl,e.abrupt("return",S.a.get(a).then((function(e){return e.data.filter((function(e){return e.data.includes(t)})).filter((function(e){return"In fase di definizione/aggiornamento"!==e.denominazione_provincia}))})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){return F.apply(this,arguments)}function F(){return(F=Object(u.a)(l.a.mark((function e(){var t,a,r,n=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.length>0&&void 0!==n[0]?n[0]:0,a={dataNationalUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json",dataRegionsUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json",dataProvincesUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province.json",dataWorldUrl:"https://pomber.github.io/covid19/timeseries.json",dataNoteUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-note.json",dataRegioonsLatestUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json"}.dataNationalUrl,r=[],0===t){e.next=7;break}return e.abrupt("return",S.a.get(a).then((function(e){var a=e.data;return r.push(a.filter((function(e){return e.data.includes(t)}))[0].dimessi_guariti,a.filter((function(e){return e.data.includes(t)}))[0].deceduti,a.filter((function(e){return e.data.includes(t)}))[0].totale_casi,a.filter((function(e){return e.data.includes(t)}))[0].totale_positivi,a.filter((function(e){return e.data.includes(t)}))[0].variazione_totale_positivi,a.filter((function(e){return e.data.includes(t)}))[0].tamponi),r})));case 7:return e.abrupt("return",S.a.get(a).then((function(e){var t=e.data,a=[],n=[],i=[],o=[],s=[],c=[];return t.forEach((function(e){a.push(e.data),n.push(e.nuovi_positivi),i.push(e.totale_positivi),o.push(e.dimessi_guariti),s.push(e.deceduti),c.push(e.tamponi)})),r.push(a,n,i,o,s,c),r})));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){return G.apply(this,arguments)}function G(){return(G=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={dataNationalUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json",dataRegionsUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json",dataProvincesUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province.json",dataWorldUrl:"https://pomber.github.io/covid19/timeseries.json",dataNoteUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-note.json",dataRegioonsLatestUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json"}.dataNoteUrl,e.abrupt("return",S.a.get(t).then((function(e){return e.data})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(){return H.apply(this,arguments)}function H(){return(H=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={dataNationalUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json",dataRegionsUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json",dataProvincesUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province.json",dataWorldUrl:"https://pomber.github.io/covid19/timeseries.json",dataNoteUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-note.json",dataRegioonsLatestUrl:"https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json"}.dataWorldUrl,a=[],e.abrupt("return",fetch(t).then((function(e){return e.json()})).then((function(e){var t={country:"",confirmed:0,recovered:0,deaths:0};return Object.keys(e).map((function(e){return e})).forEach((function(r){var n=e[r];n=n[n.length-1],t={country:r,confirmed:n.confirmed,recovered:n.recovered,deaths:n.deaths},a.push(t)})),a})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var K=a(124),J=a(43),$=a.n(J),Q=f.a.Content,X=f.a.Footer,Z=b.a.Paragraph,ee=D.a.TabPane,te=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(e){var r;return Object(m.a)(this,a),(r=t.call(this,e)).state={startDate:$()(),today:$()(),itemsRegions:[],itemsProvincies:[],itemsNotes:[],itemsWorls:[],totWorldConfirmed:0,totWorldRecovered:0,totWorldDeaths:0,totDimessi:0,totDeceduti:0,totCasi:0,totPositivi:0,totDimessiPrev:0,totDecedutiPrev:0,totCasiPrev:0,totPositiviPrev:0,varPositivi:0,varPositiviPrev:0,DataChart1:{},DataChart2:{},DataChart3:{},radarData:"positivi"},r.handleChange=r.handleChange.bind(Object(h.a)(r)),r}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,a,r=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=null,a=null,U()<"17:30"?(t=z(1),a=z(2)):(t=(new Date).toJSON().slice(0,10).replace(/-/g,"-"),a=z(1)),sessionStorage.setItem("DATIAGGIORNATIAL",R(t)),e.next=6,L(t).then((function(e){r.setState({totDimessi:e[0],totDeceduti:e[1],totCasi:e[2],totPositivi:e[3],varPositivi:e[4],varTamponi:e[5]})}));case 6:return e.next=8,L(a).then((function(e){r.setState({totDimessiPrev:e[0],totDecedutiPrev:e[1],totCasiPrev:e[2],totPositiviPrev:e[3],varPositiviPrev:e[4],varTamponiPrev:e[5]})}));case 8:return e.next=10,V(t).then((function(e){r.setState({itemsRegions:e})}));case 10:return"positivi",e.next=13,M("positivi").then((function(e){r.setState({DataChart3:{labels:e[0],datasets:[{label:"Totale positivi",data:e[1],backgroundColor:"rgba(255, 170, 0, 0.2)",borderColor:"rgba(255, 170, 0,1)",pointRadius:.5,borderWidth:1.5}]}})}));case 13:return e.next=15,A(t).then((function(e){r.setState({itemsProvincies:e})}));case 15:return e.next=17,L().then((function(e){r.setState({DataChart1:{labels:e[0],datasets:[{data:e[1],backgroundColor:"rgba(255, 170, 0, 0.2)",borderColor:"rgba(255, 170, 0,1)",pointRadius:.5,borderWidth:1.5}]},DataChart2:{labels:e[0],datasets:[{label:"Totale positivi",data:e[2],backgroundColor:"rgba(255, 170, 0, 0.2)",borderColor:"rgba(255, 170, 0, 1)",pointRadius:.5,borderWidth:1.5},{label:"Dimessi Guariti",data:e[3],backgroundColor:"rgba(76, 230, 0, 0.2)",borderColor:"rgba(76, 230, 0, 1)",pointRadius:.5,borderWidth:1.5},{label:"Deceduti",data:e[4],backgroundColor:"rgba(194, 194, 194, 0.2)",borderColor:"rgba(194, 194, 194, 1)",pointRadius:.5,borderWidth:1.5}]}})}));case 17:return e.next=19,B(t).then((function(e){r.setState({itemsNotes:e})}));case 19:return e.next=21,q().then((function(e){var t=0,a=0,n=0;e.forEach((function(e){var r=e.confirmed,i=e.recovered,o=e.deaths;t+=r,a+=i,n+=o})),r.setState({itemsWorls:e,totWorldConfirmed:t,totWorldRecovered:a,totWorldDeaths:n})}));case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e,t){var a=this,r=t;(new Date).getDate().toString()===e.format("D")&&(r=(r=e.subtract(1,"days")).format("YYYY-MM-DD")),L(r).then((function(e){a.setState({totDimessi:e[0],totDeceduti:e[1],totCasi:e[2],totPositivi:e[3],varPositivi:e[4],varTamponi:e[5]})})),L(e.subtract(1,"days").format("YYYY-MM-DD")).then((function(e){a.setState({totDimessiPrev:e[0],totDecedutiPrev:e[1],totCasiPrev:e[2],totPositiviPrev:e[3],varPositiviPrev:e[4],varTamponiPrev:e[5]})})),V(r).then((function(e){a.setState({itemsRegions:e})})),A().then((function(e){a.setState({itemsProvincies:e})}))}},{key:"handleDataChange",value:function(e){var t=this;M(e.target.value).then((function(a){t.setState({radarData:e.target.value,DataChart3:{labels:a[0],datasets:[{label:"Totale "+e.target.value,data:a[1],backgroundColor:a[2],borderColor:a[3],pointRadius:.5,borderWidth:1.5}]}})}))}},{key:"render",value:function(){var e=[{render:function(e){return n.a.createElement("span",{style:{color:"white"}},e)},title:"Regione",dataIndex:"denominazione_regione",key:"denominazione_regione",sorter:function(e,t){return e.denominazione_regione<t.denominazione_regione?-1:e.denominazione_regione>t.denominazione_regione?1:void 0},sortDirections:["descend","ascend"]},{render:function(e){return n.a.createElement("span",{style:{color:"#e60000"}},e)},title:"Totale casi",dataIndex:"totale_casi",key:"totale_casi",defaultSortOrder:"descend",sorter:function(e,t){return e.totale_casi<t.totale_casi?-1:e.totale_casi>t.totale_casi?1:void 0},sortDirections:["descend","ascend"]},{render:function(e){return n.a.createElement("span",{style:{color:"#ffaa00"}},e)},title:"Totale positivi",dataIndex:"totale_positivi",key:"totale_positivi",sorter:function(e,t){return e.totale_positivi<t.totale_positivi?-1:e.totale_positivi>t.totale_positivi?1:void 0},sortDirections:["descend","ascend"]},{render:function(e){return n.a.createElement("span",{style:{color:"#ffaa00"}},e)},title:"Nuovi positivi",dataIndex:"nuovi_positivi",key:"nuovi_positivi",sorter:function(e,t){return e.nuovi_positivi<t.nuovi_positivi?-1:e.nuovi_positivi>t.nuovi_positivi?1:void 0},sortDirections:["descend","ascend"]},{render:function(e){return n.a.createElement("span",{style:{color:"#4ce600"}},e)},title:"Dimessi Guariti",dataIndex:"dimessi_guariti",key:"dimessi_guariti",sorter:function(e,t){return e.dimessi_guariti<t.dimessi_guariti?-1:e.dimessi_guariti>t.dimessi_guariti?1:void 0},sortDirections:["descend","ascend"]},{render:function(e){return n.a.createElement("span",{style:{color:"#adadad"}},e)},title:"Deceduti",dataIndex:"deceduti",key:"deceduti",sorter:function(e,t){return e.deceduti<t.deceduti?-1:e.deceduti>t.deceduti?1:void 0},sortDirections:["descend","ascend"]}],t=[{dataIndex:"data",defaultSortOrder:"descend",render:function(e){return n.a.createElement("span",null,R(e))},key:"data",sorter:function(e,t){return e.data<t.data?-1:e.data>t.data?1:void 0},width:100},{dataIndex:"note",key:"note"}],a=[{render:function(e){return n.a.createElement("span",{style:{color:"white"}},e)},title:"Paese",dataIndex:"country",key:"country",sorter:function(e,t){return e.country<t.country?-1:e.country>t.country?1:void 0},sortDirections:["descend","ascend"]},{render:function(e){return n.a.createElement("span",{style:{color:"#e60000"}},e)},title:"Totale confermati",dataIndex:"confirmed",key:"confirmed",defaultSortOrder:"descend",sorter:function(e,t){return e.confirmed<t.confirmed?-1:e.confirmed>t.confirmed?1:void 0},sortDirections:["descend","ascend"]},{render:function(e){return n.a.createElement("span",{style:{color:"#ffaa00"}},e)},title:"Totale ricoverati",dataIndex:"recovered",key:"recovered",sorter:function(e,t){return e.recovered<t.recovered?-1:e.recovered>t.recovered?1:void 0},sortDirections:["descend","ascend"]},{render:function(e){return n.a.createElement("span",{style:{color:"#adadad"}},e)},title:"Deceduti",dataIndex:"deaths",key:"deaths",sorter:function(e,t){return e.deaths<t.deaths?-1:e.deaths>t.deaths?1:void 0},sortDirections:["descend","ascend"]}];return n.a.createElement("div",null,n.a.createElement(E.a,null),n.a.createElement(f.a,{className:"layout"},n.a.createElement(y.a,{style:{position:"fixed",zIndex:1,width:"100%"},className:"site-page-header-responsive",title:"DATI COVID-19",subTitle:"Situazione Italia e Mondo",extra:[n.a.createElement("span",null,"Dati aggiornati al "),n.a.createElement(w.a,{defaultValue:$()(this.state.today,"YYYY-MM-DD"),format:"YYYY-MM-DD",onChange:this.handleChange,disabledDate:function(e){return e<$()("2020-02-25","YYYY-MM-DD")||e>$()().endOf("day")}})]}),n.a.createElement(Q,{className:"site-layout",style:{marginTop:75}},n.a.createElement(C.a,{orientation:"left"},"Situazione Italia"),n.a.createElement("div",{className:"card-container"},n.a.createElement(j.a,{gutter:{xs:8,sm:16,md:24,lg:32}},n.a.createElement(x.a,{className:"gutter-row",span:6},n.a.createElement(N.a,{className:"card-wrapper",bordered:!1},n.a.createElement(I.a,{className:"card-wrapper-statistic",title:"Totale positivi",value:this.state.totPositivi,suffix:n.a.createElement("span",null," +",this.state.varPositivi),valueStyle:{color:"#ffaa00",textAlign:"center"}}),n.a.createElement(Z,{style:{textAlign:"center"}},n.a.createElement(P.a,{strokeLinecap:"square",strokeWidth:"15px",strokeColor:"#ffaa00",percent:(this.state.totPositivi/this.state.totCasi*100).toFixed(2)})))),n.a.createElement(x.a,{className:"gutter-row",span:6},n.a.createElement(N.a,{className:"card-wrapper",bordered:!1},n.a.createElement(I.a,{title:"Deceduti",value:this.state.totDeceduti,suffix:n.a.createElement("span",null," +",this.state.totDeceduti-this.state.totDecedutiPrev),valueStyle:{color:"#adadad",textAlign:"center"}}),n.a.createElement(Z,{style:{textAlign:"center"}},n.a.createElement(P.a,{strokeLinecap:"square",strokeWidth:"15px",strokeColor:"#adadad",percent:(this.state.totDeceduti/this.state.totCasi*100).toFixed(2)})))),n.a.createElement(x.a,{className:"gutter-row",span:6},n.a.createElement(N.a,{className:"card-wrapper",bordered:!1},n.a.createElement(I.a,{title:"Dimessi/Guariti",value:this.state.totDimessi,suffix:n.a.createElement("span",null," +",this.state.totDimessi-this.state.totDimessiPrev),valueStyle:{color:"#4ce600",textAlign:"center"}}),n.a.createElement(Z,{style:{textAlign:"center"}},n.a.createElement(P.a,{strokeLinecap:"square",strokeWidth:"15px",strokeColor:"#4ce600",percent:(this.state.totDimessi/this.state.totCasi*100).toFixed(2)})))),n.a.createElement(x.a,{className:"gutter-row",span:6},n.a.createElement(N.a,{className:"card-wrapper",bordered:!1},n.a.createElement(I.a,{title:"Totale casi",value:this.state.totCasi,suffix:n.a.createElement("div",{style:{textAlign:"left"}},n.a.createElement("p",{style:{marginBottom:"0.6em"}}," +",this.state.totCasi-this.state.totCasiPrev),n.a.createElement("p",{style:{color:"#7c878e",fontSize:"12px"}},"Su ",this.state.varTamponi-this.state.varTamponiPrev," Tamponi")),valueStyle:{color:"#e60000",textAlign:"center"}}),n.a.createElement(Z,{style:{textAlign:"center"}},n.a.createElement(P.a,{strokeLinecap:"square",strokeWidth:"15px",strokeColor:"#e60000",percent:((this.state.totCasi-this.state.totCasiPrev)/(this.state.varTamponi-this.state.varTamponiPrev)*100).toFixed(2)})))))),n.a.createElement("div",{className:"card-container"},n.a.createElement(j.a,{gutter:{xs:8,sm:16,md:24,lg:32}},n.a.createElement(x.a,{className:"gutter-row",span:8},n.a.createElement(N.a,{className:"card-wrapper",bordered:!1},n.a.createElement(D.a,{defaultActiveKey:"1"},n.a.createElement(ee,{tab:"REGIONI",key:"1"},n.a.createElement(_.a,{dataSource:this.state.itemsRegions,pagination:{total:this.state.itemsRegions.length,pageSize:this.state.itemsRegions.length,hideOnSinglePage:!0},layout:"fixed",columns:e,bordered:!0,size:"middle",rowKey:"codice_regione",scroll:{y:203}})),n.a.createElement(ee,{tab:"PROVINCE",key:"2"},n.a.createElement(_.a,{dataSource:this.state.itemsProvincies,pagination:{total:this.state.itemsProvincies.length,pageSize:this.state.itemsProvincies.length,hideOnSinglePage:!0},layout:"fixed",columns:[{title:"Provincia",dataIndex:"denominazione_provincia",key:"denominazione_provincia",sorter:function(e,t){return e.denominazione_provincia<t.denominazione_provincia?-1:e.denominazione_provincia>t.denominazione_provincia?1:void 0},sortDirections:["descend","ascend"]},{title:"Totale casi",dataIndex:"totale_casi",defaultSortOrder:"descend",key:"totale_casi",sorter:function(e,t){return e.totale_casi<t.totale_casi?-1:e.totale_casi>t.totale_casi?1:void 0},sortDirections:["descend","ascend"]}],bordered:!0,size:"middle",rowKey:"codice_provincia",scroll:{y:203}}))))),n.a.createElement(x.a,{className:"gutter-row",span:8},n.a.createElement(N.a,{className:"card-wrapper",bordered:!1,title:"Nuovi positivi"},n.a.createElement(K.Line,{data:this.state.DataChart1,legend:{display:!1},options:{scales:{yAxes:[{ticks:{min:0,max:45e3,stepSize:5e3},gridLines:{color:"rgb(84, 86, 89)",borderDash:[2,2]},scaleLabel:{display:!0}}],xAxes:[{gridLines:{color:"rgb(84, 86, 89)",borderDash:[2,2]},type:"time",time:{unit:"month",unitStepSize:1,displayFormats:{month:"MMMM"}}}]}}}))),n.a.createElement(x.a,{className:"gutter-row",span:8},n.a.createElement(N.a,{className:"card-wrapper",bordered:!1,title:"Andamento nazionale"},n.a.createElement(K.Line,{data:this.state.DataChart2,options:{legend:{display:!0,position:"bottom"},scales:{yAxes:[{ticks:{min:0,max:55e4,stepSize:5e4},gridLines:{color:"rgb(84, 86, 89)",borderDash:[2,2]},scaleLabel:{display:!0}}],xAxes:[{gridLines:{color:"rgb(84, 86, 89)",borderDash:[2,2]},type:"time",time:{unit:"month",unitStepSize:1,displayFormats:{month:"MMMM"}}}]}}}))))),n.a.createElement("div",{className:"card-container"},n.a.createElement(j.a,{gutter:{xs:8,sm:16,md:24,lg:32}},n.a.createElement(x.a,{className:"gutter-row",span:8},n.a.createElement(N.a,{className:"card-wrapper",bordered:!1},n.a.createElement(_.a,{dataSource:this.state.itemsNotes,pagination:{total:this.state.itemsNotes.length,pageSize:this.state.itemsNotes.length,hideOnSinglePage:!0},showHeader:!1,columns:t,bordered:!0,title:function(){return"Note"},size:"small",scroll:{y:320}}))),n.a.createElement(x.a,{className:"gutter-row",span:8},n.a.createElement(N.a,{className:"card-wrapper",bordered:!1,title:n.a.createElement("span",null,"12 Regioni con il maggior numero di ",this.state.radarData)},n.a.createElement(k.a.Group,{value:this.state.radarData,onChange:this.handleDataChange.bind(this),style:{right:"0px"}},n.a.createElement(k.a.Button,{value:"positivi"},"Positivi"),n.a.createElement(k.a.Button,{value:"ricoverati"},"Ricoverati"),n.a.createElement(k.a.Button,{value:"deceduti"},"Deceduti")),n.a.createElement(K.Radar,{data:this.state.DataChart3,options:{legend:{display:!1},title:{display:!1},scale:{angleLines:{color:"rgb(84, 86, 89)",borderDash:[2,2]},gridLines:{color:"rgb(84, 86, 89)",borderDash:[2,2]},ticks:{callback:function(){return""},backdropColor:"rgba(0, 0, 0, 0)"}}}}))))),n.a.createElement(C.a,{orientation:"left"},"Situazione Mondiale"),n.a.createElement("div",{className:"card-container"},n.a.createElement(j.a,{gutter:{xs:8,sm:16,md:24,lg:32}},n.a.createElement(x.a,{className:"gutter-row",span:6},n.a.createElement(N.a,{className:"card-wrapper",bordered:!1},n.a.createElement(I.a,{className:"card-wrapper-statistic",title:"Totale ricoverati",value:this.state.totWorldRecovered,valueStyle:{color:"#ffaa00",textAlign:"center"}}))),n.a.createElement(x.a,{className:"gutter-row",span:6},n.a.createElement(N.a,{className:"card-wrapper",bordered:!1},n.a.createElement(I.a,{title:"Deceduti",value:this.state.totWorldDeaths,valueStyle:{color:"#adadad",textAlign:"center"}}))),n.a.createElement(x.a,{className:"gutter-row",span:6},n.a.createElement(N.a,{className:"card-wrapper",bordered:!1},n.a.createElement(I.a,{title:"Totale casi",value:this.state.totWorldConfirmed,valueStyle:{color:"#e60000",textAlign:"center"}}))))),n.a.createElement("div",{className:"card-container"},n.a.createElement(j.a,{gutter:{xs:8,sm:16,md:24,lg:32}},n.a.createElement(x.a,{className:"gutter-row",span:12},n.a.createElement(N.a,{className:"card-wrapper",bordered:!1},n.a.createElement(_.a,{dataSource:this.state.itemsWorls,pagination:!1,layout:"fixed",columns:a,bordered:!0,size:"middle",rowKey:"country",scroll:{y:228}})))))),n.a.createElement(X,null,n.a.createElement("span",null,"\xa9 2020 by ",n.a.createElement("a",{href:"https://github.com/Alberto75",target:"_blank",rel:"noopener noreferrer"},"Albe")," | "),n.a.createElement("a",{href:"https://creativecommons.org/licenses/by/4.0/deed.en",target:"_blank",rel:"noopener noreferrer"},"CC-BY-4.0"),n.a.createElement("div",{className:"right"},"Dataset COVID-19 Italia by","\xa0",n.a.createElement("a",{href:"https://github.com/pcm-dpc/COVID-19",target:"_blank",rel:"noopener noreferrer"},"Dipartimento della Protezione Civile"),"\xa0","|","\xa0","Dataset COVID-19 Mondo by","\xa0",n.a.createElement("a",{href:"https://github.com/pomber/covid19",target:"_blank",rel:"noopener noreferrer"},"Pomber")))))}}]),a}(r.Component);var ae=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,n.a.createElement(te,null)))};a(423),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[220,1,2]]]);
//# sourceMappingURL=main.bf0e05b9.chunk.js.map