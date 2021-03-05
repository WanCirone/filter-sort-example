import s from '../styles/dropdown.module.css';


function Dropdown(props) {
    return(
        <div className={s.drop}>
            <select className={s.select} onChange={(e) => props.onChange(e.target.value)} >
                <option default value ="todos" >TODOS</option>
                <option value="dress" >DRESS</option>
                <option value="shoe" >SHOE</option>
                <option value="baby" >BABY</option>
                <option value="sweater" >SWEATER</option>
            </select>
        </div>
    )
}


export default Dropdown;