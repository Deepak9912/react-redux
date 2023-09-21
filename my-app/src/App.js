import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  //to useSelector we need to pass a function which receives redux state
  // we should return the data which we wanna use in this component
  //the function is executed by redux
  const showCart = useSelector(state => state.ui.cartIsVisible);
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
