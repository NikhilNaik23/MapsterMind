import db from "../config/db.js";

export const getRandomQuestion = async () => {
  const result = await db.query(
    "SELECT * FROM capitals ORDER BY RANDOM() LIMIT 1 "
  );
  return result.rows[0];
};
