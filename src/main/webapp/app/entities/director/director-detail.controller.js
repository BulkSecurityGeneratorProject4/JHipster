(function() {
    'use strict';

    angular
        .module('jHipsterApp')
        .controller('DirectorDetailController', DirectorDetailController);

    DirectorDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Director'];

    function DirectorDetailController($scope, $rootScope, $stateParams, previousState, entity, Director) {
        var vm = this;

        vm.director = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('jHipsterApp:directorUpdate', function(event, result) {
            vm.director = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
