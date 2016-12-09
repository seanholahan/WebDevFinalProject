(function () {
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService)

    function UserService($http) {
        var users = [
            {username: 'alice', password: 'eqdfs'}
        ];

        var api = {
            "login": login,
            "findUserByCredential": findUserByCredentials,
            "createUser": createUser,
            "findUserById": findUserById,
            "updateUser": updateUser,
            "deleteUser": deleteUser


        };
        return api;

<<<<<<< HEAD

        function createUser(user) {
            user._id = (new Date()).getTime();
            website.developerId = this.userId;
            console.log(website);
            WebsiteService.createWebsite(website);

            $location.url("/user/" + vm.userId + "/website");


=======
        function login(username, password) {
            var user = {
                username: username,
                password: password
            };
            return $http.post("/api/login", user);
>>>>>>> e041d3142d82f17da268f486ad88ff18db777f33
        }

        function deleteUser(uid) {
            var url = "/api/user/" + uid;
            return $http.delete(url);
        }

        function updateUser(user) {
            var url = "/api/user/" + user._id;
            $http.put(url, user);
        }

        function createUser(username, password) {
            var user = {
                username: username,
                password: password
            };
            var url = "/api/user/"+user._id;
            return $http.post(url, user);
        }

        function findUserById(userId) {
            var url = "/api/user/" + userId;
            return $http.get(url);
        }

        function findUserByCredentials(username, password) {
            var url = '/api/user?username=' + username + '&password=' + password;
            return $http.get(url);

        }

    }

}) (window.angular)

