// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCN8hEURx-a9jHMvL5xQK7TAQUHd-cPJUc',
  authDomain: 'netflixgpt-1c496.firebaseapp.com',
  projectId: 'netflixgpt-1c496',
  storageBucket: 'netflixgpt-1c496.firebasestorage.app',
  messagingSenderId: '419020428077',
  appId: '1:419020428077:web:5808ec0ead50de3eca79a4',
  measurementId: 'G-2VMZ7QQS1D',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export the Firebase instances for use in other files
export { app, analytics };
