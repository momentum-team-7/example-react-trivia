import Confetti from 'react-confetti'

const Score = ({ numQuestions, score }) => {
  return (
    <>
      <h2>
        Congrats, you scored {score} out of {numQuestions}!
      </h2>
      <Confetti />
    </>
  )
}

export default Score
