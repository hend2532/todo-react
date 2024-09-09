import Card from "./Card";
import pizza from "./image/pizza2.jpg"
import berger from "./image/borger2.webp"
import shawerma from "./image/shawerma2.jpg"
import ChooseSize from "./ChoseSize";
function Product (){
    const data=[
        {   
            id:1,
            name:"Pizza",
            price:25,
            img:pizza,
        },
        {   
            id:2,
            name:"Berger",
            price:30,
            img:berger,
        },
        {   
            id:3,
            name:"Shawerma",
            price:35,
            img: shawerma
        },
    ]
    return(
        <>
        <div className="product">
        {
            data.map((el)=>(
                <Card 
                // img={el.img} name={el.name} price={el.price} 
                product={el}
                key={el.id}
                />
            ))
        }
        <ChooseSize/>
        </div>
        <div className="add">
            <form>
                <label>name</label>
                <input type="text" placeholder="Food name..."/>
                <label>select image</label>
                <input type="text" placeholder="choose image..."/>
                
                <button>Add</button>
            </form>
        </div>
        </>
    )
}
export default Product;