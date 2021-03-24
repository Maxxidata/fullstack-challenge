import { Router } from 'express';
import ProfessionalTypeController from '../app/controllers/ProfessionalTypeController';

const professionalTypeRoutes = new Router;

// List
professionalTypeRoutes.get('/professional-type', async (req, res) => {
  try {
    const professionalTypes = await ProfessionalTypeController.list();
    return res.status(200).json(professionalTypes);
  } catch(error) {
    console.log(error);
    return res.status(500).json({ error });
  }
});

// GetOne
professionalTypeRoutes.get('/professional-type/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const professionalType = await ProfessionalTypeController.getOne(id);
    return res.status(200).json(professionalType);
  } catch(error) {
    console.log(error);
    return res.status(500).json({ error });
  }
});

// Create
professionalTypeRoutes.post('/professional-type', async (req, res) => {
  try {
    const professionalType = await ProfessionalTypeController.create(req.body);
    return res.status(200).json(professionalType);
  } catch(error) {
    console.log(error);
    return res.status(500).json({ error });
  }
});

// Update
professionalTypeRoutes.put('/professional-type/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const professionalType = await ProfessionalTypeController.update(id, req.body);
    return res.status(200).json(professionalType);
  } catch(error) {
    console.log(error);
    return res.status(500).json({ error });
  }
});

// Delete
professionalTypeRoutes.delete('/professional-type/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await ProfessionalTypeController.delete(id);
    return res.status(200).send();
  } catch(error) {
    console.log(error);
    return res.status(500).json({ error });
  }
});

export default professionalTypeRoutes;