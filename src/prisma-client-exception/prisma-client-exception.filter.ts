//src/prisma-client-exception.filter.ts
import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Prisma } from '@prisma/client';
import { Response } from 'express';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter extends BaseExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const message = exception.message.replace(/\n/g, '');

    switch (exception.code) {
      case 'P2002':
        const status = HttpStatus.CONFLICT;
        response.status(status).json({
          statusCode: status,
          message: this.extractUniqueConstraintMessage(message),
        });
        console.log('message', message);
        break;

      case 'P2003':
        const status2 = HttpStatus.CONFLICT;
        response.status(status2).json({
          statusCode: status2,
          message: message,
        });
        break;

      // case 'P2001':
      //   const status4 = HttpStatus.BAD_REQUEST;
      //   response.status(status4).json({
      //     statusCode: status4,
      //     message: 'Invalid creation request.',
      //   });
      //   break;

      // TODO catch other error codes (e.g. 'P2000' or 'P2025')
      default:
        // default 500 error code
        super.catch(exception, host);
        break;
    }
  }

  private extractUniqueConstraintMessage(message: string): string {
    // Extract the field name causing the unique constraint violation
    const matches = message.match(/Unique constraint failed on the fields: \((.*?)\)/);

    // If matches are found, return the captured group (field name)
    const uniqueConstraintField = matches ? matches[1] : 'Unknown field';

    return `Unique constraint failed on ${uniqueConstraintField}`;
  }
}
