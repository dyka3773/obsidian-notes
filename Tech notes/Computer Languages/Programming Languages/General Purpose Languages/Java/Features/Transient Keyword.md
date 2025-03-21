---
tags:
  - tech
aliases:
  - transient
---
In [[Java]], `transient` is a **keyword** used in the context of **serialization**.
It **prevents a field from being serialized** when an object is converted into a byte stream.
- Used to mark fields that should not be saved
- Commonly used for sensitive data (e.g., passwords)
- Ignored by the serialization process

Example: Using `transient` in [[Java]]
```java
import java.io.*;

class User implements Serializable {
    private static final long serialVersionUID = 1L;

    String username;
    transient String password;  // Will not be serialized

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }
}

public class TransientExample {
    public static void main(String[] args) throws Exception {
        User user = new User("Alice", "Secret123");

        // Serialize object
        ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("user.ser"));
        oos.writeObject(user);
        oos.close();

        // Deserialize object
        ObjectInputStream ois = new ObjectInputStream(new FileInputStream("user.ser"));
        User deserializedUser = (User) ois.readObject();
        ois.close();

        System.out.println("Username: " + deserializedUser.username); // Alice
        System.out.println("Password: " + deserializedUser.password); // null (because it's transient)
    }
}
```

Output:
```text
Username: Alice  
Password: null  
```

# Why use it?
- **Security**: Prevents sensitive information (passwords, cryptographic keys) from being exposed in serialized data.
- **Efficiency**: Excludes large or non-serializable fields (like [[Databases|database]] connections, threads) from serialization.
- **Avoiding Redundant Data**: Fields that can be recalculated (e.g., cache values) don’t need to be stored.

# Important Notes
- **`transient` fields are assigned default values** when deserialized:
	- `null` for objects
	- `0` for numeric types
	- `false` for booleans
- **`static` fields are also not serialized**, so marking them `transient` is redundant.
- **Custom serialization** (`writeObject()` and `readObject()`) can be used to handle transient fields manually.
