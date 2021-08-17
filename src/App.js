import "./App.css";
import Nav from "./components/Nav/Nav";
import SliderBar from "./components/SlideBar/SliderBar";
import NewsFeed from "./features/NewsFeed/NewsFeed";

function App() {
  return (
    <div className="App">
      <SliderBar />
      <Nav />
      <NewsFeed />
    </div>
  );
}

export default App;
