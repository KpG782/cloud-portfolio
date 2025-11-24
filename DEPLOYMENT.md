# Easypanel Deployment Configuration

This document outlines the deployment configuration for all services hosted on Easypanel VPS.

## Project: `certificate`

All services are deployed under the `certificate` project in Easypanel with the following shared characteristics:

### Common Configuration

- **Auto Deploy**: Disabled (manual deployment control)
- **Zero Downtime**: Enabled for all services
- **SSL**: Let's Encrypt (automated HTTPS)
- **Region**: Singapore
- **Replicas**: 1 per service

---

## Service Details

### 1. CertifiKit

**Service Name**: `certifikit`

#### Source

- **Repository**: `KpG782/certifikit`
- **Branch**: `main`
- **Path**: `/`

#### Build

- **Type**: Dockerfile
- **File**: `Dockerfile`

#### Environment Variables

```env
DATABASE_URL=postgresql://cert_admin:certificate123@66.181.46.58:5432/certificate_queue
N8N_WEBHOOK_URL=https://n8n.kenbuilds.tech/webhook/certicate-email-source
NEXT_PUBLIC_ADMIN_USERNAME=admin
NEXT_PUBLIC_ADMIN_PASSWORD=CertifiKit2024!
```

#### Domain

- **URL**: https://certificate-certifikit.kygozf.easypanel.host
- **Port**: 80 (internal HTTP)
- **Path**: `/`
- **Protocol**: HTTP (internal), HTTPS (external)

#### Features

- PostgreSQL database connection (port 5432)
- n8n webhook integration for certificate delivery
- Admin authentication system
- Zero-downtime deployment

---

### 2. ContainerQuest

**Service Name**: `container-quest`

#### Source

- **Repository**: `KpG782/container-quest`
- **Branch**: `main`
- **Path**: `/`

#### Build

- **Type**: Dockerfile
- **File**: `Dockerfile`

#### Environment Variables

```env
NODE_ENV=production
PORT=3000
HOSTNAME=0.0.0.0
```

#### Domain

- **URL**: https://certificate-container-quest.kygozf.easypanel.host
- **Port**: 3000 (internal)
- **Path**: `/`
- **Protocol**: HTTP (internal), HTTPS (external)

#### Features

- Production-optimized Next.js 14 build
- Interactive quiz application
- Zero-downtime deployment

---

### 3. kubectl.dev

**Service Name**: `kubectldev`

#### Source

- **Repository**: `KpG782/kubectl.dev`
- **Branch**: `main`
- **Path**: `/`

#### Build

- **Type**: Dockerfile
- **File**: `Dockerfile`

#### Environment Variables

None configured (uses defaults)

#### Domain

- **URL**: https://certificate-kubectldev.kygozf.easypanel.host
- **Port**: 3000 (internal)
- **Path**: `/`
- **Protocol**: HTTP (internal), HTTPS (external)

#### Features

- Terminal-themed K8s tutorial platform
- Next.js 16 with TypeScript
- WCAG AA accessibility compliance
- Zero-downtime deployment

---

### 4. SpringBoot REST API

**Service Name**: `springboot-restful-webservices`

#### Source

- **Repository**: `KpG782/springboot-restful-webservices`
- **Branch**: `main`
- **Path**: `/`

#### Build

- **Type**: Dockerfile
- **File**: `Dockerfile`

#### Environment Variables

None configured (uses application.properties)

#### Domain

- **URL**: https://springboot-app.kygozf.easypanel.host
- **Port**: 8080 (exposed and published)
- **Path**: `/`
- **Protocol**: HTTP (internal), HTTPS (external)

#### Ports

- **Published**: 8080
- **Target**: 8080
- **Protocol**: TCP

#### Features

- Java 21 with Spring Boot 3.5
- Spring Boot Actuator for health monitoring
- H2 in-memory database
- Multi-stage Docker build
- Zero-downtime deployment

---

## Infrastructure Summary

### Resource Allocation

- **Total Services**: 4
- **Total Replicas**: 4 (1 per service)
- **Total Exposed Ports**: 1 (SpringBoot on 8080)
- **SSL Certificates**: 4 (Let's Encrypt)

### Domain Structure

All domains follow the pattern:

```
<project>-<service>.kygozf.easypanel.host
```

Example:

- `certificate-certifikit.kygozf.easypanel.host`
- `springboot-app.kygozf.easypanel.host` (custom subdomain)

### Deployment Strategy

- **Zero Downtime**: All services use zero-downtime deployment
- **Manual Deploy**: Auto-deploy disabled for controlled releases
- **SSL/TLS**: Automatic Let's Encrypt certificates
- **Internal Protocol**: HTTP (Easypanel handles HTTPS termination)

### Service Ports

| Service        | Internal Port | Exposed Port | Public URL   |
| -------------- | ------------- | ------------ | ------------ |
| CertifiKit     | 80            | -            | :443 (HTTPS) |
| ContainerQuest | 3000          | -            | :443 (HTTPS) |
| kubectl.dev    | 3000          | -            | :443 (HTTPS) |
| SpringBoot API | 8080          | 8080         | :443 (HTTPS) |

### Database Connections

- **CertifiKit**: External PostgreSQL at `66.181.46.58:5432`
- **SpringBoot API**: H2 in-memory database

### Webhook Integrations

- **CertifiKit**: n8n webhook at `https://n8n.kenbuilds.tech/webhook/certicate-email-source`

---

## Best Practices Implemented

✅ **Zero-Downtime Deployments**: All services configured for seamless updates
✅ **Automated SSL**: Let's Encrypt certificates auto-renewed
✅ **Environment Separation**: Production environment variables
✅ **Port Management**: Proper internal/external port mapping
✅ **Security**: HTTPS-only external access
✅ **Monitoring**: SpringBoot Actuator endpoints available
✅ **Database Persistence**: External PostgreSQL for CertifiKit data
✅ **Workflow Automation**: n8n integration for certificate delivery

---

## Deployment Commands (Manual)

```bash
# Rebuild and deploy specific service
easypanel deploy certificate certifikit

# View service logs
easypanel logs certificate certifikit

# Restart service
easypanel restart certificate kubectldev

# Scale service (if needed)
easypanel scale certificate container-quest --replicas=2
```

---

## Monitoring URLs

- **CertifiKit**: https://certificate-certifikit.kygozf.easypanel.host
- **ContainerQuest**: https://certificate-container-quest.kygozf.easypanel.host
- **kubectl.dev**: https://certificate-kubectldev.kygozf.easypanel.host
- **SpringBoot API**: https://springboot-app.kygozf.easypanel.host
- **SpringBoot Health**: https://springboot-app.kygozf.easypanel.host/actuator/health

---

## Cost Optimization

- **Shared VPS**: All 4 containers run on single VPS
- **Resource Sharing**: Efficient CPU/memory utilization
- **Single Domain**: kygozf.easypanel.host subdomain (no domain costs)
- **Free SSL**: Let's Encrypt certificates
- **Estimated Monthly Cost**: ~$1.15 (shared VPS portion)

---

**Last Updated**: November 24, 2025
**Managed By**: Ken Patrick Garcia
**Course**: IV ACSAD - Cloud Computing
