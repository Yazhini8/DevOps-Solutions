"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { expertQA, type ExpertQAOutput } from "@/ai/flows/expert-q-and-a";
import { Loader2, User, Sparkles } from "lucide-react";

export function ExpertQa() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState<ExpertQAOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    setResponse(null);

    try {
      const result = await expertQA({ question });
      setResponse(result);
    } catch (error) {
      console.error("Failed to get expert response:", error);
      toast({
        title: "Error",
        description: "There was an issue getting a response from our expert. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const getAvatarForExpert = (expertName?: string) => {
    const seed = expertName?.toLowerCase() || 'default';
    return `https://picsum.photos/seed/${seed}/100/100`;
  };

  return (
    <section id="expert-qa" className="py-12 sm:py-24 bg-secondary">
      <div className="container px-4 md:px-6">
        <Card className="max-w-3xl mx-auto bg-background">
          <CardHeader className="text-center">
            <div className="inline-flex items-center justify-center text-primary mb-2">
                <Sparkles className="w-8 h-8" />
            </div>
            <CardTitle className="font-headline text-3xl text-primary">Ask Our AI Expert</CardTitle>
            <CardDescription className="text-lg">
              Have a question about DevOps or the cloud? Get an instant answer from our AI-powered expert.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Textarea
                placeholder="e.g., 'What are the benefits of using Kubernetes?'"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                rows={4}
                disabled={isLoading}
              />
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Getting Answer...
                  </>
                ) : (
                  "Ask Question"
                )}
              </Button>
            </form>

            {response && (
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarFallback>
                        <User/>
                    </AvatarFallback>
                  </Avatar>
                  <div className="rounded-lg bg-secondary p-4 flex-1">
                    <p className="font-semibold text-primary">You asked:</p>
                    <p className="text-foreground/80">{question}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarImage src={getAvatarForExpert(response.expertName)} alt={response.expertName} />
                    <AvatarFallback>{response.expertName?.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="rounded-lg bg-primary/10 p-4 flex-1">
                    <p className="font-semibold text-primary">
                      {response.expertName} answers:
                    </p>
                    <p className="text-foreground/80 whitespace-pre-wrap">{response.expertResponse}</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
