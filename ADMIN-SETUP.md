# Configurer l’administration BIG.MOMO STUDIO

1. Créez un projet Supabase et copiez son URL et sa clé publique (anon/publishable) dans `.env.local`, à partir des exemples de `.env.local.example`.
2. Dans Supabase, ouvrez **SQL Editor**, exécutez `supabase-setup.sql`, puis créez un utilisateur propriétaire dans **Authentication > Users** avec e-mail et mot de passe.
3. Copiez l’UUID de cet utilisateur depuis la liste des utilisateurs. Dans `supabase-setup.sql`, remplacez les deux UUID `00000000-0000-0000-0000-000000000000` par le vrai UUID si vous souhaitez autoriser aussi les opérations directes par la clé utilisateur. Les changements effectués par le site sont contrôlés côté serveur par `ADMIN_EMAIL`.
4. Dans **Project Settings > API**, ajoutez la clé secrète `service_role` à `.env.local` sous `SUPABASE_SERVICE_ROLE_KEY`. Ajoutez l’adresse du compte propriétaire sous `ADMIN_EMAIL`. Ne partagez jamais la clé secrète et ne la mettez jamais dans une variable `NEXT_PUBLIC_`.
5. Arrêtez puis relancez le serveur Next.js après avoir renseigné `.env.local`.
6. Ouvrez `/admin`, connectez-vous, puis ajoutez les profils. Le champ slug définit l’adresse du profil et doit être unique. Les photos sont limitées à 8 Mo.

Les pages publiques affichent uniquement les joueurs publiés. Les pages existantes de Sirenho et Moussa restent en place. Les nouveaux profils disposent d’une page à `/player/slug-du-joueur`.

## Publication en ligne avec Vercel

1. Publiez d’abord les changements du dossier du projet sur GitHub. Le fichier `.env.local` est ignoré par Git et ne doit jamais être ajouté.
2. Connectez-vous à Vercel avec le compte GitHub qui contient `momolecoupable-ai/big-momo-studio`, puis importez ce dépôt. Vercel détecte automatiquement Next.js.
3. Dans les réglages du projet Vercel, ajoutez ces variables pour **Production**, **Preview** et **Development** : `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `ADMIN_EMAIL`.
4. Copiez les valeurs depuis `.env.local` directement dans les champs sécurisés de Vercel. Ne les envoyez pas dans un message et ne les ajoutez pas au code.
5. Lancez le déploiement. Vercel donnera une adresse `*.vercel.app`. Après toute modification du code, un nouveau déploiement est nécessaire ; les profils ajoutés depuis `/admin` n’en nécessitent pas.
