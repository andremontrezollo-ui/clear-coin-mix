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
            <span className="gradient-text">Contact</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Secure and anonymous communication channel
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
                      Send Message
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="subject" className="text-muted-foreground">
                          Subject
                        </Label>
                        <Input
                          id="subject"
                          placeholder="Briefly describe your question"
                          className="mt-2"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-muted-foreground">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Detail your question or issue"
                          className="mt-2 min-h-[150px]"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="reply" className="text-muted-foreground">
                          Reply contact (optional)
                        </Label>
                        <Input
                          id="reply"
                          placeholder="Email, PGP key, Session ID, etc."
                          className="mt-2"
                        />
                        <p className="text-xs text-muted-foreground mt-2">
                          You can leave blank and use the ticket ID to check replies
                        </p>
                      </div>

                      <Button variant="hero" type="submit" className="w-full">
                        <Mail className="h-4 w-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="h-8 w-8 text-success" />
                    </div>
                    <h2 className="font-heading font-semibold text-xl mb-2">
                      Message Sent
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Your message has been received successfully
                    </p>
                    
                    <div className="p-4 rounded-xl bg-secondary border border-primary/30 mb-6">
                      <p className="text-sm text-muted-foreground mb-2">
                        Ticket ID
                      </p>
                      <code className="text-2xl font-mono font-bold text-primary">
                        {ticketId}
                      </code>
                    </div>

                    <p className="text-sm text-muted-foreground">
                      Save this ID to track your request
                    </p>

                    <Button
                      variant="outline"
                      className="mt-6"
                      onClick={() => setSubmitted(false)}
                    >
                      Send new message
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
                      <h3 className="font-heading font-semibold mb-1">Privacy</h3>
                      <p className="text-sm text-muted-foreground">
                        We don't collect mandatory personal data. Your reply 
                        contact is optional.
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
                      <h3 className="font-heading font-semibold mb-1">Response Time</h3>
                      <p className="text-sm text-muted-foreground">
                        We typically respond within 24-48 hours. We don't guarantee 
                        specific response times.
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
                      <h3 className="font-heading font-semibold mb-1">Encrypted Communication</h3>
                      <p className="text-sm text-muted-foreground">
                        For sensitive communications, you can use our 
                        public PGP key available below.
                      </p>
                    </div>
                  </div>
                </div>

                {/* PGP Key */}
                <div className="glass-card p-6">
                  <h3 className="font-heading font-semibold mb-4 flex items-center gap-2">
                    <Key className="h-4 w-4 text-primary" />
                    Public PGP Key
                  </h3>
                  <div className="p-4 rounded-lg bg-secondary font-mono text-xs text-muted-foreground overflow-x-auto">
                    <pre className="whitespace-pre-wrap break-all">
{`-----BEGIN PGP PUBLIC KEY BLOCK-----

mQINBGXxxx... (example key)
...
-----END PGP PUBLIC KEY BLOCK-----`}
                    </pre>
                  </div>
                  <Button variant="ghost" size="sm" className="mt-4">
                    Copy Full Key
                  </Button>
                </div>

                {/* Warning */}
                <div className="p-4 rounded-xl bg-warning/5 border border-warning/20 flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-warning shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-warning mb-1">Warning</p>
                    <p className="text-sm text-muted-foreground">
                      We will never ask for seeds, private keys, or for you to 
                      send additional funds. Any such request is a fraud attempt.
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
