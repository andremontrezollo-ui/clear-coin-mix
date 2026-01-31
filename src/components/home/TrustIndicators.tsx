import { Lock, Eye, Zap, Server, Trash2, Globe } from "lucide-react";

const indicators = [
  {
    icon: Lock,
    title: "Unique addresses",
    description: "Each operation receives an exclusive address, no reuse",
  },
  {
    icon: Eye,
    title: "Minimized logs",
    description: "Minimal data retention, progressive automatic cleanup",
  },
  {
    icon: Zap,
    title: "Fast processing",
    description: "System optimized for efficient confirmations",
  },
  {
    icon: Server,
    title: "Liquidity pool",
    description: "Structural dissociation between inputs and outputs",
  },
  {
    icon: Trash2,
    title: "No traces",
    description: "Sensitive metadata is automatically removed",
  },
  {
    icon: Globe,
    title: "Global access",
    description: "Service accessible without geographic restrictions",
  },
];

export function TrustIndicators() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Operational <span className="gradient-text">principles</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We don't make promises we can't keep. These are the principles that guide our operation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {indicators.map((indicator, index) => (
            <div 
              key={indicator.title}
              className="group glass-card p-6 hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <indicator.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-1">{indicator.title}</h3>
                  <p className="text-sm text-muted-foreground">{indicator.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
