import { useMemo, useState } from "react";

interface Question {
  text: string;
  valueKeys: `__${string}_${number}__`[];
  answerKeys: `__${string}_${number}__`[];
  solution: (...values: number[][]) => number[];
}

const questions: Question[] = [
  {
    text: "A motocross rider goes up a hill at __VAL_1__ m/s and then returns down the hill at __VAL_2__ m/s. What is the average speed for the trip?",
    valueKeys: ["__VAL_1__", "__VAL_2__"],
    answerKeys: ["__ANSWER_1__"],
    solution: (...values) => {
      const sol1 = (...v: number[]) => (v[0] + v[1]) / 2;
      return values.map((v, idx) => {
        if (idx === 0) return sol1(...v);
        return 0;
      });
    },
  },
  {
    text: "A professional baseball pitcher is trying to get his fastball across home plate as fast as possible, and the plate is __VAL_1__ m away. If the ball leaves the pitcher's hand at __VAL_2__ m/s and maintains this speed across the plate, how long does it take the ball to cross the plate?",
    valueKeys: ["__VAL_1__", "__VAL_2__"],
    answerKeys: ["__ANSWER_1__"],
    solution: (...values) => {
      const sol1 = (...v: number[]) => v[0] / v[1];
      return values.map((v, idx) => {
        if (idx === 0) return sol1(...v);
        return 0;
      });
    },
  },
];

const letters = "abcdefghijklmnopqrstuvwxyz";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [finished, setFinished] = useState(false);

  return (
    <div className="container mx-auto my-8 px-4">
      <h1 className="my_class">Prince</h1>

      {finished ? (
        <div>
          <p className="font-semibold">Finished!</p>
          <p className="mt-4">
            You got {correctAnswers} out of {questions.length} correct.
          </p>
        </div>
      ) : (
        <>
          <p className="font-semibold">Question {currentQuestion + 1}</p>

          <Question
            key={currentQuestion}
            question={questions[currentQuestion]}
            onAnswer={(isCorrect) => {
              if (isCorrect) setCorrectAnswers(correctAnswers + 1);

              if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
              } else {
                alert("You've finished the quiz!");
                setFinished(true);
              }
            }}
          />
        </>
      )}
    </div>
  );
};

const Question = ({
  question,
  onAnswer,
}: {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
}) => {
  const [answers, setAnswers] = useState(() =>
    Array.from({ length: question.answerKeys.length }, () => 0)
  );

  const randomized = useMemo(() => {
    const _values = Array.from({ length: question.valueKeys.length }, () =>
      Math.floor(Math.random() * 100)
    );
    let _text = question.text;

    _values.map((val, idx) => {
      _text = _text.replace(question.valueKeys[idx], val.toString());
    });

    return {
      values: _values,
      text: _text,
    };
  }, []);

  return (
    <div>
      <p>{randomized.text}</p>

      <div className="flex flex-col space-y-2 mt-4">
        {answers.map((value, idx) => (
          <div className="flex items-center">
            <p>{letters[idx]}: </p>
            <input
              className="ml-2 border-2 border-gray-500 rounded-md px-2 py-1 bg-transparent"
              type="number"
              value={value}
              onChange={(e) => {
                const newValues = [...answers];
                if (e?.target.value) {
                  newValues[idx] = Number(e.target.value);
                  setAnswers(newValues);
                }
              }}
            />
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          const finalAnswers = question
            .solution([...randomized.values])
            .map((e) => Number(e.toFixed(2)));

          const numOfCorrect = finalAnswers.map((ans, idx) => {
            if (ans === answers[idx]) {
              alert(`${letters[idx]}: Correct!`);
              return true;
            } else {
              alert(`${letters[idx]}: Incorrect! The correct answer is ${ans}`);
              return false;
            }
          });

          onAnswer(numOfCorrect.every((v) => v));
        }}
        className="mt-6 active:opacity-70 px-6 py-1 rounded bg-green-600 text-white"
      >
        Submit
      </button>
    </div>
  );
};

export default App;
