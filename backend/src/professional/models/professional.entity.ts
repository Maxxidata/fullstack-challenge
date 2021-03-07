import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { ProfessionalType } from './professional-type.entity';

@Entity()
export class Professional {
  @ApiProperty({
    example: 1,
    description: 'ID of the professional',
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 'Jonh',
    description: 'Name of the professional',
  })
  @Column()
  name: string;

  @ApiProperty({
    example: '(00) 0 0000-0000',
    description: 'Phone number of the professional',
    nullable: true,
  })
  @Column({ nullable: true })
  phone: string;

  @ApiProperty({
    example: 'email@email.com',
    description: 'Email of the professional',
    nullable: true,
  })
  @Column({ nullable: true })
  email: string;

  @ApiProperty({
    example: ProfessionalType,
    description: 'Professional type of the professional',
  })
  @ManyToOne(() => ProfessionalType, professionalType => professionalType.id, {
    eager: true,
  })
  professionalType: ProfessionalType;

  @ApiProperty({
    example: true,
    description: 'Situation of the professional',
  })
  @Column()
  situation: boolean;

  @ApiProperty({
    example: '0000-00-00T00:00:00.000Z',
    description: 'Create date of the professional type',
  })
  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public createdAt: Date;

  @ApiProperty({
    example: '0000-00-00T00:00:00.000Z',
    description: 'Update date of the professional type',
  })
  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updatedAt: Date;
}
