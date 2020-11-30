import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
} from "typeorm";
import { Profile } from "./profile";

@Entity({ name: "user" })
export class User {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id: string;

  @Column("varchar", { length: 128 })
  firstName: string;

  @Column("varchar", { length: 128, nullable: true })
  lastName?: string;

  @OneToOne("Profile", "user")
  profile: Profile
}
