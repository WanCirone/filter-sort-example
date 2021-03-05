import Dropdown from './Dropdown';
import Sort from './Sort';
import Card from './Card';
import s from '../styles/container.module.css';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';


function Container() {
    const data = useSelector(state => state.data)

    const [selected, setSelected] = useState("ninguno");
    const [products, setProducts] = useState([]);


    console.log(selected, products, data)

    useEffect(() => {
        let filteredProducts = data;
        let todos;
       // console.log(filteredProducts)
      //  console.log(products, selected)
      //  console.log(selected.selected, ["todos"])
        if(selected.selected === ["todos"]) {
            console.log('entré al todos')
            todos = data;
            setProducts(todos);
        }
        else if(selected !== 'ninguno') {
            filteredProducts = filteredProducts.filter( product => 
                product.category === selected.selected[0]
            )
            setProducts(filteredProducts)
         //   console.log('FILTRADOS', products)
        }
        // else {
        //    console.log('Entre por NINGUNO')
        //    setProducts(data)
        // }
    },[data, selected])

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