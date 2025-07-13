import Button from './Button/Button'
import {useState} from 'react'

export default function FeedBackSection (){
    const [name, setName] = useState('')
    const [hasError, setHasError] = useState(false)
    const [reason, setReason] = useState('help')

    function handleNameChange (event) {
        setName(event.target.value)
        setHasError(event.target.value.trim().length === 0)
    }

    function handleReasonChange(event){
        setReason(event.target.value)
    }

    return (
        <section style={{marginBottom: '25px'}}>
            <h1 style={{marginBottom: '25px'}}>Обратная связь</h1>

            <form action="">
                <label htmlFor="name">Ваше имя</label>
                <input type="text" id="name" style={{border: hasError ? '1px solid red' : null}} className='control' value={name} onChange={handleNameChange}/>

                <label htmlFor="reason">Причина обращения</label>
                <select  id="reason" className="control" value={reason} onChange={handleReasonChange}>
                    <option value="error">Ошибка</option>
                    <option value="help">Нужная помощь</option>
                    <option value="suggest">Предложение</option>
                </select>


                <pre>
                    Name : {name}
                    <br />
                    Reason : {reason}
                </pre>
                <br />
                <Button disabled={hasError}>Отправить</Button>
            </form>
        </section>
    )
}   