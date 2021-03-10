import { Field, ObjectType } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@ObjectType()
@Entity('users')
export class User extends BaseEntity {
  @Field(() => Number)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('text')
  email: string;

  @Field()
  @Column('text')
  password: string;
}
