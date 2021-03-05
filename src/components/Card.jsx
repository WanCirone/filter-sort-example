import s from '../styles/card.module.css';

function Card(props) {
    return (
        <div className={s.card} >
            <p>Title: {props.title}</p> 
            <p>Description: {props.description}</p>
            <p>Price: ${props.price}</p>
            <p>Category: {props.category}</p>
        </div>
    )
}

export default Card;