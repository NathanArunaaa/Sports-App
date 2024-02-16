import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="grid grid-rows-3 grid-flow-col gap-4">
          <input
            type="text"
            placeholder="Add Players"
            class="input input-bordered w-full max-w-xs row-span-3 ..."
          />
          <button class="btn btn-circle row-span-2">
            <svg
              class="h-8 w-8 text-red-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="gray"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <line x1="12" y1="5" x2="12" y2="19" />{" "}
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
