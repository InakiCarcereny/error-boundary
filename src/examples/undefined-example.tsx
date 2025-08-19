import { useState } from 'react';

export function UndefinedExample() {
  const [obj] = useState<{ prop?: string }>({});

  return <div>{obj.prop!.length}</div>;
}
