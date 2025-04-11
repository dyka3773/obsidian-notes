---
tags:
  - tech
  - python
aliases:
  - Jupyter
---
A **Jupyter Notebook** is an **interactive computational environment** that enables users to **create and share documents** containing:
- Live code
- Equations ([[LaTeX]])
- Visualizations
- Narrative text ([[Markdown]])
Jupyter is widely used in **data science**, **machine learning**, **education**, and **scientific computing**, supporting over 40 programming languages, with [[Python]] being the most common.
# Core Features
## Interactive Code Execution
- Run code in cells and see results immediately below the cell.
- Ideal for iterative exploration, debugging, and data analysis.
## Rich Text Support
- Supports [[Markdown]] and [[LaTeX]].
- Enables documentation, embedded explanations, and mathematical notation.
## Data Visualization
- Seamlessly integrates with libraries like **[[Matplotlib]]**, **[[Seaborn]]**, **[[Plotly]]**, etc.
- Outputs charts, tables, and images inline.
## Extensibility and Widgets
- Supports interactive controls (e.g., sliders, buttons) using `ipywidgets`.
- Can embed [[HTML]], [[JavaScript]], and interactive maps.
# Anatomy of a Jupyter Notebook
- **Notebook File (`.ipynb`)**: [[JSON]] file format containing code, outputs, and metadata.
- **Cells**:
    - **Code Cells**: Execute source code.
    - **[[Markdown]] Cells**: Contain text and formatting.
    - **Raw Cells**: Unprocessed text for advanced use cases.
# Ecosystem and Tools
| Tool           | Description                                                                                              |
| -------------- | -------------------------------------------------------------------------------------------------------- |
| **JupyterLab** | Modern UI and [[IDEs and Editors\|IDE]]-like experience for Jupyter notebooks.                           |
| **nbconvert**  | Convert notebooks to [[HTML]], PDF, scripts.                                                             |
| **Voila**      | Turn notebooks into standalone web apps.                                                                 |
| **Kernels**    | [[Backend Development\|back-end]] engines for different languages (e.g., [[IPython]], [[Julia]], [[R]]). |
| **JupyterHub** | Multi-user Jupyter notebook server for teams or classrooms.                                              |
# Pros and Cons

## Advantages
- Combines code and explanation in one place.
- Interactive and visually rich.
- Excellent for reproducibility and communication.
- Integrates well with the [[Python]] data ecosystem.
## Limitations
- Not ideal for large-[[Scalability|scale]] application development.
- Execution order can lead to inconsistent states.
- Version control (e.g., [[Git]]) on `.ipynb` files can be messy due to [[JSON]] format.
