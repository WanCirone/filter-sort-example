
function Sort(props) {
    return(
        <div>
            <button name='asc' onClick={e => props.onClick(e.target.name)} >ASC</button>
            <button name='des' onClick={e => props.onClick(e.target.name)} >DES</button>
        </div>
    )
}

export default Sort;