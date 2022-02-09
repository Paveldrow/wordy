const str1 = document.querySelectorAll('.str-1')
const str2 = document.querySelectorAll('.str-2')
const str3 = document.querySelectorAll('.str-3')
const str4 = document.querySelectorAll('.str-4')
const str5 = document.querySelectorAll('.str-5')

const str = []

str.push(str1);
str.push(str2);
str.push(str3);
str.push(str4);
str.push(str5);
// const col2 = document.querySelector('.col-5')

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
];

console.log(str)

const view = {
}

const controller = {
  getWord(wordsLib) {
    const random = Math.floor(Math.random() * wordsLib.length);
    return wordsLib[random]
  },

  play(model) {

    let j = 0;
   let activeStr = str[j]

  
    // str = document.querySelectorAll(`.str-${j}`)



    activeStr.forEach((elem, i) => {

      elem.addEventListener('input', () => {
        model.guess = model.guess + elem.value;

        if (model.guess.length <= 4) {

          activeStr[i + 1].focus()

        }
        else {
          this.checkWord(model);
          j++;
          // str = document.querySelectorAll(`.str-${model.j + 1}`)
          activeStr = str[j]
          // str = strLib[j];
          // j++;
          activeStr[0].focus()


          // console.log(model.guess)
          console.log(model.guess)
          model.guess = '';
          console.log(model.guess);
        }
      })
    })
  },

  checkWord(model) {
    for (let i = 0; i < model.guess.length; i++) {
      model.point.indexOf(model.guess[i])
      if (model.point.indexOf(model.guess[i]) >= 0) {
        if (model.point[i] === model.guess[i]) {
          str1[i].style.backgroundColor = 'green'
        }
        else {
          str1[i].style.backgroundColor = 'yellow'
        }
      }
      if (model.point.indexOf(model.guess[i]) < 0) {
        console.log('miss');
      }
      if (model.guess === model.point) {
        console.log('win')
      }
    }
  },

}

const model = {
  guess: '',
  point: controller.getWord(wordsLib),
  j: 1,
}

// checkWord(model, point) {
//   for (let i = 0; i < guess.length; i++) {
//     point.indexOf(model.guess[i])
//     if (point.indexOf(model.guess[i]) >= 0) {
//       if (point[i] === model.guess[i]) {
//         str[i].style.backgroundColor = 'green'
//       }
//       else {
//         str[i].style.backgroundColor = 'yellow'
//       }
//     }
//     if (point.indexOf(model.guess[i]) < 0) {
//       console.log('miss');
//     }
//     if (model.guess === point) {
//       console.log('win')
//     }
//   }
// },



controller.play(model);
console.log(model.point)








// function start() {

//   function getWord(wordsLib) {
//     const random = Math.floor(Math.random() * wordsArr.length);
//     return wordsArr[random];
//   }


//   const fo = getWord();
//   console.log(fo)
//   const line = document.querySelectorAll('.line')
//   let str

//   const strLib = []
//   strLib.push(str1)
//   strLib.push(str2)
//   strLib.push(str3)
//   strLib.push(str4)
//   strLib.push(str5)

//   str = str1;

//   function checkWord(word, fo) {
//     let item = '';

//     for (let i = 0; i < word.length; i++) {

//       fo.indexOf(word[i])

//       if (fo.indexOf(word[i]) >= 0) {
//         if (fo[i] === word[i]) {
//           str[i].style.backgroundColor = 'green'
//         }
//         else {
//           str[i].style.backgroundColor = 'yellow'
//         }
//       }
//       if (fo.indexOf(word[i]) < 0) {
//         console.log('miss');
//       }
//       item = item + word[i];
//       if (item === fo) {

//       }


//     }

//   }

//   let arr = ''
//   let strCount = 0;

//   function play() {


//     str.forEach((elem, i) => {
//       elem.addEventListener('input', () => {
//         if (arr.length <= 4) {
//           arr = arr + elem.value;
//           if (i < 4) {
//             str[i + 1].focus()
//           }
//           else {


//             checkWord(arr, fo);
//             strCount++;
//             str = strLib[strCount];
//             str[0].focus();
//             console.log(arr)
//             arr = '';

//             play();
//           }

//         }


//       })
//     })
//   }


//   play()
// }
// start();

