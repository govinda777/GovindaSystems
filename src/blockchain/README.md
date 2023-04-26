
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