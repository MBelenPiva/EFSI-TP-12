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
            setProductosActual(ordenar(productojson));
    },[filtro,ordenamiento]);

    const filtrarProductos = ()=>{
        let newarray = ordenar(productos);
        setProductosActual(newarray.filter(a=>a.idCategoria == filtro));        
    }

    const ordenar = (newarray) =>{
        console.log('ordenamiento');        
        if(ordenamiento == 1){
            newarray.sort(function (a, b) {
                if (a.precio > b.precio) {
                return 1;
                }
                if (a.precio < b.precio) {
                return -1;
                }
                // a must be equal to b
                return 0;
            });

            return newarray;
        }
        else{
            newarray.sort(function (a, b) {
                if (a.precio < b.precio) {
                return 1;
                }
                if (a.precio > b.precio) {
                return -1;
                }
                // a must be equal to b
                return 0;
            });

            return newarray;
        }
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