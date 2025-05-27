const Home = () => {
  return (
    <div className="grid min-h-screen grid-cols-[280px_1fr_1fr]">
      <div className="bg-white p-4">
        <h2 className="mb-2 font-bold">Sidebar</h2>
      </div>

      <div className="bg-gray-100 p-4">
        <h2 className="mb-2 font-bold">Main Content</h2>
      </div>

      <div className="bg-white p-4">
        <h2 className="mb-2 font-bold">Main Content</h2>
      </div>
    </div>
  );
};

export default Home;
