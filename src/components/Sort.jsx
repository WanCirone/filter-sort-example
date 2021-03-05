import s from '../styles/sort.module.css';

function Sort(props) {
    return(
        <div>
            <button className={s.button} name='asc' onClick={e => props.onClick(e.target.name)} >ASC</button>
            <button className={s.button} name='des' onClick={e => props.onClick(e.target.name)} >DES</button>
        </div>
    )
}

export default Sort;