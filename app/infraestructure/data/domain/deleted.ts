import * as SQLite from "expo-sqlite/legacy";

export function deleteUser(db: SQLite.WebSQLDatabase, userId: number) {
  db.transaction((tx) => {
    tx.executeSql(
      `DELETE FROM user WHERE id = ?`,
      [userId],
      () => {
        console.log("User deleted successfully");
      },
      (txObj, error) => {
        console.error("Error deleting user:", error);
        return true; // Detiene la transacción en caso de error
      },
    );
  });
}
