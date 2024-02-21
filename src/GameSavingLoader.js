import read from './reader.js'
import json from './parser.js'

export default class GameSavingLoader {
  static load() {
    return read().then(data => json(data))
  }
}

  //   static load() {
  //     const data = read(); // возвращается Promise!
  //     const value = json(data); // возвращается Promise!
  //     return value;
  //   }
  // }