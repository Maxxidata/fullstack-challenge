const TypeOfProfessional = require('../models/TypeOfProfessional')


class TypeOfProfessionalController {
    async index(request, response){
        const { id } = request.params;
        
        try {
            const professional = await TypeOfProfessional.findByPk(id, {
                include: { association: 'type', attributes: ['id', 'name'] }
            });
    
            return response.status(200).json(professional);
        } catch (error) {
            return response.status(404).json({message: 'Could not find types'});
        }
    }
    async show(request, response){
        const typeOfProfessionals = await TypeOfProfessional.findAll();

        if (!typeOfProfessionals) return request.status(404).json()

        return response.status(200).json(typeOfProfessionals)
    }
    async create(request, response){
        const { type_of_professional } = request.body;

        const description = type_of_professional.toUpperCase();
        const [ typeOfProfessional ] = await TypeOfProfessional.findOrCreate({
            where: { description }
        });

        return response.status(200).json(typeOfProfessional)
    }
    async update(request, response){
        const { id } = request.params;
        const { type_of_professional } = request.body;

        try {
            let typeOfProfessional = await TypeOfProfessional.findByPk(id)
            const typeOfProfessionalUpdated = await typeOfProfessional.update({
                description: type_of_professional.toUpperCase()
            })
    
            return response.status(200).json(typeOfProfessionalUpdated);
        } catch (error) {
            return response.status(404).json({mesage: 'Could not update type'});
        }
    }
    async destroy(request, response){
        const { id } = request.params

        try {
            const typesOfProfessionals = await TypeOfProfessional.findByPk(id);

            await typesOfProfessionals.destroy();

            return response.status(204).json();
        } catch (error) {
            return response.status(404).json({message: 'Could not delete types'});
        }
    }
}

module.exports = TypeOfProfessionalController