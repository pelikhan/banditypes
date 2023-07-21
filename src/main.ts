import * as ds from "@devicescript/core"

import {
    assert,
    object,
    number,
    string,
    array,
    optional,
    fail,
    Infer,
  } from "./index";
  
  const parseGunslinger = object({
    name: string(),
    kills: number(),
    guns: array(string()),
    born: object({
      state: string().or(optional()),
      year: number().map((n) => (Number.isInteger(n) ? n : fail())),
    }),
  });
  
  // Explicit inference
  type Gunslinger = Infer<typeof parseGunslinger>;
  
  const raw = JSON.parse(`{
    name: 'Dirty Bobby',
    kills: 17,
    guns: ['Colt 45'],
    born: {
      state: 'Idaho',
      year: 1872
    }
  }`);
  try {
    const data = parseGunslinger(raw);
    // fully type-safe access
    console.log(`${data.name} from ${data.born.state} is out to kill ya`);
  } catch (err) {
    console.log("invalid JSON");
  }