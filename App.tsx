
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchInitialData, simulateUpdates } from './store/cryptoSlice';
import { RootState } from './store/store';
import CryptoTable from './components/CryptoTable';

export default function App() {
  const dispatch = useDispatch();
  const assets = useSelector((state: RootState) => state.crypto.assets);

  useEffect(() => {
    dispatch(fetchInitialData());
    const interval = setInterval(() => {
      dispatch(simulateUpdates());
    }, 1500);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">📈 Real-Time Crypto Tracker</h1>
      <CryptoTable assets={assets} />
    </div>
  );
}
