const wordsLib = [
  'бизон',
  'жираф',
  'белка',
  'зебра',
  'кабан',
  'ласка',
  'олень',
  'песец',
  'выдра',
  'баран',
  'коала',
  'мидия',
  'сурок',
  'птица',
  'кобра',
  'мошка',
  'кошка',
  'пчела',
  'комар',
  'шмель',
  'выдра',
  'петух',
  'дятел',
  'крыса',
  'ворон',
  'гиена',
  'индюк',
  'манул',
];

const controller = {
  getWord(wordsLib) {
    const random = Math.floor(Math.random() * wordsLib.length);
    return wordsLib[random]
  },

  getlineArr(model) {
    const line = document.querySelectorAll('.line')
    for (let i = 0; i < line.length; i++) {
      let newLine = [...document.querySelectorAll(`.str-${i + 1}`)];
      console.log(newLine)
      model.lineArr.push(newLine);
    }
  },

  play(model) {
    this.getlineArr(model)
    for (let j = 0; j < model.lineArr.length; j++) {
      this.checkLine(model.lineArr[j]);
    }
  },

  checkLine(activeStr) {
    activeStr.forEach((elem, i) => {
      elem.addEventListener('input', () => {
        model.guess = model.guess + elem.value;
        if (model.guess.length <= 4) {
          activeStr[i + 1].focus();
        } else {
          controller.checkWord(model, activeStr);
          model.j = model.j + 1;

          if (model.win === true) {
            model.guess = '';
            model.j = 0;
            // controller.play(model);
            model.win = false;

          } else {

            model.guess = '';
          }
          activeStr = model.lineArr[model.j];

          activeStr[0].focus();
        }
      })
    })
  },


  checkWord(model, activeStr) {
    for (let i = 0; i < model.guess.length; i++) {
      model.point.indexOf(model.guess[i])
      if (model.point.indexOf(model.guess[i]) >= 0) {
        if (model.point[i] === model.guess[i]) {
          activeStr[i].style.backgroundColor = 'green'
        }
        else {
          activeStr[i].style.backgroundColor = 'yellow'
        }
      }
      if (model.point.indexOf(model.guess[i]) < 0) {
        console.log('miss');
      }
      if (model.guess === model.point) {
        const inputs = document.querySelectorAll('input');
        const input1 = document.querySelectorAll('input')[0];
        console.log(input1)
        input1.focus();
        console.log('win')
        inputs.forEach((item, i) => {
          item.value = '';
          item.style.backgroundColor = 'rgba(0, 0 ,0, 0.1)';
        });
        model.win = true;
      }
    }
  },
};

const model = {
  guess: '',
  point: controller.getWord(wordsLib),
  j: 0,
  lineArr: [],
  win: false,
};

controller.play(model);
console.log(model.point)
