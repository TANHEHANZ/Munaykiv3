import * as SQLite from "expo-sqlite/legacy";

export function insertUser(db: SQLite.WebSQLDatabase, token: string) {
  db.transaction((tx) => {
    tx.executeSql(
      `INSERT INTO user (token) VALUES (?)`,
      [token],
      (_, result) => {
        console.log("User inserted successfully:", result.insertId);
      },
      (txObj, error) => {
        console.error("Error inserting user:", error);
        return true; // Detiene la transacción en caso de error
      },
    );
  });
}
