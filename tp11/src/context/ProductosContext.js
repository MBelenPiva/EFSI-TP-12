import React,{createContext,useEffect,useState} from 'react';
import productojson from '../componentes/Data';
export const ProductosContext = createContext();

const ProductosProvider = (props) => {

    const [productos, setProductos] = useState([]);
    const [productosActual, setProductosActual] = useState([]);
    const [filtro, setFiltro] = useState(null);

    const ObtenerProductos = ()=>{

        return 0;

    }

    useEffect(() => {
        setProductos(productojson);
        setProductosActual(productojson);
    },[]);

    useEffect(()=>{
        filtrarProductos();
    },[filtro]);

    const filtrarProductos = ()=>{
        let newarray = productos;
        setProductosActual(newarray.filter(newarray => newarray.includes()));
    }

    return (

        <ProductosContext.Provider

            value={{

                ObtenerProductos,

                productosActual

            }}
        >
            {props.children}

        </ProductosContext.Provider>

    )

}

export default ProductosProvider;