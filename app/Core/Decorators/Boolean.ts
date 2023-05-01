import { ColumnOptions, column } from '@ioc:Adonis/Lucid/Orm'

export const booleanColumn = (options?: Partial<ColumnOptions>) => column({
  consume: (value) => Boolean(value),
  ...options,
})
