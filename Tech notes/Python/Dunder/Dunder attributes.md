---
tags:
  - tech
  - python
  - lists
---
- `__name__`: The name attribute. It is used to get the name of a module, class, function, method, descriptor, or generator instance.
  > Note: In the case of a module, it is the name of the module with the path stripped off **BUT** it is `"__main__"` if the module is being run directly as the main program.
- `__doc__`: The docstring attribute. It is used to get the docstring of a module, class, function, method, descriptor, or generator instance.
- `__file__`: The file attribute. It is the name of the file in which the class or function was defined. (It is rarely used.)
- `__dict__`: The dictionary attribute. It is the dictionary containing the class's or function's namespace.
- `__all__`: The all attribute. It is a list of [[Strings]] containing the names of the objects that should be imported when `from <package_or_module_name> import *` is used.
  > **Note**: This attribute is only used when `from <package_or_module_name> import *` is used. It doesn't hide any object (that is not contained in this variable but is present in the module or package) if the user [[imports]] that object explicitly. 
  > 
  > See [this](https://stackoverflow.com/questions/44834/what-does-all-mean-in-python) for more information.