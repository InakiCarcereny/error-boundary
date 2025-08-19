import { useEffect, useState } from 'react';

export function PromiseError() {
  const [data, setData] = useState<string | null>(null);

  //dentro de una asicronia el error boundary no captura el error.

  useEffect(() => {
    const fetchData = async () => {
      throw new Error('Error');
    };

    fetchData().catch((err) => {
      setData(err.message);
      throw new Error('Error');
    });
  }, []);

  return <div>{data}</div>;
}
