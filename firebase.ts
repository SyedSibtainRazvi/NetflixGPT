// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyCN8hEURx-a9jHMvL5xQK7TAQUHd-cPJUc',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'netflixgpt-1c496.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'netflixgpt-1c496',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'netflixgpt-1c496.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '419020428077',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:419020428077:web:5808ec0ead50de3eca79a4',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || 'G-2VMZ7QQS1D',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
// Export the Firebase instances for use in other files
export { app, analytics };
