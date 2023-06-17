import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className=" w-96 bg-base-100 shadow-xl rounded-md overflow-hidden">
        <img
          src="/src/assets/images/bg-pattern-card.svg"
          className="w-full"
          alt=""
        />
        <div className="bg-white">
          <div className="flex justify-center">
            <img
              src="/src/assets/images/image-victor.jpg"
              className="w-16 h-16 rounded-full border-2 border-white -mt-8"
              alt=""
            />
          </div>
          <h2 className="text-center text-2xl font-bold mt-4 mb-2">
            Victor Crest <span className="font-normal">26</span>
          </h2>
          <p className="text-center">London</p>
          <div className="divider"></div>
          <div className="flex justify-between mx-8 mb-5 text-center">
            <div>
              <h1 className="text-xl font-bold">80K</h1>
              <p>Followers</p>
            </div>
            <div>
              <h1 className="text-xl font-bold">803K</h1>
              <p>Likes</p>
            </div>
            <div>
              <h1 className="text-xl font-bold">1.4K</h1>
              <p>Photos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
