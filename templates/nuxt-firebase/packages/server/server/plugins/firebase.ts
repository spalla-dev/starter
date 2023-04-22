import { initializeApp } from '../services/firebase';

export default defineNitroPlugin(() => {
  console.log('Initializing firebase app');
  try {
    initializeApp();
  } catch (e) {
    console.error('Error on initializing plugin ', e);
  }
});
