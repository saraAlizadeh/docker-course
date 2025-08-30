# Commands

```bash
# Create/Update manifests
kubectl apply -f manifest-02.yml

# View resources
kubectl get configmap
kubectl get cm
kubectl cm pod <cm-name>

kubectl port-forward deployment/hello-deployment 8080:80

# Test
curl http://localhost:8080
```
