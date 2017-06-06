/**
 * Created by arielfernandez on 3/6/17.
 */

'use strict';

angular.module('projectIdAppApp')
  .controller('EditUserDialogCtrl', function ($scope, $mdDialog,  $rootScope, dialogData, $http) {

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
          else
            $scope.userId = response.data[key];
        }
      });
    }

    $scope.cancel = function () {
      $mdDialog.cancel();
    }

    $scope.updateUser = function () {

      $scope.usersData.id = $scope.userId;
      $scope.cancel();

    }

    if(dialogData.id){
      console.log(dialogData.id);
      $scope.getUserData(dialogData.id);
    }

  });
