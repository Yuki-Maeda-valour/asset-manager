```mermaid
erDiagram

        Status {
            RESERVED RESERVED
LENT LENT
AVAILABLE AVAILABLE
SUSPENDED SUSPENDED
        }
    


        Role {
            USER USER
ADMIN ADMIN
        }
    


        Type {
            PC PC
SP SP
WIFI WIFI
MONITOR MONITOR
        }
    
  "users" {
    Int id "🗝️"
    String username 
    Role role 
    DateTime createdAt 
    DateTime updatedAt 
    }
  

  "assets" {
    Int id "🗝️"
    String name 
    Type type 
    Status status 
    DateTime createdAt 
    DateTime updatedAt 
    }
  

  "borrowings" {
    Int id "🗝️"
    DateTime borrowedAt 
    DateTime returnedAt "❓"
    DateTime deadline 
    DateTime createdAt 
    DateTime updatedAt 
    }
  
    "users" o|--|| "Role" : "enum:role"
    "users" o{--}o "borrowings" : "borrowings"
    "assets" o|--|| "Type" : "enum:type"
    "assets" o|--|| "Status" : "enum:status"
    "assets" o{--}o "borrowings" : "borrowings"
    "borrowings" o|--|| "users" : "user"
    "borrowings" o|--|| "assets" : "asset"
```
