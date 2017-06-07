/**
 * Created by arielfernandez on 3/6/17.
 */

'use strict';

angular.module('projectIdAppApp')
  .controller('EditUserDialogCtrl', function ($scope, $mdDialog,  $rootScope, dialogData, $http, genericMethodFactory) {

    $scope.userData = {};

    $scope.labels = {
      'name': 'Nombre',
      'surname': 'Apellido',
      'address': 'Dirección',
      'country': 'País',
      'phone': 'Teléfono',
      'mobile':'Celular',
      'email': 'Email',
      'dni': 'DNI'
    };

    $scope.getUserData = function (userId) {
      $http.get('http://localhost:8080/getUser/' + userId).then(function (response) {
        for(var key in response.data){
          if(key != 'id')
            $scope.userData[key] = response.data[key];
          else
            $scope.userId = response.data[key];
        }
      });
    }

    $scope.cancel = function () {
      $mdDialog.cancel();
    }

    $scope.updateUser = function () {

      $scope.userData.id = $scope.userId;
      $scope.cancel();

      $http({
        method: 'POST',
        url: 'http://localhost:8080/editUser',
        dataType: 'json',
        data: $scope.userData,
        headers : {
          'Content-Type' : 'application/json'
        }
      }).then(function successCallback(response) {

        genericMethodFactory.toast("El usuario " + response.data.name + " " + response.data.surname + " se ha editado correctamente");
        $scope.reload();

      }, function errorCallback(response) {

        genericMethodFactory.toast("El usuario no se ha podido editar");

      });

    }

    $scope.reload = function() {
      $route.reload();
    }

    if(dialogData.id){
      $scope.getUserData(dialogData.id);
    }

  });
