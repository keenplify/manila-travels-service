import { ColumnOptions, column } from '@ioc:Adonis/Lucid/Orm'
import currency from 'currency.js'
import Env from '@ioc:Adonis/Core/Env'

export const currencyColumn = (options?: Partial<ColumnOptions>) => column({
  consume: (value) => currency(value, {
    ...options,
    symbol: Env.get('CURRENCY_SYMBOL', 'AED'),
    pattern: '# !',
  }),
  prepare: (curr:currency) => curr.value,
})
