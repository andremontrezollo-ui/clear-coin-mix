import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ArrowRight, Calculator, Info, Percent, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Fees() {
  const [inputAmount, setInputAmount] = useState("0.1");
  const [delay, setDelay] = useState([2]);
  
  const amount = parseFloat(inputAmount) || 0;
  const serviceFee = 0.015; // 1.5%
  const networkFeeEstimate = 0.00015; // Estimated network fee in BTC
  
  const serviceFeeAmount = amount * serviceFee;
  const totalFees = serviceFeeAmount + networkFeeEstimate;
  const outputAmount = Math.max(0, amount - totalFees);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent" />
        
        <div className="container relative mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Taxas <span className="gradient-text">transparentes</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Sem custos ocultos. Veja exatamente quanto você pagará antes de iniciar.
          </p>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Service Fee */}
              <div className="glass-card p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Percent className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">Taxa de Serviço</h3>
                <p className="text-3xl font-heading font-bold gradient-text mb-4">1.5%</p>
                <p className="text-muted-foreground text-sm">
                  Taxa fixa sobre o valor total da operação. Aplicada uma única vez, 
                  independente do número de endereços de destino.
                </p>
              </div>

              {/* Network Fee */}
              <div className="glass-card p-8">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Zap className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">Taxa de Rede</h3>
                <p className="text-3xl font-heading font-bold text-accent mb-4">Variável</p>
                <p className="text-muted-foreground text-sm">
                  Custo da transação na blockchain Bitcoin. Varia conforme 
                  congestionamento da rede. Estimativa atualizada em tempo real.
                </p>
              </div>
            </div>

            {/* Calculator */}
            <div className="glass-card p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <Calculator className="h-6 w-6 text-primary" />
                <h2 className="font-heading font-semibold text-2xl">Calculadora de Taxas</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Input */}
                <div className="space-y-6">
                  <div>
                    <Label className="text-muted-foreground mb-2 block">
                      Valor a enviar (BTC)
                    </Label>
                    <Input
                      type="number"
                      value={inputAmount}
                      onChange={(e) => setInputAmount(e.target.value)}
                      step="0.001"
                      min="0.001"
                      className="text-lg font-mono"
                    />
                  </div>

                  <div>
                    <Label className="text-muted-foreground mb-2 block">
                      Delay: {delay[0]} {delay[0] === 1 ? "hora" : "horas"}
                    </Label>
                    <Slider
                      value={delay}
                      onValueChange={setDelay}
                      min={0}
                      max={24}
                      step={1}
                    />
                    <p className="text-xs text-muted-foreground mt-2">
                      O delay não afeta as taxas
                    </p>
                  </div>
                </div>

                {/* Output */}
                <div className="p-6 rounded-xl bg-secondary/50 space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-border/50">
                    <span className="text-muted-foreground">Valor de entrada</span>
                    <span className="font-mono font-semibold">{amount.toFixed(8)} BTC</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Taxa de serviço (1.5%)</span>
                    <span className="font-mono text-destructive">
                      -{serviceFeeAmount.toFixed(8)} BTC
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Taxa de rede (est.)</span>
                    <span className="font-mono text-destructive">
                      -{networkFeeEstimate.toFixed(8)} BTC
                    </span>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-border/50">
                    <span className="font-semibold">Valor de saída</span>
                    <span className="font-mono font-bold text-lg text-primary">
                      {outputAmount.toFixed(8)} BTC
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/10 flex items-start gap-3">
                <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  Os valores de saída são estimativas. A taxa de rede real pode variar 
                  dependendo do estado da mempool no momento da transação.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/mixing">
                  Iniciar Mixing
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-center mb-12">
              Perguntas sobre taxas
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "Por que a taxa de serviço é fixa em 1.5%?",
                  a: "Mantemos uma taxa fixa para garantir previsibilidade. Isso cobre os custos operacionais do pool de liquidez e infraestrutura.",
                },
                {
                  q: "A taxa muda com o número de destinos?",
                  a: "Não. A taxa de serviço é a mesma independente de você usar 1 ou 5 endereços de destino. A taxa de rede pode aumentar marginalmente por transação adicional.",
                },
                {
                  q: "Posso pagar menos esperando mais?",
                  a: "O delay não afeta as taxas cobradas. No entanto, a taxa de rede Bitcoin varia ao longo do dia - períodos de menor congestionamento podem resultar em custos menores.",
                },
              ].map((item, index) => (
                <div key={index} className="glass-card p-6">
                  <h3 className="font-heading font-semibold mb-2">{item.q}</h3>
                  <p className="text-muted-foreground text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
