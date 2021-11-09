import 'dotenv/config'
import 'reflect-metadata'
import { Server as SetupServer } from '@overnightjs/core'
import cors from 'cors'
import helmet from 'helmet'
import express, { Application } from 'express'
import { createConnection, getConnection } from 'typeorm'

export class Server extends SetupServer {
  constructor () {
    super()
  }

  public async init (): Promise<void> {
    this.setupExpress()
    this.setupControllers()

    await this.startConnection()
  }

  private setupControllers (): void {
    this.addControllers([])
  }

  private setupExpress (): void {
    this.app.use(cors({
      origin: [
        'http://localhost:8080'
      ]
    }))
    this.app.use(helmet())
    this.app.use(express.json())
  }

  public getApp (): Application {
    return this.app
  }

  public async startConnection (): Promise<void> {
    await createConnection()
  }

  public async closeConnection (): Promise<void> {
    await getConnection().close()
  }

  public async start (): Promise<void> {
    this.app.listen(process.env.PORT || 8080, () => {
      console.log(`Server running on port: ${process.env.PORT || 8080}`)
    })
  }
}
