import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonaInput } from './dto/create-persona.input';
import { UpdatePersonaInput } from './dto/update-persona.input';

import { Persona } from './entities/persona.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class PersonaService {

    constructor(
        @InjectModel(Persona.name)
        private readonly personaModel : Model<Persona>
    ){}
      
    async create(createPersonaInput: CreatePersonaInput) : Promise<Persona>
    {
        try
        {
            const newPersona = new this.personaModel(createPersonaInput)
            
            return await newPersona.save()
        } 
        catch (error)
        {
            console.log(error)
        } 
    }

    // async findAll() : Promise<Persona[]>
    // {

    // }

    async findOne(id: string) : Promise<Persona>
    {
        const persona = await this.personaModel.findById(id)

        if (!persona) throw new NotFoundException(`La persona con el id ${id} no existe`)

        return persona
    }

    async update(updatePersonaInput: UpdatePersonaInput) : Promise<Persona>
    {
        const { _id, ...data } = updatePersonaInput

        const persona = await this.findOne(_id)

        const updatePersona = await this.personaModel.findByIdAndUpdate(
            _id,
            data,
            { new : true }
        ).exec()

        return updatePersona
    }

    async remove(id: string)
    {

    }

    async deleteData() {
        await this.personaModel.deleteMany()
    }

}
