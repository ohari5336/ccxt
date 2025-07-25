'use strict';

var coinmate$1 = require('./abstract/coinmate.js');
var errors = require('./base/errors.js');
var Precise = require('./base/Precise.js');
var number = require('./base/functions/number.js');
var sha256 = require('./static_dependencies/noble-hashes/sha256.js');

// ----------------------------------------------------------------------------
//  ---------------------------------------------------------------------------
/**
 * @class coinmate
 * @augments Exchange
 */
class coinmate extends coinmate$1 {
    describe() {
        return this.deepExtend(super.describe(), {
            'id': 'coinmate',
            'name': 'CoinMate',
            'countries': ['GB', 'CZ', 'EU'],
            'rateLimit': 600,
            'has': {
                'CORS': true,
                'spot': true,
                'margin': false,
                'swap': false,
                'future': false,
                'option': false,
                'addMargin': false,
                'borrowCrossMargin': false,
                'borrowIsolatedMargin': false,
                'borrowMargin': false,
                'cancelOrder': true,
                'closeAllPositions': false,
                'closePosition': false,
                'createOrder': true,
                'createOrderWithTakeProfitAndStopLoss': false,
                'createOrderWithTakeProfitAndStopLossWs': false,
                'createPostOnlyOrder': false,
                'createReduceOnlyOrder': false,
                'fetchBalance': true,
                'fetchBorrowInterest': false,
                'fetchBorrowRate': false,
                'fetchBorrowRateHistories': false,
                'fetchBorrowRateHistory': false,
                'fetchBorrowRates': false,
                'fetchBorrowRatesPerSymbol': false,
                'fetchCrossBorrowRate': false,
                'fetchCrossBorrowRates': false,
                'fetchDepositsWithdrawals': true,
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
                'fetchLongShortRatio': false,
                'fetchLongShortRatioHistory': false,
                'fetchMarginAdjustmentHistory': false,
                'fetchMarginMode': false,
                'fetchMarginModes': false,
                'fetchMarketLeverageTiers': false,
                'fetchMarkets': true,
                'fetchMarkOHLCV': false,
                'fetchMarkPrices': false,
                'fetchMyLiquidations': false,
                'fetchMySettlementHistory': false,
                'fetchMyTrades': true,
                'fetchOpenInterest': false,
                'fetchOpenInterestHistory': false,
                'fetchOpenInterests': false,
                'fetchOpenOrders': true,
                'fetchOption': false,
                'fetchOptionChain': false,
                'fetchOrder': true,
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
                'fetchTicker': true,
                'fetchTickers': true,
                'fetchTrades': true,
                'fetchTradingFee': true,
                'fetchTradingFees': false,
                'fetchTransactions': 'emulated',
                'fetchVolatilityHistory': false,
                'reduceMargin': false,
                'repayCrossMargin': false,
                'repayIsolatedMargin': false,
                'repayMargin': false,
                'setLeverage': false,
                'setMargin': false,
                'setMarginMode': false,
                'setPositionMode': false,
                'transfer': false,
                'withdraw': true,
            },
            'urls': {
                'logo': 'https://user-images.githubusercontent.com/51840849/87460806-1c9f3f00-c616-11ea-8c46-a77018a8f3f4.jpg',
                'api': {
                    'rest': 'https://coinmate.io/api',
                },
                'www': 'https://coinmate.io',
                'fees': 'https://coinmate.io/fees',
                'doc': [
                    'https://coinmate.docs.apiary.io',
                    'https://coinmate.io/developers',
                ],
                'referral': 'https://coinmate.io?referral=YTFkM1RsOWFObVpmY1ZjMGREQmpTRnBsWjJJNVp3PT0',
            },
            'requiredCredentials': {
                'apiKey': true,
                'secret': true,
                'uid': true,
            },
            'api': {
                'public': {
                    'get': [
                        'orderBook',
                        'ticker',
                        'tickerAll',
                        'products',
                        'transactions',
                        'tradingPairs',
                    ],
                },
                'private': {
                    'post': [
                        'balances',
                        'bitcoinCashWithdrawal',
                        'bitcoinCashDepositAddresses',
                        'bitcoinDepositAddresses',
                        'bitcoinWithdrawal',
                        'bitcoinWithdrawalFees',
                        'buyInstant',
                        'buyLimit',
                        'cancelOrder',
                        'cancelOrderWithInfo',
                        'createVoucher',
                        'dashDepositAddresses',
                        'dashWithdrawal',
                        'ethereumWithdrawal',
                        'ethereumDepositAddresses',
                        'litecoinWithdrawal',
                        'litecoinDepositAddresses',
                        'openOrders',
                        'order',
                        'orderHistory',
                        'orderById',
                        'pusherAuth',
                        'redeemVoucher',
                        'replaceByBuyLimit',
                        'replaceByBuyInstant',
                        'replaceBySellLimit',
                        'replaceBySellInstant',
                        'rippleDepositAddresses',
                        'rippleWithdrawal',
                        'sellInstant',
                        'sellLimit',
                        'transactionHistory',
                        'traderFees',
                        'tradeHistory',
                        'transfer',
                        'transferHistory',
                        'unconfirmedBitcoinDeposits',
                        'unconfirmedBitcoinCashDeposits',
                        'unconfirmedDashDeposits',
                        'unconfirmedEthereumDeposits',
                        'unconfirmedLitecoinDeposits',
                        'unconfirmedRippleDeposits',
                        'cancelAllOpenOrders',
                        'withdrawVirtualCurrency',
                        'virtualCurrencyDepositAddresses',
                        'unconfirmedVirtualCurrencyDeposits',
                        'adaWithdrawal',
                        'adaDepositAddresses',
                        'unconfirmedAdaDeposits',
                        'solWithdrawal',
                        'solDepositAddresses',
                        'unconfirmedSolDeposits',
                    ],
                },
            },
            'fees': {
                'trading': {
                    'tierBased': true,
                    'percentage': true,
                    'taker': this.parseNumber('0.006'),
                    'maker': this.parseNumber('0.004'),
                    'tiers': {
                        'taker': [
                            [this.parseNumber('0'), this.parseNumber('0.006')],
                            [this.parseNumber('10000'), this.parseNumber('0.003')],
                            [this.parseNumber('100000'), this.parseNumber('0.0023')],
                            [this.parseNumber('250000'), this.parseNumber('0.0021')],
                            [this.parseNumber('500000'), this.parseNumber('0.0018')],
                            [this.parseNumber('1000000'), this.parseNumber('0.0015')],
                            [this.parseNumber('3000000'), this.parseNumber('0.0012')],
                            [this.parseNumber('15000000'), this.parseNumber('0.001')],
                        ],
                        'maker': [
                            [this.parseNumber('0'), this.parseNumber('0.004')],
                            [this.parseNumber('10000'), this.parseNumber('0.002')],
                            [this.parseNumber('100000'), this.parseNumber('0.0012')],
                            [this.parseNumber('250000'), this.parseNumber('0.0009')],
                            [this.parseNumber('500000'), this.parseNumber('0.0005')],
                            [this.parseNumber('1000000'), this.parseNumber('0.0003')],
                            [this.parseNumber('3000000'), this.parseNumber('0.0002')],
                            [this.parseNumber('15000000'), this.parseNumber('-0.0004')],
                        ],
                    },
                },
            },
            'options': {
                'withdraw': {
                    'fillResponsefromRequest': true,
                    'methods': {
                        'BTC': 'privatePostBitcoinWithdrawal',
                        'LTC': 'privatePostLitecoinWithdrawal',
                        'BCH': 'privatePostBitcoinCashWithdrawal',
                        'ETH': 'privatePostEthereumWithdrawal',
                        'XRP': 'privatePostRippleWithdrawal',
                        'DASH': 'privatePostDashWithdrawal',
                        'DAI': 'privatePostDaiWithdrawal',
                        'ADA': 'privatePostAdaWithdrawal',
                        'SOL': 'privatePostSolWithdrawal',
                    },
                },
            },
            'features': {
                'spot': {
                    'sandbox': false,
                    'createOrder': {
                        'marginMode': false,
                        'triggerPrice': true,
                        'triggerPriceType': undefined,
                        'triggerDirection': false,
                        'stopLossPrice': false,
                        'takeProfitPrice': false,
                        'attachedStopLossTakeProfit': undefined,
                        'timeInForce': {
                            'IOC': true,
                            'FOK': false,
                            'PO': true,
                            'GTD': false,
                        },
                        'hedged': false,
                        'trailing': true,
                        'leverage': false,
                        'marketBuyByCost': false,
                        'marketBuyRequiresPrice': false,
                        'selfTradePrevention': false,
                        'iceberg': true, // todo
                    },
                    'createOrders': undefined,
                    'fetchMyTrades': {
                        'marginMode': false,
                        'limit': 1000,
                        'daysBack': 100000,
                        'untilDays': 100000,
                        'symbolRequired': false,
                    },
                    'fetchOrder': {
                        'marginMode': false,
                        'trigger': false,
                        'trailing': false,
                        'symbolRequired': false,
                    },
                    'fetchOpenOrders': {
                        'marginMode': false,
                        'limit': undefined,
                        'trigger': false,
                        'trailing': false,
                        'symbolRequired': true,
                    },
                    'fetchOrders': {
                        'marginMode': false,
                        'limit': 100,
                        'daysBack': undefined,
                        'untilDays': undefined,
                        'trigger': false,
                        'trailing': false,
                        'symbolRequired': true,
                    },
                    'fetchClosedOrders': undefined,
                    'fetchOHLCV': undefined,
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
            'exceptions': {
                'exact': {
                    'No order with given ID': errors.OrderNotFound,
                },
                'broad': {
                    'Not enough account balance available': errors.InsufficientFunds,
                    'Incorrect order ID': errors.InvalidOrder,
                    'Minimum Order Size ': errors.InvalidOrder,
                    'max allowed precision': errors.InvalidOrder,
                    'TOO MANY REQUESTS': errors.RateLimitExceeded,
                    'Access denied.': errors.AuthenticationError, // {"error":true,"errorMessage":"Access denied.","data":null}
                },
            },
            'precisionMode': number.TICK_SIZE,
        });
    }
    /**
     * @method
     * @name coinmate#fetchMarkets
     * @description retrieves data on all markets for coinmate
     * @see https://coinmate.docs.apiary.io/#reference/trading-pairs/get-trading-pairs/get
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object[]} an array of objects representing market data
     */
    async fetchMarkets(params = {}) {
        const response = await this.publicGetTradingPairs(params);
        //
        //     {
        //         "error":false,
        //         "errorMessage":null,
        //         "data": [
        //             {
        //                 "name":"BTC_EUR",
        //                 "firstCurrency":"BTC",
        //                 "secondCurrency":"EUR",
        //                 "priceDecimals":2,
        //                 "lotDecimals":8,
        //                 "minAmount":0.0002,
        //                 "tradesWebSocketChannelId":"trades-BTC_EUR",
        //                 "orderBookWebSocketChannelId":"order_book-BTC_EUR",
        //                 "tradeStatisticsWebSocketChannelId":"statistics-BTC_EUR"
        //             },
        //         ]
        //     }
        //
        const data = this.safeValue(response, 'data', []);
        const result = [];
        for (let i = 0; i < data.length; i++) {
            const market = data[i];
            const id = this.safeString(market, 'name');
            const baseId = this.safeString(market, 'firstCurrency');
            const quoteId = this.safeString(market, 'secondCurrency');
            const base = this.safeCurrencyCode(baseId);
            const quote = this.safeCurrencyCode(quoteId);
            const symbol = base + '/' + quote;
            result.push({
                'id': id,
                'symbol': symbol,
                'base': base,
                'quote': quote,
                'settle': undefined,
                'baseId': baseId,
                'quoteId': quoteId,
                'settleId': undefined,
                'type': 'spot',
                'spot': true,
                'margin': false,
                'swap': false,
                'future': false,
                'option': false,
                'active': undefined,
                'contract': false,
                'linear': undefined,
                'inverse': undefined,
                'contractSize': undefined,
                'expiry': undefined,
                'expiryDatetime': undefined,
                'strike': undefined,
                'optionType': undefined,
                'precision': {
                    'amount': this.parseNumber(this.parsePrecision(this.safeString(market, 'lotDecimals'))),
                    'price': this.parseNumber(this.parsePrecision(this.safeString(market, 'priceDecimals'))),
                },
                'limits': {
                    'leverage': {
                        'min': undefined,
                        'max': undefined,
                    },
                    'amount': {
                        'min': this.safeNumber(market, 'minAmount'),
                        'max': undefined,
                    },
                    'price': {
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
            });
        }
        return result;
    }
    parseBalance(response) {
        const balances = this.safeValue(response, 'data', {});
        const result = { 'info': response };
        const currencyIds = Object.keys(balances);
        for (let i = 0; i < currencyIds.length; i++) {
            const currencyId = currencyIds[i];
            const code = this.safeCurrencyCode(currencyId);
            const balance = this.safeValue(balances, currencyId);
            const account = this.account();
            account['free'] = this.safeString(balance, 'available');
            account['used'] = this.safeString(balance, 'reserved');
            account['total'] = this.safeString(balance, 'balance');
            result[code] = account;
        }
        return this.safeBalance(result);
    }
    /**
     * @method
     * @name coinmate#fetchBalance
     * @description query for balance and get the amount of funds available for trading or funds locked in orders
     * @see https://coinmate.docs.apiary.io/#reference/balance/get-balances/post
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object} a [balance structure]{@link https://docs.ccxt.com/#/?id=balance-structure}
     */
    async fetchBalance(params = {}) {
        await this.loadMarkets();
        const response = await this.privatePostBalances(params);
        return this.parseBalance(response);
    }
    /**
     * @method
     * @name coinmate#fetchOrderBook
     * @description fetches information on open orders with bid (buy) and ask (sell) prices, volumes and other data
     * @see https://coinmate.docs.apiary.io/#reference/order-book/get-order-book/get
     * @param {string} symbol unified symbol of the market to fetch the order book for
     * @param {int} [limit] the maximum amount of order book entries to return
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object} A dictionary of [order book structures]{@link https://docs.ccxt.com/#/?id=order-book-structure} indexed by market symbols
     */
    async fetchOrderBook(symbol, limit = undefined, params = {}) {
        await this.loadMarkets();
        const market = this.market(symbol);
        const request = {
            'currencyPair': market['id'],
            'groupByPriceLimit': 'False',
        };
        const response = await this.publicGetOrderBook(this.extend(request, params));
        const orderbook = response['data'];
        const timestamp = this.safeTimestamp(orderbook, 'timestamp');
        return this.parseOrderBook(orderbook, market['symbol'], timestamp, 'bids', 'asks', 'price', 'amount');
    }
    /**
     * @method
     * @name coinmate#fetchTicker
     * @description fetches a price ticker, a statistical calculation with the information calculated over the past 24 hours for a specific market
     * @see https://coinmate.docs.apiary.io/#reference/ticker/get-ticker/get
     * @param {string} symbol unified symbol of the market to fetch the ticker for
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object} a [ticker structure]{@link https://docs.ccxt.com/#/?id=ticker-structure}
     */
    async fetchTicker(symbol, params = {}) {
        await this.loadMarkets();
        const market = this.market(symbol);
        const request = {
            'currencyPair': market['id'],
        };
        const response = await this.publicGetTicker(this.extend(request, params));
        //
        //     {
        //         "error": false,
        //         "errorMessage": null,
        //         "data": {
        //             "last": 0.55105,
        //             "high": 0.56439,
        //             "low": 0.54358,
        //             "amount": 37038.993381,
        //             "bid": 0.54595,
        //             "ask": 0.55324,
        //             "change": 3.03659243,
        //             "open": 0.53481,
        //             "timestamp": 1708074779
        //         }
        //     }
        //
        const data = this.safeDict(response, 'data');
        return this.parseTicker(data, market);
    }
    /**
     * @method
     * @name coinmate#fetchTickers
     * @description fetches price tickers for multiple markets, statistical information calculated over the past 24 hours for each market
     * @see https://coinmate.docs.apiary.io/#reference/ticker/get-ticker-all/get
     * @param {string[]|undefined} symbols unified symbols of the markets to fetch the ticker for, all market tickers are returned if not assigned
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object} a dictionary of [ticker structures]{@link https://docs.ccxt.com/#/?id=ticker-structure}
     */
    async fetchTickers(symbols = undefined, params = {}) {
        await this.loadMarkets();
        symbols = this.marketSymbols(symbols);
        const response = await this.publicGetTickerAll(params);
        //
        //     {
        //         "error": false,
        //         "errorMessage": null,
        //         "data": {
        //             "LTC_BTC": {
        //                 "last": "0.001337",
        //                 "high": "0.001348",
        //                 "low": "0.001332",
        //                 "amount": "34.75472959",
        //                 "bid": "0.001348",
        //                 "ask": "0.001356",
        //                 "change": "-0.74239050",
        //                 "open": "0.001347",
        //                 "timestamp": "1708074485"
        //             }
        //         }
        //     }
        //
        const data = this.safeValue(response, 'data', {});
        const keys = Object.keys(data);
        const result = {};
        for (let i = 0; i < keys.length; i++) {
            const market = this.market(keys[i]);
            const ticker = this.parseTicker(this.safeValue(data, keys[i]), market);
            result[market['symbol']] = ticker;
        }
        return this.filterByArrayTickers(result, 'symbol', symbols);
    }
    parseTicker(ticker, market = undefined) {
        //
        //     {
        //         "last": "0.001337",
        //         "high": "0.001348",
        //         "low": "0.001332",
        //         "amount": "34.75472959",
        //         "bid": "0.001348",
        //         "ask": "0.001356",
        //         "change": "-0.74239050",
        //         "open": "0.001347",
        //         "timestamp": "1708074485"
        //     }
        //
        const timestamp = this.safeTimestamp(ticker, 'timestamp');
        const last = this.safeNumber(ticker, 'last');
        return this.safeTicker({
            'symbol': market['symbol'],
            'timestamp': timestamp,
            'datetime': this.iso8601(timestamp),
            'high': this.safeNumber(ticker, 'high'),
            'low': this.safeNumber(ticker, 'low'),
            'bid': this.safeNumber(ticker, 'bid'),
            'bidVolume': undefined,
            'ask': this.safeNumber(ticker, 'ask'),
            'vwap': undefined,
            'askVolume': undefined,
            'open': undefined,
            'close': last,
            'last': last,
            'previousClose': undefined,
            'change': undefined,
            'percentage': undefined,
            'average': undefined,
            'baseVolume': this.safeNumber(ticker, 'amount'),
            'quoteVolume': undefined,
            'info': ticker,
        }, market);
    }
    /**
     * @method
     * @name coinmate#fetchDepositsWithdrawals
     * @description fetch history of deposits and withdrawals
     * @see https://coinmate.docs.apiary.io/#reference/transfers/get-transfer-history/post
     * @param {string} [code] unified currency code for the currency of the deposit/withdrawals, default is undefined
     * @param {int} [since] timestamp in ms of the earliest deposit/withdrawal, default is undefined
     * @param {int} [limit] max number of deposit/withdrawals to return, default is undefined
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object} a list of [transaction structure]{@link https://docs.ccxt.com/#/?id=transaction-structure}
     */
    async fetchDepositsWithdrawals(code = undefined, since = undefined, limit = undefined, params = {}) {
        await this.loadMarkets();
        const request = {
            'limit': 1000,
        };
        if (limit !== undefined) {
            request['limit'] = limit;
        }
        if (since !== undefined) {
            request['timestampFrom'] = since;
        }
        if (code !== undefined) {
            const currency = this.currency(code);
            request['currency'] = currency['id'];
        }
        const response = await this.privatePostTransferHistory(this.extend(request, params));
        const items = response['data'];
        return this.parseTransactions(items, undefined, since, limit);
    }
    parseTransactionStatus(status) {
        const statuses = {
            'COMPLETED': 'ok',
            'WAITING': 'pending',
            'SENT': 'pending',
            'CREATED': 'pending',
            'OK': 'ok',
            'NEW': 'pending',
            'CANCELED': 'canceled',
        };
        return this.safeString(statuses, status, status);
    }
    parseTransaction(transaction, currency = undefined) {
        //
        // deposits
        //
        //     {
        //         "transactionId": 1862815,
        //         "timestamp": 1516803982388,
        //         "amountCurrency": "LTC",
        //         "amount": 1,
        //         "fee": 0,
        //         "walletType": "LTC",
        //         "transferType": "DEPOSIT",
        //         "transferStatus": "COMPLETED",
        //         "txid":
        //         "ccb9255dfa874e6c28f1a64179769164025329d65e5201849c2400abd6bce245",
        //         "destination": "LQrtSKA6LnhcwRrEuiborQJnjFF56xqsFn",
        //         "destinationTag": null
        //     }
        //
        // withdrawals
        //
        //     {
        //         "transactionId": 2140966,
        //         "timestamp": 1519314282976,
        //         "amountCurrency": "EUR",
        //         "amount": 8421.7228,
        //         "fee": 16.8772,
        //         "walletType": "BANK_WIRE",
        //         "transferType": "WITHDRAWAL",
        //         "transferStatus": "COMPLETED",
        //         "txid": null,
        //         "destination": null,
        //         "destinationTag": null
        //     }
        //
        // withdraw
        //
        //     {
        //         "id": 2132583,
        //     }
        //
        const timestamp = this.safeInteger(transaction, 'timestamp');
        const currencyId = this.safeString(transaction, 'amountCurrency');
        const code = this.safeCurrencyCode(currencyId, currency);
        return {
            'info': transaction,
            'id': this.safeString2(transaction, 'transactionId', 'id'),
            'txid': this.safeString(transaction, 'txid'),
            'type': this.safeStringLower(transaction, 'transferType'),
            'currency': code,
            'network': this.safeString(transaction, 'walletType'),
            'amount': this.safeNumber(transaction, 'amount'),
            'status': this.parseTransactionStatus(this.safeString(transaction, 'transferStatus')),
            'timestamp': timestamp,
            'datetime': this.iso8601(timestamp),
            'address': this.safeString(transaction, 'destination'),
            'addressFrom': undefined,
            'addressTo': undefined,
            'tag': this.safeString(transaction, 'destinationTag'),
            'tagFrom': undefined,
            'tagTo': undefined,
            'updated': undefined,
            'comment': undefined,
            'internal': undefined,
            'fee': {
                'cost': this.safeNumber(transaction, 'fee'),
                'currency': code,
                'rate': undefined,
            },
        };
    }
    /**
     * @method
     * @name coinmate#withdraw
     * @description make a withdrawal
     * @see https://coinmate.docs.apiary.io/#reference/bitcoin-withdrawal-and-deposit/withdraw-bitcoins/post
     * @see https://coinmate.docs.apiary.io/#reference/litecoin-withdrawal-and-deposit/withdraw-litecoins/post
     * @see https://coinmate.docs.apiary.io/#reference/ethereum-withdrawal-and-deposit/withdraw-ethereum/post
     * @see https://coinmate.docs.apiary.io/#reference/ripple-withdrawal-and-deposit/withdraw-ripple/post
     * @see https://coinmate.docs.apiary.io/#reference/cardano-withdrawal-and-deposit/withdraw-cardano/post
     * @see https://coinmate.docs.apiary.io/#reference/solana-withdrawal-and-deposit/withdraw-solana/post
     * @param {string} code unified currency code
     * @param {float} amount the amount to withdraw
     * @param {string} address the address to withdraw to
     * @param {string} tag
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object} a [transaction structure]{@link https://docs.ccxt.com/#/?id=transaction-structure}
     */
    async withdraw(code, amount, address, tag = undefined, params = {}) {
        [tag, params] = this.handleWithdrawTagAndParams(tag, params);
        this.checkAddress(address);
        await this.loadMarkets();
        const currency = this.currency(code);
        const withdrawOptions = this.safeValue(this.options, 'withdraw', {});
        const methods = this.safeValue(withdrawOptions, 'methods', {});
        const method = this.safeString(methods, code);
        if (method === undefined) {
            const allowedCurrencies = Object.keys(methods);
            throw new errors.ExchangeError(this.id + ' withdraw() only allows withdrawing the following currencies: ' + allowedCurrencies.join(', '));
        }
        const request = {
            'amount': this.currencyToPrecision(code, amount),
            'address': address,
        };
        if (tag !== undefined) {
            request['destinationTag'] = tag;
        }
        const response = await this[method](this.extend(request, params));
        //
        //     {
        //         "error": false,
        //         "errorMessage": null,
        //         "data": {
        //             "id": "9e0a37fc-4ab4-4b9d-b9e7-c9c8f7c4c8e0"
        //         }
        //     }
        //
        const data = this.safeValue(response, 'data');
        const transaction = this.parseTransaction(data, currency);
        const fillResponseFromRequest = this.safeBool(withdrawOptions, 'fillResponseFromRequest', true);
        if (fillResponseFromRequest) {
            transaction['amount'] = amount;
            transaction['currency'] = code;
            transaction['address'] = address;
            transaction['tag'] = tag;
            transaction['type'] = 'withdrawal';
            transaction['status'] = 'pending';
        }
        return transaction;
    }
    /**
     * @method
     * @name coinmate#fetchMyTrades
     * @description fetch all trades made by the user
     * @see https://coinmate.docs.apiary.io/#reference/trade-history/get-trade-history/post
     * @param {string} symbol unified market symbol
     * @param {int} [since] the earliest time in ms to fetch trades for
     * @param {int} [limit] the maximum number of trades structures to retrieve
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {Trade[]} a list of [trade structures]{@link https://docs.ccxt.com/#/?id=trade-structure}
     */
    async fetchMyTrades(symbol = undefined, since = undefined, limit = undefined, params = {}) {
        await this.loadMarkets();
        if (limit === undefined) {
            limit = 1000;
        }
        const request = {
            'limit': limit,
        };
        if (symbol !== undefined) {
            const market = this.market(symbol);
            request['currencyPair'] = market['id'];
        }
        if (since !== undefined) {
            request['timestampFrom'] = since;
        }
        const response = await this.privatePostTradeHistory(this.extend(request, params));
        const data = this.safeList(response, 'data', []);
        return this.parseTrades(data, undefined, since, limit);
    }
    parseTrade(trade, market = undefined) {
        //
        // fetchMyTrades (private)
        //
        //     {
        //         "transactionId": 2671819,
        //         "createdTimestamp": 1529649127605,
        //         "currencyPair": "LTC_BTC",
        //         "type": "BUY",
        //         "orderType": "LIMIT",
        //         "orderId": 101810227,
        //         "amount": 0.01,
        //         "price": 0.01406,
        //         "fee": 0,
        //         "feeType": "MAKER"
        //     }
        //
        // fetchTrades (public)
        //
        //     {
        //         "timestamp":1561598833416,
        //         "transactionId":"4156303",
        //         "price":10950.41,
        //         "amount":0.004,
        //         "currencyPair":"BTC_EUR",
        //         "tradeType":"BUY"
        //     }
        //
        const marketId = this.safeString(trade, 'currencyPair');
        market = this.safeMarket(marketId, market, '_');
        const priceString = this.safeString(trade, 'price');
        const amountString = this.safeString(trade, 'amount');
        const side = this.safeStringLower2(trade, 'type', 'tradeType');
        const type = this.safeStringLower(trade, 'orderType');
        const orderId = this.safeString(trade, 'orderId');
        const id = this.safeString(trade, 'transactionId');
        const timestamp = this.safeInteger2(trade, 'timestamp', 'createdTimestamp');
        let fee = undefined;
        const feeCostString = this.safeString(trade, 'fee');
        if (feeCostString !== undefined) {
            fee = {
                'cost': feeCostString,
                'currency': market['quote'],
            };
        }
        let takerOrMaker = this.safeString(trade, 'feeType');
        takerOrMaker = (takerOrMaker === 'MAKER') ? 'maker' : 'taker';
        return this.safeTrade({
            'id': id,
            'info': trade,
            'timestamp': timestamp,
            'datetime': this.iso8601(timestamp),
            'symbol': market['symbol'],
            'type': type,
            'side': side,
            'order': orderId,
            'takerOrMaker': takerOrMaker,
            'price': priceString,
            'amount': amountString,
            'cost': undefined,
            'fee': fee,
        }, market);
    }
    /**
     * @method
     * @name coinmate#fetchTrades
     * @description get the list of most recent trades for a particular symbol
     * @see https://coinmate.docs.apiary.io/#reference/transactions/transactions/get
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
            'currencyPair': market['id'],
            'minutesIntoHistory': 10,
        };
        const response = await this.publicGetTransactions(this.extend(request, params));
        //
        //     {
        //         "error":false,
        //         "errorMessage":null,
        //         "data":[
        //             {
        //                 "timestamp":1561598833416,
        //                 "transactionId":"4156303",
        //                 "price":10950.41,
        //                 "amount":0.004,
        //                 "currencyPair":"BTC_EUR",
        //                 "tradeType":"BUY"
        //             }
        //         ]
        //     }
        //
        const data = this.safeList(response, 'data', []);
        return this.parseTrades(data, market, since, limit);
    }
    /**
     * @method
     * @name coinmate#fetchTradingFee
     * @description fetch the trading fees for a market
     * @see https://coinmate.docs.apiary.io/#reference/trader-fees/get-trading-fees/post
     * @param {string} symbol unified market symbol
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object} a [fee structure]{@link https://docs.ccxt.com/#/?id=fee-structure}
     */
    async fetchTradingFee(symbol, params = {}) {
        await this.loadMarkets();
        const market = this.market(symbol);
        const request = {
            'currencyPair': market['id'],
        };
        const response = await this.privatePostTraderFees(this.extend(request, params));
        //
        //     {
        //         "error": false,
        //         "errorMessage": null,
        //         "data": { maker: '0.3', taker: "0.35", timestamp: "1646253217815" }
        //     }
        //
        const data = this.safeValue(response, 'data', {});
        const makerString = this.safeString(data, 'maker');
        const takerString = this.safeString(data, 'taker');
        const maker = this.parseNumber(Precise["default"].stringDiv(makerString, '100'));
        const taker = this.parseNumber(Precise["default"].stringDiv(takerString, '100'));
        return {
            'info': data,
            'symbol': market['symbol'],
            'maker': maker,
            'taker': taker,
            'percentage': true,
            'tierBased': true,
        };
    }
    /**
     * @method
     * @name coinmate#fetchOpenOrders
     * @description fetch all unfilled currently open orders
     * @see https://coinmate.docs.apiary.io/#reference/order/get-open-orders/post
     * @param {string} symbol unified market symbol
     * @param {int} [since] the earliest time in ms to fetch open orders for
     * @param {int} [limit] the maximum number of  open orders structures to retrieve
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {Order[]} a list of [order structures]{@link https://docs.ccxt.com/#/?id=order-structure}
     */
    async fetchOpenOrders(symbol = undefined, since = undefined, limit = undefined, params = {}) {
        const response = await this.privatePostOpenOrders(this.extend({}, params));
        const extension = { 'status': 'open' };
        return this.parseOrders(response['data'], undefined, since, limit, extension);
    }
    /**
     * @method
     * @name coinmate#fetchOrders
     * @description fetches information on multiple orders made by the user
     * @see https://coinmate.docs.apiary.io/#reference/order/order-history/post
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
            'currencyPair': market['id'],
        };
        // offset param that appears in other parts of the API doesn't appear to be supported here
        if (limit !== undefined) {
            request['limit'] = limit;
        }
        const response = await this.privatePostOrderHistory(this.extend(request, params));
        return this.parseOrders(response['data'], market, since, limit);
    }
    parseOrderStatus(status) {
        const statuses = {
            'FILLED': 'closed',
            'CANCELLED': 'canceled',
            'PARTIALLY_FILLED': 'open',
            'OPEN': 'open',
        };
        return this.safeString(statuses, status, status);
    }
    parseOrderType(type) {
        const types = {
            'LIMIT': 'limit',
            'MARKET': 'market',
        };
        return this.safeString(types, type, type);
    }
    parseOrder(order, market = undefined) {
        //
        // limit sell
        //
        //     {
        //         "id": 781246605,
        //         "timestamp": 1584480015133,
        //         "trailingUpdatedTimestamp": null,
        //         "type": "SELL",
        //         "currencyPair": "ETH_BTC",
        //         "price": 0.0345,
        //         "amount": 0.01,
        //         "stopPrice": null,
        //         "originalStopPrice": null,
        //         "marketPriceAtLastUpdate": null,
        //         "marketPriceAtOrderCreation": null,
        //         "orderTradeType": "LIMIT",
        //         "hidden": false,
        //         "trailing": false,
        //         "clientOrderId": null
        //     }
        //
        // limit buy
        //
        //     {
        //         "id": 67527001,
        //         "timestamp": 1517931722613,
        //         "trailingUpdatedTimestamp": null,
        //         "type": "BUY",
        //         "price": 5897.24,
        //         "remainingAmount": 0.002367,
        //         "originalAmount": 0.1,
        //         "stopPrice": null,
        //         "originalStopPrice": null,
        //         "marketPriceAtLastUpdate": null,
        //         "marketPriceAtOrderCreation": null,
        //         "status": "CANCELLED",
        //         "orderTradeType": "LIMIT",
        //         "hidden": false,
        //         "avgPrice": null,
        //         "trailing": false,
        //     }
        //
        // cancelOrder
        //
        //    {
        //        "success": true,
        //        "remainingAmount": 0.1
        //    }
        //
        const id = this.safeString(order, 'id');
        const timestamp = this.safeInteger(order, 'timestamp');
        const side = this.safeStringLower(order, 'type');
        const priceString = this.safeString(order, 'price');
        const amountString = this.safeString(order, 'originalAmount');
        const remainingString = this.safeString2(order, 'remainingAmount', 'amount');
        const status = this.parseOrderStatus(this.safeString(order, 'status'));
        const type = this.parseOrderType(this.safeString(order, 'orderTradeType'));
        const averageString = this.safeString(order, 'avgPrice');
        const marketId = this.safeString(order, 'currencyPair');
        const symbol = this.safeSymbol(marketId, market, '_');
        const clientOrderId = this.safeString(order, 'clientOrderId');
        return this.safeOrder({
            'id': id,
            'clientOrderId': clientOrderId,
            'timestamp': timestamp,
            'datetime': this.iso8601(timestamp),
            'lastTradeTimestamp': undefined,
            'symbol': symbol,
            'type': type,
            'timeInForce': undefined,
            'postOnly': undefined,
            'side': side,
            'price': priceString,
            'triggerPrice': this.safeNumber(order, 'stopPrice'),
            'amount': amountString,
            'cost': undefined,
            'average': averageString,
            'filled': undefined,
            'remaining': remainingString,
            'status': status,
            'trades': undefined,
            'info': order,
            'fee': undefined,
        }, market);
    }
    /**
     * @method
     * @name coinmate#createOrder
     * @description create a trade order
     * @see https://coinmate.docs.apiary.io/#reference/order/buy-limit-order/post
     * @see https://coinmate.docs.apiary.io/#reference/order/sell-limit-order/post
     * @see https://coinmate.docs.apiary.io/#reference/order/buy-instant-order/post
     * @see https://coinmate.docs.apiary.io/#reference/order/sell-instant-order/post
     * @param {string} symbol unified symbol of the market to create an order in
     * @param {string} type 'market' or 'limit'
     * @param {string} side 'buy' or 'sell'
     * @param {float} amount how much of currency you want to trade in units of base currency
     * @param {float} [price] the price at which the order is to be fulfilled, in units of the quote currency, ignored in market orders
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object} an [order structure]{@link https://docs.ccxt.com/#/?id=order-structure}
     */
    async createOrder(symbol, type, side, amount, price = undefined, params = {}) {
        await this.loadMarkets();
        let method = 'privatePost' + this.capitalize(side);
        const market = this.market(symbol);
        const request = {
            'currencyPair': market['id'],
        };
        if (type === 'market') {
            if (side === 'buy') {
                request['total'] = this.amountToPrecision(symbol, amount); // amount in fiat
            }
            else {
                request['amount'] = this.amountToPrecision(symbol, amount); // amount in fiat
            }
            method += 'Instant';
        }
        else {
            request['amount'] = this.amountToPrecision(symbol, amount); // amount in crypto
            request['price'] = this.priceToPrecision(symbol, price);
            method += this.capitalize(type);
        }
        const response = await this[method](this.extend(request, params));
        const id = this.safeString(response, 'data');
        return this.safeOrder({
            'info': response,
            'id': id,
        }, market);
    }
    /**
     * @method
     * @name coinmate#fetchOrder
     * @description fetches information on an order made by the user
     * @see https://coinmate.docs.apiary.io/#reference/order/get-order-by-orderid/post
     * @see https://coinmate.docs.apiary.io/#reference/order/get-order-by-clientorderid/post
     * @param {string} id order id
     * @param {string} symbol unified symbol of the market the order was made in
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object} An [order structure]{@link https://docs.ccxt.com/#/?id=order-structure}
     */
    async fetchOrder(id, symbol = undefined, params = {}) {
        await this.loadMarkets();
        const request = {
            'orderId': id,
        };
        let market = undefined;
        if (symbol) {
            market = this.market(symbol);
        }
        const response = await this.privatePostOrderById(this.extend(request, params));
        const data = this.safeDict(response, 'data');
        return this.parseOrder(data, market);
    }
    /**
     * @method
     * @name coinmate#cancelOrder
     * @description cancels an open order
     * @see https://coinmate.docs.apiary.io/#reference/order/cancel-order/post
     * @param {string} id order id
     * @param {string} symbol not used by coinmate cancelOrder ()
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object} An [order structure]{@link https://docs.ccxt.com/#/?id=order-structure}
     */
    async cancelOrder(id, symbol = undefined, params = {}) {
        //   {"error":false,"errorMessage":null,"data":{"success":true,"remainingAmount":0.01}}
        const request = { 'orderId': id };
        const response = await this.privatePostCancelOrderWithInfo(this.extend(request, params));
        //
        //    {
        //        "error": false,
        //        "errorMessage": null,
        //        "data": {
        //          "success": true,
        //          "remainingAmount": 0.1
        //        }
        //    }
        //
        const data = this.safeDict(response, 'data');
        return this.parseOrder(data);
    }
    nonce() {
        return this.milliseconds();
    }
    sign(path, api = 'public', method = 'GET', params = {}, headers = undefined, body = undefined) {
        let url = this.urls['api']['rest'] + '/' + path;
        if (api === 'public') {
            if (Object.keys(params).length) {
                url += '?' + this.urlencode(params);
            }
        }
        else {
            this.checkRequiredCredentials();
            const nonce = this.nonce().toString();
            const auth = nonce + this.uid + this.apiKey;
            const signature = this.hmac(this.encode(auth), this.encode(this.secret), sha256.sha256);
            body = this.urlencode(this.extend({
                'clientId': this.uid,
                'nonce': nonce,
                'publicKey': this.apiKey,
                'signature': signature.toUpperCase(),
            }, params));
            headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
            };
        }
        return { 'url': url, 'method': method, 'body': body, 'headers': headers };
    }
    handleErrors(code, reason, url, method, headers, body, response, requestHeaders, requestBody) {
        if (response === undefined) {
            return undefined; // fallback to default error handler
        }
        //
        //     {"error":true,"errorMessage":"Api internal error","data":null}
        //     {"error":true,"errorMessage":"Access denied.","data":null}
        //
        const errorMessage = this.safeString(response, 'errorMessage');
        if (errorMessage !== undefined) {
            const feedback = this.id + ' ' + body;
            this.throwExactlyMatchedException(this.exceptions['exact'], errorMessage, feedback);
            this.throwBroadlyMatchedException(this.exceptions['broad'], errorMessage, feedback);
            throw new errors.ExchangeError(feedback); // unknown message
        }
        return undefined;
    }
}

module.exports = coinmate;
