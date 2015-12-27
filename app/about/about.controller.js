angular
    .module('main.about')
    .controller('about', function(dateFactory){
    
    console.log("About controller");
    
    var aboutCtrl = this;
    
    aboutCtrl.date = dateFactory.currentTime;
    
    aboutCtrl.clickForDate = function(){
        console.log("clicked");
        aboutCtrl.date = dateFactory.currentTime;
    };
    
    
});