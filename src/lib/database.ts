import sqlite from "better-sqlite3";

const db = new sqlite("./database.sqlite");

const schema = `
  CREATE TABLE IF NOT EXISTS 
  users(
    id INTEGER NOT NULL PRIMARY KEY, 
    firstName TEXT NOT NULL, 
    lastName TEXT NOT NULL
  )
`;

db.exec(schema);

export default db;
