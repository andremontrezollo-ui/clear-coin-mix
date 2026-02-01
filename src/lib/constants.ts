/**
 * Application constants and configuration
 * Centralized configuration for the ShadowMix application
 */

// Service configuration
export const SERVICE_CONFIG = {
  name: "ShadowMix",
  tagline: "Privacy for Bitcoin transactions",
  serviceFeePercentage: 0.015, // 1.5%
  networkFeeEstimate: 0.00015, // Estimated network fee in BTC
  minAmount: 0.001, // Minimum BTC amount
  maxDestinations: 5,
  minDelay: 0,
  maxDelay: 24,
  defaultDelay: 2,
} as const;

// Bitcoin address validation patterns
export const BITCOIN_ADDRESS_PATTERNS = {
  // Legacy addresses (P2PKH) - starts with 1
  legacy: /^1[a-km-zA-HJ-NP-Z1-9]{25,34}$/,
  // P2SH addresses - starts with 3
  p2sh: /^3[a-km-zA-HJ-NP-Z1-9]{25,34}$/,
  // Bech32 addresses (SegWit) - starts with bc1q
  bech32: /^bc1q[a-z0-9]{38,59}$/i,
  // Bech32m addresses (Taproot) - starts with bc1p
  bech32m: /^bc1p[a-z0-9]{58}$/i,
} as const;

// Input validation limits
export const VALIDATION_LIMITS = {
  subject: {
    minLength: 3,
    maxLength: 100,
  },
  message: {
    minLength: 10,
    maxLength: 2000,
  },
  replyContact: {
    maxLength: 500,
  },
  bitcoinAddress: {
    minLength: 26,
    maxLength: 62,
  },
} as const;

// Navigation items
export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Fees", href: "/fees" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

// Footer links
export const FOOTER_LINKS = {
  navigation: [
    { label: "Home", href: "/" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Fees", href: "/fees" },
    { label: "FAQ", href: "/faq" },
  ],
  legal: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
} as const;

// Ticket ID generation prefix
export const TICKET_PREFIX = "TKT-" as const;
