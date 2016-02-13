angular
    .module('main.start')
    .factory('directiveShareGameFactory', function(){
        
        var directiveShareGameFactory = {};
        var game = "Witcher 3";
        
        directiveShareGameFactory.getGame = function () {
            return game;
        };
        
        directiveShareGameFactory.setGame = function (newGame) {
            game = newGame;
        };
        
        return directiveShareGameFactory;
        
    });