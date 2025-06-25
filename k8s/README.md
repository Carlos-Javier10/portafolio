# Kubernetes Configuration

Este directorio contiene los archivos de configuración de Kubernetes para desplegar el portafolio.

## Estructura

```
k8s/
├── deployment.yaml      # Configuración del Deployment
├── service.yaml         # Service e Ingress
├── configmap.yaml       # ConfigMap y HPA
├── kustomization.yaml   # Kustomize configuration
└── README.md           # Este archivo
```

## Prerequisitos

- Cluster de Kubernetes funcionando
- kubectl configurado
- (Opcional) Kustomize instalado

## Despliegue

### Usando kubectl directamente:

```bash
# Aplicar todos los recursos
kubectl apply -f k8s/

# O aplicar uno por uno
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
