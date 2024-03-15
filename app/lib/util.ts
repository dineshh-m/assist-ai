export function getCurrentTimestamp(): string {
  const date = new Date();
  return date.toISOString().replace('T', ' ').replace('Z', '');
}

export function getAuthSecretKey(): string {
  if (process.env.AUTH_SECRET) {
    return process.env.AUTH_SECRET;
  }
  return "";
}