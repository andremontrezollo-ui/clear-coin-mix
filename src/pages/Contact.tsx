import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Shield, 
  Clock, 
  CheckCircle2, 
  Key,
  AlertCircle
} from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate a random ticket ID
    const id = `TKT-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    setTicketId(id);
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent" />
        
        <div className="container relative mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            <span className="gradient-text">Contato</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Canal de comunicação seguro e anônimo
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="glass-card p-8">
                {!submitted ? (
                  <>
                    <h2 className="font-heading font-semibold text-xl mb-6">
                      Enviar Mensagem
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="subject" className="text-muted-foreground">
                          Assunto
                        </Label>
                        <Input
                          id="subject"
                          placeholder="Descreva brevemente sua questão"
                          className="mt-2"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-muted-foreground">
                          Mensagem
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Detalhe sua dúvida ou problema"
                          className="mt-2 min-h-[150px]"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="reply" className="text-muted-foreground">
                          Contato para resposta (opcional)
                        </Label>
                        <Input
                          id="reply"
                          placeholder="Email, PGP key, Session ID, etc."
                          className="mt-2"
                        />
                        <p className="text-xs text-muted-foreground mt-2">
                          Você pode deixar em branco e usar o ID do ticket para verificar respostas
                        </p>
                      </div>

                      <Button variant="hero" type="submit" className="w-full">
                        <Mail className="h-4 w-4 mr-2" />
                        Enviar Mensagem
                      </Button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="h-8 w-8 text-success" />
                    </div>
                    <h2 className="font-heading font-semibold text-xl mb-2">
                      Mensagem Enviada
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Sua mensagem foi recebida com sucesso
                    </p>
                    
                    <div className="p-4 rounded-xl bg-secondary border border-primary/30 mb-6">
                      <p className="text-sm text-muted-foreground mb-2">
                        ID do Ticket
                      </p>
                      <code className="text-2xl font-mono font-bold text-primary">
                        {ticketId}
                      </code>
                    </div>

                    <p className="text-sm text-muted-foreground">
                      Guarde este ID para acompanhar sua solicitação
                    </p>

                    <Button
                      variant="outline"
                      className="mt-6"
                      onClick={() => setSubmitted(false)}
                    >
                      Enviar nova mensagem
                    </Button>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="space-y-6">
                <div className="glass-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">Privacidade</h3>
                      <p className="text-sm text-muted-foreground">
                        Não coletamos dados pessoais obrigatórios. Seu contato 
                        para resposta é opcional.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">Tempo de Resposta</h3>
                      <p className="text-sm text-muted-foreground">
                        Respondemos tipicamente em 24-48 horas. Não garantimos 
                        tempo de resposta específico.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Key className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">Comunicação Cifrada</h3>
                      <p className="text-sm text-muted-foreground">
                        Para comunicações sensíveis, você pode usar nossa 
                        chave PGP pública disponível abaixo.
                      </p>
                    </div>
                  </div>
                </div>

                {/* PGP Key */}
                <div className="glass-card p-6">
                  <h3 className="font-heading font-semibold mb-4 flex items-center gap-2">
                    <Key className="h-4 w-4 text-primary" />
                    Chave PGP Pública
                  </h3>
                  <div className="p-4 rounded-lg bg-secondary font-mono text-xs text-muted-foreground overflow-x-auto">
                    <pre className="whitespace-pre-wrap break-all">
{`-----BEGIN PGP PUBLIC KEY BLOCK-----

mQINBGXxxx... (chave exemplo)
...
-----END PGP PUBLIC KEY BLOCK-----`}
                    </pre>
                  </div>
                  <Button variant="ghost" size="sm" className="mt-4">
                    Copiar Chave Completa
                  </Button>
                </div>

                {/* Warning */}
                <div className="p-4 rounded-xl bg-warning/5 border border-warning/20 flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-warning shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-warning mb-1">Atenção</p>
                    <p className="text-sm text-muted-foreground">
                      Nunca pediremos seeds, chaves privadas, ou que você 
                      envie fundos adicionais. Qualquer solicitação desse 
                      tipo é tentativa de fraude.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
