"use strict";

var myApp = angular.module('myApp',[]);

myApp.controller('myController', ['$scope', function($scope) {

  $scope.vocabWords = {
    'word1': {
      chinese:'我',
      pinyin:cjst.chineseToPinyin('我').join(' '),
      english:'me'
    },
    'word2': {
      chinese:'你',
      pinyin:cjst.chineseToPinyin('你').join(' '),
      english:'you'
    },
  };

}]);
