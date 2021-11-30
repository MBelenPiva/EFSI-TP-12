import React,{createContext,useEffect,useState} from 'react';
import productojson from '../componentes/Data';
export const ProductosContext = createContext();

const ProductosProvider = (props) => {

    const [productos, setProductos] = useState([]);
    const [productosActual, setProductosActual] = useState([]);
    const [filtro, setFiltro] = useState(0);
    const [ordenamiento, setOrdenamiento] = useState(null);

    

    useEffect(() => {
        setProductos(productojson);
        setProductosActual(productojson);
    },[]);

    useEffect(()=>{
        console.log(filtro);
        if(filtro >0)
            filtrarProductos();
        else
            setProductosActual(productojson);
    },[filtro,ordenamiento]);

    const filtrarProductos = ()=>{
        let newarray = productos;
        setProductosActual(newarray.filter(a=>a.idCategoria == filtro));
    }

    return (

        <ProductosContext.Provider

            value={{

                setFiltro,
                setOrdenamiento,
                productosActual

            }}
        >
            {props.children}

        </ProductosContext.Provider>

    )

}

export default ProductosProvider;