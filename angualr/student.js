var app=angular.module("studentsApp",[]);
		app.controller("studentsCtrl",function($scope){
			var average1;
			var average2;
			$scope.students=[{
				name:'jia',
				subjects:[{name:'corejava',marks:70},
				{name:'Mean',marks:50},
				{name:'React',marks:80}],
				total:function(){
					sum=0;
					for (i =0; i <$scope.students[0].subjects.length; i++) {
						sum=sum+$scope.students[0].subjects[i].marks;
					}
					return sum;
				},
				average:function(){
					average1 = $scope.students[0].total()/$scope.students[0].subjects.length;
 					return average1;
				}},

			   {name:'Jeena',
				subjects:[{name:'corejava',marks:65},
				{name:'Mean',marks:70},
				{name:'React',marks:75}],
				total:function(){
					sum=0;
					for (i =0; i <$scope.students[1].subjects.length; i++) {
						sum=sum+$scope.students[1].subjects[i].marks;
					}
					return sum;
				},
				average:function(){
					average2 = $scope.students[1].total()/$scope.students[1].subjects.length;
 					return average2;
				}}];

				$scope.highestAverage = function(){
					if (average1 >= average2) {
						return $scope.students[0].name;
					}
					else {
						return $scope.students[1].name;
					}

				}
 	});

