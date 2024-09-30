import { createContext, useState } from 'react';

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {

  //increment
  const [count, setCount] = useState(0);

  //open / close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => {
    setIsProductDetailOpen(true);
  };
  const closeProductDetail = () => {
    setIsProductDetailOpen(false);
  };

  //toggle 
  const [isProductCartOpen, setIsProductCartOpen] = useState(false);
  const openProductCart = () => {
    setIsProductCartOpen(true)
  }
  const closeProductCart = () => {
    setIsProductCartOpen(false)
  }

  //show product
  const [productToShow, setProductToShow] = useState({})

  //cart products
  const [cartProducts, setCartProducts] = useState([])

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        openProductCart,
        isProductCartOpen,
        closeProductCart,
        setIsProductCartOpen
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContext, ShoppingCartProvider };
