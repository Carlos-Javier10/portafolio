# Portfolio Kubernetes Deployment Script for Windows PowerShell
# This script automates the deployment of the portfolio application to Kubernetes

param(
    [Parameter(Position=0)]
    [ValidateSet("deploy", "status", "logs", "rollback", "cleanup", "help")]
    [string]$Command = "help"
)

$NAMESPACE = "portafolio"
$DEPLOYMENT_NAME = "portafolio-app"

# Function to print colored output
function Write-Status {
    param([string]$Message)
    Write-Host "[INFO] $Message" -ForegroundColor Blue
}

function Write-Success {
    param([string]$Message)
    Write-Host "[SUCCESS] $Message" -ForegroundColor Green
}

function Write-Warning {
    param([string]$Message)
    Write-Host "[WARNING] $Message" -ForegroundColor Yellow
}

function Write-Error {
    param([string]$Message)
    Write-Host "[ERROR] $Message" -ForegroundColor Red
}

# Check if kubectl is available
function Test-Kubectl {
    try {
        kubectl version --client --short | Out-Null
        Write-Success "kubectl is available"
        return $true
    } catch {
        Write-Error "kubectl is not installed or not in PATH"
        return $false
    }
}

# Check if cluster is accessible
function Test-Cluster {
    try {
        kubectl cluster-info | Out-Null
        Write-Success "Connected to Kubernetes cluster"
        return $true
    } catch {
        Write-Error "Cannot connect to Kubernetes cluster"
        return $false
    }
}

# Deploy function
function Start-Deploy {
    Write-Status "Starting deployment of Portfolio application..."
    
    # Apply Kustomize configuration
    Write-Status "Applying Kubernetes manifests..."
    kubectl apply -k .
    
    if ($LASTEXITCODE -ne 0) {
        Write-Error "Failed to apply manifests"
        exit 1
    }
    
    # Wait for deployment to be ready
    Write-Status "Waiting for deployment to be ready..."
    kubectl wait --for=condition=available --timeout=300s deployment/$DEPLOYMENT_NAME -n $NAMESPACE
    
    if ($LASTEXITCODE -eq 0) {
        Write-Success "Deployment completed successfully!"
    } else {
        Write-Error "Deployment failed or timed out"
        exit 1
    }
}

# Status function
function Get-Status {
    Write-Status "Checking application status..."
    
    Write-Host ""
    Write-Status "Namespace resources:"
    kubectl get all -n $NAMESPACE
    
    Write-Host ""
    Write-Status "Ingress status:"
    kubectl get ingress -n $NAMESPACE
    
    Write-Host ""
    Write-Status "HPA status:"
    kubectl get hpa -n $NAMESPACE
}

# Logs function
function Get-Logs {
    Write-Status "Fetching application logs..."
    kubectl logs -f deployment/$DEPLOYMENT_NAME -n $NAMESPACE
}

# Rollback function
function Start-Rollback {
    Write-Warning "Rolling back to previous version..."
    kubectl rollout undo deployment/$DEPLOYMENT_NAME -n $NAMESPACE
    
    if ($LASTEXITCODE -eq 0) {
        kubectl wait --for=condition=available --timeout=300s deployment/$DEPLOYMENT_NAME -n $NAMESPACE
        Write-Success "Rollback completed!"
    } else {
        Write-Error "Rollback failed"
        exit 1
    }
}

# Cleanup function
function Start-Cleanup {
    Write-Warning "This will delete all resources. Are you sure? (y/N)"
    $response = Read-Host
    
    if ($response -match "^[yY]([eE][sS])?$") {
        Write-Status "Deleting all resources..."
        kubectl delete -k .
        
        if ($LASTEXITCODE -eq 0) {
            Write-Success "Cleanup completed!"
        } else {
            Write-Error "Cleanup failed"
        }
    } else {
        Write-Status "Cleanup cancelled."
    }
}

# Help function
function Show-Help {
    Write-Host "Portfolio Kubernetes Deployment Script" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Usage: .\deploy.ps1 [COMMAND]" -ForegroundColor White
    Write-Host ""
    Write-Host "Commands:" -ForegroundColor White
    Write-Host "  deploy    Deploy the application" -ForegroundColor Gray
    Write-Host "  status    Check application status" -ForegroundColor Gray
    Write-Host "  logs      Show application logs" -ForegroundColor Gray
    Write-Host "  rollback  Rollback to previous version" -ForegroundColor Gray
    Write-Host "  cleanup   Delete all resources" -ForegroundColor Gray
    Write-Host "  help      Show this help message" -ForegroundColor Gray
    Write-Host ""
}

# Main script logic
function Main {
    switch ($Command) {
        "deploy" {
            if (-not (Test-Kubectl)) { exit 1 }
            if (-not (Test-Cluster)) { exit 1 }
            Start-Deploy
            Get-Status
        }
        "status" {
            if (-not (Test-Kubectl)) { exit 1 }
            if (-not (Test-Cluster)) { exit 1 }
            Get-Status
        }
        "logs" {
            if (-not (Test-Kubectl)) { exit 1 }
            if (-not (Test-Cluster)) { exit 1 }
            Get-Logs
        }
        "rollback" {
            if (-not (Test-Kubectl)) { exit 1 }
            if (-not (Test-Cluster)) { exit 1 }
            Start-Rollback
        }
        "cleanup" {
            if (-not (Test-Kubectl)) { exit 1 }
            if (-not (Test-Cluster)) { exit 1 }
            Start-Cleanup
        }
        "help" {
            Show-Help
        }
        default {
            Show-Help
        }
    }
}

# Run main function
Main
