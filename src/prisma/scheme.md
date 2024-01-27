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
    String type 
    DateTime createdAt 
    DateTime updatedAt 
    }
  

  "borrowings" {
    Int id "🗝️"
    DateTime borrowedAt 
    DateTime returnedAt "❓"
    DateTime deadline 
    Status status 
    DateTime createdAt 
    DateTime updatedAt 
    }
  
    "users" o|--|| "Role" : "enum:role"
    "users" o{--}o "borrowings" : "borrowings"
    "assets" o{--}o "borrowings" : "borrowings"
    "borrowings" o|--|| "Status" : "enum:status"
    "borrowings" o|--|| "users" : "user"
    "borrowings" o|--|| "assets" : "asset"
```
