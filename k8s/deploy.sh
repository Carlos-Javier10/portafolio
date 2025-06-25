#!/bin/bash

# Portfolio Kubernetes Deployment Script
# This script automates the deployment of the portfolio application to Kubernetes

set -e

NAMESPACE="portafolio"
DEPLOYMENT_NAME="portafolio-app"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if kubectl is available
check_kubectl() {
    if ! command -v kubectl &> /dev/null; then
        print_error "kubectl is not installed or not in PATH"
        exit 1
    fi
    print_success "kubectl is available"
}

# Check if cluster is accessible
check_cluster() {
    if ! kubectl cluster-info &> /dev/null; then
        print_error "Cannot connect to Kubernetes cluster"
        exit 1
    fi
    print_success "Connected to Kubernetes cluster"
}

# Deploy function
deploy() {
    print_status "Starting deployment of Portfolio application..."
    
    # Apply Kustomize configuration
    print_status "Applying Kubernetes manifests..."
    kubectl apply -k .
    
    # Wait for deployment to be ready
    print_status "Waiting for deployment to be ready..."
    kubectl wait --for=condition=available --timeout=300s deployment/${DEPLOYMENT_NAME} -n ${NAMESPACE}
    
    print_success "Deployment completed successfully!"
}

# Status function
status() {
    print_status "Checking application status..."
    
    echo ""
    print_status "Namespace resources:"
    kubectl get all -n ${NAMESPACE}
    
    echo ""
    print_status "Ingress status:"
    kubectl get ingress -n ${NAMESPACE}
    
    echo ""
    print_status "HPA status:"
    kubectl get hpa -n ${NAMESPACE}
}

# Logs function
logs() {
    print_status "Fetching application logs..."
    kubectl logs -f deployment/${DEPLOYMENT_NAME} -n ${NAMESPACE}
}

# Rollback function
rollback() {
    print_warning "Rolling back to previous version..."
    kubectl rollout undo deployment/${DEPLOYMENT_NAME} -n ${NAMESPACE}
    kubectl wait --for=condition=available --timeout=300s deployment/${DEPLOYMENT_NAME} -n ${NAMESPACE}
    print_success "Rollback completed!"
}

# Cleanup function
cleanup() {
    print_warning "This will delete all resources. Are you sure? (y/N)"
    read -r response
    if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
        print_status "Deleting all resources..."
        kubectl delete -k .
        print_success "Cleanup completed!"
    else
        print_status "Cleanup cancelled."
    fi
}

# Help function
show_help() {
    echo "Portfolio Kubernetes Deployment Script"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  deploy    Deploy the application"
    echo "  status    Check application status"
    echo "  logs      Show application logs"
    echo "  rollback  Rollback to previous version"
    echo "  cleanup   Delete all resources"
    echo "  help      Show this help message"
    echo ""
}

# Main script logic
main() {
    case "$1" in
        deploy)
            check_kubectl
            check_cluster
            deploy
            status
            ;;
        status)
            check_kubectl
            check_cluster
            status
            ;;
        logs)
            check_kubectl
            check_cluster
            logs
            ;;
        rollback)
            check_kubectl
            check_cluster
            rollback
            ;;
        cleanup)
            check_kubectl
            check_cluster
            cleanup
            ;;
        help|--help|-h)
            show_help
            ;;
        *)
            if [ -z "$1" ]; then
                show_help
            else
                print_error "Unknown command: $1"
                show_help
                exit 1
            fi
            ;;
    esac
}

# Run main function with all arguments
main "$@"
