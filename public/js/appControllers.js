// Main controllers module
angular.module('appControllers', [])

  .controller('mainController', mainController);

  function mainController() {
    var self = this;
    self.msg = 'Hello from Angular';
  }