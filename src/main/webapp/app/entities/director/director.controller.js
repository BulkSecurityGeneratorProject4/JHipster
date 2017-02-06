(function() {
    'use strict';

    angular
        .module('jHipsterApp')
        .controller('DirectorController', DirectorController);

    DirectorController.$inject = ['$scope', '$state', 'Director'];

    function DirectorController ($scope, $state, Director) {
        var vm = this;

        vm.directors = [];

        loadAll();

        function loadAll() {
            Director.query(function(result) {
                vm.directors = result;
                vm.searchQuery = null;
            });
        }
    }
})();
