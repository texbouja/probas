var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-objectifs",
  "level": "1",
  "url": "sec-objectifs.html",
  "type": "Section",
  "number": "1.1",
  "title": "Objectifs d’apprentissage",
  "body": " Objectifs d'apprentissage  À la fin de ce chapitre, vous devriez être capable de :     de construire un modèle qui correspond à une expérience aléatoire ;    calculer la probabilité d'un événement dans l'espace construit ;    utiliser un modèle pour des calculs avancés     "
},
{
  "id": "sec-tribu",
  "level": "1",
  "url": "sec-tribu.html",
  "type": "Section",
  "number": "1.2",
  "title": "Tribus",
  "body": " Tribus  Dans tout le chapitre désignera un ensemble non vide.    On appelle tribu de tout ensemble de parties de tel que :   ;  si alors ;  si est une suite d'éléments de alors ;  Si est une tribu de alors le couple est dit un espace probabilisable. Tout élément de est dit un événement de l'espace .     Si est une tribu de alors    ;    si est une suite d'éléments de alors .           est une tribu de . C'est la plus petite tribu de .     est une tribu de . C'est la plus grande tribu de .    Si est une partie de alors est une tribu de . C'est la plus petite tribu de contenant .          Si est une famille de tribus de alors est une tribu de .    Soit un ensemble de parties de . L'intersection de toutes les tribus de contenant est une tribu de . Elle est appelée la tribu engendrée par . On la notera .        La tribu engendrée par l'ensemble des segments de est appelée la tribu de Borel de . On la note .        Soient et deux ensembles de parties de . Si alors .    Tout intervalle de peut être écrit comme la réunion d'une suite de segments. La tribu de Borel de contient donc tous les intervalles de . Comme tout ouvert de est une union au plus dénombrable d'intervalles ouverts, la tribu de Borel de contient tous les ouverts de . Elle contient donc aussi tous les fermés de .    En général si est un espace vectoriel normé de dimension finie alors la tribu de Borel de , notée est par définition la tribu engendrée par les boules fermées de . Elle contient alors tous les ouverts et tous les fermés de et est de ce fait indépendante de la norme choisie sur .        Soit un ensemble au plus dénombrable de parties de qui forment une partition de . Alors     Posons et montrons que est une tribu de .   Comme alors .    Si alors .    Soit est une suite d'éléments de et posons pour tout , alors .    est donc bien une tribu de . Elle contient et toute tribu qui contient tous les ensembles contient tous les éléments de . C'est donc la plus petite tribu de contenant . Soit .      Si l'ensemble est au plus dénombrable alors Autrement dit la seule tribu de qui contient tous les singletons de est .     Si est infini non dénombrable alors la tribu engendrée par les singletons de est définie par la condition En particulier toute tribu de qui contient tous les singletons de contient et donc contient toutes la parties dénombrables de .  C'est le cas par exemple de la tribu de Borel de tout espace vectoriel normé de dimension finie (les singletons sont des boules fermées).    (tribu induite)   Soit une tribu de . Pour toute élément de , l'ensemble est une tribu de . On l'appelle la tribu induite par sur .    "
},
{
  "id": "def-tribu",
  "level": "2",
  "url": "sec-tribu.html#def-tribu",
  "type": "Définition",
  "number": "1.2.1",
  "title": "",
  "body": "  On appelle tribu de tout ensemble de parties de tel que :   ;  si alors ;  si est une suite d'éléments de alors ;  Si est une tribu de alors le couple est dit un espace probabilisable. Tout élément de est dit un événement de l'espace .   "
},
{
  "id": "sec-tribu-4",
  "level": "2",
  "url": "sec-tribu.html#sec-tribu-4",
  "type": "Remarque",
  "number": "1.2.2",
  "title": "",
  "body": " Si est une tribu de alors    ;    si est une suite d'éléments de alors .     "
},
{
  "id": "sec-tribu-5",
  "level": "2",
  "url": "sec-tribu.html#sec-tribu-5",
  "type": "Exemple",
  "number": "1.2.3",
  "title": "",
  "body": "     est une tribu de . C'est la plus petite tribu de .     est une tribu de . C'est la plus grande tribu de .    Si est une partie de alors est une tribu de . C'est la plus petite tribu de contenant .     "
},
{
  "id": "sec-tribu-6",
  "level": "2",
  "url": "sec-tribu.html#sec-tribu-6",
  "type": "Proposition",
  "number": "1.2.4",
  "title": "",
  "body": "    Si est une famille de tribus de alors est une tribu de .    Soit un ensemble de parties de . L'intersection de toutes les tribus de contenant est une tribu de . Elle est appelée la tribu engendrée par . On la notera .     "
},
{
  "id": "def-tborel",
  "level": "2",
  "url": "sec-tribu.html#def-tborel",
  "type": "Définition",
  "number": "1.2.5",
  "title": "",
  "body": "  La tribu engendrée par l'ensemble des segments de est appelée la tribu de Borel de . On la note .   "
},
{
  "id": "sec-tribu-8",
  "level": "2",
  "url": "sec-tribu.html#sec-tribu-8",
  "type": "Remarque",
  "number": "1.2.6",
  "title": "",
  "body": "    Soient et deux ensembles de parties de . Si alors .    Tout intervalle de peut être écrit comme la réunion d'une suite de segments. La tribu de Borel de contient donc tous les intervalles de . Comme tout ouvert de est une union au plus dénombrable d'intervalles ouverts, la tribu de Borel de contient tous les ouverts de . Elle contient donc aussi tous les fermés de .    En général si est un espace vectoriel normé de dimension finie alors la tribu de Borel de , notée est par définition la tribu engendrée par les boules fermées de . Elle contient alors tous les ouverts et tous les fermés de et est de ce fait indépendante de la norme choisie sur .     "
},
{
  "id": "prop-sigmatrib",
  "level": "2",
  "url": "sec-tribu.html#prop-sigmatrib",
  "type": "Proposition",
  "number": "1.2.7",
  "title": "",
  "body": "  Soit un ensemble au plus dénombrable de parties de qui forment une partition de . Alors     Posons et montrons que est une tribu de .   Comme alors .    Si alors .    Soit est une suite d'éléments de et posons pour tout , alors .    est donc bien une tribu de . Elle contient et toute tribu qui contient tous les ensembles contient tous les éléments de . C'est donc la plus petite tribu de contenant . Soit .   "
},
{
  "id": "prop-tribdisc",
  "level": "2",
  "url": "sec-tribu.html#prop-tribdisc",
  "type": "Corollaire",
  "number": "1.2.8",
  "title": "",
  "body": "  Si l'ensemble est au plus dénombrable alors Autrement dit la seule tribu de qui contient tous les singletons de est .   "
},
{
  "id": "sec-tribu-11",
  "level": "2",
  "url": "sec-tribu.html#sec-tribu-11",
  "type": "Remarque",
  "number": "1.2.9",
  "title": "",
  "body": " Si est infini non dénombrable alors la tribu engendrée par les singletons de est définie par la condition En particulier toute tribu de qui contient tous les singletons de contient et donc contient toutes la parties dénombrables de .  C'est le cas par exemple de la tribu de Borel de tout espace vectoriel normé de dimension finie (les singletons sont des boules fermées).  "
},
{
  "id": "sec-tribu-12",
  "level": "2",
  "url": "sec-tribu.html#sec-tribu-12",
  "type": "Proposition",
  "number": "1.2.10",
  "title": "(tribu induite).",
  "body": " (tribu induite)   Soit une tribu de . Pour toute élément de , l'ensemble est une tribu de . On l'appelle la tribu induite par sur .   "
},
{
  "id": "sec-probabilite",
  "level": "1",
  "url": "sec-probabilite.html",
  "type": "Section",
  "number": "1.3",
  "title": "Probabilités",
  "body": " Probabilités   Dans toute cette section, désignera un espace probabilisable.     On appelle probabilité de l'espace toute application telle que :    ;    si est une suite d'éléments de deux à deux disjoints alors .   Si est un probabilité de alors le triplet est dit un espace probabilisé.     Expérimentalement, est une approximation de la fréquence de réalisation de l'événement quand on répète l'expérience un grand nombre de fois :  étant le nombre de fois où l'événement se réalise quand on répète l'expérience aléatoire fois, pour très grand.    Dans la définition précédente, on a utilisé la notation pour désigner la somme de la série que celle-ci soit convergente ou non avec la convention que la somme d'une série divergente à termes positifs est . Ce qui pose évidemment un problème de consistence puisque est sensé être dans l'intervalle .  En fait avec les deux axiomes de la définition, la famille est toujours sommable et sa somme est dans . Voilà comment le justifier :   En posant pour tout , le deuxième axiome aboutit à .    Si sont des événements deux à deux disjoints en posant pour tout , le deuxième axiome fournit .    Soit une suite d'éléments de deux à deux disjoints. On a alors pour tout  La série à termes réels positifs est donc convergente et sa somme est dans .        Soit une probabilité sur . Alors :    ;     pour tout ;    Si alors et pour tout ;     pour tout ;     pour toute suite d'éléments de .     si est une famille au plus dénombrable d'éléments deux à deux disjoints de .       Les propriétés 1, 2 et 3 sont des conséquences immédiates des axiomes de la définition de probabilité et de la remarque précédente.   Soit une suite d'éléments de et posons et pour tout . Les sont deux à deux disjoints et avec pour tout . On a donc .    Soit une famille au plus dénombrable d'éléments de deux à deux disjoints. Si est fini alors c'est une conséquance de la remarque précédente. Si est infini alors il existe une bijection entre et et il suffit de poser pour tout pour conclure grâce au théorème de permutation des termes pour les familles sommables.        (de continuité monotone)      Soit une suite croissante d'éléments de . Alors .    Soit une suite décroissante d'éléments de . Alors .          On pose et pour tout . Les événements sont deux à deux disjoints et . On a donc     On suppose que est décroissante. Alors est croissante et on peut ainsi écrire          Soit une suite quelconque d'éléments de . Alors            Pour le premier point on pose pour tout .La suite et croissante et . On applique alors la formule des probabilites continues.  Pour le second on pose . La suite est décroissante et on peut appliquer le théorème de continuité monotone sachant que .      On appelle système complet d'événements (SCE) de toute famille au plus dénombrables d'éléments qui forme une partition de .     (exemples courants de SCE)      Pour tout événement , est un SCE de .    Si est au plus dénombrable, alors est un SCE de .    SCE généré par une variable aléatoire discrète (important)  si est une application définie sur telle que soit au plus dénombrable et pour tout alors est un SCE de .        (Formule des probabilités totales)   Soit un SCE de . Alors pour tout , on a         Ce résultat reste valable si les événements sont deux à deux disjoints, sans former une partition de , à condition que     Cette formule est extrêmement utile. Elle stipule que si on sait calculer les probabilités des événements d'un SCE alors on peut calculer la probabilité de n'importe quel événement.       (exemples génériques d'utilisation de la formule des probabilités totales)     si on fixe un événement alors     Si sont des événements quelconques alors     Le théorème suivant donne une application importante de la formule des probabilités totales.        On suppose que est au plus dénombrable et on le munit de la tribu .   Soit une probabilité de . Pour tout , on a  est entièrement détérminée par les probabilités des singletons .    Soit une famille de nombres réels positifs de somme . Alors il existe une unique probabilité sur telle que         Si est au plus dénombrable alors pour toute famille sommable de nombre réels positifs de somme , on peut définir une probabilté sur en posant Cette remarque peut avoir des applications analytiques intéressantes même dans des cas où la probabilité ne correspond pas réellement à une expérience aléatoire.     On considère un événemnt de probabilité non nulle. L'application définie sur par est une probabilité de . La probabilité est aussi notée et on l'appelle probailité de sachant .    On a bien et pour toute suite d'éléments de deux à deux disjoints, on a     Justification de la définition  la probabilité de « sachant » est la probabilité de réalisation d'un résultat favorable à quand on ne retient que les résultats favorables à . C'est une approximation du rapport des fréquences de réalisation des événements et dans une série d'expériences. . D'où la définition         Si alors par convention, pour tout , . Ce choix s'explique par le fait que tout se passe comme si l'événement n'avait pas eu lieu.  Avec cette convention on peut toujours écrire     Sachant que est une probabilité on peut lui appliquer toutes propriétés vues précédemment. Par exemple        On parle de «probabilité de sachant », jamais de «l'événement» qui n'a pas de sens en théorie des probabilités.     Soit un SCE de . Alors      (Formules de Bayes)      Soient et deux événements de probabilités non nulles. Alors     Soit un SCE de et un événement de probabilité non nulle. Alors pour tout , on a         (générique d'utilisation de la formule de Bayes)  Une chaine de production industrielle contient machines identiques mais avec des taux de production de pièces défectueuses différents. Le taux pour la machine numéro est .  On prélève une pièce au hasard parmi un lot de pièces produite par la chaîne et on constate qu'elle est défectueuse. Quelle est la probabilité que cette pièce provienne de la machine numéro ?   Si on note l'événement «la pièce est défectueuse» et l'événement «la pièce provient de la machine numéro » alors on cherche . Celle-ci est donnée par la formule de Bayes : car et pour tout .    "
},
{
  "id": "sec-probabilite-2",
  "level": "2",
  "url": "sec-probabilite.html#sec-probabilite-2",
  "type": "Note",
  "number": "1.3.1",
  "title": "",
  "body": " Dans toute cette section, désignera un espace probabilisable.  "
},
{
  "id": "def-probabilite",
  "level": "2",
  "url": "sec-probabilite.html#def-probabilite",
  "type": "Définition",
  "number": "1.3.2",
  "title": "",
  "body": "  On appelle probabilité de l'espace toute application telle que :    ;    si est une suite d'éléments de deux à deux disjoints alors .   Si est un probabilité de alors le triplet est dit un espace probabilisé.   "
},
{
  "id": "sec-probabilite-4",
  "level": "2",
  "url": "sec-probabilite.html#sec-probabilite-4",
  "type": "Explication",
  "number": "1.3.1",
  "title": "",
  "body": " Expérimentalement, est une approximation de la fréquence de réalisation de l'événement quand on répète l'expérience un grand nombre de fois :  étant le nombre de fois où l'événement se réalise quand on répète l'expérience aléatoire fois, pour très grand.  "
},
{
  "id": "sec-probabilite-5",
  "level": "2",
  "url": "sec-probabilite.html#sec-probabilite-5",
  "type": "Remarque",
  "number": "1.3.3",
  "title": "",
  "body": " Dans la définition précédente, on a utilisé la notation pour désigner la somme de la série que celle-ci soit convergente ou non avec la convention que la somme d'une série divergente à termes positifs est . Ce qui pose évidemment un problème de consistence puisque est sensé être dans l'intervalle .  En fait avec les deux axiomes de la définition, la famille est toujours sommable et sa somme est dans . Voilà comment le justifier :   En posant pour tout , le deuxième axiome aboutit à .    Si sont des événements deux à deux disjoints en posant pour tout , le deuxième axiome fournit .    Soit une suite d'éléments de deux à deux disjoints. On a alors pour tout  La série à termes réels positifs est donc convergente et sa somme est dans .     "
},
{
  "id": "prop-",
  "level": "2",
  "url": "sec-probabilite.html#prop-",
  "type": "Proposition",
  "number": "1.3.4",
  "title": "",
  "body": "  Soit une probabilité sur . Alors :    ;     pour tout ;    Si alors et pour tout ;     pour tout ;     pour toute suite d'éléments de .     si est une famille au plus dénombrable d'éléments deux à deux disjoints de .       Les propriétés 1, 2 et 3 sont des conséquences immédiates des axiomes de la définition de probabilité et de la remarque précédente.   Soit une suite d'éléments de et posons et pour tout . Les sont deux à deux disjoints et avec pour tout . On a donc .    Soit une famille au plus dénombrable d'éléments de deux à deux disjoints. Si est fini alors c'est une conséquance de la remarque précédente. Si est infini alors il existe une bijection entre et et il suffit de poser pour tout pour conclure grâce au théorème de permutation des termes pour les familles sommables.      "
},
{
  "id": "thm-contmono",
  "level": "2",
  "url": "sec-probabilite.html#thm-contmono",
  "type": "Théorème",
  "number": "1.3.5",
  "title": "(de continuité monotone).",
  "body": " (de continuité monotone)      Soit une suite croissante d'éléments de . Alors .    Soit une suite décroissante d'éléments de . Alors .          On pose et pour tout . Les événements sont deux à deux disjoints et . On a donc     On suppose que est décroissante. Alors est croissante et on peut ainsi écrire       "
},
{
  "id": "cor-contmono",
  "level": "2",
  "url": "sec-probabilite.html#cor-contmono",
  "type": "Corollaire",
  "number": "1.3.6",
  "title": "",
  "body": "  Soit une suite quelconque d'éléments de . Alors            Pour le premier point on pose pour tout .La suite et croissante et . On applique alors la formule des probabilites continues.  Pour le second on pose . La suite est décroissante et on peut appliquer le théorème de continuité monotone sachant que .   "
},
{
  "id": "def-sce",
  "level": "2",
  "url": "sec-probabilite.html#def-sce",
  "type": "Définition",
  "number": "1.3.7",
  "title": "",
  "body": "  On appelle système complet d'événements (SCE) de toute famille au plus dénombrables d'éléments qui forme une partition de .   "
},
{
  "id": "sec-probabilite-10",
  "level": "2",
  "url": "sec-probabilite.html#sec-probabilite-10",
  "type": "Exemple",
  "number": "1.3.8",
  "title": "(exemples courants de SCE).",
  "body": " (exemples courants de SCE)      Pour tout événement , est un SCE de .    Si est au plus dénombrable, alors est un SCE de .    SCE généré par une variable aléatoire discrète (important)  si est une application définie sur telle que soit au plus dénombrable et pour tout alors est un SCE de .      "
},
{
  "id": "prop-probatotale",
  "level": "2",
  "url": "sec-probabilite.html#prop-probatotale",
  "type": "Théorème",
  "number": "1.3.9",
  "title": "(Formule des probabilités totales).",
  "body": " (Formule des probabilités totales)   Soit un SCE de . Alors pour tout , on a    "
},
{
  "id": "sec-probabilite-12",
  "level": "2",
  "url": "sec-probabilite.html#sec-probabilite-12",
  "type": "Remarque",
  "number": "1.3.10",
  "title": "",
  "body": "    Ce résultat reste valable si les événements sont deux à deux disjoints, sans former une partition de , à condition que     Cette formule est extrêmement utile. Elle stipule que si on sait calculer les probabilités des événements d'un SCE alors on peut calculer la probabilité de n'importe quel événement.     "
},
{
  "id": "sec-probabilite-13",
  "level": "2",
  "url": "sec-probabilite.html#sec-probabilite-13",
  "type": "Exemple",
  "number": "1.3.11",
  "title": "(exemples génériques d’utilisation de la formule des probabilités totales).",
  "body": " (exemples génériques d'utilisation de la formule des probabilités totales)     si on fixe un événement alors     Si sont des événements quelconques alors     Le théorème suivant donne une application importante de la formule des probabilités totales.     "
},
{
  "id": "thm-probadisc",
  "level": "2",
  "url": "sec-probabilite.html#thm-probadisc",
  "type": "Théorème",
  "number": "1.3.12",
  "title": "",
  "body": "  On suppose que est au plus dénombrable et on le munit de la tribu .   Soit une probabilité de . Pour tout , on a  est entièrement détérminée par les probabilités des singletons .    Soit une famille de nombres réels positifs de somme . Alors il existe une unique probabilité sur telle que       "
},
{
  "id": "sec-probabilite-15",
  "level": "2",
  "url": "sec-probabilite.html#sec-probabilite-15",
  "type": "Remarque",
  "number": "1.3.13",
  "title": "",
  "body": " Si est au plus dénombrable alors pour toute famille sommable de nombre réels positifs de somme , on peut définir une probabilté sur en posant Cette remarque peut avoir des applications analytiques intéressantes même dans des cas où la probabilité ne correspond pas réellement à une expérience aléatoire.  "
},
{
  "id": "prop-probcond",
  "level": "2",
  "url": "sec-probabilite.html#prop-probcond",
  "type": "Proposition",
  "number": "1.3.14",
  "title": "",
  "body": "  On considère un événemnt de probabilité non nulle. L'application définie sur par est une probabilité de . La probabilité est aussi notée et on l'appelle probailité de sachant .    On a bien et pour toute suite d'éléments de deux à deux disjoints, on a     Justification de la définition  la probabilité de « sachant » est la probabilité de réalisation d'un résultat favorable à quand on ne retient que les résultats favorables à . C'est une approximation du rapport des fréquences de réalisation des événements et dans une série d'expériences. . D'où la définition    "
},
{
  "id": "sec-probabilite-17",
  "level": "2",
  "url": "sec-probabilite.html#sec-probabilite-17",
  "type": "Remarque",
  "number": "1.3.15",
  "title": "",
  "body": "    Si alors par convention, pour tout , . Ce choix s'explique par le fait que tout se passe comme si l'événement n'avait pas eu lieu.  Avec cette convention on peut toujours écrire     Sachant que est une probabilité on peut lui appliquer toutes propriétés vues précédemment. Par exemple      "
},
{
  "id": "sec-probabilite-18",
  "level": "2",
  "url": "sec-probabilite.html#sec-probabilite-18",
  "type": "Mise en garde",
  "number": "1.3.16",
  "title": "",
  "body": " On parle de «probabilité de sachant », jamais de «l'événement» qui n'a pas de sens en théorie des probabilités.  "
},
{
  "id": "thm-probatotale2",
  "level": "2",
  "url": "sec-probabilite.html#thm-probatotale2",
  "type": "Théorème",
  "number": "1.3.17",
  "title": "",
  "body": "  Soit un SCE de . Alors    "
},
{
  "id": "prop-bayes",
  "level": "2",
  "url": "sec-probabilite.html#prop-bayes",
  "type": "Proposition",
  "number": "1.3.18",
  "title": "(Formules de Bayes).",
  "body": " (Formules de Bayes)      Soient et deux événements de probabilités non nulles. Alors     Soit un SCE de et un événement de probabilité non nulle. Alors pour tout , on a       "
},
{
  "id": "sec-probabilite-21",
  "level": "2",
  "url": "sec-probabilite.html#sec-probabilite-21",
  "type": "Exemple",
  "number": "1.3.19",
  "title": "(générique d’utilisation de la formule de Bayes).",
  "body": " (générique d'utilisation de la formule de Bayes)  Une chaine de production industrielle contient machines identiques mais avec des taux de production de pièces défectueuses différents. Le taux pour la machine numéro est .  On prélève une pièce au hasard parmi un lot de pièces produite par la chaîne et on constate qu'elle est défectueuse. Quelle est la probabilité que cette pièce provienne de la machine numéro ?   Si on note l'événement «la pièce est défectueuse» et l'événement «la pièce provient de la machine numéro » alors on cherche . Celle-ci est donnée par la formule de Bayes : car et pour tout .   "
},
{
  "id": "sec-independance",
  "level": "1",
  "url": "sec-independance.html",
  "type": "Section",
  "number": "1.4",
  "title": "Indépendance des événements",
  "body": " Indépendance des événements   Dans tout la suite, désignera un espace probabilisé.        Deux événements et de sont dits indépendants si .    Une famille d'événements de est dite mutuellement indépendante (MI) si pour toute partie finie de ,            Indépendance de deux événements   est indépendant de si la probabilité de réalisation de sachant est la même que celle de réalisation de : . Ce qui revient à     Indépendance mutuelle  Des évéments , sont mutuelement indépendants si et seulement si pour tout et pour toute partie finie ne contenant pas on a c'est à dire si et seulement si la réalisation de chaque événement est indépendante de la réalisation simultanée d'un ou plusieurs évenements lorsque .          Si ou alors tout événement est indépendant de .    deux événements incompatibles et ne peuvent être indépendants que si ou .    Si est une famille MI alors est MI pour toute partie de . En particulier les événements sont deux à deux indépendants.    Soit est une famille d'évéments MI. Si on lui ajoute des événements presques sûrs ou négligeable alors les événements de la nouvelle famille sont MI.    Dans un SCE les événements ne peuvent être deux à deux indépendants, et a fortiori MI, que s'il existe tel que .        Si et sont des événements indépendants alors et sont indépendants, et sont indépendants et et sont indépendants.      Soit une famille MI d'événements de .   Soit une partie de . On pose si et si . Alors la famille est MI (en particulier est MI).    Lemme des coalitions  Soit une famille de parties deux à deux disjointes de . On pose pour tout , . Alors la famille est MI.        (Formule des compléments)   Soient des événements de . Alors     On écrit et on raisonne par récurrnece en appliquant l'hypothèse de récurrence avec la probailité     "
},
{
  "id": "sec-independance-2",
  "level": "2",
  "url": "sec-independance.html#sec-independance-2",
  "type": "Note",
  "number": "1.4.1",
  "title": "",
  "body": " Dans tout la suite, désignera un espace probabilisé.  "
},
{
  "id": "def-independance",
  "level": "2",
  "url": "sec-independance.html#def-independance",
  "type": "Définition",
  "number": "1.4.2",
  "title": "",
  "body": "     Deux événements et de sont dits indépendants si .    Une famille d'événements de est dite mutuellement indépendante (MI) si pour toute partie finie de ,       "
},
{
  "id": "sec-independance-4",
  "level": "2",
  "url": "sec-independance.html#sec-independance-4",
  "type": "Explication",
  "number": "1.4.1",
  "title": "",
  "body": "    Indépendance de deux événements   est indépendant de si la probabilité de réalisation de sachant est la même que celle de réalisation de : . Ce qui revient à     Indépendance mutuelle  Des évéments , sont mutuelement indépendants si et seulement si pour tout et pour toute partie finie ne contenant pas on a c'est à dire si et seulement si la réalisation de chaque événement est indépendante de la réalisation simultanée d'un ou plusieurs évenements lorsque .     "
},
{
  "id": "sec-independance-5",
  "level": "2",
  "url": "sec-independance.html#sec-independance-5",
  "type": "Remarque",
  "number": "1.4.3",
  "title": "",
  "body": "    Si ou alors tout événement est indépendant de .    deux événements incompatibles et ne peuvent être indépendants que si ou .    Si est une famille MI alors est MI pour toute partie de . En particulier les événements sont deux à deux indépendants.    Soit est une famille d'évéments MI. Si on lui ajoute des événements presques sûrs ou négligeable alors les événements de la nouvelle famille sont MI.    Dans un SCE les événements ne peuvent être deux à deux indépendants, et a fortiori MI, que s'il existe tel que .     "
},
{
  "id": "sec-independance-6",
  "level": "2",
  "url": "sec-independance.html#sec-independance-6",
  "type": "Proposition",
  "number": "1.4.4",
  "title": "",
  "body": "  Si et sont des événements indépendants alors et sont indépendants, et sont indépendants et et sont indépendants.   "
},
{
  "id": "thm-",
  "level": "2",
  "url": "sec-independance.html#thm-",
  "type": "Théorème",
  "number": "1.4.5",
  "title": "",
  "body": "  Soit une famille MI d'événements de .   Soit une partie de . On pose si et si . Alors la famille est MI (en particulier est MI).    Lemme des coalitions  Soit une famille de parties deux à deux disjointes de . On pose pour tout , . Alors la famille est MI.      "
},
{
  "id": "prop-forcomlement",
  "level": "2",
  "url": "sec-independance.html#prop-forcomlement",
  "type": "Proposition",
  "number": "1.4.6",
  "title": "(Formule des compléments).",
  "body": " (Formule des compléments)   Soient des événements de . Alors     On écrit et on raisonne par récurrnece en appliquant l'hypothèse de récurrence avec la probailité    "
},
{
  "id": "sec-modelisation",
  "level": "1",
  "url": "sec-modelisation.html",
  "type": "Section",
  "number": "1.5",
  "title": "Modélisation de phénomènes aléatoires",
  "body": " Modélisation de phénomènes aléatoires  Pour modéliser une expérience aléatoire on se place dans un ensemble qui contient tous les résultats possibles de l'expérience et on choisi une tribu de dans laquelle on peut exprimer tous les «événements» qui nous intéressent. Il reste ensuite à définir une probabilité sur cette tribu qui rend compte de la fréquence de réalisation de ces événements.  On adopte alors le vocabulaire suivant :    est dit l'univers de l'expérience ;    pour une instance de l'expérience, un évenement se réalise si le résultat obtenu est dans ;    un événement est dit presque sûr si et négligeable si ;    deux événements et sont dits incompatibles si ;      (signification de certains événements courants)  Soit une suite quelconque d'événements.    est l'événement «au moins un des événements se réalise» ;     est l'événement «tous les événements se réalisent» ;     est l'événement «les événements se réalisent tous à partir d'un certain rang pour pour au moins un indice ». La probabilité de cet événement est      est l'événement «l'événement se réalise pour une infinité d'indices ». La probabilité de cet événement est       Deux approches sont en fait possibles pour modéliser une expérience aléatoire :   Définir un espace où représente exactement l'ensemble des résultats possibles de l'expérience.    La précédente méthode risque d'être inadéquate si certains événements qui nous intéresse sont inexprimables dans la tribu considérée. C'est pour cela qu'en général on préfère se placer dans un espace probabilisable où est beaucoup plus large et on modélise l'expérience non pas avec mais avec une application définie sur qu'on appellera «variable aléatoire». L'avantage est qu'on peut combiner entre les résultats de différentes expériences aléatoires.      Cas où l'univers est au plus dénombrable  Dans la pratique si l'ensemble qui contient les résultats de l'expérience est au plus plus dénombrable alors on le munit de la tribu de telle sorte que tout ensemble formé de résultats possibles de l'expérience soit un événement. Ce choix de tribu n'est pas adéquat lorsque l'ensemble des résultats est non dénombrable car cela pose des difficultés insurmontables pour définir une probabilité sur .    Lancer un dé  On lance un dé à 6 faces. On peut modéliser cette expérience par et . On peut définir une probabilité sur en posant pour tout .    Lancer deux dés  On lance deux dés à 6 faces. On peut modéliser cette expérience par et . On peut définir une probabilité sur en posant pour tout .  Si on s'intéresse à l'événement : «la somme des résultats est paire», on peut créer un espace spécifique sous la forme et y adjoindre la probabilité adéquate ou bien on peut rester dans l'univers et définir la variable aléatoire sur en posant pour tout . On peut alors exprimer l'événement par     Suite de lancers d'une pièce de monnaie  On lance indéfiniment une piece de monnaie. Si on ne s'intéresse qu'au numéro du premier lancer qui donne «face» alors peut modéliser cette expérience par et . On peut définir une probabilité sur en posant pour tout .  Mais dans ce cas les événements «obtenir trois face successivement au moins une fois» ou «obtenir face une infinité de fois» ne peuvent être exprimés dans .  On peut alors se placer dans l'espace beaucoup plus vaste . Le résultat de chaque séquence infinie de lancers est modélisé par une suite de zéros et de uns. C'est un ensemble non dénombrable et y définir une tribu sur laquelle on doit ensuite définir une probabilité est non aisé. L'approche peut être la suivante : on identifie une famille d'événements élémentaires avec lesquels on peut construire d'autre événements plus complexes et qui couvrent nos besoins et on n'aura qu'à se placer dans la tribu engendrée par ces événements élémentaires.  Par exemple, on peut considérer pour tout l'événement : «le lancer donne face», ou encore On peut alors exprimer   pour tout  en particulier est l'événement «ne jamais obtenir face»    l'événement «le premier face apparaît au lancer» par     l'événement «obtenir face une infinité de fois» par .    l'événement «obtenir trois faces successivement une infinité de fois» par       "
},
{
  "id": "sec-modelisation-4",
  "level": "2",
  "url": "sec-modelisation.html#sec-modelisation-4",
  "type": "Exemple",
  "number": "1.5.1",
  "title": "(signification de certains événements courants).",
  "body": " (signification de certains événements courants)  Soit une suite quelconque d'événements.    est l'événement «au moins un des événements se réalise» ;     est l'événement «tous les événements se réalisent» ;     est l'événement «les événements se réalisent tous à partir d'un certain rang pour pour au moins un indice ». La probabilité de cet événement est      est l'événement «l'événement se réalise pour une infinité d'indices ». La probabilité de cet événement est      "
},
{
  "id": "sec-modelisation-6",
  "level": "2",
  "url": "sec-modelisation.html#sec-modelisation-6",
  "type": "Remarque",
  "number": "1.5.2",
  "title": "Cas où l’univers est au plus dénombrable.",
  "body": " Cas où l'univers est au plus dénombrable  Dans la pratique si l'ensemble qui contient les résultats de l'expérience est au plus plus dénombrable alors on le munit de la tribu de telle sorte que tout ensemble formé de résultats possibles de l'expérience soit un événement. Ce choix de tribu n'est pas adéquat lorsque l'ensemble des résultats est non dénombrable car cela pose des difficultés insurmontables pour définir une probabilité sur .  "
},
{
  "id": "sec-modelisation-7",
  "level": "2",
  "url": "sec-modelisation.html#sec-modelisation-7",
  "type": "Exemple",
  "number": "1.5.3",
  "title": "Lancer un dé.",
  "body": " Lancer un dé  On lance un dé à 6 faces. On peut modéliser cette expérience par et . On peut définir une probabilité sur en posant pour tout .  "
},
{
  "id": "sec-modelisation-8",
  "level": "2",
  "url": "sec-modelisation.html#sec-modelisation-8",
  "type": "Exemple",
  "number": "1.5.4",
  "title": "Lancer deux dés.",
  "body": " Lancer deux dés  On lance deux dés à 6 faces. On peut modéliser cette expérience par et . On peut définir une probabilité sur en posant pour tout .  Si on s'intéresse à l'événement : «la somme des résultats est paire», on peut créer un espace spécifique sous la forme et y adjoindre la probabilité adéquate ou bien on peut rester dans l'univers et définir la variable aléatoire sur en posant pour tout . On peut alors exprimer l'événement par   "
},
{
  "id": "sec-modelisation-9",
  "level": "2",
  "url": "sec-modelisation.html#sec-modelisation-9",
  "type": "Exemple",
  "number": "1.5.5",
  "title": "Suite de lancers d’une pièce de monnaie.",
  "body": " Suite de lancers d'une pièce de monnaie  On lance indéfiniment une piece de monnaie. Si on ne s'intéresse qu'au numéro du premier lancer qui donne «face» alors peut modéliser cette expérience par et . On peut définir une probabilité sur en posant pour tout .  Mais dans ce cas les événements «obtenir trois face successivement au moins une fois» ou «obtenir face une infinité de fois» ne peuvent être exprimés dans .  On peut alors se placer dans l'espace beaucoup plus vaste . Le résultat de chaque séquence infinie de lancers est modélisé par une suite de zéros et de uns. C'est un ensemble non dénombrable et y définir une tribu sur laquelle on doit ensuite définir une probabilité est non aisé. L'approche peut être la suivante : on identifie une famille d'événements élémentaires avec lesquels on peut construire d'autre événements plus complexes et qui couvrent nos besoins et on n'aura qu'à se placer dans la tribu engendrée par ces événements élémentaires.  Par exemple, on peut considérer pour tout l'événement : «le lancer donne face», ou encore On peut alors exprimer   pour tout  en particulier est l'événement «ne jamais obtenir face»    l'événement «le premier face apparaît au lancer» par     l'événement «obtenir face une infinité de fois» par .    l'événement «obtenir trois faces successivement une infinité de fois» par      "
},
{
  "id": "exercises-approfondissement",
  "level": "1",
  "url": "exercises-approfondissement.html",
  "type": "Exercices",
  "number": "1.6",
  "title": "Activités",
  "body": " Activités    On lance indéfiniment une piece de monnaie non équilibrée. La probabilité d'obtenir face est et les lancers sont indépendants.    Quelle est la probabilité pour que le numéro du premier lancer qui donne face soit pair ? Dans quel cas cette probabilité est-elle égale à celle que le numéro du premier face soit impaire ?   On note cet événement et l'événement «le numéro du premier lancer qui donne face est ». Alors , réunion d'événements deux à deux disjoints. On a donc Par ailleur si et seulement si . Ce qui équivaut à ou encore à .  On constate qu'en général sans jamais toucher ces valeurs extrêmes lorsque varie dans . La probabilité que le premier face ait un numéro impaire est toujours plus grande que celle que ce numéro soit paire et on n'approche d'un équilibre des deux probabilités que si est presque nul, c'est à dire quand il est presque impossible d'obtenir face.  C'est un comportement contre-intuitif. L'intuition pousse plutôt vers sous pretexte qu'il y a «autant de nombres paires que de nombres impaires».    Quelle est la probabilité pour que les numéros de tous les lancers qui donnent face soient pairs ?   On note l'evénement «tous les lancers qui donnent face sont pairs». est un SCE donc selon la formule des probabilité totales Pusique ne se réalise pas si un événement se réalise alors pour tout et donc      Calcul de l'ndicatrice d'Euler   On fixe un entier et on note ses diviseurs premiers. On pose et pour tout diviseur de  On munit de la probabilité uniforme .   Calculer .   Montrer que les événements sont mutuellement indépendants.   Juste pour le test du formatage de la reponse    Retrouver la formule    Juste pour le test du formatage     Formule de Weierstrass   On fixe un réel . On note le nombre premier par ordre croissant et on définit la probabilité sur par On note pour tout , l'ensemble des multiple de .   Justifier que définit bien une probabilité sur .    Calculer pour tout     Montrer que les événements sont mutuellement indépendants.    En déduire que        "
},
{
  "id": "exercises-approfondissement-2",
  "level": "2",
  "url": "exercises-approfondissement.html#exercises-approfondissement-2",
  "type": "Activité",
  "number": "1.6.1",
  "title": "",
  "body": "  On lance indéfiniment une piece de monnaie non équilibrée. La probabilité d'obtenir face est et les lancers sont indépendants.    Quelle est la probabilité pour que le numéro du premier lancer qui donne face soit pair ? Dans quel cas cette probabilité est-elle égale à celle que le numéro du premier face soit impaire ?   On note cet événement et l'événement «le numéro du premier lancer qui donne face est ». Alors , réunion d'événements deux à deux disjoints. On a donc Par ailleur si et seulement si . Ce qui équivaut à ou encore à .  On constate qu'en général sans jamais toucher ces valeurs extrêmes lorsque varie dans . La probabilité que le premier face ait un numéro impaire est toujours plus grande que celle que ce numéro soit paire et on n'approche d'un équilibre des deux probabilités que si est presque nul, c'est à dire quand il est presque impossible d'obtenir face.  C'est un comportement contre-intuitif. L'intuition pousse plutôt vers sous pretexte qu'il y a «autant de nombres paires que de nombres impaires».    Quelle est la probabilité pour que les numéros de tous les lancers qui donnent face soient pairs ?   On note l'evénement «tous les lancers qui donnent face sont pairs». est un SCE donc selon la formule des probabilité totales Pusique ne se réalise pas si un événement se réalise alors pour tout et donc    "
},
{
  "id": "exercises-approfondissement-3",
  "level": "2",
  "url": "exercises-approfondissement.html#exercises-approfondissement-3",
  "type": "Activité",
  "number": "1.6.2",
  "title": "Calcul de l’ndicatrice d’Euler.",
  "body": " Calcul de l'ndicatrice d'Euler   On fixe un entier et on note ses diviseurs premiers. On pose et pour tout diviseur de  On munit de la probabilité uniforme .   Calculer .   Montrer que les événements sont mutuellement indépendants.   Juste pour le test du formatage de la reponse    Retrouver la formule    Juste pour le test du formatage   "
},
{
  "id": "exercises-approfondissement-4",
  "level": "2",
  "url": "exercises-approfondissement.html#exercises-approfondissement-4",
  "type": "Activité",
  "number": "1.6.3",
  "title": "Formule de Weierstrass.",
  "body": " Formule de Weierstrass   On fixe un réel . On note le nombre premier par ordre croissant et on définit la probabilité sur par On note pour tout , l'ensemble des multiple de .   Justifier que définit bien une probabilité sur .    Calculer pour tout     Montrer que les événements sont mutuellement indépendants.    En déduire que       "
},
{
  "id": "sec-varalea",
  "level": "1",
  "url": "sec-varalea.html",
  "type": "Section",
  "number": "2.1",
  "title": "Variables aléatoires",
  "body": " Variables aléatoires  On se donne dans ce chapitre un espace probabilisé et un espace probabilisable     On appelle variable aléatoire de dans toute application telle que (l'image réciproque de tout événement est un événement).  Une variable aléatoire définie sur est dite discrète si l'ensemble est au plus dénombrable. Elle est dite réelle si .    Dans la pratique une variable aléatoire est utilisée pour représenter le résultat d'une expérience aléatoire. Souvent l'univers et la tribu ne sont pas précisés. Les résultats et les événements de l'expérience sont dans et . La question est comment choisir et de quelle tribu munir pour que le résultat de l'expérience soit une variable aléatoire ? Les remarques suivantes donnent des éléments de réponse.       Un univers au plus dénombrables sera systématiquement muni de la tribu formée par toutes ses parties.    Soit une application quelconque définie de dans . L'ensemble est une tribu de et est une variable aléatoire de dans .  Si est au plus dénombrable et , on voit qu'une application quelconque peut être considérée comme une variable aléatoire avec très peu de contrainte. Il suffit de se placer dans une tribu qui contient .  Ainsi si sont des applications définies sur telles que soit au plus dénombrable pour tout alors on peut poser :        de telle sorte que les applications soient toutes des variables aléatoires discrètes de dans . Ses observations restent valide avec une famille au plus dénombrable d'applications définies sur .      étant donné des variables aléatoires de dans , on note \\                   Soit une variables aléatoire discrète de dans .    "
},
{
  "id": "def-varalea",
  "level": "2",
  "url": "sec-varalea.html#def-varalea",
  "type": "Définition",
  "number": "2.1.1",
  "title": "",
  "body": "  On appelle variable aléatoire de dans toute application telle que (l'image réciproque de tout événement est un événement).  Une variable aléatoire définie sur est dite discrète si l'ensemble est au plus dénombrable. Elle est dite réelle si .    Dans la pratique une variable aléatoire est utilisée pour représenter le résultat d'une expérience aléatoire. Souvent l'univers et la tribu ne sont pas précisés. Les résultats et les événements de l'expérience sont dans et . La question est comment choisir et de quelle tribu munir pour que le résultat de l'expérience soit une variable aléatoire ? Les remarques suivantes donnent des éléments de réponse.   "
},
{
  "id": "sec-varalea-4",
  "level": "2",
  "url": "sec-varalea.html#sec-varalea-4",
  "type": "Remarque",
  "number": "2.1.2",
  "title": "",
  "body": "   Un univers au plus dénombrables sera systématiquement muni de la tribu formée par toutes ses parties.    Soit une application quelconque définie de dans . L'ensemble est une tribu de et est une variable aléatoire de dans .  Si est au plus dénombrable et , on voit qu'une application quelconque peut être considérée comme une variable aléatoire avec très peu de contrainte. Il suffit de se placer dans une tribu qui contient .  Ainsi si sont des applications définies sur telles que soit au plus dénombrable pour tout alors on peut poser :        de telle sorte que les applications soient toutes des variables aléatoires discrètes de dans . Ses observations restent valide avec une famille au plus dénombrable d'applications définies sur .    "
},
{
  "id": "sec-varalea-5",
  "level": "2",
  "url": "sec-varalea.html#sec-varalea-5",
  "type": "Définition",
  "number": "2.1.3",
  "title": "",
  "body": " étant donné des variables aléatoires de dans , on note \\                "
},
{
  "id": "sec-varalea-6",
  "level": "2",
  "url": "sec-varalea.html#sec-varalea-6",
  "type": "Théorème",
  "number": "2.1.4",
  "title": "",
  "body": "  Soit une variables aléatoire discrète de dans .   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " Ce cours a été crée avec PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
