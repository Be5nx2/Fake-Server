import Fastify, { fastify, FastifyInstance, RouteShorthandOptions } from 'fastify'
import { Server, IncomingMessage, ServerResponse } from 'http'
import  createRoute from './api_creator/api-creator'

const server: FastifyInstance = Fastify({logger : true})

const opts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          pong: {
            type: 'string'
          }
        }
      }
    }
  }
}

server.get('/ping', opts, async (request, reply) => {
  server.log.info('Incoming request at /ping')
  return { pong: 'it worked!' }
})


createRoute(server, opts, {method : "GET", path : "/test-url", statusCode : 200, body : {"sucess" : "magle"}})


const start = async () => {
  try {

    server.register

    await server.listen({ port: 3000 })

    const address = server.server.address()
    const port = typeof address === 'string' ? address : address?.port

  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()