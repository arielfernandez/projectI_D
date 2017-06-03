/**
 * Created by arifernandez on 02/06/2017.
 */
'use strict';

angular.module('projectIdAppApp')
  .controller('MainCtrl', function () {
    console.log("Main controller started");

    var vm = this;

    vm.aux = 'hola';

    vm.imagePath = 'images/undefined.png';

  });
