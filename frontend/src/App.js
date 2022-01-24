import React, { Component } from "react";
import Posts from "./components/Posts";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./App.css";

const Root = styled("div")(({ theme }) => ({
  backgroundColor: "#DAE0E6",
  margin: 0,
}));

const Spacer = styled("div")(({ theme }) => ({
  height: 40,
}));

export class App extends Component {
  state = {
    currentCategoryId: undefined,
  };

  onCategoryClicked = (categoryId) => {
    this.setState({ currentCategoryId: categoryId });
  };

  render() {
    return (
      <Root>
        <Navbar />
        <Spacer />
        <Grid container justifyContent="center">
          <Grid item xs={8} md={7}>
            <Posts categoryId={this.state.currentCategoryId} />
          </Grid>
          <Grid item xs={4} md={2}>
            <Categories onCategoryClicked={this.onCategoryClicked} />
          </Grid>
        </Grid>
      </Root>
    );
  }
}

export default App;
