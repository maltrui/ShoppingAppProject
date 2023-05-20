import {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import AuthPage from '../AuthPage/AuthPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage'
function App() {
  const [user, setUser] = useState({});
  return (
    <main className="App">
        { user ?
        <Routes>
          <Route path="/orders/new" element={<NewOrderPage />}/>
        </Routes>
        :
        <AuthPage />
        }
    </main>
  );
}

export default App;
