function ItemListCointeiner (props) { 
    return (
        <div className="card w-75">
        <img  className="card-img-top"  src= {props.img} alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{props.titulo}</h5>
          <p className="card-text">{props.descripcion}</p>
          <h1 className="card-text">{props.precio}</h1>
          <a href="#" className="btn btn-primary">Agregar al carrito</a>
        </div>
      </div>
    )
}

export default ItemListCointeiner;