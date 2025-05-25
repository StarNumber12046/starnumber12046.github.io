import type { APIRoute } from "astro";

export const prerender = false

const template = `
<!doctype html>
<html>
  <head>
  <title>Misty</title>
  </head>
  <body>
    <img src="___MISTY_IMG___" style="width: 100vw; height: 100vh;">
  </body>
</html>
`

export const GET: APIRoute = ({ request, redirect }) => {
  const urls: string[] = [
    "https://8ek6ccfrg2.ufs.sh/f/EO7fVpuYmAScvbltUcEYplugsz2NtUr14bFWBVAO5f0emwLR",
    "https://8ek6ccfrg2.ufs.sh/f/EO7fVpuYmAScIF3aKExJmFu6hrWGjQ8lSMvCnaXe7DoVUNy9",
    "https://8ek6ccfrg2.ufs.sh/f/EO7fVpuYmAScVbl4ogtOEmpc2wb7yBNLrdHFTeCjXDPgWlaU",
    "https://8ek6ccfrg2.ufs.sh/f/EO7fVpuYmAScE4i0AUYmAScUoQs5dnwZ8IWDizP6LCxT07kG",
    "https://8ek6ccfrg2.ufs.sh/f/EO7fVpuYmASc780OaZhH5P0G6w3MEyX1bDsKTcfmiAJFgxRu",
    "https://8ek6ccfrg2.ufs.sh/f/EO7fVpuYmAScEzIP5VYmAScUoQs5dnwZ8IWDizP6LCxT07kG",
    "https://8ek6ccfrg2.ufs.sh/f/EO7fVpuYmAScicnOxHbJNDSA0dbzw5n9y7eoagGQMB1IWpmj",
    "https://8ek6ccfrg2.ufs.sh/f/EO7fVpuYmASc5NQjtAyX8fPnKNaMwpqDjxe7J2BTi9ctboVd",
    "https://8ek6ccfrg2.ufs.sh/f/EO7fVpuYmASchLxHm5g884t9OyfnkzvWiZaYrcHVpPowMbxU",
    "https://8ek6ccfrg2.ufs.sh/f/EO7fVpuYmAScYEctNvsedOFNv53A4rncQox1Sqk0W2EyuXYV",
    "https://8ek6ccfrg2.ufs.sh/f/EO7fVpuYmAScveKwFjEYplugsz2NtUr14bFWBVAO5f0emwLR",
    "https://8ek6ccfrg2.ufs.sh/f/EO7fVpuYmAScBwghPK2TO2dlEge4TaRMfXrNnDvwm1ZPA7zJ",
    "https://8ek6ccfrg2.ufs.sh/f/EO7fVpuYmAScJJ6DqtmmISiDFWz5cdwBvXqNZf96Pubn3e7E",
    "https://8ek6ccfrg2.ufs.sh/f/EO7fVpuYmAScHxTQ8V0mIEjQXvt49wW3rVeNq07AUcnSsaPJ",
    "https://8ek6ccfrg2.ufs.sh/f/EO7fVpuYmASclGCviH9UM2v4zoeEyhPRBXuSaYiClnN7KmLf",
    "https://8ek6ccfrg2.ufs.sh/f/EO7fVpuYmASc5PU1Z7yX8fPnKNaMwpqDjxe7J2BTi9ctboVd",
    "https://8ek6ccfrg2.ufs.sh/f/EO7fVpuYmAScsxZk2PfOoZPMFKTCEkg6NAy9u7VaGel2pi0v",
    "https://8ek6ccfrg2.ufs.sh/f/EO7fVpuYmAScNTitisPahY4IBx1EAQirDWNnXygO0s3lj72u",
    "https://8ek6ccfrg2.ufs.sh/f/EO7fVpuYmASc6SudXvztY5EZHTjS4q0GWpdvoaXAyzicxCRK",
    "https://8ek6ccfrg2.ufs.sh/f/EO7fVpuYmAScksidlJ1xMCOGWl1u2ZJ9SQ4583hzNEBUfi7r",
    "https://8ek6ccfrg2.ufs.sh/f/EO7fVpuYmAScRf8Qze7qZsGpgH9lmbiCL0yf1tj6FAuOrBE7",
    "https://8ek6ccfrg2.ufs.sh/f/EO7fVpuYmASceb96JIh9fpHNSVrxGqZgscJEhuDWjXCn0z32",
    "https://8ek6ccfrg2.ufs.sh/f/EO7fVpuYmASc3eRUFYuKnjdAT2mlZ6gX1QME5biJPsfpOwSL"
  ];

  const randomUrl: string = urls[Math.floor(Math.random() * urls.length)];
  const url = new URL(request.url);
  const webFriendly = url.searchParams.get("web");
  if (webFriendly) {
    return new Response(template.replace("___MISTY_IMAGE___", randomUrl))
  }
  return redirect(randomUrl, 307);
};
