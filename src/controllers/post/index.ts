import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { TPost } from "../../utils/@types";

export const createPost = async (req: Request, res: Response) => {
  try {
    const { title, content, createdAt, updatedAt, userId }: TPost = req.body;
    const prisma = new PrismaClient();

    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        createdAt,
        updatedAt,
        userId,
      },
    });

    return res.status(200).json({
      msg: "post created successfully",
      newPost,
    });
  } catch (error) {
    return error;
  }
};
