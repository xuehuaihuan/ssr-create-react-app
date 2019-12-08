import Home from '../views/Home';
import List from '../views/List';
import Detail from '../views/Detail';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/home',
    component: Home,
    exact: true,
  },
  {
    path: '/list',
    component: List,
    exact: true,
    serverLoadData: List.serverLoadData,
  },
  {
    path: '/detail',
    component: Detail,
    exact: true,
    serverLoadData: Detail.serverLoadData,
  },
];

export default routes;
