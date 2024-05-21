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