// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      locale: string
    }
    interface PageData {
      locale: string
    }
    // interface PageState {}
    // interface Platform {}
  }
}

export {}
