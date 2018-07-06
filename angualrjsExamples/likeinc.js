

<reference path="js/angular.min.js" >
var app=angular.module("myModule",[])
.controller("myController",function($scope)
{
	var technologies=[{name:"asp",likes:0,dilikes:0},{name:"java",likes:0,dilikes:0},{name:"c#",likes:0,dilikes:0}]

;
$scope.technologies=technologies;
$scope.incLikes=function(technolo)
{
	return $scope.technologies.likes++;
}
$scope.incdisLikes=function(technolo)
{
	return $scope.technologies.dilikes++;
}
});