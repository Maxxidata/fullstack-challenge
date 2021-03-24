import { Router } from 'express';
import professionalRoutes from './ProfessionalRoutes';
import professionalTypeRoutes from './ProfessionalTypeRoutes';

const routes = new Router;

routes.use(professionalRoutes);
routes.use(professionalTypeRoutes);

export default routes;
