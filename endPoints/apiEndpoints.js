import { dbRequest } from "@/utils/request";

const apiUrl = process.env.BACK_URL;

export async function register(user) {
  const options = {
    method: "POST",
    body: JSON.stringify(user),
  };
  return await dbRequest("/api/register", options);
}
