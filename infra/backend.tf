terraform {
  backend "s3" {
    bucket = "sipios-terraform-states"
    key    = "votre-nom/terraform.tfstate"
    region = "eu-west-1"
  }
}