// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export interface Card {
  title: string;
  subtitle?: string;
  description: string;
  year: string;
  href: string;
  image: string;
  tags: string[];
  featured?: boolean;
}
