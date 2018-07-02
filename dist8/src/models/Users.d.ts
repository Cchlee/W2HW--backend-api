import { Entity } from "@loopback/repository";
export declare class Users extends Entity {
    id: number;
    Username: string;
    Password: string;
    getId(): number;
    getPassword(): string;
    getUsername(): string;
}
