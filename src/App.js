import { Provider } from 'react-redux';
import './App.css';
import { Counter } from './page';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
        <Counter/>
    </Provider>
  );
}

export default App;
