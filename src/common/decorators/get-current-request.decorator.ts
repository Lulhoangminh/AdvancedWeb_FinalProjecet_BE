import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const GetCurrentRequest = createParamDecorator(
  (data: string | undefined, context: ExecutionContext): number => {
    const request = context.switchToHttp().getRequest();
    console.log(request);
    return request;
  },
);
