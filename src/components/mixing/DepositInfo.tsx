import { Button } from "@/components/ui/button";
import { CheckCircle2, Copy } from "lucide-react";
import { useClipboard } from "@/hooks/useClipboard";

interface DepositInfoProps {
  depositAddress: string;
  onNewOperation: () => void;
}

export function DepositInfo({ depositAddress, onNewOperation }: DepositInfoProps) {
  const { copied, copy } = useClipboard();

  return (
    <div className="space-y-8 animate-fade-up">
      <div className="glass-card p-6 md:p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="h-8 w-8 text-success" />
        </div>

        <h2 className="font-heading font-semibold text-xl mb-2">
          Operation Configured
        </h2>
        <p className="text-muted-foreground mb-8">
          Send Bitcoin to the address below to start mixing
        </p>

        {/* Deposit Address */}
        <div className="p-6 rounded-xl bg-secondary border-2 border-primary/30 mb-6">
          <p className="text-sm text-muted-foreground mb-2">Deposit Address</p>
          <div className="flex items-center gap-2 justify-center">
            <code className="font-mono text-lg md:text-xl break-all select-all">
              {depositAddress}
            </code>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => copy(depositAddress)}
              className="shrink-0"
              aria-label="Copy deposit address"
            >
              {copied ? (
                <CheckCircle2 className="h-5 w-5 text-success" />
              ) : (
                <Copy className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* QR Code Placeholder */}
        <div className="w-48 h-48 mx-auto bg-secondary rounded-xl flex items-center justify-center mb-6">
          <span className="text-muted-foreground text-sm">QR Code</span>
        </div>

        <div className="p-4 rounded-lg bg-primary/5 border border-primary/10 text-left">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Next steps:</strong>
            <br />
            1. Send any amount of BTC to the address above
            <br />
            2. Wait for at least 1 network confirmation
            <br />
            3. Funds will be processed and sent to configured destinations
          </p>
        </div>
      </div>

      <Button
        variant="outline"
        size="lg"
        className="w-full"
        onClick={onNewOperation}
      >
        New Operation
      </Button>
    </div>
  );
}
