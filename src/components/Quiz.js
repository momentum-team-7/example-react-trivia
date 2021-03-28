import { useEffect, useState } from 'react'
import { getQuestionSet } from '../ajaxRequests'
import Question from './Question'
import Score from './Score'
import AnswerChoices from './AnswerChoices'
import NextButton from './NextButton'

const Quiz = ({ category, handleGoBack }) => {
  const [questions, setQuestions] = useState([])
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0)
  const [currentQuestionCorrect, setCurrentQuestionCorrect] = useState(false)
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

  const handleNext = () => {}

  if (done) {
    return <Score correctAnswers="10" />
  }
  // if (correct) {
  //   return <h2>Right!</h2>
  // }

  return (
    <div className="questions">
      {questions.length > 0 && (
        <>
          <button className="goBack" onClick={handleGoBack}>
            Quit and Go Back to Categories
          </button>
          <Question
            question={questions[currentQuestionIdx]}
            currentQuestionCorrect={currentQuestionCorrect}
          >
            <AnswerChoices
              answers={{
                correctAnswer: questions[currentQuestionIdx].correct_answer,
                incorrectAnswers:
                  questions[currentQuestionIdx].incorrect_answers,
              }}
              setCurrentQuestionCorrect={setCurrentQuestionCorrect}
            />
          </Question>
        </>
      )}
      <NextButton
        setCurrentQuestionIdx={() =>
          setCurrentQuestionIdx(currentQuestionIdx + 1)
        }
      />
    </div>
  )
}

export default Quiz
