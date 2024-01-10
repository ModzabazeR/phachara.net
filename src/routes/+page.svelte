<script lang="ts">
  import { spring } from "svelte/motion";

  let container: HTMLDivElement;
  let coords = spring(
    {
      x: 0,
      y: 0,
    },
    {
      stiffness: 0.1,
      damping: 0.25,
    }
  );
  let size = spring(1, {
    stiffness: 0.1,
    damping: 0.25,
  });

  const mouseHandler = (e: MouseEvent, scale: number = 1) => {
    const containerRect = container.getBoundingClientRect();
    const x = e.clientX;
    const y = e.clientY;
    coords.set({
      x: x - containerRect.width + containerRect.right / 2,
      y: y - containerRect.height + containerRect.bottom / 2,
    });

    size.set(scale);
  };
</script>

<svelte:head>
  <title>Phachara Chirapakachote</title>
  <meta name="description" content="Phachara Chirapakachote's Portfolio" />
</svelte:head>

<section
  class="h-screen bg-[#1a1a1a] overflow-hidden cursor-none"
  on:mousemove={mouseHandler}
  on:mousedown={(e) => {
    mouseHandler(e, 1.5);
  }}
  on:mouseup={(e) => {
    mouseHandler(e);
  }}
  role="presentation"
>
  <div bind:this={container} class="w-fit select-none p-8">
    <h1
      class="text-4xl font-thin text-[#f5f5f5] font-sans"
      style="transform: translate({$coords.x}px, {$coords.y}px) scale({$size});"
    >
      Coming Soon
    </h1>
  </div>
</section>
