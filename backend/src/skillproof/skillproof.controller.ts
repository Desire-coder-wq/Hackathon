import { Controller, Get, Param } from '@nestjs/common';
import { SkillProofService } from './skillproof.service';

@Controller()
export class SkillProofController {
  constructor(private readonly skillProof: SkillProofService) {}

  @Get('tracks')
  tracks() {
    return this.skillProof.getTracks();
  }

  @Get('gigs')
  gigs() {
    return this.skillProof.getGigs();
  }

  @Get('credentials/:slug')
  credential(@Param('slug') slug: string) {
    return this.skillProof.getCredential(slug);
  }
}
