(function(){
    app.controller("page1Controller",controller);

    function controller ($scope) {
        $scope.instructors= ["Vivek Sharma", "Lory Nuemann", "Andy Hou", "Richard Parriera"];
        $scope.isListStyle = true;
        $scope.switchClass = function(){
            $scope.isListStyle = !$scope.isListStyle;
        }
        $scope.showCurrentLayout = function(){
            if($scope.isListStyle){
                return "List View"
            }else{
                return "Grid View"

            }
        }
        // body...
    }
}());