
//  ---------------------------------------------------------------------------

import binance from './binance.js';
import binancecoinmRest from '../binancecoinm.js';

// ---------------------------------------------------------------------------

export default class binancecoinm extends binance {
    describe (): any {
        // eslint-disable-next-line new-cap
        const restInstance = new binancecoinmRest ();
        const restDescribe = restInstance.describe ();
        const extended = this.deepExtend (super.describe (), restDescribe);
        return this.deepExtend (extended, {
            'id': 'binancecoinm',
            'name': 'Binance COIN-M',
            'urls': {
                'logo': 'https://user-images.githubusercontent.com/1294454/117738721-668c8d80-b205-11eb-8c49-3fad84c4a07f.jpg',
                'doc': 'https://developers.binance.com/en',
            },
            'options': {
                'fetchMarkets': {
                    'types': [ 'inverse' ],
                },
                'defaultSubType': 'inverse',
            },
        });
    }
}
