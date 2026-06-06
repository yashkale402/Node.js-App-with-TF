# Infrastructure Provisioning and CI/CD Automation

## Overview

This project demonstrates an end-to-end DevOps workflow using AWS, Terraform, Jenkins, Docker, Nginx, and Node.js.

The infrastructure is provisioned using Terraform, the application is containerized using Docker, and Jenkins automates the build and deployment process. Nginx is configured as a reverse proxy to route incoming traffic to the Node.js application.

---

## Architecture

```text
GitHub
   │
   ▼
 Jenkins
   │
   ▼
 Docker Build
   │
   ▼
 AWS EC2 (Provisioned by Terraform)
   │
   ▼
 Docker Container (Node.js)
   │
   ▼
 Nginx Reverse Proxy
   │
   ▼
 Application Access
```

---

## Technologies Used

* AWS EC2
* Terraform
* Jenkins
* Docker
* Node.js
* Express.js
* Nginx
* Git
* GitHub
* Linux (Ubuntu)

---

## Project Structure

```text
.
├── Jenkinsfile
├── node-app
│   ├── app.js
│   ├── package.json
│   ├── package-lock.json
│   └── Dockerfile
│
└── terraform
    ├── provider.tf
    ├── main.tf
    ├── variables.tf
    └── outputs.tf
```

---

## Features

* Infrastructure provisioning using Terraform
* Automated CI/CD pipeline using Jenkins
* Dockerized Node.js application
* Automated application deployment
* Nginx reverse proxy configuration
* Infrastructure as Code (IaC)
* GitHub integration for source control
* Linux server administration

---

## Terraform Resources

The Terraform configuration provisions:

* AWS EC2 Instance
* Security Group
* Networking Configuration
* Infrastructure as Code (IaC) Setup

---

## Prerequisites

Before running this project, ensure the following are installed:

* Git
* Docker
* Terraform
* AWS CLI
* Jenkins
* Node.js and npm

AWS credentials must be configured:

```bash
aws configure
```

Verify configuration:

```bash
aws sts get-caller-identity
```

---

## Running the Application Locally

Navigate to the application directory:

```bash
cd node-app
```

Install dependencies:

```bash
npm install
```

Start the application:

```bash
npm start
```

Or:

```bash
node app.js
```

Open:

```text
http://localhost:3000
```

Expected Output:

```text
DevOps Pipeline Project Working!
```

---

## Docker Setup

Build Docker image:

```bash
cd node-app

docker build -t node-app .
```

Run container:

```bash
docker run -d --name node-container -p 3000:3000 node-app
```

Verify:

```text
http://localhost:3000
```

---

## Terraform Deployment

Navigate to Terraform directory:

```bash
cd terraform
```

Initialize Terraform:

```bash
terraform init
```

Validate configuration:

```bash
terraform validate
```

Generate execution plan:

```bash
terraform plan
```

Provision infrastructure:

```bash
terraform apply
```

Destroy infrastructure:

```bash
terraform destroy
```

---

## Jenkins Pipeline

The Jenkins pipeline performs the following actions:

1. Pulls source code from GitHub.
2. Builds the Docker image.
3. Removes existing containers.
4. Deploys a new container.
5. Makes the application available on the target server.

Pipeline stages:

* Clone Repository
* Build Docker Image
* Deploy Container

---

## Nginx Configuration

Nginx acts as a reverse proxy and forwards incoming traffic from port 80 to the Node.js application running on port 3000.

Example:

```nginx
server {

    listen 80;

    location / {

        proxy_pass http://localhost:3000;

        proxy_set_header Host $host;

        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

Restart Nginx:

```bash
sudo systemctl restart nginx
```

---

## CI/CD Workflow

```text
Developer Pushes Code
          │
          ▼
      GitHub
          │
          ▼
      Jenkins
          │
          ▼
 Docker Image Build
          │
          ▼
 Docker Container Deployment
          │
          ▼
        EC2
          │
          ▼
       Nginx
          │
          ▼
     End Users
```

---

## Security Best Practices

* Restrict SSH access to trusted IP addresses.
* Store Terraform state remotely using AWS S3.
* Use IAM roles instead of long-term AWS credentials.
* Avoid hardcoding sensitive information.
* Use environment variables for secrets and configuration.

---

## Future Improvements

* Remote Terraform State using S3
* DynamoDB State Locking
* Docker Hub Integration
* GitHub Webhooks
* SSL with Let's Encrypt
* Monitoring with Prometheus and Grafana
* Kubernetes Deployment

---

```
```
