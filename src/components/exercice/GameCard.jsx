import React, { useState } from 'react'

export default function GameCard ({game}) {
    const [isPlayed, setIsPlayed] = useState(game.isPlayed)

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };

    const changeStatus = () => {
        setIsPlayed(!isPlayed)
    }
        
    return (
        <div
         onClick={changeStatus}
         className={isPlayed ? "max-w-sm rounded overflow-hidden shadow-lg bg-black" : "max-w-sm rounded overflow-hidden shadow-lg bg-gray-800"}>
        <img className="w-full" src={game.img} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{game.name}</div>
          <p className="text-cyan-300 text-base">
          {truncate(game.description, 150)
          }
          </p>
          <p className="text-white my-2">
            Sortie en {game.yearReleased} sur {game.console}
          </p>
        </div>

      </div>
    )
  }