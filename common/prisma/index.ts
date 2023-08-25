import { PrismaClient } from '@prisma/client'

export class PrismaService {
  constructor(private readonly prisma: PrismaClient) {}
}
