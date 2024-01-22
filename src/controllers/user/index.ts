import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

export const createUser = async (req: Request, res: Response) => {
  try {
    const prisma = new PrismaClient();
    const { name, email, password } = req.body;
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
    return res.status(201).json({
      msg: "user created successfully",
      user
    });
  } catch (error) {
    return res.status(400).json({
      msg: "some error occurred",
      error
    });
  }
};
