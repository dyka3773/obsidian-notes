---
tags:
  - tech
aliases:
  - Natural Language Processing
---
**Natural Language Processing (NLP)** is a field at the intersection of **computer science, linguistics, and artificial intelligence** that focuses on enabling machines to **understand, interpret, and generate human language**.

NLP powers applications like **chatbots**, **search engines**, **language translation**, **voice assistants**, and **text analytics**.

# Core Goals of NLP
- **Understanding language**: Parsing and extracting meaning from text or speech.
- **Generating language**: Producing human-like text or speech.
- **Interpreting context**: Recognizing tone, sentiment, and intent.
- **Structuring [[unstructured data]]**: Turning natural language into structured formats for computation.
# Key Components
| Component                          | Description                                            |
| ---------------------------------- | ------------------------------------------------------ |
| **Tokenization**                   | Breaking text into words, sentences, or symbols.       |
| **Part-of-Speech Tagging**         | Identifying grammatical roles (noun, verb, etc.).      |
| **Named Entity Recognition (NER)** | Extracting proper names (people, places, dates, etc.). |
| **Parsing**                        | Analyzing grammatical structure (e.g. syntax trees).   |
| **Lemmatization/[[Stemming]]**     | Reducing words to their root or base forms.            |
| **[[Sentiment Analysis]]**         | Detecting emotional tone in text.                      |
| **Text Classification**            | Assigning categories (e.g. spam vs. not spam).         |
| **Machine Translation**            | Translating text from one language to another.         |
| **Text Generation**                | Producing coherent, human-like text.                   |
# Approaches to NLP
## Rule-Based Systems
- Use handcrafted linguistic rules.
- Effective for narrow domains but limited [[scalability]].
## Statistical NLP
- Based on probability and statistics (e.g. [[Naive Bayes]], [[HMM]]s).
- Relies on annotated datasets and corpus frequency.
## Machine Learning-Based NLP
- Uses algorithms to learn patterns from data (e.g. [[SVM]], [[decision trees]]).
- Requires feature engineering.
## Deep Learning and Transformers
- Uses neural networks (especially [[LSTM]]s, [[GRU]]s, [[Transformers]]).
- **Transformers** like **[[BERT]]**, **[[GPT]]**, and **[[T5]]** dominate modern NLP tasks.
- Enables zero-shot and few-shot learning.
# Popular NLP Libraries and Tools
| Library                         | Language   | Use                             |
| ------------------------------- | ---------- | ------------------------------- |
| **[[spaCy]]**                   | [[Python]] | Fast and efficient NLP pipeline |
| **NLTK**                        | [[Python]] | Academic, linguistic-focused    |
| **Transformers (Hugging Face)** | [[Python]] | Pre-trained models and training |
| **Stanza**                      | [[Python]] | Stanford NLP toolkit            |
| **OpenNLP**                     | [[Java]]   | Tokenization, NER, parsing      |
| **CoreNLP**                     | [[Java]]   | Deep linguistic analysis        |
# Challenges in NLP
- **Ambiguity**: Words and sentences can have multiple meanings.
- **Context dependence**: Meaning can vary based on surrounding text.
- **Low-resource languages**: Lack of data for many world languages.
- **Bias and fairness**: NLP systems can reflect societal biases.
- **[[Scalability]]**: Processing large-[[Scalability|scale]] corpora efficiently.
