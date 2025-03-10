---
tags:
  - tech
---
A _value holder_ is a generic object that handles the [[Lazy Loading]] behavior, and appears in place of the object's data fields:
```csharp
private ValueHolder<Widget> valueHolder;

public Widget MyWidget => valueHolder.GetValue();
```
