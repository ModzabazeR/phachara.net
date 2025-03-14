<script lang="ts">
  import { clsx, type ClassValue } from "clsx";
  import type { Snippet } from "svelte";
  import { twMerge } from "tailwind-merge";

  type Direction = "left" | "up";
  let {
    children,
    direction = "left",
    pauseOnHover = false,
    reverse = false,
    fade = false,
    innerClassName = "",
    numberOfCopies = 2,
    class: className = "",
  } = $props<{
    children: Snippet;
    direction?: Direction;
    pauseOnHover?: boolean;
    reverse?: boolean;
    fade?: boolean;
    innerClassName?: string;
    numberOfCopies?: number;
    class?: string;
  }>();

  function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
  }
</script>

<div
  class={cn("group flex gap-[1rem] overflow-hidden", className, {
    "flex-row": direction === "left",
    "flex-col": direction !== "left",
  })}
  style={`mask-image: ${
    fade
      ? `linear-gradient(${
          direction === "left" ? "to right" : "to bottom"
        }, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
      : "none"
  };
	  -webkit-mask-image: ${
      fade
        ? `linear-gradient(${
            direction === "left" ? "to right" : "to bottom"
          }, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
        : "none"
    };
	  `}
>
  {#each Array(numberOfCopies).fill(0) as _, i (i)}
    <div
      class={cn(
        "flex justify-around gap-[1rem] [--gap:1rem] shrink-0",
        direction === "left"
          ? "animate-marquee-left flex-row"
          : "animate-marquee-up flex-col",
        pauseOnHover && "group-hover:[animation-play-state:paused]",
        reverse && "direction-reverse",
        innerClassName
      )}
    >
      {@render children?.()}
    </div>
  {/each}
</div>

<style>
  .animate-marquee-left {
    animation: marquee-left var(--duration, 40s) linear infinite;
  }
  .animate-marquee-up {
    animation: marquee-up var(--duration, 40s) linear infinite;
  }

  @keyframes marquee-left {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - var(--gap)));
    }
  }

  @keyframes marquee-up {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - var(--gap)));
    }
  }
</style>
