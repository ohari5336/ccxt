package base
import "github.com/ccxt/ccxt/go/v4"

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code


    func TestMarket(exchange ccxt.IExchange, skippedProperties interface{}, method interface{}, market interface{})  {
        var format interface{} = map[string]interface{} {
            "id": "btcusd",
            "symbol": "BTC/USD",
            "base": "BTC",
            "quote": "USD",
            "taker": exchange.ParseNumber("0.0011"),
            "maker": exchange.ParseNumber("0.0009"),
            "baseId": "btc",
            "quoteId": "usd",
            "active": false,
            "type": "spot",
            "linear": false,
            "inverse": false,
            "spot": false,
            "swap": false,
            "future": false,
            "option": false,
            "margin": false,
            "contract": false,
            "contractSize": exchange.ParseNumber("0.001"),
            "expiry": 1656057600000,
            "expiryDatetime": "2022-06-24T08:00:00.000Z",
            "optionType": "put",
            "strike": exchange.ParseNumber("56000"),
            "settle": "XYZ",
            "settleId": "Xyz",
            "precision": map[string]interface{} {
                "price": exchange.ParseNumber("0.001"),
                "amount": exchange.ParseNumber("0.001"),
                "cost": exchange.ParseNumber("0.001"),
            },
            "limits": map[string]interface{} {
                "amount": map[string]interface{} {
                    "min": exchange.ParseNumber("0.01"),
                    "max": exchange.ParseNumber("1000"),
                },
                "price": map[string]interface{} {
                    "min": exchange.ParseNumber("0.01"),
                    "max": exchange.ParseNumber("1000"),
                },
                "cost": map[string]interface{} {
                    "min": exchange.ParseNumber("0.01"),
                    "max": exchange.ParseNumber("1000"),
                },
            },
            "marginModes": map[string]interface{} {
                "cross": true,
                "isolated": false,
            },
            "info": map[string]interface{} {},
        }
        var emptyAllowedFor interface{} = []interface{}{"linear", "inverse", "settle", "settleId", "expiry", "expiryDatetime", "optionType", "strike", "margin", "contractSize"}
        AssertStructure(exchange, skippedProperties, method, market, format, emptyAllowedFor)
        AssertSymbol(exchange, skippedProperties, method, market, "symbol")
        var logText interface{} = LogTemplate(exchange, method, market)
        //
        var validTypes interface{} = []interface{}{"spot", "margin", "swap", "future", "option", "index", "other"}
        AssertInArray(exchange, skippedProperties, method, market, "type", validTypes)
        var hasIndex interface{} =     (InOp(market, "index")) // todo: add in all
        // check if string is consistent with 'type'
        if IsTrue(GetValue(market, "spot")) {
            Assert(IsEqual(GetValue(market, "type"), "spot"), Add("\"type\" string should be \"spot\" when spot is true", logText))
        } else if IsTrue(GetValue(market, "swap")) {
            Assert(IsEqual(GetValue(market, "type"), "swap"), Add("\"type\" string should be \"swap\" when swap is true", logText))
        } else if IsTrue(GetValue(market, "future")) {
            Assert(IsEqual(GetValue(market, "type"), "future"), Add("\"type\" string should be \"future\" when future is true", logText))
        } else if IsTrue(GetValue(market, "option")) {
            Assert(IsEqual(GetValue(market, "type"), "option"), Add("\"type\" string should be \"option\" when option is true", logText))
        } else if IsTrue(IsTrue(hasIndex) && IsTrue(GetValue(market, "index"))) {
            // todo: add index in all implementations
            Assert(IsEqual(GetValue(market, "type"), "index"), Add("\"type\" string should be \"index\" when index is true", logText))
        }
        // margin check (todo: add margin as mandatory, instead of undefined)
        if IsTrue(GetValue(market, "spot")) {
            // for spot market, 'margin' can be either true/false or undefined
            AssertInArray(exchange, skippedProperties, method, market, "margin", []interface{}{true, false, nil})
        } else {
            // otherwise, it must be false or undefined
            AssertInArray(exchange, skippedProperties, method, market, "margin", []interface{}{false, nil})
        }
        if !IsTrue((InOp(skippedProperties, "contractSize"))) {
            if !IsTrue(GetValue(market, "spot")) {
                // if not spot, then contractSize should be defined
                Assert(!IsEqual(GetValue(market, "contractSize"), nil), Add("\"contractSize\" must be defined when \"spot\" is false", logText))
            }
            AssertGreater(exchange, skippedProperties, method, market, "contractSize", "0")
        }
        // typical values
        AssertGreater(exchange, skippedProperties, method, market, "expiry", "0")
        AssertGreater(exchange, skippedProperties, method, market, "strike", "0")
        AssertInArray(exchange, skippedProperties, method, market, "optionType", []interface{}{"put", "call"})
        AssertGreater(exchange, skippedProperties, method, market, "taker", "-100")
        AssertGreater(exchange, skippedProperties, method, market, "maker", "-100")
        // 'contract' boolean check
        if IsTrue(IsTrue(IsTrue(IsTrue(GetValue(market, "future")) || IsTrue(GetValue(market, "swap"))) || IsTrue(GetValue(market, "option"))) || IsTrue((IsTrue(hasIndex) && IsTrue(GetValue(market, "index"))))) {
            // if it's some kind of contract market, then `conctract` should be true
            Assert(GetValue(market, "contract"), Add("\"contract\" must be true when \"future\", \"swap\", \"option\" or \"index\" is true", logText))
        } else {
            Assert(!IsTrue(GetValue(market, "contract")), Add("\"contract\" must be false when neither \"future\", \"swap\",\"option\" or \"index\" is true", logText))
        }
        var isSwapOrFuture interface{} = IsTrue(GetValue(market, "swap")) || IsTrue(GetValue(market, "future"))
        var contractSize interface{} = exchange.SafeString(market, "contractSize")
        // contract fields
        if IsTrue(GetValue(market, "contract")) {
            // linear & inverse should have different values (true/false)
            // todo: expand logic on other market types
            if IsTrue(isSwapOrFuture) {
                Assert(!IsEqual(GetValue(market, "linear"), GetValue(market, "inverse")), Add("market linear and inverse must not be the same", logText))
                if !IsTrue((InOp(skippedProperties, "contractSize"))) {
                    // contract size should be defined
                    Assert(!IsEqual(contractSize, nil), Add("\"contractSize\" must be defined when \"contract\" is true", logText))
                    // contract size should be above zero
                    Assert(ccxt.Precise.StringGt(contractSize, "0"), Add("\"contractSize\" must be > 0 when \"contract\" is true", logText))
                }
                if !IsTrue((InOp(skippedProperties, "settle"))) {
                    // settle should be defined
                    Assert(IsTrue((!IsEqual(GetValue(market, "settle"), nil))) && IsTrue((!IsEqual(GetValue(market, "settleId"), nil))), Add("\"settle\" & \"settleId\" must be defined when \"contract\" is true", logText))
                }
            }
            // spot should be false
            Assert(!IsTrue(GetValue(market, "spot")), Add("\"spot\" must be false when \"contract\" is true", logText))
        } else {
            // linear & inverse needs to be undefined
            Assert(IsTrue((IsEqual(GetValue(market, "linear"), nil))) && IsTrue((IsEqual(GetValue(market, "inverse"), nil))), Add("market linear and inverse must be undefined when \"contract\" is false", logText))
            // contract size should be undefined
            if !IsTrue((InOp(skippedProperties, "contractSize"))) {
                Assert(IsEqual(contractSize, nil), Add("\"contractSize\" must be undefined when \"contract\" is false", logText))
            }
            // settle should be undefined
            Assert(IsTrue((IsEqual(GetValue(market, "settle"), nil))) && IsTrue((IsEqual(GetValue(market, "settleId"), nil))), Add("\"settle\" must be undefined when \"contract\" is false", logText))
            // spot should be true
            Assert(GetValue(market, "spot"), Add("\"spot\" must be true when \"contract\" is false", logText))
        }
        // option fields
        if IsTrue(GetValue(market, "option")) {
            // if option, then strike and optionType should be defined
            Assert(!IsEqual(GetValue(market, "strike"), nil), Add("\"strike\" must be defined when \"option\" is true", logText))
            Assert(!IsEqual(GetValue(market, "optionType"), nil), Add("\"optionType\" must be defined when \"option\" is true", logText))
        } else {
            // if not option, then strike and optionType should be undefined
            Assert(IsEqual(GetValue(market, "strike"), nil), Add("\"strike\" must be undefined when \"option\" is false", logText))
            Assert(IsEqual(GetValue(market, "optionType"), nil), Add("\"optionType\" must be undefined when \"option\" is false", logText))
        }
        // future, swap and option should be mutually exclusive
        if IsTrue(GetValue(market, "future")) {
            Assert(!IsTrue(GetValue(market, "swap")) && !IsTrue(GetValue(market, "option")), Add("market swap and option must be false when \"future\" is true", logText))
        } else if IsTrue(GetValue(market, "swap")) {
            Assert(!IsTrue(GetValue(market, "future")) && !IsTrue(GetValue(market, "option")), Add("market future and option must be false when \"swap\" is true", logText))
        } else if IsTrue(GetValue(market, "option")) {
            Assert(!IsTrue(GetValue(market, "future")) && !IsTrue(GetValue(market, "swap")), Add("market future and swap must be false when \"option\" is true", logText))
        }
        // expiry field
        if IsTrue(IsTrue(GetValue(market, "future")) || IsTrue(GetValue(market, "option"))) {
            // future or option markets need 'expiry' and 'expiryDatetime'
            Assert(!IsEqual(GetValue(market, "expiry"), nil), Add("\"expiry\" must be defined when \"future\" is true", logText))
            Assert(!IsEqual(GetValue(market, "expiryDatetime"), nil), Add("\"expiryDatetime\" must be defined when \"future\" is true", logText))
            // expiry datetime should be correct
            var isoString interface{} = exchange.Iso8601(GetValue(market, "expiry"))
            Assert(IsEqual(GetValue(market, "expiryDatetime"), isoString), Add(Add(Add(Add(Add("expiryDatetime (\"", GetValue(market, "expiryDatetime")), "\") must be equal to expiry in iso8601 format \""), isoString), "\""), logText))
        } else {
            // otherwise, they need to be undefined
            Assert(IsTrue((IsEqual(GetValue(market, "expiry"), nil))) && IsTrue((IsEqual(GetValue(market, "expiryDatetime"), nil))), Add("\"expiry\" and \"expiryDatetime\" must be undefined when it is not future|option market", logText))
        }
        // check precisions
        if !IsTrue((InOp(skippedProperties, "precision"))) {
            var precisionKeys interface{} = ObjectKeys(GetValue(market, "precision"))
            var keysLength interface{} =         GetArrayLength(precisionKeys)
            Assert(IsGreaterThanOrEqual(keysLength, 2), Add("precision should have \"amount\" and \"price\" keys at least", logText))
            for i := 0; IsLessThan(i, GetArrayLength(precisionKeys)); i++ {
                CheckPrecisionAccuracy(exchange, skippedProperties, method, GetValue(market, "precision"), GetValue(precisionKeys, i))
            }
        }
        var isInactiveMarket interface{} = IsEqual(GetValue(market, "active"), false)
        // check limits
        if !IsTrue((InOp(skippedProperties, "limits"))) {
            var limitsKeys interface{} = ObjectKeys(GetValue(market, "limits"))
            var keysLength interface{} =         GetArrayLength(limitsKeys)
            Assert(IsGreaterThanOrEqual(keysLength, 3), Add("limits should have \"amount\", \"price\" and \"cost\" keys at least", logText))
            for i := 0; IsLessThan(i, GetArrayLength(limitsKeys)); i++ {
                var key interface{} = GetValue(limitsKeys, i)
                var limitEntry interface{} = GetValue(GetValue(market, "limits"), key)
                if IsTrue(isInactiveMarket) {
                    continue
                }
                // min >= 0
                AssertGreaterOrEqual(exchange, skippedProperties, method, limitEntry, "min", "0")
                // max >= 0
                AssertGreater(exchange, skippedProperties, method, limitEntry, "max", "0")
                // max >= min
                var minString interface{} = exchange.SafeString(limitEntry, "min")
                if IsTrue(!IsEqual(minString, nil)) {
                    AssertGreaterOrEqual(exchange, skippedProperties, method, limitEntry, "max", minString)
                }
            }
        }
        // check whether valid currency ID and CODE is used
        if IsTrue(!IsTrue((InOp(skippedProperties, "currency"))) && !IsTrue((InOp(skippedProperties, "currencyIdAndCode")))) {
            AssertValidCurrencyIdAndCode(exchange, skippedProperties, method, market, GetValue(market, "baseId"), GetValue(market, "base"))
            AssertValidCurrencyIdAndCode(exchange, skippedProperties, method, market, GetValue(market, "quoteId"), GetValue(market, "quote"))
            AssertValidCurrencyIdAndCode(exchange, skippedProperties, method, market, GetValue(market, "settleId"), GetValue(market, "settle"))
        }
        AssertTimestamp(exchange, skippedProperties, method, market, nil, "created")
        // margin modes
        if !IsTrue((InOp(skippedProperties, "marginModes"))) {
            var marginModes interface{} = exchange.SafeDict(market, "marginModes") // in future, remove safeDict
            Assert(InOp(marginModes, "cross"), Add("marginModes should have \"cross\" key", logText))
            Assert(InOp(marginModes, "isolated"), Add("marginModes should have \"isolated\" key", logText))
            AssertInArray(exchange, skippedProperties, method, marginModes, "cross", []interface{}{true, false, nil})
            AssertInArray(exchange, skippedProperties, method, marginModes, "isolated", []interface{}{true, false, nil})
        }
    }
