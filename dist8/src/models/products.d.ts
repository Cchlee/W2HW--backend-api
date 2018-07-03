import { Entity } from "@loopback/repository";
export declare class Products extends Entity {
    ReservationId: number;
    Name: string;
    Description: string;
    Price: number;
    Rating: number;
    Spot: string;
    getPrice(): number;
    getId(): number;
    getName(): string;
}
