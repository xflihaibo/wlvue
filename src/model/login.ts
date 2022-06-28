import { Column, ModelBase } from 'loca-boot-core';

export class loginModel extends ModelBase {

  @Column({ name: 'token' })
  public token!: string;

  @Column({ name: 'name' })
  public userName!: string;

  // alias
  @Column({ name: 'id' })
  public id!: string;

}

