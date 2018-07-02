import { model, property, Entity } from "@loopback/repository";

@model({
  name: "Users"
})
export class Users extends Entity {

  @property({
    type: "number",
    id: true
  })
  id: number;

  @property({
    type: "string"
  })
  Username: string;

  @property({
    type: "string"
  })
  Password: string;

  getId() {
    return this.id;
  }

  getPassword() {
    return this.Password;
  }

  getUsername() {
    return this.Username;
  }

}
