import express from 'express';

import RouterProducts from './RoutersProducts';

const Router = express();

Router.use('/products', RouterProducts);

export default Router;

// Ajuda de Ewerton Ferreira T-23 Tribo A;