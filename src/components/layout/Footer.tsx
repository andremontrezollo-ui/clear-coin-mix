import { Link } from "react-router-dom";
import { Shield, Lock, Eye, FileText } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-xl font-heading font-bold">
              <Shield className="h-6 w-6 text-primary" />
              <span>ShadowMix</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Serviço de privacidade para transações Bitcoin. Operamos com transparência e respeito à autonomia do usuário.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
              Navegação
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Início", href: "/" },
                { label: "Como Funciona", href: "/como-funciona" },
                { label: "Taxas", href: "/taxas" },
                { label: "FAQ", href: "/faq" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/termos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/privacidade" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust Indicators */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
              Princípios
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Lock className="h-4 w-4 text-primary" />
                <span>Sem registro obrigatório</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Eye className="h-4 w-4 text-primary" />
                <span>Logs minimizados</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <FileText className="h-4 w-4 text-primary" />
                <span>Código auditável</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} ShadowMix. Serviço operado de forma autônoma.
            </p>
            <p className="text-xs text-muted-foreground">
              Este serviço não oferece garantias absolutas. Use sob sua responsabilidade.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
