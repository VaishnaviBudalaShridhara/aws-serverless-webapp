output "website_url" {
  value = aws_s3_bucket.static_site.website_endpoint
}

output "api_endpoint" {
  value = aws_apigatewayv2_stage.dev.invoke_url
}
