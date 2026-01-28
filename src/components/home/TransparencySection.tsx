import { AlertTriangle, Info, CheckCircle2, XCircle } from "lucide-react";

const transparencyItems = [
  {
    icon: CheckCircle2,
    title: "O que fazemos",
    items: [
      "Quebramos a ligação direta entre entrada e saída",
      "Utilizamos delays temporais configuráveis",
      "Fragmentamos valores em múltiplas saídas",
      "Operamos com pool de liquidez compartilhado",
    ],
    variant: "positive" as const,
  },
  {
    icon: XCircle,
    title: "O que NÃO fazemos",
    items: [
      "Não garantimos anonimato absoluto",
      "Não revertemos transações após confirmação",
      "Não armazenamos dados além do necessário",
      "Não oferecemos suporte a atividades ilícitas",
    ],
    variant: "negative" as const,
  },
];

const warnings = [
  {
    icon: AlertTriangle,
    text: "Transações na blockchain são irreversíveis. Verifique todos os dados antes de confirmar.",
  },
  {
    icon: Info,
    text: "O serviço depende de confirmações na rede Bitcoin. Tempos podem variar significativamente.",
  },
];

export function TransparencySection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container relative mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Transparência <span className="gradient-text">total</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Acreditamos que você deve entender exatamente o que nosso serviço faz — e o que ele não faz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {transparencyItems.map((item) => (
            <div 
              key={item.title}
              className={`glass-card p-8 ${
                item.variant === "positive" 
                  ? "border-primary/20" 
                  : "border-destructive/20"
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <item.icon 
                  className={`h-6 w-6 ${
                    item.variant === "positive" 
                      ? "text-primary" 
                      : "text-destructive"
                  }`} 
                />
                <h3 className="font-heading font-semibold text-xl">{item.title}</h3>
              </div>
              <ul className="space-y-3">
                {item.items.map((text) => (
                  <li key={text} className="flex items-start gap-3 text-muted-foreground">
                    <div 
                      className={`w-1.5 h-1.5 rounded-full mt-2 ${
                        item.variant === "positive" 
                          ? "bg-primary" 
                          : "bg-destructive"
                      }`} 
                    />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Warnings */}
        <div className="max-w-3xl mx-auto space-y-4">
          {warnings.map((warning, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-4 rounded-xl bg-warning/5 border border-warning/20"
            >
              <warning.icon className="h-5 w-5 text-warning shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">{warning.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
