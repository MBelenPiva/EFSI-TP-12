import React,{createContext,useState} from 'react';

export const ProductosContext = createContext();

const ProductosProvider = (props) => {

    const [productos, setProductos] = useState([]);

    const ObtenerProductos = ()=>{

        return 0;

    }

    return (

        <ProductosContext.Provider

            value={{

                ObtenerProductos,

                productos

            }}
        >
            {props.products}

        </ProductosContext.Provider>

    )

}

export default ProductosProvider;