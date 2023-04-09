# API pour l'application monPanier

Toutes les données sont décrites aux format JSON, sauf les images.

Cette api est basée sur le package [JSON Server](https://github.com/typicode/json-server).

## Routes
Routes pour la gestion des **articles** :

    GET /articles
    GET /articles/id
    POST /articles
    PUT /articles/id
    PATCH /articles/id
    DELETE /articles/id

Routes pour la gestion des articles dans le **panier** :

    GET /panier
    GET /panier/id
    POST /panier
    PUT /panier/id
    PATCH /panier/id
    DELETE /panier/id

Route pour la **base de données** complète :

    GET /db

Route statique pour l'accès aux **images** des articles :

    GET /images/nom_de_l_image

Un **article** est décrit par les attributs suivants :
```
{
    "id": number
    "description": string
    "prix": number
    "type": string
    "picture": string
}
```
exemple :
```
{
    "id": 23,
    "description": "PC 5",
    "prix": 621.90,
    "type": "pc",
    "picture": "/images/pc5.jpg"
}
```

un article du **panier** est décrit par les attributs suivants :
```
{
    "id": number
    "quantity": number
    "prix": number
}
```
exemple :
```
{
    "id": 1,
    "quantity": 2,
    "prix": 162.90
}
```

## Fonctionnement du serveur
Le serveur se lance en localhost sur le port 7000 par défaut (modifiable dans le fichier package.json.

Ce serveur sera accessible avec les urls suivantes (qui n'auront pas toutes le même impact) :

* http://localhost:7000
* http://127.0.0.1:7000
* http://Votre adresse IP:7000
Vous pouvez retrouver votre adresse IP avec la commande ```ifconfig``` sur linux ou ```ipconfig``` sur windows.

La 3ème forme est la plus accessible ne nécessitera pas d'autre configuration de votre part.

L'utilisation de localhost ou 127.0.0.1 nécessitera la mise ne place d'un forward de port sur un mobile physique ou emulateur (voir les scripts ci-dessous).

Si votre périphérique physique n'est pas sur le même réseau que votre machine, vous pouvez utiliser le script <code>ngrok</code> ci-dessous.

Vous avez à disposition les scripts suivant pour lancer votre serveur et configurer les accès par un périphérique mobile émulé :

* **"start"** (alias api ou json-server) - démarre le serveur d'api
* **"delay-api"** - démarre le serveur en mode dégradé avec un délais de réponse des requètes compris entre 0 et 5 secondes
* **"forward"** - met en place le proxy permettant à un mobile émulé d'accéder au serveur. A ne lancer qu'après avoir démarré l'émulateur
* **"ngrok"** - démarre un tunnel [ngrok](https://ngrok.com/docs) permettant des requètes fetch d'un mobile physique vers votre localhost. Nécessite l'installation de ngrok au préalable : ```sudo npm i -g ngrok``` ou ```sudo snap install ngrok``` sous linux
