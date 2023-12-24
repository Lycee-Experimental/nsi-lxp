# Scratch

Cliquez sur l'image ci-dessous : 

[![Foo](/xtra/scratch/static/assets/90fb0caa5319c39b24946476dd32bb0d.svg)](/xtra/scratch)


??? info "Construire Scratch pour le Web"
    - Récupérer le code source et installer les dépendances npm :

    ```bash
    git clone --depth=1 https://github.com/LLK/scratch-gui.git
    cd scratch-gui
    npm install
    ```

    - Lancer Scratch localement pour voir si tout fonctionne, Scratch sera accessible ici : [http://0.0.0.0:8601/](http://0.0.0.0:8601/)
    ```bash
    npm start
    ```

    - Construire l'appli web qui sera ensuite accessible dans le dossier build.
    ```bash
    npm run build
    ```