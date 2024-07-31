import fastify from 'fastify'
import { transactionsRoutes } from './routes/transactions'
import cookie from '@fastify/cookie'

export const app = fastify()

// Register cookies modules
app.register(cookie)

// Plugins fastify routes
app.register(transactionsRoutes, {
  prefix: 'transactions',
})
