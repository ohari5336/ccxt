# -*- coding: utf-8 -*-

# PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
# https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

from ccxt.async_support.binance import binance
from ccxt.abstract.binancecoinm import ImplicitAPI
from ccxt.base.types import Any


class binancecoinm(binance, ImplicitAPI):

    def describe(self) -> Any:
        return self.deep_extend(super(binancecoinm, self).describe(), {
            'id': 'binancecoinm',
            'name': 'Binance COIN-M',
            'urls': {
                'logo': 'https://github.com/user-attachments/assets/387cfc4e-5f33-48cd-8f5c-cd4854dabf0c',
                'doc': [
                    'https://binance-docs.github.io/apidocs/delivery/en/',
                    'https://binance-docs.github.io/apidocs/spot/en',
                    'https://developers.binance.com/en',
                ],
            },
            'has': {
                'CORS': None,
                'spot': False,
                'margin': False,
                'swap': True,
                'future': True,
                'option': None,
                'createStopMarketOrder': True,
            },
            'options': {
                'fetchMarkets': {
                    'types': [
                        'inverse',
                    ],
                },
                'defaultSubType': 'inverse',
                'leverageBrackets': None,
            },
        })

    async def transfer_in(self, code: str, amount, params={}):
        # transfer from spot wallet to coinm futures wallet
        return await self.futuresTransfer(code, amount, 3, params)

    async def transfer_out(self, code: str, amount, params={}):
        # transfer from coinm futures wallet to spot wallet
        return await self.futuresTransfer(code, amount, 4, params)
