/**
 * Created by arielfernandez on 3/6/17.
 */
'use strict';

angular.module('projectIdAppApp')
  .controller('MoreInfoDialogCtrl', function ($scope, $mdDialog,  $rootScope, dialogData) {

    $scope.usersData = {};

      $scope.usersData.data = {
      "Nombre": 'Leonardo',
      "Apellido": 'DiCaprio',
      "Direccion": 'Lincoln Road 1000',
      "Pais": 'USA',
      "Telefono": "1010101001",
      "Celular": "11010010101",
      "Email": 'leodicaprio@gmail.com'
    };

    $scope.usersData.img = 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_UY317_CR10,0,214,317_AL_.jpg';


    $scope.cancel = function () {
        $mdDialog.cancel();
    }

    if(dialogData.id){
      console.log(dialogData.id);
    }

  });
