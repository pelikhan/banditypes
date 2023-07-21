import * as ds from "@devicescript/core"

class Number {
    static isInteger(v: number): boolean {
        if (isNaN(v)) return false
        return v === (v | 0)
    }
}

import { object, number, string, array, optional, fail, Infer } from "./index"

const parseGunslinger = object({
    name: string(),
    kills: number(),
    guns: array(string()),
    born: object({
        state: string().or(optional()),
        year: number().map(n => (Number.isInteger(n) ? n : fail("year"))),
    }),
})

// Explicit inference
type Gunslinger = Infer<typeof parseGunslinger>

const raw = JSON.parse(`{
    "name": "Dirty Bobby",
    "kills": 17,
    "guns": ["Colt 45"],
    "born": {
      "state": "Idaho",
      "year": 1872
    }
  }`)
console.log(raw)
const data: Gunslinger = parseGunslinger(raw)
// fully type-safe access
console.log(`${data.name} from ${data.born.state} is out to kill ya`)
