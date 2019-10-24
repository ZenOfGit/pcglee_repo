/*global angular */
// This module gets run whtn the document loads
// Application name is main, Array is for dependencies like other libraries
(function() {
var app = angular.module('pcGlee', []);

    app.controller('TabController', function(){
        this.tab = 1;
        
        this.selectTab = function(setTab) {
        this.tab = setTab; 
        };
        this.isSelected = function(checkTab){
          return this.tab === checkTab;  
        };
    });
})();
