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
    title: "General Operation",
    items: [
      {
        question: "What is a Bitcoin mixing service?",
        answer:
          "A Bitcoin mixer breaks the direct link between the origin address and the destination address of a transaction. This is done by mixing your funds with those of other users in a shared pool, making it much harder to trace the origin of funds.",
      },
      {
        question: "Are my funds safe during the process?",
        answer:
          "During the process, your funds pass through our liquidity pool. We don't offer absolute guarantees, but we operate with rigorous security practices. We recommend starting with smaller amounts to test the service before larger operations.",
      },
      {
        question: "Do I need to register to use the service?",
        answer:
          "No. We operate without the need for registration, email, or any personal information. You configure the operation, send the funds, and receive at the configured destinations.",
      },
      {
        question: "What is the minimum amount for mixing?",
        answer:
          "The recommended minimum is 0.001 BTC. Smaller amounts may not be processed due to network fee costs that would make the operation unfeasible.",
      },
    ],
  },
  {
    title: "Processing Time",
    items: [
      {
        question: "How long does it take to process my operation?",
        answer:
          "The total time depends on three factors: blockchain confirmations (typically 1-2 for inputs), the delay configured by you (0-24 hours), and the execution of outputs. The minimum time is about 30 minutes, but it can be significantly longer with configured delays.",
      },
      {
        question: "Why should I use longer delays?",
        answer:
          "Longer delays increase the temporal dissociation between your input and output. This makes it harder for analyses that try to correlate transactions by timing. We recommend at least 2 hours for greater privacy.",
      },
      {
        question: "What happens if the network is congested?",
        answer:
          "Congestion on the Bitcoin network can delay confirmations. In that case, the entire process may take longer. We have no control over blockchain confirmation times.",
      },
    ],
  },
  {
    title: "Limitations and Risks",
    items: [
      {
        question: "Does mixing guarantee total anonymity?",
        answer:
          "No. No mixing service can guarantee absolute anonymity. We offer an additional layer of privacy that significantly hinders tracking, but sophisticated analyses may, in some cases, make correlations. Use as part of a larger privacy strategy.",
      },
      {
        question: "Can I cancel an operation after sending funds?",
        answer:
          "No. Once funds are sent to our deposit address and confirmed on the blockchain, the operation is irreversible. That's why it's crucial to verify all destination addresses before confirming.",
      },
      {
        question: "What if I send to the wrong address?",
        answer:
          "Bitcoin transactions are irreversible. If you send funds to an incorrect address (ours or any other), there's no way to recover them. Always double-check before sending.",
      },
      {
        question: "Do you store operation data?",
        answer:
          "We maintain minimal logs necessary for service operation. These are automatically eliminated after a short period. We don't store associations between inputs and outputs after the operation is complete.",
      },
    ],
  },
  {
    title: "Safe Usage",
    items: [
      {
        question: "What best practices should I follow?",
        answer:
          "Use privacy-focused browsers (Tor), avoid reusing Bitcoin addresses, use longer delays, split large operations into smaller ones, and never share details of your operations.",
      },
      {
        question: "Should I use Tor to access the service?",
        answer:
          "We strongly recommend it. Using Tor prevents your internet provider or network observers from knowing that you're accessing a mixing service.",
      },
      {
        question: "Can I use multiple destination addresses?",
        answer:
          "Yes, you can configure up to 5 destination addresses with custom percentages. This adds an extra layer of privacy by fragmenting the output values.",
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
            <span>Frequently Asked Questions</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            FAQ
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Answers to the most common questions about our mixing service
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
            Didn't find your answer?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Get in touch through our anonymous form
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Contact Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/mixing">Start Mixing</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
