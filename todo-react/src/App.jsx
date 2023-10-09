const App = () => {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain">
        <header className="container mx-auto px-4 pt-8">
          <div className="flex justify-between">
            <h1 className="text-white">TODO</h1>
            <button>Moon</button>
          </div>
            <form>
                <input type="text" placeholder="Create a new todo..." />
            </form>
        </header>

        <main className="container mx-auto px-4">
          <article>
            <button>circle</button>
            <p>Complete task to be free 😅</p>
            <button>delete</button>
          </article>
          <section>
            <span>5 items left</span>
            <button>Clear Completed</button>
          </section>
        </main>

        <section className="container mx-auto px-4">
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </section>
        <p className="text-center">Drag and drop to reorder list</p>
    </div>
  );
}

export default App; 