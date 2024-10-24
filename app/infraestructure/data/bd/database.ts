import * as SQLite from "expo-sqlite/legacy";

export async function initDatabase(db: SQLite.WebSQLDatabase) {
  await createTables(db);
}

function createTables(db: SQLite.WebSQLDatabase) {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS user (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          token TEXT NOT NULL,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );`,
      [],
      () => {
        console.log("Table 'user' created or already exists.");
      },
      (txObj, error) => {
        console.error("Error creating table 'user': ", error);
        return true; // Detiene la transacción en caso de error
      },
    );
  });

  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS configurationes (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          estado TEXT NOT NULL,
          theme TEXT,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );`,
      [],
      () => {
        console.log("Table 'configurationes' created or already exists.");
      },
      (txObj, error) => {
        console.error("Error creating table 'configurationes': ", error);
        return true;
      },
    );
  });
}
