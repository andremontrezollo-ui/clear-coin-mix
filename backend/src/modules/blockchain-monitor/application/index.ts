/**
 * Blockchain Monitor - Application Layer
 * 
 * Use cases: normalize events, publish to event bus.
 * No I/O operations - pure business logic orchestration.
 */

import type { 
  BlockchainEvent, 
  BlockObservedEvent, 
  TransactionConfirmedEvent,
  FeeEstimateUpdatedEvent,
  TransactionId,
  BlockHeight 
} from './domain';

// Ports (interfaces for adapters)
export interface BlockchainDataSource {
  getCurrentHeight(): Promise<BlockHeight>;
  getTransaction(txId: TransactionId): Promise<{ confirmations: number } | null>;
  getFeeEstimates(): Promise<{ low: number; medium: number; high: number }>;
}

export interface EventPublisher {
  publish(event: BlockchainEvent): Promise<void>;
}

// Use Cases
export class NormalizeBlockEventUseCase {
  constructor(private readonly publisher: EventPublisher) {}

  async execute(rawBlock: { height: number; txCount: number }): Promise<void> {
    const event: BlockObservedEvent = {
      type: 'BLOCK_OBSERVED',
      height: { value: rawBlock.height },
      timestamp: new Date(),
      transactionCount: rawBlock.txCount,
    };
    await this.publisher.publish(event);
  }
}

export class CheckTransactionConfirmationUseCase {
  constructor(
    private readonly dataSource: BlockchainDataSource,
    private readonly publisher: EventPublisher,
    private readonly requiredConfirmations: number = 6
  ) {}

  async execute(txId: TransactionId): Promise<void> {
    const tx = await this.dataSource.getTransaction(txId);
    if (!tx) return;

    const event: TransactionConfirmedEvent = {
      type: 'TRANSACTION_CONFIRMED',
      txId,
      confirmations: {
        count: tx.confirmations,
        isConfirmed: tx.confirmations >= this.requiredConfirmations,
      },
      timestamp: new Date(),
    };
    await this.publisher.publish(event);
  }
}

export class UpdateFeeEstimatesUseCase {
  constructor(
    private readonly dataSource: BlockchainDataSource,
    private readonly publisher: EventPublisher
  ) {}

  async execute(): Promise<void> {
    const fees = await this.dataSource.getFeeEstimates();
    
    const priorities: Array<'low' | 'medium' | 'high'> = ['low', 'medium', 'high'];
    for (const priority of priorities) {
      const event: FeeEstimateUpdatedEvent = {
        type: 'FEE_ESTIMATE_UPDATED',
        satPerVbyte: fees[priority],
        priority,
        timestamp: new Date(),
      };
      await this.publisher.publish(event);
    }
  }
}
