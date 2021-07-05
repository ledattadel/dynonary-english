const gameApi = require('express').Router();
const gameController = require('../controllers/game.controller');

// ======== CORRECT WORD GAME ========
gameApi.get('/correct-word/pack', gameController.getWordPackCWG);

// ======== WORD MATCH GAME ========
gameApi.get('/word-match/pack', gameController.getWordPackWMG);

module.exports = gameApi;
