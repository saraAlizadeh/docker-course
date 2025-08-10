# Image Optimization

## Use a Smaller Base Image

Before (Large base image):

```Dockerfile
FROM ubuntu:20.04
RUN apt-get update && apt-get install -y curl
```

After (Smaller base image):

```Dockerfile
FROM alpine:3.20
RUN apk add --no-cache curl
```

✅ alpine is only ~5MB compared to ubuntu's ~29MB+.

## Use Multi-Stage Builds

Multi-stage builds let you build an app in one stage and copy only the final result to a minimal runtime image.

Example: Go App

```Dockerfile
# Stage 1: Build the binary
FROM golang:1.22 AS builder
WORKDIR /app
COPY . .
RUN go build -o myapp

# Stage 2: Copy binary to small image
FROM alpine:3.20
COPY --from=builder /app/myapp /usr/local/bin/myapp
ENTRYPOINT ["myapp"]
```

✅ Result: Image is just a few MB and doesn't contain Go, build tools, or source code.

## Clean Up After Installing Packages

Bad:

```Dockerfile
RUN apt-get update && apt-get install -y curl
```

Better:

```Dockerfile
RUN apt-get update && apt-get install -y curl && \
    apt-get clean && rm -rf /var/lib/apt/lists/*
```

✅ This reduces image size by removing unnecessary package manager files.

## Combine Commands to Reduce Layers

Before:

```Dockerfile
RUN apt-get update
RUN apt-get install -y curl
```

After:

```Dockerfile
RUN apt-get update && apt-get install -y curl
```

✅ Fewer layers = more efficient image and faster caching.

## Use .dockerignore

This file works like `.gitignore`. It tells Docker what files not to copy into the image.

Example `.dockerignore`:

```bash
.git
node_modules
tests/
*.log
Dockerfile~
```

✅ Keeps the build context small and the image clean.

## Use Specific Image Tags

Avoid using latest, which can lead to unexpected changes.

Instead of:

```Dockerfile
FROM node:latest
```

Use:

```Dockerfile
FROM node:20.11.0
```

✅ This ensures consistent builds across teams and environments.
