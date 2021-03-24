import { Router } from 'express';
import ProfessionalController from '../app/controllers/ProfessionalController';

const professionalRoutes = new Router;

// List
professionalRoutes.get('/professional', async (req, res) => {
  try {
    const professionals = await ProfessionalController.list();
    return res.status(200).json(professionals);
  } catch(error) {
    console.log(error);
    return res.status(500).json({ error });
  }
});

// GetOne
professionalRoutes.get('/professional/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const professional = await ProfessionalController.getOne(id);
    return res.status(200).json(professional);
  } catch(error) {
    console.log(error);
    return res.status(500).json({ error });
  }
});

// Create
professionalRoutes.post('/professional', async (req, res) => {
  try {
    const professional = await ProfessionalController.create(req.body);
    return res.status(200).json(professional);
  } catch(error) {
    console.log(error);
    return res.status(500).json({ error });
  }
});

// Update
professionalRoutes.put('/professional/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const professional = await ProfessionalController.update(id, req.body);
    return res.status(200).json(professional);
  } catch(error) {
    console.log(error);
    return res.status(500).json({ error });
  }
});

// Delete
professionalRoutes.delete('/professional/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await ProfessionalController.delete(id);
    return res.status(200).send();
  } catch(error) {
    console.log(error);
    return res.status(500).json({ error });
  }
});

export default professionalRoutes;