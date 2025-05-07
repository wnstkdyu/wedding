import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export async function handler(event) {
  if (event.httpMethod === "POST") {
    const { nickname, content } = JSON.parse(event.body || "{}");
    if (!nickname || !content) {
      return { statusCode: 400, body: "Invalid payload" };
    }
    const { error } = await supabase
      .from("messages")
      .insert({ nickname, content });
    if (error)
      return { statusCode: 500, body: JSON.stringify(error) };
    return { statusCode: 200, body: "OK" };
  }

  // GET : 최신 50개
  const { data } = await supabase
    .from("messages")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(50);
  return { statusCode: 200, body: JSON.stringify(data) };
}
