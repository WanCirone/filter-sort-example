import Dropdown from './Dropdown';
import Sort from './Sort';
import Card from './Card';
import s from '../styles/container.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';


function Container() {
    const data = useSelector(state => state.data)

    const [selected, setSelected] = useState("todos");
    const [products, setProducts] = useState();

    useEffect(() => {
        let filteredProducts = data;
       // console.log(filteredProducts)
        if(selected !== 'todos') {
         //   console.log('entre cuantas veces')
            filteredProducts = filteredProducts.filter( product => 
                product.category === selected.selected[0]
            )
            setProducts(filteredProducts)
           // console.log(filteredProducts)
        }
        else {
            //console.log('Entre por TODOS otra vez')
            setProducts(data)
        }
    },[data, selected])

    function handleSort(name) {
        console.log('Me presionaron')
        console.log(name)
        console.log(products)
        if(name === 'asc') {
            const asc = [...products].sort((a, b) => a.price < b.price ? 1 : -1)
            console.log(asc)
            setProducts(asc)
        }
        else {
            const des = [...products].sort((a, b) => a.price > b.price ? 1 : -1)
            console.log(des)
            setProducts(des)
        }
    }

    return(
        <div>
            <div className={s.div} >
                <Dropdown onChange={(value) => setSelected({selected: [value]}) } />
                <Sort onClick={name =>handleSort(name)} />
            </div>
            <div className={s.container} >
            { selected === "todos" ?  data.map((d, i) => 
                <Card 
                title={data[i].title} 
                description={data[i].description}
                price={data[i].price}
                category={data[i].category}
                /> ) 
                
            :   
                products.map((d, i) => 
                <Card 
                title={products[i].title} 
                description={products[i].description}
                price={products[i].price}
                category={products[i].category}
                /> ) 
                }
            </div> 
        </div>
    )
}

export default Container;