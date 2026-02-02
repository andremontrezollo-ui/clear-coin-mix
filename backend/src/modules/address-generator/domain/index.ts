/**
 * Address Generator - Domain Layer
 * 
 * Sandbox of Identities: unique, non-reusable identifiers per operation.
 */

// Value Objects
export interface AddressToken {
  readonly id: string;
  readonly namespace: Namespace;
  readonly createdAt: Date;
  readonly expiresAt: Date;
  readonly isExpired: boolean;
}

export interface Namespace {
  readonly value: string;
  readonly purpose: 'deposit' | 'withdrawal' | 'internal';
}

// Expiration Policies
export interface ExpirationPolicy {
  readonly type: 'time-based' | 'usage-based' | 'hybrid';
  readonly ttlSeconds?: number;
  readonly maxUsages?: number;
}

export const DEFAULT_EXPIRATION_POLICIES: Record<string, ExpirationPolicy> = {
  deposit: { type: 'hybrid', ttlSeconds: 3600, maxUsages: 1 },
  withdrawal: { type: 'usage-based', maxUsages: 1 },
  internal: { type: 'time-based', ttlSeconds: 86400 },
};

// Domain Events
export interface AddressTokenEmittedEvent {
  readonly type: 'ADDRESS_TOKEN_EMITTED';
  readonly tokenId: string;
  readonly namespace: string;
  readonly expiresAt: Date;
  readonly timestamp: Date;
}

export interface AddressTokenResolvedEvent {
  readonly type: 'ADDRESS_TOKEN_RESOLVED';
  readonly tokenId: string;
  readonly timestamp: Date;
}

export interface AddressTokenExpiredEvent {
  readonly type: 'ADDRESS_TOKEN_EXPIRED';
  readonly tokenId: string;
  readonly reason: 'ttl' | 'usage' | 'manual';
  readonly timestamp: Date;
}

export type AddressEvent = 
  | AddressTokenEmittedEvent 
  | AddressTokenResolvedEvent 
  | AddressTokenExpiredEvent;

// Factory
export function createAddressToken(
  id: string,
  namespace: Namespace,
  policy: ExpirationPolicy
): AddressToken {
  const now = new Date();
  const expiresAt = policy.ttlSeconds 
    ? new Date(now.getTime() + policy.ttlSeconds * 1000)
    : new Date(now.getTime() + 86400 * 1000); // Default 24h

  return {
    id,
    namespace,
    createdAt: now,
    expiresAt,
    isExpired: false,
  };
}
