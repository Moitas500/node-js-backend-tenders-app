CREATE TABLE roles (
    id TEXT PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE users(
    id TEXT PRIMARY KEY,
    document VARCHAR(20),
    last_name VARCHAR(30),
    name VARCHAR(30),
    roles_id TEXT,
    FOREIGN KEY (roles_id) REFERENCES roles(id)
);

CREATE TABLE products(
    id TEXT PRIMARY KEY,
    description VARCHAR(30),
    name VARCHAR(30),
    price INTEGER
);

CREATE TABLE sales(
    id TEXT PRIMARY KEY,
    qty INTEGER,
    sale_at TEXT,
    users_id TEXT,
    products_id TEXT,
    FOREIGN KEY (users_id) REFERENCES users(id),
    FOREIGN KEY (products_id) REFERENCES products(id)
);

INSERT INTO Products (id, description, name, price)
VALUES
    ('479fba0a-baaf-4b46-95a2-83a663817646', 'Arroz', 'Libra', 3000),
    ('efbff7f6-6374-4c2f-9c96-3611c65068ba', 'Papas', 'Libra', 1000),
    ('f7c377cf-0f92-435a-b5e6-2c8cdd9d10c6', 'Agua sin gas', '500 ml', 2000),
    ('3bed5d90-64ed-4bc1-8a3a-a378737ed542', 'Agua con gas', '500 ml', 2500),
    ('c3f25f98-c5c3-4a00-b550-f716ae36b25f', 'Docena de huevos', 'ministro de haciendo aprueba', 1800);