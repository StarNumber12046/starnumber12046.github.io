import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { FaGithub } from "@qwikest/icons/font-awesome"

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <div class="w-screen h-screen flex justify-center">
      <nav class="flex p-4 rounded-full fixed border-sky-500 border-2 mt-4 bg-[#00000090] lg:w-[25%] md:w-[35%] grid grid-cols-5 sm:w-[50%]"><a href="/" class="flex justify-center items-center w-full h-full text-white font-semibold">Home</a><a href="/blog" class="flex justify-center items-center w-full h-full text-white font-semibold">Blog</a><a href="https://github.com/StarNumber12046/starnumber12046.github.io" class="flex text-white font-semibold col-start-5 ml-0 mr-auto justify-end items-center w-full h-full"><FaGithub /></a></nav>
      <Slot />
    </div>
  );
});
