var app = angular.module('myApp', []);

app.controller('MainController', function ($scope) {
    $scope.products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 150 },
        { id: 3, name: 'Product 3', price: 200 }
    ];

    $scope.editedProduct = {};

    $scope.editProduct = function (product) {
        $scope.editedProduct = angular.copy(product);
        $('#productModal').modal('show');
    };

    $scope.saveProduct = function () {
        var index = $scope.products.findIndex(function (product) {
            return product.id === $scope.editedProduct.id;
        });

        if (index !== -1) {
            $scope.products[index] = $scope.editedProduct;
        }

        $('#productModal').modal('hide');
    };
});
