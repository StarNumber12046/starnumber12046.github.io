import type { APIRoute } from "astro";
import { urls } from "../urls"
export const prerender = false

const template = `
<!doctype html>
<html style="margin:0; padding:0; background-color: #111;">
  <head>
    <title>Misty</title>
    <style>
      body {
        margin: 0;
        background-color: #111;
      }
      img {
        max-width: 100vw;
  max-height: 100vh;
  object-fit: contain; /* 👌 scales to fit */
  display: block;
  margin: auto;
      }
    </style>
  </head>
  <body>
    <img src="___MISTY_IMG___">
  </body>
</html>
`;

export const GET: APIRoute = ({ request, redirect }) => {

  const randomUrl: string = urls[Math.floor(Math.random() * urls.length)];
  const url = new URL(request.url);
  const webFriendly = url.searchParams.get("web");

  if (webFriendly) {
    const html = template.replace("___MISTY_IMG___", randomUrl);
    return new Response(html, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-store", // or something else if needed
      },
    });
  }

  return redirect(randomUrl, 307);
};
