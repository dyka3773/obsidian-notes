---
tags:
  - tech
aliases:
---
Docker is an **open-source containerization platform** that allows developers to package applications and their dependencies into **lightweight, portable containers**.
Containers ensure that applications run consistently across different environments, from **development to production**.

**Key Features of Docker:**
- **Lightweight**: Uses fewer resources than virtual machines (VMs).
- **Portable**: Runs on any system with Docker installed.
- **Fast Deployment**: Containers start instantly.
- **Isolated Environments**: No conflicts between applications.
- **[[Scalability]]**: Easily scales applications across multiple servers.

# How it works
Docker uses **containers** to package applications with their dependencies, libraries, and configuration files.
These containers run on a **Docker Engine**.
## Key Components of Docker
| Component              | Description                                                       |
| ---------------------- | ----------------------------------------------------------------- |
| **Docker Engine**      | Core service that runs containers.                                |
| **Docker Image**       | A **read-only** template containing an OS, app, and dependencies. |
| **Docker Container**   | A **running instance** of an image (isolated environment).        |
| **[[Dockerfile]]**     | A script defining how to build a Docker image.                    |
| **Docker Hub**         | A registry to store and share Docker images.                      |
| **[[Docker Compose]]** | A tool for defining and managing multi-container applications.    |
# Docker vs Virtual Machines (VMs)
| Feature            | Docker (Containers)      | Virtual Machines (VMs)   |
| ------------------ | ------------------------ | ------------------------ |
| **Speed**          | Fast (Starts in seconds) | Slow (Boots a full OS)   |
| **Size**           | Small (MBs)              | Large (GBs)              |
| **Resource Usage** | Low (Shares OS kernel)   | High (Needs separate OS) |
| **Portability**    | High (Runs anywhere)     | Limited                  |
| **Isolation**      | Process-level            | Full OS isolation        |
> Docker is best for [[microservices]], cloud deployment, and CI/CD, while VMs are useful for full OS virtualization.
# Docker Workflow (Basic Commands)
## Step 1: Create a [[Dockerfile]]
A `Dockerfile` defines how to build an image.

Example for a **[[Python]] application**:
```dockerfile
# Use a base image
FROM python:3.9

# Set the working directory
WORKDIR /app

# Copy application files
COPY . .

# Install dependencies
RUN pip install -r requirements.txt

# Expose a port
EXPOSE 5000

# Run the application
CMD ["python", "app.py"]
```
## Step 2: Build a Docker Image
Run the following command in the directory containing `Dockerfile`:
```bash
docker build -t my-python-app .
```
## Step 3: Run a Container
```bash
docker run -p 5000:5000 my-python-app
```
> Explanation:
> - `-p 5000:5000` maps **container port** to **host port**.
> - `my-python-app` is the container name.
## List Running Containers
```bash
docker ps
```
## Step 4: Stop and Remove Containers
```bash
docker stop <container_id>
docker rm <container_id>
```

# Docker Compose (Managing Multi-Container Apps)
Docker Compose allows you to define multiple containers in a **[[YAML]] file**.

Example: **Run a [[Python]] app with PostgreSQL**:
```yaml
version: '3'
services:
  web:
    build: .
    ports:
      - "5000:5000"
    depends_on:
      - db
  db:
    image: postgres
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
```
### Run the app
```bash
docker-compose up
```
> This starts both `web` and `db` containers together.
# Docker Networking
Docker provides different **networking options** to allow communication between containers.

| Network Mode         | Description                                                    |
| -------------------- | -------------------------------------------------------------- |
| **Bridge** (default) | Containers can communicate with each other using internal IPs. |
| **Host**             | Containers share the host network stack (better performance).  |
| **None**             | No networking (isolated container).                            |
| **Overlay**          | Used in [[Docker Swarm]] for multi-host networking.            |
# Docker Volumes (Persistent Storage)
Containers **lose data** when stopped.
**Docker Volumes** help store persistent data.

## Create a Volume & Mount It
```bash
docker volume create mydata
docker run -v mydata:/data my-container
```
> **This ensures data is stored even if the container is deleted.**

# Pros & Cons of Docker
## Advantages
- Lightweight & Fast: Starts in milliseconds.
- Cross-Platform: Runs anywhere with Docker.
- Reproducible Builds: Ensures consistency across environments.
- Simplifies Deployment: Reduces dependency issues.
- Better Resource Utilization: Shares OS kernel.
## Disadvantages
- Complex Networking: Requires extra setup for multi-container communication.
- Persistent Storage Issues: Need volumes for data persistence.
- Security Concerns: Containers share the host OS kernel, increasing risk.
# Where is Docker Used?
- **[[Microservices]]**: Run independent services in isolated containers.
- **[[DevOps]] & [[CI/CD]]**: Automate deployments using Docker pipelines.
- **Cloud Deployment**: AWS, Azure, GCP support Docker-based containers.
- **Data Science**: Package [[Jupyter]] notebooks and ML models in containers.
- **Game Development**: Build [[Scalability|scalable]] game servers with Docker.
