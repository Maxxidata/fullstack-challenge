import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Professional } from './professional.entity';

@Entity()
export class ProfessionalType {
  @ApiProperty({
    example: 1,
    description: 'ID of the professional type',
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 'This is a example description',
    description: 'Description of the professional type',
  })
  @Column()
  description: string;

  @ApiProperty({
    example: true,
    description: 'Situation of the professional type',
  })
  @Column()
  situation: boolean;

  @OneToMany(() => Professional, professional => professional.id)
  professionals: Professional[];

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
