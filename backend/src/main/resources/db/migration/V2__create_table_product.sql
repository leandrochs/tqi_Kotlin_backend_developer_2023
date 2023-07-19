CREATE TABLE product (
  product_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  unit_of_measure VARCHAR(50),
  unit_price DECIMAL(10, 2),
  category_id INT,
  FOREIGN KEY (category_id) REFERENCES category(category_id)
);
