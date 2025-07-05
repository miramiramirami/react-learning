import logo from '../../public/logo-name.svg'

export default function Header (){
    const now = new Date()

    return (
        <header>
            <img src={logo} alt="Logo" />
            <span>Время: { now.toLocaleTimeString() }</span>
        </header>
    )
}