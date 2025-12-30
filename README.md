# Better-Auth Expo Origin Issue Reproduction

This repository demonstrates the "Missing or null Origin" error when using better-auth with Expo and hono backend.

## Problem

When an Expo app sends requests to a better-auth backend, the `@better-auth/expo` plugin attempts to convert the `expo-origin` header to the standard `origin` header. However, it sets the header on a read-only Headers object, causing the header to not be set successfully. This results in the error:

```
Missing or null Origin
```

## Project Structure

- `app/` - Expo React Native app
- `hono-api/` - Hono backend with better-auth

## Steps to Reproduce

### 1. Install dependencies

```bash
# Install app dependencies
cd app
pnpm install

# Install API dependencies
cd ../hono-api
pnpm install
```

### 2. Start the Hono API server

```bash
cd hono-api
pnpm dev
```

The server will run at `http://localhost:3000`.

### 3. Start the Expo app

```bash
cd app
pnpm android
# or
pnpm ios
```

### 4. Reproduce the error

Click the "login" (Test Login) button on the home screen.

You will see an alert with the error: **"Missing or null Origin"**

## Fix

Uncomment `expoOriginFix()` in `hono-api/src/auth.ts`:

```typescript
plugins: [
    expoOriginFix(),  // Uncomment this line
    expo()
]
```

This plugin copies the `expo-origin` header to `origin` before better-auth processes the request.
