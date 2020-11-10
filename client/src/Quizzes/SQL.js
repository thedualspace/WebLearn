const SQL = {
  name: "SQL",
  videoTitle: "SQL Tutorial",
  videoSrc: "https://www.youtube.com/embed/1GJP_drZFa0",
  questions: [
    {
      prompt: 'Which option of sqlmap is required to test an application which expects the input with POST method?',
      answer: [
        '--get',
        '--post',
        '--data',
        '--send'
      ]
    },

    {
      prompt: 'Which of the following is NOT a valid comment sign in case of MySQL?',
      answer: [
        '#',
        '--',
        '//',
        '/*'
      ]
    },

    {
      prompt: 'Which of the following can be used to bypass a basic login screen in case of MySQL?',
      answer: [
        '\'OR 1=1//',
        '\'OR 1=1',
        '\'OR \'1\'=1',
        '\'OR 1=1-- -'
      ]
    }
  ]
};

export default SQL;