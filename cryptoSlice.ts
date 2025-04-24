
import { createSlice } from '@reduxjs/toolkit';
import { sampleAssets } from '../assets/cryptoData';

const getRandomFloat = (min: number, max: number) =>
  parseFloat((Math.random() * (max - min) + min).toFixed(2));

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    assets: sampleAssets,
  },
  reducers: {
    fetchInitialData: (state) => {
      state.assets = sampleAssets;
    },
    simulateUpdates: (state) => {
      state.assets = state.assets.map((asset) => ({
        ...asset,
        price: parseFloat((asset.price * getRandomFloat(0.98, 1.02)).toFixed(2)),
        change1h: getRandomFloat(-1, 1),
        change24h: getRandomFloat(-3, 3),
        volume24h: parseFloat((asset.volume24h * getRandomFloat(0.95, 1.05)).toFixed(2)),
      }));
    },
  },
});

export const { fetchInitialData, simulateUpdates } = cryptoSlice.actions;
export default cryptoSlice.reducer;
