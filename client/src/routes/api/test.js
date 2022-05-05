export async function get({ request }) {
  return {
    status: 200,
    body: { text: "hello world" }
  }
}