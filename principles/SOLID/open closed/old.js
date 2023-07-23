function printQuiz(questions) {
  questions.forEach((question) => {
    console.log(question.description);
    switch (question.type) {
      case "boolean":
        console.log("1. True");
        console.log("2. False");
        break;
      case "multipleChoice":
        question.options.forEach((option, index) => {
          console.log(`${index + 1}. ${option}`);
        });
        break;
      case "text":
        console.log("Answer: ______________");
        break;
      // case "range":
      //   console.log("Minimum: ______________");
      //   console.log("Maximum: ______________");
      //   break;
    }
    console.log("");
  });
}

//If you see switch statements(or big if statements) in your code, it is a sign that you are violating the open closed principle.
//Because if you want to add a new type of question, you have to modify the printQuiz function.

const questions = [
  {
    type: "boolean",
    description: "This video is useful.",
  },
  {
    type: "multipleChoice",
    description: "What is your favorite language?",
    options: ["CSS", "HTML", "JS", "Python"],
  },
  {
    type: "text",
    description: "Describe your favorite JS feature.",
  },
];
printQuiz(questions);

//if we add a new type of question, we have to modify the printQuiz function.
questions.push({
  type: "range",
  description: "What is the speed limit in your city?",
});

//we need to add a new case to the switch statement. (the one that is commented out)
