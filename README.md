# Node.js App with Terraform

Overview
-	This repository contains a simple Node.js Express application, a Dockerfile to containerize the app, a Jenkins pipeline (Jenkinsfile) that builds and runs the Docker image, and Terraform configuration to provision an AWS EC2 instance and security group used for deployment.

Repository structure
- Jenkinsfile - pipeline that clones repo, builds Docker image, and runs container
- node-app/
	- app.js - simple Express app listening on port 3000
	- package.json
	- Dockerfile - Dockerfile for building the Node app image
- terraform/
	- provider.tf - AWS provider configuration
	- main.tf - resources (security group, EC2 instance)
	- terraform.tfstate, terraform.tfstate.backup (note: state files should not be committed to git)

Prerequisites
- Git
- Docker (for building and running container images)
- Node.js and npm (for local development/testing)
- Terraform v1.x
- An AWS account and credentials configured in your environment (e.g., via `AWS_ACCESS_KEY_ID`/`AWS_SECRET_ACCESS_KEY` or `aws configure`)
- Jenkins (if you want to run the included Jenkins pipeline)

Quick local run (Node)
1. cd node-app
2. npm install
3. npm start (or `node app.js`)
4. Browse http://localhost:3000 — you should see "DevOps Pipeline Project Working!"

Build & run with Docker (local)
1. From repo root build image (context targets node-app folder):

```powershell
cd node-app
docker build -t node-app .
docker run -d --name node-container -p 3000:3000 node-app
```

2. Verify app at http://localhost:3000

Notes about Jenkinsfile
- The Jenkinsfile in this repo runs `docker build -t node-app .` from the workspace root. In this repository the `Dockerfile` lives in `node-app/` — either move the Dockerfile to the repo root or change the `docker build` step to use `node-app` as the build context (`docker build -t node-app node-app`).

Terraform usage
1. Review `terraform/main.tf` and update variables before applying. The config contains hard-coded values you should change:
	- `ami` is set to a specific AMI ID — replace with a region-appropriate AMI for your account.
	- `key_name` is `Yashh` — change to a keypair existing in your AWS account.
	- Security group ingress CIDR blocks include a specific IP and open ports 80, 8080, 3000 — adjust as needed.

2. Recommended commands:

```bash
cd terraform
terraform init
terraform plan
terraform apply
```

Security & best practices
- Remove `terraform.tfstate` and `terraform.tfstate.backup` from the repository and add `terraform/terraform.tfstate` to `.gitignore` — state files contain sensitive info and should be stored securely (remote state, S3, etc.).
- Do not hard-code AMIs, keys, or fixed IPs in production-level Terraform configurations. Use variables or a proper variable file.

CI/CD workflow (how this repo is intended to work)
1. Jenkins checks out the repo.
2. Jenkins builds Docker image for the Node app.
3. Jenkins deploys the container on the Jenkins agent/docker host (removes any previous container and starts a new one exposing port 3000).
4. Terraform provisions infrastructure (managed separately) — your Jenkins agent or other deployment mechanism can target the provisioned EC2 instance.

Pushing changes to GitHub (example commands)
```powershell
git add README.md
git commit -m "Add README.md"
git push -u origin main
```

Known issues & suggestions
- The repository currently contains Terraform state files; remove them and use remote state.
- Jenkinsfile build context mismatch with `node-app/Dockerfile` (see Notes above).

Contact / next steps
- If you want, I can:
	- Move the Dockerfile to the repo root or update the Jenkinsfile to build using `node-app` context.
	- Remove `terraform.tfstate` from the repo and add `.gitignore` entries.
	- Attempt to commit and push this README to the remote for you (requires repository remote and credentials).

--
Generated: concise README for repository setup, local dev, Terraform, Docker, and Jenkins pipeline.
