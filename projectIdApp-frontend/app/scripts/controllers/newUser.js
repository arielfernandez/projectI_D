/**
 * Created by arifernandez on 02/06/2017.
 */
'use strict';

angular.module('projectIdAppApp')
  .controller('NewUserCtrl', function ($http, $scope) {

    var vm = this;
    vm.IMAGE_MAX_SIZE = 2;
    vm.imgSize = false;
    vm.saveUserBtn = false;

    vm.user = {};

   /*vm.image = "images/undefined.png";

    vm.selectFile = function () {
      document.getElementById("user-file-upload").click();
    }

    vm.prepareFile = function() {
      var urlReader = new FileReader();
      var input = document.getElementById("user-file-upload");
      var file = input.files.length ? input.files[0] : null;
      var preview = document.getElementById("abm-dialog-photo");
      if (!file) {
        return false;
      }

      var image_max_size = vm.IMAGE_MAX_SIZE * 1024 * 1024;
      if(file.size > image_max_size){
        vm.imgSize = true;
        vm.saveUserBtn = true;
      }else{
        vm.imgSize = false;
        vm.saveUserBtn = false;
      }

      urlReader.addEventListener("load", function() {
        $scope.$apply(function() {
          vm.image = urlReader.result;
        });
        vm.image = this.result;
      }, false);

      urlReader.readAsDataURL(file);
    };*/


    //guardando usuario
    vm.createUser = function () {

      $http({
        method: 'POST',
        url: 'http://localhost:8080/saveUser',
        dataType: 'json',
        data: vm.user,
        headers : {
          'Content-Type' : 'application/json'
        }
      }).then(function successCallback(response) {
        console.log(response);
        }, function errorCallback(response) {
          console.log(response);
      });

    };


  });
