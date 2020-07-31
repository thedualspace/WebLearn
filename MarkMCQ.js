//The following is used to compare user submitted answers in MCQs to the solutions stored serverside.
//Solutions are stored in a { question : answer } object in the quizSolutions folder, 
//and a string comparison is performed between the user submitted answer and the solution.

const MarkMCQ = (quizName, selectedAnswers) => {
  let correctAnswers = 0;
  const solutionAnswers = require(`./quizSolutions/${quizName}`);
  const questionsTotal = Object.keys(solutionAnswers).length;

  //Find the answers which are correct by comparing with the solutionAnswers object, tally total
  for (let i in solutionAnswers) {
    if (selectedAnswers[i] === solutionAnswers[i]) {
      correctAnswers++;
    }
  };

  //Return the grade as a numerical percentage to 2 decimal places
  const grade = +((100*(correctAnswers/questionsTotal)).toFixed(2));
  return grade;
}

module.exports = MarkMCQ;