// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

// var address = 'Ukrain, Kiev, bulvar Shevchenko 22'

var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address: 'Ukrain, Kiev, bulvar Shevchenko 22',
}

var footer = {
  social: {
    email: {
      text: 'ivanov@mail.com',
      href: 'mailto:ivanov@mail.com',
    },

    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },

    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

//                  ↑↑ сюди вводимо JSON дані
// =================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
			work on a new project I learn the domain and try to understand the idea of the project. Good team
			player, every colleague is a friend to me.`,
      },

      experiens: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
			  tournament position, goals etc, analyzing by simple mathematics models and preparing probability
			  for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },
    footer,
  })
})
// ================================================================
// =================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Hendlebars',
          point: 10,
          isTop: true,
        },
        {
          name: 'VS Code &NPM',
          point: 8,
          isTop: false,
        },
        {
          name: 'Git & Terminal',
          point: 9,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],

      hobbies: [
        {
          name: 'Football',
          isMain: true,
        },
        {
          name: 'English',
          isMain: true,
        },
        {
          name: 'Knitting',
          isMain: false,
        },
      ],
    },
    footer,
  })
})

router.get('/education', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Education',
    },
    header,

    main: {
      education: [
        {
          name: 'Національний авіаційний університет',
          isEnd: false,
        },
        {
          name: 'Київський університет культури',
          isEnd: true,
        },
        {
          name: 'Національний транспортний університет',
          isEnd: true,
        },
        {
          name: 'Київський університет фізичного виховання',
          isEnd: false,
        },
      ],

      certificates: [
        {
          name: 'Діплом про вище навчання в вузі',
          id: 87799,
        },
        {
          name: 'Сертифікат про рівень володіння української мови',
          id: 69069,
        },
        {
          name: 'Сертифікат про володіння англійської мови',
          id: 232222,
        },
      ],
    },
    footer,
  })
})

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',
    page: {
      title: 'Resume | Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'https://it-brains.com.ua',
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'https://rezume.com.ua',
              about: 'Open-minded for new technologies',
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML/CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              stacksAmount: 7,
              awards: [
                {
                  name: 'A new digital innovation award',
                },
                {
                  name: 'The Turing Award is the most prestigious computer science',
                },
              ],
              awarsdAmount: 9,
            },
          ],
        },
      ],
    },
    footer,
  })
})
// Підключаємо роутер до бек-енду
module.exports = router
