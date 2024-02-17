import { read } from './reader.js'
import { json } from './parser.js'

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      const data = new Promise((resolve, reject) => {
        read().then(data => json(data)).then(dataJson => resolve(dataJson))
      });
    })
  }
}

  //   static load() {
  //     const data = read(); // возвращается Promise!
  //     const value = json(data); // возвращается Promise!
  //     return value;
  //   }
  // }