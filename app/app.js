/*global angular */
// This module gets run whtn the document loads
// Applicati name is main, Array is for demendencies like other libraries
(function() {
var app = angular.module('pcGlee', []);
    
 
    
/*    app.controller('BandGearController', function(){
        //this.stompBoxes = pedals; //gear is a property of BandGearController
        //this.axes = guitars; 
        //this.amps = amplifiers;
    });*/
    
    app.controller('TabController', function(){
        this.tab = 1;
        
        this.selectTab = function(setTab) {
        this.tab = setTab; 
        };
        //this will be called both inside teh ng-class directive and in the // panels to determine which one is selected
        this.isSelected = function(checkTab){
          return this.tab === checkTab;  
        };
    });
    
   app.controller('PedalController', [ '$http', function($http){
       //this.products = schmata;  // this inside of tht callback is teh service 
       var gear = this;
       
       gear.stompBoxes = [];  // initialize products to an empty array so when it loads we dont see errors
       
       $http.get('/assets/data/pedals.json').success(function(pedalData){
           gear.stompBoxes = pedalData;
       });
   }]);  

    
/*    var pedals = [
        {
        name: 'Tube Scremer',
        model: 'ts808hw',
        brand: 'Ibanez',
        genre: 'Overdrive'
        },
        {
        name: 'Metal Zone',
        model: 'MT-2',
        brand: 'Boss',
        genre: 'Distortion'
        }
    ];*/
    
/*    var guitars = [
        {
        name: 'Stratocaster',
        model: '1987 Squire',
        brand: 'Fender',
        color: 'Olympic White'
        },
        {
        name: 'Telecaster',
        model: '2004 Highway One',
        brand: 'Fender',
        color: 'Sunburst'
        }
    ];   */ 
    
/*    var amplifiers = [
        {
        name: 'Hot Rod Deluxe',
        year: '2001',
        brand: 'Fender',
        watts: '40'
        },
        {
        name: 'World Traveler',
        year: '1996',
        brand: 'David Eden',
        watts: '400'
        }
    ];   */
    
})();
