export type Product = {
  id?: number;
  name: string;
  amount: string;
};

export type Users = {
  id?: number;
  username: string;
  vocation: string;
  level: number;
  password?: string;
};

export type Orders = {
  id?: number;
  productsIds: number[];
  userId: number;
};
