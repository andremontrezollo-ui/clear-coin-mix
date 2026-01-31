import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { 
  AlertTriangle, 
  Plus, 
  Trash2, 
  Clock, 
  Wallet, 
  CheckCircle2,
  Copy,
  Info
} from "lucide-react";
import { cn } from "@/lib/utils";

interface DestinationAddress {
  id: string;
  address: string;
  percentage: number;
}

export default function MixingPage() {
  const [step, setStep] = useState<"configure" | "confirm" | "deposit">("configure");
  const [destinations, setDestinations] = useState<DestinationAddress[]>([
    { id: "1", address: "", percentage: 100 },
  ]);
  const [delay, setDelay] = useState([2]); // hours
  const [copied, setCopied] = useState(false);

  const depositAddress = "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"; // Example

  const addDestination = () => {
    if (destinations.length >= 5) return;
    const newPercentage = Math.floor(100 / (destinations.length + 1));
    const updatedDestinations = destinations.map((d) => ({
      ...d,
      percentage: newPercentage,
    }));
    updatedDestinations.push({
      id: Date.now().toString(),
      address: "",
      percentage: 100 - newPercentage * destinations.length,
    });
    setDestinations(updatedDestinations);
  };

  const removeDestination = (id: string) => {
    if (destinations.length <= 1) return;
    const filtered = destinations.filter((d) => d.id !== id);
    const perAddress = Math.floor(100 / filtered.length);
    const remainder = 100 - perAddress * (filtered.length - 1);
    setDestinations(
      filtered.map((d, i) => ({
        ...d,
        percentage: i === filtered.length - 1 ? remainder : perAddress,
      }))
    );
  };

  const updateAddress = (id: string, address: string) => {
    setDestinations(
      destinations.map((d) => (d.id === id ? { ...d, address } : d))
    );
  };

  const updatePercentage = (id: string, percentage: number) => {
    setDestinations(
      destinations.map((d) => (d.id === id ? { ...d, percentage } : d))
    );
  };

  const isValidBitcoinAddress = (address: string) => {
    return address.length >= 26 && address.length <= 62;
  };

  const allAddressesValid = destinations.every((d) => 
    d.address && isValidBitcoinAddress(d.address)
  );

  const totalPercentage = destinations.reduce((sum, d) => sum + d.percentage, 0);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(depositAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Layout>
      <section className="pt-32 pb-20 min-h-screen relative">
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-radial from-primary/5 via-transparent to-transparent" />

        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Configure <span className="gradient-text">Mixing</span>
              </h1>
              <p className="text-muted-foreground">
                Configure the parameters for your mixing operation
              </p>
            </div>

            {/* Progress Steps */}
            <div className="flex items-center justify-center gap-4 mb-12">
              {[
                { key: "configure", label: "Configure", icon: Wallet },
                { key: "confirm", label: "Confirm", icon: CheckCircle2 },
                { key: "deposit", label: "Deposit", icon: Clock },
              ].map((s, index) => (
                <div key={s.key} className="flex items-center gap-4">
                  <div
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",
                      step === s.key
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground"
                    )}
                  >
                    <s.icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{s.label}</span>
                  </div>
                  {index < 2 && (
                    <div className="w-8 h-0.5 bg-border" />
                  )}
                </div>
              ))}
            </div>

            {/* Step: Configure */}
            {step === "configure" && (
              <div className="space-y-8 animate-fade-up">
                {/* Destination Addresses */}
                <div className="glass-card p-6 md:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="font-heading font-semibold text-lg mb-1">
                        Destination Addresses
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        Where you want to receive funds after mixing
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={addDestination}
                      disabled={destinations.length >= 5}
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Add
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {destinations.map((dest, index) => (
                      <div
                        key={dest.id}
                        className="p-4 rounded-xl bg-secondary/50 border border-border/50"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-1 space-y-4">
                            <div>
                              <Label className="text-sm text-muted-foreground mb-2 block">
                                Bitcoin Address #{index + 1}
                              </Label>
                              <Input
                                placeholder="bc1q... or 3... or 1..."
                                value={dest.address}
                                onChange={(e) =>
                                  updateAddress(dest.id, e.target.value)
                                }
                                className={cn(
                                  "font-mono text-sm",
                                  dest.address && !isValidBitcoinAddress(dest.address)
                                    ? "border-destructive"
                                    : dest.address && isValidBitcoinAddress(dest.address)
                                    ? "border-success"
                                    : ""
                                )}
                              />
                            </div>
                            <div>
                              <Label className="text-sm text-muted-foreground mb-2 block">
                                Percentage: {dest.percentage}%
                              </Label>
                              <Slider
                                value={[dest.percentage]}
                                onValueChange={(value) =>
                                  updatePercentage(dest.id, value[0])
                                }
                                min={10}
                                max={100}
                                step={5}
                                className="w-full"
                              />
                            </div>
                          </div>
                          {destinations.length > 1 && (
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeDestination(dest.id)}
                              className="text-muted-foreground hover:text-destructive"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {totalPercentage !== 100 && (
                    <div className="mt-4 p-3 rounded-lg bg-warning/10 border border-warning/20 flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-warning" />
                      <span className="text-sm text-warning">
                        Total must be 100%. Current: {totalPercentage}%
                      </span>
                    </div>
                  )}
                </div>

                {/* Delay Configuration */}
                <div className="glass-card p-6 md:p-8">
                  <div className="mb-6">
                    <h2 className="font-heading font-semibold text-lg mb-1">
                      Processing Delay
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Wait time between deposit confirmation and outputs
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Minimum delay</span>
                      <span className="font-heading font-semibold text-primary">
                        {delay[0]} {delay[0] === 1 ? "hour" : "hours"}
                      </span>
                    </div>
                    <Slider
                      value={delay}
                      onValueChange={setDelay}
                      min={0}
                      max={24}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Immediate</span>
                      <span>24 hours</span>
                    </div>
                  </div>

                  <div className="mt-4 p-3 rounded-lg bg-primary/5 border border-primary/10 flex items-start gap-2">
                    <Info className="h-4 w-4 text-primary mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      Longer delays increase privacy but delay receipt.
                      We recommend at least 2 hours.
                    </span>
                  </div>
                </div>

                {/* Warning */}
                <div className="p-4 rounded-xl bg-warning/5 border border-warning/20 flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-warning shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-warning mb-1">Warning: Irreversible Operation</p>
                    <p className="text-sm text-muted-foreground">
                      After confirming and sending funds, the operation cannot be canceled or reversed.
                      Check all addresses carefully.
                    </p>
                  </div>
                </div>

                <Button
                  variant="hero"
                  size="lg"
                  className="w-full"
                  onClick={() => setStep("confirm")}
                  disabled={!allAddressesValid || totalPercentage !== 100}
                >
                  Review Configuration
                </Button>
              </div>
            )}

            {/* Step: Confirm */}
            {step === "confirm" && (
              <div className="space-y-8 animate-fade-up">
                <div className="glass-card p-6 md:p-8">
                  <h2 className="font-heading font-semibold text-lg mb-6">
                    Operation Summary
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-3">Destination addresses</p>
                      {destinations.map((dest, index) => (
                        <div
                          key={dest.id}
                          className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 mb-2"
                        >
                          <span className="font-mono text-sm truncate max-w-[60%]">
                            {dest.address}
                          </span>
                          <span className="text-primary font-semibold">
                            {dest.percentage}%
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Configured delay</span>
                      </div>
                      <span className="font-semibold">
                        {delay[0]} {delay[0] === 1 ? "hour" : "hours"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1"
                    onClick={() => setStep("configure")}
                  >
                    Back
                  </Button>
                  <Button
                    variant="hero"
                    size="lg"
                    className="flex-1"
                    onClick={() => setStep("deposit")}
                  >
                    Confirm and Generate Address
                  </Button>
                </div>
              </div>
            )}

            {/* Step: Deposit */}
            {step === "deposit" && (
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
                      <code className="font-mono text-lg md:text-xl break-all">
                        {depositAddress}
                      </code>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={copyToClipboard}
                        className="shrink-0"
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
                  onClick={() => setStep("configure")}
                >
                  New Operation
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
