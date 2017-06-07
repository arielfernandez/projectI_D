/**
 * Created by arielfernandez on 6/6/17.
 */

'use strict';

angular.module('projectIdAppApp')
  .factory('genericMethodFactory', function($mdToast){
  var methods = {};

  methods.toast = function(msg){
    $mdToast.show({
      template: '<md-toast><span flex>' + msg + '</span></md-toast>',
      parent : document.querySelector('body'),
      hideDelay: 4000,
    });
  };

  return methods;
});
