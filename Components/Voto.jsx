import React from "react";

var cs = 0,
  cf = 0,
  ca = 0;

const Cidades = () => {
  let selected = "";
  function handleChange(e) {
    selected = e.target.value;
  }

  function vencedor() {
    if (cs > cf && cs > ca) alert("The Seafront");
    else if (cf > cs && cf > ca) alert("Facade");
    else if (ca > cs && ca > cf) alert("The Aerie");
  }

  function contar(e) {
    e.preventDefault();
    if (selected == "The Seafront") cs = cs + 1;
    else if (selected == "Facade") cf = cf + 1;
    else if (selected == "The Aerie") ca = ca + 1;
  }

  return (
    <div>
      <h3>
        <input
          type="radio"
          name="cidade"
          id="Sea"
          value="The Seafront"
          onChange={handleChange}
        />
        The Seafront
        <br />
        <br />
        <input
          type="radio"
          name="cidade"
          id="Facade"
          value="Facade"
          onChange={handleChange}
        />
        Facade
        <br />
        <br />
        <input
          type="radio"
          name="cidade"
          id="Aerie"
          value="The Aerie"
          onChange={handleChange}
        />
        The Aerie
      </h3>
      <button onClick={contar}> Votar</button>
      <h1><button onClick={vencedor}>Mostrar cidade mais votada</button></h1>
    </div>
  );
};

export default Cidades;
