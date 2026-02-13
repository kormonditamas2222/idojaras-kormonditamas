import { beolvas, maiidojaras } from "./idojaraskezeles.js";
import { NapiIdojaras } from "./NapiIdojaras.js";

const tesztIdojaras = new NapiIdojaras(0, 20, 25, "derült");
console.log(tesztIdojaras.toString());

const vegeredmeny = beolvas();
vegeredmeny.push(await maiidojaras());

for (const idojaras of vegeredmeny) {
  console.log(idojaras.toString());
}

function maxKereses() {
  let maximum = vegeredmeny[0];
  for (const idojaras of vegeredmeny) {
    if (idojaras.max > maximum.max) {
      maximum = idojaras;
    }
  }
  switch (maximum.nap) {
    case 0: return `A legmagasabb hőmérsékletű nap az összes közül a lista ${vegeredmeny.findIndex((i) => i == maximum) + 1}. eleme, vasárnap`;
    case 1: return `A legmagasabb hőmérsékletű nap az összes közül a lista ${vegeredmeny.findIndex((i) => i == maximum) + 1}. eleme, hétfő`;
    case 2: return `A legmagasabb hőmérsékletű nap az összes közül a lista ${vegeredmeny.findIndex((i) => i == maximum) + 1}. eleme, kedd`;
    case 3: return `A legmagasabb hőmérsékletű nap az összes közül a lista ${vegeredmeny.findIndex((i) => i == maximum) + 1}. eleme, szerda`;
    case 4: return `A legmagasabb hőmérsékletű nap az összes közül a lista ${vegeredmeny.findIndex((i) => i == maximum) + 1}. eleme, csütörtök`;
    case 5: return `A legmagasabb hőmérsékletű nap az összes közül a lista ${vegeredmeny.findIndex((i) => i == maximum) + 1}. eleme, péntek`;
    case 6: return `A legmagasabb hőmérsékletű nap az összes közül a lista ${vegeredmeny.findIndex((i) => i == maximum) + 1}. eleme, szombat`;
    default: break;
  }
}
console.log(maxKereses());