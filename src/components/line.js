function Line({ color, text, isLeft }) {
  const textPosition = `text-${isLeft ? "left" : "right"}`

  return (
    <p className={`text-white mt-20 border-b-6 border-${color} pb-8 text-5xl w-full ${textPosition}`}>
      {text}
    </p>
  )
}

export default Line