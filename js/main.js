// add scripts
var app = angular.module("myApp", []);

app.controller("PlayerOne", function($scope){
  $scope.scoreOne = 0;
  var counterOne = 0;
  $scope.countOne = function () {
    // console.log('test working');
    counterOne ++;
    $scope.scoreOne = counterOne;
  }

  $scope.scoreTwo = 0;
  var counterTwo = 0;
  $scope.countTwo = function () {
    // console.log('test working');
    counterTwo ++;
    $scope.scoreTwo = counterTwo;
  }

    $scope.serving = "serving";
})

// app.controller("PlayerTwo", function($scope){
//   $scope.scoreTwo = 0;
//   var counter = 0;
//   $scope.counter = function () {
//     // console.log('test working');
//     counter ++;
//     $scope.scoreTwo = counter;
//   }
// })



// var excitement = 0;
//   $scope.excite = function () {
//     excitement ++;
//     if(excitement>5){
//       //do something
//       // console.log("too much excitement");
//       $scope.greeting = "Class is excited!";
//     }
//   }


