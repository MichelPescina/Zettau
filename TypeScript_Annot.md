# Typescript
Typescript es como una capa mas arriba de Javascript que incluye tipos, tambien pppuede inferir tipos de declaraciones.
## Definir tipos

Aunque TS puede inferir algunso tipos, algunos patrones de diseño de programacion hace que sea dificil inferir tios. Para definir tipos en TS se hace como estructura de C, y despues se utiliza así:
```Typescript
interface User {
  name: string;
  id: number;
}

const user : User = {
    name: "Mariano",
    id: 1718,
}
```
Y si utiliza propiedades o tipos de datos incorrectos manda un mensaje de error.
Tambien se puede utilizar la declaración de tipos con clases solo que es un poco más rara.

```Typescript
interface User {
  name: string;
  id: number;
}
 
class UserAccount {
  name: string;
  id: number;
 
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
 
const user: User = new UserAccount("Murphy", 1)
```

Tambien se puede para anotar funciones y parámetros
```Typescript
function deleteUser(user: User) {
  // ...
}
 
function getAdminUser(): User {
  //...
}
```
### Uniones
Te permiten definir que una vaariable es de uno de varios tipos, se utiliza el simbolo |

type Flag = true | false;
type WindowStates = 'open' | 'closed' | 'window';

function getLength(obj: string | string[]) {
  return obj.length;
}

