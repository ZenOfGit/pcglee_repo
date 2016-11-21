/*angular.module('pcGlee')

.controller('SCHMedalController', [ '$scope', '$http', function($scope, $http){
       
    var onComplete = function(pedalData){
         $scope.stompBoxes = pedalData;
    };
    
       $scope.stompBoxes = [];  
       
       $http.get('/assets/data/pedals.json')
           .then(onComplete);
    
       
   }]);*/