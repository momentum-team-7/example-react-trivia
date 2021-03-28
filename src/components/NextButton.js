const NextButton = ({ setCurrentQuestionIdx, showSuccessMessage }) => {
  return (
    <>
      <button
        onClick={setCurrentQuestionIdx}
        className="f5 no-underline black bg-animate hover-bg-dark-pink hover-white bg-pink inline-flex items-center pa3 ba border-box grow"
      >
        Next Question &gt;&gt;
      </button>
      {showSuccessMessage && (
        <div className="bg-green white pa2 mv2 w-75">That's correct!</div>
      )}
    </>
  )
}

export default NextButton
