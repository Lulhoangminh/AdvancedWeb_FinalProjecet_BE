import { ApiProperty } from '@nestjs/swagger';
import { GradeComposition } from '@prisma/client';

export class GradeCompositionEntity implements GradeComposition {
  @ApiProperty()
  grade_composition_id: number;
  @ApiProperty()
  class_id: number;
  @ApiProperty()
  created_at: Date;
  @ApiProperty()
  updated_at: Date;
  @ApiProperty()
  name: string;
  @ApiProperty()
  Percentage: number;
  @ApiProperty()
  Rank: number;
  @ApiProperty()
  IsFinalized: boolean;
}
