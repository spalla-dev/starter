import definePrivateEventHandler from '../handlers/auth';

export default definePrivateEventHandler(async (_, { user }) => ({
  result: 'success',
  user,
}));
