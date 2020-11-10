# Pokedex - Proyecto de FrontedEndCafé

En la comunidad [FrontedEndCafé](https://frontend.cafe/) se decidió proporcionar el espacio para llevar acabo proyectos pequeños en equipo, con el objetivo que las personas que tienen poca o nula experiencia en alguna o varias tecnologías y/o trabajo en equipo puedan desarrollar estas habilidades, los equipos varian de 4 a 6 participantes en los cuales el equipo decide el proyecto que van a hacer y escoge(n) líder(es). Para desarrollar el proyecto se propuso un espacio de 2 semanas para la presentación del mismo.

A partir de esa idea, se crearon 5 equipos, 4 de los cuales se dividieron en proyectos por colores (CMYK), nosotros somos el equipo **key** (o **black**), en el cual decidimos desarrollar el proyecto de una Pokedéx que usa la API pública de Pokemón [Pokeapi](https://pokeapi.co/).

## Comenzando 🚀

El proyecto está hecho 100% en Vanilla JavaScript, HTML y CSS, no se usa ninguna librería o framework del lado de JavaScript y HTML. En CSS se usa [Font awasome](https://fontawesome.com/) para los iconos.
Si quieres empezar a colaborar en el proyecto, puedes comenzar clonando el repositorio. Primero debes tener instalado [Git](https://git-scm.com/) y crear una cuenta en [GitHub](https://github.com/), abre la consola de la computadora (para Windows te recomendamos usar Git Bash que usa Git) y configura tu nombre de usuario:

```bash
$ git config --global user.name "nombre"
```

Y tu email:
```bash
$ git config --global user.email email
```
## Trabajo colaborativo

Ahora comienza el trabajo colaborativo, a continuación se darán unas pautas para configurar tu repositorio local.

Después de tener configurado git vamos a repositorio del [proyecto](https://github.com/narvmtz/PokedexFEC) al cual vas a trabajar, en nuestro caso es este mismo. En el proyecto veras algo como en la siguiente imagen.

![Imagen de github](/img/github.PNG)

Dale click al botón de fork que esta en el margen superior derecho (en la imagen está marcado con azul). 

Se debería ver como la siguiente imagen.

![Imagen de fork](/img/fork.PNG)

Verás que en tu fork aparece tu nombre de usuario, como ves en la imagen aparece el nombre de PabloBaglie/PokedexFEC y abajo se especifica que es un fork del proyecto principal que esta en la cuenta de narvmtz. Usaremos el método de fork para que ante cualquier cambio se hagan solamente afectara al remoto de tu perfil, no el principal.
Después de hacer el fork, debemos clonar el proyecto a través del comando:

```bash
$ git clone https://github.com/<TU-USUARIO>/PokedexFEC.git
```

En donde dice <TU-USUARIO> debes cambiarlo por tu nombre de usuario de GitHub, la URL la puedes obtener como se ve en la imagen de abajo.

![Imagen de copy](/img/copy.PNG)

Ejecutando este comando tendrás una copia local idéntica del proyecto en tu computadora y podrás ver los archivos del mismo 🚀. 
En el caso del ejemplo se usa el fork de PabloBagliere, al ejecutar el comando anterior en consola aparecerá algo parecido a lo siguiente:

```bash
$ git clone https://github.com/PabloBagliere/PokedexFEC.git
Cloning into 'PokedexFEC'...
remote: Enumerating objects: 46, done.
remote: Counting objects: 100% (46/46), done.
remote: Compressing objects: 100% (34/34), done.
remote: Total 46 (delta 16), reused 38 (delta 11), pack-reused 0
Receiving objects: 100% (46/46), 10.03 KiB | 604.00 KiB/s, done.
Resolving deltas: 100% (16/16), done.
```

Después de ejecutar ese comando se habra creado la carpeta PokedexFEC (o el nombre del proyecto que hayan clonado en un caso diferente), así que tendrás que ingresar el siguiente comando para ingresar a esa carpeta:

```bash
cd PokedexFEC/
```

### Remote

A continuación configuraremos el repositorio remoto del proyecto, por si hay algún cambio en el proyecto principal puedas trabajar siempre con la ultima version. Para poderlo hacer desde la consola tendremos que ejecutar el siguiente comando.

```bash
$ git remote -v
origin    https://github.com/PabloBagliere/PokedexFEC.git (fetch)
origin    https://github.com/PabloBagliere/PokedexFEC.git (push)
```

Ahora ya tienes configurado tu repositorio remoto para poder empujar los cambios que hagas desde tu local y este se llama origin. 

 Pero también debemos añadir el repositorio remoto principal, que es donde vas a proponer cambios o agregar algún feature/fix que hagas desde tu remoto y donde todos envían los cambios (en este caso es el de narvmtz, es decir este repositorio) y le colocaremos un nombre (en este caso upstream) para diferenciarlo de tu repositorio remoto que se llama origin, para esto debes ejecutar el siguiente comando en la consola:

```bash
$ git remote add upstream https://github.com/narvmtz/PokedexFEC.git
```

Este comando lo que hace es decirle a git que añada un repositorio adicional, con un nombre cualquiera (para tenerlo en general le llamamos upstream en este caso) y le damos la URL de GitHub a la que queremos que apunte el remoto. 

Si quieres ver los remotos que tienes configurados puedes ejecutar el siguiente comando y te debe aparecer algo parecido a lo siguiente:

```bash
$ git remote -v
origin    https://github.com/PabloBagliere/PokedexFEC.git (fetch)
origin    https://github.com/PabloBagliere/PokedexFEC.git (push)
upstream  https://github.com/narvmtz/PokedexFEC.git (fetch)
upstream  https://github.com/narvmtz/PokedexFEC.git (push)
```

si en consola te aparece esto felicidades ya terminaste de configurar los remotos del proyecto, ahora veamos el tema de branch o en español ramas.

### Branch

Al ingresar en la carpeta principal del proyecto, ejecutando el siguiente comando podrás ver las ramas que tiene el proyecto:

```bash
$ git branch
  develop
* main
```

La rama con el asterisco indica que estás trabajando en esa rama actualmente (main), sin embargo puedes tener una o más ramas si hay cambios que traes desde el repositorio principal.

La forma que trabajaremos es la siguiente: se crearán ramas desde la rama develop para no trabajar directamente en la rama main, para evitar problemas de merge futuros y tener la rama main con una version funcional y develop de prueba. 
Dicho esto, tendrás que cambiarte a la rama develop con el comando`git checkout (rama)` y después crear una nueva rama `git checkout -b (rama)` (crear rama y moverte automáticamente) con el nombre que indique el feature que estes trabajando. 
En el siguiente ejemplo se crea la rama de ejemplo API para mostrar los comandos y cómo responde la consola a esos comandos.

```bash
 $ git checkout develop
 Switched to branch 'develop'
 Your branch is up to date with 'origin/develop'.
 $ git checkout -b API
Switched to a new branch 'API'
```

Después de esta intro, ya creaste tu rama y al mismo tiempo ya estas en ella listo para comenzar a codear 🥳. En este punto ya estas por transformarte en un maestro de trabajo colaborativo, ahora solo faltan los siguientes 3 puntos.

### Commit
Una vez que hayas elegido que feature modificar/realizar y hayas terminado tu sesión, debes guardar tus cambios y enviarlos a tu repositorio remoto (origin) en GitHub.

Para guardar tus cambios primero debes agregarlos mediante el comando:

```bash
$ git add .
```

Este comando agrega todos los cambios que has hecho en todos los archivos que hayas modificado. 

Luego de agregar los cambios a tu rama, debes hacer commit con una descripción breve (recomendado una oración de no más de 5 palabras) de los cambios que realizaste mediante el comando:

```bash
$ git commit -m "<cambio> agregado a <funcionalidad>"
```
Finalmente para enviar los cambios a tu repositorio remoto (origin), ejecutas el siguiente comando:

```bash
git push origin <nombreDeTuRama>
```

### Pull request
Cuando quieras proponer el cambio/agregar el feature que realizaste en la rama creada solo debes ir a tu repositorio remoto de GitHub y buscar tu rama, en la parte superior encontrarás un enlace que te permitirá crear un nuevo Pull Request al repositorio principal. 

**Nota:** Ya que estamos trabajando en la rama develop, asegúrate que la rama base a la que envías el Pull Request sea develop (por defecto la rama base es main).
Puedes consultar la [ayuda de GitHub](https://docs.github.com/es/free-pro-team@latest/desktop/contributing-and-collaborating-using-github-desktop/syncing-your-branch) si lo deseas.

### Actualizando la rama en que trabajamos

Es importante mantener la rama develop actualizada mientras trabajamos en nuestro feature para no generar futuros conflictos cuando vayamos a hacer un Pull Request. Para lograrlo solo debes ejecutar los siguientes comandos en tu consola:

```bash
$ git fetch --all
```
 
Con este comando vamos a traer los cambios que hay en todos los remotos y luego de esto puedes hacer el merge (unir la rama develop con los cambios que tienes en el local) con el comando:

```bash
git merge upstream/develop
```

Al trabajar en una rama diferente a develop no deberías tener conflictos de merge. Si estás trabajando en develop y surgen conflictos de merge puedes hacernos ping en el canal **🖤 Key** de [FrontEnd Café](discord.gg/frontendcafe) o si lo deseas puedes consultar la [Guía de ayuda de GitHub](https://docs.github.com/es/free-pro-team@latest/desktop/contributing-and-collaborating-using-github-desktop/syncing-your-branch).

## Equipo
Como lo viste más arriba, somos el equipo **Key** de FrontEnd Café, somos 6 entusiastas que nos apuntamos a sacar este proyecto adelante para aprender a trabajar en equipo de forma colaborativa al tiempo que mejoramos nuestras habilidades técnicas 💪. Puedes ver nuestros perfiles de GitHub si quieres saber un poco más de cada uno...

- [Matías](https://github.com/matijpg)

- [Pablo](https://github.com/PabloBagliere)

- [Ana](https://github.com/anita86)

- [Santiago](https://github.com/POLIBOV)

- [Naryie](https://github.com/narvmtz)

- [Cristina](https://github.com/cristigomez)

## Gracias

Por último, pero no menos importante queremos agradecerte habernos leído hasta acá y te animamos a proponer un Pull Request si te gustó el proyecto y quieres agregar algún feature o te parece que podemos mejorar en algo 🤗