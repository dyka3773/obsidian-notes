---
tags:
  - tech
  - todo
---
A **DataFrame** is a table-like structure with rows and columns (like an Excel sheet).

```python
# Creating a DataFrame
data = {
    'Name': ['Alice', 'Bob', 'Charlie'],
    'Age': [25, 30, 35],
    'Salary': [50000, 60000, 70000]
}
df = pd.DataFrame(data)
print(df)
```

## Accessing Data
```python
print(df['Name'])   # Access a column
print(df.iloc[1])   # Access a row by index
print(df.loc[1, 'Age'])  # Access specific value
```

- [ ] TODO: Add more details here