import he from 'he'
import AnswerChoices from './AnswerChoices'
import { useState, useEffect } from 'react'

const Question = ({ question, children }) => {
  const [answered, setAnswered] = useState(false)
  const [correct, setCorrect] = useState(false)

  useEffect(() => {
    if (correct) {
      console.log(question.question, 'correct!')
    }
  }, [correct, question.question])

  return (
    <div>
      <p>{he.decode(question.question)}</p>
      <div>
        <ul>
          <AnswerChoices
            answers={{
              correctAnswer: question.correct_answer,
              incorrectAnswers: question.incorrect_answers,
            }}
            checkAnswer={setCorrect}
            setAnswered={setAnswered}
          />
        </ul>
      </div>
    </div>
  )
}

export default Question
