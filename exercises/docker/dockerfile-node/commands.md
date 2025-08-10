# Node.js Application

Build the Docker image:

```sh
docker build -t node-docker-app .
```

Run the Docker container:

```sh
docker run -p 3000:3000 node-docker-app
```

Test:

```sh
curl -i http://localhost:3000
```
