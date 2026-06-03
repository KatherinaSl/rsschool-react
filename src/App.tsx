import { Provider } from 'react-redux';
import './App.css';
import MainComponent from './components/main/mainComponent';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <MainComponent />
    </Provider>
  );
}

export default App;
