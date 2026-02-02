/**
 * Blockchain Monitor - Domain Layer
 * 
 * Business concepts for blockchain observation without operational details.
 */

// Value Objects
export interface BlockHeight {
  readonly value: number;
}

export interface TransactionId {
  readonly hash: string;
}

export interface Confirmation {
  readonly count: number;
  readonly isConfirmed: boolean;
}

// Domain Events
export interface BlockObservedEvent {
  readonly type: 'BLOCK_OBSERVED';
  readonly height: BlockHeight;
  readonly timestamp: Date;
  readonly transactionCount: number;
}

export interface TransactionConfirmedEvent {
  readonly type: 'TRANSACTION_CONFIRMED';
  readonly txId: TransactionId;
  readonly confirmations: Confirmation;
  readonly timestamp: Date;
}

export interface FeeEstimateUpdatedEvent {
  readonly type: 'FEE_ESTIMATE_UPDATED';
  readonly satPerVbyte: number;
  readonly priority: 'low' | 'medium' | 'high';
  readonly timestamp: Date;
}

// Aggregate
export interface ObservedTransaction {
  readonly id: TransactionId;
  readonly firstSeen: Date;
  readonly confirmations: Confirmation;
  readonly status: 'pending' | 'confirmed' | 'dropped';
}

// Domain Types Union
export type BlockchainEvent = 
  | BlockObservedEvent 
  | TransactionConfirmedEvent 
  | FeeEstimateUpdatedEvent;
