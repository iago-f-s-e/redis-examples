import { Controller, Get, Post } from '@overnightjs/core'
import { Request, Response } from 'express'

@Controller('user')
export class UserController {
  @Get(':id')
  public async requestToUserDetail (request: Request, response: Response): Promise<Response> {
    const { services } = request
    const { id } = request.params

    const user = await services.user.findById(id)

    return response.status(200).json(user)
  }

  @Get('')
  public async requestToListUsers (request: Request, response: Response): Promise<Response> {
    const { services } = request

    const users = await services.user.findAll()

    return response.status(200).json(users)
  }

  @Post('')
  public async requestToCreate (request: Request, response: Response): Promise<Response> {
    const { services } = request
    const { name } = request.body

    const user = await services.user.add(name)

    return response.status(201).json(user)
  }
}
