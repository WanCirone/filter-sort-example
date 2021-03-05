import Dropdown from './Dropdown';
import Sort from './Sort';
import Card from './Card';
import s from '../styles/container.module.css';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';


function Container() {
    //Traigo la data del store 
    const data = useSelector(state => state.data)

    //Mantengo estados de la categoría seleccionada en el dropdown y de los productos
    const [selected, setSelected] = useState("ninguno");
    const [products, setProducts] = useState([]);

    
    console.log(selected, products, data)

    useEffect(() => {
        let filteredProducts = data;
        if(selected !== 'ninguno') {
            filteredProducts = filteredProducts.filter( product => 
                product.category === selected.selected[0]
            )
            setProducts(filteredProducts)
        }
        else {
           setProducts(data)
        }
    },[data, selected])

    
    //Depende cuál sea el button que recibió el click, va a ordenar en forma asc ó des
    //Se trae una copia del estado de productos y ordena
    function handleSort(name) {
        console.log('Me presionaron')
        console.log(name)
        console.log(products)
        if(name === 'asc') {
            const asc = [...products].sort((a, b) => a.price < b.price ? 1 : -1)
           //console.log(asc)
            setProducts(asc)
            
        }
        else {
            const des = [...products].sort((a, b) => a.price > b.price ? 1 : -1)
            //console.log(des)
            setProducts(des)
        }
    }

    //El dropdown va a recibir un aviso del hijo (Dropdown.jsx) y llama a la función setSelected para cambiar el estado a selected (Hook State)
    //Sort va a recibir un aviso cuando se hagan clicks en Sort.jsx y va a llamar a la función handleSort
    return(
        <div>
            <div className={s.div} >
                <Dropdown onChange={(value) => setSelected({selected: [value]}) } />
                <Sort onClick={name =>handleSort(name)} />
            </div>
            <div className={s.container} >
                { [...products].map((d, i) => 
                <Card 
                title={products[i].title} 
                description={products[i].description}
                price={products[i].price}
                category={products[i].category}
                />, console.log('Terminé de mapear los productos', products) )}
            </div> 
        </div>
    )
}

export default Container;