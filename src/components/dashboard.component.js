angular.module('pulsr', [])
.component('dashboard', {
	templateUrl: "src/components/dashboard.html",
	controller: ['$http',
		function DashboardController($http) {
			console.log("Initializing dashboard");
			$http.get('http://alserv:8080').then(function(response){
				console.log(response);
			});
		}
	]
	
});