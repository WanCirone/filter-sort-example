import s from '../styles/card.module.css';

//Componente presentacional de una card individual.
//Recibe las props del padre -> el Container
function Card(props) {
    return (
        <div className={s.card} >
            <p>Title: {props.title}</p> 
            <p>Description: {props.description}</p>
            <p className={s.p} >Price: ${props.price}</p>
            <p className={s.p}>Category: {props.category}</p>
        </div>
    )
}

export default Card;