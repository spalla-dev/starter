import { UserRecord } from 'firebase-admin/auth';
import { FieldValue } from 'firebase-admin/firestore';
import { documentCollection } from '../../../services/firebase';

type ConsentFields = {
  ip: string;
  browser: string;
  browserVersion: string;
  os: string;
  osVersion: string;
};

export async function saveLgpdConsent(user: UserRecord, fields: ConsentFields) {
  const userData = documentCollection('usersData').doc(user.uid);
  userData.collection('lgpdConsents').add({
    ...fields,
    lgpdConsent: true,
    date: FieldValue.serverTimestamp(),
  });
}
