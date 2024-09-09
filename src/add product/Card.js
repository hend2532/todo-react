function Card (props){
    const {name,price,img}=props.product
    return(
        <div className="card">
            <img src={img} alt={name}/>
            <div>{name}</div>
            <div className="price">$ {price}</div>
            <button>select</button>
        </div>
    )
}
export default Card;