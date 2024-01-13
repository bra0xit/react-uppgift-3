import styles from '../app/page.module.css';

function Greeter() {
    const hours = new Date().getHours();
    const greeting = hours < 12 ? 'God morgon' : hours < 18 ? 'God eftermiddag' : 'God kväll';
  
    return (
      <div className ="greeter">
        <h2>{greeting} - välkommen till väderappen!</h2>
      </div>
    );
  }
  
  export default Greeter;
  