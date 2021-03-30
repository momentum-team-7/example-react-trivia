const NextButton = ({ setCurrentQuestionIdx, commitAnswer }) => {
  const handleClick = () => {
    setCurrentQuestionIdx()
    commitAnswer()
  }
  return (
    <div className="flex flex-row-reverse w-80 mv3">
      <button
        onClick={handleClick}
        className="f5 black bg-animate hover-bg-dark-pink hover-white bg-pink inline-flex items-center pa3 ba border-box grow"
      >
        Next Question &gt;&gt;
      </button>
    </div>
  )
}

export default NextButton
