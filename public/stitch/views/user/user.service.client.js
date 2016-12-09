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

        function login(username, password) {
            var user = {
                username: username,
                password: password
            };
            return $http.post("/api/login", user);
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

