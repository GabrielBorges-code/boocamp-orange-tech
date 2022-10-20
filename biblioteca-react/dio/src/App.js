import Button from "./components/Button";

function App({name}) {
  return (
    <div className="App">

      <h1>Olá {name}!</h1>

      <Button title="Enviar"/>
      <br/>
      <Button title="Salvar"/>

    </div>
  );
}

export default App;
