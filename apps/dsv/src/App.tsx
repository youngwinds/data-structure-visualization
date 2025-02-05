import { useEffect, useState } from 'react';
import { run } from 'parser';
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    run();
  }, []);

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
}

export default App;
