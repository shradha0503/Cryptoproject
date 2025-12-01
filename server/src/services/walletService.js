import { supabase } from '../config/supabase.js';

export const getOrCreateWallet = async (userId) => {
  const { data: wallet, error: fetchError } = await supabase
    .from('user_wallets')
    .select('*')
    .eq('user_id', userId)
    .maybeSingle();

  if (fetchError) {
    throw new Error('Failed to fetch wallet');
  }

  if (wallet) {
    return wallet;
  }

  const { data: newWallet, error: createError } = await supabase
    .from('user_wallets')
    .insert({ user_id: userId, balance_usd: 10000.00 })
    .select()
    .single();

  if (createError) {
    throw new Error('Failed to create wallet');
  }

  return newWallet;
};

export const updateWalletBalance = async (userId, newBalance) => {
  const { data, error } = await supabase
    .from('user_wallets')
    .update({ balance_usd: newBalance })
    .eq('user_id', userId)
    .select()
    .single();

  if (error) {
    throw new Error('Failed to update wallet balance');
  }

  return data;
};
