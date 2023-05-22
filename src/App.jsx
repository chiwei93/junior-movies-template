function App() {
  return (
    <>
      <div className="text-purple-600">index page</div>
      <div>The env variables are shown below:</div>
      <div>{import.meta.env.VITE_API_KEY}</div>
    </>
  );
}

export default App;
