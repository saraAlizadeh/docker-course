# Stateful Applications

## Create Volume

First, create a named Docker volume. This volume will store the MySQL data outside the container:

```sh
docker volume create mysql_data
```

Run the MySQL container and attach the volume created above. Replace `my-secret-pw` with your preferred password:

```sh
docker run -d \
  --name my_mysql \
  -e MYSQL_ROOT_PASSWORD=my-secret-pw \
  -v mysql_data:/var/lib/mysql \
  -p 3306:3306 \
  mysql:5.7
```

You can connect to the MySQL container using:

```sh
docker exec -it my_mysql mysql -uroot -p
```

Enter the password (`my-secret-pw`), and you'll be able to interact with MySQL as usual.

Create a new database, table and insert data:

```sh
CREATE DATABASE testdb;

USE testdb;

CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    position VARCHAR(50),
    salary DECIMAL(10, 2)
);

INSERT INTO employees (name, position, salary) VALUES
('Alice', 'Developer', 70000.00),
('Bob', 'Designer', 65000.00),
('Charlie', 'Manager', 85000.00);

SELECT * FROM employees;
```

Stop and remove the container:

```sh
docker stop my_mysql
docker rm my_mysql
```

Then, run the MySQL container again with the same volume:

```sh
docker run -d \
  --name my_mysql \
  -e MYSQL_ROOT_PASSWORD=my-secret-pw \
  -v mysql_data:/var/lib/mysql \
  -p 3306:3306 \
  mysql:5.7
```

## Bind Mount

On your host machine, create a directory to store MySQL data:

```sh
mkdir -p ~/mysql-data
```

Run the MySQL container and use the bind mount to map the host directory to the container:

```sh
docker run -d \
  --name my_mysql \
  -e MYSQL_ROOT_PASSWORD=my-secret-pw \
  -v ~/mysql-data:/var/lib/mysql \
  -p 3306:3306 \
  mysql:5.7
```

You can connect to the MySQL container using:

```sh
docker exec -it my_mysql mysql -uroot -p
```

Enter the password (`my-secret-pw`), and you'll be able to interact with MySQL as usual.

Create a new database, table and insert data:

```sh
CREATE DATABASE testdb;

USE testdb;

CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    position VARCHAR(50),
    salary DECIMAL(10, 2)
);

INSERT INTO employees (name, position, salary) VALUES
('Alice', 'Developer', 70000.00),
('Bob', 'Designer', 65000.00),
('Charlie', 'Manager', 85000.00);

SELECT * FROM employees;
```

Stop and remove the container:

```sh
docker stop my_mysql
docker rm my_mysql
```

Then, run the MySQL container again with the same volume:

```sh
docker run -d \
  --name my_mysql \
  -e MYSQL_ROOT_PASSWORD=my-secret-pw \
  -v mysql_data:/var/lib/mysql \
  -p 3306:3306 \
  mysql:5.7
```
