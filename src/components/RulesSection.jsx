import Button from "./Button/Button"
import { rules} from '../data'

import {useState} from 'react'

export default function RulesSection(){
    const [contentType, setContentType] = useState(null)

    function handleClick (type) {
        setContentType(type)
    }

    return (
        <section className='RulesSection'>
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
    )
}