type RateLimitRecord = {
  count: number;
  lastReset: number;
};

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minuto
const MAX_REQUESTS = 20;

const ipMap = new Map<string, RateLimitRecord>();

export function rateLimit(ip: string): boolean {
  const now = Date.now();

  const record = ipMap.get(ip);

  if (!record) {
    ipMap.set(ip, { count: 1, lastReset: now });
    return true;
  }

  if (now - record.lastReset > RATE_LIMIT_WINDOW) {
    ipMap.set(ip, { count: 1, lastReset: now });
    return true;
  }

  if (record.count >= MAX_REQUESTS) {
    return false;
  }

  record.count++;
  return true;
}
