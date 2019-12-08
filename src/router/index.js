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
    loadData: List.loadData,
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

export default routes;
