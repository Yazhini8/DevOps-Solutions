'use server';

/**
 * @fileOverview An AI-powered expert Q&A flow for DevOps and cloud computing questions.
 *
 * - expertQA - A function that takes a question and returns the most appropriate expert and their response.
 * - ExpertQAInput - The input type for the expertQA function.
 * - ExpertQAOutput - The return type for the expertQA function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExpertQAInputSchema = z.object({
  question: z.string().describe('A DevOps or cloud computing related question.'),
});
export type ExpertQAInput = z.infer<typeof ExpertQAInputSchema>;

const ExpertQAOutputSchema = z.object({
  expertName: z.string().describe('The name of the most appropriate subject matter expert.'),
  expertResponse: z.string().describe('The expert’s response to the question.'),
});
export type ExpertQAOutput = z.infer<typeof ExpertQAOutputSchema>;

export async function expertQA(input: ExpertQAInput): Promise<ExpertQAOutput> {
  return expertQAFlow(input);
}

const prompt = ai.definePrompt({
  name: 'expertQAPrompt',
  input: {schema: ExpertQAInputSchema},
  output: {schema: ExpertQAOutputSchema},
  prompt: `You are an AI assistant for SR Tech Solutions, a DevOps and cloud computing consulting company. A user has submitted the following question:

Question: {{{question}}}

You must determine the most appropriate subject matter expert within SR Tech Solutions to answer this question. SR Tech Solutions has the following experts:

- Alice - Specializes in cloud infrastructure and automation.
- Bob - Specializes in DevOps practices and CI/CD pipelines.
- Charlie - Specializes in cloud security and compliance.
- Diana - Specializes in cloud migration strategies.

Based on the question, identify the most suitable expert and provide a concise and helpful answer from their perspective.

Expert Name: {{expertName}}
Expert Response: {{expertResponse}}`,
});

const expertQAFlow = ai.defineFlow(
  {
    name: 'expertQAFlow',
    inputSchema: ExpertQAInputSchema,
    outputSchema: ExpertQAOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
