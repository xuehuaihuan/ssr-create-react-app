import Home from '../views/Home';
import List from '../views/List';
import Detail from '../views/Detail';
import NotFound from '../views/components/NotFound';

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
    path: '/detail/:id',
    component: Detail,
    exact: true,
    serverLoadData: Detail.serverLoadData,
  },
  {
    component: NotFound,
  },
];

export default routes;
