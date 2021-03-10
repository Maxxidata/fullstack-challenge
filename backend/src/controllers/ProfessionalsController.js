const Professional = require('../models/Professional')
const TypeOfProfessional = require('../models/TypeOfProfessional')


class ProfessionalsController {
    async create(request, response){
        const { name, email, phone, situation, type_of_professional } = request.body

        const description = type_of_professional.toUpperCase();
        const [ typeOfProfessional ] = await TypeOfProfessional.findOrCreate({
            where: { description }
        })
        
        const profissional = await Professional.create({
            name, email, phone, situation, type_of_professional: typeOfProfessional.dataValues.id
        })

        return response.status(200).json(profissional)
    }
}

module.exports = ProfessionalsController