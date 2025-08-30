# Commands

```bash
# Build and push app
docker build -t YOUR_DOCKER_USER/node-mariadb-demo:latest .
docker push YOUR_DOCKER_USER/node-mariadb-demo:latest

# Create resources
kubectl apply -f nodeapp.yaml
kubectl get pods

minikube service nodeapp-service -n YOUR_NAMESPACE
```