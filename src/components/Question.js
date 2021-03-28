import he from 'he'

import AnswerChoices from './AnswerChoices'
import { useEffect, useState } from 'react'

const Question = ({ question, children }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [correct, markCorrect] = useState(false)

  useEffect(() => {})

  console.log('Question component: ', question)
  return (
    <div>
      <p>{he.decode(question.question)}</p>
      <div>
        <ul>{children}</ul>
      </div>
    </div>
  )
}

export default Question
