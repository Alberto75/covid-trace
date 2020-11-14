import axios from "axios";
import {globalConfig} from "./config";

export function getPreviousDate(num) {
    let d = new Date();
    d.setDate(d.getDate() - num);
    let month = d.getMonth() + 1;
    return d.getFullYear() + '-' + (month < 10 ? '0' + month : '' + month) + '-' + (d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate());
}

export function getCurrentTime() {
    var today = new Date();
    return (today.getHours() < 10 ? '0' + today.getHours() : + '' + today.getHours()) + ":" + (today.getMinutes() < 10 ? '0' + today.getMinutes() : + '' + today.getMinutes());
}

export function formatDate(date) {
    let d = new Date(date);
    let month = d.getMonth() + 1;
    return (d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate()) + '/' + (month < 10 ? '0' + month : '' + month) + '/' + d.getFullYear();
}

export async function getDataRegions(giorno=0) {
    const {dataRegionsUrl} = globalConfig();
    let result = [];
    if (giorno !== 0) {
        return axios.get(dataRegionsUrl)
            .then(res => {
                const obj = res.data;
                return obj.filter(obj => obj.data.includes(giorno));
            });
    } else {
        const {dataRegionsLatestUrl} = globalConfig();
        return axios.get(dataRegionsLatestUrl)
            .then(res => {
                const obj = res.data;
                let ricoverati_con_sintomi = [];   
                let terapia_intensiva = [];  
                let totale_ospedalizzati = [];  
                let isolamento_domiciliare = [];
                let totale_positivi = [];  
                let denominazione_regione = [];
                var sorted;
                var dates;

                sorted = obj.sort((a, b) => b.totale_positivi - a.totale_positivi);
                dates = sorted.slice(0,12)

                dates.forEach(record => {  
                    denominazione_regione.push(record.denominazione_regione); 
                    ricoverati_con_sintomi.push(record.ricoverati_con_sintomi);  
                    terapia_intensiva.push(record.terapia_intensiva);  
                    totale_ospedalizzati.push(record.totale_ospedalizzati);  
                    isolamento_domiciliare.push(record.isolamento_domiciliare);                      
                    totale_positivi.push(record.totale_positivi);                      
                });                  
                result.push(denominazione_regione, ricoverati_con_sintomi, terapia_intensiva, totale_ospedalizzati, isolamento_domiciliare, totale_positivi);
                return result;
            });        
    }        
}

export async function getTopRegions(valore) {
    const {dataRegionsLatestUrl} = globalConfig();
    let result = [];
    return axios.get(dataRegionsLatestUrl)
        .then(res => {
            var obj = res.data;
            let regione = [];  
            let totale_valore = [];  
            let bkColor = [];  
            let bordColor = [];  
            var sorted;
            var dates;

            if (valore === 'positivi') {
                sorted = obj.sort((a, b) => b.totale_positivi - a.totale_positivi);
                dates = sorted.slice(0,12)
            } else if (valore === 'ricoverati') {
                sorted = obj.sort((a, b) => b.totale_ospedalizzati - a.totale_ospedalizzati);
                dates = sorted.slice(0,10)                   
            } else if (valore === 'deceduti') {
                sorted = obj.sort((a, b) => b.deceduti - a.deceduti);
                dates = sorted.slice(0,12)                 
            }

            dates.forEach(record => {  
                regione.push(record.denominazione_regione); 
                if (valore === 'positivi') {
                    totale_valore.push(record.totale_positivi);
                    bkColor.push('rgba(255, 170, 0, 0.2)')
                    bordColor.push('rgba(255, 170, 0,1)')
                } else if (valore === 'ricoverati') {
                    totale_valore.push(record.totale_ospedalizzati);
                    bkColor.push('rgba(230, 0, 0, 0.2)')
                    bordColor.push('rgba(230, 0, 0, 1)')                    
                } else if (valore === 'deceduti') {
                    totale_valore.push(record.deceduti);
                    bkColor.push('rgba(173, 173, 173, 0.2)')
                    bordColor.push('rgba(173, 173, 173, 1)')                    
                }
                  
            });                  
            result.push(regione, totale_valore, bkColor, bordColor);
            return result;            
        });  
}

export async function getDataProvinces(giorno) {
    const {dataProvincesUrl} = globalConfig();

    return axios.get(dataProvincesUrl)
        .then(res => {
            const obj = res.data;
            return obj.filter(obj => obj.data.includes(giorno)).filter(obj => obj.denominazione_provincia !== 'In fase di definizione/aggiornamento');
        });
}

export async function getDataNational(giorno=0) {
    const {dataNationalUrl} = globalConfig();
    let result = [];
    if (giorno !== 0) {
        return axios.get(dataNationalUrl)
            .then(res => {
                const obj = res.data;
                result.push(obj.filter(obj => obj.data.includes(giorno))[0].dimessi_guariti, obj.filter(obj => obj.data.includes(giorno))[0].deceduti, obj.filter(obj => obj.data.includes(giorno))[0].totale_casi, obj.filter(obj => obj.data.includes(giorno))[0].totale_positivi, obj.filter(obj => obj.data.includes(giorno))[0].variazione_totale_positivi, obj.filter(obj => obj.data.includes(giorno))[0].tamponi);
                return result;
            }); 
    } else {
        return axios.get(dataNationalUrl)
            .then(res => {
                const obj = res.data;
                let mese = [];  
                let nuoviPositivi = [];   
                let totale_positivi = [];  
                let dimessi_guariti = [];  
                let deceduti = [];
                let tamponi = [];                                 
                obj.forEach(record => {  
                    mese.push(record.data);  
                    nuoviPositivi.push(record.nuovi_positivi);  
                    totale_positivi.push(record.totale_positivi);  
                    dimessi_guariti.push(record.dimessi_guariti);  
                    deceduti.push(record.deceduti);                      
                    tamponi.push(record.tamponi);                      
                });                  
                result.push(mese, nuoviPositivi, totale_positivi, dimessi_guariti, deceduti, tamponi);
                return result;
            });        
    }
}

export async function getDataNotes() {
    const {dataNoteUrl} = globalConfig();

    return axios.get(dataNoteUrl)
        .then(res => {
            const obj = res.data;
            return obj;
        });
}

export async function getDataCountries() {
    const {dataWorldUrl} = globalConfig();
    let result = [];

    return fetch(dataWorldUrl)
        .then(response => response.json())
        .then(res => {
            var worldData = { country: "", confirmed: 0, recovered: 0, deaths: 0 };
            var worldArr = Object.keys(res).map(i => i);
            
            worldArr.forEach((country) => {
                let obj = res[country];
                obj = obj[obj.length - 1];
                worldData = {
                    country: country,
                    confirmed: obj.confirmed,
                    recovered: obj.recovered,
                    deaths: obj.deaths,
                }
                result.push(worldData); 
            });     
            return result;

        });
}

