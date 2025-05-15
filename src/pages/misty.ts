import type { APIRoute } from "astro";

export const prerender = false

export const GET: APIRoute = ({ redirect }) => {
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
  ];

  const randomUrl: string = urls[Math.floor(Math.random() * urls.length)];

  return redirect(randomUrl, 307);
};
