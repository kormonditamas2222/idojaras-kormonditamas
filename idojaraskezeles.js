import readline from 'readline/promises';
import { NapiIdojaras } from './NapiIdojaras.js';
import * as csv from 'csv/sync';
import fs from 'fs';

export async function maiidojaras() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const maiNap = new Date();
    const min = parseInt(await rl.question("Add meg a mai minimum hőmérsékletet: "));
    const max = parseInt(await rl.question("Add meg a mai maximum hőmérsékletet: "));
    const idojaras = await rl.question("Milyen a mai időjárás? ");
    rl.close();
    return new NapiIdojaras(maiNap.getDay(), min, max, idojaras);
}

export function beolvas() {
    const idojarasok = [];
    const adatok = fs.readFileSync("./idojaras.csv");
    const feldolgozott = csv.parse(adatok, {
        delimiter: ';', 
        columns: true
    });
    for (const adatsor of feldolgozott) {
        idojarasok.push(new NapiIdojaras(parseInt(adatsor.nap), parseInt(adatsor.min), parseInt(adatsor.max), adatsor.idojaras));
    }
    return idojarasok;
}