import React from "react";
import Hero from "../components/Hero";
import Grid from '@material-ui/core/Grid';

function Landing() {
  return (
    <div>
      <Grid container>
    <Grid item xs={4} />
    <Grid item xs={4} />
    <Grid item xs={4} />
</Grid>
      <Hero/>
    </div>
  );
}

export default Landing;
