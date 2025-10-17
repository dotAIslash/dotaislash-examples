// File: dotaislash-examples/vitest.config.ts
// What: Vitest configuration for example validation tests
// Why: Test that all examples are valid and properly structured
// Related: tests/examples.test.ts

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node'
  }
});
