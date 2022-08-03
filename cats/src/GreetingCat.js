import React from "react";

const GreetingCat = (props) => {
  const { greeting } = props.match.params;
  const greetingCatUrl = `https://cataas.com/cat/says/${greeting}`;

  return (
    <div>
      <header>
        <h3>Greet me</h3>
        {!greeting ? (
          <div>Needs a greeting</div>
        ) : (
          <div>
            <img src={greetingCatUrl} width="400px" alt="Cat" />
          </div>
        )}
      </header>
    </div>
  );
};
export default GreetingCat;
