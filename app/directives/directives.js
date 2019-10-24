angular.module('pcGlee')  //  This works without declaration unlike the controllers

.directive('navTemplate', function(){
    return{
        restrict: 'E',
        templateUrl: 'app/pages/templates/nav-template.html'
        };
    })
        .directive('miamiU', function(){
    return{
        restrict: 'E',
        templateUrl: 'app/pages/templates/education/miami-u.html'
        };
    })    
        .directive('coloradoSt', function(){
    return{
        restrict: 'E',
        templateUrl: 'app/pages/templates/education/colorado-st.html'
        };
    })    
        .directive('gatewayTech', function(){
    return{
        restrict: 'E',
        templateUrl: 'app/pages/templates/education/gateway-tech.html'
        };
    })    
        .directive('aboutIcons', function(){
    return{
        restrict: 'E',
        templateUrl: 'app/pages/templates/about-icons.html'
        };
    })
        .directive('appIcons', function(){
    return{
        restrict: 'E',
        templateUrl: 'app/pages/templates/app-icons.html'
        };
    })
        .directive('ratelinx', function(){
    return{
        restrict: 'E',
        templateUrl: 'app/pages/templates/work-xp/ratelinx.html'
        };
    })  
        .directive('lts', function(){
    return{
        restrict: 'E',
        templateUrl: 'app/pages/templates/work-xp/lts.html'
        };
    })    
        .directive('collab', function(){
    return{
        restrict: 'E',
        templateUrl: 'app/pages/templates/work-xp/collab.html'
        };
    })    
        .directive('healthgrades', function(){
    return{
        restrict: 'E',
        templateUrl: 'app/pages/templates/work-xp/healthgrades.html'
        };
    })
        .directive('music', function(){
    return{
        restrict: 'E',
        templateUrl: 'app/pages/templates/hobbies/music.html'
        };
    })
        .directive('sailing', function(){
    return{
        restrict: 'E',
        templateUrl: 'app/pages/templates/hobbies/sailing.html'
        };
    })
        .directive('skiing', function(){
    return{
        restrict: 'E',
        templateUrl: 'app/pages/templates/hobbies/skiing.html'
        };
    });