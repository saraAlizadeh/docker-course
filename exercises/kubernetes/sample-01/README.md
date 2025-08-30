# Commands

```bash
# Create/Update manifests
kubectl apply -f manifest-01.yml
kubectl create -f manifest-01.yml

# View resources
kubectl get pods
kubectl get po
kubectl describe pod <pod-name>

# Expose ports: kubectl port-forward service/<service-name> 8080:80
kubectl port-forward deployment/hello-deployment 8080:80

# Change context
kubectl config set-context --current --namespace=my-namespace

# Access from cluster inside
kubectl run testbox --rm -it --image=busybox -- sh
wget -qO- http://<service-name>.<namespace>.svc.cluster.local
```
