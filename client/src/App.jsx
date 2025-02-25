import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

import AppStore from './features/cart/AppStore';
import { Provider } from 'react-redux';

function App() {
  return (
    <>
      <Provider store={AppStore}>
        <Navbar />
        <Outlet></Outlet>
      </Provider>
    </>
  );
}

export default App;
