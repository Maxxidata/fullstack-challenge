const TypeOfProfessional = require('../models/TypeOfProfessional')


class TypeOfProfessionalController {
    async index(request, response){
        const { id } = request.params;
        
        const professional = await TypeOfProfessional.findByPk(id, {
            include: { association: 'type', attributes: ['id', 'name'] }
        });

        return response.status(200).json(professional)
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

        let typeOfProfessional = await TypeOfProfessional.findByPk(id)

        if (!typeOfProfessional) return response.status(404).json();

        console.log("Formatada "+type_of_professional);
        
        const typeOfProfessionalUpdated = await typeOfProfessional.update({
            description: type_of_professional.toUpperCase()
        })

        return response.status(200).json(typeOfProfessionalUpdated)
    }
    async destroy(request, response){
        const { id } = request.params

        const typesOfProfessionals = await TypeOfProfessional.findByPk(id);

        if(!typesOfProfessionals) return response.status(404)

        await typesOfProfessionals.destroy();

        return response.status(204).json()
    }
}

module.exports = TypeOfProfessionalController