/**
 * Liquidity Pool - Domain Layer
 * 
 * Structural dissociation layer: treats funds as aggregates
 * to reduce temporal and volumetric correlation.
 */

// Value Objects
export interface Reserve {
  readonly totalAmount: number;
  readonly availableAmount: number;
  readonly reservedAmount: number;
  readonly currency: 'BTC';
}

export interface Threshold {
  readonly type: 'minimum' | 'maximum' | 'warning';
  readonly value: number;
  readonly action: 'alert' | 'pause' | 'rebalance';
}

export interface PoolHealth {
  readonly status: 'healthy' | 'warning' | 'critical';
  readonly utilizationRate: number;
  readonly pendingObligations: number;
  readonly thresholdBreaches: Threshold[];
}

export interface Obligation {
  readonly id: string;
  readonly amount: number;
  readonly createdAt: Date;
  readonly status: 'pending' | 'fulfilled' | 'expired';
}

// Domain Events
export interface LiquidityReservedEvent {
  readonly type: 'LIQUIDITY_RESERVED';
  readonly obligationId: string;
  readonly amount: number;
  readonly timestamp: Date;
}

export interface LiquidityReleasedEvent {
  readonly type: 'LIQUIDITY_RELEASED';
  readonly obligationId: string;
  readonly amount: number;
  readonly reason: 'fulfilled' | 'expired' | 'cancelled';
  readonly timestamp: Date;
}

export interface PoolHealthChangedEvent {
  readonly type: 'POOL_HEALTH_CHANGED';
  readonly previousStatus: PoolHealth['status'];
  readonly newStatus: PoolHealth['status'];
  readonly utilizationRate: number;
  readonly timestamp: Date;
}

export type PoolEvent = 
  | LiquidityReservedEvent 
  | LiquidityReleasedEvent 
  | PoolHealthChangedEvent;

// Default Thresholds
export const DEFAULT_THRESHOLDS: Threshold[] = [
  { type: 'minimum', value: 0.1, action: 'pause' },      // 10% minimum reserve
  { type: 'warning', value: 0.2, action: 'alert' },      // 20% warning level
  { type: 'maximum', value: 0.9, action: 'rebalance' },  // 90% max utilization
];

// Health Calculation
export function calculatePoolHealth(reserve: Reserve): PoolHealth {
  const utilizationRate = reserve.reservedAmount / reserve.totalAmount;
  const availableRate = reserve.availableAmount / reserve.totalAmount;
  
  const breaches = DEFAULT_THRESHOLDS.filter(threshold => {
    if (threshold.type === 'minimum' && availableRate < threshold.value) return true;
    if (threshold.type === 'maximum' && utilizationRate > threshold.value) return true;
    if (threshold.type === 'warning' && availableRate < threshold.value) return true;
    return false;
  });

  let status: PoolHealth['status'] = 'healthy';
  if (breaches.some(b => b.action === 'pause')) {
    status = 'critical';
  } else if (breaches.some(b => b.action === 'alert' || b.action === 'rebalance')) {
    status = 'warning';
  }

  return {
    status,
    utilizationRate,
    pendingObligations: 0, // To be calculated from obligations
    thresholdBreaches: breaches,
  };
}
