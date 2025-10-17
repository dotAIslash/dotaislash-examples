---
ai:meta
  priority: medium
  attach: always
  applies_to: [react]
---

# React Best Practices

## Component Structure

```typescript
// components/UserCard.tsx
interface UserCardProps {
  user: {
    id: string;
    name: string;
    email: string;
  };
  onEdit?: (id: string) => void;
}

export function UserCard({ user, onEdit }: UserCardProps) {
  return (
    <div className="card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      {onEdit && <button onClick={() => onEdit(user.id)}>Edit</button>}
    </div>
  );
}
```

## Hooks

- Use hooks at top level only
- Custom hooks start with `use`
- Cleanup in useEffect

```typescript
function useData(id: string) {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const controller = new AbortController();
    
    fetchData(id, controller.signal)
      .then(setData);
    
    return () => controller.abort(); // Cleanup
  }, [id]);
  
  return data;
}
```

## Performance

- Use React.memo for expensive components
- useMemo for expensive calculations
- useCallback for stable function references
- Avoid inline object/array literals in JSX
