import React, { Component } from "react";
import axios from "axios";
import {
  List,
  ListItemButton,
  ListItemText,
  Grid,
  Typography,
  Divider,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

const Pag = styled("div")(({ theme }) => ({
  backgroudColor: alpha(theme.palette.common.white, 0.15),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  marginTop: 70,
}));

export class Pages extends Component {
  state = {
    pages: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:8888/my-reddit-back/wp-json/wp/v2/pages")
      .then((res) =>
        //更新state需要用this.setState()来更新状态
        this.setState({
          pages: res.data,
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Pag sx={{ flexGrow: 1, maxWidth: 752 }}>
        <Grid container-fluid>
          <Grid item>
            <Typography sx={{ ml: 1.5, mb: 1 }} variant="h6" component="div">
              Communautés en tendance aujourd'hui
            </Typography>
            <Divider />
            <List>
              <div>
                {this.state.pages.map((page) => (
                  <ListItemButton>
                    <ListItemText
                      primary={page.title.rendered}
                      onClick={() => {
                        this.props.onPageClicked(page.id); //查找所有拥有此id的post
                      }}
                    />
                  </ListItemButton>
                ))}
              </div>
            </List>
          </Grid>
        </Grid>
      </Pag>
    );
  }
}

export default Pages;
