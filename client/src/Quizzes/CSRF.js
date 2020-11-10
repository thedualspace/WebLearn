const CSRF = {
  name: "CSRF",
  videoTitle: "CSRF Tutorial",
  videoSrc: "https://www.youtube.com/embed/vRBihr41JTo",
  questions: [
    {
      prompt: 'What does CSRF stand for?',
      answer: [
        'Structured Query Language Injection',
        'Cross Site Scripting',
        'Non-structured Query Language Injection',
        'Cross Site Request Forgery'
      ]
    },

    {
      prompt: 'Which HTTP request type does a CSRF attack typically target?',
      answer: [
        'GET',
        'POST',
        'PATCH',
        'PUT'
      ]
    },

    {
      prompt: 'What is a one-time token (nonce) used for?',
      answer: [
        'Encrypting files and folders securely',
        'Sending URL links over HTTPS',
        'Validating form submission requests',
        'All of the above'
      ]
    }
  ]
};

export default CSRF;