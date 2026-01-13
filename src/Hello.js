// Così segnalo al file JS che si userà React
import React from "react";
// Così importo un css che darà lo stile a questo component
import "./Hello.css";

// Le FUNCTION sono l'equivalente dei metodi di BE: decidono la logica e 
//  come si graficherà il risultato (vedi tag)
function Hello()
{
    return <h1>Funziona!!</h1>;
}

export default Hello;