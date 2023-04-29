
```mermaid
---
title: Diagrama de classe dos smart contracts
---
classDiagram
    note "From Duck till Zebra"
    Animal <|-- Duck
    note for Duck "can fly\ncan swim\ncan dive\ncan help in debugging"
    tokenGov <|-- Animal
    tokenGovPag <|-- Animal
    tokenGstg <|-- Animal
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    Animal: +mate()
    class tokenGov{

    }
    class Duck{
        +String beakColor
        +swim()
        +quack()
    }
    class Fish{
        -int sizeInFeet
        canEat()
    }
    class Zebra{
        +bool is_wild
        +run()
    }
```


## 

```mermaid
classDiagram
    class GovindaSystemsDAO {
        -govCoins: uint
        +createProject(project: Project): bool
        +fundProject(project: Project, amount: uint): bool
        +getProjectDetails(project: Project): string
        +redeemGovCoinsForService(client: address, service: Service): bool
    }
    class Project {
        -title: string
        -description: string
        -budget: uint
        -status: ProjectStatus
        +updateStatus(status: ProjectStatus): void
    }
    class Service {
        -title: string
        -description: string
        -priceInGovCoins: uint
        +purchase(client: address, amount: uint): bool
    }
    enum ProjectStatus {
        PENDING
        APPROVED
        IN_PROGRESS
        COMPLETED
        CANCELED
    }
    GovindaSystemsDAO "1" -- "0..*" Project: manages
    GovindaSystemsDAO "1" -- "0..*" Service: offers
```