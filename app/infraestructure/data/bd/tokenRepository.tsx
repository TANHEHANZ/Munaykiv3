// import { getDB } from "./database";
// interface TokenRow {
//   id: number;
//   token: string;
// }
// export const insertToken = async (tokenValue: string): Promise<void> => {
//   const db = await getDB();
//   await db.runAsync("INSERT INTO tokens (token) VALUES (?);", tokenValue);
// };

// export const fetchToken = async (): Promise<string | null> => {
//   const db = await getDB();
//   const result = (await db.getFirstAsync("SELECT * FROM tokens LIMIT 1;")) as
//     | TokenRow
//     | undefined;

//   return result ? result.token : null;
// };
