import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBHnSU0vh_Vw3DodbtHrIO0xHA7de4A2_I',
  authDomain: 'ismevent-5d3f9.firebaseapp.com',
  projectId: 'ismevent-5d3f9',
  storageBucket: 'ismevent-5d3f9.appspot.com',
  messagingSenderId: '363936884313',
  appId: '1:363936884313:web:9c49e3b51c840168837348',
  measurementId: 'G-BS1MM2KHSV',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
