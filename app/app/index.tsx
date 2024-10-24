// App.tsx
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import * as SQLite from "expo-sqlite/legacy";
import { openDatabase } from "../infraestructure/config/initBD";

export default function App() {
  const [db, setDb] = useState<SQLite.WebSQLDatabase | null>(null);

  useEffect(() => {
    const initDb = async () => {
      try {
        const database = await openDatabase();
        setDb(database);
        console.log("Database opened successfully");
      } catch (error) {
        console.error("Error opening database:", error);
      }
    };

    initDb();
  }, []);

  return (
    <View>
      <Text>App is running, database is initialized!</Text>
    </View>
  );
}
