import Button from './Button/Button'
import Modal from './Modal/Modal'
import { useState } from 'react'

export default function EffectSection(){
    const [modal, setModal] = useState(false)

    function openModel(){
        setModal(true)
    }

    return (
        <section>
            <h3>Модальное окно</h3>

            <Button onClick={openModel}>Открыть информацию</Button>

            <Modal open={modal}>
                <h3>Hello</h3>
                <p>some info</p>
                <Button onClick={() => setModal(false)}>Ok</Button>
            </Modal>
        </section>
    )
}