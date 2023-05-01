import { ColumnOptions, column } from '@ioc:Adonis/Lucid/Orm'
import currency from 'currency.js'

export const currencyColumn = (options?: Partial<ColumnOptions>) => column({
  consume: (value) => currency(value),
  prepare: (curr:currency) => curr.value,
  ...options,
})
