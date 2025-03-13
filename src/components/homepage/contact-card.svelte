<script lang="ts">
  import Icon from "@iconify/svelte";

  const contact: {
    title: string;
    href: string;
    icon: string;
  } = $props();
</script>

<a
  href={contact.href}
  target="_blank"
  class="flex flex-col items-center gap-2 p-6 rounded-lg bg-white/5 backdrop-blur-sm
    hover:bg-white/10 hover:scale-105 transition-all duration-300
    shadow-lg hover:shadow-xl border border-white/10 min-w-[140px]"
>
  <Icon icon={contact.icon} class="text-3xl text-white/90" />
  <span class="text-sm font-medium text-white/80">{contact.title}</span>
</a>
