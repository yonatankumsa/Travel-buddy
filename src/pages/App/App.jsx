import './App.css';
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import AuthPage from '../AuthPage/AuthPage'
import NewOrderPage from '../NewOrderPage/NewOrderPage'
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage'
import NavBar from '../../components/NavBar/NavBar';



export default function App() {
  const [user, setUser] = useState(null)
  return (
    <main className="App">
      { user ?
      <>
      <NavBar />
      <Routes>
        {/* Route components in here */}
        <Route path="/orders" element={<OrderHistoryPage />} />
        <Route path="/orders/new" element={<NewOrderPage />} />
      </Routes>
      </>
      :
      <AuthPage />
    }
    </main>
  );
}