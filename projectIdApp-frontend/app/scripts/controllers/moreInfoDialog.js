/**
 * Created by arielfernandez on 3/6/17.
 */
'use strict';

angular.module('projectIdAppApp')
  .controller('MoreInfoDialogCtrl', function ($scope, $mdDialog,  $rootScope, dialogData, $http) {

    $scope.usersData = {};

    $scope.labels = {
      'name': 'Nombre',
      'surname': 'Apellido',
      'address': 'Dirección',
      'country': 'País',
      'phone': 'Teléfono',
      'mobile':'Celular',
      'email': 'Email'
    };

    $scope.getUserData = function (userId) {
      $http.get('http://localhost:8080/getUser/' + userId).then(function (response) {
        for(var key in response.data){
          if(key != 'id')
            $scope.usersData[$scope.labels[key]] = response.data[key];
        }
      });
    }

    //$scope.usersData.img = 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_UY317_CR10,0,214,317_AL_.jpg';

    $scope.cancel = function () {
        $mdDialog.cancel();
    }

    if(dialogData.id){
      $scope.getUserData(dialogData.id);
    }

  });
