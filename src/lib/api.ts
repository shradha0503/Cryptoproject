import { supabase } from './supabase';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const getAuthToken = async () => {
  const { data: { session } } = await supabase.auth.getSession();
  return session?.access_token;
};

export const api = {
  async buyCrypto(cryptoSymbol: string, amount: number) {
    const token = await getAuthToken();
    const response = await fetch(`${API_BASE_URL}/api/trade/buy`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ cryptoSymbol, amount })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to buy crypto');
    }

    return response.json();
  },

  async sellCrypto(cryptoSymbol: string, amount: number) {
    const token = await getAuthToken();
    const response = await fetch(`${API_BASE_URL}/api/trade/sell`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ cryptoSymbol, amount })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to sell crypto');
    }

    return response.json();
  },

  async getWallet() {
    const token = await getAuthToken();
    const response = await fetch(`${API_BASE_URL}/api/wallet`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch wallet');
    }

    return response.json();
  },

  async getPortfolio() {
    const token = await getAuthToken();
    const response = await fetch(`${API_BASE_URL}/api/wallet/portfolio`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch portfolio');
    }

    return response.json();
  }
};
