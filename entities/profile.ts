import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
} from "typeorm";
import { User } from "./user";

@Entity({ name: "profile" })
export class Profile {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id: string;

  // Profile

  @OneToOne("User", "profile")
  user?: User;
}
