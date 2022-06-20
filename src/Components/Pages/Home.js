import React from "react";
// import Grid from "../Grid/Grid";
import MoviePick from "../MoviePick/MoviePick";
import SignIn from "../SignIn/SignIn";

function Home() {
  return (
    <div>
      <MoviePick />
      <SignIn />
      {/* <Grid /> */}
    </div>
  );
}

export default Home;
