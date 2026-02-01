import { Layout } from "@/components/layout/Layout";
import { FileText, AlertTriangle } from "lucide-react";

export default function Terms() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent" />

        <div className="container relative mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <FileText className="h-4 w-4" />
            <span>Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Last updated: February 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-invert">
            {/* Warning */}
            <div className="not-prose p-4 rounded-xl bg-warning/5 border border-warning/20 flex items-start gap-3 mb-8">
              <AlertTriangle className="h-5 w-5 text-warning shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-warning mb-1">Important Notice</p>
                <p className="text-sm text-muted-foreground">
                  By using ShadowMix, you acknowledge that you have read, understood, and agree
                  to be bound by these Terms of Service.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <section className="glass-card p-6 md:p-8">
                <h2 className="text-xl font-heading font-semibold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using ShadowMix ("the Service"), you agree to comply with and be
                  bound by these Terms of Service. If you do not agree to these terms, you must not
                  use the Service.
                </p>
              </section>

              <section className="glass-card p-6 md:p-8">
                <h2 className="text-xl font-heading font-semibold mb-4">2. Service Description</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  ShadowMix is a Bitcoin mixing service designed to enhance transaction privacy by
                  breaking the link between input and output addresses. The Service operates on a
                  non-custodial basis whenever possible.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    The Service is provided "as is" without warranties of any kind
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    We do not guarantee absolute anonymity or privacy
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    Processing times depend on Bitcoin network conditions
                  </li>
                </ul>
              </section>

              <section className="glass-card p-6 md:p-8">
                <h2 className="text-xl font-heading font-semibold mb-4">3. User Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You are solely responsible for:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    Ensuring the accuracy of all provided Bitcoin addresses
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    Complying with all applicable laws in your jurisdiction
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    Understanding the irreversible nature of Bitcoin transactions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    Securing your own wallet and private keys
                  </li>
                </ul>
              </section>

              <section className="glass-card p-6 md:p-8">
                <h2 className="text-xl font-heading font-semibold mb-4">4. Prohibited Uses</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree not to use the Service for:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                    Money laundering or terrorist financing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                    Any activity that violates applicable laws
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                    Processing funds from illegal sources
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                    Attempting to exploit or attack the Service
                  </li>
                </ul>
              </section>

              <section className="glass-card p-6 md:p-8">
                <h2 className="text-xl font-heading font-semibold mb-4">5. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by law, ShadowMix and its operators shall not be
                  liable for any direct, indirect, incidental, special, consequential, or exemplary
                  damages arising from your use of the Service, including but not limited to loss of
                  funds, data, or profits.
                </p>
              </section>

              <section className="glass-card p-6 md:p-8">
                <h2 className="text-xl font-heading font-semibold mb-4">6. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms at any time. Continued use of the
                  Service after changes constitutes acceptance of the modified Terms. We encourage
                  you to review these Terms periodically.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
