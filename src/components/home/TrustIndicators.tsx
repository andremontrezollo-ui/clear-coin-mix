import { Lock, Eye, Zap, Server, Trash2, Globe } from "lucide-react";

const indicators = [
  {
    icon: Lock,
    title: "Endereços únicos",
    description: "Cada operação recebe um endereço exclusivo, sem reuso",
  },
  {
    icon: Eye,
    title: "Logs minimizados",
    description: "Retenção mínima de dados, limpeza automática progressiva",
  },
  {
    icon: Zap,
    title: "Processamento rápido",
    description: "Sistema otimizado para confirmações eficientes",
  },
  {
    icon: Server,
    title: "Pool de liquidez",
    description: "Dissociação estrutural entre entradas e saídas",
  },
  {
    icon: Trash2,
    title: "Sem rastros",
    description: "Metadados sensíveis são removidos automaticamente",
  },
  {
    icon: Globe,
    title: "Acesso global",
    description: "Serviço acessível sem restrições geográficas",
  },
];

export function TrustIndicators() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Princípios <span className="gradient-text">operacionais</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Não fazemos promessas que não podemos cumprir. Estes são os princípios que guiam nossa operação.
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
