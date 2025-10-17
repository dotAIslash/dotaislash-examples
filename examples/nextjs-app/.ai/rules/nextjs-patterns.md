---
ai:meta
  priority: high
  attach: always
  scope: global
  applies_to: [nextjs, react]
---

# Next.js 15 Patterns

## App Router Structure

```
app/
├── layout.tsx          # Root layout
├── page.tsx            # Home page
├── loading.tsx         # Loading UI
├── error.tsx           # Error handling
├── not-found.tsx       # 404 page
└── dashboard/
    ├── layout.tsx      # Nested layout
    └── page.tsx        # Dashboard page
```

## Server vs Client Components

**Server Components (Default):**
```typescript
// app/page.tsx - Server Component by default
export default async function Page() {
  const data = await fetchData(); // Can use async/await
  return <div>{data}</div>;
}
```

**Client Components:**
```typescript
'use client'; // Add this directive

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

## Data Fetching

Use Server Components for data fetching:

```typescript
async function getData() {
  const res = await fetch('https://api.example.com/data', {
    next: { revalidate: 3600 } // Cache for 1 hour
  });
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return <div>{data.title}</div>;
}
```

## Route Handlers (API Routes)

```typescript
// app/api/users/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const users = await fetchUsers();
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const body = await request.json();
  // Handle POST
  return NextResponse.json({ success: true });
}
```

## Parallel Data Fetching

```typescript
export default async function Page() {
  // Fetch in parallel
  const [users, posts] = await Promise.all([
    fetchUsers(),
    fetchPosts()
  ]);
  
  return (
    <>
      <Users data={users} />
      <Posts data={posts} />
    </>
  );
}
```
