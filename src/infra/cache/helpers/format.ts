export function formatPayload (payload: any): string {
  return JSON.stringify(payload)
}

export function formatCache <T> (cache: string): T {
  return JSON.parse(cache) as T
}
