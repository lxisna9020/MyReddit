import { render } from "react-dom";

//实际是在引入App.js，App是App.js的缩写，写App的时候会先在当前目录下找App.js这个文件；
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";

// 调用
render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
  </BrowserRouter>,

  document.getElementById("root")
);

// 入口文件index.js中使用render函数挂载到index.html的DOM节点上，
// ReactDOM.render(<App />, document.getElementById(" "));
// render函数只能渲染一个标签，index.js或者组件中都是这样，可以在外层包裹一个div，里面放各个组件标签名
