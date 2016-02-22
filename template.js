"use strict";

var myApp = angular.module('myApp',[]);

myApp.controller('myController', ['$scope', function($scope) {

  $scope.chineseTitle = 'Chinese Title';
  $scope.pinyinTitle = 'Pinyin Title';
  $scope.englishTitle = 'English Title';

  var vocabList = [
'采访 interview (someone)',
'测量 measure',
'大使馆 embassy',
'官方 official',
'中产阶级 middle class',
'沙漠 desert',
'人造 man-made',
'重工业 heavy industry',
'人才流失 brain drain',
'观念 concept',
'插队 skip the line / cut the line',
'浮躁 impulsive, short-sighted']

  $scope.vocabWords = {};

  for (var i=0; i<vocabList.length;i++) {
    var word = vocabList[i];
    var chinese = word.substr(0, word.indexOf(" "));
    var pinyin = cjst.chineseToPinyin(chinese).join(' ');
    var english = word.slice(word.indexOf(" "));
    $scope.vocabWords['word' +  String(i)] = {
      chinese:chinese,
      pinyin:pinyin,
      english:english,
    }
  }

}]);
