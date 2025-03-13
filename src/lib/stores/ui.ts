import { writable } from "svelte/store";

export const expandedProjectId = writable<string | null>(null);
