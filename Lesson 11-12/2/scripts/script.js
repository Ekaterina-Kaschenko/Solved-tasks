;(function() {
  var userObj = {
    name: 'Лукьянченко Лилия Сергеевна',
    photo: './images/myphoto.jpg',
    job: 'Студентка школы GoIT GoFronted Online 4',
    reasons: [
      'Хочу открыть для себя новые горизонты',
      'Прибыльность в дальнейшем',
      'Возможность работать фриланс - это круто'
    ],
    phone: '+380983942530',
    vk: 'https://vk.com/id8904746',
    feedback: 'Софтскилз - это мое вдохновение, так что если что, велкам, помогу'
  }

  var user = document.getElementsByClassName('content')[0];
  user.innerHTML = tmpl("userTemplate", userObj);
})();

