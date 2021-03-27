import { useEffect, useState } from 'react'
import { getQuestionSet } from '../ajaxRequests'
import Question from './Question'
import Score from './Score'
import he from 'he'

const Questions = ({ category, handleGoBack }) => {
  const [questions, setQuestions] = useState([])
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const idx = currentQuestionIdx
    if (idx > 0 && idx === questions.length - 1) {
      setDone(true)
    }
  }, [currentQuestionIdx, questions])

  useEffect(() => {
    // const data = getQuestionSet()
    // setQuestions(data)
    getQuestionSet(category).then((data) => {
      setQuestions(data)
    })
  }, [category])

  if (done) {
    return <Score correctAnswers="10" />
  }

  return (
    <div className="questions">
      {questions.length > 0 && (
        <>
          <button className="goBack" onClick={handleGoBack}>
            Go Back to Categories
          </button>
          <Question question={questions[currentQuestionIdx]} />
        </>
      )}
      <button onClick={() => setCurrentQuestionIdx(currentQuestionIdx + 1)}>
        Next Q
      </button>
    </div>
  )
}

export default Questions
