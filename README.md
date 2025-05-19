# Scalable Serverless Web Application (AWS + Terraform)

A serverless web app using AWS services deployed via Terraform:

- **S3** for static frontend
- **API Gateway** + **Lambda** for backend
- **DynamoDB** for task storage
- **Terraform** for infrastructure as code

## Features
- Fully serverless, scalable
- Easy to deploy with `terraform apply`
- Infrastructure + code versioned

## Project Structure
```
aws-serverless-webapp/
├── main.tf
├── variables.tf
├── outputs.tf
├── lambda/
│   ├── index.js
├── architecture-diagram.png
├── README.md
```

##  How to Deploy
```bash
terraform init
terraform apply
```

##  Architecture Diagram
![ChatGPT Image May 19, 2025, 10_45_50 AM](https://github.com/user-attachments/assets/c1b22ff6-c556-4d89-9561-8f8c01f2d275)

---
