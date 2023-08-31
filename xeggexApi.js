/*
	Xeggex API Class for NodeJS
	version: 0.1.1
*/

import got from 'got';
import Big from 'big.js';
	
class xeggexApi {
		
	constructor(apiKey = null, apiSecret = null, apiURL) 
	{
		if (apiURL === void 0)
			this.apiURL = 'https://api.xeggex.com/api/v2';
		else
			this.apiURL = apiURL;
	
		if (apiKey != null && apiSecret != null)
		{
	
			this.auth = "Basic " + Buffer.from(apiKey + ":" + apiSecret).toString("base64");
		
			this.options = {
						prefixUrl: this.apiURL,
						headers:{"Authorization" : this.auth}
					};
						
		}
		else
		{

			this.options = new Options({
								prefixUrl: this.apiURL,
							});
		
		}
		
		return this;
	}

    getHistoricalTrades(ticker, limit)
    {

        return new Promise((resolve, reject) => {
        
        	(async () => {

				try {
            		const response = await got.get(`historical_trades?ticker_id=${ticker}&limit=${limit}`, this.options).json();
					resolve(response);
				} catch (e) {
                    reject(e);
                }
            
            })();
            
        });

    }
    
    getMarkets()
    {

        return new Promise((resolve, reject) => {
        
        	(async () => {

				try {
            		const response = await got.get('market/getlist', this.options).json();
					resolve(response);
				} catch (e) {
                    reject(e);
                }
            
            })();
            
        });

    }

    getMarket(symbol)
    {

        return new Promise((resolve, reject) => {
        
        	(async () => {
        	
        		const encodedSymbol = encodeURIComponent(symbol);


				try {
            		const response = await got.get('market/getbysymbol/' + encodedSymbol, this.options).json();
					resolve(response);
				} catch (e) {
                    reject(e);
                }
            
            })();
            
        });

    }

    getMarketById(marketId)
    {

        return new Promise((resolve, reject) => {
        
        	(async () => {

				try {
            		const response = await got.get('market/getbyid/' + marketId, this.options).json();
					resolve(response);
				} catch (e) {
                    reject(e);
                }
            
            })();
            
        });

    }
    
    getAssets()
    {

        return new Promise((resolve, reject) => {
        
        	(async () => {

				try {
            		const response = await got.get('asset/getlist', this.options).json();
					resolve(response);
				} catch (e) {
                    reject(e);
                }
            
            })();
            
        });

    }

    getAsset(ticker)
    {

        return new Promise((resolve, reject) => {
        
        	(async () => {
        	
        		const encodedTicker = encodeURIComponent(ticker);


				try {
            		const response = await got.get('asset/getbyticker/' + encodedTicker, this.options).json();
					resolve(response);
				} catch (e) {
                    reject(e);
                }
            
            })();
            
        });

    }

    getAssetById(assetId)
    {

        return new Promise((resolve, reject) => {
        
        	(async () => {

				try {
            		const response = await got.get('asset/getbyid/' + assetId, this.options).json();
					resolve(response);
				} catch (e) {
                    reject(e);
                }
            
            })();
            
        });

    }
    
    getOrderBookBySymbol(symbol)
    {

        return new Promise((resolve, reject) => {
        
        	(async () => {
        	
        		const encodedSymbol = encodeURIComponent(symbol);


				try {
            		const response = await got.get('market/getorderbookbysymbol/' + encodedSymbol, this.options).json();
					resolve(response);
				} catch (e) {
                    reject(e);
                }
            
            })();
            
        });

    }

    getOrderBookByMarketId(marketId)
    {

        return new Promise((resolve, reject) => {
        
        	(async () => {

				try {
            		const response = await got.get('market/getorderbookbymarketid/' + marketId, this.options).json();
					resolve(response);
				} catch (e) {
                    reject(e);
                }
            
            })();
            
        });

    }
    
    getBalances()
    {

        return new Promise((resolve, reject) => {
        
        	(async () => {

				try {
            		const response = await got.get('balances', this.options).json();
					resolve(response);
				} catch (e) {
                    reject(e);
                }
            
            })();
            
        });

    }	

    getOpenOrders(symbol, limit = 50, skip = 0)
    {

        return new Promise((resolve, reject) => {
        
        	(async () => {

				try {
        			if (symbol == null) symbol = '';
					limit = parseInt(limit);
					skip = parseInt(skip);
				
            		const response = await got.get(`getorders?status=active&symbol=${symbol}&limit=${limit}&skip=${skip}`, this.options).json();
					resolve(response);
				} catch (e) {
                    reject(e);
                }
            
            })();
            
        });

    }	
    
    getFilledOrders(symbol, limit = 50, skip = 0)
    {

        return new Promise((resolve, reject) => {
        
        	(async () => {

				try {
        			if (symbol == null) symbol = '';
					limit = parseInt(limit);
					skip = parseInt(skip);
				
            		const response = await got.get(`getorders?status=filled&symbol=${symbol}&limit=${limit}&skip=${skip}`, this.options).json();
					resolve(response);
				} catch (e) {
                    reject(e);
                }
            
            })();
            
        });

    }	

    getCancelledOrders(symbol, limit = 50, skip = 0)
    {

        return new Promise((resolve, reject) => {
        
        	(async () => {

				try {
        			if (symbol == null) symbol = '';
					limit = parseInt(limit);
					skip = parseInt(skip);
				
            		const response = await got.get(`getorders?status=cancelled&symbol=${symbol}&limit=${limit}&skip=${skip}`, this.options).json();
					resolve(response);
				} catch (e) {
                    reject(e);
                }
            
            })();
            
        });

    }

    getTradeHistory(symbol, limit = 50, skip = 0)
    {

        return new Promise((resolve, reject) => {
        
        	(async () => {

				try {
        			if (symbol == null) symbol = '';
					limit = parseInt(limit);
					skip = parseInt(skip);
				
            		const response = await got.get(`gettrades?symbol=${symbol}&limit=${limit}&skip=${skip}`, this.options).json();
					resolve(response);
				} catch (e) {
                    reject(e);
                }
            
            })();
            
        });

    }

    cancelOrder(orderid)
    {

        return new Promise((resolve, reject) => {
        
        	(async () => {

				try {
            		const response = await got.post('cancelorder', {...this.options, json: {id: orderid}}).json();
					resolve(response);
				} catch (e) {
                    reject(e);
                }
            
            })();
            
        });

    }

    cancelAllOrders(symbol, side)
    {

        return new Promise((resolve, reject) => {
        
        	(async () => {

				try {
            		const response = await got.post('cancelallorders', {...this.options, json: {symbol: symbol, side: side}}).json();
					resolve(response);
				} catch (e) {
                    reject(e);
                }
            
            })();
            
        });

    }
    
    createLimitOrder(symbol, side, quantity, price, userProvidedId = null, strictValidate = false)
    {

        return new Promise((resolve, reject) => {
        
        	(async () => {

				try {
            		const response = await got.post('createorder', {...this.options, json: {symbol: symbol, side: side, quantity: quantity, type: 'limit', price: price, userProvidedId: userProvidedId, strictValidate: strictValidate}}).json();
					resolve(response);
				} catch (e) {
                    reject(e);
                }
            
            })();
            
        });

    }

    createMarketOrder(symbol, side, quantity, userProvidedId = null, strictValidate = false)
    {

        return new Promise((resolve, reject) => {
        
        	(async () => {

				try {
            		const response = await got.post('createorder', {...this.options, json: {symbol: symbol, side: side, quantity: quantity, type: 'market', userProvidedId: userProvidedId, strictValidate: strictValidate}}).json();
					resolve(response);
				} catch (e) {
                    reject(e);
                }
            
            })();
            
        });

    }
    
};

export default xeggexApi;
