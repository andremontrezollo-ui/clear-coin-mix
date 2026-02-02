/**
 * API Layer - Controllers/Endpoints
 * 
 * REST endpoints for external communication.
 * Orchestrates use cases from different modules.
 */

// Request/Response Types
export interface StartExperimentRequest {
  amount: number;
  destinations: string[];
  delayPolicy: 'immediate' | 'delayed' | 'random-window';
  minDelayMinutes?: number;
  maxDelayMinutes?: number;
}

export interface StartExperimentResponse {
  experimentId: string;
  depositToken: string;
  estimatedCompletionTime: Date;
  status: 'pending_deposit';
}

export interface GetTokensRequest {
  experimentId: string;
}

export interface GetTokensResponse {
  depositToken: string;
  status: 'active' | 'expired' | 'used';
  expiresAt: Date;
}

export interface GetReportRequest {
  reportType: 'health' | 'compliance';
  periodStart?: string;
  periodEnd?: string;
}

export interface HealthReportResponse {
  poolStatus: 'healthy' | 'warning' | 'critical';
  utilizationRate: number;
  pendingObligations: number;
}

export interface ComplianceReportResponse {
  reportId: string;
  generatedAt: Date;
  totalEntries: number;
  entriesRedacted: number;
}

// Controller Interface (to be implemented with actual framework)
export interface APIController {
  // Experiment endpoints
  startExperiment(req: StartExperimentRequest): Promise<StartExperimentResponse>;
  getExperimentStatus(experimentId: string): Promise<{ status: string }>;
  
  // Token endpoints
  getTokens(req: GetTokensRequest): Promise<GetTokensResponse>;
  
  // Report endpoints
  getReport(req: GetReportRequest): Promise<HealthReportResponse | ComplianceReportResponse>;
}

// Placeholder implementation (actual implementation depends on runtime)
export class APIControllerImpl implements APIController {
  async startExperiment(_req: StartExperimentRequest): Promise<StartExperimentResponse> {
    // Will be implemented with actual use case orchestration
    throw new Error('Not implemented - requires runtime integration');
  }

  async getExperimentStatus(_experimentId: string): Promise<{ status: string }> {
    throw new Error('Not implemented - requires runtime integration');
  }

  async getTokens(_req: GetTokensRequest): Promise<GetTokensResponse> {
    throw new Error('Not implemented - requires runtime integration');
  }

  async getReport(_req: GetReportRequest): Promise<HealthReportResponse | ComplianceReportResponse> {
    throw new Error('Not implemented - requires runtime integration');
  }
}
