import he from 'he'
import shuffle from 'lodash/shuffle'
import AnswerChoices from './AnswerChoices'
import { useState } from 'react'

const Question = ({ question }) => {
  const [answerChoice, setAnswerChoice] = useState(null)

  return (
    <div>
      <p>{he.decode(question.question)}</p>
      <div>
        <ul>
          <AnswerChoices
            answers={shuffle([
              question.correct_answer,
              ...question.incorrect_answers,
            ])}
            setAnswerChoice={setAnswerChoice}
          />
        </ul>
      </div>
    </div>
  )
}

export default Question
