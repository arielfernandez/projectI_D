/**
 * Created by arielfernandez on 3/6/17.
 */
'use strict';

angular.module('projectIdAppApp')
  .controller('AllUsersCtrl', function ($mdDialog, appDataFactory) {

    var vm = this;

    vm.usersData = appDataFactory.usersData;

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
        /*confirm*/
        console.log(vm.userId);
        console.log("usuario borrado");

      }, function() {
          console.log("no se ha podido borrar el usuario");
      });
    };

  });

