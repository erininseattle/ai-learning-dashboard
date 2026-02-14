import { useState, useEffect, useCallback, useRef } from 'react';
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

// Simple hash to turn a passphrase into a consistent document ID
function hashPassphrase(passphrase) {
  let hash = 0;
  for (let i = 0; i < passphrase.length; i++) {
    const char = passphrase.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return 'user_' + Math.abs(hash).toString(36);
}

export function useFirebaseSync(userId) {
  const [progress, setProgress] = useState({});
  const [loading, setLoading] = useState(true);
  const skipNextSnapshot = useRef(false);

  const docRef = userId ? doc(db, 'progress', hashPassphrase(userId)) : null;

  // Listen for realtime changes from Firestore
  useEffect(() => {
    if (!docRef) return;

    setLoading(true);

    const unsubscribe = onSnapshot(docRef, (snapshot) => {
      if (skipNextSnapshot.current) {
        skipNextSnapshot.current = false;
        return;
      }
      if (snapshot.exists()) {
        setProgress(snapshot.data().progress || {});
      }
      setLoading(false);
    }, () => {
      // On error, try a one-time read
      getDoc(docRef).then((snapshot) => {
        if (snapshot.exists()) {
          setProgress(snapshot.data().progress || {});
        }
        setLoading(false);
      }).catch(() => setLoading(false));
    });

    return () => unsubscribe();
  }, [userId]);

  // Update progress both locally and in Firestore
  const handleUpdateProgress = useCallback(
    (activityId, updates) => {
      setProgress((prev) => {
        const next = {
          ...prev,
          [activityId]: { ...prev[activityId], ...updates },
        };

        // Write to Firestore
        if (docRef) {
          skipNextSnapshot.current = true;
          setDoc(docRef, { progress: next }, { merge: true }).catch(() => {
            skipNextSnapshot.current = false;
          });
        }

        return next;
      });
    },
    [userId]
  );

  return { progress, loading, handleUpdateProgress };
}
