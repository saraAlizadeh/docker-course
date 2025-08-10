# Docker CLI Essentials: Deep Dive

The Docker Command-Line Interface (CLI) is the primary way for developers and administrators to interact with Docker. Mastering the key commands can significantly improve your workflow and make managing containers, images, volumes, and networks much easier.

Here's a deep dive into the most essential Docker CLI commands and their usage.

## Docker Container Commands

✅ docker run
Starts a container from a specified image and runs a command inside it.

Example: Run a simple nginx container:

```bash
docker run -d --name webserver -p 8080:80 nginx
```

`-d`: Run container in detached mode (background)
`--name`: Assign a custom name to the container
`-p`: Map the container's port to the host machine

✅ docker ps
Lists all running containers.

Example: To list all running containers:

```bash
docker ps
```

Add `-a` to see all containers (running and stopped):

```bash
docker ps -a
```

✅ docker exec
Executes a command inside a running container.

Example: Run a bash shell inside the running container webserver:

```bash
docker exec -it webserver bash
```

`-it`: Interactive terminal mode, allowing you to interact with the shell.

✅ docker stop
Stops a running container.

Example: Stop the container named webserver:

```bash
docker stop webserver
```

✅ docker start
Starts a stopped container.

Example: Start the webserver container:

```bash
docker start webserver
```

✅ docker rm
Removes a stopped container.

Example: Remove a container named webserver:

```bash
docker rm webserver
```

✅ docker logs
Fetches logs from a running or stopped container.

Example: View logs from the webserver container:

```bash
docker logs webserver
```

Use `-f` to tail the logs (like tail `-f`):

```bash
docker logs -f webserver
```

## Docker Image Commands

✅ docker build
Builds a Docker image from a Dockerfile.

Example: Build an image from the current directory:

```bash
docker build -t my-image .
```

`-t`: Tags the image with a name (e.g., my-image).
`.`: The current directory, containing the Dockerfile.

✅ docker images
Lists all available images.

Example: View all local images:

```bash
docker images
```

✅ docker pull
Pulls an image from a registry (e.g., Docker Hub).

Example: Pull the nginx image from Docker Hub:

```bash
docker pull nginx
```

✅ docker push
Pushes a locally built image to a registry.

Example: Push the image my-image to Docker Hub:

```bash
docker push my-username/my-image
```

✅ docker rmi
Removes one or more images.

Example: Remove an image by name or ID:

```bash
docker rmi my-image
```

Use `-f` to force removal of images that are being used by containers:

```bash
docker rmi -f my-image
```

## Docker Volume and Network Commands

✅ docker volume ls
Lists all volumes.

Example: View all Docker volumes:

```bash
docker volume ls
```

✅ docker volume inspect
Inspect a volume to see its details.

Example: Inspect a volume named my-volume:

```bash
docker volume inspect my-volume
```

✅ docker volume rm
Removes a volume.

Example: Remove a volume named my-volume:

```bash
docker volume rm my-volume
```

✅ docker network ls
Lists all networks.

Example: View all Docker networks:

```bash
docker network ls
```

✅ docker network inspect
Inspect a Docker network.

Example: Inspect the bridge network:

```bash
docker network inspect bridge
```

✅ docker network rm
Removes a Docker network.

Example: Remove a network named my-network:

```bash
docker network rm my-network
```

## Docker System Commands

✅ docker info
Displays system-wide information about Docker, including the number of containers, images, and other stats.

Example:

```bash
docker info
```

✅ docker stats
Displays resource usage statistics for running containers.

Example: View real-time stats for all running containers:

```bash
docker stats
```

✅ docker prune
Cleans up unused resources (images, containers, volumes, networks).

Example: Remove all stopped containers:

```bash
docker container prune
```

✅ docker system prune
Prunes unused data from Docker (images, containers, volumes, and networks).

Example: Remove all unused resources:

```bash
docker system prune
```

Add `-a` to remove unused images as well:

```bash
docker system prune -a
```

## Advanced and Miscellaneous Docker CLI Commands

✅ docker inspect
Shows detailed information about a container or image (in JSON format).

Example: Inspect a container named webserver:

```bash
docker inspect webserver
```

✅ docker tag
Tags an image with a specific name or version.

Example: Tag the my-image image with v1.0:

```bash
docker tag my-image my-username/my-image:v1.0
```

✅ docker cp
Copies files/folders between containers and the host system.

Example: Copy a file from the webserver container to the host machine:

```bash
docker cp webserver:/path/to/file /host/path
```

✅ docker login
Logs in to Docker Hub or other Docker registries.

Example: Log into Docker Hub:

```bash
docker login
```
