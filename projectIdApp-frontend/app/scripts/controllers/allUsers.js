/**
 * Created by arielfernandez on 3/6/17.
 */
'use strict';

angular.module('projectIdAppApp')
  .controller('AllUsersCtrl', function ($mdDialog, appDataFactory, $http, genericMethodFactory) {

    var vm = this;

    //vm.usersData = appDataFactory.usersData;

    vm.getAllUser = function(){

      $http.get('http://localhost:8080/getUsers').then(function(response){
          vm.usersData = response.data;
      });

    }

    vm.moreInfo = function(ev, id){
      $mdDialog.show({
        controller : 'MoreInfoDialogCtrl',
        templateUrl : 'views/moreInfoDialog.html',
        locals: { dialogData: {
            id: id
          }
        },
        parent : angular.element(document.body),
        targetEvent : ev,
        clickOutsideToClose : true
      });
    };

    vm.editUser = function (ev, id) {
      $mdDialog.show({
        controller : 'EditUserDialogCtrl',
        templateUrl : 'views/editUserDialog.html',
        locals: { dialogData: {
          id: id
        }
        },
        parent : angular.element(document.body),
        targetEvent : ev,
        clickOutsideToClose : true
      });
    };

    vm.deleteUser = function(ev, id){
      vm.userId = id;
      var confirm = $mdDialog.confirm()
        .title('Eliminar usuario')
        .textContent('¿Desea eliminar este usuario?')
        .ariaLabel('delete user')
        .ok('Eliminar')
        .cancel('Cancelar');
      $mdDialog.show(confirm).then(function() {

        $http({
          method: 'DELETE',
          url: 'http://localhost:8080/deleteUser/' + vm.userId,
          dataType: 'json',
          headers : {
            'Content-Type' : 'application/json'
          }
        }).then(function successCallback(response) {
          genericMethodFactory.toast('El usuario : ' +response.data.name + ' ' + response.data.surname +' ha sido borrado')
          vm.getAllUser();

        }, function errorCallback(response) {
          genericMethodFactory.toast('El usuario : ' +response.data.name + ' ' + response.data.surname +' no ha sido borrado')
        });

      });
    };

    vm.getAllUser();

  });

