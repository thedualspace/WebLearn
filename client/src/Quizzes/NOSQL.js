const NOSQL = {
  name: "NOSQL",
  videoTitle: "NOSQL Tutorial",
  videoSrc: "https://www.youtube.com/embed/h0h37-Dwd_A",
  questions: [
    {
      prompt: 'What is NoSQL injection?',
      answer: [
        'Injection of images into a NoSQL database',
        'Injection of commands into a SQL database',
        'Injection of scripts into a SQL webpage',
        'Injection of commands into a NoSQL database'
      ]
    },

    {
      prompt: 'Lack of which practice(s) may lead to NoSQL injection?',
      answer: [
        'Sanitising inputs',
        'Input validation',
        'Escaping',
        'All of the above'
      ]
    },

    {
      prompt: 'How could an attacker bypass the authentication process?',
      answer: [
        'Injection of an entry creation command',
        'Injection of a NoSQL comparison operator',
        'Injection of an entry deletion command',
        'Injection of html commands'
      ]
    }
  ]
};

export default NOSQL;