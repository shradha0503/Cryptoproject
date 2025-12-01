import { supabase } from '../config/supabase.js';

export const createTransaction = async (userId, transactionType, cryptoSymbol, amount, pricePerUnit, totalUsd) => {
  const { data, error } = await supabase
    .from('transactions')
    .insert({
      user_id: userId,
      transaction_type: transactionType,
      crypto_symbol: cryptoSymbol,
      amount,
      price_per_unit: pricePerUnit,
      total_usd: totalUsd
    })
    .select()
    .single();

  if (error) {
    throw new Error('Failed to create transaction');
  }

  return data;
};

export const getTransactions = async (userId, limit = 50) => {
  const { data, error } = await supabase
    .from('transactions')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) {
    throw new Error('Failed to fetch transactions');
  }

  return data || [];
};
