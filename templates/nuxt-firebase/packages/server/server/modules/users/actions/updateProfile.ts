import { UserRecord } from 'firebase-admin/auth';
import { FieldValue } from 'firebase-admin/firestore';
import { documentCollection } from '../../../services/firebase';

export async function updateProfile(user: UserRecord) {
  const userData = documentCollection('users').doc(user.uid);
  userData.update({
    photo: user.photoURL || '',
    name: user.displayName || '',
    updatedAt: FieldValue.serverTimestamp(),
  });
}
