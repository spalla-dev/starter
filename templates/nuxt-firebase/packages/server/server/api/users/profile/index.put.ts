import definePrivateEventHandler from '../../../handlers/auth';
import { actions } from '../../../modules/users';

export default definePrivateEventHandler(async (_, { user }) =>
  actions.updateProfile(user),
);
