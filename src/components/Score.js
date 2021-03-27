const Score = ({ correctAnswers }) => {
  console.log('score renders')
  return (
    <>
      <h2>Congrats, you scored {correctAnswers} out of 10!</h2>
      <button>Play again?</button>
    </>
  )
}

export default Score
