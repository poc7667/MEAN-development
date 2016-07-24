(
    function() {
        app.controller("page2Controller", controller);

        function controller($scope, $rootScope, $timeout) {
            $scope.user = {
                isSubscrible: false
            }
            $scope.isSent = false;
            $scope.isOk = false;

            $scope.fromWhichChannelOptions = [{
                label: "TV",
                value: 0
            }, {
                label: "News",
                value: 1
            }, {
                label: "Other Websites",
                value: 2
            }, ]
            $scope.isValid = {
                name: false,
                email: false,
            }

            $scope.register = function() {
                $scope.isSent = true;
                console.log($scope)

                if ($scope.userForm.$valid) {
                    $scope.isOk = true;
                }                
            }

            function isRequiredStringLengthValid(value, min, max) {
                try{
                    console.log($scope.user)
                    if (value.length >= min && value.length <= max) {
                        return true;
                    } else {
                        return false;
                    }
                }catch(e){
                    debugger
                }

            }
        }

    }());