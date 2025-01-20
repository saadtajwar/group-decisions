resource "aws_apigatewayv2_api" "api" {
  name          = "simple-api"
  protocol_type = "HTTP"
}

resource "aws_lambda_function" "function" {
  function_name = "simple-lambda"
  handler       = "dist/index.handler"
  runtime       = "nodejs20.x"
  role          = aws_iam_role.lambda_exec.arn

  filename         = "${path.module}/../cmd/lambda-function/index.zip"
  source_code_hash = filebase64sha256("${path.module}/../cmd/lambda-function/index.zip")

  environment {
    variables = {
      // Add environment variables if needed
    }
  }
}

resource "aws_iam_role" "lambda_exec" {
  name = "lambda_exec_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Principal = {
        Service = "lambda.amazonaws.com"
      }
    }]
  })
}

resource "aws_iam_role_policy_attachment" "lambda_basic_execution" {
  role       = aws_iam_role.lambda_exec.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

resource "aws_apigatewayv2_integration" "lambda" {
  api_id           = aws_apigatewayv2_api.api.id
  integration_type = "AWS_PROXY"
  integration_uri  = aws_lambda_function.function.invoke_arn
}

resource "aws_apigatewayv2_route" "default" {
  api_id    = aws_apigatewayv2_api.api.id
  route_key = "$default"
  target    = "integrations/${aws_apigatewayv2_integration.lambda.id}"
}

resource "aws_apigatewayv2_stage" "default" {
  api_id      = aws_apigatewayv2_api.api.id
  name        = "default"
  auto_deploy = true
}

resource "aws_lambda_permission" "apigw" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.function.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.api.execution_arn}/*"
}

resource "aws_cloudwatch_log_group" "lambda" {
  name              = "/aws/lambda/${aws_lambda_function.function.function_name}"
  retention_in_days = 14
}

resource "aws_apigatewayv2_route" "get_example" {
  api_id    = aws_apigatewayv2_api.api.id
  route_key = "GET /example/path1"
  target    = "integrations/${aws_apigatewayv2_integration.lambda.id}"
}

resource "aws_apigatewayv2_route" "post_example" {
  api_id    = aws_apigatewayv2_api.api.id
  route_key = "POST /example/path2"
  target    = "integrations/${aws_apigatewayv2_integration.lambda.id}"
}

resource "aws_apigatewayv2_route" "delete_example" {
  api_id    = aws_apigatewayv2_api.api.id
  route_key = "DELETE /example/path3"
  target    = "integrations/${aws_apigatewayv2_integration.lambda.id}"
}

resource "aws_iam_policy" "lambda_dynamodb_policy" {
  name        = "LambdaDynamoDBFullAccess"
  description = "Policy that grants full access to DynamoDB tables used by Lambda"
  policy      = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect   = "Allow"
        Action   = [
          "dynamodb:*"
        ]
        Resource = [
          aws_dynamodb_table.sessions-table.arn,
          aws_dynamodb_table.users-table.arn,
          aws_dynamodb_table.options-table.arn
        ]
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "lambda_attach_dynamodb_policy" {
  role       = aws_iam_role.lambda_exec.name
  policy_arn = aws_iam_policy.lambda_dynamodb_policy.arn
}
