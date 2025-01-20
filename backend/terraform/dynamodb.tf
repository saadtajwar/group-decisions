resource "aws_dynamodb_table" "sessions-table" {
  name          = "Sessions"
  read_capacity = 20
  write_capacity = 20
  hash_key = "SessionId"

  attribute {
    name = "SessionId"
    type = "S"
  }
}

resource "aws_dynamodb_table" "users-table" {
  name = "Users"

  read_capacity = 20
  write_capacity = 20
  hash_key = "UserId"

    attribute {
    name = "UserId"
    type = "S"
  }


}

resource "aws_dynamodb_table" "options-table" {
  name = "Options"
  read_capacity = 20
  write_capacity = 20
  hash_key = "OptionID"

    attribute {
    name = "OptionID"
    type = "S"
  }


}

/*
resource "aws_dynamodb_table" "basic-dynamodb-table" {
  name           = "GameScores"
  billing_mode   = "PROVISIONED"
  read_capacity  = 20
  write_capacity = 20
  hash_key       = "UserId"
  range_key      = "GameTitle"

  attribute {
    name = "UserId"
    type = "S"
  }

  attribute {
    name = "GameTitle"
    type = "S"
  }

  attribute {
    name = "TopScore"
    type = "N"
  }

  ttl {
    attribute_name = "TimeToExist"
    enabled        = true
  }

  global_secondary_index {
    name               = "GameTitleIndex"
    hash_key           = "GameTitle"
    range_key          = "TopScore"
    write_capacity     = 10
    read_capacity      = 10
    projection_type    = "INCLUDE"
    non_key_attributes = ["UserId"]
  }

  tags = {
    Name        = "dynamodb-table-1"
    Environment = "production"
  }
}
*/