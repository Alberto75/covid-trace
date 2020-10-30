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

export async function getDataRegions(giorno) {
    const {dataRegionsUrl} = globalConfig();

    return axios.get(dataRegionsUrl)
        .then(res => {
            const obj = res.data;
            return obj.filter(obj => obj.data.includes(giorno));
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

