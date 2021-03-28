import { useMemo } from 'react'
import he from 'he'
import shuffle from 'lodash/shuffle'

const AnswerChoices = ({ answers, checkAnswer, setAnswered }) => {
  const { correctAnswer, incorrectAnswers } = answers
  const shuffledAnswers = useMemo(
    () => shuffle([correctAnswer, ...incorrectAnswers]),
    [answers.correctAnswer]
  )

  const handleClick = (option) => {
    setAnswered(true)
    checkAnswer(correctAnswer === option)
  }

  return (
    <div className="flex flex-column">
      {shuffledAnswers.map((option, idx) => (
        <button
          className="w-75 mv1 f6 link br1 ba bw1 ph3 pv2 mb2 dib black bg-washed-green hover-bg-light-green"
          key={option}
          onClick={() => handleClick(option)}
        >
          {he.decode(option)}
        </button>
      ))}
    </div>
  )
}

export default AnswerChoices
