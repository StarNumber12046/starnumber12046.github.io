import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <main class="bg-black w-screen h-screencenter text-white">
      <div class="bg-gradient-to-b from-[#001449] to-black to-75% w-screen h-screen flex flex-col justify-center items-center">
        <h1 class="font-bold text-7xl">
            Star
            <span class="from-sky-500 to-blue-600 bg-gradient-to-r inline-block text-transparent bg-clip-text">
              Number
            </span>
        </h1>
          <p class="text-neutral-500 text-xl mt-1">I code stuff when I'm bored</p>
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
