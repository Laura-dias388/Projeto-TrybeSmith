import express from 'express';

import RouterProducts from './RoutersProducts';
import RouterUsers from './RoutersUsers';
import RouterOrders from './RouterOrders';

const Router = express();

Router.use('/products', RouterProducts);
Router.use('/users', RouterUsers);
Router.use('/orders', RouterOrders);

export default Router;

// Ajuda de Ewerton Ferreira T-23 Tribo A;