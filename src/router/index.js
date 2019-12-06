import { renderRoutes } from 'react-router-config';
import Home from '../views/Home';
import List from '../views/List';
import Order from '../views/Order';
import OrderDetail from '../views/OrderDetail';

const routes = [
  {
    path: '/home',
    component: Home,
    exact: true,
  },
  {
    path: '/list',
    component: List,
    exact: true,
  },
  {
    path: '/order',
    component: Order,
    exact: true,
  },
  {
    path: '/order-detail',
    component: OrderDetail,
    exact: true,
  },
];

const Routes = renderRoutes(routes);
export default Routes;
