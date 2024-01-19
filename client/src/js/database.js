// Start of JS file
// Initialize database from idb package.
import { openDB } from 'idb';

const initdb = async () =>
  openDB('fp', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('fp')) {
        console.log('fp database already exists');
        return;
      }
      db.createObjectStore('fp', { keyPath: 'id', autoIncrement: true });
      console.log('fp database created');
    },
  });

// PUT function for database.
export const putDb = async (content) => {
  console.log('Update the database');

  const fpDb = await openDB('fp', 1);

  const tx = fpDb.transaction('fp', 'readwrite');

  const store = tx.objectStore('fp');

  const request = store.put({ id: 1, value: content });

  const result = await request;
  console.log('Database updated', result);
}

// GET function for database.
export const getDb = async () => {
  console.log('GET from the database');

  const fpDb = await openDB('fp', 1);

  const tx = fpDb.transaction('fp', 'readonly');

  const store = tx.objectStore('fp');

  const request = store.getAll();

  const result = await request;
  console.log('result.value', result);
  return result;
}

initdb();
// End of JS file