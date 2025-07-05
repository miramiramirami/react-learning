import Header from "./components/Header"
import WayToTeach from "./components/WayToTeach"
import Button from "./components/Button/Button"

import {ways} from './data'



export default function App() {
  return (
    <div>
      <Header/>

     <main>
        <section>
          <WayToTeach {...ways[0]} />
          <WayToTeach {...ways[1]} />
          <WayToTeach {...ways[2]} />
          <WayToTeach {...ways[3]} />
          
        </section>

        <section>
          <h3>Главные советы для изучения</h3>
          <Button>Практика</Button>
          <Button>Код</Button>
          <Button>Фокус</Button>
        </section>
      </main> 
    </div>
  )
}


