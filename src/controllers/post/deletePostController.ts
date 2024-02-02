import { Request, Response } from 'express'
import { DeletePostUseCase } from '../../domain/useCases/post/deletePostUseCase'

const post = new DeletePostUseCase()

export const deletePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    if (!id) {
      throw new Error('id not found')
    }
    await post.execute(parseInt(id))

    return res.status(200).json({
      msg: 'this post has been deleted',
    })
  } catch (error) {
    return res.status(400).json({
      msg: 'some error occurred',
      error,
    })
  }
}
