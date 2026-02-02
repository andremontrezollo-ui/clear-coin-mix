/**
 * Infrastructure Layer - Cross-Cutting Concerns
 * 
 * Event bus, observability, and storage abstractions.
 */

import type { DomainEvent, EventPublisher, EventSubscriber } from '../shared';

// Event Bus Implementation
export class InMemoryEventBus<E extends DomainEvent> implements EventPublisher<E> {
  private subscribers = new Map<string, Set<EventSubscriber<E>>>();
  private allEventsSubscribers = new Set<EventSubscriber<E>>();

  async publish(event: E): Promise<void> {
    // Notify specific subscribers
    const typeSubscribers = this.subscribers.get(event.type);
    if (typeSubscribers) {
      for (const subscriber of typeSubscribers) {
        await subscriber.handle(event);
      }
    }

    // Notify all-events subscribers
    for (const subscriber of this.allEventsSubscribers) {
      await subscriber.handle(event);
    }
  }

  subscribe(eventType: string, subscriber: EventSubscriber<E>): () => void {
    if (!this.subscribers.has(eventType)) {
      this.subscribers.set(eventType, new Set());
    }
    this.subscribers.get(eventType)!.add(subscriber);

    return () => {
      this.subscribers.get(eventType)?.delete(subscriber);
    };
  }

  subscribeAll(subscriber: EventSubscriber<E>): () => void {
    this.allEventsSubscribers.add(subscriber);
    return () => {
      this.allEventsSubscribers.delete(subscriber);
    };
  }
}

// Observability - Metrics Collector
export interface MetricValue {
  name: string;
  value: number;
  labels: Record<string, string>;
  timestamp: Date;
}

export class MetricsCollector {
  private metrics: MetricValue[] = [];

  record(name: string, value: number, labels: Record<string, string> = {}): void {
    this.metrics.push({
      name,
      value,
      labels,
      timestamp: new Date(),
    });
  }

  increment(name: string, labels: Record<string, string> = {}): void {
    this.record(name, 1, labels);
  }

  getMetrics(name?: string): MetricValue[] {
    if (name) {
      return this.metrics.filter(m => m.name === name);
    }
    return [...this.metrics];
  }

  clear(): void {
    this.metrics = [];
  }
}

// Storage Abstraction
export interface KeyValueStore<T> {
  get(key: string): Promise<T | null>;
  set(key: string, value: T, ttlSeconds?: number): Promise<void>;
  delete(key: string): Promise<void>;
  exists(key: string): Promise<boolean>;
}

export class InMemoryKeyValueStore<T> implements KeyValueStore<T> {
  private store = new Map<string, { value: T; expiresAt?: Date }>();

  async get(key: string): Promise<T | null> {
    const entry = this.store.get(key);
    if (!entry) return null;
    
    if (entry.expiresAt && entry.expiresAt < new Date()) {
      this.store.delete(key);
      return null;
    }
    
    return entry.value;
  }

  async set(key: string, value: T, ttlSeconds?: number): Promise<void> {
    const expiresAt = ttlSeconds 
      ? new Date(Date.now() + ttlSeconds * 1000) 
      : undefined;
    this.store.set(key, { value, expiresAt });
  }

  async delete(key: string): Promise<void> {
    this.store.delete(key);
  }

  async exists(key: string): Promise<boolean> {
    const value = await this.get(key);
    return value !== null;
  }

  clear(): void {
    this.store.clear();
  }
}

// Logger Interface (privacy-preserving)
export interface Logger {
  debug(message: string, context?: Record<string, unknown>): void;
  info(message: string, context?: Record<string, unknown>): void;
  warn(message: string, context?: Record<string, unknown>): void;
  error(message: string, context?: Record<string, unknown>): void;
}

export class ConsoleLogger implements Logger {
  private readonly redactionPatterns = [
    /\b[13][a-km-zA-HJ-NP-Z1-9]{25,34}\b/g, // Legacy/P2SH addresses
    /\bbc1[a-z0-9]{39,59}\b/g,               // Bech32 addresses
    /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/g, // IP addresses
  ];

  private redact(message: string): string {
    let redacted = message;
    for (const pattern of this.redactionPatterns) {
      redacted = redacted.replace(pattern, '[REDACTED]');
    }
    return redacted;
  }

  debug(message: string, context?: Record<string, unknown>): void {
    console.debug(`[DEBUG] ${this.redact(message)}`, context);
  }

  info(message: string, context?: Record<string, unknown>): void {
    console.info(`[INFO] ${this.redact(message)}`, context);
  }

  warn(message: string, context?: Record<string, unknown>): void {
    console.warn(`[WARN] ${this.redact(message)}`, context);
  }

  error(message: string, context?: Record<string, unknown>): void {
    console.error(`[ERROR] ${this.redact(message)}`, context);
  }
}
