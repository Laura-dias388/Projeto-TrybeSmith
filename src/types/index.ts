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
  productIds: number;
  userId: number;
};

/* CREATE TABLE Trybesmith.products (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  amount TEXT NOT NULL,
  order_id INTEGER,
  FOREIGN KEY (order_id) REFERENCES Trybesmith.orders (id)
); */
