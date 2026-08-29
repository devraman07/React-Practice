import { FaLaptop } from "react-icons/fa";

const Products = () => {
  
  const product = {
    name : "laptop",
    price : "1200",
    avaliabiity : "In stock",
    icon : <FaLaptop />
  }

  return (
    <div>
        <h3> Product name is :{product.name} {product.icon} </h3>
        <h3>Product Price is : {product.price}</h3>
        <h3>product avaliability is : {product.avaliabiity}</h3>
    </div>
  )
}

export default Products