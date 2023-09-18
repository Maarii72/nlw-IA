import { FastifyInstance } from "fastify";
import { z } from 'zod';
import { prisma } from "../lib/prisma";

//postar/criar transcrição
export async function createTranscriptionRoute(app: FastifyInstance) {
  app.post('/videos/:videoId/Transcription', async (req) => {
    const paramsSchema = z.object({
      videoId: z.string().uuid(),
    })

    const { videoId } = paramsSchema.parse(req.params)

    const bobySchema = z.object({
      prompt: z.string(),
    })

    const { prompt } = bobySchema.parse(req.body)

    return{
      videoId,
      prompt,
    }
  })
}