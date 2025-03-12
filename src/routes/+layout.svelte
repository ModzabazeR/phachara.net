<script lang="ts">
  import "./styles.css";
  import "@fontsource/fira-mono";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href="/webcam.svg" />
</svelte:head>

<div class="app">
  <main>
    {@render children?.()}
  </main>
</div>
