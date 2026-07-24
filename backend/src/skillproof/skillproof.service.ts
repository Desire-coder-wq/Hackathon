import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SkillProofService {
  constructor(private readonly prisma: PrismaService) {}

  getTracks() {
    return this.prisma.skillTrack.findMany({
      where: { isPublished: true },
      include: { modules: { orderBy: { order: 'asc' } } },
      orderBy: { createdAt: 'desc' },
    });
  }

  getGigs() {
    return this.prisma.gig.findMany({
      where: { status: 'OPEN' },
      include: {
        skillTrack: true,
        postedBy: {
          select: { fullName: true, employerProfile: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getCredential(publicSlug: string) {
    const credential = await this.prisma.credential.findUnique({
      where: { publicSlug },
      include: {
        user: { select: { fullName: true, avatarUrl: true, location: true } },
        skillTrack: true,
        fieldVerification: true,
      },
    });

    if (!credential || credential.revoked) {
      throw new NotFoundException('Credential not found');
    }

    return credential;
  }
}
