import { Layout } from "@/components/layout/Layout";
import { ArrowDown, Wallet, Shuffle, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const flowSteps = [
  {
    icon: Wallet,
    step: "01",
    title: "Entrada de Fundos",
    description: "Você envia Bitcoin para um endereço único gerado exclusivamente para sua operação. Este endereço nunca é reutilizado.",
    details: [
      "Endereço gerado sob demanda",
      "Monitoramento automático de confirmações",
      "Nenhuma associação com operações anteriores",
    ],
    color: "primary",
  },
  {
    icon: Shuffle,
    step: "02", 
    title: "Processamento",
    description: "Seus fundos entram em nosso pool de liquidez, onde são dissociados estruturalmente de sua origem.",
    details: [
      "Pool compartilhado de múltiplos usuários",
      "Quebra de correlação temporal",
      "Fragmentação de valores",
    ],
    color: "accent",
  },
  {
    icon: Clock,
    step: "03",
    title: "Distribuição Temporal",
    description: "As saídas são programadas com delays variáveis, eliminando correlação temporal direta com a entrada.",
    details: [
      "Delays configuráveis pelo usuário",
      "Janelas de tempo aleatorizadas",
      "Múltiplas transações de saída",
    ],
    color: "primary",
  },
  {
    icon: CheckCircle2,
    step: "04",
    title: "Recebimento",
    description: "Você recebe os fundos em seus endereços de destino, com valores fragmentados e sem ligação rastreável à origem.",
    details: [
      "Múltiplos endereços de destino",
      "Valores distribuídos conforme configuração",
      "Transações independentes",
    ],
    color: "success",
  },
];

export default function HowItWorks() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent" />
        
        <div className="container relative mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Como o <span className="gradient-text">mixing</span> funciona
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Entenda o processo de dissociação de fundos em 4 etapas simples
          </p>
        </div>
      </section>

      {/* Flow Diagram */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {flowSteps.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Step Card */}
                <div className="flex gap-6 md:gap-10 animate-fade-up" style={{ animationDelay: `${index * 150}ms` }}>
                  {/* Step Number */}
                  <div className="flex flex-col items-center">
                    <div className={`w-16 h-16 rounded-2xl bg-${step.color}/10 border-2 border-${step.color}/30 flex items-center justify-center relative z-10`}>
                      <step.icon className={`h-8 w-8 text-${step.color}`} />
                    </div>
                    {index < flowSteps.length - 1 && (
                      <div className="w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent min-h-[120px]" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-16">
                    <div className="glass-card p-6 md:p-8 hover:border-primary/30 transition-all">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-sm font-mono text-primary">{step.step}</span>
                        <h3 className="text-xl md:text-2xl font-heading font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {step.description}
                      </p>
                      <ul className="space-y-2">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-3 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Diagram */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12">
              Diagrama <span className="gradient-text">simplificado</span>
            </h2>

            <div className="glass-card p-8 md:p-12">
              {/* Visual Flow */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Input */}
                <div className="text-center">
                  <div className="w-24 h-24 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-4">
                    <Wallet className="h-10 w-10 text-foreground" />
                  </div>
                  <p className="font-heading font-semibold">Sua Carteira</p>
                  <p className="text-sm text-muted-foreground">Origem</p>
                </div>

                <ArrowRight className="h-8 w-8 text-primary hidden md:block flow-arrow" />
                <ArrowDown className="h-8 w-8 text-primary md:hidden" />

                {/* Pool */}
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4 relative">
                    <div className="absolute inset-2 rounded-full border-2 border-dashed border-primary/30 animate-spin" style={{ animationDuration: "20s" }} />
                    <Shuffle className="h-12 w-12 text-primary" />
                  </div>
                  <p className="font-heading font-semibold">Pool de Liquidez</p>
                  <p className="text-sm text-muted-foreground">Dissociação</p>
                </div>

                <ArrowRight className="h-8 w-8 text-primary hidden md:block flow-arrow" />
                <ArrowDown className="h-8 w-8 text-primary md:hidden" />

                {/* Output */}
                <div className="text-center">
                  <div className="flex gap-2 justify-center mb-4">
                    <div className="w-16 h-16 rounded-xl bg-success/10 flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-success" />
                    </div>
                    <div className="w-16 h-16 rounded-xl bg-success/10 flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-success" />
                    </div>
                  </div>
                  <p className="font-heading font-semibold">Destinos</p>
                  <p className="text-sm text-muted-foreground">Múltiplas saídas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Pronto para começar?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Configure sua operação de mixing em poucos minutos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/mixing">
                Iniciar Mixing
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/taxas">Ver Taxas</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
