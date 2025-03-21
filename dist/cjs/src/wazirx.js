'use strict';

var wazirx$1 = require('./abstract/wazirx.js');
var errors = require('./base/errors.js');
var Precise = require('./base/Precise.js');
var number = require('./base/functions/number.js');
var sha256 = require('./static_dependencies/noble-hashes/sha256.js');

// ----------------------------------------------------------------------------
/**
 * @class wazirx
 * @augments Exchange
 */
class wazirx extends wazirx$1 {
    describe() {
        return this.deepExtend(super.describe(), {
            'id': 'wazirx',
            'name': 'WazirX',
            'countries': ['IN'],
            'version': 'v2',
            'rateLimit': 1000,
            'pro': true,
            'has': {
                'CORS': false,
                'spot': true,
                'margin': false,
                'swap': false,
                'future': false,
                'option': false,
                'addMargin': false,
                'cancelAllOrders': true,
                'cancelOrder': true,
                'closeAllPositions': false,
                'closePosition': false,
                'createOrder': true,
                'createReduceOnlyOrder': false,
                'createStopLimitOrder': true,
                'createStopMarketOrder': true,
                'createStopOrder': true,
                'fetchBalance': true,
                'fetchBidsAsks': false,
                'fetchBorrowInterest': false,
                'fetchBorrowRate': false,
                'fetchBorrowRateHistories': false,
                'fetchBorrowRateHistory': false,
                'fetchBorrowRates': false,
                'fetchBorrowRatesPerSymbol': false,
                'fetchClosedOrders': false,
                'fetchCrossBorrowRate': false,
                'fetchCrossBorrowRates': false,
                'fetchCurrencies': true,
                'fetchDepositAddress': true,
                'fetchDepositAddresses': false,
                'fetchDepositAddressesByNetwork': false,
                'fetchDeposits': true,
                'fetchDepositsWithdrawals': false,
                'fetchFundingHistory': false,
                'fetchFundingInterval': false,
                'fetchFundingIntervals': false,
                'fetchFundingRate': false,
                'fetchFundingRateHistory': false,
                'fetchFundingRates': false,
                'fetchGreeks': false,
                'fetchIndexOHLCV': false,
                'fetchIsolatedBorrowRate': false,
                'fetchIsolatedBorrowRates': false,
                'fetchIsolatedPositions': false,
                'fetchLeverage': false,
                'fetchLeverages': false,
                'fetchLeverageTiers': false,
                'fetchLiquidations': false,
                'fetchMarginAdjustmentHistory': false,
                'fetchMarginMode': false,
                'fetchMarginModes': false,
                'fetchMarketLeverageTiers': false,
                'fetchMarkets': true,
                'fetchMarkOHLCV': false,
                'fetchMarkPrices': false,
                'fetchMyLiquidations': false,
                'fetchMySettlementHistory': false,
                'fetchMyTrades': false,
                'fetchOHLCV': true,
                'fetchOpenInterest': false,
                'fetchOpenInterestHistory': false,
                'fetchOpenOrders': true,
                'fetchOption': false,
                'fetchOptionChain': false,
                'fetchOrder': false,
                'fetchOrderBook': true,
                'fetchOrders': true,
                'fetchPosition': false,
                'fetchPositionHistory': false,
                'fetchPositionMode': false,
                'fetchPositions': false,
                'fetchPositionsForSymbol': false,
                'fetchPositionsHistory': false,
                'fetchPositionsRisk': false,
                'fetchPremiumIndexOHLCV': false,
                'fetchSettlementHistory': false,
                'fetchStatus': true,
                'fetchTicker': true,
                'fetchTickers': true,
                'fetchTime': true,
                'fetchTrades': true,
                'fetchTradingFee': false,
                'fetchTradingFees': false,
                'fetchTransactionFees': false,
                'fetchTransactions': false,
                'fetchTransfers': false,
                'fetchUnderlyingAssets': false,
                'fetchVolatilityHistory': false,
                'fetchWithdrawals': true,
                'reduceMargin': false,
                'repayCrossMargin': false,
                'repayIsolatedMargin': false,
                'setLeverage': false,
                'setMargin': false,
                'setMarginMode': false,
                'setPositionMode': false,
                'transfer': false,
                'withdraw': false,
            },
            'urls': {
                'logo': 'https://user-images.githubusercontent.com/1294454/148647666-c109c20b-f8ac-472f-91c3-5f658cb90f49.jpeg',
                'api': {
                    'rest': 'https://api.wazirx.com/sapi/v1',
                },
                'www': 'https://wazirx.com',
                'doc': 'https://docs.wazirx.com/#public-rest-api-for-wazirx',
                'fees': 'https://wazirx.com/fees',
                'referral': 'https://wazirx.com/invite/k7rrnks5',
            },
            'api': {
                'public': {
                    'get': {
                        'exchangeInfo': 1,
                        'depth': 0.5,
                        'ping': 1,
                        'systemStatus': 1,
                        'tickers/24hr': 1,
                        'ticker/24hr': 1,
                        'time': 1,
                        'trades': 1,
                        'klines': 1,
                    },
                },
                'private': {
                    'get': {
                        'account': 1,
                        'allOrders': 1,
                        'funds': 1,
                        'historicalTrades': 1,
                        'openOrders': 1,
                        'order': 0.5,
                        'myTrades': 0.5,
                        'coins': 12,
                        'crypto/withdraws': 12,
                        'crypto/deposits/address': 60,
                        'sub_account/fund_transfer/history': 1,
                        'sub_account/accounts': 1,
                    },
                    'post': {
                        'order': 0.1,
                        'order/test': 0.5,
                    },
                    'delete': {
                        'order': 0.1,
                        'openOrders': 1,
                    },
                },
            },
            'fees': {
                'WRX': { 'maker': this.parseNumber('0.0'), 'taker': this.parseNumber('0.0') },
            },
            'precisionMode': number.TICK_SIZE,
            'exceptions': {
                'exact': {
                    '-1121': errors.BadSymbol,
                    '1999': errors.BadRequest,
                    '2002': errors.InsufficientFunds,
                    '2005': errors.BadRequest,
                    '2078': errors.PermissionDenied,
                    '2098': errors.BadRequest,
                    '2031': errors.InvalidOrder,
                    '2113': errors.BadRequest,
                    '2115': errors.BadRequest,
                    '2136': errors.RateLimitExceeded,
                    '94001': errors.InvalidOrder, // {"code":94001,"message":"Stop price not found."}
                },
            },
            'timeframes': {
                '1m': '1m',
                '5m': '5m',
                '30m': '30m',
                '1h': '1h',
                '2h': '2h',
                '4h': '4h',
                '6h': '6h',
                '12h': '12h',
                '1d': '1d',
                '1w': '1w',
            },
            'options': {
                // 'fetchTradesMethod': 'privateGetHistoricalTrades',
                'recvWindow': 10000,
                'networks': {
                // You can get network from fetchCurrencies
                },
            },
            'features': {
                'spot': {
                    'sandbox': false,
                    'createOrder': {
                        'marginMode': false,
                        'triggerPrice': true,
                        'triggerDirection': false,
                        'triggerPriceType': undefined,
                        'stopLossPrice': false,
                        'takeProfitPrice': false,
                        'attachedStopLossTakeProfit': undefined,
                        'timeInForce': {
                            'IOC': false,
                            'FOK': false,
                            'PO': false,
                            'GTD': false,
                        },
                        'hedged': false,
                        'trailing': false,
                        'leverage': false,
                        'marketBuyByCost': false,
                        'marketBuyRequiresPrice': false,
                        'selfTradePrevention': false,
                        'iceberg': false,
                    },
                    'createOrders': undefined,
                    'fetchMyTrades': undefined,
                    'fetchOrder': undefined,
                    'fetchOpenOrders': {
                        'marginMode': false,
                        'limit': undefined,
                        'trigger': false,
                        'trailing': false,
                        'symbolRequired': true,
                    },
                    'fetchOrders': {
                        'marginMode': false,
                        'limit': 1000,
                        'daysBack': 100000,
                        'untilDays': 100000,
                        'trigger': false,
                        'trailing': false,
                        'symbolRequired': true,
                    },
                    'fetchClosedOrders': undefined,
                    'fetchOHLCV': {
                        'limit': 2000,
                    },
                },
                'swap': {
                    'linear': undefined,
                    'inverse': undefined,
                },
                'future': {
                    'linear': undefined,
                    'inverse': undefined,
                },
            },
        });
    }
    /**
     * @method
     * @name wazirx#fetchMarkets
     * @see https://docs.wazirx.com/#exchange-info
     * @description retrieves data on all markets for wazirx
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object[]} an array of objects representing market data
     */
    async fetchMarkets(params = {}) {
        const response = await this.publicGetExchangeInfo(params);
        //
        // {
        //     "timezone":"UTC",
        //     "serverTime":1641336850932,
        //     "symbols":[
        //     {
        //         "symbol":"btcinr",
        //         "status":"trading",
        //         "baseAsset":"btc",
        //         "quoteAsset":"inr",
        //         "baseAssetPrecision":5,
        //         "quoteAssetPrecision":0,
        //         "orderTypes":[
        //             "limit",
        //             "stop_limit"
        //         ],
        //         "isSpotTradingAllowed":true,
        //         "filters":[
        //             {
        //                 "filterType":"PRICE_FILTER",
        //                 "minPrice":"1",
        //                 "tickSize":"1"
        //             }
        //         ]
        //     },
        //
        const markets = this.safeValue(response, 'symbols', []);
        return this.parseMarkets(markets);
    }
    parseMarket(market) {
        const id = this.safeString(market, 'symbol');
        const baseId = this.safeString(market, 'baseAsset');
        const quoteId = this.safeString(market, 'quoteAsset');
        const base = this.safeCurrencyCode(baseId);
        const quote = this.safeCurrencyCode(quoteId);
        const isSpot = this.safeValue(market, 'isSpotTradingAllowed');
        const filters = this.safeValue(market, 'filters');
        let minPrice = undefined;
        for (let j = 0; j < filters.length; j++) {
            const filter = filters[j];
            const filterType = this.safeString(filter, 'filterType');
            if (filterType === 'PRICE_FILTER') {
                minPrice = this.safeNumber(filter, 'minPrice');
            }
        }
        const fee = this.safeValue(this.fees, quote, {});
        let takerString = this.safeString(fee, 'taker', '0.2');
        takerString = Precise["default"].stringDiv(takerString, '100');
        let makerString = this.safeString(fee, 'maker', '0.2');
        makerString = Precise["default"].stringDiv(makerString, '100');
        const status = this.safeString(market, 'status');
        return {
            'id': id,
            'symbol': base + '/' + quote,
            'base': base,
            'quote': quote,
            'settle': undefined,
            'baseId': baseId,
            'quoteId': quoteId,
            'settleId': undefined,
            'type': 'spot',
            'spot': isSpot,
            'margin': false,
            'swap': false,
            'future': false,
            'option': false,
            'active': (status === 'trading'),
            'contract': false,
            'linear': undefined,
            'inverse': undefined,
            'taker': this.parseNumber(takerString),
            'maker': this.parseNumber(makerString),
            'contractSize': undefined,
            'expiry': undefined,
            'expiryDatetime': undefined,
            'strike': undefined,
            'optionType': undefined,
            'precision': {
                'amount': this.parseNumber(this.parsePrecision(this.safeString(market, 'baseAssetPrecision'))),
                'price': this.parseNumber(this.parsePrecision(this.safeString(market, 'quoteAssetPrecision'))),
            },
            'limits': {
                'leverage': {
                    'min': undefined,
                    'max': undefined,
                },
                'price': {
                    'min': minPrice,
                    'max': undefined,
                },
                'amount': {
                    'min': undefined,
                    'max': undefined,
                },
                'cost': {
                    'min': undefined,
                    'max': undefined,
                },
            },
            'created': undefined,
            'info': market,
        };
    }
    /**
     * @method
     * @name wazirx#fetchOHLCV
     * @see https://docs.wazirx.com/#kline-candlestick-data
     * @description fetches historical candlestick data containing the open, high, low, and close price, and the volume of a market
     * @param {string} symbol unified symbol of the market to fetch OHLCV data for
     * @param {string} timeframe the length of time each candle represents. Available values [1m,5m,15m,30m,1h,2h,4h,6h,12h,1d,1w]
     * @param {int} [since] timestamp in ms of the earliest candle to fetch
     * @param {int} [limit] the maximum amount of candles to fetch
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @param {int} [params.until] timestamp in s of the latest candle to fetch
     * @returns {int[][]} A list of candles ordered as timestamp, open, high, low, close, volume
     */
    async fetchOHLCV(symbol, timeframe = '1m', since = undefined, limit = undefined, params = {}) {
        await this.loadMarkets();
        const market = this.market(symbol);
        const request = {
            'symbol': market['id'],
            'interval': this.safeString(this.timeframes, timeframe, timeframe),
        };
        if (limit !== undefined) {
            request['limit'] = Math.min(limit, 2000);
        }
        const until = this.safeInteger(params, 'until');
        params = this.omit(params, ['until']);
        if (since !== undefined) {
            request['startTime'] = this.parseToInt(since / 1000);
        }
        if (until !== undefined) {
            request['endTime'] = until;
        }
        const response = await this.publicGetKlines(this.extend(request, params));
        //
        //    [
        //        [1669014360,1402001,1402001,1402001,1402001,0],
        //        ...
        //    ]
        //
        return this.parseOHLCVs(response, market, timeframe, since, limit);
    }
    parseOHLCV(ohlcv, market = undefined) {
        //
        //    [1669014300,1402001,1402001,1402001,1402001,0],
        //
        return [
            this.safeTimestamp(ohlcv, 0),
            this.safeNumber(ohlcv, 1),
            this.safeNumber(ohlcv, 2),
            this.safeNumber(ohlcv, 3),
            this.safeNumber(ohlcv, 4),
            this.safeNumber(ohlcv, 5),
        ];
    }
    /**
     * @method
     * @name wazirx#fetchOrderBook
     * @see https://docs.wazirx.com/#order-book
     * @description fetches information on open orders with bid (buy) and ask (sell) prices, volumes and other data
     * @param {string} symbol unified symbol of the market to fetch the order book for
     * @param {int} [limit] the maximum amount of order book entries to return
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object} A dictionary of [order book structures]{@link https://docs.ccxt.com/#/?id=order-book-structure} indexed by market symbols
     */
    async fetchOrderBook(symbol, limit = undefined, params = {}) {
        await this.loadMarkets();
        const market = this.market(symbol);
        const request = {
            'symbol': market['id'],
        };
        if (limit !== undefined) {
            request['limit'] = limit; // [1, 5, 10, 20, 50, 100, 500, 1000]
        }
        const response = await this.publicGetDepth(this.extend(request, params));
        //
        //     {
        //          "timestamp":1559561187,
        //          "asks":[
        //                     ["8540.0","1.5"],
        //                     ["8541.0","0.0042"]
        //                 ],
        //          "bids":[
        //                     ["8530.0","0.8814"],
        //                     ["8524.0","1.4"]
        //                 ]
        //      }
        //
        const timestamp = this.safeInteger(response, 'timestamp');
        return this.parseOrderBook(response, symbol, timestamp);
    }
    /**
     * @method
     * @name wazirx#fetchTicker
     * @see https://docs.wazirx.com/#24hr-ticker-price-change-statistics
     * @description fetches a price ticker, a statistical calculation with the information calculated over the past 24 hours for a specific market
     * @param {string} symbol unified symbol of the market to fetch the ticker for
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object} a [ticker structure]{@link https://docs.ccxt.com/#/?id=ticker-structure}
     */
    async fetchTicker(symbol, params = {}) {
        await this.loadMarkets();
        const market = this.market(symbol);
        const request = {
            'symbol': market['id'],
        };
        const ticker = await this.publicGetTicker24hr(this.extend(request, params));
        //
        // {
        //     "symbol":"wrxinr",
        //     "baseAsset":"wrx",
        //     "quoteAsset":"inr",
        //     "openPrice":"94.77",
        //     "lowPrice":"92.7",
        //     "highPrice":"95.17",
        //     "lastPrice":"94.03",
        //     "volume":"1118700.0",
        //     "bidPrice":"94.02",
        //     "askPrice":"94.03",
        //     "at":1641382455000
        // }
        //
        return this.parseTicker(ticker, market);
    }
    /**
     * @method
     * @name wazirx#fetchTickers
     * @see https://docs.wazirx.com/#24hr-tickers-price-change-statistics
     * @description fetches price tickers for multiple markets, statistical information calculated over the past 24 hours for each market
     * @param {string[]|undefined} symbols unified symbols of the markets to fetch the ticker for, all market tickers are returned if not assigned
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object} a dictionary of [ticker structures]{@link https://docs.ccxt.com/#/?id=ticker-structure}
     */
    async fetchTickers(symbols = undefined, params = {}) {
        await this.loadMarkets();
        const tickers = await this.publicGetTickers24hr();
        //
        // [
        //     {
        //        "symbol":"btcinr",
        //        "baseAsset":"btc",
        //        "quoteAsset":"inr",
        //        "openPrice":"3698486",
        //        "lowPrice":"3641155.0",
        //        "highPrice":"3767999.0",
        //        "lastPrice":"3713212.0",
        //        "volume":"254.11582",
        //        "bidPrice":"3715021.0",
        //        "askPrice":"3715022.0",
        //     }
        //     ...
        // ]
        //
        const result = {};
        for (let i = 0; i < tickers.length; i++) {
            const ticker = tickers[i];
            const parsedTicker = this.parseTicker(ticker);
            const symbol = parsedTicker['symbol'];
            result[symbol] = parsedTicker;
        }
        return this.filterByArrayTickers(result, 'symbol', symbols);
    }
    /**
     * @method
     * @name wazirx#fetchTrades
     * @see https://docs.wazirx.com/#recent-trades-list
     * @description get the list of most recent trades for a particular symbol
     * @param {string} symbol unified symbol of the market to fetch trades for
     * @param {int} [since] timestamp in ms of the earliest trade to fetch
     * @param {int} [limit] the maximum amount of trades to fetch
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {Trade[]} a list of [trade structures]{@link https://docs.ccxt.com/#/?id=public-trades}
     */
    async fetchTrades(symbol, since = undefined, limit = undefined, params = {}) {
        await this.loadMarkets();
        const market = this.market(symbol);
        const request = {
            'symbol': market['id'],
        };
        if (limit !== undefined) {
            request['limit'] = Math.min(limit, 1000); // Default 500; max 1000.
        }
        const method = this.safeString(this.options, 'fetchTradesMethod', 'publicGetTrades');
        let response = undefined;
        if (method === 'privateGetHistoricalTrades') {
            response = await this.privateGetHistoricalTrades(this.extend(request, params));
        }
        else {
            response = await this.publicGetTrades(this.extend(request, params));
        }
        // [
        //     {
        //         "id":322307791,
        //         "price":"93.7",
        //         "qty":"0.7",
        //         "quoteQty":"65.59",
        //         "time":1641386701000,
        //         "isBuyerMaker":false
        //     },
        // ]
        return this.parseTrades(response, market, since, limit);
    }
    parseTrade(trade, market = undefined) {
        //
        //     {
        //         "id":322307791,
        //         "price":"93.7",
        //         "qty":"0.7",
        //         "quoteQty":"65.59",
        //         "time":1641386701000,
        //         "isBuyerMaker":false
        //     }
        //
        const id = this.safeString(trade, 'id');
        const timestamp = this.safeInteger(trade, 'time');
        const datetime = this.iso8601(timestamp);
        market = this.safeMarket(undefined, market);
        const isBuyerMaker = this.safeValue(trade, 'isBuyerMaker');
        const side = isBuyerMaker ? 'sell' : 'buy';
        const price = this.safeNumber(trade, 'price');
        const amount = this.safeNumber(trade, 'qty');
        const cost = this.safeNumber(trade, 'quoteQty');
        return this.safeTrade({
            'info': trade,
            'id': id,
            'timestamp': timestamp,
            'datetime': datetime,
            'symbol': market['symbol'],
            'order': id,
            'type': undefined,
            'side': side,
            'takerOrMaker': undefined,
            'price': price,
            'amount': amount,
            'cost': cost,
            'fee': undefined,
        }, market);
    }
    /**
     * @method
     * @name wazirx#fetchStatus
     * @see https://docs.wazirx.com/#system-status
     * @description the latest known information on the availability of the exchange API
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object} a [status structure]{@link https://docs.ccxt.com/#/?id=exchange-status-structure}
     */
    async fetchStatus(params = {}) {
        const response = await this.publicGetSystemStatus(params);
        //
        //     {
        //         "status":"normal", // normal, system maintenance
        //         "message":"System is running normally."
        //     }
        //
        const status = this.safeString(response, 'status');
        return {
            'status': (status === 'normal') ? 'ok' : 'maintenance',
            'updated': undefined,
            'eta': undefined,
            'url': undefined,
            'info': response,
        };
    }
    /**
     * @method
     * @name wazirx#fetchTime
     * @see https://docs.wazirx.com/#check-server-time
     * @description fetches the current integer timestamp in milliseconds from the exchange server
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {int} the current integer timestamp in milliseconds from the exchange server
     */
    async fetchTime(params = {}) {
        const response = await this.publicGetTime(params);
        //
        //     {
        //         "serverTime":1635467280514
        //     }
        //
        return this.safeInteger(response, 'serverTime');
    }
    parseTicker(ticker, market = undefined) {
        //
        //     {
        //        "symbol":"btcinr",
        //        "baseAsset":"btc",
        //        "quoteAsset":"inr",
        //        "openPrice":"3698486",
        //        "lowPrice":"3641155.0",
        //        "highPrice":"3767999.0",
        //        "lastPrice":"3713212.0",
        //        "volume":"254.11582", // base volume
        //        "bidPrice":"3715021.0",
        //        "askPrice":"3715022.0",
        //        "at":1641382455000 // only on fetchTicker
        //     }
        //
        const marketId = this.safeString(ticker, 'symbol');
        market = this.safeMarket(marketId, market);
        const symbol = market['symbol'];
        const last = this.safeString(ticker, 'lastPrice');
        const open = this.safeString(ticker, 'openPrice');
        const high = this.safeString(ticker, 'highPrice');
        const low = this.safeString(ticker, 'lowPrice');
        const baseVolume = this.safeString(ticker, 'volume');
        const bid = this.safeString(ticker, 'bidPrice');
        const ask = this.safeString(ticker, 'askPrice');
        const timestamp = this.safeInteger(ticker, 'at');
        return this.safeTicker({
            'symbol': symbol,
            'timestamp': timestamp,
            'datetime': this.iso8601(timestamp),
            'high': high,
            'low': low,
            'bid': bid,
            'bidVolume': undefined,
            'ask': ask,
            'askVolume': undefined,
            'vwap': undefined,
            'open': open,
            'close': last,
            'last': last,
            'previousClose': undefined,
            'change': undefined,
            'percentage': undefined,
            'average': undefined,
            'baseVolume': baseVolume,
            'quoteVolume': undefined,
            'info': ticker,
        }, market);
    }
    parseBalance(response) {
        const result = { 'info': response };
        for (let i = 0; i < response.length; i++) {
            const balance = response[i];
            const id = this.safeString(balance, 'asset');
            const code = this.safeCurrencyCode(id);
            const account = this.account();
            account['free'] = this.safeString(balance, 'free');
            account['used'] = this.safeString(balance, 'locked');
            result[code] = account;
        }
        return this.safeBalance(result);
    }
    /**
     * @method
     * @name wazirx#fetchBalance
     * @see https://docs.wazirx.com/#fund-details-user_data
     * @description query for balance and get the amount of funds available for trading or funds locked in orders
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object} a [balance structure]{@link https://docs.ccxt.com/#/?id=balance-structure}
     */
    async fetchBalance(params = {}) {
        await this.loadMarkets();
        const response = await this.privateGetFunds(params);
        //
        // [
        //       {
        //          "asset":"inr",
        //          "free":"0.0",
        //          "locked":"0.0"
        //       },
        // ]
        //
        return this.parseBalance(response);
    }
    /**
     * @method
     * @name wazirx#fetchOrders
     * @see https://docs.wazirx.com/#all-orders-user_data
     * @description fetches information on multiple orders made by the user
     * @param {string} symbol unified market symbol of the market orders were made in
     * @param {int} [since] the earliest time in ms to fetch orders for
     * @param {int} [limit] the maximum number of order structures to retrieve
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {Order[]} a list of [order structures]{@link https://docs.ccxt.com/#/?id=order-structure}
     */
    async fetchOrders(symbol = undefined, since = undefined, limit = undefined, params = {}) {
        if (symbol === undefined) {
            throw new errors.ArgumentsRequired(this.id + ' fetchOrders() requires a symbol argument');
        }
        await this.loadMarkets();
        const market = this.market(symbol);
        const request = {
            'symbol': market['id'],
        };
        if (since !== undefined) {
            request['startTime'] = since;
        }
        if (limit !== undefined) {
            request['limit'] = limit;
        }
        const response = await this.privateGetAllOrders(this.extend(request, params));
        //
        //   [
        //       {
        //           "id": 28,
        //           "symbol": "wrxinr",
        //           "price": "9293.0",
        //           "origQty": "10.0",
        //           "executedQty": "8.2",
        //           "status": "cancel",
        //           "type": "limit",
        //           "side": "sell",
        //           "createdTime": 1499827319559,
        //           "updatedTime": 1499827319559
        //       },
        //       {
        //           "id": 30,
        //           "symbol": "wrxinr",
        //           "price": "9293.0",
        //           "stopPrice": "9200.0",
        //           "origQty": "10.0",
        //           "executedQty": "0.0",
        //           "status": "cancel",
        //           "type": "stop_limit",
        //           "side": "sell",
        //           "createdTime": 1499827319559,
        //           "updatedTime": 1507725176595
        //       }
        //   ]
        //
        let orders = this.parseOrders(response, market, since, limit);
        orders = this.filterBy(orders, 'symbol', symbol);
        return orders;
    }
    /**
     * @method
     * @name wazirx#fetchOpenOrders
     * @see https://docs.wazirx.com/#current-open-orders-user_data
     * @description fetch all unfilled currently open orders
     * @param {string} symbol unified market symbol
     * @param {int} [since] the earliest time in ms to fetch open orders for
     * @param {int} [limit] the maximum number of  open orders structures to retrieve
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {Order[]} a list of [order structures]{@link https://docs.ccxt.com/#/?id=order-structure}
     */
    async fetchOpenOrders(symbol = undefined, since = undefined, limit = undefined, params = {}) {
        await this.loadMarkets();
        const request = {};
        let market = undefined;
        if (symbol !== undefined) {
            market = this.market(symbol);
            request['symbol'] = market['id'];
        }
        const response = await this.privateGetOpenOrders(this.extend(request, params));
        // [
        //     {
        //         "id": 28,
        //         "symbol": "wrxinr",
        //         "price": "9293.0",
        //         "origQty": "10.0",
        //         "executedQty": "8.2",
        //         "status": "cancel",
        //         "type": "limit",
        //         "side": "sell",
        //         "createdTime": 1499827319559,
        //         "updatedTime": 1499827319559
        //     },
        //     {
        //         "id": 30,
        //         "symbol": "wrxinr",
        //         "price": "9293.0",
        //         "stopPrice": "9200.0",
        //         "origQty": "10.0",
        //         "executedQty": "0.0",
        //         "status": "cancel",
        //         "type": "stop_limit",
        //         "side": "sell",
        //         "createdTime": 1499827319559,
        //         "updatedTime": 1507725176595
        //     }
        // ]
        const orders = this.parseOrders(response, market, since, limit);
        return orders;
    }
    /**
     * @method
     * @name wazirx#cancelAllOrders
     * @see https://docs.wazirx.com/#cancel-all-open-orders-on-a-symbol-trade
     * @description cancel all open orders in a market
     * @param {string} symbol unified market symbol of the market to cancel orders in
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object[]} a list of [order structures]{@link https://docs.ccxt.com/#/?id=order-structure}
     */
    async cancelAllOrders(symbol = undefined, params = {}) {
        if (symbol === undefined) {
            throw new errors.ArgumentsRequired(this.id + ' cancelAllOrders() requires a symbol argument');
        }
        await this.loadMarkets();
        const market = this.market(symbol);
        const request = {
            'symbol': market['id'],
        };
        const response = await this.privateDeleteOpenOrders(this.extend(request, params));
        //
        //    [
        //        {
        //            id: "4565421197",
        //            symbol: "adausdt",
        //            type: "limit",
        //            side: "buy",
        //            status: "wait",
        //            price: "0.41",
        //            origQty: "11.00",
        //            executedQty: "0.00",
        //            avgPrice: "0.00",
        //            createdTime: "1718089507000",
        //            updatedTime: "1718089507000",
        //            clientOrderId: "93d2a838-e272-405d-91e7-3a7bc6d3a003"
        //        }
        //    ]
        //
        return this.parseOrders(response);
    }
    /**
     * @method
     * @name wazirx#cancelOrder
     * @see https://docs.wazirx.com/#cancel-order-trade
     * @description cancels an open order
     * @param {string} id order id
     * @param {string} symbol unified symbol of the market the order was made in
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object} An [order structure]{@link https://docs.ccxt.com/#/?id=order-structure}
     */
    async cancelOrder(id, symbol = undefined, params = {}) {
        if (symbol === undefined) {
            throw new errors.ArgumentsRequired(this.id + ' cancelOrder() requires a symbol argument');
        }
        await this.loadMarkets();
        const market = this.market(symbol);
        const request = {
            'symbol': market['id'],
            'orderId': id,
        };
        const response = await this.privateDeleteOrder(this.extend(request, params));
        return this.parseOrder(response);
    }
    /**
     * @method
     * @name wazirx#createOrder
     * @see https://docs.wazirx.com/#new-order-trade
     * @description create a trade order
     * @param {string} symbol unified symbol of the market to create an order in
     * @param {string} type 'market' or 'limit'
     * @param {string} side 'buy' or 'sell'
     * @param {float} amount how much of currency you want to trade in units of base currency
     * @param {float} [price] the price at which the order is to be fulfilled, in units of the quote currency, ignored in market orders
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object} an [order structure]{@link https://docs.ccxt.com/#/?id=order-structure}
     */
    async createOrder(symbol, type, side, amount, price = undefined, params = {}) {
        type = type.toLowerCase();
        if ((type !== 'limit') && (type !== 'stop_limit')) {
            throw new errors.ExchangeError(this.id + ' createOrder() supports limit and stop_limit orders only');
        }
        if (price === undefined) {
            throw new errors.ExchangeError(this.id + ' createOrder() requires a price argument');
        }
        await this.loadMarkets();
        const market = this.market(symbol);
        const request = {
            'symbol': market['id'],
            'side': side,
            'quantity': amount,
            'type': 'limit',
        };
        request['price'] = this.priceToPrecision(symbol, price);
        const triggerPrice = this.safeString2(params, 'triggerPrice', 'stopPrice');
        if (triggerPrice !== undefined) {
            request['type'] = 'stop_limit';
            request['stopPrice'] = this.priceToPrecision(symbol, triggerPrice);
        }
        const response = await this.privatePostOrder(this.extend(request, params));
        // {
        //     "id": 28,
        //     "symbol": "wrxinr",
        //     "price": "9293.0",
        //     "origQty": "10.0",
        //     "executedQty": "8.2",
        //     "status": "wait",
        //     "type": "limit",
        //     "side": "sell",
        //     "createdTime": 1499827319559,
        //     "updatedTime": 1499827319559
        // }
        return this.parseOrder(response, market);
    }
    parseOrder(order, market = undefined) {
        //
        //    {
        //        "id": 1949417813,
        //        "symbol": "ltcusdt",
        //        "type": "limit",
        //        "side": "sell",
        //        "status": "done",
        //        "price": "146.2",
        //        "origQty": "0.05",
        //        "executedQty": "0.05",
        //        "avgPrice":  "0.00",
        //        "createdTime": 1641252564000,
        //        "updatedTime": 1641252564000
        //        "clientOrderId": "93d2a838-e272-405d-91e7-3a7bc6d3a003"
        //    }
        //
        const created = this.safeInteger(order, 'createdTime');
        const updated = this.safeInteger(order, 'updatedTime');
        const marketId = this.safeString(order, 'symbol');
        const symbol = this.safeSymbol(marketId, market);
        const amount = this.safeString(order, 'quantity');
        const filled = this.safeString(order, 'executedQty');
        const status = this.parseOrderStatus(this.safeString(order, 'status'));
        const id = this.safeString(order, 'id');
        const price = this.safeString(order, 'price');
        const type = this.safeStringLower(order, 'type');
        const side = this.safeStringLower(order, 'side');
        return this.safeOrder({
            'info': order,
            'id': id,
            'clientOrderId': this.safeString(order, 'clientOrderId'),
            'timestamp': created,
            'datetime': this.iso8601(created),
            'lastTradeTimestamp': updated,
            'status': status,
            'symbol': symbol,
            'type': type,
            'timeInForce': undefined,
            'postOnly': undefined,
            'side': side,
            'price': price,
            'amount': amount,
            'filled': filled,
            'remaining': undefined,
            'cost': undefined,
            'fee': undefined,
            'average': this.safeString(order, 'avgPrice'),
            'trades': [],
        }, market);
    }
    parseOrderStatus(status) {
        const statuses = {
            'wait': 'open',
            'done': 'closed',
            'cancel': 'canceled',
        };
        return this.safeString(statuses, status, status);
    }
    /**
     * @method
     * @name wazirx#fetchCurrencies
     * @description fetches all available currencies on an exchange
     * @see https://docs.wazirx.com/#all-coins-39-information-user_data
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object} an associative dictionary of currencies
     */
    async fetchCurrencies(params = {}) {
        if (!this.checkRequiredCredentials(false)) {
            return undefined;
        }
        const response = await this.privateGetCoins(params);
        //
        //     [
        //         {
        //             "currency": "btc",
        //             "name": "Bitcoin",
        //             "networkList": [
        //                 {
        //                     "addressRegex": "^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$|^(bc1)[0-9A-Za-z]{39,59}$",
        //                     "confirmations": 4,
        //                     "depositDesc": {
        //                         "description": ""
        //                     },
        //                     "depositDust": "0.00000001",
        //                     "depositEnable": true,
        //                     "disclaimer": "• \u003cb\u003eSend only using the Bitcoin network.\u003c/b\u003e Using any other network will result in loss of funds.\u003cbr/\u003e• \u003cb\u003eDeposit only BTC to this deposit address.\u003c/b\u003e Depositing any other asset will result in a loss of funds.\u003cbr/\u003e",
        //                     "fullName": null,
        //                     "hidden": {
        //                         "deposit": false,
        //                         "withdraw": false
        //                     },
        //                     "isDefault": true,
        //                     "maxWithdrawAmount": "3",
        //                     "minConfirm": 4,
        //                     "minWithdrawAmount": "0.003",
        //                     "name": "Bitcoin",
        //                     "network": "btc",
        //                     "order": 3,
        //                     "precision": 8,
        //                     "requestId": "6d67a13d-26f7-4941-9856-94eba4adfe78",
        //                     "shortName": "BTC",
        //                     "specialTip": "Please ensure to select \u003cb\u003eBitcoin\u003c/b\u003e network at sender's wallet.",
        //                     "withdrawConsent": {
        //                         "helpUrl": null,
        //                         "message": "I confirm that this withdrawal of crypto assets is being done to my own wallet, as specified above. I authorize you to share travel rule information with the destination wallet service provider wherever applicable."
        //                     },
        //                     "withdrawDesc": {
        //                         "description": ""
        //                     },
        //                     "withdrawEnable": true,
        //                     "withdrawFee": "0.0015"
        //                 }
        //             ],
        //             "rapidListed": false
        //         }
        //     ]
        //
        const result = {};
        for (let i = 0; i < response.length; i++) {
            const currency = response[i];
            const currencyId = this.safeString(currency, 'currency');
            const code = this.safeCurrencyCode(currencyId);
            const name = this.safeString(currency, 'name');
            const chains = this.safeList(currency, 'networkList', []);
            const networks = {};
            let minPrecision = undefined;
            let minWithdrawFeeString = undefined;
            let minWithdrawString = undefined;
            let maxWithdrawString = undefined;
            let minDepositString = undefined;
            let deposit = false;
            let withdraw = false;
            for (let j = 0; j < chains.length; j++) {
                const chain = chains[j];
                const networkId = this.safeString(chain, 'network');
                const networkCode = this.networkIdToCode(networkId);
                const precision = this.parseNumber(this.parsePrecision(this.safeString(chain, 'precision')));
                minPrecision = (minPrecision === undefined) ? precision : Math.min(minPrecision, precision);
                const depositAllowed = this.safeBool(chain, 'depositEnable');
                deposit = (depositAllowed) ? depositAllowed : deposit;
                const withdrawAllowed = this.safeBool(chain, 'withdrawEnable');
                withdraw = (withdrawAllowed) ? withdrawAllowed : withdraw;
                const withdrawFeeString = this.safeString(chain, 'withdrawFee');
                if (withdrawFeeString !== undefined) {
                    minWithdrawFeeString = (minWithdrawFeeString === undefined) ? withdrawFeeString : Precise["default"].stringMin(withdrawFeeString, minWithdrawFeeString);
                }
                const minNetworkWithdrawString = this.safeString(chain, 'minWithdrawAmount');
                if (minNetworkWithdrawString !== undefined) {
                    minWithdrawString = (minWithdrawString === undefined) ? minNetworkWithdrawString : Precise["default"].stringMin(minNetworkWithdrawString, minWithdrawString);
                }
                const maxNetworkWithdrawString = this.safeString(chain, 'maxWithdrawAmount');
                if (maxNetworkWithdrawString !== undefined) {
                    maxWithdrawString = (maxWithdrawString === undefined) ? maxNetworkWithdrawString : Precise["default"].stringMin(maxNetworkWithdrawString, maxWithdrawString);
                }
                const minNetworkDepositString = this.safeString(chain, 'depositDust');
                if (minNetworkDepositString !== undefined) {
                    minDepositString = (minDepositString === undefined) ? minNetworkDepositString : Precise["default"].stringMin(minNetworkDepositString, minDepositString);
                }
                networks[networkCode] = {
                    'info': chain,
                    'id': networkId,
                    'network': networkCode,
                    'active': depositAllowed && withdrawAllowed,
                    'deposit': depositAllowed,
                    'withdraw': withdrawAllowed,
                    'fee': this.parseNumber(withdrawFeeString),
                    'precision': precision,
                    'limits': {
                        'withdraw': {
                            'min': this.parseNumber(minNetworkWithdrawString),
                            'max': this.parseNumber(maxNetworkWithdrawString),
                        },
                        'deposit': {
                            'min': this.parseNumber(minNetworkDepositString),
                            'max': undefined,
                        },
                    },
                };
            }
            result[code] = {
                'info': currency,
                'code': code,
                'id': currencyId,
                'name': name,
                'active': deposit && withdraw,
                'deposit': deposit,
                'withdraw': withdraw,
                'fee': this.parseNumber(minWithdrawFeeString),
                'precision': minPrecision,
                'limits': {
                    'amount': {
                        'min': undefined,
                        'max': undefined,
                    },
                    'withdraw': {
                        'min': this.parseNumber(minWithdrawString),
                        'max': this.parseNumber(maxWithdrawString),
                    },
                    'deposit': {
                        'min': this.parseNumber(minDepositString),
                        'max': undefined,
                    },
                },
                'networks': networks,
            };
        }
        return result;
    }
    /**
     * @method
     * @name wazirx#fetchDepositAddress
     * @description fetch the deposit address for a currency associated with this account
     * @see https://docs.wazirx.com/#deposit-address-supporting-network-user_data
     * @param {string} code unified currency code of the currency for the deposit address
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @param {string} [params.network] unified network code, you can get network from fetchCurrencies
     * @returns {object} an [address structure]{@link https://docs.ccxt.com/#/?id=address-structure}
     */
    async fetchDepositAddress(code, params = {}) {
        await this.loadMarkets();
        const currency = this.currency(code);
        const networkCode = this.safeString(params, 'network');
        params = this.omit(params, 'network');
        if (networkCode === undefined) {
            throw new errors.ArgumentsRequired(this.id + ' fetchDepositAddress() requires a network parameter');
        }
        const request = {
            'coin': currency['id'],
            'network': this.networkCodeToId(networkCode, code),
        };
        const response = await this.privateGetCryptoDepositsAddress(this.extend(request, params));
        //
        //     {
        //         "address": "bc1qrzpyzh69pfclpqy7c3yg8rkjsy49se7642v4q3",
        //         "coin": "btc",
        //         "url": "https: //live.blockcypher.com/btc/address/bc1qrzpyzh69pfclpqy7c3yg8rkjsy49se7642v4q3"
        //     }
        //
        return {
            'info': response,
            'currency': code,
            'network': this.networkCodeToId(networkCode, code),
            'address': this.safeString(response, 'address'),
            'tag': undefined,
        };
    }
    /**
     * @method
     * @name wazirx#fetchWithdrawals
     * @description fetch all withdrawals made from an account
     * @see https://docs.wazirx.com/#withdraw-history-supporting-network-user_data
     * @param {string} code unified currency code
     * @param {int} [since] the earliest time in ms to fetch withdrawals for
     * @param {int} [limit] the maximum number of withdrawals structures to retrieve
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @param {int} [params.until] the latest time in ms to fetch entries for
     * @returns {object[]} a list of [transaction structures]{@link https://docs.ccxt.com/#/?id=transaction-structure}
     */
    async fetchWithdrawals(code = undefined, since = undefined, limit = undefined, params = {}) {
        await this.loadMarkets();
        const request = {};
        let currency = undefined;
        if (code !== undefined) {
            currency = this.currency(code);
            request['coin'] = currency['id'];
        }
        if (limit !== undefined) {
            request['limit'] = limit;
        }
        const until = this.safeInteger(params, 'until');
        params = this.omit(params, ['until']);
        if (since !== undefined) {
            request['startTime'] = since;
        }
        if (until !== undefined) {
            request['endTime'] = until;
        }
        const response = await this.privateGetCryptoWithdraws(this.extend(request, params));
        //
        //     [
        //         {
        //             "address": "0x94df8b352de7f46f64b01d3666bf6e936e44ce60",
        //             "amount": "8.91000000",
        //             "createdAt": "2019-10-12 09:12:02",
        //             "lastUpdated": "2019-10-12 11:12:02",
        //             "coin": "USDT",
        //             "id": "b6ae22b3aa844210a7041aee7589627c",
        //             "withdrawOrderId": "WITHDRAWtest123",
        //             "network": "ETH",
        //             "status": 1,
        //             "transactionFee": "0.004",
        //             "failureInfo":"The address is not valid. Please confirm with the recipient",
        //             "txId": "0xb5ef8c13b968a406cc62a93a8bd80f9e9a906ef1b3fcf20a2e48573c17659268"
        //         }
        //     ]
        //
        return this.parseTransactions(response, currency, since, limit);
    }
    parseTransactionStatus(status) {
        const statuses = {
            '0': 'ok',
            '1': 'fail',
            '2': 'pending',
            '3': 'canceled',
        };
        return this.safeString(statuses, status, status);
    }
    parseTransaction(transaction, currency = undefined) {
        //
        //     {
        //         "address": "0x94df8b352de7f46f64b01d3666bf6e936e44ce60",
        //         "amount": "8.91000000",
        //         "createdAt": "2019-10-12 09:12:02",
        //         "lastUpdated": "2019-10-12 11:12:02",
        //         "coin": "USDT",
        //         "id": "b6ae22b3aa844210a7041aee7589627c",
        //         "withdrawOrderId": "WITHDRAWtest123",
        //         "network": "ETH",
        //         "status": 1,
        //         "transactionFee": "0.004",
        //         "failureInfo": "The address is not valid. Please confirm with the recipient",
        //         "txId": "0xb5ef8c13b968a406cc62a93a8bd80f9e9a906ef1b3fcf20a2e48573c17659268"
        //     }
        //
        const currencyId = this.safeString(transaction, 'coin');
        const code = this.safeCurrencyCode(currencyId, currency);
        const timestamp = this.parse8601(this.safeString(transaction, 'createdAt'));
        const updated = this.parse8601(this.safeString(transaction, 'lastUpdated'));
        const status = this.parseTransactionStatus(this.safeString(transaction, 'status'));
        const feeCost = this.safeNumber(transaction, 'transactionFee');
        let fee = undefined;
        if (feeCost !== undefined) {
            fee = {
                'cost': feeCost,
                'currency': code,
            };
        }
        return {
            'info': transaction,
            'id': this.safeString(transaction, 'id'),
            'txid': this.safeString(transaction, 'txId'),
            'timestamp': timestamp,
            'datetime': this.iso8601(timestamp),
            'network': this.networkIdToCode(this.safeString(transaction, 'network')),
            'address': this.safeString(transaction, 'address'),
            'addressTo': this.safeString(transaction, 'address'),
            'addressFrom': undefined,
            'tag': undefined,
            'tagTo': undefined,
            'tagFrom': undefined,
            'type': 'withdrawal',
            'amount': this.safeNumber(transaction, 'amount'),
            'currency': code,
            'status': status,
            'updated': updated,
            'fee': fee,
            'internal': undefined,
            'comment': undefined,
        };
    }
    sign(path, api = 'public', method = 'GET', params = {}, headers = undefined, body = undefined) {
        let url = this.urls['api']['rest'] + '/' + path;
        if (api === 'public') {
            if (Object.keys(params).length) {
                url += '?' + this.urlencode(params);
            }
        }
        if (api === 'private') {
            this.checkRequiredCredentials();
            const timestamp = this.milliseconds();
            let data = this.extend({ 'recvWindow': this.options['recvWindow'], 'timestamp': timestamp }, params);
            data = this.keysort(data);
            const signature = this.hmac(this.encode(this.urlencode(data)), this.encode(this.secret), sha256.sha256);
            url += '?' + this.urlencode(data);
            url += '&' + 'signature=' + signature;
            headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Api-Key': this.apiKey,
            };
        }
        return { 'url': url, 'method': method, 'body': body, 'headers': headers };
    }
    handleErrors(code, reason, url, method, headers, body, response, requestHeaders, requestBody) {
        //
        // {"code":2098,"message":"Request out of receiving window."}
        //
        if (response === undefined) {
            return undefined;
        }
        const errorCode = this.safeString(response, 'code');
        if (errorCode !== undefined) {
            const feedback = this.id + ' ' + body;
            this.throwExactlyMatchedException(this.exceptions['exact'], errorCode, feedback);
            throw new errors.ExchangeError(feedback);
        }
        return undefined;
    }
}

module.exports = wazirx;
