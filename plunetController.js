
plunetApp.factory('plunetFactory', function ($http) {
    return {
    getPlunetAsync: function(callback) {
    //  $http.get('http://localhost:50010/api/jobs?status=9').success(callback);
         $http.get('http://sandiego:8005/api/jobs?status=9').success(callback);
    }
  };
});

plunetApp.controller("PlunetController", function ($scope, plunetFactory) {

    plunetFactory.getPlunetAsync(function (results) {
        console.log('plunetController async returned value');
      //  console.log(results);
        $scope.plunetJobs = results;
    });

    $scope.understand = "I now understand how the scope works! Put anything into the box.."
    $scope.inputValue = "";


    $scope.selectedPerson = 0;
    $scope.selectedGenre = null;
    $scope.PlunetJobs = null;

    $scope.people = [
        {
            id: 0,
            name: 'Leon',
            music: [
                'Rock',
                'Metal',
                'Dubstep',
                'Electro'
            ],
            live: true
        },
        {
            id: 1,
            name: 'Chris',
            music: [
                'Indie',
                'Drumstep',
                'Dubstep',
                'Electro'
            ],
            live: true
        },
        {
            id: 2,
            name: 'Harry',
            music: [
                'Rock',
                'Metal',
                'Thrash Metal',
                'Heavy Metal'
            ],
            live: false
        },
        {
            id: 3,
            name: 'Allyce',
            music: [
                'Pop',
                'RnB',
                'Hip Hop'
            ],
            live: true
        }
    ];



});