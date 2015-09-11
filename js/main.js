// add scripts
var app = angular.module("myApp", []);

app.controller("Game", function($scope){

  var serveCount = 0;
  $scope.servingOne = "";
  $scope.servingTwo = "serving";
  $scope.scoreOne = 0;
  var counterOne = 0;
  $scope.countOne = function () {
    // console.log('test working');
    counterOne ++;
    serveCount ++;
    $scope.scoreOne = counterOne;
    console.log(serveCount);
    if (serveCount < 2){
      $scope.servingOne = "";
      $scope.servingTwo = "serving"
    } else if(serveCount > 2 && serveCount < 4) {
      $scope.servingOne = "serving";
      $scope.servingTwo = "";
    } else if (serveCount >= 4 && serveCount < 6){
      $scope.servingOne = "";
      $scope.servingTwo = "serving";
    } else if (serveCount >= 6 && serveCount < 8){
      $scope.servingOne = "serving";
      $scope.servingTwo = "";
    } else if (serveCount >= 8 && serveCount < 10){
      $scope.servingOne = "";
      $scope.servingTwo = "serving";
    } else if (serveCount >= 10 && serveCount < 12){
      $scope.servingOne = "serving";
      $scope.servingTwo = "";
    } else if (serveCount >= 12 && serveCount < 14){
      $scope.servingOne = "";
      $scope.servingTwo = "serving";
    } else if (serveCount >= 14 && serveCount < 16){
      $scope.servingOne = "serving";
      $scope.servingTwo = "";
    } else if (serveCount >= 16 && serveCount < 18){
      $scope.servingOne = "";
      $scope.servingTwo = "serving";
    } else {
      $scope.servingOne = "serving";
      $scope.servingTwo = "";
    }
  }
  // $scope.showServe= function () {

  // }




  $scope.scoreTwo = 0;
  var counterTwo = 0;
  $scope.countTwo = function () {
    // console.log('test working');
    counterTwo ++;
    serveCount ++;
    $scope.scoreTwo = counterTwo;
    console.log(serveCount);
     if (serveCount < 2){
      $scope.servingOne = "";
      $scope.servingTwo = "serving"
    } else if(serveCount > 2 && serveCount < 4) {
      $scope.servingOne = "serving";
      $scope.servingTwo = "";
    } else if (serveCount >= 4 && serveCount < 6){
      $scope.servingOne = "";
      $scope.servingTwo = "serving";
    } else if (serveCount >= 6 && serveCount < 8){
      $scope.servingOne = "serving";
      $scope.servingTwo = "";
    } else if (serveCount >= 8 && serveCount < 10){
      $scope.servingOne = "";
      $scope.servingTwo = "serving";
    } else if (serveCount >= 10 && serveCount < 12){
      $scope.servingOne = "serving";
      $scope.servingTwo = "";
    } else if (serveCount >= 12 && serveCount < 14){
      $scope.servingOne = "";
      $scope.servingTwo = "serving";
    } else if (serveCount >= 14 && serveCount < 16){
      $scope.servingOne = "serving";
      $scope.servingTwo = "";
    } else if (serveCount >= 16 && serveCount < 18){
      $scope.servingOne = "";
      $scope.servingTwo = "serving";
    } else {
      $scope.servingOne = "serving";
      $scope.servingTwo = "";
    }
  }

  // console.log($scope.total);

})

// app.controller("PlayerTwo", function($scope){
//   $scope.scoreTwo = 0;
//   var counterTwo = 0;
//   $scope.countTwo = function () {
//     // console.log('test working');
//     counterTwo ++;
//     $scope.scoreTwo = counterTwo;
//   }
//   $scope.serving = "serving";
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


