import { model, property, Entity } from "@loopback/repository";

@model({
  name: "Products"
})
export class Products extends Entity {

  @property({
    type: "number",
    id: true
  })
  ReservationId: number;

  @property({
    type: "string"
  })
  Name: string;

  @property({
    type: "string"
  })
  Description: string;

  @property({
    type: "number"
  })
  Price: number;

  @property({
    type: "number"
  })
  Rating: number;

  @property({
    type: "string"
  })
  Spot: string;

  getPrice() {
    return this.Price;
  }

  getId() {
    return this.ReservationId;
  }

  getName() {
    return this.Name;
  }
}
