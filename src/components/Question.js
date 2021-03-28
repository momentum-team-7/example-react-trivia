import he from 'he'
import AnswerChoices from './AnswerChoices'
import { useState } from 'react'
import classnames from 'classnames'

const Question = ({ question }) => {
  const [answered, setAnswered] = useState(false)
  const [correct, setCorrect] = useState(false)

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
      <div>
        {answered && (
          <div
            className={classnames(
              {
                'bg-green': correct,
                'bg-black': !correct,
              },
              'ba white pa2 mv2 w-80 b tc ttu tracked'
            )}
          >
            {correct ? 'Right!' : 'Nope!'}
          </div>
        )}
      </div>
    </div>
  )
}

export default Question
