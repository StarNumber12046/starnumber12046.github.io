import type { APIRoute } from "astro";

export const prerender = false;

const xor = (input: string, key: string): string => {
  return [...input]
    .map((char, i) => String.fromCharCode(char.charCodeAt(0) ^ key.charCodeAt(i % key.length)))
    .join('');
};

const KEY = 'LuxPlen'; // 🧂 Your XOR key. You can change this to anything you want.

export const GET: APIRoute = async ({ request, redirect }) => {
  const url = new URL(request.url);
  const pass = url.searchParams.get("pass");

  if (!pass || pass !== xor("\u0000\u0000\u0000\u0000\u0000\u0004\u0000\u0029\u0006", KEY)) {
    return new Response("Forbidden: Invalid pass", { status: 403 });
  }

  const redirectUrl = xor("\u0024\u0001\u000c\u0020\u001f\u005f\u0041\u0063\u004d\u001d\u003b\u005a\u0006\u000d\u002a\u0007\u001f\u0062\u0042\u0010\u0008\u003f\u005b\u000b\u0038\u0043\u0003\u0041\u0009\u003a\u004f\u0036\u003a\u0015\u001b\u0015\u0018\u0039\u0003\u000f\u0053\u0007\u000a\u0003\u0013\u0015\u0016\u0011\u0037\u0079\u0030\u0022\u0018\u0038\u000f\u003d\u0078\u0004\u0048\u0017\u003b\u0015\u000a\u003a\u001a\u0019\u0008\u002d\u001c\u0014\u0025\u0016\u0000\u0013\u003e\u002e", KEY)

  return redirect(redirectUrl, 307);
};
