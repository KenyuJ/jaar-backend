import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';

import * as  bcrypt from 'bcrypt'

import { CreateUsuarioInput } from './dto/create-usuario.input';
import { UpdateUsuarioInput } from './dto/update-usuario.input';

import { Usuario } from './entities/usuario.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PersonaService } from 'src/persona/persona.service';


@Injectable()
export class UsuarioService {

  constructor(
    @InjectModel(Usuario.name)
    private readonly usuarioModel : Model<Usuario>,
    private readonly personaService : PersonaService
  ){}

  async create(createUsuarioInput: CreateUsuarioInput) : Promise<Usuario>
  {
    const { persona , usu_clave, ...data } = createUsuarioInput

    const usuarioexist = await this.usuarioModel.findOne({ usu_nombre: data.usu_nombre })
    if(usuarioexist) throw new BadRequestException(`El usuario con el nombre ${data.usu_nombre} ya existe.`)

    const newPersona = await this.personaService.create(persona)

    const newUsuario = new this.usuarioModel({
      ...data,
      usu_clave: bcrypt.hashSync(usu_clave, 10),
      persona : newPersona
    })

    return await newUsuario.save()
  }

  async findAll() : Promise<Usuario[]> 
  {
    return await this.usuarioModel.find().populate('persona').exec()
  }

  async findOne(id: string) : Promise<Usuario>
  {
    const usuario = await this.usuarioModel.findById(id).populate('persona').exec()

    if (!usuario) throw new NotFoundException(`El usuario con el id ${id} no se encuentra.`)

    return usuario
  }

  async findOneByUsername(username: string) 
  {
    const usuario = await this.usuarioModel.findOne({ usu_nombre: username })
    if (!usuario) throw new NotFoundException(`El usuario con el nombre ${username} no se encuentra.`)

    return usuario
  }

  async update(updateUsuarioInput: UpdateUsuarioInput) : Promise<Usuario>
  {
    const { _id, persona, ...data } = updateUsuarioInput
    const usuario = await this.findOne(_id)

    if(persona)
    {
      const data_persona_update = {...persona , _id: usuario.persona._id}
      await this.personaService.update(data_persona_update)
    }
    
    const usuarioUpdated = await this.usuarioModel.findByIdAndUpdate(
      _id,
      {...data},
      { new : true }
    ).populate('persona').exec()

    return usuarioUpdated
  }

  async remove(id: string) : Promise<Usuario>
  {
    const usuario = await this.findOne(id)
    
    const usuarioDeleted = await this.usuarioModel.findByIdAndUpdate(
      usuario._id,
      { usu_estado: false },
      { new: true }
    )

    return usuarioDeleted;
  }
}
