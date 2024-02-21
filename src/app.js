import GameSavingLoader from './GameSavingLoader.js';

GameSavingLoader.load().then((dataJson) => {
  console.log(dataJson)
}, (error) => {
  console.log(error);
});
