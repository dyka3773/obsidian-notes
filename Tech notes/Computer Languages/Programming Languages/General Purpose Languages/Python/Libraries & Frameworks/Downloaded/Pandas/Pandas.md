---
tags:
  - tech
  - python
---
**Pandas** is a **[[Python]] library** for **data manipulation and analysis**.
It provides **data structures** like **[[Series]]** and **[[DataFrame]]** that make working with structured data easy.
Pandas is widely used for **data cleaning, transformation, and analysis** in **data science, machine learning, and analytics**.

**Key Features of Pandas:**
- **Efficient Data Handling**: Works with tabular, time-series, and structured data.
- **Powerful Data Structures**: Uses `Series` (1D) and `DataFrame` (2D).
- **Data Cleaning & Transformation**: Handles missing data, filtering, and transformations.
- **Integration with Other Libraries**: Works with [[NumPy]], [[Matplotlib]], [[Scikit-learn]], and [[SQLAlchemy]].
- **Supports Multiple File Formats**: Reads/writes [[CSV]], Excel, [[SQL]], [[JSON]], and more.

# Useful Functions for Data Cleaning & Manipulation
## Handling Missing Data
```python
df.dropna()  # Remove rows with missing values
df.fillna(0) # Replace missing values with 0
df['Column'].fillna(df['Column'].mean())  # Fill with mean
```
## Filtering Data
```python
df[df['Age'] > 30]  # Get rows where Age > 30
```
## Sorting Data
```python
df.sort_values('Salary', ascending=False)
```
## Grouping Data
```python
df.groupby('Age').mean()
```
## Applying Functions to Columns
```python
df['Salary'] = df['Salary'].apply(lambda x: x * 1.1)  # Increase salary by 10%
```
