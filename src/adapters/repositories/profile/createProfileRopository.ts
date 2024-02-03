import { IProfile } from '../../../utils/@types';
import { prisma } from '../../database/prismaClient';

export class CreateProfilRepository {
  async execute({ name, jop, social }: IProfile) {
    const createProfile = await prisma.profile.create({
      data: {
        name,
        jop,
        social,
      },
    });
    return createProfile;
  }
}
