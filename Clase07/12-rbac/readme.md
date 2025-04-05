curl -k https://kubernetes.default.svc/api/v1/namespaces/default/pods \
    -H "Authorization: Bearer $(cat /var/run/secrets/kubernetes.io/serviceaccount/token)"

curl -k -X DELETE https://kubernetes.default.svc/api/v1/namespaces/default/pods/deploy-backend-7967b454c5-5sftf \
    -H "Authorization: Bearer $(cat /var/run/secrets/kubernetes.io/serviceaccount/token)"

curl -k https://kubernetes.default.svc/api/v1/namespaces/default/configmaps \
    -H "Authorization: Bearer $(cat /var/run/secrets/kubernetes.io/serviceaccount/token)"    

apk add --no-cache wget
wget https://storage.googleapis.com/kubernetes-release/release/v1.21.0/bin/linux/amd64/kubectl
chmod +x kubectl
mv kubectl /usr/local/bin/

kubectl get po