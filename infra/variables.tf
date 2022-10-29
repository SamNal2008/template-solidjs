variable "access_key" {
  type    = string
  default = "access_key"
}

variable "secret_key" {
  type    = string
  default = "secret_key"
}

variable "region" {
  type    = string
  default = "eu-west-1"
}

variable "s3" {
  type = map(object({
    name = string
    arn  = string
  }))
  description = "Configuration for your Website hosting S3"
  default = {
    "vars" = {
      arn  = "arn:aws:s3:::template-solidjs"
      name = "template-solidjs"
    }
  }
}