import { Request, Response } from 'express';
import { prisma } from '../prismaClient';
import { ApiError } from '../error/error';
import { statusCode } from '../utils/statusCode';
import { findUserByEmail } from '../service/user.service';
import { generatePasswordHash } from '../utils/password';

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      throw new ApiError(
        'Email and password are required',
        statusCode.BAD_REQUEST,
      );
    const user = await findUserByEmail(email);
    if (!user) throw new ApiError('User not found', statusCode.NOT_FOUND);
  } catch (error) {
    res.send(error);
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const { hash, salt } = generatePasswordHash(password);
    const user = await prisma.users.create({
      data: {
        name,
        hash,
        salt,
        email,
      },
    });
    res.send(user);
  } catch (error) {
    res.send(error);
  }
};
