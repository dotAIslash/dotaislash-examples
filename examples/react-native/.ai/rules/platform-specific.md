---
ai:meta
  priority: medium
  attach: always
  applies_to: [ios, android]
---

# Platform-Specific Code

## Platform Detection

```typescript
import { Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
      },
      android: {
        elevation: 4,
      },
    }),
  },
});
```

## Platform Files

- `Component.ios.tsx` - iOS only
- `Component.android.tsx` - Android only
- `Component.tsx` - Shared

## Native Modules

- Keep platform-specific code minimal
- Use community packages when possible
- Document native dependencies
