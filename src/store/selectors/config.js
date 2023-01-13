import { createSelector } from 'reselect';

// Returns the "config" state branch
export const getConfig = state => state.config;

export const getCoinSymbol = state =>
  createSelector(getConfig, configData => configData.chain.symbol);

export const getBuyerProxyPort = state => state.config.chain.buyerProxyPort;

export const getSellerProxyPort = state => state.config.chain.sellerProxyPort;