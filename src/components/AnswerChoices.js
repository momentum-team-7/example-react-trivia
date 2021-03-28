import clsx from 'clsx'
import he from 'he'

const AnswerChoices = ({ answers, setAnswerChoice }) => {
  return (
    <div className="flex flex-column">
      {shuffledAnswers.map((option, idx) => (
        <button
          className={clsx(
            'w-75 mv1 f6 link dim br1 ba bw1 ph3 pv2 mb2 dib black',
            { 'ba bw3 bg-light-blue': false }
          )}
          key={idx}
          onClick={() => setCurrentQuestionCorrect(correctAnswer === option)}
        >
          {he.decode(option)}
        </button>
      ))}
    </div>
  )
}

export default AnswerChoices
