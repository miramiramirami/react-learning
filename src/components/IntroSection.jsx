import React from "react"

// export default function IntroSection(){
//     return(
//         <section >
//             <h1 className="centered" style={{marginBottom: '25px'}}>Изучение React</h1>
//             <h3 className="centered" style={{color: '#666'}}>React — это JavaScript-библиотека для создания интерактивных пользовательских интерфейсов.</h3>
//         </section>
//     )
// }


export default function IntroSection(){
    return React.createElement('section', null, [
        React.createElement('h1', {className: 'centered', key: 1, style:{marginBottom: '25px'}} ,'Изучение React'),
        React.createElement('h3', {className: 'centered', key: 2, style:{color: '#666', marginBottom: '25px'} } ,'React — это JavaScript-библиотека для создания интерактивных пользовательских интерфейсов.'),
    ])
} 