import GameCard from './GameCard'

export default function GameList() {
  const listGames = [
    {
        id: 1,
      name: "The Witcher 3",
      description: "Donec sollicitudin molestie malesuada. Cras ultricies ligula sed magna dictum porta. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, portt",
        img:"https://imgs.search.brave.com/fgDzd_7ohQ5QBcP_mxYkXU4PqWADDgGRLjMSQratyEM/rs:fit:1200:695:1/g:ce/aHR0cHM6Ly9pbWcu/ZXVyb3BhcHJlc3Mu/ZXMvZm90b3dlYi9m/b3Rvbm90aWNpYV8y/MDE1MTEwNjE1MDAy/OV8xMjgwLmpwZw",
        yearReleased: "2013",
       console: "PS4",
       isPlayed: true,
      },
      {
        id: 16,
        name: "God of War",
        description: "Donec sollicitudin molestie malesuada. Cras ultricies ligula sed magna dictum porta. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, portt",
        img:"https://imgs.search.brave.com/Xdr9FlxPVwtzTL_9jBWojOWHR2oV6g2m46qSLPftFMo/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDU0MTk1/NTUuanBn",
        yearReleased: "2006",
        console: "PS2",
        isPlayed: false,
      },
      {
        id: 2,
        name: "God of War 2 ",
        description: "Donec sollicitudin molestie malesuada. Cras ultricies ligula sed magna dictum porta. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, portt",
        img:"https://imgs.search.brave.com/LqnhFUCGUg8pCOerBaR2R1pbvc1Z9KeLyTcXT-dY8SI/rs:fit:1200:1116:1/g:ce/aHR0cDovLzMuYnAu/YmxvZ3Nwb3QuY29t/Ly1ubzYycHRxV0lx/QS9VUlpkVWJPV3lM/SS9BQUFBQUFBQUFR/Yy9UZXJ5X29IdXNW/cy9zMTYwMC9Hb2Qt/b2YtV2FyLTIrc3Vw/ZXJzb25pY2dhbXou/anBn",
        yearReleased: "2013",
        console: "PS2",
        isPlayed: true,
      },
      {

     id: 3,
     name: "The Witcher 3",
      description: "Donec sollicitudin molestie malesuada. Cras ultricies ligula sed magna dictum porta. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, portt",
      img:"https://imgs.search.brave.com/fgDzd_7ohQ5QBcP_mxYkXU4PqWADDgGRLjMSQratyEM/rs:fit:1200:695:1/g:ce/aHR0cHM6Ly9pbWcu/ZXVyb3BhcHJlc3Mu/ZXMvZm90b3dlYi9m/b3Rvbm90aWNpYV8y/MDE1MTEwNjE1MDAy/OV8xMjgwLmpwZw",
      yearReleased: "2013",
      console: "PS4",
      isPlayed: true,
    },
    {
      id: 4,
      name: "God of War 3",
      description: "Donec sollicitudin molestie malesuada. Cras ultricies ligula sed magna dictum porta. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, portt",
      img:"https://imgs.search.brave.com/swmsUUytVF7RKEzaQtws7hL2EGdVyzelC5n2g4i6JaI/rs:fit:1200:1080:1/g:ce/aHR0cDovL2dldHdh/bGxwYXBlcnMuY29t/L3dhbGxwYXBlci9m/dWxsLzUvOS9kLzEx/MDU0NDAtZ29kLW9m/LXdhci0zLXdhbGxw/YXBlci1oZC0xOTIw/eDEwODAtZm9yLW1h/Yy5qcGc",
      yearReleased: "2013",
      console: "PS3",
      isPlayed: false,
    },
    {
      id: 5,
      name: "The last of Us ",
      description: "Donec sollicitudin molestie malesuada. Cras ultricies ligula sed magna dictum porta. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, portt",
      img:"https://imgs.search.brave.com/gSv2lpGxmVczyVVwiUulRNaUhl807nAXz9FlcHvsWnA/rs:fit:1193:671:1/g:ce/aHR0cHM6Ly92Z2V6/b25lLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMC8wMy90/aGUtbGFzdC1vZi11/cy1hcnQuanBn",
      yearReleased: "2018",
      console: "PS4",
     isPlayed: true,
    },
 
  ]
    return (
      <div className='my-10 gap-7 sm:grid md:grid-cols-2 xl:grid-cols-4 py-10'>
        {
          listGames.map((game) => (
            <GameCard game={game} key={game.id} />
          ))
        }
       

      </div>
    )
}