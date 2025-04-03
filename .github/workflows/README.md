# GitHub Actions

## Required Secrets
- OPENSHIFT_NAMESPACE
- OPENSHIFT_TOKEN
- OPENSHIFT_URL

## Fetch/create OPENSHIFT_TOKEN

### Check if Service account exists
 ```
 oc get sa github-action-sa
 ```

### Create service account (if not already there)
```
oc create serviceaccount -n <tools-ns> github-action-sa
oc policy add-role-to-user edit -z github-action-sa -n <tools-ns>
```

### Create a long-lived token for this sa
```
oc apply -f sa_token.yaml
```

### Fetch the long-lived token for the sa
```
oc get secret github-action-sa-token -n <tools-ns> -o jsonpath='{.data.token}' | base64 -d
```

###  Test token in https://jwt.io to confirm no expiry