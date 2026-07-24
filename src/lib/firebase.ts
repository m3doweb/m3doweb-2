import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore';
import { Inquiry } from '../types';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "demo-key",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "m3do-dev.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "m3do-dev",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "m3do-dev.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "123456789",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:123456789:web:abcdef"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);

// Local fallback store for offline preview
const LOCAL_INQUIRIES_KEY = 'm3do_inquiries_store';

export async function submitInquiry(inquiry: Inquiry): Promise<{ success: boolean; id: string }> {
  const timestampData = {
    ...inquiry,
    createdAt: new Date().toISOString()
  };

  try {
    if (import.meta.env.VITE_FIREBASE_PROJECT_ID) {
      const docRef = await addDoc(collection(db, "inquiries"), timestampData);
      return { success: true, id: docRef.id };
    }
  } catch (err) {
    console.warn("Firestore save fallback to local storage:", err);
  }

  // Fallback to localStorage
  const existing = JSON.parse(localStorage.getItem(LOCAL_INQUIRIES_KEY) || '[]');
  const newId = 'local-' + Date.now();
  existing.push({ ...timestampData, id: newId });
  localStorage.setItem(LOCAL_INQUIRIES_KEY, JSON.stringify(existing));
  return { success: true, id: newId };
}

export async function fetchInquiries(): Promise<Inquiry[]> {
  try {
    if (import.meta.env.VITE_FIREBASE_PROJECT_ID) {
      const q = query(collection(db, "inquiries"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const items: Inquiry[] = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() } as Inquiry);
      });
      if (items.length > 0) return items;
    }
  } catch (err) {
    console.warn("Firestore fetch fallback:", err);
  }

  return JSON.parse(localStorage.getItem(LOCAL_INQUIRIES_KEY) || '[]');
}
