import { PartialType } from '@nestjs/swagger';
import { CreateGradeCompositionDto } from './create-grade_composition.dto';

export class UpdateGradeCompositionDto extends PartialType(CreateGradeCompositionDto) {}
