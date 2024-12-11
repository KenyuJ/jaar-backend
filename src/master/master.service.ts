import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateMasterInput } from './dto/create-master.input';
import { UpdateMasterInput } from './dto/update-master.input';
import { InjectModel } from '@nestjs/mongoose';
import { Master } from './entities/master.entity';
import { isValidObjectId, Model } from 'mongoose';

@Injectable()
export class MasterService {

  constructor(
    @InjectModel(Master.name)
    private readonly masterModel : Model<Master>
  ){}

  async create(createMasterInput: CreateMasterInput) : Promise<Master>
  {
    try {

      createMasterInput.mas_nombre = createMasterInput.mas_nombre.toUpperCase();

      const newMaster = await this.masterModel.create(createMasterInput)

      return newMaster;
      
    } 
    catch (error)
    {
      if (error.code === 11000) throw new BadRequestException(`La configuración de '${createMasterInput.mas_nombre}' ya existe!`)

      console.log(error)
    }
    
  }

  async findAll() : Promise<Master[]>
  {
    const listMaster = await this.masterModel.find();
    
    return listMaster
  }

  async findOne(term: string) : Promise<Master>
  {
    let master;

    if(isValidObjectId(term))
    {      
      master = await this.masterModel.findById(term);
    }
    else
    {
      term = term.toUpperCase();
      master = await this.masterModel.findOne({mas_nombre: term});
    }

    if (!master) throw new NotFoundException(`La configuración con el id ${term} no se encuentra.`);

    return master;
  }

  async update(updateMasterInput: UpdateMasterInput) : Promise<Master>
  {
    const { _id, mas_nombre } = updateMasterInput
    const master = await this.findOne(_id)

    if(mas_nombre) updateMasterInput.mas_nombre = mas_nombre.toUpperCase();

    const masterUpdated = await this.masterModel.findByIdAndUpdate(
      _id,
      updateMasterInput,
      { new : true }
    );

    return masterUpdated;
  }

  async remove(id: string) : Promise<Master>
  {
    const master = await this.findOne(id);

    const masterDeleted = await this.masterModel.findByIdAndDelete(id, { new : true })

    return masterDeleted
  }

  async incrementNroComprobante(id: string)
  {
    const configMaster = await this.findOne(id);

    const incremento = configMaster.mas_nro+1
  
    await this.masterModel.findByIdAndUpdate(
      id,
      { mas_nro : incremento },
      { new: true }
    )
  }

  async deleteData() {
    await this.masterModel.deleteMany()
  }
}
