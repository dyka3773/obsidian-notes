---
tags:
  - tech
---
**LaTeX** (pronounced "LAY-tech" or "LAH-tech") is a **typesetting system** widely used for **scientific documents, research papers, technical writing, and academic publishing**.
Unlike WYSIWYG editors (like Microsoft Word), LaTeX uses **markup commands** to format documents, making it ideal for:
- Mathematical Equations
- Scientific Publications
- Professional Formatting
- Automated Bibliographies (via BibTeX)
- Large Document Management (Books, Theses, Reports)

# Pros & Cons
## Advantages
- High-Quality Output: Ideal for math-heavy and structured documents.
- Professional Typesetting: Handles complex formatting better than Word.
- Cross-Platform: Runs on Windows, Mac, and Linux.
- Automated Numbering & Referencing: Handles citations, equations, figures, and tables automatically.
- Open-Source & Free: No licensing costs.

## Disadvantages
- Learning Curve: Requires familiarity with commands.
- No Real-Time Visual Editing: Unlike Word, you don’t see the final document until compiled. (Even though there are some real time compilers but they are very performance heavy)
- Debugging Errors Can Be Hard: Syntax errors can be tricky.

# Basic Structure
```latex
\documentclass{article}   % Document type
\usepackage{amsmath}      % Import package for math

\begin{document}          % Start content
\title{Introduction to LaTeX}
\author{John Doe}
\date{\today}
\maketitle

\section{Introduction}
LaTeX is a powerful typesetting system for scientific writing.

\section{Mathematics}
We can write equations like this:
\begin{equation}
    E = mc^2
\end{equation}

\end{document}
```
