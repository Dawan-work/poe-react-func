// Inheritance VS Composition
// Class component vs functional component

import { useState } from "react";

// Fonction pure qui prend en argument des props et qui retourne un UI
export default function App() {

  console.log("render");
  // Hooks => function qui a pour convention "useFunctionalité"
  // useState : va encapsuler un état unique 
  const [firstName, setFirstName] = useState("Eikichi")  // [value, setValue]  
  const [lastName, setLastName] = useState("ONIZUKA")
  const [age, setAge] = useState(22)
  const [isLogged, setIsLogged] = useState(true)
  const [condition, setCondition] = useState(true)



  function changeName() {
    setFirstName("GTO")
    setLastName("H")
  }

  const handleLogin = () => setIsLogged(!isLogged)
  const toogleCondition = () => setCondition(!condition)

  return (
    <div className="text-white bg-gray-900 min-h-screen font-mono">
        {isLogged ? (
          <div role="alert" className="bg-emerald-300 p-2 text-center text-lg">
            Vous êtes connecté
          </div>
        ) : (
          <div role="alert" className="bg-red-300 p-2 text-center text-lg">
            Vous n'êtes pas connecté !
          </div>
        )}

        <button onClick={() => handleLogin()} className="bg-cyan-200 p-2">
          {isLogged ? "Deconnexion" : "Connexion"}
        </button>

        {isLogged && (
          <main className="container mx-auto min-h-screen space-y-3 ">
            <h1 className="text-3xl font-bold font text-cyan-300">
              Apprendre React by Dawan
            </h1>
            <p>Une expression est une unité de code qui produit une valeur</p>
            <ul>
              <li>valeur littérale</li>
              <li>une variable</li>
              <li>une fonction</li>
              <li>une condition</li>
              <li>une comparaison</li>
              <li>un appel de methode</li>
              <li>une opération arithmétique</li>
              <li>un ensemble de ces élément </li>
            </ul>
            <p>Une expression en JSX se met entre accolades {12 + 23}</p>
            <p> {/* CECI EST UN COMMENTAIRE */} </p>
            <p>
              Je m'appelle {firstName} {lastName} et j'ai {age} ans{" "}
            </p>
            <button
              onClick={() => changeName()}
              className="bg-cyan-200 p-2"
            >
              Changer de nom
            </button>

            <h2>Rendu conditionel</h2>
            {condition ? (
              <p>Cette condition est vrai</p>
            ) : (
              <p>Cette condition est fausse</p>
            )}

            {condition ? <p>Cette condition est vrai</p> : null}

            {!condition && <p>Cette anectode est vrai </p>}
            <button
              onClick={() => toogleCondition()}
              className="bg-cyan-200 p-2"
            >
              Changer de nom
            </button>


          </main>
        )}
      </div>
  );
}

// export default class App extends Component {
//   constructor() {
//     super()
//   }
//   render() {

//     return (
//       <div>App Component</div>
//     )
//   }
// }
