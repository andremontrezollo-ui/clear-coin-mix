import { Layout } from "@/components/layout/Layout";
import { Shield, Eye, Lock, Trash2 } from "lucide-react";

export default function Privacy() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent" />

        <div className="container relative mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Shield className="h-4 w-4" />
            <span>Privacy</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Last updated: February 2026
          </p>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-center mb-12">
              Our Privacy <span className="gradient-text">Principles</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <div className="glass-card p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-2">Data Minimization</h3>
                <p className="text-sm text-muted-foreground">
                  We collect only the absolute minimum data required to process your mixing operation.
                  No personal information is required or stored.
                </p>
              </div>

              <div className="glass-card p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-2">No Registration</h3>
                <p className="text-sm text-muted-foreground">
                  We don't require accounts, email addresses, or any form of registration.
                  Use the service completely anonymously.
                </p>
              </div>

              <div className="glass-card p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Trash2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-2">Automatic Deletion</h3>
                <p className="text-sm text-muted-foreground">
                  Operational data is automatically purged after a short retention period.
                  We don't maintain permanent records of operations.
                </p>
              </div>

              <div className="glass-card p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-2">No Tracking</h3>
                <p className="text-sm text-muted-foreground">
                  We don't use analytics, cookies for tracking, or any third-party tracking services.
                  Your browsing is your own.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Policy */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <section className="glass-card p-6 md:p-8">
              <h2 className="text-xl font-heading font-semibold mb-4">
                1. Information We Process
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                During a mixing operation, we temporarily process:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Bitcoin addresses you provide for receiving funds
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Distribution percentages and delay configurations
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Transaction identifiers for operation tracking
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                This data is used solely for processing your operation and is not shared with
                third parties.
              </p>
            </section>

            <section className="glass-card p-6 md:p-8">
              <h2 className="text-xl font-heading font-semibold mb-4">
                2. What We DON'T Collect
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 shrink-0" />
                  IP addresses (we recommend using Tor for additional privacy)
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 shrink-0" />
                  Browser fingerprints or device identifiers
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 shrink-0" />
                  Personal information (names, emails, phone numbers)
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 shrink-0" />
                  Cookies for tracking or advertising purposes
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 shrink-0" />
                  Long-term associations between input and output addresses
                </li>
              </ul>
            </section>

            <section className="glass-card p-6 md:p-8">
              <h2 className="text-xl font-heading font-semibold mb-4">
                3. Data Retention
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Operational data is retained only for the duration necessary to complete your
                mixing operation, plus a brief buffer period for error handling. After this period,
                data is automatically and permanently deleted. We do not maintain historical records
                that could be used to reconstruct the association between inputs and outputs.
              </p>
            </section>

            <section className="glass-card p-6 md:p-8">
              <h2 className="text-xl font-heading font-semibold mb-4">
                4. Contact Form Data
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you use our contact form, we process only the information you voluntarily provide.
                Providing contact information for replies is optional. Support tickets are handled
                with the same privacy-first approach and deleted after resolution.
              </p>
            </section>

            <section className="glass-card p-6 md:p-8">
              <h2 className="text-xl font-heading font-semibold mb-4">
                5. Third Parties
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not share, sell, or transfer any data to third parties. We do not use
                third-party analytics services. The only external interaction is with the Bitcoin
                network, which is inherently public.
              </p>
            </section>

            <section className="glass-card p-6 md:p-8">
              <h2 className="text-xl font-heading font-semibold mb-4">
                6. Your Responsibilities
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                While we take extensive measures to protect your privacy, ultimate privacy depends
                on your own practices. We recommend using Tor, avoiding address reuse, and following
                general Bitcoin privacy best practices.
              </p>
            </section>

            <section className="glass-card p-6 md:p-8">
              <h2 className="text-xl font-heading font-semibold mb-4">
                7. Policy Updates
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. Significant changes will be
                communicated through our website. We encourage you to review this policy periodically.
              </p>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
}
