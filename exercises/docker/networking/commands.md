# Networking

Here are a few examples to practice Docker networking, covering different types of Docker networks such as bridge, host, and custom networks. These examples will help you see how Docker networking works and how containers can communicate with each other.

## Using the Default Bridge Network

When you start a container without specifying a network, Docker automatically attaches it to the default bridge network. Containers on this network can communicate using container names.

Run a MySQL database container:

```sh
docker run -d --name mysql-db -e MYSQL_ROOT_PASSWORD=my-secret-pw mysql:5.7
```

Run an adminer container (a lightweight web-based database management tool) and link it to the `mysql-db` container:

```sh
docker run -d --name adminer --link mysql-db:mysql -p 8080:8080 adminer
```

Visit `http://localhost:8080` in your browser. Log in with:

- Server: mysql
- Username: root
- Password: `my-secret-pw`
  
The `--link` flag allows adminer to connect to `mysql-db` using the alias `mysql`.

## Creating and Using a Custom Bridge Network

Custom bridge networks allow containers to communicate by name without using the --link flag.

Create a custom network called `my_network`:

```sh
docker network create my_network
```

Run the MySQL container on the custom network:

```sh
docker run -d --name mysql-db --network my_network -e MYSQL_ROOT_PASSWORD=my-secret-pw mysql:5.7
```

Run the Adminer container on the same network:

```sh
docker run -d --name adminer --network my_network -p 8080:8080 adminer
```

Visit `http://localhost:8080` in your browser. Log in with:

- Server: mysql-db
- Username: root
- Password: `my-secret-pw`

In a custom network, containers resolve each other by name automatically.

## Using the Host Network

The host network shares the host's network stack. This network mode is useful for applications that need direct access to the host's network.

Run an NGINX container using the host network:

```sh
docker run -d --name nginx --network host nginx
```

Since the container shares the host's network stack, access NGINX directly on port 80:

```sh
curl http://localhost
```
