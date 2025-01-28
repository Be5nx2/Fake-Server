import Fastify, { fastify, FastifyInstance, RouteShorthandOptions } from 'fastify'
import { Server, IncomingMessage, ServerResponse } from 'http'
import  createRoute from './api_creator/api-creator' 
import {FilesUtil, FileContent} from './file_reader/files-utils'

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


const fileReader = new FilesUtil("./resources/endpoints")

// read all file 
// create endpoint



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