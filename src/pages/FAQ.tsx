import { Layout } from "@/components/layout/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, HelpCircle } from "lucide-react";

const faqCategories = [
  {
    title: "Funcionamento Geral",
    items: [
      {
        question: "O que é um serviço de mixing de Bitcoin?",
        answer:
          "Um mixer de Bitcoin quebra a ligação direta entre o endereço de origem e o endereço de destino de uma transação. Isso é feito misturando seus fundos com os de outros usuários em um pool compartilhado, tornando muito mais difícil rastrear a origem dos fundos.",
      },
      {
        question: "Meus fundos estão seguros durante o processo?",
        answer:
          "Durante o processo, seus fundos passam pelo nosso pool de liquidez. Não oferecemos garantias absolutas, mas operamos com práticas de segurança rigorosas. Recomendamos começar com valores menores para testar o serviço antes de operações maiores.",
      },
      {
        question: "Preciso me registrar para usar o serviço?",
        answer:
          "Não. Operamos sem necessidade de registro, e-mail, ou qualquer informação pessoal. Você configura a operação, envia os fundos, e recebe nos destinos configurados.",
      },
      {
        question: "Qual é o valor mínimo para mixing?",
        answer:
          "O valor mínimo recomendado é 0.001 BTC. Valores menores podem não ser processados devido aos custos de taxa de rede que inviabilizariam a operação.",
      },
    ],
  },
  {
    title: "Tempo de Processamento",
    items: [
      {
        question: "Quanto tempo leva para processar minha operação?",
        answer:
          "O tempo total depende de três fatores: confirmações na blockchain (tipicamente 1-2 para entradas), o delay configurado por você (0-24 horas), e a execução das saídas. O tempo mínimo é cerca de 30 minutos, mas pode ser significativamente maior com delays configurados.",
      },
      {
        question: "Por que devo usar delays maiores?",
        answer:
          "Delays maiores aumentam a dissociação temporal entre sua entrada e saída. Isso dificulta análises que tentam correlacionar transações pelo timing. Recomendamos pelo menos 2 horas para maior privacidade.",
      },
      {
        question: "O que acontece se a rede estiver congestionada?",
        answer:
          "Congestionamentos na rede Bitcoin podem atrasar confirmações. Nesse caso, todo o processo pode demorar mais. Não temos controle sobre os tempos de confirmação da blockchain.",
      },
    ],
  },
  {
    title: "Limitações e Riscos",
    items: [
      {
        question: "O mixing garante anonimato total?",
        answer:
          "Não. Nenhum serviço de mixing pode garantir anonimato absoluto. Oferecemos uma camada adicional de privacidade que dificulta significativamente o rastreamento, mas análises sofisticadas podem, em alguns casos, fazer correlações. Use como parte de uma estratégia maior de privacidade.",
      },
      {
        question: "Posso cancelar uma operação após enviar fundos?",
        answer:
          "Não. Uma vez que os fundos são enviados para nosso endereço de depósito e confirmados na blockchain, a operação é irreversível. Por isso, é crucial verificar todos os endereços de destino antes de confirmar.",
      },
      {
        question: "E se eu enviar para o endereço errado?",
        answer:
          "Transações Bitcoin são irreversíveis. Se você enviar fundos para um endereço incorreto (nosso ou qualquer outro), não há como recuperá-los. Sempre verifique duas vezes antes de enviar.",
      },
      {
        question: "Vocês armazenam dados das operações?",
        answer:
          "Mantemos logs mínimos necessários para operação do serviço. Estes são automaticamente eliminados após um período curto. Não armazenamos associações entre entradas e saídas após a conclusão da operação.",
      },
    ],
  },
  {
    title: "Uso Seguro",
    items: [
      {
        question: "Quais boas práticas devo seguir?",
        answer:
          "Use navegadores focados em privacidade (Tor), evite reutilizar endereços Bitcoin, use delays maiores, divida operações grandes em menores, e nunca compartilhe detalhes de suas operações.",
      },
      {
        question: "Devo usar Tor para acessar o serviço?",
        answer:
          "Recomendamos fortemente. Usar Tor impede que seu provedor de internet ou observadores de rede saibam que você está acessando um serviço de mixing.",
      },
      {
        question: "Posso usar múltiplos endereços de destino?",
        answer:
          "Sim, você pode configurar até 5 endereços de destino com percentuais personalizados. Isso adiciona uma camada extra de privacidade ao fragmentar os valores de saída.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent" />
        
        <div className="container relative mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <HelpCircle className="h-4 w-4" />
            <span>Perguntas Frequentes</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            FAQ
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Respostas para as dúvidas mais comuns sobre nosso serviço de mixing
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={category.title} className="mb-12">
                <h2 className="text-xl font-heading font-semibold mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                    {categoryIndex + 1}
                  </span>
                  {category.title}
                </h2>

                <Accordion type="single" collapsible className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <AccordionItem
                      key={itemIndex}
                      value={`${categoryIndex}-${itemIndex}`}
                      className="glass-card border-none px-6"
                    >
                      <AccordionTrigger className="text-left font-medium hover:no-underline hover:text-primary py-5">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Não encontrou sua resposta?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Entre em contato através do nosso formulário anônimo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contato">
                Fale Conosco
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/mixing">Iniciar Mixing</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
