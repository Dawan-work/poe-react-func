import React, { useEffect, useState } from 'react'

export default function Clock () {
    const [date, setDate] = useState(new Date())
    const [toto, setToto] = useState(1)

  //   useEffect(() => {
  //     // alternative componentDidUpdate() 
  //      console.log(`rendu ${toto} fois + a chaque qu'une des deps changent`)
  //  }, [toto])

  
    useEffect(() => {
       // alternative componentDidMount() 
       let id = setInterval(() => {
         console.log("tick");
         setDate(new Date())
       }, 1000)

       // alternative componentWillUnmount() 
       return () => {
         console.log("cleanup");
         clearInterval(id)
        }
    }, [])

    return (
     <p
      onClick={() => setToto(toto+1)}>Nous sommes le <FormattedDate date={date} /> et il 
          est <FormattedTime date={date} /> </p>   
    )
  }

function FormattedDate ({date}) {
  // 17 janvier 2023  
    const options = {weekday : "long", year: "numeric", month: 'long', day: "numeric"}
    return (
      <span>{date.toLocaleDateString("fr-FR", options)}</span>
    )
}

function FormattedTime({date}){
    // hh:mm:ss 
      return (
        <span>{date.toLocaleTimeString("fr-FR")}</span>
      )

  }




