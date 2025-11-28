// tailwind.config.ts

import type { Config } from 'tailwindcss';

const config: Config = {
  // ... other configurations
  theme: {
    extend: {
      // ⬇️ ADD THIS SECTION ⬇️
      backgroundImage: {
        'radial-brand-glow': 
          'radial-gradient(at top, color-mix(in srgb, var(--accent) 15%, transparent) 0%, transparent 60%)',
      },
      // ⬆️ END OF SECTION TO ADD ⬆️
      // ... other extensions (e.g., colors, spacing)
    },
  },
  // ... other configurations
};

export default config;