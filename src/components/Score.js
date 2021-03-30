const Score = ({ numQuestions, score }) => {
  console.log('score renders')
  return (
    <>
      <h2>
        Congrats, you scored {score} out of {numQuestions}!
      </h2>
      <button>Play again?</button>
    </>
  )
}

export default Score
