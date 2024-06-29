import { AzureKeyCredential, OpenAIClient } from '@azure/openai';
import { sustainabilityCategories, SustainabilityCategory } from '@/app/data/types';

const ai = new OpenAIClient(
  'https://swisshacks-aoai.openai.azure.com/',
  new AzureKeyCredential('d0b929b72ea2465fa8a744934d0bc101'),
);

const fetchCategories = async (questionPrompt: string, expectedResponseType: string) => {
  try {
    const model = 'gpt-4o';
    const messages = [
      {
        role: 'system',
        content: `you are a sustainability expert and evaluate the 3 best matching categories from this list ${getCategoriesAsCommaSeparatedString()} based on the last csr report of a company. answer only in json format: ${expectedResponseType}`,
      },
      {
        role: 'user',
        content: questionPrompt,
      },
    ];

    const completion = await ai.getChatCompletions(model, messages, { temperature: 0 });

    if (completion.choices?.length > 0) {
      const sanitizedQuestion = sanitizeAnswer(completion.choices[0]?.message?.content || '');
      console.log(sanitizedQuestion);
      return JSON.parse(sanitizedQuestion);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  return null;
};

const getCategoriesAsCommaSeparatedString = (): string => {
  return sustainabilityCategories.join(', ');
};

const sanitizeAnswer = (answerAsString: string): string => {
  const regex = /^.*(\[.*]).*$/s; // Regular expression to match everything between the first { and last }
  const match = answerAsString.match(regex);

  if (match) {
    return match[1];
  } else {
    return answerAsString;
  }
};

export const fetchSustainabilityCategories = async (
  company: string,
): Promise<SustainabilityCategory[] | null> => {
  const expectedResponseType = `["category1", "category2", "category3"]`;
  const questionPrompt = `evaluate the best categories based on the last csr report of the company ${company}`;

  return fetchCategories(questionPrompt, expectedResponseType);
};
