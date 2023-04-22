import { auth, logger } from 'firebase-functions';
import { documentsCollection } from '../../services/db';

export const onCreateUser = auth.user().onCreate(user => {
  const usersCollection = documentsCollection('users');
  usersCollection
    .doc(user.uid)
    .set({
      name: user.displayName || '',
      photo: user.photoURL || '',
      email: user.email || '',
    })
    .catch(e => {
      logger.error(e);
    });
});
