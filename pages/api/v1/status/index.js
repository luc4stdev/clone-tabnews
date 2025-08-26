import database from "../../../../infra/database";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 AS result");
  return response.status(200).json({ database: result.rows[0].result === 2 });
}

export default status;
