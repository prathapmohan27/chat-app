import { prisma } from '../prismaClient';

export const findUserByEmail = async (email: string) => {
  const user = await prisma.users.findUnique({ where: { email } });
  return user;
};

export const findUserById = async (id: string) => {
  const user = await prisma.users.findUnique({ where: { id } });
  return user;
};
