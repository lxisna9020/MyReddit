import React, { Component } from "react";
import axios from "axios";

import { Card, CardHeader, CardMedia, IconButton, Button } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import { Container, CircularProgress, Box } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import WhatshotIcon from "@mui/icons-material/Whatshot";

export class Posts extends Component {
  state = {
    posts: [],
    isLoaded: false, //state的两个状态，一个是posts，一个是是否已经加载数据完成的isLoaded
  };

  loadPost() {
    let params = {}; //params是(http://localhost:8888/my-reddit-back/wp-json/wp/v2/posts?categories=3)中的categories=3，3是category的id

    if (this.props.categoryId !== undefined) {
      params.categories = this.props.categoryId; // 如果父组件categories里的ID不是空（即已点击），子组件的params里的ID等于父组件的category ID
    }

    this.setState({
      isLoaded: false,
    });

    axios
      .get("http://localhost:8888/my-reddit-back/wp-json/wp/v2/posts", {
        params,
      })
      .then((res) =>
        //更新state需要用this.setState()来更新状态
        this.setState({
          posts: res.data,
          isLoaded: true,
        })
      )
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.loadPost();
  }

  // 每当我单击按钮时,状态都会用ParentComponent中的新ID更新,并作为props传递给ChildComponent
  //让开发者在等界面完全render后进行一些请求或者其他操作，为了避免循环调用这个函数，官方要求在函数内加一行判断，以确保不会陷入无限循环
  componentDidUpdate(prevProps) {
    if (prevProps.categoryId !== this.props.categoryId) {
      this.loadPost();
    }
  }

  render() {
    const { posts, isLoaded } = this.state;

    if (isLoaded) {
      return (
        <Box>
          <Card sx={{ backgroundColor: "white", mx: "20px", height: "57px" }}>
            <Box>
              <Button aria-label="populaire" color="secondary">
                <WhatshotIcon />
                Populaires
              </Button>
            </Box>
          </Card>

          {posts.map((post) => (
            <Card sx={{ backgroundColor: "white", m: "20px" }}>
              <CardHeader subheader={post.date.split("T")[0]} />
              <CardHeader title={post.title.rendered} />
              <CardMedia
                height="194"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                //将编辑器输入的内容显示在页面中，而由于编辑器中获得的内容会包括html标签，例如<a><p>之类的，直接在页面上展示的话就会显示为字符串。
                //在Vue中有个v-html属性可以处理这个问题，而在React中，就需要用到dangerouslySetInnerHTML属性.
              />
              <Button
                sx={{ color: "#757575" }}
                aria-label="comments"
                color="secondary"
              >
                <CommentIcon /> Commentaires
              </Button>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </Card>
          ))}
        </Box>
      );
    }
    return (
      <Container maxWidth="sm">
        <CircularProgress />
      </Container>
    );
  }
}

export default Posts;
