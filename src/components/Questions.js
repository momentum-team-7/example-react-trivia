import { useEffect, useState } from 'react'
import { getQuestionSet } from '../ajaxRequests'

const Questions = ({ category }) => {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    const data = getQuestionSet()
    setQuestions(data)
    // getQuestionSet(category).then((data) => {
    //   setQuestions(data)
    // })
  }, [])

  console.log('Questions Component, questions state: ', questions)
  return (
    <div className="questions">
      <ul>
        {questions.map((q) => {
          return <li>{q.question}</li>
        })}
      </ul>
    </div>
  )
}

export default Questions
