(function() {
    'use strict';

    angular
        .module('jHipsterApp')
        .controller('ActorController', ActorController);

    ActorController.$inject = ['$scope', '$state', 'Actor'];

    function ActorController ($scope, $state, Actor) {
        var vm = this;

        vm.actors = [];

        loadAll();

        function loadAll() {
            Actor.query(function(result) {
                vm.actors = result;
                vm.searchQuery = null;
            });
        }
    }
})();
