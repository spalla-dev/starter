import { HttpStatusCode } from 'shared';
import { DecodedIdToken, getAuth, UserRecord } from 'firebase-admin/auth';
import { warn } from 'firebase-functions/logger';
import { H3Event } from 'h3';
import { createAppError } from '../error';

type PrivateContext = {
  claims: DecodedIdToken;
  user: UserRecord;
};

export default function definePrivateEventHandler<T>(
  handler: (event: H3Event, privateContext: PrivateContext) => T,
) {
  return defineEventHandler(async event => {
    const { authorization } = event.node.req.headers;
    if (!authorization) {
      throw createAppError('Forbidden', HttpStatusCode.Forbidden);
    }

    const [, token] = authorization.split(' ');
    try {
      const claims = await getAuth().verifyIdToken(token);
      const user = await getAuth().getUser(claims.uid);
      return handler(event, {
        claims,
        user,
      });
    } catch (e) {
      warn(e);
      throw createAppError('Unauthorized', HttpStatusCode.Unauthorized);
    }
  });
}
