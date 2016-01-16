var app = angular.module('myApp', ['ngAudio'])

app.controller('audioTest', function ($scope, ngAudio) {
  $scope.statussound = 'PLAY'
  $scope.page = true
  $scope.sound = ['sound/sound1.jpg', 'sound/sound2.jpg', 'sound/sound3.jpg', 'sound/sound4.jpg', 'sound/sound5.jpg', 'sound/sound6.jpg', 'sound/sound7.jpg', 'sound/sound8.jpg', 'sound/sound9.jpg', 'sound/sound10.jpg', 'sound/sound11.jpg', 'sound/sound12.jpg']
  $scope.audio = ngAudio.load('sound/test.mp3')
  $scope.img = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg', 'img/img5.jpg', 'img/img6.jpg', 'img/img7.jpg', 'img/img8.jpg', 'img/img9.jpg', 'img/img10.jpg', 'img/img11.jpg', 'img/img12.jpg']

  $scope.playSound = function () {
    $scope.audio.play()
    console.log('play')
    $scope.statussound = 'PAUSE'
    $scope.page = false
  }

  $scope.pauseSound = function () {
    $scope.audio.pause()
    console.log('pause')
    $scope.statussound = 'RESUME'
  }
  $scope.resumeSound = function () {
    $scope.audio.play()
    console.log('resume')
    $scope.statussound = 'PAUSE'
  }

  $scope.stopSound = function () {
    $scope.audio.stop()
    console.log('stop')
    $scope.statussound = 'PLAY'
    $scope.page = true

  }

  $scope.gameStart = function (status) {
    if (status == 'PLAY') {
      $scope.playSound()
    }

    if (status == 'PAUSE') {
      $scope.pauseSound()
    }

    if (status == 'RESUME') {
      $scope.resumeSound()
    }

  }

  var app = this
  app.test = 'test'
  app.checkBorder = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
  app.click = function (num) {
    if (app.checkBorder[num - 1] == false) {
      console.log(app.checkBorder[num - 1])
      $('.border' + num).addClass('active')
      app.checkBorder[num - 1] = true
    }
    else if (app.checkBorder[num - 1] == true) {
      $('.border' + num).removeClass('active')
      console.log(app.checkBorder[num - 1])
      app.checkBorder[num - 1] = false
    }

  }

})
