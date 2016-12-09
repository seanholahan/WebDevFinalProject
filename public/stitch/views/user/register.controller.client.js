/**
 * Created by willqueen on 12/8/16.
 */

(function(){
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, UserService) {
        var vm = this;
        vm.register = register;

        function register(username, password) {
            UserService
                .createUser(username, password);
                console.log("bitvhjgkj", username, password);
                //.success(function (user) {
                //    $location.url("/user/" + user._id);
                //})
                //.error(function (error) {
                //});
        }
    }
}());