# Pokedex - Proyecto de FrontedEndCafé

En la comunidad [FrontedEndCafé](https://frontend.cafe/) se decidio llevar acabo proyectos chicos en grupos reducidos con el objetivo de que la gente que tiene poca experiencia o nula en algunas tecnologias o en trabajo en equipo trabaje puedan aprender en grupos reducidos, los grupos varian entre 4, 5, o 6 participante donde los misma entre ellos tienen que decidir que van ha hacer y quien estaria de lider. Los proyectos se dieron una duracion de 2 semanas en la cual se tiene que llegar a terminar el mismo.

Con eso en mente se llegaron a crear 4 de los cuales se dividieron en proyectos por colores, nosotros somos el grupo **black**, que en el mismo decidimos llevar acabo el proyecto de una pokedex con la api publica de pokemon [Pokeapi](https://pokeapi.co/)

## Comenzando 🚀

El proyecto esta echo 100% puro javascrpit, html y css no hay ninguna libreria o frameworks del lado de javascprit y html. En css se usa [Font awasome](https://fontawesome.com/) por la razon de los iconos que se van a usar.
asi que por lo tanto con tan solo clonar el proyecto tendrias ya echo el mismo.

```bash
 git clone https://github.com/narvmtz/PokedexFEC.git
 cd PokedexFEC
```

Con esos comandos ya tendrias el proyecto el tu computadora y podrias habriendo el index.html ver el proyecto completo.

## Trabajo colaborativo

Para llevar acabo el trabajo colaborativo y la participacion de todos los integrantes del grupo se explicara aca como se lleva acabo la misma.

Antes que nada los participante tienen que tener istalado [Git](https://git-scm.com/) y una cuenta en [GitHub](https://github.com/) al ya tener istaldo git y cuenta habriran la consola de la computadora en caso de estar en Windows se tendra que istalar Git Bash que viene con Git para usar los siguientes comandos.

```bash
git config --global user.name "nombre"
git config --global user.email email
```

Deben cambiar nombre por tu nombre que quieres tener en git y email por tu email. Esto es util ya que si haces algun cambio las personas podran ver quien lo cambio.

Despues de tener configura git vamos a GitHub al [proyecto](https://github.com/narvmtz/PokedexFEC) al cual vas a trabajar en nuestro caso es este mismo. En el proyecto veras algo como en la imagen de abajo.

![Imagen de github](/img/github.PNG)

En la misma tendras que apretar el boton de fork que esta al marge superior derecho, en la imagen esta marcado con azul. Al apretar se llevaba a tu cuenta de github pero con un fork echo del proyecto. Se deberia de ver como la imagen siguiente.

![Imagen de fork](/img/fork.PNG)

Veran que en su cara aparece el nombre de usuario de ustedes, si ven la imagen aparece el nombre de PabloBaglie/PokedexFEC y abajo se espeficia que es un fork del proyecto principal que esta en la cuenta de narvmtz. Usaremos el metodo de fork para que ante cualquier cambio se hagan solamente afectara al remoto de su perfil y no el principal.
Despues de tener su fork tendremos que bajarnos el proyecto que tenemos el mismo se hace atraves del comando.

```bash
git clone [URL]
```

En donde dice [URL] tiene que ser cambiado por el de su fork que se saca desde el boton code en verde, como se ve en la imagen de abajo.

![Imagen de copy](/img/copy.PNG)

En el cazo del ejemplo que se lleba acabo se usara el fork de PabloBagliere al ejecutarlo en consola le deberia de aparecer lo siguiente.

```bash
git clone https://github.com/PabloBagliere/PokedexFEC.git
Cloning into 'PokedexFEC'...
remote: Enumerating objects: 46, done.
remote: Counting objects: 100% (46/46), done.
remote: Compressing objects: 100% (34/34), done.
remote: Total 46 (delta 16), reused 38 (delta 11), pack-reused 0
Receiving objects: 100% (46/46), 10.03 KiB | 604.00 KiB/s, done.
Resolving deltas: 100% (16/16), done.
```

Despues de ejecutar ese comando se le habra creado la carpeta PokedexFEC o el nombre del proyecto que hayan clonado, asi que tendran que ingresar el siguente comando para entrar a esa carpeta

```bash
cd PokedexFEC/
```

### Remote

A continuacion despues de entrar a la carpeta configuraremos el remote del proyecto por si hay algun cambio en el proyecto principal puedas estar trabajando siempre con la ultima version. Para poder hacer eso desde la consola tendremos que hacer estos comandos.

```bash
git remote -v
origin    https://github.com/PabloBagliere/PokedexFEC.git (fetch)
origin    https://github.com/PabloBagliere/PokedexFEC.git (push)
```

El mismo te contestaria con esto cambiando el usuario por el de ustedes de github, pero como veran no aparece el principal de narvmtz y ademas eso acompañado a que esta como origin el de ustedes pero en este caso el origin es el de narvmtz, asi que antes de todo nos pondremos a cambiar el origin a fork. Para hacer eso tendremos que hacer el siguiente comando.

```bash
git remote rename origin fork
```

Al hacer este comando estamos cambiando el nombre del remote y si ahora ejecutamos devuelta el comando anterior te tendria que aparecer algo como lo sigueinte

```bash
git remote -v
fork    https://github.com/PabloBagliere/PokedexFEC.git (fetch)
fork    https://github.com/PabloBagliere/PokedexFEC.git (push)
```

Si llegamos a esto estamos por buen camino, ahora lo siguente es agregar el verdadero origon que es el de narvmtz para hacer esto se tiene que ejecutar el siguente comando

```bash
git remote add origin https://github.com/narvmtz/PokedexFEC.git
```

La forma mas facil de hacerlo es cambiando tu username por el del proyecto original en este caso por el de narvmtz. Despues de esto ejecutando devuelta y por ultima vez el comando anterior y se tendria que ver lo sigueinte.

```bash
git remote -v
fork    https://github.com/PabloBagliere/PokedexFEC.git (fetch)
fork    https://github.com/PabloBagliere/PokedexFEC.git (push)
origin  https://github.com/narvmtz/PokedexFEC.git (fetch)
origin  https://github.com/narvmtz/PokedexFEC.git (push)
```

si en consola te aparece esto felicidades ya terminaste de configurar los remotos del proyecto ahora toca el tema de branch o en español ramas.

### Branch

Al ingresar a la carpeta le aparecera de que estan parado en la rama main, para ver todas las ramas del proyecto podran usando el comando siguiente y le tendrian que aparecer estas ramas o mas.

```bash
git branch
  develop
* main
```

En la manara que trabajamos es que se crearan ramas desde la de develop para no trabajar desde la main por razon de evitar problema a futuro y tener la rama main con una version funcial. Asi que se tendran que mover a la rama develop `git checkout (rama)` (comando para cambiar de rama) y despues crear una nueva rama `git checkout -b (rama)` (crear rama y moverto automaticamente) de lo que ustedes esten trabajando. En el siguente ejemplo se hara creando la rama de ejemplo API para mostrar los comandos y como te contesta la consola a esos comandos.

```bash
 $ git checkout develop
 Switched to branch 'develop'
 Your branch is up to date with 'fork/develop'.
 $ git checkout -b API
Switched to a new branch 'API'
```

Despues de esto sigunifica que usted ya creo su rama para trabajar y al mismo tiempo ya esta en esa para trabajar. A este punto ya estas por trasformate en un maestro de trabajo colaborativo solamente faltan los siguientes 3 puntos.

### Commit

### Pull request

### Pull

## Equipo

## Gracias
