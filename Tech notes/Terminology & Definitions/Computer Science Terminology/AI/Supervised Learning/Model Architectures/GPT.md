---
tags:
  - tech
  - AI
aliases:
  - Generative Pre-trained Transformer
  - GPTs
---
**GPT** stands for **Generative Pre-trained Transformer**.
It is a family of language models developed by **OpenAI** that use deep learning techniques, specifically the **[[Transformer]]** architecture, to generate human-like text based on input prompts.

GPT models are trained in two main phases:
- **Pre-training**: Learning from vast amounts of publicly available text to predict the next word in a sentence.
- **Fine-tuning** (optional): Adapting the model to specific tasks or domains with additional targeted data and supervision.
# Core Concepts
## Transformer Architecture
The backbone of GPT, introduced in the paper "Attention is All You Need" (2017).  
Key elements:
- **Self-attention mechanism**: Helps the model focus on different parts of input text when making predictions.
- **Layered structure**: Multiple attention layers stacked to build understanding from simple to complex patterns.
## Unidirectional (Causal) Attention
GPT uses attention in a way that each word can only "see" previous words during training, ensuring natural left-to-right text generation.
## Tokenization
Text is broken into smaller units called [[tokens]], which are processed by the model.  
Example: `"ChatGPT"` might be tokenized into `"Chat"`, `"G"`, `"PT"`.
# Typical Applications
- **Text generation**: Writing essays, articles, summaries.
- **Conversation agents**: Chatbots, customer support, virtual assistants.
- **Code generation**: Programming help (e.g., GitHub Copilot).
- **Translation**: Translating between languages.
- **Search and retrieval**: Semantic search, question answering.
# Limitations
- **Hallucination**: May generate text that sounds correct but is factually wrong.
- **Bias**: Can inherit biases present in training data.
- **Resource-intensive**: Requires significant computational resources for training and serving.
- **Lack of true reasoning or understanding**: Mimics reasoning but does not "think" or "understand" like a human.
