---
tags:
  - tech
---
In computer programming, lazy initialization is the tactic of delaying the creation of an object, the calculation of a value, or some other expensive process until the first time it is needed.
It is a kind of [[lazy evaluation]] that refers specifically to the instantiation of objects or other resources.

This is typically accomplished by augmenting an accessor method (or property getter) to check whether a private member, acting as a cache, has already been initialized.
If it has, it is returned straight away.
If not, a new instance is created, placed into the member variable, and returned to the caller just-in-time for its first use.

If objects have properties that are rarely used, this can improve startup speed.
Mean average program performance may be slightly worse in terms of memory (for the condition variables) and execution cycles (to check them), but the impact of object instantiation is spread in time ("[[amortized]]") rather than concentrated in the startup phase of a system, and thus median response times can be greatly improved.

In multithreaded code, access to lazy-initialized objects/state must be synchronized to guard against race conditions.

In a software [[Design Patterns|design pattern]] view, lazy initialization is often used together with a [[factory method]] pattern.
This combines three ideas:
- Using a factory method to create instances of a class ([[factory method]] pattern)
- Storing the instances in a map, and returning the *same* instance to each request for an instance with *same* parameters ([[multiton]] pattern)
- Using lazy initialization to instantiate the object the first time it is requested (lazy initialization pattern)

Lazy initialization is also used in web development as a technique for [[Lazy Loading]].
## Examples
### [[Java]]
```java
import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;

public class Program {
    public static void main(String[] args) {
        Fruit.getFruitByTypeName(FruitType.banana);
        Fruit.showAll();
        Fruit.getFruitByTypeName(FruitType.apple);
        Fruit.showAll();
        Fruit.getFruitByTypeName(FruitType.banana);
        Fruit.showAll();
    }
}

enum FruitType {
    none,
    apple,
    banana,
}

class Fruit {

    private static Map<FruitType, Fruit> types = new HashMap<>();
    
    /**
     * Using a private constructor to force the use of the factory method.
     * @param type
     */
    private Fruit(FruitType type) {
    }
    
    /**
     * Lazy Factory method, gets the Fruit instance associated with a certain
     * type. Instantiates new ones as needed.
     * @param type Any allowed fruit type, e.g. APPLE
     * @return The Fruit instance associated with that type.
     */
    public static Fruit getFruitByTypeName(FruitType type) {
        Fruit fruit;
		
        if (!types.containsKey(type)) {
            // Lazy initialisation
            fruit = new Fruit(type);
            types.put(type, fruit);
        } else {
            // OK, it's available currently
            fruit = types.get(type);
        }
        
        return fruit;
    }
    
    /**
     * Displays all entered fruits.
     */
    public static void showAll() {
        if (types.size() > 0) {
 
           System.out.println("Number of instances made = " + types.size());
            
            for (Entry<FruitType, Fruit> entry : types.entrySet()) {
                String fruit = entry.getKey().toString();
                fruit = Character.toUpperCase(fruit.charAt(0)) + fruit.substring(1);
                System.out.println(fruit);
            }
            
            System.out.println();
        }
    }
}
```

#### Output
```
Number of instances made = 1
Banana

Number of instances made = 2
Banana
Apple

Number of instances made = 2
Banana
Apple
```

### [[JavaScript]]
```js
var Fruit = (function() {
	var types = {};
	function Fruit() {};

	// count own properties in object
	function count(obj) {
	    return Object.keys(obj).length;
	}

	var _static = {
	    getFruit: function(type) {
		    if (typeof types[type] == 'undefined') {
		        types[type] = new Fruit;
		    }
		    return types[type];
	    },
	    printCurrentTypes: function () {
		    console.log('Number of instances made: ' + count(types));
			for (var type in types) {
				console.log(type);
			}
	    }
	};

	return _static;
})();

Fruit.getFruit('Apple');
Fruit.printCurrentTypes();
Fruit.getFruit('Banana');
Fruit.printCurrentTypes();
Fruit.getFruit('Apple');
Fruit.printCurrentTypes();
```
#### Output
```
Number of instances made = 1
Apple

Number of instances made = 2
Apple
Banana

Number of instances made = 2
Apple
Banana
```

### [[PHP]]
```php
<?php

class Fruit
{
    private string $type;
    private static array $types = array();

    private function __construct(string $type)
    {
        $this->type = $type;
    }

    public static function getFruit(string $type)
    {
        // Lazy initialization takes place here
        if (!isset(self::$types[$type])) {
            self::$types[$type] = new Fruit($type);
        }

        return self::$types[$type];
    }

    public static function printCurrentTypes(): void
    {
        echo 'Number of instances made: ' . count(self::$types) . "\n";
        foreach (array_keys(self::$types) as $key) {
            echo "$key\n";
        }
        echo "\n";
    }
}

Fruit::getFruit('Apple');
Fruit::printCurrentTypes();

Fruit::getFruit('Banana');
Fruit::printCurrentTypes();

Fruit::getFruit('Apple');
Fruit::printCurrentTypes();
?>
```
#### Output
```
Number of instances made = 1
Apple

Number of instances made = 2
Apple
Banana

Number of instances made = 2
Apple
Banana
```

### [[Python]]
```python
class Fruit:
    def __init__(self, item: str):
        self.item = item
    
class FruitCollection:
    def __init__(self):
        self.items = {}
    
    def get_fruit(self, item: str) -> Fruit:
        if item not in self.items:
            self.items[item] = Fruit(item)
        
        return self.items[item]

if __name__ == "__main__":
    fruits = FruitCollection()
    print(fruits.get_fruit("Apple"))
    print(fruits.get_fruit("Lime"))
```
