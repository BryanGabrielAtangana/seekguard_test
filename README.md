# **Seekguard - Test**

## **Description du Projet**

**Grain de Folie** est un projet de test qui simule une plateforme de recherche d'emplois dans le domaine de la boulangerie et de la pâtisserie en France. L'objectif était de créer une application web permettant de filtrer et de visualiser des offres d'emploi en fonction de critères tels que la localisation, le type de contrat, le salaire, et les certifications requises.

Initialement, j'ai envisagé d'utiliser l'API de **France Travail** pour récupérer des offres d'emploi réelles. Cependant, n'ayant pas pu obtenir le "access token", j'ai décidé de créer une **API personnalisée avec Next.js** en utilisant des données aléatoires pour simuler les offres d'emploi.

---

## **Fonctionnalités**

- **Filtrage des missions** : Par localisation, type de contrat et salaire.
- **Détails des missions** : Informations complètes sur chaque mission (nom, localisation, salaire, certifications requises, dates, etc.).
- **Pagination**
- **Responsive Design**

---

## **Technologies Utilisées**

- **Frontend** : Next.js, Tailwind CSS, Zustand, Shadcn.
- **Backend** : API personnalisée avec Next.js.
- **Déploiement** : Vercel.

---

## **Instructions d'Installation**

### **Étape 1 : Cloner le Projet**

Clonez le dépôt GitHub sur votre machine locale :

```bash
git clone https://github.com/BryanGabrielAtangana/seekguard_test.git
```

### **Étape 2 : Installer les Dépendances**

Accédez au dossier du projet et installez les dépendances :

```bash
npm install
```

### **Étape 3 : Lancer le Projet en Mode Développement**

Démarrez le serveur de développement :

```bash
npm run dev
```

Le site sera accessible à l'adresse : [http://localhost:3000](http://localhost:3000).

---

## **Déploiement sur Vercel**

Le projet est déployé sur Vercel. Vous pouvez accéder au site en ligne via le lien suivant :  
👉 [https://seekguardtest.vercel.app/](https://seekguardtest.vercel.app/)

---

## **Structure du Projet**

- **`app/`** : Contient les pages et les routes de l'application.
- **`components/`** : Composants réutilisables.
- **`store/`** : Gestion de l'état global avec Zustand.
- **`types/`** : Définitions TypeScript pour les missions et les filtres.
- **`data/`** : Données aléatoires utilisées pour simuler les offres d'emploi.

---

## **API Personnalisée**

Comme je n'ai pas pu obtenir une clé d'accès pour l'API France Travail, j'ai créé une **API personnalisée avec Next.js** pour simuler les données. Cette API permet de :

- Récupérer une liste de missions filtrées.
- Récupérer les détails d'une mission spécifique.

Exemple de réponse de l'API :

```json
{
  [
    {
      "id": 1,
      "nom": "Pâtissier(ère)",
      "localisation": "Paris",
      "salaire": "2500-3000€/mois",
      "type_contrat": "CDI",
      "certifications_requises": ["CAP Pâtisserie"],
      "dates": { "publication": "2023-10-01", "expiration": "2023-11-15" },
      "experience_requise": "2 ans minimum",
      "description": "Recherche d'un pâtissier créatif pour rejoindre notre équipe dans un environnement dynamique."
    }
  ],
...
}
```
