/**
 * Address Generator - Infrastructure Layer
 * 
 * Adapters for token storage and ID generation.
 * Conceptual integration with secrets service.
 */

import type { TokenRepository, IdGenerator, EventPublisher } from '../application';
import type { AddressToken, AddressEvent } from '../domain';

// Secure ID Generator using crypto
export class CryptoIdGenerator implements IdGenerator {
  generate(): string {
    // Use crypto for secure random generation
    const array = new Uint8Array(16);
    crypto.getRandomValues(array);
    return Array.from(array, b => b.toString(16).padStart(2, '0')).join('');
  }
}

// In-Memory Token Repository for Development
export class InMemoryTokenRepository implements TokenRepository {
  private tokens = new Map<string, AddressToken>();

  async save(token: AddressToken): Promise<void> {
    this.tokens.set(token.id, token);
  }

  async findById(id: string): Promise<AddressToken | null> {
    return this.tokens.get(id) ?? null;
  }

  async markExpired(id: string, _reason: 'ttl' | 'usage' | 'manual'): Promise<void> {
    const token = this.tokens.get(id);
    if (token) {
      this.tokens.set(id, { ...token, isExpired: true });
    }
  }

  async findExpired(): Promise<AddressToken[]> {
    const now = new Date();
    return Array.from(this.tokens.values()).filter(
      token => !token.isExpired && token.expiresAt < now
    );
  }

  // Test helper
  clear(): void {
    this.tokens.clear();
  }
}

// In-Memory Event Publisher
export class InMemoryAddressEventPublisher implements EventPublisher {
  private events: AddressEvent[] = [];

  async publish(event: AddressEvent): Promise<void> {
    this.events.push(event);
  }

  getEvents(): readonly AddressEvent[] {
    return [...this.events];
  }

  clear(): void {
    this.events = [];
  }
}
