# Kubernetes Deployment Guide for Portfolio

## Prerequisites

- Kubernetes cluster with NGINX Ingress Controller
- cert-manager for SSL certificates
- kubectl configured to access your cluster

## Project Structure

```
k8s/
├── namespace.yaml       # Namespace definition
├── deployment.yaml      # Application deployment
├── service.yaml         # Service and Ingress
├── configmap.yaml       # ConfigMap and Secrets
├── hpa.yaml            # Horizontal Pod Autoscaler
├── resource-quota.yaml  # Resource quotas and limits
├── network-policy.yaml  # Network security policies
├── pdb.yaml            # Pod Disruption Budget
├── kustomization.yaml  # Kustomize configuration
└── README.md           # This file
```

## Deployment Commands

### Deploy using Kustomize (Recommended)
```bash
# Apply all resources
kubectl apply -k .

# Verify deployment
kubectl get all -n portafolio

# Check ingress
kubectl get ingress -n portafolio
```

### Manual Deployment
```bash
# Create namespace first
kubectl apply -f namespace.yaml

# Apply configurations
kubectl apply -f configmap.yaml

# Deploy application
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml

# Apply scaling and policies
kubectl apply -f hpa.yaml
kubectl apply -f resource-quota.yaml
kubectl apply -f network-policy.yaml
kubectl apply -f pdb.yaml
```

### Monitoring Commands
```bash
# Check pod status
kubectl get pods -n portafolio

# Check logs
kubectl logs -f deployment/portafolio-app -n portafolio

# Check HPA status
kubectl get hpa -n portafolio

# Check resource usage
kubectl top pods -n portafolio
```

### Rollback Commands
```bash
# Check rollout history
kubectl rollout history deployment/portafolio-app -n portafolio

# Rollback to previous version
kubectl rollout undo deployment/portafolio-app -n portafolio

# Rollback to specific revision
kubectl rollout undo deployment/portafolio-app --to-revision=2 -n portafolio
```

### Cleanup
```bash
# Delete specific resources
kubectl delete -k .

# Or delete namespace (removes everything)
kubectl delete namespace portafolio
```

## Configuration Details

### Environment Variables
- **ConfigMap**: Contains non-sensitive configuration
- **Secret**: Contains EmailJS credentials (base64 encoded)

### Security Features
- NetworkPolicy: Restricts network access
- ResourceQuota: Limits resource consumption
- PodDisruptionBudget: Ensures high availability
- Security contexts and probes

### Scaling
- HPA: Auto-scales based on CPU/memory usage (2-6 replicas)
- Rolling updates with max 1 unavailable pod

### SSL/TLS
- Automatic SSL certificate generation via cert-manager
- Force HTTPS redirect via NGINX annotations
kubectl apply -f k8s/configmap.yaml
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```

### Usando Kustomize:

```bash
# Desde el directorio raíz del proyecto
kubectl apply -k k8s/
```

## Configuración

### Variables importantes a personalizar:

1. **deployment.yaml**:
   - `image`: Cambia `ghcr.io/carlos-javier10/portafolio:latest` por tu imagen real
   - `resources`: Ajusta según tus necesidades

2. **service.yaml**:
   - `host`: Cambia `tu-dominio.com` por tu dominio real
   - Configuración de TLS/SSL

3. **configmap.yaml**:
   - Variables de entorno específicas de tu aplicación

## Monitoreo

```bash
# Ver el estado de los pods
kubectl get pods -l app=portafolio

# Ver logs
kubectl logs -l app=portafolio -f

# Ver el servicio
kubectl get svc portafolio-service

# Ver el ingress
kubectl get ingress portafolio-ingress
```

## Escalado

```bash
# Escalar manualmente
kubectl scale deployment portafolio-app --replicas=5

# El HPA escalará automáticamente basado en CPU
```
