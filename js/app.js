angular.module('app', [])
    .controller('mainController', function ($scope) {
        
        $scope.users = [{ firstname: "lala", name: "yaya", email: "tata" }];
        console.log($scope)

        $scope.add = function () {
            $scope.users.push({firstname: $scope.addUser.firstname, name : $scope.addUser.name, email : $scope.addUser.email})
        };
        console.log($scope.users)

    });