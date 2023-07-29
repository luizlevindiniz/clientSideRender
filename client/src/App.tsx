
import { Counter } from "./components/Counter"

export default function App() {

  function alerta(counter:number){
    if(counter===6){
    alert(`Deu!`)
    }
  }
  return (
    <>
    <Counter alerta={alerta}>Ola</Counter>
    </>
  )
}

