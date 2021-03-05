import s from '../styles/dropdown.module.css';

//Dropdown para filtrar por categorias. ES quien le va a avisar al padre que ocurrió un evento
function Dropdown(props) {
    return(
        <div className={s.drop}>
            <select className={s.select} onChange={(e) => props.onChange(e.target.value)} >
                <option default value ="ninguno" >Selecciona una categoría...</option>
                <option value = "todos" >TODOS</option>
                <option value="dress" >DRESS</option>
                <option value="shoe" >SHOE</option>
                <option value="baby" >BABY</option>
                <option value="sweater" >SWEATER</option>
            </select>
        </div>
    )
}


export default Dropdown;