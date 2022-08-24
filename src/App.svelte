<script>
    import "https://code.iconify.design/iconify-icon/1.0.0-beta.3/iconify-icon.min.js"
    import Skills from "./Skills.svelte"
    import Contacts from "./Contacts.svelte"
    import Time from "./WakaTime.svelte"
    import Projects from "./Projects.svelte"
</script>
<main class="font-mono">
  <div class="inline-flex">
    <div class="w-15 col-span-1">
      <img class="h-15" loading="lazy" src="/logo.png" alt="logo">
    </div>
    <div>
      <p class="pl-3 text-left font-mono col-span-2 text-lg"><span class="text-2xl">StarNumber12046</span><br>Svelte lover</p>
    </div>

  </div>
  <div class="m-5">
    <Skills></Skills>
    <Contacts></Contacts>
    <Time></Time>
    <Projects></Projects>
  </div>
  
</main>
 
<style>

</style>
