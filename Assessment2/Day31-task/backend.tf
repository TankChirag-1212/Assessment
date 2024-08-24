terraform {
  backend "s3" {
    bucket         = "<s3-state-bucket-name>"
    key            = "terraform.tfstate"
    region         = "us-west-2"
    dynamodb_table = "<dynamoDB-table-name>"
  }
}