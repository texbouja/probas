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
  "body": " Tribus  Dans tout le chapitre désignera un ensemble non vide. est une ensemble non vide qui sera souvent utilisé comme ensemble d'indices.  On notera , resp. , l'ensemble de toutes les parties de , resp. l'ensemble de toutes les parties finies de .  Si est une partie de on notera son complémentaire dans .    On appelle tribu de tout ensemble de parties de tel que :   ;  si alors ;  si est une suite d'éléments de alors ;  Si est une tribu de alors le couple est dit un espace probabilisable. Tout élément de est dit un événement de l'espace .     Si est une tribu de alors    ;    si est une suite d'éléments de alors .           est une tribu de . C'est la plus petite tribu de .     est une tribu de . C'est la plus grande tribu de .    Si est une partie de alors est une tribu de . C'est la plus petite tribu de contenant .          Si est une famille de tribus de alors est une tribu de .    Soit un ensemble de parties de . L'intersection de toutes les tribus de contenant est une tribu de . Elle est appelée la tribu engendrée par . On la notera .        La tribu engendrée par l'ensemble des segments de est appelée la tribu de Borel de . On la note .        Soient et deux ensembles de parties de . Si alors .    Tout intervalle de peut être écrit comme la réunion d'une suite de segments. La tribu de Borel de contient donc tous les intervalles de . Comme tout ouvert de est une union au plus dénombrable d'intervalles ouverts, la tribu de Borel de contient tous les ouverts de . Elle contient donc aussi tous les fermés de .    En général si est un espace vectoriel normé de dimension finie alors la tribu de Borel de , notée est par définition la tribu engendrée par les boules fermées de . Elle contient alors tous les ouverts et tous les fermés de et est de ce fait indépendante de la norme choisie sur .        Soit un ensemble au plus dénombrable de parties de qui forment une partition de . Alors     Posons et montrons que est une tribu de .   Comme alors .    Si alors .    Soit est une suite d'éléments de et posons pour tout , alors .    est donc bien une tribu de . Elle contient et toute tribu qui contient tous les ensembles contient tous les éléments de . C'est donc la plus petite tribu de contenant . Soit .      Si l'ensemble est au plus dénombrable alors Autrement dit la seule tribu de qui contient tous les singletons de est .     Si est infini non dénombrable alors la tribu engendrée par les singletons de est définie par la condition En particulier toute tribu de qui contient tous les singletons de contient et donc contient toutes la parties dénombrables de .  C'est le cas par exemple de la tribu de Borel de tout espace vectoriel normé de dimension finie (les singletons sont des boules fermées).    (tribu induite)   Soit une tribu de . Pour toute élément de , l'ensemble est une tribu de . On l'appelle la tribu induite par sur .    "
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
  "id": "sec-tribu-6",
  "level": "2",
  "url": "sec-tribu.html#sec-tribu-6",
  "type": "Remarque",
  "number": "1.2.2",
  "title": "",
  "body": " Si est une tribu de alors    ;    si est une suite d'éléments de alors .     "
},
{
  "id": "sec-tribu-7",
  "level": "2",
  "url": "sec-tribu.html#sec-tribu-7",
  "type": "Exemple",
  "number": "1.2.3",
  "title": "",
  "body": "     est une tribu de . C'est la plus petite tribu de .     est une tribu de . C'est la plus grande tribu de .    Si est une partie de alors est une tribu de . C'est la plus petite tribu de contenant .     "
},
{
  "id": "sec-tribu-8",
  "level": "2",
  "url": "sec-tribu.html#sec-tribu-8",
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
  "id": "sec-tribu-10",
  "level": "2",
  "url": "sec-tribu.html#sec-tribu-10",
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
  "id": "sec-tribu-13",
  "level": "2",
  "url": "sec-tribu.html#sec-tribu-13",
  "type": "Remarque",
  "number": "1.2.9",
  "title": "",
  "body": " Si est infini non dénombrable alors la tribu engendrée par les singletons de est définie par la condition En particulier toute tribu de qui contient tous les singletons de contient et donc contient toutes la parties dénombrables de .  C'est le cas par exemple de la tribu de Borel de tout espace vectoriel normé de dimension finie (les singletons sont des boules fermées).  "
},
{
  "id": "sec-tribu-14",
  "level": "2",
  "url": "sec-tribu.html#sec-tribu-14",
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
  "body": " Variables aléatoires  On se donne dans ce chapitre un espace probabilisé et un espace probabilisable     On appelle variable aléatoire de dans toute application telle que c'est à dire que l'image réciproque par de tout événement est un événement.  Soit dans la suite une variable aléatoire de dans .   est dite discrète si l'ensemble est au plus dénombrable et . Ce qui équivaut à   X est dite réelle si .    Dans la pratique une variable aléatoire est utilisée pour représenter le résultat d'une expérience aléatoire. Souvent l'univers et la tribu ne sont pas précisés. Les résultats et les événements de l'expérience sont dans et dans .  La question est comment choisir et de quelle tribu munir pour que le résultat de l'expérience soit une variable aléatoire ? Les remarques suivantes donnent des éléments de réponse.       Sauf précision du contraire, un univers au plus dénombrable sera systématiquement muni de la tribu .    Si est au plus dénombrable ( et muni de la tribu ) alors toute application définie sur est une variable aléatoire quelque soit la tribu considérée dans l'espace d'arrivée.    Soit une application quelconque définie de dans . L'ensemble est une tribu de et est une variable aléatoire de dans .  Si est au plus dénombrable et , on voit qu'une application quelconque de dans peut être considérée comme une variable aléatoire avec très peu de contraintes. Il suffit de se placer du côté de dans une tribu qui contient .  Si sont des applications définies sur telles que soit au plus dénombrable pour tout alors on peut poser :        de telle sorte que les applications soient toutes des variables aléatoires discrètes de dans .  Ses observations restent valides pour une famille dénombrable d'applications définies sur telle que soit au plus dénombrable pour tout . Notamment pour une suite de telles applications.  C'est ainsi qu'il est toujours possible de considérer un modèle dans lequel on peut combiner entre les résultats d'un nombre fini ou dénombrable d'expériences aléatoires si chacune a au plus un ensemble au plus dénombrable de résultats.         La composée de deux variables aléatoires et est une variable aléatoire. De plus si est discrète alors est discrète.    Si pour tout , est une variable aléatoire de dans un espace probabilisable alors l'application définie par est une variable aléatoire de dans . De plus si sont discrètes alors est discrète.    Soit maintenant une variable aléatoire discrète de dans . Alors pour toute application définie sur l'application est une VAD. On la note    On généralise de la façon suivante : si sont des VAD definies sur alors pour toute application définie sur on définit la variable aléatoire discrète par          étant donné des variables aléatoires discrètes de dans , on note  pour tout    pour tous    pour tout ,   pour tous        Une variable aléatoire discrète est dite presque partout constante s'il existe tel que . Elle est en particulier dite presque partout nulle si .      Vu la tolérance de l'image réciproque par une application envers les opérations sur les ensembles, les notations précédentes donnent                          d'utilisation de ces notations    Si et sont des VAD à valeurs dans alors pour tout , et puisque ces événements sont deux à deux disjoints alors     Si est une VAD à valeurs dans alors et particulier      . Par exemple, si alors        Soit une variables aléatoire discrète de dans .    est un système complet d'événements de ;    Pour tout ,    On appelle loi de la variable le couple . L'application est dite fonction des masses de la variable .   La loi d'une VADR est ainsi le couple formé de l'ensemble des valeurs qu'elle peut prendre et de la famille (au plus dénombrable) des probabilités pour que chacune de ces valeurs se réalise. La propriété 2 signifie que les probabilités des événements sont déterminées par la loi de .       Soit une variable aléatoire discrète de dans . L'application est une probabilité de .       Soient deux VAD et définies sur . La loi du couple est par définition la loi de la variable . Elle est assimilée au couple .  En outre les lois des variables et sont appelées les lois marginales du couple .     Avec on a on n'a donc pas nécessairement mais si alors   si alors et en particulier ;    si alors et donc .   C'est pour des raisons de simplification que la loi de couple est donc définie avec .     Soient deux VAD et définies sur .            Ce qui signifie que les lois marginales du couple sont données par sa loi de couple.    "
},
{
  "id": "def-varalea",
  "level": "2",
  "url": "sec-varalea.html#def-varalea",
  "type": "Définition",
  "number": "2.1.1",
  "title": "",
  "body": "  On appelle variable aléatoire de dans toute application telle que c'est à dire que l'image réciproque par de tout événement est un événement.  Soit dans la suite une variable aléatoire de dans .   est dite discrète si l'ensemble est au plus dénombrable et . Ce qui équivaut à   X est dite réelle si .    Dans la pratique une variable aléatoire est utilisée pour représenter le résultat d'une expérience aléatoire. Souvent l'univers et la tribu ne sont pas précisés. Les résultats et les événements de l'expérience sont dans et dans .  La question est comment choisir et de quelle tribu munir pour que le résultat de l'expérience soit une variable aléatoire ? Les remarques suivantes donnent des éléments de réponse.   "
},
{
  "id": "sec-varalea-4",
  "level": "2",
  "url": "sec-varalea.html#sec-varalea-4",
  "type": "Remarque",
  "number": "2.1.2",
  "title": "",
  "body": "   Sauf précision du contraire, un univers au plus dénombrable sera systématiquement muni de la tribu .    Si est au plus dénombrable ( et muni de la tribu ) alors toute application définie sur est une variable aléatoire quelque soit la tribu considérée dans l'espace d'arrivée.    Soit une application quelconque définie de dans . L'ensemble est une tribu de et est une variable aléatoire de dans .  Si est au plus dénombrable et , on voit qu'une application quelconque de dans peut être considérée comme une variable aléatoire avec très peu de contraintes. Il suffit de se placer du côté de dans une tribu qui contient .  Si sont des applications définies sur telles que soit au plus dénombrable pour tout alors on peut poser :        de telle sorte que les applications soient toutes des variables aléatoires discrètes de dans .  Ses observations restent valides pour une famille dénombrable d'applications définies sur telle que soit au plus dénombrable pour tout . Notamment pour une suite de telles applications.  C'est ainsi qu'il est toujours possible de considérer un modèle dans lequel on peut combiner entre les résultats d'un nombre fini ou dénombrable d'expériences aléatoires si chacune a au plus un ensemble au plus dénombrable de résultats.    "
},
{
  "id": "prop-compvar",
  "level": "2",
  "url": "sec-varalea.html#prop-compvar",
  "type": "Proposition",
  "number": "2.1.3",
  "title": "",
  "body": "    La composée de deux variables aléatoires et est une variable aléatoire. De plus si est discrète alors est discrète.    Si pour tout , est une variable aléatoire de dans un espace probabilisable alors l'application définie par est une variable aléatoire de dans . De plus si sont discrètes alors est discrète.    Soit maintenant une variable aléatoire discrète de dans . Alors pour toute application définie sur l'application est une VAD. On la note    On généralise de la façon suivante : si sont des VAD definies sur alors pour toute application définie sur on définit la variable aléatoire discrète par      "
},
{
  "id": "sec-varalea-6",
  "level": "2",
  "url": "sec-varalea.html#sec-varalea-6",
  "type": "Définition",
  "number": "2.1.4",
  "title": "",
  "body": "   étant donné des variables aléatoires discrètes de dans , on note  pour tout    pour tous    pour tout ,   pour tous        Une variable aléatoire discrète est dite presque partout constante s'il existe tel que . Elle est en particulier dite presque partout nulle si .    "
},
{
  "id": "sec-varalea-7",
  "level": "2",
  "url": "sec-varalea.html#sec-varalea-7",
  "type": "Remarque",
  "number": "2.1.5",
  "title": "",
  "body": " Vu la tolérance de l'image réciproque par une application envers les opérations sur les ensembles, les notations précédentes donnent                        "
},
{
  "id": "sec-varalea-8",
  "level": "2",
  "url": "sec-varalea.html#sec-varalea-8",
  "type": "Exemple",
  "number": "2.1.6",
  "title": "d’utilisation de ces notations.",
  "body": " d'utilisation de ces notations    Si et sont des VAD à valeurs dans alors pour tout , et puisque ces événements sont deux à deux disjoints alors     Si est une VAD à valeurs dans alors et particulier      . Par exemple, si alors     "
},
{
  "id": "sec-varalea-9",
  "level": "2",
  "url": "sec-varalea.html#sec-varalea-9",
  "type": "Théorème",
  "number": "2.1.7",
  "title": "",
  "body": "  Soit une variables aléatoire discrète de dans .    est un système complet d'événements de ;    Pour tout ,    On appelle loi de la variable le couple . L'application est dite fonction des masses de la variable .   La loi d'une VADR est ainsi le couple formé de l'ensemble des valeurs qu'elle peut prendre et de la famille (au plus dénombrable) des probabilités pour que chacune de ces valeurs se réalise. La propriété 2 signifie que les probabilités des événements sont déterminées par la loi de .    "
},
{
  "id": "cor-loiX",
  "level": "2",
  "url": "sec-varalea.html#cor-loiX",
  "type": "Corollaire",
  "number": "2.1.8",
  "title": "",
  "body": "  Soit une variable aléatoire discrète de dans . L'application est une probabilité de .    "
},
{
  "id": "def-loicouple",
  "level": "2",
  "url": "sec-varalea.html#def-loicouple",
  "type": "Définition",
  "number": "2.1.9",
  "title": "",
  "body": "  Soient deux VAD et définies sur . La loi du couple est par définition la loi de la variable . Elle est assimilée au couple .  En outre les lois des variables et sont appelées les lois marginales du couple .   "
},
{
  "id": "sec-varalea-12",
  "level": "2",
  "url": "sec-varalea.html#sec-varalea-12",
  "type": "Remarque",
  "number": "2.1.10",
  "title": "",
  "body": " Avec on a on n'a donc pas nécessairement mais si alors   si alors et en particulier ;    si alors et donc .   C'est pour des raisons de simplification que la loi de couple est donc définie avec .  "
},
{
  "id": "prop-loicouple",
  "level": "2",
  "url": "sec-varalea.html#prop-loicouple",
  "type": "Proposition",
  "number": "2.1.11",
  "title": "",
  "body": "  Soient deux VAD et définies sur .            Ce qui signifie que les lois marginales du couple sont données par sa loi de couple.   "
},
{
  "id": "sec-indvar",
  "level": "1",
  "url": "sec-indvar.html",
  "type": "Section",
  "number": "2.2",
  "title": "Indépendance des variables aléatoires discrètes",
  "body": " Indépendance des variables aléatoires discrètes    Une famille de VAD définies sur (pas nécessairement à valeurs dans le même espace) est dite mutuellement indépendante (MI) si      Si est une famille MI de VAD alors pour toute partie de la famille est MI.     Des variables aléatoires discrètes définies sur sont mutuellement indépendantes si et seulement si        Cette dernière proposition simplifie considérablement la définition de l'indépendance mutuelle d'un nombre fini de VAD.    Elle implique aussi qu'une famille infinie de VAD est MI si et seulement si toutes ses sous-familles finies sont MI.    Une suite de VAD est MI si et seulement pour tout les variables sont MI.       Soit une famille de VAD mutuellement indépendantes et toutes définies sur .  Soit pour tout , une partie de . Alors les événements sont mutuellement indépendants.      Soit une famille de VAD mutuellement indépendantes et toutes définies sur .    Si pour tout , est une application définie sur alors les variables sont mutuellement indépendantes.    Lemme des coalitions  Soit une famille de parties finies deux à deux disjointes de . Si pour tout , est une application définie sur alors les variables sont mutuellement indépendantes.         Si est une VAD presque partout constante de alors toute autre VAD définie sur est indépendante de .   car pour tout , on a soit soit . Donc l'événement est indépendant de tou autre événement de .     Soient une VAD et une fonction définie sur . À moins que ou ne soit presque partout constante, les variables et ne peuvent être indépendantes.   On suppose que et ne sont pas presque partout constantes. Il existe alors tel que . Comme alors . Ensuite puisque est non presque partout constante alors et il existe donc tel que et . Ainsi  et ne sont donc pas indépendantes.      Exemples d'utilisations du lemme des coalitions  Soient des VAD définies sur .   Si sont MI alors et sont MI.    Réciproquement si et sont MI alors tout ce qu'on peut dire c'est que est indépendante de pour tout .    Si la variable est elle même un vecteur de la forme et et sont indépndantes alors et sont indépendantes pour tous .      Ce sont des conséquences du lemme des coalitions en utilisant respectivement les applications :    ;     ;     et          "
},
{
  "id": "def-varind",
  "level": "2",
  "url": "sec-indvar.html#def-varind",
  "type": "Définition",
  "number": "2.2.1",
  "title": "",
  "body": "  Une famille de VAD définies sur (pas nécessairement à valeurs dans le même espace) est dite mutuellement indépendante (MI) si    "
},
{
  "id": "sec-indvar-3",
  "level": "2",
  "url": "sec-indvar.html#sec-indvar-3",
  "type": "Remarque",
  "number": "2.2.2",
  "title": "",
  "body": " Si est une famille MI de VAD alors pour toute partie de la famille est MI.  "
},
{
  "id": "prop-varind",
  "level": "2",
  "url": "sec-indvar.html#prop-varind",
  "type": "Proposition",
  "number": "2.2.3",
  "title": "",
  "body": "  Des variables aléatoires discrètes définies sur sont mutuellement indépendantes si et seulement si    "
},
{
  "id": "sec-indvar-5",
  "level": "2",
  "url": "sec-indvar.html#sec-indvar-5",
  "type": "Remarque",
  "number": "2.2.4",
  "title": "",
  "body": "   Cette dernière proposition simplifie considérablement la définition de l'indépendance mutuelle d'un nombre fini de VAD.    Elle implique aussi qu'une famille infinie de VAD est MI si et seulement si toutes ses sous-familles finies sont MI.    Une suite de VAD est MI si et seulement pour tout les variables sont MI.    "
},
{
  "id": "prop-partind",
  "level": "2",
  "url": "sec-indvar.html#prop-partind",
  "type": "Proposition",
  "number": "2.2.5",
  "title": "",
  "body": "  Soit une famille de VAD mutuellement indépendantes et toutes définies sur .  Soit pour tout , une partie de . Alors les événements sont mutuellement indépendants.   "
},
{
  "id": "thm-coalition",
  "level": "2",
  "url": "sec-indvar.html#thm-coalition",
  "type": "Théorème",
  "number": "2.2.6",
  "title": "",
  "body": "  Soit une famille de VAD mutuellement indépendantes et toutes définies sur .    Si pour tout , est une application définie sur alors les variables sont mutuellement indépendantes.    Lemme des coalitions  Soit une famille de parties finies deux à deux disjointes de . Si pour tout , est une application définie sur alors les variables sont mutuellement indépendantes.     "
},
{
  "id": "sec-indvar-8",
  "level": "2",
  "url": "sec-indvar.html#sec-indvar-8",
  "type": "Remarque",
  "number": "2.2.7",
  "title": "",
  "body": "   Si est une VAD presque partout constante de alors toute autre VAD définie sur est indépendante de .   car pour tout , on a soit soit . Donc l'événement est indépendant de tou autre événement de .     Soient une VAD et une fonction définie sur . À moins que ou ne soit presque partout constante, les variables et ne peuvent être indépendantes.   On suppose que et ne sont pas presque partout constantes. Il existe alors tel que . Comme alors . Ensuite puisque est non presque partout constante alors et il existe donc tel que et . Ainsi  et ne sont donc pas indépendantes.      Exemples d'utilisations du lemme des coalitions  Soient des VAD définies sur .   Si sont MI alors et sont MI.    Réciproquement si et sont MI alors tout ce qu'on peut dire c'est que est indépendante de pour tout .    Si la variable est elle même un vecteur de la forme et et sont indépndantes alors et sont indépendantes pour tous .      Ce sont des conséquences du lemme des coalitions en utilisant respectivement les applications :    ;     ;     et         "
},
{
  "id": "sec-loiusuelles",
  "level": "1",
  "url": "sec-loiusuelles.html",
  "type": "Section",
  "number": "2.3",
  "title": "Lois usuelles",
  "body": " Lois usuelles   désignera une VAD définie sur     Loi de Bernouilli  Soit un réel On dit que suit la loi de Bernouilli de paramètre et on écrit si est le résultat d'une expérience aléatoire qui ne possède que deux issues : succès ou échec. La probabilité du sucès étant .     Loi binomiale  Soit un réel et un entier . On dit que suit la loi de binomiale de paramètres et et on écrit si est le nombre de succès obtenus lorsque on répète fois de façon indépendante une expérience de Bernouilli de paramètre .  suit aussi la loi si elle represente le nombre de succès obtenu lorsque on effectue simultanénement et de façon indépendante test de Bernouilli de paramètre .  Si est le résultat du test de Bernouilli alors sachant que les variables sont mutuellement indépendantes et suivent toute la loi     Loi géometrique  Soit un réel On dit que suit la loi géométrique de paramètre et on écrit si est le numéro du premier test qui donne un succès lorsque on répète indéfiniment et de façon indépendante une expérience de Bernouilli de paramètre .  est aussi dite temps d'attente du premier succès.  Si est le résultat du test de Bernouilli alors Sachant que les variables sont mutuellement indépendantes et suivent toute la loi .    Loi de Poisson  Soit un réel . On dit que suit la loi de Poisson de paramètre et on écrit si  représente le nombre de clients servis pendant une unité de temps dans une file d'attente quand on sait que le nombre moyen de clients par unité de temps est . Pour cette raison la loi de Poisson est aussi appelé loi des files d'attente.    "
},
{
  "id": "sec-loi-activite",
  "level": "1",
  "url": "sec-loi-activite.html",
  "type": "Section",
  "number": "2.4",
  "title": "Activités",
  "body": " Activités   Loi hypergéometrique   Soient et avec . On prélève de façon équiprobable un échantillon de individus dans une population de individus. On effectue des tests de type Bernouilli sur les individus de l'échantillon sachant que la proportion d'individu positifs au test dans toute la population est . est le nombre d'individus qui s'avèrent positifs au test dans l'échantillon.   Quelle est la loi de ?    On note le résultat du test du individu. Quelle est la loi de ?        et       Le nombre de tests positifs dans l'échantiloon ne peut dépasser , ni le nombre total d'individus positifs dans toute la population. D'un autre côté si alors on est sûr d'avoir au moins tests positifs dans l'échantillon. Ainsi Ce qui suggère de prendre . Mais pour simplifier on prend plutôt quitte à considèrer que les résultats impossibles ont une probabilité nulle.  Ensuite, il y a façon de prélever équiprobablement individus dans une population de éléments. Parmi ces prélévements, ceux qui contiendront exactement individus positifs sont au nombre de car il s'agit de prélever indivdus parmi qui sont positifs au test et individus parmi qui ne le sont pas. Vu l'équiprobabilité des prélèvements on a donc On notera la loi de la variable . Elle est dite loi hypergéomètrique de paramètres et .    Prélever un échantillon de individus de façon équiprobable revient à prelever sans remise un à un et de façon équiporbable les individus. Notons la variable de Bernouilli qui vaut si le individu prélevé de la population est positif au test. Alors . La question précédente montre ainsi que pour tout  Soit maintenant . Grâce à la formule des probabilités totales, on peut écrire  est la probabilité que le individu prélevé soit positif sachant que individus ont été positifs pour les prélévements précédents. Dans ces condition, il reste individu dans la population dont sont positifs. Par équiprobabilité des prélévements on a donc Ainsi Il en ressort que malgré le changement de la répartition des cas positifs\/cas négatifs après chaque prélévement, la probabulité de prélever un cas positif est toujours .       Loi du temps d'attente du succès   Soient et . Quel est la loi du temps d'attente du succés lorsque on répète indéfiniment et de façon indépendante une exprérience de Bernouilli de paramètre      et      Loi d'une marche aléatoire sur une droite   Un objet se déplace sur une droite graduée. À chaque instant il ne peut qu'avancer d'un pas avec une probabilité ou reculer d'un pas avec une probabilité . Les déplacements sont tous indépendants.    On note la position de l'objet sur la droite au pas en supposant qu'il était sur l'origine de la droite à l'instant . Quelle est la loi de ?    On note le numéro du premier pas pour lequel l'objet revient sur l'origine. Quelle est la loi de ?         et        Comportement asymptotique d'une loi binomiale   On considère une suite de nombres réels de et on suppose que . Soit pour tout une variable aléatoire qui suit la loi . Déterminer pour tout entier fixé, la limite de et donner une interprétation du résultat obtenu.    Fixons et considérons un entier .  donc et donc . D'un autre côté, puisque est fixé alors Ainsi , ou encore où est une variable aléatoire qui suit la loi . On dit que la suite  converge en loi vers .  Ainsi, une variable aléatoire binomiale de paramètres se comporte lorsque est grand comme une loi de Poisson de paramètre .     Une indépendance contre-intuitive    suit une loi de Poisson de paramètre . est le nombre de succès quand on répète de façon indépendante test de Bernouilli de paramètre .   Déterminer la loi de     Vérifier que et sont indépendantes.          peut potentiellement prendre toutes les valeurs dans . Il en est de même pour . Ensuite pour tout  Ainsi      est le nombre d'echecs pour tests. Il suffit donc de remplacer par dans le calcul de la loi de : . Ensuite si alors  et sont donc bien indépendantes contrairement à «l'intuition». ( et le nombre de succés et le nombre d'echecs pour tests.)      "
},
{
  "id": "sec-loi-activite-2",
  "level": "2",
  "url": "sec-loi-activite.html#sec-loi-activite-2",
  "type": "Activité",
  "number": "2.4.1",
  "title": "Loi hypergéometrique.",
  "body": " Loi hypergéometrique   Soient et avec . On prélève de façon équiprobable un échantillon de individus dans une population de individus. On effectue des tests de type Bernouilli sur les individus de l'échantillon sachant que la proportion d'individu positifs au test dans toute la population est . est le nombre d'individus qui s'avèrent positifs au test dans l'échantillon.   Quelle est la loi de ?    On note le résultat du test du individu. Quelle est la loi de ?        et       Le nombre de tests positifs dans l'échantiloon ne peut dépasser , ni le nombre total d'individus positifs dans toute la population. D'un autre côté si alors on est sûr d'avoir au moins tests positifs dans l'échantillon. Ainsi Ce qui suggère de prendre . Mais pour simplifier on prend plutôt quitte à considèrer que les résultats impossibles ont une probabilité nulle.  Ensuite, il y a façon de prélever équiprobablement individus dans une population de éléments. Parmi ces prélévements, ceux qui contiendront exactement individus positifs sont au nombre de car il s'agit de prélever indivdus parmi qui sont positifs au test et individus parmi qui ne le sont pas. Vu l'équiprobabilité des prélèvements on a donc On notera la loi de la variable . Elle est dite loi hypergéomètrique de paramètres et .    Prélever un échantillon de individus de façon équiprobable revient à prelever sans remise un à un et de façon équiporbable les individus. Notons la variable de Bernouilli qui vaut si le individu prélevé de la population est positif au test. Alors . La question précédente montre ainsi que pour tout  Soit maintenant . Grâce à la formule des probabilités totales, on peut écrire  est la probabilité que le individu prélevé soit positif sachant que individus ont été positifs pour les prélévements précédents. Dans ces condition, il reste individu dans la population dont sont positifs. Par équiprobabilité des prélévements on a donc Ainsi Il en ressort que malgré le changement de la répartition des cas positifs\/cas négatifs après chaque prélévement, la probabulité de prélever un cas positif est toujours .     "
},
{
  "id": "sec-loi-activite-3",
  "level": "2",
  "url": "sec-loi-activite.html#sec-loi-activite-3",
  "type": "Activité",
  "number": "2.4.2",
  "title": "Loi du temps d’attente du <span class=\"process-math\">\\(k^\\text{e}\\)<\/span> succès.",
  "body": " Loi du temps d'attente du succès   Soient et . Quel est la loi du temps d'attente du succés lorsque on répète indéfiniment et de façon indépendante une exprérience de Bernouilli de paramètre      et    "
},
{
  "id": "sec-loi-activite-4",
  "level": "2",
  "url": "sec-loi-activite.html#sec-loi-activite-4",
  "type": "Activité",
  "number": "2.4.3",
  "title": "Loi d’une marche aléatoire sur une droite.",
  "body": " Loi d'une marche aléatoire sur une droite   Un objet se déplace sur une droite graduée. À chaque instant il ne peut qu'avancer d'un pas avec une probabilité ou reculer d'un pas avec une probabilité . Les déplacements sont tous indépendants.    On note la position de l'objet sur la droite au pas en supposant qu'il était sur l'origine de la droite à l'instant . Quelle est la loi de ?    On note le numéro du premier pas pour lequel l'objet revient sur l'origine. Quelle est la loi de ?         et      "
},
{
  "id": "sec-loi-activite-5",
  "level": "2",
  "url": "sec-loi-activite.html#sec-loi-activite-5",
  "type": "Activité",
  "number": "2.4.4",
  "title": "Comportement asymptotique d’une loi binomiale.",
  "body": " Comportement asymptotique d'une loi binomiale   On considère une suite de nombres réels de et on suppose que . Soit pour tout une variable aléatoire qui suit la loi . Déterminer pour tout entier fixé, la limite de et donner une interprétation du résultat obtenu.    Fixons et considérons un entier .  donc et donc . D'un autre côté, puisque est fixé alors Ainsi , ou encore où est une variable aléatoire qui suit la loi . On dit que la suite  converge en loi vers .  Ainsi, une variable aléatoire binomiale de paramètres se comporte lorsque est grand comme une loi de Poisson de paramètre .   "
},
{
  "id": "sec-loi-activite-6",
  "level": "2",
  "url": "sec-loi-activite.html#sec-loi-activite-6",
  "type": "Activité",
  "number": "2.4.5",
  "title": "Une indépendance contre-intuitive.",
  "body": " Une indépendance contre-intuitive    suit une loi de Poisson de paramètre . est le nombre de succès quand on répète de façon indépendante test de Bernouilli de paramètre .   Déterminer la loi de     Vérifier que et sont indépendantes.          peut potentiellement prendre toutes les valeurs dans . Il en est de même pour . Ensuite pour tout  Ainsi      est le nombre d'echecs pour tests. Il suffit donc de remplacer par dans le calcul de la loi de : . Ensuite si alors  et sont donc bien indépendantes contrairement à «l'intuition». ( et le nombre de succés et le nombre d'echecs pour tests.)     "
},
{
  "id": "sec-esparance",
  "level": "1",
  "url": "sec-esparance.html",
  "type": "Section",
  "number": "3.1",
  "title": "Esparance d’une variable aléatoire discrète",
  "body": " Esparance d'une variable aléatoire discrète   Définition et propriétés    Soit une variable aléatoire discrète réelle définie sur .  On dit que est sommable, ou que admet une espérance, si la famille est sommable. On appelle alors espérance de le réel On notera l'ensemble des VADR sommables définies sur        Quand elle définie, est le barycentre de la famille de points pondérés . Pour cette raison on l'appelle aussi valeur moyenne de .    Dans le cas d'une VADR à valeurs positives ou nulles, si n'est pas sommable alors on pose par convention  est alors sommable si et seulement si .    En conséquence, pour une VADR quelconque     La définition a un inconvénient : la somme utilisée est indexée par un ensemble qui dépend de . Ce qui pose un problème lorsqu'on combine entre plusieurs variables aléatoire. Comme lorsque on s'intéresse à par exemple.  La formule de transfert énoncée ci-après résout ce problème.    La définition de dépend seulement de la loi de . Dans ce sens deux variables qui ont la même loi ont la même espérance. Nous parlerons souvent de l'espérance d'une loi de probabilité pour désigner l'espérance des variables qui suivent cette loi.    La définition se limite aux variables aléatoires discrète réelles , mais elle est tout à fait valable sans aucune modification pour les variables aléatoires discrètes à valeurs complexes . La notion de base utilisée étant celle de familles sommables et celle-ci a été étudiée dans le cadre des familles de nombres réels ou complexes.        On peut généraliser la notion d'espérance à des vecteurs aléatoires discrets en utilisant les «variables composantes» : si est un vecteur aléatoire discret à valeurs dans un -ev de dimension finie qui s'écrit sous la forme où est une base fixée de , alors, par définition, est sommable si et seulement si les variables sont sommables et dans ce cas Cela pose toutefois le problème de la dépendance de cette définition par rapport à la base utilisée. (Voir remarque )    Dans le cas d'une matrice aléatoire par exemple, est sommable si et seulement si est sommable pout et dans ce cas, par définition     Attention toutefois : les familles sommables de vecteurs ne sont pas au programme. Donc l'écriture déborde du cadre limité par celui-ci.       On suppose que est au plus dénombrable. Une VADR définie sur est sommable si et seulement si la famille est sommable et dans ce cas     La famille d'événemnts est une partition de et pour tout on a Donc selon le théorème de sommation par paquets et dans ce cas      Apparement ce dernier résultat résout le problème de l'ecriture de en fonction de l'ensemble (qui dépend de ). L'intérêt est toutefois relatif car dans la pratique on ne contrôle pas l'univers lui même et il n'est pas nécessairement au plus dénombrable.    (formule de transfert)   Soit une VAD définie sur (possiblement à valeurs vectorielles). Soit une application définie sur .  La variable est sommable si et seulement si la famille est sommable et dans ce cas     On pose et on imite la démonstration de la proposition précédente en observant cette fois que est une partition de . Selon le théorème de sommation par paquets, est sommable si et seulement si Or pour tout  Ce qui ramène l'équivalence à juste la deuxième condition, elle même équivalente à la sommabilité de la variable . D'où l'équivalence énoncée dans le théorème et la validité de la formule : par sommation par paquets.      Soient et deux VADR. Soit une application définie sur . La variable est sommable si et seulement si la famille est sommable est dans ce cas     Il suffit d'appliquer la formule de transfert au couple .       La formule de transfert permet donc de combiner les résultats de deux variables et en utilisant la loi conjointe du couple . Ce qui résout le problème de la dépendance de l'expression de de l'ensemble .  Par exemple la variable est sommable si et seulement si la famille est sommable et dans ce cas Noter qu'en considérant les application et , alors selon ce même résultat, les variables et sont respectivement sommable si et seulement si les familles et sont sommables et dans ce cas Expressions qui utilisent notablement le même ensemble des indices pour les deux sommes.       Toutes les variables aléatoires introduites dans la suite sont supposées définies sur l'espace .    Espérance d'une variable presque partout constante  Une VADR presque partout constante de valeur est sommable et .    Linéarité de l'espérance  Si et sont deux VADR sommables de alors pour tout , est sommable et Ce qui signifie que est un -ev et que est une forme linéaire de .    Positivité de l'espérance  Si est une VADR positive alors . De plus si et seulement si est presque partout nulle sur .    Croissance et domination  Soient et deux VADR.   Si et sont sommables et alors .    Si et est sommable alors est sommable et        Effet de l'indépendance  Si et sont deux VADR indépendantes sommables alors est sommable et .    Inégalité de Cauchy-Schwarz  Soient et deux VADR. Si et sont sommables alors est sommable et on a avec égalité si et seulement si est presque partout nulle ou s'il existe une constante telle que presque partout sur (ie )         toute VADR bornée est sommable. De plus     Si sont des VADR sommables alors et sont sommables. En outre si et sont à valeurs dans alors avec   La sommabilité de et découle de la linéarité de l'espérance et des relation Ensuite si sont à valeurs dans alors selon la remarque précédente .          Soit un vecteur aléatoire sommable au sens de la remarque alors ne dépend pas de la base choisie dans .   Considérons une autre base de . Posons pour tout , alors pour tout  En appliquant la même recette au vecteur on aboutit à Maintenant, puisque les variables sont par défintion sommabales alors les variables sont sommables par linéarité et et ainsi . Expression qui prouve que ne dépend pas de la base utilisée.     Soit un vecteur aléatoire à valeurs dans un espace vectoriel de dimension finie . Si est sommable alors pour toute application linéaire définie sur , la variable est sommable et        Exemples usuels   Espérances des lois usuelles    désignera une VADR.     Loi uniforme   Si alors où sont les résultats possibles de l'expérience.     Loi de Bernouilli   Si alors .     Loi binomiale   Si alors .     Loi géométrique   Si alors .     Loi de Poisson   Si alors .        Activités   Loi hypergéométrique   Si alors .    Rappelons que signifie Donc      Temps d'attente du succès   Si est le temps d'attente du succès quand on répète indéfiniment et de façon indépendante un test de Bernouilli de paramètre alors     On peut écrire avec et si . Les variables sont mutuellement indépendantes et suivent toute la loi , donc   Par calcul direct : on a déjà calculé la loi de  donc      Espérance d'une variable à valeurs dans   Une VADR à valeurs dans est sommable si et seulement si la suite est sommable et dans ce cas     La famille est à termes réels positifs, ce qui legitime le calcul suivant, y compris pour l'interversion des sommes :      Espérance du min   On considère deux VAD à valeurs dans , indépendantes et de même loi. Exprimer en fonction des probabilités . Appliquer au cas où et expliquer le résultat obtenu.    Selon l'activité précédente Si alors pour tout  et finalement  est le temps d'attente d'au moins un succés quand on exécute simultanement deux instances indépendantes d'un même test de Bernouilli de paramètre . Si on note respectivement et les événements succés pour le premier et le deuxième test, le paramètre de notre expérience est Ce qui montre qu'en fait   Noter que si et sont indépendantes mais et alors le même calcul similaire aboutit à      Une composition de lois    est une variable qui suit la loi . est une suite de variables de Bernouilli de même paramètre . On suppose que et toutes les variables sont mutuellement indépendantes. Déterminer la loi de la variable et calculer son espérance. Décrire une expérience aléatoire qu'on peut modéliser avec .     Donc et par suite .     "
},
{
  "id": "def-esperance",
  "level": "2",
  "url": "sec-esparance.html#def-esperance",
  "type": "Définition",
  "number": "3.1.1",
  "title": "",
  "body": "  Soit une variable aléatoire discrète réelle définie sur .  On dit que est sommable, ou que admet une espérance, si la famille est sommable. On appelle alors espérance de le réel On notera l'ensemble des VADR sommables définies sur    "
},
{
  "id": "subsec-defprop-3",
  "level": "2",
  "url": "sec-esparance.html#subsec-defprop-3",
  "type": "Remarque",
  "number": "3.1.2",
  "title": "",
  "body": "   Quand elle définie, est le barycentre de la famille de points pondérés . Pour cette raison on l'appelle aussi valeur moyenne de .    Dans le cas d'une VADR à valeurs positives ou nulles, si n'est pas sommable alors on pose par convention  est alors sommable si et seulement si .    En conséquence, pour une VADR quelconque     La définition a un inconvénient : la somme utilisée est indexée par un ensemble qui dépend de . Ce qui pose un problème lorsqu'on combine entre plusieurs variables aléatoire. Comme lorsque on s'intéresse à par exemple.  La formule de transfert énoncée ci-après résout ce problème.    La définition de dépend seulement de la loi de . Dans ce sens deux variables qui ont la même loi ont la même espérance. Nous parlerons souvent de l'espérance d'une loi de probabilité pour désigner l'espérance des variables qui suivent cette loi.    La définition se limite aux variables aléatoires discrète réelles , mais elle est tout à fait valable sans aucune modification pour les variables aléatoires discrètes à valeurs complexes . La notion de base utilisée étant celle de familles sommables et celle-ci a été étudiée dans le cadre des familles de nombres réels ou complexes.    "
},
{
  "id": "subsec-defprop-4",
  "level": "2",
  "url": "sec-esparance.html#subsec-defprop-4",
  "type": "Exploration",
  "number": "3.1.1",
  "title": "",
  "body": "   On peut généraliser la notion d'espérance à des vecteurs aléatoires discrets en utilisant les «variables composantes» : si est un vecteur aléatoire discret à valeurs dans un -ev de dimension finie qui s'écrit sous la forme où est une base fixée de , alors, par définition, est sommable si et seulement si les variables sont sommables et dans ce cas Cela pose toutefois le problème de la dépendance de cette définition par rapport à la base utilisée. (Voir remarque )    Dans le cas d'une matrice aléatoire par exemple, est sommable si et seulement si est sommable pout et dans ce cas, par définition     Attention toutefois : les familles sommables de vecteurs ne sont pas au programme. Donc l'écriture déborde du cadre limité par celui-ci.    "
},
{
  "id": "prop-casdenom",
  "level": "2",
  "url": "sec-esparance.html#prop-casdenom",
  "type": "Proposition",
  "number": "3.1.3",
  "title": "",
  "body": "  On suppose que est au plus dénombrable. Une VADR définie sur est sommable si et seulement si la famille est sommable et dans ce cas     La famille d'événemnts est une partition de et pour tout on a Donc selon le théorème de sommation par paquets et dans ce cas    "
},
{
  "id": "subsec-defprop-6",
  "level": "2",
  "url": "sec-esparance.html#subsec-defprop-6",
  "type": "Remarque",
  "number": "3.1.4",
  "title": "",
  "body": " Apparement ce dernier résultat résout le problème de l'ecriture de en fonction de l'ensemble (qui dépend de ). L'intérêt est toutefois relatif car dans la pratique on ne contrôle pas l'univers lui même et il n'est pas nécessairement au plus dénombrable.  "
},
{
  "id": "thm-transfert",
  "level": "2",
  "url": "sec-esparance.html#thm-transfert",
  "type": "Théorème",
  "number": "3.1.5",
  "title": "(formule de transfert).",
  "body": " (formule de transfert)   Soit une VAD définie sur (possiblement à valeurs vectorielles). Soit une application définie sur .  La variable est sommable si et seulement si la famille est sommable et dans ce cas     On pose et on imite la démonstration de la proposition précédente en observant cette fois que est une partition de . Selon le théorème de sommation par paquets, est sommable si et seulement si Or pour tout  Ce qui ramène l'équivalence à juste la deuxième condition, elle même équivalente à la sommabilité de la variable . D'où l'équivalence énoncée dans le théorème et la validité de la formule : par sommation par paquets.   "
},
{
  "id": "cor-transfert",
  "level": "2",
  "url": "sec-esparance.html#cor-transfert",
  "type": "Corollaire",
  "number": "3.1.6",
  "title": "",
  "body": "  Soient et deux VADR. Soit une application définie sur . La variable est sommable si et seulement si la famille est sommable est dans ce cas     Il suffit d'appliquer la formule de transfert au couple .   "
},
{
  "id": "subsec-defprop-9",
  "level": "2",
  "url": "sec-esparance.html#subsec-defprop-9",
  "type": "Remarque",
  "number": "3.1.7",
  "title": "",
  "body": "   La formule de transfert permet donc de combiner les résultats de deux variables et en utilisant la loi conjointe du couple . Ce qui résout le problème de la dépendance de l'expression de de l'ensemble .  Par exemple la variable est sommable si et seulement si la famille est sommable et dans ce cas Noter qu'en considérant les application et , alors selon ce même résultat, les variables et sont respectivement sommable si et seulement si les familles et sont sommables et dans ce cas Expressions qui utilisent notablement le même ensemble des indices pour les deux sommes.    "
},
{
  "id": "prop-proprietes",
  "level": "2",
  "url": "sec-esparance.html#prop-proprietes",
  "type": "Proposition",
  "number": "3.1.8",
  "title": "",
  "body": "  Toutes les variables aléatoires introduites dans la suite sont supposées définies sur l'espace .    Espérance d'une variable presque partout constante  Une VADR presque partout constante de valeur est sommable et .    Linéarité de l'espérance  Si et sont deux VADR sommables de alors pour tout , est sommable et Ce qui signifie que est un -ev et que est une forme linéaire de .    Positivité de l'espérance  Si est une VADR positive alors . De plus si et seulement si est presque partout nulle sur .    Croissance et domination  Soient et deux VADR.   Si et sont sommables et alors .    Si et est sommable alors est sommable et        Effet de l'indépendance  Si et sont deux VADR indépendantes sommables alors est sommable et .    Inégalité de Cauchy-Schwarz  Soient et deux VADR. Si et sont sommables alors est sommable et on a avec égalité si et seulement si est presque partout nulle ou s'il existe une constante telle que presque partout sur (ie )     "
},
{
  "id": "subsec-defprop-11",
  "level": "2",
  "url": "sec-esparance.html#subsec-defprop-11",
  "type": "Remarque",
  "number": "3.1.9",
  "title": "",
  "body": "   toute VADR bornée est sommable. De plus     Si sont des VADR sommables alors et sont sommables. En outre si et sont à valeurs dans alors avec   La sommabilité de et découle de la linéarité de l'espérance et des relation Ensuite si sont à valeurs dans alors selon la remarque précédente .      "
},
{
  "id": "subsec-defprop-12",
  "level": "2",
  "url": "sec-esparance.html#subsec-defprop-12",
  "type": "Exploration",
  "number": "3.1.2",
  "title": "",
  "body": "   Soit un vecteur aléatoire sommable au sens de la remarque alors ne dépend pas de la base choisie dans .   Considérons une autre base de . Posons pour tout , alors pour tout  En appliquant la même recette au vecteur on aboutit à Maintenant, puisque les variables sont par défintion sommabales alors les variables sont sommables par linéarité et et ainsi . Expression qui prouve que ne dépend pas de la base utilisée.     Soit un vecteur aléatoire à valeurs dans un espace vectoriel de dimension finie . Si est sommable alors pour toute application linéaire définie sur , la variable est sommable et     "
},
{
  "id": "subsec-exemple-esperance-2",
  "level": "2",
  "url": "sec-esparance.html#subsec-exemple-esperance-2",
  "type": "Liste",
  "number": "3.1.10",
  "title": "Espérances des lois usuelles",
  "body": " Espérances des lois usuelles    désignera une VADR.     Loi uniforme   Si alors où sont les résultats possibles de l'expérience.     Loi de Bernouilli   Si alors .     Loi binomiale   Si alors .     Loi géométrique   Si alors .     Loi de Poisson   Si alors .     "
},
{
  "id": "subsec-activites-2",
  "level": "2",
  "url": "sec-esparance.html#subsec-activites-2",
  "type": "Activité",
  "number": "3.1.3",
  "title": "Loi hypergéométrique.",
  "body": " Loi hypergéométrique   Si alors .    Rappelons que signifie Donc    "
},
{
  "id": "subsec-activites-3",
  "level": "2",
  "url": "sec-esparance.html#subsec-activites-3",
  "type": "Activité",
  "number": "3.1.4",
  "title": "Temps d’attente du <span class=\"process-math\">\\(k^\\text{e}\\)<\/span> succès.",
  "body": " Temps d'attente du succès   Si est le temps d'attente du succès quand on répète indéfiniment et de façon indépendante un test de Bernouilli de paramètre alors     On peut écrire avec et si . Les variables sont mutuellement indépendantes et suivent toute la loi , donc   Par calcul direct : on a déjà calculé la loi de  donc    "
},
{
  "id": "subsec-activites-4",
  "level": "2",
  "url": "sec-esparance.html#subsec-activites-4",
  "type": "Activité",
  "number": "3.1.5",
  "title": "Espérance d’une variable à valeurs dans <span class=\"process-math\">\\(\\N\\)<\/span>.",
  "body": " Espérance d'une variable à valeurs dans   Une VADR à valeurs dans est sommable si et seulement si la suite est sommable et dans ce cas     La famille est à termes réels positifs, ce qui legitime le calcul suivant, y compris pour l'interversion des sommes :    "
},
{
  "id": "subsec-activites-5",
  "level": "2",
  "url": "sec-esparance.html#subsec-activites-5",
  "type": "Activité",
  "number": "3.1.6",
  "title": "Espérance du min.",
  "body": " Espérance du min   On considère deux VAD à valeurs dans , indépendantes et de même loi. Exprimer en fonction des probabilités . Appliquer au cas où et expliquer le résultat obtenu.    Selon l'activité précédente Si alors pour tout  et finalement  est le temps d'attente d'au moins un succés quand on exécute simultanement deux instances indépendantes d'un même test de Bernouilli de paramètre . Si on note respectivement et les événements succés pour le premier et le deuxième test, le paramètre de notre expérience est Ce qui montre qu'en fait   Noter que si et sont indépendantes mais et alors le même calcul similaire aboutit à    "
},
{
  "id": "subsec-activites-6",
  "level": "2",
  "url": "sec-esparance.html#subsec-activites-6",
  "type": "Activité",
  "number": "3.1.7",
  "title": "Une composition de lois.",
  "body": " Une composition de lois    est une variable qui suit la loi . est une suite de variables de Bernouilli de même paramètre . On suppose que et toutes les variables sont mutuellement indépendantes. Déterminer la loi de la variable et calculer son espérance. Décrire une expérience aléatoire qu'on peut modéliser avec .     Donc et par suite .   "
},
{
  "id": "sec-varcovar",
  "level": "1",
  "url": "sec-varcovar.html",
  "type": "Section",
  "number": "3.2",
  "title": "Variance, covariance",
  "body": " Variance, covariance    Une VADR est dite de carré sommable si est sommable.  On notera l'ensemble des VADR de carrés sommables définies sur .       est un -espace vectoriel et le produit de deux VADR de carrés sommables est une variable sommable.    Découle du fait que si alors et donc par domination. Ensuite pour tout  et donc, par domination, . Sachant que la variable nulle est dans , ceci prouve que est un sous-espace vectoriel de .        Soit . La variable est sommable et son espérance est appelée variance de . On la note      Soient . La variable est sommable et son espérance est appelée covariance des variables et . On la note .        est la moyenne «quadratique» de . Elle mésure la moyenne de l'écart que peut prendre avec sa moyenne .   mésure le degré de corélation entre et , c'est à dire à quels points les résultats obtenus par et par s'influencent les uns les autres. On notera par exemple que si et sont indépendantes (aucune corélation) alors et sont indépendantes et donc        Noter que si alors .           Soient     avec égalité si et seulement si est presque partout constante.              Si et sont indépendantes alors .          est une forme bilinéaire symétrique positive de . L'inégalité de Cauchy-Schwarz pour cette forme s'écrit : avec égalité si et seulement s'il existe des réels et non tous les deux nuls tels que soit presque partout constante.    "
},
{
  "id": "def-carre-sommable",
  "level": "2",
  "url": "sec-varcovar.html#def-carre-sommable",
  "type": "Définition",
  "number": "3.2.1",
  "title": "",
  "body": "  Une VADR est dite de carré sommable si est sommable.  On notera l'ensemble des VADR de carrés sommables définies sur .   "
},
{
  "id": "prop-ltwo",
  "level": "2",
  "url": "sec-varcovar.html#prop-ltwo",
  "type": "Proposition",
  "number": "3.2.2",
  "title": "",
  "body": "   est un -espace vectoriel et le produit de deux VADR de carrés sommables est une variable sommable.    Découle du fait que si alors et donc par domination. Ensuite pour tout  et donc, par domination, . Sachant que la variable nulle est dans , ceci prouve que est un sous-espace vectoriel de .   "
},
{
  "id": "def-varcovar",
  "level": "2",
  "url": "sec-varcovar.html#def-varcovar",
  "type": "Définition",
  "number": "3.2.3",
  "title": "",
  "body": "    Soit . La variable est sommable et son espérance est appelée variance de . On la note      Soient . La variable est sommable et son espérance est appelée covariance des variables et . On la note .        est la moyenne «quadratique» de . Elle mésure la moyenne de l'écart que peut prendre avec sa moyenne .   mésure le degré de corélation entre et , c'est à dire à quels points les résultats obtenus par et par s'influencent les uns les autres. On notera par exemple que si et sont indépendantes (aucune corélation) alors et sont indépendantes et donc    "
},
{
  "id": "sec-varcovar-5",
  "level": "2",
  "url": "sec-varcovar.html#sec-varcovar-5",
  "type": "Remarque",
  "number": "3.2.4",
  "title": "",
  "body": "   Noter que si alors .        "
},
{
  "id": "prop-var-identite",
  "level": "2",
  "url": "sec-varcovar.html#prop-var-identite",
  "type": "Proposition",
  "number": "3.2.5",
  "title": "",
  "body": "  Soient     avec égalité si et seulement si est presque partout constante.              Si et sont indépendantes alors .      "
},
{
  "id": "thm-varcovar",
  "level": "2",
  "url": "sec-varcovar.html#thm-varcovar",
  "type": "Théorème",
  "number": "3.2.6",
  "title": "",
  "body": "   est une forme bilinéaire symétrique positive de . L'inégalité de Cauchy-Schwarz pour cette forme s'écrit : avec égalité si et seulement s'il existe des réels et non tous les deux nuls tels que soit presque partout constante.   "
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
