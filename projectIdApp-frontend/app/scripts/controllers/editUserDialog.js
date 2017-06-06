/**
 * Created by arielfernandez on 3/6/17.
 */

'use strict';

angular.module('projectIdAppApp')
  .controller('EditUserDialogCtrl', function ($scope, $mdDialog,  $rootScope, dialogData) {

    $scope.usersData = {};

    $scope.usersData.data = {
      "Nombre": 'Leonardo',
      "Apellido": 'DiCaprio',
      "Direccion": 'Lincoln Road 1000',
      "Pais": 'USA',
      "Telefono": 1010101001,
      "Celular": 11010010101,
      "Email": 'leodicaprio@gmail.com'
    };

    $scope.cancel = function () {
      $mdDialog.cancel();
    }

    if(dialogData.id){
      console.log(dialogData.id);
    }

  });
