class Question {
  constructor(description) {
    this.description = description;
  }
  printQuestionChoices() {
    throw new Error("printQuestionChoices method not implemented");
  }
}

class BooleanQuestion extends Question {
  constructor(description) {
    super(description);
  }
  printQuestionChoices() {
    console.log("1. True");
    console.log("2. False");
  }
}

class MultipleChoiceQuestion extends Question {
  constructor(description, options) {
    super(description);
    this.options = options;
  }
  printQuestionChoices() {
    this.options.forEach((option, index) => {
      console.log(`${index + 1}. ${option}`);
    });
  }
}

class TextQuestion extends Question {
  constructor(description) {
    super(description);
  }
  printQuestionChoices() {
    console.log("Answer: ______________");
  }
}

function printQuiz(questions) {
  questions.forEach((question) => {
    console.log(question.description);
    question.printQuestionChoices();
    console.log("");
  });
}

const questions = [
  new BooleanQuestion("This video is useful."),
  new MultipleChoiceQuestion("What is your favorite language?", [
    "CSS",
    "HTML",
    "JS",
    "Python",
  ]),
  new TextQuestion("Describe your favorite JS feature."),
];

printQuiz(questions);

//if we add a new type of question, we don't have to modify the printQuiz function.
class RangeQuestion extends Question {
  constructor(description) {
    super(description);
  }
  printQuestionChoices() {
    console.log("Minimum: ______________");
    console.log("Maximum: ______________");
  }
}
questions.push(new RangeQuestion("What is the speed limit in your city?"));
