import { useEffect } from 'react';

export function EffectExample() {
  useEffect(() => {
    throw new Error('Effect error');
  }, []);

  return <div></div>;
}
