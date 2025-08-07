import { urls } from '../urls.ts';

export const GET: APIRoute = ({ request, redirect }) => {
    
    return new Response(JSON.stringify(urls), {
      status: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "no-store", // or something else if needed
      },
    });
};
