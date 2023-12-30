import { User } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UserEntity implements User {
  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  email: string;

  @ApiProperty()
  fullname: string;

  @ApiProperty()
  dob: Date;

  @ApiProperty()
  Type: string;

  @ApiProperty()
  confirmationCode: string;

  @ApiProperty({ default: false })
  //default is false
  isEmailConfirmed: boolean;

  @ApiProperty({ default: false })
  IsBanned: boolean;

  @ApiProperty({ default: false })
  IsLocked: boolean;

  @ApiProperty()
  hash: string;

  @ApiProperty()
  hashedRt: string;
}

export { User };
