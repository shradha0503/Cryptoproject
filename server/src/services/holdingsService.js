import { supabase } from '../config/supabase.js';

export const getHoldings = async (userId) => {
  const { data, error } = await supabase
    .from('crypto_holdings')
    .select('*')
    .eq('user_id', userId);

  if (error) {
    throw new Error('Failed to fetch holdings');
  }

  return data || [];
};

export const getHolding = async (userId, cryptoSymbol) => {
  const { data, error } = await supabase
    .from('crypto_holdings')
    .select('*')
    .eq('user_id', userId)
    .eq('crypto_symbol', cryptoSymbol)
    .maybeSingle();

  if (error) {
    throw new Error('Failed to fetch holding');
  }

  return data;
};

export const updateHolding = async (userId, cryptoSymbol, amount, averageBuyPrice) => {
  const existing = await getHolding(userId, cryptoSymbol);

  if (existing) {
    if (amount <= 0) {
      const { error } = await supabase
        .from('crypto_holdings')
        .delete()
        .eq('user_id', userId)
        .eq('crypto_symbol', cryptoSymbol);

      if (error) {
        throw new Error('Failed to delete holding');
      }
      return null;
    }

    const { data, error } = await supabase
      .from('crypto_holdings')
      .update({ amount, average_buy_price: averageBuyPrice })
      .eq('user_id', userId)
      .eq('crypto_symbol', cryptoSymbol)
      .select()
      .single();

    if (error) {
      throw new Error('Failed to update holding');
    }
    return data;
  } else {
    const { data, error } = await supabase
      .from('crypto_holdings')
      .insert({
        user_id: userId,
        crypto_symbol: cryptoSymbol,
        amount,
        average_buy_price: averageBuyPrice
      })
      .select()
      .single();

    if (error) {
      throw new Error('Failed to create holding');
    }
    return data;
  }
};
