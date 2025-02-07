import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";

export interface Endpoint {
    method : string,
    path : string,
    statusCode : number, 
    body : object
}

 

export function createRoute(
    fastify : FastifyInstance,
    opts : FastifyPluginOptions,
    endpoint : Endpoint
){
    if(endpoint.method === 'GET'){
        fastify.get(
            endpoint.path,
            opts, 
            function replyGet(request, reply){
            fastify.log.info(`>>> ${endpoint.method} ${endpoint.path}` );

            reply
                .code(endpoint.statusCode)
                .send(endpoint.body);
        })
    }
    else {
        console.warn(`Endpoint ${endpoint.method} ${endpoint.method} will be ignored, not handling for ${endpoint.method} method`);
    }
    
}
