function JacketSuggestion({ temp }) {
    let suggestion;
    if (temp < 0) {
      suggestion = "Det är svinkallt ute! Ta med dig en tjock vinterjacka.";
    } else if (temp >= 0 && temp < 10) {
      suggestion = "Det är kyligt ute. En vinterjacka vore bra.";
    } else if (temp >= 10 && temp < 15) {
      suggestion = "Det är svalt ute. Du borde ha på dig en lätt jacka eller en tröja.";
    } else if (temp >= 15 && temp < 20) {
      suggestion = "Det är mild temperatur ute. En tunn jacka eller en hoodie bör räcka.";
    } else {
      suggestion = "Det är varmt ute. Ingen jacka lär behövas, det räcker nog med en t-shirt!";
    }
  
    return (
      <div>
        <p>{suggestion}</p>
      </div>
    );
  }
  
  export default JacketSuggestion;