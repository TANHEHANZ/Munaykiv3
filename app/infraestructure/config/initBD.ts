import * as FileSystem from "expo-file-system";
import * as SQLite from "expo-sqlite/legacy";
import { Asset } from "expo-asset";
import { initDatabase } from "../data/bd/database";


export async function openDatabase(): Promise<SQLite.WebSQLDatabase> {
  const dbFolder = `${FileSystem.documentDirectory}SQLite`;
  const dbPath = `${FileSystem.documentDirectory}SQLite/myDatabaseName.db`;
  const dbFileExists = await FileSystem.getInfoAsync(dbPath);

  if (!dbFileExists.exists) {
    const dbFolderExists = await FileSystem.getInfoAsync(dbFolder);
    if (!dbFolderExists.exists) {
      await FileSystem.makeDirectoryAsync(dbFolder);
    }

    const asset = await Asset.fromModule(
      require("./../../assets/configure.db"),
    ).downloadAsync();
    await FileSystem.copyAsync({
      from: asset.localUri || "",
      to: dbPath,
    });
  } else {
    console.log("Database already exists locally");
  }

  const db = SQLite.openDatabase("myDatabaseName.db");

  await initDatabase(db);

  return db;
}

