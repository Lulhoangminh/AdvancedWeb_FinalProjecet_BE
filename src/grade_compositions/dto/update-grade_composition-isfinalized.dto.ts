import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateGradeCompositionDto } from './create-grade_composition.dto';
import { IsBoolean, IsNotEmpty } from 'class-validator';

export class UpdateGradeCompositionIsFinalized {
  @ApiProperty()
  @IsBoolean({ message: 'IsFinalized must be a boolean' })
  @IsNotEmpty({ message: 'IsFinalized is required' })
  IsFinalized: boolean;
}
