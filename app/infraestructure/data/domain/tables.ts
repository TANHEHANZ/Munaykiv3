import * as SQLite from "expo-sqlite/legacy";

export function getTables(db: SQLite.WebSQLDatabase) {
  db.transaction((tx) => {
    tx.executeSql(
      `SELECT name FROM sqlite_master WHERE type='table';`,
      [],
      (_, { rows }) => {
        console.log("Tables in database:");
        rows._array.forEach((row) => {
          console.log(row.name); // Imprime el nombre de cada tabla
        });
      },
      (txObj, error) => {
        console.error("Error fetching table names: ", error);
        return true; // Detiene la transacción en caso de error
      },
    );
  });
}
