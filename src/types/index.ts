import type { Request } from "express";
import { datetimeRegex } from "zod";
// biome-ignore lint/complexity/noBannedTypes: <explanation>
export type TRequest<T, P = {}, Q = {}> = Request<P, {}, T, Q>;
// biome-ignore lint/complexity/noBannedTypes: <explanation>
export interface IAuthRequest<T = {}, P = {}, Q = {}>
  // biome-ignore lint/complexity/noBannedTypes: <explanation>
  extends Request<P, {}, T, Q> {
  user?: TokenPayload;
}
// ? JWT TOKEN PAYLOAD
export type TokenPayload = {
  email: string;
  id: number;
};
export type Signup = {
  email:    string;
  password: string;
  fname:    string;
  lname:    string;
};

export type Login = {
  email:    string;
  password: string;
};
export type Customer={
  name:string,
  phone:string,
  address:string

}
export type Catagory={
  name:string
}
export type Product={
  name:string,
  price:number,
  catagoryId: number,
  supplierId: number,
  batch_no:string


}
export type Supplier={
  name:string,
  phone:string,
}

export type Stock = {
  quantity: number;
  purchaseDate: Date;
  expiryDate: Date;
  productId: number;
};
