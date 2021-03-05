import s from '../styles/sort.module.css';

//Botones para ordenar de forma ascendente y descendente. Van a avisar a su padre cuando reciban un click
function Sort(props) {
    return(
        <div>
            <button className={s.button} name='asc' onClick={e => props.onClick(e.target.name)} >ASC</button>
            <button className={s.button} name='des' onClick={e => props.onClick(e.target.name)} >DES</button>
        </div>
    )
}

export default Sort;