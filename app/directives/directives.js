angular.module('pcGlee')  //  This works without declaration unlike the controllers

.directive('navTemplate', function(){
    return{
        restrict: 'E',
        templateUrl: 'app/pages/templates/nav-template.html'
        };
    })
        .directive('hulkAndThor', function(){
    return{
        restrict: 'E',
        templateUrl: 'app/pages/templates/code-ex/hulk-and-thor.html'
        };
    })
        .directive('timeAndDate', function(){
    return{
        restrict: 'E',
        templateUrl: 'app/pages/templates/code-ex/time-and-date.html'
        };
    })
        .directive('timeAndDate', function(){
    return{
        restrict: 'E',
        templateUrl: 'app/pages/templates/code-ex/jake.html'
        };
    })    
        .directive('bingo', function(){
    return{
        restrict: 'E',
        templateUrl: 'app/pages/templates/code-ex/bingo.html'
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
    })
        .directive('pedalCard', function(){
    return {
        restrict: 'E',
        templateUrl: 'app/pages/templates/pedal-card.html',
        scope: {
            header: "=",  //tell angular we are passing a string, could use = or string
            icon: "="
        }
/*        controller: function($scope){
            $scope.header = 'Pedal Header';
        }*/
/*        controller: function(){
            this.header = 'Pedal Header';
        },
        controllerAs: 'card'*/
    };
});