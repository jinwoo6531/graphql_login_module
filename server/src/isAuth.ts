import { verify } from 'jsonwebtoken';
import { MiddlewareFn } from 'type-graphql';
import { Mycontext } from './MyContext';

export const isAuth: MiddlewareFn<Mycontext> = ({ context }, next) => {
  const authorization = context.req.headers['authorization'];

  if (!authorization) {
    throw new Error('계정이 존재하지않음');
  }

  try {
    const token = authorization?.split(' ')[1];
    const payload = verify(token, process.env.ACCESS_TOKEN_SECRET!);
    context.payload = payload as any;
  } catch (error) {
    console.log(error);
    throw new Error('계정이 존재하지않음.');
  }

  return next();
};
