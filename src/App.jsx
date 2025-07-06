import {useState} from 'react'

import Header from "./components/Header"
import WayToTeach from "./components/WayToTeach"
import Button from "./components/Button/Button"


import {ways, rules} from './data'


export default function App() {
  const [contentType, setContentType] = useState(null)

  function handleClick (type) {
    setContentType(type)
  }

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
          <Button isActive={contentType === 'practice'} onClick={() => handleClick('practice')}>Практика</Button>
          <Button isActive={contentType === 'code'} onClick={() => handleClick('code')}>Код</Button>
          <Button isActive={contentType === 'focus'} onClick={() => handleClick('focus')}>Фокус</Button>

          {contentType ? (
            <>
              <div className='rulesBlock'>
                <p className='rulesContent'>{rules[contentType]}</p>
              </div>   
              <Button onClick={() => handleClick(null)}>Скрыть</Button>
            </>
          ) : (
            <div className='rulesBlock'>Нажми на кнопку</div>
          )}
        </section>
      </main> 
    </div>
  )
}


