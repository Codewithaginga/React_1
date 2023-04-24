import Header from "./Header";
import Movie2 from "./Movie2";
import Movies from "./Movies";
import feature_1 from "../src/images/feature-1.png";
import feature_2 from "../src/images/feature-2.png";
import feature_3 from "../src/images/feature-3.png";
import feature_4 from "../src/images/feature-4.png";

export default function Application() {
  return (
    <>
      <div className="App">
        <Header />
      </div>
      <div className="features">
        <Movies
          First="Enjoy on your TV."
          Second="Watch on smart Tvs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray"
          Image={feature_1}
        />
        <hr />
        <Movie2
          Image={feature_2}
          First="Download your shows to watch offline"
          Second="Save your favourites easily and always have something to watch"
        />
        <hr />
        <Movies
          First="Watch everywhere."
          Second="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
          Image={feature_3}
        />
        <hr />
        <Movie2
          Image={feature_4}
          First="Create profiles for children."
          Second="Send children on adventures with their favourites characters in a space made just for them-free with your membership"
        />
      </div>
    </>
  );
}
