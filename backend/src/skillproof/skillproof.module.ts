import { Module } from '@nestjs/common';
import { SkillProofController } from './skillproof.controller';
import { SkillProofService } from './skillproof.service';

@Module({
  controllers: [SkillProofController],
  providers: [SkillProofService],
})
export class SkillProofModule {}
