import React, { useState, Fragment,useContext } from 'react';
import { ProductosContext } from '../context/ProductosContext';
import Producto from './Producto';
import ProductoList from './ProductoList';

function Shop() {
    const [vista, setVista] = useState(true);
    const {productosActual, setFiltro,setOrdenamiento} = useContext(ProductosContext);
return (


<div className="shop-box-inner">
        <div className="container">
            <div className="row">
                <div className="col-xl-9 col-lg-9 col-sm-12 col-xs-12 shop-content-right">
                    <div className="right-product-box">
                        <div className="product-item-filter row">
                            <div className="col-12 col-sm-8 text-center text-sm-left">
                                <div className="toolbar-sorter-right">
                                    <span> Filtrar por </span>
                                    <select id="basic" className="selectpicker show-tick form-control" data-placeholder="$ USD" onChange={(e) => setFiltro(e.target.value)}>
									<option value="0" data-display="Select">Todos</option>
									<option value="1">verdura</option>
									<option value="2">fruta</option>
								</select>
                                </div>
                                <p>Mostrar los resultados</p>
                            </div>
                            <div className="col-12 col-sm-4 text-center text-sm-right">
                                <ul className="nav nav-tabs ml-auto">
                                    <li>
                                        <a className="nav-link active" href="#grid-view" data-toggle="tab"> <i className="fa fa-th"></i> </a>
                                    </li>
                                    <li>
                                        <a className="nav-link" href="#list-view" data-toggle="tab"> <i className="fa fa-list-ul"></i> </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="product-categorie-box">
                            <div className="tab-content">
                                <div role="tabpanel" className="tab-pane fade show active" id="grid-view">
                                    <div className="row">
                                        {
                                            productosActual.map(prod =>(
                                                <Producto key={prod.id} producto={prod} />
                                            ))
                                        }
                                    </div>
                                </div>
                                
                                <div role="tabpanel" className="tab-pane fade" id="list-view">
                                    <div className="list-view-box">
                                        <div className="row">
                                            {
                                                productosActual.map(prod =>(
                                                    <ProductoList key={prod.id} producto={prod} />
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className="list-view-box">
                                        <div className="row">
                                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                                <div className="products-single fix">
                                                    <div className="box-img-hover">
                                                        <div className="type-lb">
                                                            <p className="sale">Oferta</p>
                                                        </div>
                                                       
                                                        <div className="mask-icon">
                                                            <ul>
                                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                                                            </ul>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                           
                                        </div>
                                    </div>
                                    <div className="list-view-box">
                                        <div className="row">
                                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                                <div className="products-single fix">
                                                    <div className="box-img-hover">
                                                        <div className="type-lb">
                                                            <p className="sale">Oferta</p>
                                                        </div>
                                                       
                                                        <div className="mask-icon">
                                                            <ul>
                                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                                                            </ul>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
				<div className="col-xl-3 col-lg-3 col-sm-12 col-xs-12 sidebar-shop-left">
                    <div className="product-categori">
                        <div className="search-product">
                            <form action="#">
                                <input className="form-control" placeholder="Buscar producto..." type="text"/>
                                <button type="submit"> <i className="fa fa-search"></i> </button>
                            </form>
                        </div>
                        <div className="filter-sidebar-left">
                            <div className="title-left">
                                <h3>Categorias</h3>
                            </div>
                            <div className="list-group list-group-collapse list-group-sm list-group-tree" id="list-group-men" data-children=".sub-men">
                                <div className="list-group-collapse sub-men">
                                    <a className="list-group-item list-group-item-action" href="#sub-men1" data-toggle="collapse" aria-expanded="true" aria-controls="sub-men1"> Filtro por precios  <small className="text-muted">(100)</small>
								</a>
                                <select name="select" className="combos" onChange={(e) => setOrdenamiento(e.target.value)}>
                                        <option disabled selected value> -- Seleccione el ordenamiento -- </option>
                                        <option className="dropdown-item" value="2" href="">Precio ASC</option>

                                        <option className="dropdown-item" value="1" href="">Precio DESC</option>
                                    </select>
                                </div>
                            
                            </div>
                        </div>
                        <div className="filter-price-left">
                            <div className="title-left">
                                <h3>Precio</h3>
                            </div>
                            <div className="price-box-slider">
                                <div id="slider-range"></div>
                                <p>
                                    <input type="text" id="amount"/>
                                    <button className="btn hvr-hover" type="submit">Filtrar</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



);

}

export default Shop;