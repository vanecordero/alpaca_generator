
import Container from './components/containerBtn';
import AlpacaContext from "context/alpacaContext";


function App() {
  return (
    <>
    <AlpacaContext>  
      <Container/>
    </AlpacaContext> 
    </>
  );
}

export default App;
