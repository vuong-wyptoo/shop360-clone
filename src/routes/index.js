import routesConfig from '@/config/routes';

import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Cart from '@/pages/Cart';
import Product from '@/pages/Product';

const publicRouter = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.product, component: Product },
    { path: routesConfig.cart, component: Cart },
    { path: routesConfig.login, component: Login },
];
const privateRouter = [];

export { publicRouter, privateRouter };
