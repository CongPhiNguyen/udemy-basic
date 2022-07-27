// const answer = prompt(
//   `What is your favourite programming language?
//   0: JavaScript
//   1: Python
//   2: Rust
//   3: C++`
// );

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const promptAnswer = prompt(
      `${this.questions}\n${this.options.join("\n")}`
    );
    if (promptAnswer >= 0 && promptAnswer < 4) {
      this.answers[promptAnswer]++;
    }
  },
  displayResults() {
    alert(`Poll results are ${this.answers.join(", ")}.`);
  },
};

document.querySelector("#answer-poll").onclick = () => {
  poll.registerNewAnswer();
};

document.querySelector("#display-res").onclick = () => {
  poll.displayResults();
};
