import React, { Component, useRef, useState } from "react";

export default function Form() {


  const formRef = useRef(null)
  const [fName, setFName] = useState("")
  const [lName, setLName] = useState("")
  const [email, setEmail] = useState("")
  const [message , setMessage] = useState("void")

 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (fName !== "" && lName !== "") {
      setMessage("success")
      console.log({
        fName,
        lName,
        email,
      });
    } else {
     setMessage("error")
    }
  };

 const handleSubmitFormData = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const fName = formData.get("fName");
    const lName = formData.get("lName").trim().toUpperCase();
    const email = formData.get("email");

    if (fName && lName) { 
      setMessage("success")
      console.log({
        fName, // fName : fName 
        lName,
        email,
      });
    } else {
       setMessage("error")
    }
  };

 const renderMessage = () => {
    switch (message) {
      case "success":
        return (
          <p className="bg-emerald-200 p-4 text-black text-center text-xl">
            Bonjour {fName} {lName}
          </p>
        );
      case "error":
        return (
          <p className="bg-red-200 p-4 text-black text-center text-xl">
            Les champs nom et prénom sont obligatoires !
          </p>
        );
      default:
        return (
          <p className="bg-white p-4 text-black text-center text-xl">
            Bienvenue
          </p>
        );
    }
  }

    return (
      <>
        {renderMessage()}

        <div className="flex justify-center">
          <form ref={formRef} className="bg-black w-2/3 p-6">
            <div className="my-4">
              <label htmlFor="name">Nom</label>
              <input
                //   onChange={(e) => this.setState({lName: e.target.value })}
                //   value={lName}
                className="p-5 w-full bg-gray-900"
                type="text"
                name="lName"
                placeholder="Tapez votre nom ici"
              />
            </div>
            <div className="my-4">
              <label htmlFor="firstname">Prénom</label>
              <input
                //   onChange={(e) => this.setState({fName: e.target.value })}
                //    value={fName}
                className="p-5 w-full bg-gray-900"
                type="text"
                name="fName"
                placeholder="Tapez votre Prénom ici"
              />
            </div>

            <div className="my-4">
              <label htmlFor="email">Email</label>
              <input
                //   onChange={(e) => this.setState({email: e.target.value })}
                //   value={email}
                className="p-5 w-full bg-gray-900"
                type="email"
                name="email"
                placeholder="Tapez votre Email ici"
              />
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleSubmitFormData}
                className="bg-red-700 p-5"
                type="submit"
              >
                S'inscrire
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }

