import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Box,
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
  Badge,
  Modal,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";
import axios from "axios";

//搜索框的样式
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(20),
    width: "40%",
  },
}));

//搜索框里的图像样式
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function Navbar() {
  const [setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const user = JSON.parse(localStorage.getItem("user")); //提用存在localstorage里的信息，要把它们从string转换成objet
  axios.defaults.headers["Authorization"] = `Bearer ${
    user ? user.token : null
  }`;

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [open, setOpen] = React.useState(false);
  const [newCatName, setNewCatName] = React.useState(false);

  const handleOpenNewCat = () => {
    setOpen(true);
    handleCloseUserMenu();
  };

  const handleCloseNewCat = () => setOpen(false);

  function handleChangeCatName(event) {
    setNewCatName(event.target.value);
  }

  const handleCreateNewCat = () => {
    console.log(user);
    const body = {
      name: newCatName,
    };
    axios
      .post(
        "http://localhost:8888/my-reddit-back/wp-json/wp/v2/categories",
        body
      )
      .then((res) => handleCloseNewCat())
      .catch((err) => console.log(err));
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    padding: "15px",
    width: 400,
    border: "1px solid #000",
    backgroundColor: "#fff",
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#6e45e2",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuOutlinedIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            My_Reddit
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Rechercher..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />

          {/* 邮件提醒 */}
          <MenuItem sx={{ pr: 0 }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
          </MenuItem>
          {/*End-邮件提醒 */}

          {/* 提示图标 */}
          <MenuItem sx={{ pl: 0 }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </MenuItem>
          {/* End-提示图标 */}

          {/* 三元运算符  condition ? exprIfTrue : exprIfFalse */}
          {user ? (
            /* 设置头像 */
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={user.user_display_name}>
                    {user.user_display_name[0]}
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseNavMenu}>Dark Mode</MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>Profile</MenuItem>
                <div>
                  <MenuItem onClick={handleOpenNewCat}>
                    Créer une catégorie
                  </MenuItem>
                  <Modal
                    keepMounted
                    open={open}
                    onClose={handleCloseNewCat}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                  >
                    <Card sx={style}>
                      <CardHeader title="Créer une catégorie" />
                      <Divider />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Name
                        </Typography>
                        <input onChange={handleChangeCatName}></input>
                      </CardContent>
                      <CardActions>
                        <Button onClick={handleCreateNewCat}>
                          Créer une catégorie
                        </Button>
                      </CardActions>
                    </Card>
                  </Modal>
                </div>
              </Menu>
            </Box>
          ) : (
            /* End-设置头像 */
            /* login */
            <Link to="/login" underline="none" sx={{ pr: 3 }}>
              <Typography
                variant="subtitle1"
                color="#fafafa"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                Se connecter
              </Typography>
            </Link>
            /* END-login */
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
