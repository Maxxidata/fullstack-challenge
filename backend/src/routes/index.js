import { Router } from 'express';
import professionalRoutes from './ProfessionalRoutes';

const routes = new Router;

routes.use(professionalRoutes);

export default routes;
