import Button from './Button/Button'
import {useState, useRef} from 'react'

function StateVsRef(){
    const input = useRef()
    const [value, setValue] = useState('')
    const [show, setShow] = useState(false)

    function handleKeyDown(event){
        if (event.key === 'Enter'){
            setShow(true)
        }
    }

    return (
        <div>
            <h3>Input value: {show && input.current?.value}</h3>
            <input ref={input} type="text" onKeyDown={handleKeyDown} className='control'/>
        </div>
    )
}


export default function FeedBackSection (){
    const [form, setForm] = useState({
        name: '',
        hasError: false,
        reason: 'help'
    })
    // const [name, setName] = useState('')
    // const [hasError, setHasError] = useState(false)
    // const [reason, setReason] = useState('help')

    function handleNameChange (event) {
        // setName(event.target.value)
        // setHasError(event.target.value.trim().length === 0)

        setForm(prev => ({...prev,
            name: event.target.value,
            hasError: event.target.value.trim().length === 0,
        }))
    }

    function toggleError(){
        // setHasError((prev) => !prev)
    }

    return (
        <section style={{marginBottom: '25px'}}>
            <h1 style={{marginBottom: '25px'}}>Обратная связь</h1>

            <Button onClick={toggleError}>Toggle Error</Button>

            <form >
                <label htmlFor="name">Ваше имя</label>
                <input type="text" id="name" style={{border: form.hasError ? '1px solid red' : null}} className='control' value={form.name} onChange={handleNameChange}/>

                <label htmlFor="reason">Причина обращения</label>
                <select  id="reason" className="control" value={form.name.reason} onChange={event => setForm(prev =>({
                    ...prev, reason: event.target.value})
                )}>
                    <option value="error">Ошибка</option>
                    <option value="help">Нужная помощь</option>
                    <option value="suggest">Предложение</option>
                </select>


                <pre>
                    Name : {form.name}
                    <br />
                    Reason : {form.reason}
                </pre>
                <br />
                <Button disabled={form.hasError}>Отправить</Button>
                <br />
                <br />
                <hr />
                <br />
                
            </form>
            <StateVsRef/>
        </section>

        
    )
}   