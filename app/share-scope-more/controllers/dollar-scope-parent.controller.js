angular
    .module('main.shareScopeMore')
    .controller('dollarScopeParent', function($scope){
        $scope.parentName = "Adam";
        $scope.isOpen = "true";
        
        $scope.msg = {};
    });