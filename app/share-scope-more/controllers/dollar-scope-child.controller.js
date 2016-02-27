angular
    .module('main.shareScopeMore')
    .controller('dollarScopeChild', function($scope){
        $scope.childName = "Bertil";
        $scope.isOpen = "false";
        
        $scope.msg = {};
        
        $scope.vm = {};
    });