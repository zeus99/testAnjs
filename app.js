var app = angular.module('myApp', []);

app.controller('MainController', function($scope) {
    $scope.items = [];
    $scope.newItem = {};
    $scope.selectedDetailItem = {};
    $scope.editingItem = null;

    $scope.addItem = function() {
        if ($scope.newItem.name && $scope.newItem.description) {
            $scope.items.push({
                name: $scope.newItem.name,
                description: $scope.newItem.description
            });
            $scope.newItem = {}; // Clear the form after adding the item
        }
    };

    $scope.editItem = function(item) {
        $scope.selectedDetailItem = angular.copy(item);
        $scope.editingItem = $scope.items.indexOf(item);
        $('#itemModal').modal('show');
    };

    $scope.saveItem = function() {
        if ($scope.selectedDetailItem.name && $scope.selectedDetailItem.description) {
            if ($scope.editingItem !== null) {
                // Edit existing item
                $scope.items[$scope.editingItem] = angular.copy($scope.selectedDetailItem);
            } else {
                // Add new item
                $scope.items.push(angular.copy($scope.selectedDetailItem));
            }
            $('#itemModal').modal('hide');
        }
    };

    $scope.deleteItem = function() {
        if ($scope.editingItem !== null) {
            $scope.items.splice($scope.editingItem, 1);
            $('#itemModal').modal('hide');
        }
    };
});
