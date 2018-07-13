
		var app=angular.module("myApp",[]);

		app.controller("myCtrl",function($scope){
	            
	            $scope.student=[{name:"jia",subjects:[{name:"mongodb",marks:30},{name:"mvc",marks:40},{name:"asp",marks:50}],
	            total:function()
	            {
	            	var sum=0;
	            	for(var i=0;i<$scope.student.subjects.length;i++)
	            	{
	            		sum=sum+$scope.student.subjects[i].marks;
	            	}
	            	return sum;
	            },
	            avereage: function()
	            {
	            	return $scope.student.total()/$scope.student.subjects.length;
	            }
         }
		/*$scope.average=function()
			{ 
				var sum=0;
				for(var i=0;i<$scope.marks.length;i++)
				{
					sum=sum+$scope.marks[i];
				}

				var avg=sum/$scope.marks.length;
				return avg;
			} -->*/
		
		});	
		 
