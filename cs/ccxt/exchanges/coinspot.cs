namespace ccxt;

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

public partial class coinspot : Exchange
{
    public override object describe()
    {
        return this.deepExtend(base.describe(), new Dictionary<string, object>() {
            { "id", "coinspot" },
            { "name", "CoinSpot" },
            { "countries", new List<object>() {"AU"} },
            { "rateLimit", 1000 },
            { "pro", false },
            { "has", new Dictionary<string, object>() {
                { "CORS", null },
                { "spot", true },
                { "margin", false },
                { "swap", false },
                { "future", false },
                { "option", false },
                { "addMargin", false },
                { "borrowCrossMargin", false },
                { "borrowIsolatedMargin", false },
                { "borrowMargin", false },
                { "cancelOrder", true },
                { "closeAllPositions", false },
                { "closePosition", false },
                { "createMarketOrder", false },
                { "createOrder", true },
                { "createOrderWithTakeProfitAndStopLoss", false },
                { "createOrderWithTakeProfitAndStopLossWs", false },
                { "createPostOnlyOrder", false },
                { "createReduceOnlyOrder", false },
                { "createStopLimitOrder", false },
                { "createStopMarketOrder", false },
                { "createStopOrder", false },
                { "fetchBalance", true },
                { "fetchBorrowInterest", false },
                { "fetchBorrowRate", false },
                { "fetchBorrowRateHistories", false },
                { "fetchBorrowRateHistory", false },
                { "fetchBorrowRates", false },
                { "fetchBorrowRatesPerSymbol", false },
                { "fetchCrossBorrowRate", false },
                { "fetchCrossBorrowRates", false },
                { "fetchFundingHistory", false },
                { "fetchFundingInterval", false },
                { "fetchFundingIntervals", false },
                { "fetchFundingRate", false },
                { "fetchFundingRateHistory", false },
                { "fetchFundingRates", false },
                { "fetchGreeks", false },
                { "fetchIndexOHLCV", false },
                { "fetchIsolatedBorrowRate", false },
                { "fetchIsolatedBorrowRates", false },
                { "fetchIsolatedPositions", false },
                { "fetchLeverage", false },
                { "fetchLeverages", false },
                { "fetchLeverageTiers", false },
                { "fetchLiquidations", false },
                { "fetchLongShortRatio", false },
                { "fetchLongShortRatioHistory", false },
                { "fetchMarginAdjustmentHistory", false },
                { "fetchMarginMode", false },
                { "fetchMarginModes", false },
                { "fetchMarketLeverageTiers", false },
                { "fetchMarkOHLCV", false },
                { "fetchMarkPrices", false },
                { "fetchMyLiquidations", false },
                { "fetchMySettlementHistory", false },
                { "fetchMyTrades", true },
                { "fetchOpenInterest", false },
                { "fetchOpenInterestHistory", false },
                { "fetchOpenInterests", false },
                { "fetchOption", false },
                { "fetchOptionChain", false },
                { "fetchOrderBook", true },
                { "fetchPosition", false },
                { "fetchPositionHistory", false },
                { "fetchPositionMode", false },
                { "fetchPositions", false },
                { "fetchPositionsForSymbol", false },
                { "fetchPositionsHistory", false },
                { "fetchPositionsRisk", false },
                { "fetchPremiumIndexOHLCV", false },
                { "fetchSettlementHistory", false },
                { "fetchTicker", true },
                { "fetchTickers", true },
                { "fetchTrades", true },
                { "fetchTradingFee", false },
                { "fetchTradingFees", false },
                { "fetchVolatilityHistory", false },
                { "reduceMargin", false },
                { "repayCrossMargin", false },
                { "repayIsolatedMargin", false },
                { "repayMargin", false },
                { "setLeverage", false },
                { "setMargin", false },
                { "setMarginMode", false },
                { "setPositionMode", false },
                { "ws", false },
            } },
            { "urls", new Dictionary<string, object>() {
                { "logo", "https://user-images.githubusercontent.com/1294454/28208429-3cacdf9a-6896-11e7-854e-4c79a772a30f.jpg" },
                { "api", new Dictionary<string, object>() {
                    { "public", "https://www.coinspot.com.au/pubapi" },
                    { "private", "https://www.coinspot.com.au/api" },
                } },
                { "www", "https://www.coinspot.com.au" },
                { "doc", "https://www.coinspot.com.au/api" },
                { "referral", "https://www.coinspot.com.au/register?code=PJURCU" },
            } },
            { "api", new Dictionary<string, object>() {
                { "public", new Dictionary<string, object>() {
                    { "get", new List<object>() {"latest"} },
                } },
                { "private", new Dictionary<string, object>() {
                    { "post", new List<object>() {"orders", "orders/history", "my/coin/deposit", "my/coin/send", "quote/buy", "quote/sell", "my/balances", "my/orders", "my/buy", "my/sell", "my/buy/cancel", "my/sell/cancel", "ro/my/balances", "ro/my/balances/{cointype}", "ro/my/deposits", "ro/my/withdrawals", "ro/my/transactions", "ro/my/transactions/{cointype}", "ro/my/transactions/open", "ro/my/transactions/{cointype}/open", "ro/my/sendreceive", "ro/my/affiliatepayments", "ro/my/referralpayments"} },
                } },
            } },
            { "markets", new Dictionary<string, object>() {
                { "ADA/AUD", this.safeMarketStructure(new Dictionary<string, object>() {
                    { "id", "ada" },
                    { "symbol", "ADA/AUD" },
                    { "base", "ADA" },
                    { "quote", "AUD" },
                    { "baseId", "ada" },
                    { "quoteId", "aud" },
                    { "type", "spot" },
                    { "spot", true },
                }) },
                { "BTC/AUD", this.safeMarketStructure(new Dictionary<string, object>() {
                    { "id", "btc" },
                    { "symbol", "BTC/AUD" },
                    { "base", "BTC" },
                    { "quote", "AUD" },
                    { "baseId", "btc" },
                    { "quoteId", "aud" },
                    { "type", "spot" },
                    { "spot", true },
                }) },
                { "ETH/AUD", this.safeMarketStructure(new Dictionary<string, object>() {
                    { "id", "eth" },
                    { "symbol", "ETH/AUD" },
                    { "base", "ETH" },
                    { "quote", "AUD" },
                    { "baseId", "eth" },
                    { "quoteId", "aud" },
                    { "type", "spot" },
                    { "spot", true },
                }) },
                { "XRP/AUD", this.safeMarketStructure(new Dictionary<string, object>() {
                    { "id", "xrp" },
                    { "symbol", "XRP/AUD" },
                    { "base", "XRP" },
                    { "quote", "AUD" },
                    { "baseId", "xrp" },
                    { "quoteId", "aud" },
                    { "type", "spot" },
                    { "spot", true },
                }) },
                { "LTC/AUD", this.safeMarketStructure(new Dictionary<string, object>() {
                    { "id", "ltc" },
                    { "symbol", "LTC/AUD" },
                    { "base", "LTC" },
                    { "quote", "AUD" },
                    { "baseId", "ltc" },
                    { "quoteId", "aud" },
                    { "type", "spot" },
                    { "spot", true },
                }) },
                { "DOGE/AUD", this.safeMarketStructure(new Dictionary<string, object>() {
                    { "id", "doge" },
                    { "symbol", "DOGE/AUD" },
                    { "base", "DOGE" },
                    { "quote", "AUD" },
                    { "baseId", "doge" },
                    { "quoteId", "aud" },
                    { "type", "spot" },
                    { "spot", true },
                }) },
                { "RFOX/AUD", this.safeMarketStructure(new Dictionary<string, object>() {
                    { "id", "rfox" },
                    { "symbol", "RFOX/AUD" },
                    { "base", "RFOX" },
                    { "quote", "AUD" },
                    { "baseId", "rfox" },
                    { "quoteId", "aud" },
                    { "type", "spot" },
                    { "spot", true },
                }) },
                { "POWR/AUD", this.safeMarketStructure(new Dictionary<string, object>() {
                    { "id", "powr" },
                    { "symbol", "POWR/AUD" },
                    { "base", "POWR" },
                    { "quote", "AUD" },
                    { "baseId", "powr" },
                    { "quoteId", "aud" },
                    { "type", "spot" },
                    { "spot", true },
                }) },
                { "NEO/AUD", this.safeMarketStructure(new Dictionary<string, object>() {
                    { "id", "neo" },
                    { "symbol", "NEO/AUD" },
                    { "base", "NEO" },
                    { "quote", "AUD" },
                    { "baseId", "neo" },
                    { "quoteId", "aud" },
                    { "type", "spot" },
                    { "spot", true },
                }) },
                { "TRX/AUD", this.safeMarketStructure(new Dictionary<string, object>() {
                    { "id", "trx" },
                    { "symbol", "TRX/AUD" },
                    { "base", "TRX" },
                    { "quote", "AUD" },
                    { "baseId", "trx" },
                    { "quoteId", "aud" },
                    { "type", "spot" },
                    { "spot", true },
                }) },
                { "EOS/AUD", this.safeMarketStructure(new Dictionary<string, object>() {
                    { "id", "eos" },
                    { "symbol", "EOS/AUD" },
                    { "base", "EOS" },
                    { "quote", "AUD" },
                    { "baseId", "eos" },
                    { "quoteId", "aud" },
                    { "type", "spot" },
                    { "spot", true },
                }) },
                { "XLM/AUD", this.safeMarketStructure(new Dictionary<string, object>() {
                    { "id", "xlm" },
                    { "symbol", "XLM/AUD" },
                    { "base", "XLM" },
                    { "quote", "AUD" },
                    { "baseId", "xlm" },
                    { "quoteId", "aud" },
                    { "type", "spot" },
                    { "spot", true },
                }) },
                { "RHOC/AUD", this.safeMarketStructure(new Dictionary<string, object>() {
                    { "id", "rhoc" },
                    { "symbol", "RHOC/AUD" },
                    { "base", "RHOC" },
                    { "quote", "AUD" },
                    { "baseId", "rhoc" },
                    { "quoteId", "aud" },
                    { "type", "spot" },
                    { "spot", true },
                }) },
                { "GAS/AUD", this.safeMarketStructure(new Dictionary<string, object>() {
                    { "id", "gas" },
                    { "symbol", "GAS/AUD" },
                    { "base", "GAS" },
                    { "quote", "AUD" },
                    { "baseId", "gas" },
                    { "quoteId", "aud" },
                    { "type", "spot" },
                    { "spot", true },
                }) },
            } },
            { "commonCurrencies", new Dictionary<string, object>() {
                { "DRK", "DASH" },
            } },
            { "options", new Dictionary<string, object>() {
                { "fetchBalance", "private_post_my_balances" },
            } },
            { "features", new Dictionary<string, object>() {
                { "spot", new Dictionary<string, object>() {
                    { "sandbox", false },
                    { "createOrder", new Dictionary<string, object>() {
                        { "marginMode", false },
                        { "triggerPrice", false },
                        { "triggerPriceType", null },
                        { "triggerDirection", false },
                        { "stopLossPrice", false },
                        { "takeProfitPrice", false },
                        { "attachedStopLossTakeProfit", null },
                        { "timeInForce", new Dictionary<string, object>() {
                            { "IOC", false },
                            { "FOK", false },
                            { "PO", false },
                            { "GTD", false },
                        } },
                        { "hedged", false },
                        { "trailing", false },
                        { "leverage", false },
                        { "marketBuyByCost", false },
                        { "marketBuyRequiresPrice", false },
                        { "selfTradePrevention", false },
                        { "iceberg", false },
                    } },
                    { "createOrders", null },
                    { "fetchMyTrades", new Dictionary<string, object>() {
                        { "marginMode", false },
                        { "limit", null },
                        { "daysBack", 100000 },
                        { "untilDays", 100000 },
                        { "symbolRequired", false },
                    } },
                    { "fetchOrder", null },
                    { "fetchOpenOrders", null },
                    { "fetchOrders", null },
                    { "fetchClosedOrders", null },
                    { "fetchOHLCV", null },
                } },
                { "swap", new Dictionary<string, object>() {
                    { "linear", null },
                    { "inverse", null },
                } },
                { "future", new Dictionary<string, object>() {
                    { "linear", null },
                    { "inverse", null },
                } },
            } },
            { "precisionMode", TICK_SIZE },
        });
    }

    public override object parseBalance(object response)
    {
        object result = new Dictionary<string, object>() {
            { "info", response },
        };
        object balances = this.safeValue2(response, "balance", "balances");
        if (isTrue(((balances is IList<object>) || (balances.GetType().IsGenericType && balances.GetType().GetGenericTypeDefinition().IsAssignableFrom(typeof(List<>))))))
        {
            for (object i = 0; isLessThan(i, getArrayLength(balances)); postFixIncrement(ref i))
            {
                object currencies = getValue(balances, i);
                object currencyIds = new List<object>(((IDictionary<string,object>)currencies).Keys);
                for (object j = 0; isLessThan(j, getArrayLength(currencyIds)); postFixIncrement(ref j))
                {
                    object currencyId = getValue(currencyIds, j);
                    object balance = getValue(currencies, currencyId);
                    object code = this.safeCurrencyCode(currencyId);
                    object account = this.account();
                    ((IDictionary<string,object>)account)["total"] = this.safeString(balance, "balance");
                    ((IDictionary<string,object>)result)[(string)code] = account;
                }
            }
        } else
        {
            object currencyIds = new List<object>(((IDictionary<string,object>)balances).Keys);
            for (object i = 0; isLessThan(i, getArrayLength(currencyIds)); postFixIncrement(ref i))
            {
                object currencyId = getValue(currencyIds, i);
                object code = this.safeCurrencyCode(currencyId);
                object account = this.account();
                ((IDictionary<string,object>)account)["total"] = this.safeString(balances, currencyId);
                ((IDictionary<string,object>)result)[(string)code] = account;
            }
        }
        return this.safeBalance(result);
    }

    /**
     * @method
     * @name coinspot#fetchBalance
     * @description query for balance and get the amount of funds available for trading or funds locked in orders
     * @see https://www.coinspot.com.au/api#listmybalance
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object} a [balance structure]{@link https://docs.ccxt.com/#/?id=balance-structure}
     */
    public async override Task<object> fetchBalance(object parameters = null)
    {
        parameters ??= new Dictionary<string, object>();
        await this.loadMarkets();
        object method = this.safeString(this.options, "fetchBalance", "private_post_my_balances");
        object response = await ((Task<object>)callDynamically(this, method, new object[] { parameters }));
        //
        // read-write api keys
        //
        //     ...
        //
        // read-only api keys
        //
        //     {
        //         "status":"ok",
        //         "balances":[
        //             {
        //                 "LTC":{"balance":0.1,"audbalance":16.59,"rate":165.95}
        //             }
        //         ]
        //     }
        //
        return this.parseBalance(response);
    }

    /**
     * @method
     * @name coinspot#fetchOrderBook
     * @description fetches information on open orders with bid (buy) and ask (sell) prices, volumes and other data
     * @see https://www.coinspot.com.au/api#listopenorders
     * @param {string} symbol unified symbol of the market to fetch the order book for
     * @param {int} [limit] the maximum amount of order book entries to return
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object} A dictionary of [order book structures]{@link https://docs.ccxt.com/#/?id=order-book-structure} indexed by market symbols
     */
    public async override Task<object> fetchOrderBook(object symbol, object limit = null, object parameters = null)
    {
        parameters ??= new Dictionary<string, object>();
        await this.loadMarkets();
        object market = this.market(symbol);
        object request = new Dictionary<string, object>() {
            { "cointype", getValue(market, "id") },
        };
        object orderbook = await this.privatePostOrders(this.extend(request, parameters));
        return this.parseOrderBook(orderbook, getValue(market, "symbol"), null, "buyorders", "sellorders", "rate", "amount");
    }

    public override object parseTicker(object ticker, object market = null)
    {
        //
        //     {
        //         "btc":{
        //             "bid":"51970",
        //             "ask":"53000",
        //             "last":"52806.47"
        //         }
        //     }
        //
        object symbol = this.safeSymbol(null, market);
        object last = this.safeString(ticker, "last");
        return this.safeTicker(new Dictionary<string, object>() {
            { "symbol", symbol },
            { "timestamp", null },
            { "datetime", null },
            { "high", null },
            { "low", null },
            { "bid", this.safeString(ticker, "bid") },
            { "bidVolume", null },
            { "ask", this.safeString(ticker, "ask") },
            { "askVolume", null },
            { "vwap", null },
            { "open", null },
            { "close", last },
            { "last", last },
            { "previousClose", null },
            { "change", null },
            { "percentage", null },
            { "average", null },
            { "baseVolume", null },
            { "quoteVolume", null },
            { "info", ticker },
        }, market);
    }

    /**
     * @method
     * @name coinspot#fetchTicker
     * @description fetches a price ticker, a statistical calculation with the information calculated over the past 24 hours for a specific market
     * @see https://www.coinspot.com.au/api#latestprices
     * @param {string} symbol unified symbol of the market to fetch the ticker for
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object} a [ticker structure]{@link https://docs.ccxt.com/#/?id=ticker-structure}
     */
    public async override Task<object> fetchTicker(object symbol, object parameters = null)
    {
        parameters ??= new Dictionary<string, object>();
        await this.loadMarkets();
        object market = this.market(symbol);
        object response = await this.publicGetLatest(parameters);
        object id = getValue(market, "id");
        id = ((string)id).ToLower();
        object prices = this.safeDict(response, "prices", new Dictionary<string, object>() {});
        //
        //     {
        //         "status":"ok",
        //         "prices":{
        //             "btc":{
        //                 "bid":"52732.47000022",
        //                 "ask":"53268.0699976",
        //                 "last":"53284.03"
        //             }
        //         }
        //     }
        //
        object ticker = this.safeDict(prices, id);
        return this.parseTicker(ticker, market);
    }

    /**
     * @method
     * @name coinspot#fetchTickers
     * @description fetches price tickers for multiple markets, statistical information calculated over the past 24 hours for each market
     * @see https://www.coinspot.com.au/api#latestprices
     * @param {string[]|undefined} symbols unified symbols of the markets to fetch the ticker for, all market tickers are returned if not assigned
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object} a dictionary of [ticker structures]{@link https://docs.ccxt.com/#/?id=ticker-structure}
     */
    public async override Task<object> fetchTickers(object symbols = null, object parameters = null)
    {
        parameters ??= new Dictionary<string, object>();
        await this.loadMarkets();
        object response = await this.publicGetLatest(parameters);
        //
        //    {
        //        "status": "ok",
        //        "prices":   {
        //            "btc":   {
        //                "bid": "25050",
        //                "ask": "25370",
        //                "last": "25234"
        //            },
        //            "ltc":   {
        //                "bid": "79.39192993",
        //                "ask": "87.98",
        //                "last": "87.95"
        //            }
        //        }
        //    }
        //
        object result = new Dictionary<string, object>() {};
        object prices = this.safeDict(response, "prices", new Dictionary<string, object>() {});
        object ids = new List<object>(((IDictionary<string,object>)prices).Keys);
        for (object i = 0; isLessThan(i, getArrayLength(ids)); postFixIncrement(ref i))
        {
            object id = getValue(ids, i);
            object market = this.safeMarket(id);
            if (isTrue(getValue(market, "spot")))
            {
                object symbol = getValue(market, "symbol");
                object ticker = getValue(prices, id);
                ((IDictionary<string,object>)result)[(string)symbol] = this.parseTicker(ticker, market);
            }
        }
        return this.filterByArrayTickers(result, "symbol", symbols);
    }

    /**
     * @method
     * @name coinspot#fetchTrades
     * @description get the list of most recent trades for a particular symbol
     * @see https://www.coinspot.com.au/api#orderhistory
     * @param {string} symbol unified symbol of the market to fetch trades for
     * @param {int} [since] timestamp in ms of the earliest trade to fetch
     * @param {int} [limit] the maximum amount of trades to fetch
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {Trade[]} a list of [trade structures]{@link https://docs.ccxt.com/#/?id=public-trades}
     */
    public async override Task<object> fetchTrades(object symbol, object since = null, object limit = null, object parameters = null)
    {
        parameters ??= new Dictionary<string, object>();
        await this.loadMarkets();
        object market = this.market(symbol);
        object request = new Dictionary<string, object>() {
            { "cointype", getValue(market, "id") },
        };
        object response = await this.privatePostOrdersHistory(this.extend(request, parameters));
        //
        //     {
        //         "status":"ok",
        //         "orders":[
        //             {"amount":0.00102091,"rate":21549.09999991,"total":21.99969168,"coin":"BTC","solddate":1604890646143,"market":"BTC/AUD"},
        //         ],
        //     }
        //
        object trades = this.safeList(response, "orders", new List<object>() {});
        return this.parseTrades(trades, market, since, limit);
    }

    /**
     * @method
     * @name coinspot#fetchMyTrades
     * @description fetch all trades made by the user
     * @see https://www.coinspot.com.au/api#rotransaction
     * @param {string} symbol unified market symbol
     * @param {int} [since] the earliest time in ms to fetch trades for
     * @param {int} [limit] the maximum number of trades structures to retrieve
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {Trade[]} a list of [trade structures]{@link https://docs.ccxt.com/#/?id=trade-structure}
     */
    public async override Task<object> fetchMyTrades(object symbol = null, object since = null, object limit = null, object parameters = null)
    {
        parameters ??= new Dictionary<string, object>();
        await this.loadMarkets();
        object request = new Dictionary<string, object>() {};
        object market = null;
        if (isTrue(!isEqual(symbol, null)))
        {
            market = this.market(symbol);
        }
        if (isTrue(!isEqual(since, null)))
        {
            ((IDictionary<string,object>)request)["startdate"] = this.yyyymmdd(since);
        }
        object response = await this.privatePostRoMyTransactions(this.extend(request, parameters));
        //  {
        //      "status": "ok",
        //      "buyorders": [
        //          {
        //              "otc": false,
        //              "market": "ALGO/AUD",
        //              "amount": 386.95197925,
        //              "created": "2022-10-20T09:56:44.502Z",
        //              "audfeeExGst": 1.80018002,
        //              "audGst": 0.180018,
        //              "audtotal": 200
        //          },
        //      ],
        //      "sellorders": [
        //          {
        //              "otc": false,
        //              "market": "SOLO/ALGO",
        //              "amount": 154.52345614,
        //              "total": 115.78858204658796,
        //              "created": "2022-04-16T09:36:43.698Z",
        //              "audfeeExGst": 1.08995731,
        //              "audGst": 0.10899573,
        //              "audtotal": 118.7
        //          },
        //      ]
        // }
        object buyTrades = this.safeList(response, "buyorders", new List<object>() {});
        for (object i = 0; isLessThan(i, getArrayLength(buyTrades)); postFixIncrement(ref i))
        {
            ((IDictionary<string,object>)getValue(buyTrades, i))["side"] = "buy";
        }
        object sellTrades = this.safeList(response, "sellorders", new List<object>() {});
        for (object i = 0; isLessThan(i, getArrayLength(sellTrades)); postFixIncrement(ref i))
        {
            ((IDictionary<string,object>)getValue(sellTrades, i))["side"] = "sell";
        }
        object trades = this.arrayConcat(buyTrades, sellTrades);
        return this.parseTrades(trades, market, since, limit);
    }

    public override object parseTrade(object trade, object market = null)
    {
        //
        // public fetchTrades
        //
        //     {
        //         "amount":0.00102091,
        //         "rate":21549.09999991,
        //         "total":21.99969168,
        //         "coin":"BTC",
        //         "solddate":1604890646143,
        //         "market":"BTC/AUD"
        //     }
        //
        // private fetchMyTrades
        //     {
        //       "otc": false,
        //       "market": "ALGO/AUD",
        //       "amount": 386.95197925,
        //       "created": "2022-10-20T09:56:44.502Z",
        //       "audfeeExGst": 1.80018002,
        //       "audGst": 0.180018,
        //       "audtotal": 200,
        //       "total": 200,
        //       "side": "buy",
        //       "price": 0.5168600000125209
        //     }
        object timestamp = null;
        object priceString = null;
        object fee = null;
        object audTotal = this.safeString(trade, "audtotal");
        object costString = this.safeString(trade, "total", audTotal);
        object side = this.safeString(trade, "side");
        object amountString = this.safeString(trade, "amount");
        object marketId = this.safeString(trade, "market");
        object symbol = this.safeSymbol(marketId, market, "/");
        object solddate = this.safeInteger(trade, "solddate");
        if (isTrue(!isEqual(solddate, null)))
        {
            priceString = this.safeString(trade, "rate");
            timestamp = solddate;
        } else
        {
            priceString = Precise.stringDiv(costString, amountString);
            object createdString = this.safeString(trade, "created");
            timestamp = this.parse8601(createdString);
            object audfeeExGst = this.safeString(trade, "audfeeExGst");
            object audGst = this.safeString(trade, "audGst");
            // The transaction fee which consumers pay is inclusive of GST by default
            object feeCost = Precise.stringAdd(audfeeExGst, audGst);
            object feeCurrencyId = "AUD";
            fee = new Dictionary<string, object>() {
                { "cost", this.parseNumber(feeCost) },
                { "currency", this.safeCurrencyCode(feeCurrencyId) },
            };
        }
        return this.safeTrade(new Dictionary<string, object>() {
            { "info", trade },
            { "id", null },
            { "symbol", symbol },
            { "timestamp", timestamp },
            { "datetime", this.iso8601(timestamp) },
            { "order", null },
            { "type", null },
            { "side", side },
            { "takerOrMaker", null },
            { "price", this.parseNumber(priceString) },
            { "amount", this.parseNumber(amountString) },
            { "cost", this.parseNumber(costString) },
            { "fee", fee },
        }, market);
    }

    /**
     * @method
     * @name coinspot#createOrder
     * @description create a trade order
     * @see https://www.coinspot.com.au/api#placebuyorder
     * @param {string} symbol unified symbol of the market to create an order in
     * @param {string} type must be 'limit'
     * @param {string} side 'buy' or 'sell'
     * @param {float} amount how much of currency you want to trade in units of base currency
     * @param {float} [price] the price at which the order is to be fulfilled, in units of the quote currency, ignored in market orders
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object} an [order structure]{@link https://docs.ccxt.com/#/?id=order-structure}
     */
    public async override Task<object> createOrder(object symbol, object type, object side, object amount, object price = null, object parameters = null)
    {
        parameters ??= new Dictionary<string, object>();
        await this.loadMarkets();
        object method = add("privatePostMy", this.capitalize(side));
        if (isTrue(isEqual(type, "market")))
        {
            throw new ExchangeError ((string)add(this.id, " createOrder() allows limit orders only")) ;
        }
        object market = this.market(symbol);
        object request = new Dictionary<string, object>() {
            { "cointype", getValue(market, "id") },
            { "amount", amount },
            { "rate", price },
        };
        object response = await ((Task<object>)callDynamically(this, method, new object[] { this.extend(request, parameters) }));
        return this.parseOrder(response);
    }

    /**
     * @method
     * @name coinspot#cancelOrder
     * @description cancels an open order
     * @see https://www.coinspot.com.au/api#cancelbuyorder
     * @see https://www.coinspot.com.au/api#cancelsellorder
     * @param {string} id order id
     * @param {string} symbol not used by coinspot cancelOrder ()
     * @param {object} [params] extra parameters specific to the exchange API endpoint
     * @returns {object} An [order structure]{@link https://docs.ccxt.com/#/?id=order-structure}
     */
    public async override Task<object> cancelOrder(object id, object symbol = null, object parameters = null)
    {
        parameters ??= new Dictionary<string, object>();
        object side = this.safeString(parameters, "side");
        if (isTrue(isTrue(!isEqual(side, "buy")) && isTrue(!isEqual(side, "sell"))))
        {
            throw new ArgumentsRequired ((string)add(this.id, " cancelOrder() requires a side parameter, \"buy\" or \"sell\"")) ;
        }
        parameters = this.omit(parameters, "side");
        object request = new Dictionary<string, object>() {
            { "id", id },
        };
        object response = null;
        if (isTrue(isEqual(side, "buy")))
        {
            response = await this.privatePostMyBuyCancel(this.extend(request, parameters));
        } else
        {
            response = await this.privatePostMySellCancel(this.extend(request, parameters));
        }
        //
        // status - ok, error
        //
        return this.safeOrder(new Dictionary<string, object>() {
            { "info", response },
        });
    }

    public override object sign(object path, object api = null, object method = null, object parameters = null, object headers = null, object body = null)
    {
        api ??= "public";
        method ??= "GET";
        parameters ??= new Dictionary<string, object>();
        object url = add(add(getValue(getValue(this.urls, "api"), api), "/"), path);
        if (isTrue(isEqual(api, "private")))
        {
            this.checkRequiredCredentials();
            object nonce = this.nonce();
            body = this.json(this.extend(new Dictionary<string, object>() {
                { "nonce", nonce },
            }, parameters));
            headers = new Dictionary<string, object>() {
                { "Content-Type", "application/json" },
                { "key", this.apiKey },
                { "sign", this.hmac(this.encode(body), this.encode(this.secret), sha512) },
            };
        }
        return new Dictionary<string, object>() {
            { "url", url },
            { "method", method },
            { "body", body },
            { "headers", headers },
        };
    }
}
