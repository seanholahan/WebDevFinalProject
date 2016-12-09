
(function () {
    angular
        .module("WebAppMaker")
        .controller("CreateProductController", CreateProductController);

    function CreateProductController($routeParams, ProductService, $location) {
        var vm = this;
        vm.usersId = $routeParams['uid'];

        vm.createProduct = createProduct;

        function init() {

        }
        init();

        function createProduct(product) {
            console.log("creating product", product);
            ProductService.createProduct(product);

        }


    }
})();




