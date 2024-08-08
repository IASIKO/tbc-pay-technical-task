import { useCountStore } from "./context/store";

function App() {
  const count = useCountStore((state) => state.count);
  const increment = useCountStore((state) => state.increment);
  const decrement = useCountStore((state) => state.decrement);

  return (
    <>
      <div>
        <button onClick={decrement}>dec</button>
        {count}
        <button onClick={increment}>inc</button>
      </div>
    </>
  );
}

export default App;
