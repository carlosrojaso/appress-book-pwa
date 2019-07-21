import Dexie from 'dexie';

let iDB = new Dexie('Notes');
const version = 1;

iDB.version(version).stores({
  notes: '++id, title'
});

export let indDB = iDB;