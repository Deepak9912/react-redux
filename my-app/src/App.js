import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { uiActions } from './components/store/ui-slice';
import Notification from './components/UI/Notification';

function App() {
  const dispatch = useDispatch()
  //to useSelector we need to pass a function which receives redux state
  // we should return the data which we wanna use in this component
  //the function is executed by redux
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.notification);
  //whenever redux store change, below component is executed, and we get latest state
  useEffect(() => {
    //Post request will post the data in list
    //Put request will override the data
    const sendCartData = async () => {
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'sending...',
        message: 'sending cart data',
      }));
      const response = await fetch('https://food-order-46518-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }

      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success...',
        message: 'Sent cart data successfully!',
      }));

    };
    sendCartData().catch((error) => {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error...',
        message: 'Sent cart data failed!',
      }));
    });
  }, [cart, dispatch]);


  return (
    <Fragment>
      {notification && <Notification
        status={notification.status}
        title={notification.title}
        message={notification.message} />
      }
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
