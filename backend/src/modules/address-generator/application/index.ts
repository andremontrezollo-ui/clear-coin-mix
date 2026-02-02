/**
 * Address Generator - Application Layer
 * 
 * Use cases: emit token, resolve token, expire token.
 */

import type { 
  AddressToken, 
  Namespace, 
  ExpirationPolicy, 
  AddressEvent,
  AddressTokenEmittedEvent,
  AddressTokenResolvedEvent,
  AddressTokenExpiredEvent
} from '../domain';
import { createAddressToken, DEFAULT_EXPIRATION_POLICIES } from '../domain';

// Ports
export interface TokenRepository {
  save(token: AddressToken): Promise<void>;
  findById(id: string): Promise<AddressToken | null>;
  markExpired(id: string, reason: 'ttl' | 'usage' | 'manual'): Promise<void>;
  findExpired(): Promise<AddressToken[]>;
}

export interface IdGenerator {
  generate(): string;
}

export interface EventPublisher {
  publish(event: AddressEvent): Promise<void>;
}

// Use Cases
export class EmitTokenUseCase {
  constructor(
    private readonly repository: TokenRepository,
    private readonly idGenerator: IdGenerator,
    private readonly publisher: EventPublisher
  ) {}

  async execute(
    namespacePurpose: 'deposit' | 'withdrawal' | 'internal',
    customPolicy?: ExpirationPolicy
  ): Promise<AddressToken> {
    const namespace: Namespace = {
      value: this.idGenerator.generate(),
      purpose: namespacePurpose,
    };

    const policy = customPolicy ?? DEFAULT_EXPIRATION_POLICIES[namespacePurpose];
    const token = createAddressToken(this.idGenerator.generate(), namespace, policy);

    await this.repository.save(token);

    const event: AddressTokenEmittedEvent = {
      type: 'ADDRESS_TOKEN_EMITTED',
      tokenId: token.id,
      namespace: namespace.value,
      expiresAt: token.expiresAt,
      timestamp: new Date(),
    };
    await this.publisher.publish(event);

    return token;
  }
}

export class ResolveTokenUseCase {
  constructor(
    private readonly repository: TokenRepository,
    private readonly publisher: EventPublisher
  ) {}

  async execute(tokenId: string): Promise<AddressToken | null> {
    const token = await this.repository.findById(tokenId);
    
    if (!token || token.isExpired) {
      return null;
    }

    // For usage-based tokens, mark as expired after resolution
    const policy = DEFAULT_EXPIRATION_POLICIES[token.namespace.purpose];
    if (policy.type === 'usage-based' || policy.type === 'hybrid') {
      await this.repository.markExpired(tokenId, 'usage');
    }

    const event: AddressTokenResolvedEvent = {
      type: 'ADDRESS_TOKEN_RESOLVED',
      tokenId: token.id,
      timestamp: new Date(),
    };
    await this.publisher.publish(event);

    return token;
  }
}

export class ExpireTokensUseCase {
  constructor(
    private readonly repository: TokenRepository,
    private readonly publisher: EventPublisher
  ) {}

  async execute(): Promise<number> {
    const expiredTokens = await this.repository.findExpired();
    
    for (const token of expiredTokens) {
      await this.repository.markExpired(token.id, 'ttl');
      
      const event: AddressTokenExpiredEvent = {
        type: 'ADDRESS_TOKEN_EXPIRED',
        tokenId: token.id,
        reason: 'ttl',
        timestamp: new Date(),
      };
      await this.publisher.publish(event);
    }

    return expiredTokens.length;
  }
}
