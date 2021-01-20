import 'reflect-metadata'
import 'dotenv/config'
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import cors from 'cors'
import { errors } from 'celebrate'
import { pagination } from 'typeorm-pagination'
import routes from './routes'
import AppError from '@shared/errors/AppError'
import '@shared/typeorm'
import uploadConfig from '@config/upload'
import ratelimiter from '@shared/http/middleware/rateLimiter'

const app = express()

app.use(pagination)
app.use(cors())
app.use(express.json())
app.use(ratelimiter)
app.use('/files', express.static(uploadConfig.directory))
app.use(routes)
app.use(errors())
app.use((
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message
    })
  }

  return res.status(500).json({
    status: 'error',
    message: error.message
  })
})

app.listen(4000, () => {
  console.log('Server started on port 4000')
})
