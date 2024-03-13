export function getCurrentTimestamp(): string {
  const date = new Date();
  return date.toISOString().replace('T', ' ').replace('Z', '');
}

