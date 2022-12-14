import express from 'express';

import RouterProducts from './RoutersProducts';
import RouterUsers from './RoutersUsers';

const Router = express();

Router.use('/products', RouterProducts);
Router.use('/users', RouterUsers);

export default Router;

// Ajuda de Ewerton Ferreira T-23 Tribo A;