# Commands

```bash
# Create/Update manifests
kubectl apply -f mariadb-bundle.yaml
kubectl get all

# Test
kubectl run testbox --rm -it --image=mariadb:10.6 -- bash
mysql -h mariadb-service -uappuser -psupersecret123 appdb

```
