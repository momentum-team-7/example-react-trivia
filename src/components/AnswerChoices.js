import he from 'he'

const AnswerChoices = ({ answers, setAnswerChoice }) => {
  return (
    <ul>
      {answers.map((option, idx) => (
        <li key={idx}>
          {he.decode(option)} onClick={() => setAnswerChoice(option)}
        </li>
      ))}
    </ul>
  )
}

export default AnswerChoices
