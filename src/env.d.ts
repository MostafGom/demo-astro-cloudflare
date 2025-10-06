/// <reference types="astro/client" />

declare namespace App {
  interface Locals extends Runtime {
    runtime: {
      env: {
        SECRET_VAR_ONE: string;
      };
    };
  }
}
