(function () {
    angular
        .module("WebAppMaker")
        .factory("ProductService", ProductService)

    function ProductService() {


        var api = {

            createProduct: createProduct


        };
        return api;


        function createProduct(product) {
            console.log("prodict", product)

        }
    }

}) (window.angular)

