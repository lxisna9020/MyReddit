import React, { Component } from "react";
import axios from "axios";
import {
  List,
  ListItemButton,
  ListItemText,
  Grid,
  Typography,
  Divider,
  Card,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

const Catgo = styled(Card)(({ theme }) => ({
  backgroundColor: "white",
  marginRight: theme.spacing(2),
  marginLeft: 0,
}));

export class Categories extends Component {
  state = {
    categories: [],
  };

  //在componentDidMount()内请求数据，并更新数据
  componentDidMount() {
    axios
      .get("http://localhost:8888/my-reddit-back/wp-json/wp/v2/categories")
      .then((res) =>
        //更新state需要用this.setState()来更新状态
        this.setState({
          categories: res.data,
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Catgo sx={{ flexGrow: 1, maxWidth: 752 }}>
        <Grid container>
          <Grid item>
            <Typography
              sx={{ ml: 1.5, mb: 1, pt: 2 }}
              variant="h6"
              component="div"
            >
              Catégories
            </Typography>
            <Divider />

            {/* <Demo> */}
            <List>
              <div>
                {this.state.categories.map((category) => (
                  <ListItemButton
                    onClick={() => {
                      this.props.onCategoryClicked(category.id); //查找所有拥有此id的post
                    }}
                  >
                    <ListItemText primary={category.name} />
                  </ListItemButton>
                ))}
              </div>
            </List>
            {/* </Demo> */}
          </Grid>
        </Grid>
      </Catgo>
    );
  }
}
export default Categories;
