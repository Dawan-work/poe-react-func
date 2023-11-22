// Fonction pure
// Input =====> output 
// Pas provoquer de Side Effect (effets de bord)
const multiply = (a, b) => {
    return a * b
}


multiply(2,3)

let c = 10
const multiply2 = (a, b) => {
    return (a * b) + c
}

let d = 10
const multiply3 = (a, b) => {
    d = a + b
    return (a * b) 
}

// Impur
const multiply4 = (a, b) => {
    console.log("a * b = " + a*b)
    return (a * b) 
}


