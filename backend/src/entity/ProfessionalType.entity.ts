import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  OneToMany,
  ManyToOne
} from "typeorm";
import { Professional } from "./Professional.entity";

@Entity()
export class ProfessionalType {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  situation: boolean;

  @OneToMany(() => Professional, professional => professional.id)
  professionals: Professional[];

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  public createdAt: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  public updatedAt: Date;

}
