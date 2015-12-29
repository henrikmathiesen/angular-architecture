angular
    .module('main.responsivejs')
    .controller('responsivejs', function(responsiveFactory){
        
        var responsivejsCtrl = this;
        responsivejsCtrl.rangeInput = '';
        responsivejsCtrl.rangeInputIsInRange = false;
        responsivejsCtrl.rangeCheckButtonClicked = false;
        responsivejsCtrl.rangeCheckOutput = '';
        
        responsivejsCtrl.checkIfInRange = function(){
            if(!responsivejsCtrl.rangeInput) { return; }
            
            responsivejsCtrl.rangeInputIsInRange = responsiveFactory.isRange(responsivejsCtrl.rangeInput);
            responsivejsCtrl.rangeCheckOutput =  responsivejsCtrl.rangeInput + ' ' + ((responsivejsCtrl.rangeInputIsInRange) ? (' matches') : (' matches not')) + ' the viewport';
            
            responsivejsCtrl.rangeCheckButtonClicked = true;
        };
        
        
    });