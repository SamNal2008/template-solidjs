# Policies of S3 access
data "aws_iam_policy_document" "template_solidjs_policy" {
  statement {
    sid       = "1"
    effect    = "Allow"
    resources = ["${var.s3.vars.arn}/*"]
    actions   = ["s3:GetObject"]

    principals {
      type        = "*"
      identifiers = ["*"]
    }
  }
}