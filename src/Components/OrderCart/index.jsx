import { useContext } from "react"
import { MdClose } from "react-icons/md"
import { ShoppingCartContext } from "../../Context"

const OrderCart = ({ id, title, imgURL, price, amount }) => {

  const { cartProducts, setCartProducts, count, setCount } = useContext(ShoppingCartContext)
  const removeProduct = (id) => {
    // Buscar el producto en el carrito por su id
    const productToRemove = cartProducts.find(product => product.id === id);
  
    // Si el producto existe en el carrito
    if (productToRemove) {
      // Restar la cantidad del producto que se va a eliminar al contador total
      setCount(count => count - productToRemove.amount);
  
      // Filtrar el carrito para eliminar el producto que tiene el mismo id
      const updatedCartProducts = cartProducts.filter(product => product.id !== id);
  
      // Actualizar el estado del carrito con el nuevo array sin el producto eliminado
      setCartProducts(updatedCartProducts);
    }
  };

  return (
    <div className="flex items-center justify-between w-11/12 h-24 my-2 mx-auto rounded-2xl">
      <div className=" flex">
        <figure className="bg-white h-16 aspect-square ml-4 rounded-lg">
          <img src={imgURL} alt={title} />
        </figure>
        <div><p className="ml-4 text-sm font-light">{title}</p>
          <p className="text-xs ml-4 mt-1 font-normal">Cantidad: {amount}</p>
        </div>
      </div>
      <div className="flex justify-between flex-col-reverse items-end  h-16">
        <p className="font-bold mr-4">{price}</p>
        <MdClose className='cursor-pointer rounded-full mr-4' onClick={() => {
          removeProduct(id)
        }} />
      </div>
    </div>
  )
}
export { OrderCart }