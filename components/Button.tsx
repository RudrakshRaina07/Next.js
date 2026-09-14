"use client"

const Button = () => {
  return (
    <div >
      <button onClick={() => {
        alert("Your new subject is React.js")
      }}
      className="bg-blue-300 px-6 py-3 text-black rounded-2xl m-3"
      >CLick me for new Subject</button>
    </div>
  )
}

export default Button
