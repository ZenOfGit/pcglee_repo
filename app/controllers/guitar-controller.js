angular.module('pcGlee')

.controller('GuitarController', [ '$http', function($http){
       //this.products = schmata;  // this inside of tht callback is teh service 
       var gear = this;
       
       gear.axes = [];  // initialize products to an empty array so when it loads we dont see errors
       
       $http.get('/assets/data/guitars.json').success(function(guitarData){
           gear.axes = guitarData;
       });
   }]);  