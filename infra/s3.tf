# Create the s3 bucket with policies
module "template_solidjs" {
  source = "terraform-aws-modules/s3-bucket/aws"

  bucket = var.s3.vars.name
  acl    = "public-read"

  force_destroy = true

  versioning = {
    enabled = false
  }

  # Policies
  attach_policy = true
  policy        = data.aws_iam_policy_document.template_solidjs_policy.json

  website = {
    index_document = "index.html"
    error_document = "index.html"
  }

}

# Output to access website deployed
output "website_domain" {
  value = module.template_solidjs.s3_bucket_website_domain
}

output "BUCKET_NAME" {
  value = var.s3.vars.name
}

output "website_endpoint" {
  value = module.template_solidjs.s3_bucket_website_endpoint
}