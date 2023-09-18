import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { fastifyMultipart } from '@fastify/multipart'
import path from "node:path";
import fs from 'node:fs';
import { pipeline } from 'node:stream';
import { randomUUID } from 'node:crypto';
import { promisify } from "node:util";

const pump = promisify(pipeline)

//criar
export async function uploadVideoRoute(app: FastifyInstance) {
  app.register(fastifyMultipart, {
    limits: {
      fileSize: 1_048_576 * 25, //1mega = 1048576  25mb
    }
  })

  app.post('/videos', async (request, reply) => {
    const data = await request.file()

    //erro
    if(!data){
      return reply.status(400).send({error: 'Missing file input.'})
    }

    const extension = path.extname(data.filename)

    if(extension !== '.mp3'){
      return reply.status(400).send({error: 'Invalid input type, please upload a MP3.'})
    }

    // retorna o nome do arquivo sem a extensão para nao salvar com mesmo nome no BD
    const fileBaseName = path.basename(data.filename, extension)
    //novo nome para o arquivo com numero aleatorio
    const fileUploadName = `${fileBaseName}-${randomUUID()}${extension}`
    //onde será salvo
    const uploadDestination = path.resolve(__dirname, '../../tmp', fileUploadName)
  
    //recebe o upload do arquivo e escreve
    await pump(data.file, fs.createWriteStream(uploadDestination))
    
    const video =await prisma.video.create({
      data:{
        name: data.filename,
        path: uploadDestination,
      }
    })

    //retorna o objeto contendo o video recem criado
    return{
      video,
    }
  })
}