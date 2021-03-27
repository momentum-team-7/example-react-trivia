import he from 'he'

const AnswerChoices = ({ question }) => {
  const choices = [question.correct_answer, ...question.incorrect_answers]
  return (
    <ul>
      {choices.map((option, idx) => (
        <li key={idx}>{he.decode(option)}</li>
      ))}
    </ul>
  )
}

export default AnswerChoices
