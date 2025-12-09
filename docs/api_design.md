# Smart To Do Minimal API Design

## Overview

This backend provides a REST endpoint that accepts a list of task descriptions and returns an AI prioritized and categorized list.  

All requests and responses use JSON over HTTPS.

Base URL example:

- `https://your-domain.com/api/v1`

---

## Endpoint: Prioritize Tasks

### POST `/api/v1/prioritize`

Call when the user clicks the Prioritize Tasks button in the frontend.

#### Request

- Method: POST  
- URL: `/api/v1/prioritize`  
- Headers:  
  - Content Type: application/json  
- Body:

```json
{
"tasks": [
    "Finish the monthly report for the boss",
    "Buy groceries for the week",
    "Call the plumber about the leaky faucet"
]
}

```

##### Request body schema

- `tasks` (required): array of non empty strings  
  - Minimum length: 1  
  - Example: "Finish the monthly report for the boss"

---

#### Successful Response

- Status: 200 OK  
- Body:

```json
[
  {
    "task": "Call the plumber about the leaky faucet",
    "priority": "High",
    "category": "Home"
  },
  {
    "task": "Finish the monthly report for the boss",
    "priority": "High",
    "category": "Work"
  },
  {
    "task": "Buy groceries for the week",
    "priority": "Medium",
    "category": "Home"
  }
]
```

##### Response item schema

Each array element contains:

- `task`: string with the original task  
- `priority`: string with one of "High", "Medium", "Low"  
- `category`: string describing the context such as "Work", "Home", "Personal"

---

## Error Handling

Errors come as JSON with an `error` object.

### 400 Bad Request

Returned for missing or invalid request body.

```json
{
    "error": {
        "code": "VALIDATION_ERROR",
        "message": "tasks must be a non empty array of strings"
    }
}

```

### 500 Internal Server Error

Returned for unexpected server failures or AI provider outage.

```json
{
    "error": {
        "code": "INTERNAL_SERVER_ERROR",
        "message": "An unexpected error occurred. Please try again later."
    }
}

```
