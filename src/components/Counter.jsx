import { useState } from "react"

export default function Counter({initCount = 5, text}) {
//  console.log(props)
  const [counter, setCounter] = useState(initCount)

  const diminuer = () => {
    if(counter > 0) {
      setCounter((preValue) => preValue + 1 )
    }
  }
  const augmenter = () => {
      setCounter((preValue) => preValue + 2)
    }

    return (
      <>
        <div className="flex bg-cyan-400 justify-center mt-10">
          <div className="w-1/2 p-3">
            <p>{text}</p>
            <p className="text-center text-7xl">{counter}</p>
            <div className="flex justify-around mt-7">
            <button
             onClick={diminuer}
            className="bg-indigo-900 p-3 shadow"
            >
                Diminuer
            </button>
            <button
            onClick={() => augmenter()}
            className="bg-indigo-900 p-3 shadow"
            >
                Augmenter
            </button>
          </div>
          </div>
         
        </div>
        <p>Signature</p>
      </>
    );
  
}
