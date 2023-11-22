import { useEffect, useState } from 'react'
import GameCard from './GameCard'

export default function GameList() {

  const [max, setMax] = useState(5)

   const fetchGames = () => {
    console.log("fetched");
    fetch(API_URL)
          .then(res => res.json())
          .then(json => setGames(json.results))
   }
    const API_URL = `https://api.rawg.io/api/games?page=1&page_size=${max}&key=d31a5a5c9f6340889f1897f203434988`
    const [games, setGames] = useState([])
    useEffect(() => {
       fetchGames()
    }, [max])
    

    return (
      <>
      <label htmlFor="">Choissisez le nombre de jeux</label>
      <select
      value={max}
      onChange={(e) => setMax(e.target.value)}
       className='p-5 w-full block bg-gray-700'
        name=""
         id="">
        <option selected value="5">5</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
      </select>
      <div className='my-10 gap-7 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 py-10'>
        {
          games.map((game) => (
            <GameCard game={game} key={game.id} />
          ))
        }
      </div>
      </>
    )
}