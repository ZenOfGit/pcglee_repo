angular.module('pcGlee')

.controller('AmpController', [ '$http', function($http){
       //this.products = schmata;  // this inside of tht callback is teh service 
       var gear = this;
       
       gear.amps = [];  // initialize products to an empty array so when it loads we dont see errors
       
       $http.get('/assets/data/amps.json').success(function(ampData){
           gear.amps = ampData;
       });
   }]);