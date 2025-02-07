import Fastify, { fastify, FastifyInstance, RouteShorthandOptions } from 'fastify'
import { Server, IncomingMessage, ServerResponse } from 'http'
import { createRoute, Endpoint } from './api_creator/api-creator'
import { FilesUtil, FileContent } from './file_reader/files-utils'

const server: FastifyInstance = Fastify({ logger: true })

const opts: RouteShorthandOptions = {
}


const fileReader = new FilesUtil("./resources/endpoints")

const listOfFIleContent: FileContent[] = fileReader.getFileContentByFileName();

listOfFIleContent
  .forEach(file => {
    console.log(`Creation of endpoint from : ${file.fileName}`);
    const endpoint: Endpoint = JSON.parse(file.body);
    createRoute(server, {}, endpoint);
  });



const start = async () => {
  try {
    await server.listen({ port: 3000 })

    const address = server.server.address()
    const port = typeof address === 'string' ? address : address?.port

  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()