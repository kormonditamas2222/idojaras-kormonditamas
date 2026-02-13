export class NapiIdojaras {
    constructor(nap, min, max, idojaras) {
        this.nap = nap;
        this.min = min;
        this.max = max;
        this.idojaras = idojaras;
    }
    toString() {
        switch (this.nap) {
            case 0: return `Vasárnap: min hőmérséklet: ${this.min} °C, max hőmérséklet: ${this.max} °C, ${this.idojaras}`; 
            case 1: return `Hétfő: min hőmérséklet: ${this.min} °C, max hőmérséklet: ${this.max} °C, ${this.idojaras}`; 
            case 2: return `Kedd: min hőmérséklet: ${this.min} °C, max hőmérséklet: ${this.max} °C, ${this.idojaras}`; 
            case 3: return `Szerda: min hőmérséklet: ${this.min} °C, max hőmérséklet: ${this.max} °C, ${this.idojaras}`; 
            case 4: return `Csütörtök: min hőmérséklet: ${this.min} °C, max hőmérséklet: ${this.max} °C, ${this.idojaras}`; 
            case 5: return `Péntek: min hőmérséklet: ${this.min} °C, max hőmérséklet: ${this.max} °C, ${this.idojaras}`; 
            case 6: return `Szombat: min hőmérséklet: ${this.min} °C, max hőmérséklet: ${this.max} °C, ${this.idojaras}`; 
            default: break;
        }
    }
}