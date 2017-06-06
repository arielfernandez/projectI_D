/**
 * Created by arielfernandez on 2/6/17.
 */
'use strict';

angular.module('projectIdAppApp')
  .controller('HomeCtrl', function ($location) {

    var vm = this;

    vm.cardData = [
      {"title": 'Ver usuarios registrados',
        "image": '../../images/getUsers.png',
        "view": '/allUsers'
      },
      {"title": 'Registrar nuevo usuario',
        "image": '../../images/addUser.png',
        "view": '/newUser'
      }
    ];

    vm.changeView = function(view){
      $location.path(view);
    }

  });
