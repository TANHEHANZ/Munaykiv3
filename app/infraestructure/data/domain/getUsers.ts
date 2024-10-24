import * as SQLite from "expo-sqlite/legacy";

export function fetchUsers(db: SQLite.WebSQLDatabase) {
  db.transaction((tx) => {
    tx.executeSql(
      `SELECT * FROM user`,
      [],
      (_, { rows }) => {
        rows._array.forEach((row) => {
          console.log(row); // Muestra cada fila en la consola
        });
      },
      (txObj, error) => {
        console.error("Error fetching data from user table: ", error);
        return true; // Detiene la transacción en caso de error
      },
    );
  });
}
