import { useEffect, useState } from 'react'
import { getQuestionSet } from '../ajaxRequests'
import Question from './Question'
import Score from './Score'
import NextButton from './NextButton'

const Quiz = ({ category, handleGoBack }) => {
  const [questions, setQuestions] = useState([])
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0)
  const [done, setDone] = useState(false)
  const [score, setScore] = useState(0)

  useEffect(() => {
    const idx = currentQuestionIdx
    if (idx > 0 && idx === questions.length - 1) {
      setDone(true)
    }
  }, [currentQuestionIdx, questions])

  useEffect(() => {
    getQuestionSet(category).then((data) => {
      setQuestions(data)
    })
  }, [category])

  const incrementScore = () => {
    setScore(score + 1)
  }

  if (done) {
    return <Score numQuestions={questions.length} score={score} />
  }

  return (
    <div className="questions">
      {questions.length > 0 && (
        <>
          <button
            className="goBack white bg-dark-pink pa1"
            onClick={handleGoBack}
          >
            Quit and Go Back to Categories
          </button>
          <Question
            question={questions[currentQuestionIdx]}
            incrementScore={incrementScore}
          >
            <NextButton
              setCurrentQuestionIdx={() =>
                setCurrentQuestionIdx(currentQuestionIdx + 1)
              }
            />
          </Question>
        </>
      )}
    </div>
  )
}

export default Quiz
