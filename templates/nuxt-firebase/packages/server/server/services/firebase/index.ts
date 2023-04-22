import admin, { ServiceAccount } from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';

export async function initializeApp() {
  if (process.env.NODE_ENV === 'development') {
    admin.initializeApp({
      credential: admin.credential.cert(
        (await import('./firebase-cert.json')) as ServiceAccount,
      ),
      databaseURL: 'https://orai-app-default-rtdb.firebaseio.com',
    });
  } else {
    admin.initializeApp();
  }
}

export function db() {
  return getFirestore();
}

export function documentCollection(collectionName: string) {
  return db().collection(collectionName);
}
