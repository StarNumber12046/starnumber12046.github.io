import type { APIRoute } from "astro";

export const prerender = false

export const GET: APIRoute = ({ redirect }) => {
  const urls: string[] = [
    "https://8ek6ccfrg2.ufs.sh/f/EO7fVpuYmASc6iFvkEztY5EZHTjS4q0GWpdvoaXAyzicxCRK"
  ];

  const randomUrl: string = urls[Math.floor(Math.random() * urls.length)];

  return redirect(randomUrl, 307);
};
