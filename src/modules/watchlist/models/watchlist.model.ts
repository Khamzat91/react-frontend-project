import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from '../../user/modules/user.model';

@Table
export class Watchlist extends Model {
  @ForeignKey(() => User)
  user: User;

  @Column
  name: string;

  @Column
  assetId: string;
}
