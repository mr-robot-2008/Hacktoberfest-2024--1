<div align="center">

   # VideoLingo : Connecter le monde, image par image
  <p align="center">
      <a href="https://www.python.org" target="_blank"><img src="https://img.shields.io/badge/Python-3.10-blue.svg" alt="Python"></a>
      <a href="https://github.com/Huanshere/VideoLingo/blob/main/LICENSE" target="_blank"><img src="https://img.shields.io/github/license/Huanshere/VideoLingo.svg" alt="License"></a>
      <a href="https://github.com/Huanshere/VideoLingo/stargazers" target="_blank"><img src="https://img.shields.io/github/stars/Huanshere/VideoLingo.svg" alt="GitHub stars"></a>
    </p>
    
   [**中文**](README.md) | [**English**](README.en.md)｜[**日本語**](README.ja.md)
    
  **Groupe QQ : 875297969**
    
  </div>
    
   ## 🌟 Introduction au projet
    
  VideoLingo est un outil tout-en-un de traduction et de doublage pour vidéos, visant à produire des sous-titres de qualité Netflix, à éliminer les traductions mécaniques rigides et les sous-titres sur plusieurs lignes, tout en ajoutant un doublage de haute qualité. Il permet de partager des connaissances au-delà des barrières linguistiques à travers le monde. Grâce à une interface web intuitive Streamlit, vous pouvez accomplir tout le processus, depuis le lien vidéo jusqu'à l'intégration de sous-titres bilingues de haute qualité et même le doublage, en quelques clics, créant facilement des vidéos localisées de qualité Netflix.
    
Caractéristiques principales et fonctionnalités :
    - 🎥 Utilise yt-dlp pour télécharger des vidéos depuis des liens YouTube
    
  - 🎙️ Utilise WhisperX pour une reconnaissance des sous-titres au niveau des mots
    
    - **📝 Utilise le NLP et GPT pour segmenter les sous-titres en fonction du sens des phrases**
    
    - **📚 GPT résume et extrait une base de connaissances terminologiques pour une traduction contextualisée**
    
    - **🔄 Traduction en trois étapes (directe, réflexion et paraphrase), rivalisant avec la qualité de traduction professionnelle**
    
    - **✅ Vérifie la longueur d'une seule ligne selon les normes Netflix, évitant strictement les sous-titres en double ligne**
    
    - **🗣️ Utilise des méthodes comme GPT-SoVITS pour un doublage aligné de haute qualité**
    
    - 🚀 Lancement d'un package intégré en un clic, production de vidéos en un clic via Streamlit
    
    - 📝 Journalisation détaillée de chaque étape d'opération, avec support de reprise en cas d'interruption
    
    - 🌐 Support multilingue complet, permettant une localisation vidéo dans plusieurs langues
    
    ## 🎥 Démonstration
    
    <table>
    <tr>
    <td width="25%">
    
    ### Traduction russe
    ---
    https://github.com/user-attachments/assets/25264b5b-6931-4d39-948c-5a1e4ce42fa7
    
    </td>
    <td width="25%">
    
    ### GPT-SoVITS
    ---
    https://github.com/user-attachments/assets/47d965b2-b4ab-4a0b-9d08-b49a7bf3508c
    
    </td>
    <td width="25%">
    
    ### Fish TTS Ding Zhen
    ---
    https://github.com/user-attachments/assets/e7bb9090-d2ef-4261-9dc5-56bd67dc710d
    
    </td>
    <td width="25%">
    
    ### OAITTS
    ---
    https://github.com/user-attachments/assets/85c64f8c-06cf-4af9-b153-ee9d2897b768
    
    </td>
    </tr>
    </table>
    
    ### Support linguistique :
    
    Langues d'entrée actuellement supportées et exemples :
    
    | Langue d'entrée | Niveau de support | Démo de traduction | Démo de doublage |
    |----------------|-------------------|--------------------|------------------|
    | Anglais | 🤩 | [Anglais vers chinois](https://github.com/user-attachments/assets/127373bb-c152-4b7a-8d9d-e586b2c62b4b) | À venir |
    | Russe | 😊 | [Russe vers chinois](https://github.com/user-attachments/assets/25264b5b-6931-4d39-948c-5a1e4ce42fa7) | À venir |
    | Français | 🤩 | [Français vers japonais](https://github.com/user-attachments/assets/3ce068c7-9854-4c72-ae77-f2484c7c6630) | À venir |
    | Allemand | 🤩 | [Allemand vers chinois](https://github.com/user-attachments/assets/07cb9d21-069e-4725-871d-c4d9701287a3) | À venir |
    | Italien | 🤩 | [Italien vers chinois](https://github.com/user-attachments/assets/f1f893eb-dad3-4460-aaf6-10cac999195e) | À venir |
    | Espagnol | 🤩 | [Espagnol vers chinois](https://github.com/user-attachments/assets/c1d28f1c-83d2-4f13-a1a1-859bd6cc3553) | À venir |
    | Japonais | 😐 | [Japonais vers chinois](https://github.com/user-attachments/assets/856c3398-2da3-4e25-9c36-27ca2d1f68c2) | À venir |
    | Chinois* | 🤩 | [Chinois vers anglais](https://github.com/user-attachments/assets/48f746fe-96ff-47fd-bd23-59e9202b495c) | [Talk-show du professeur Luo Xiang](https://github.com/user-attachments/assets/85c64f8c-06cf-4af9-b153-ee9d2897b768) |
    > *Le chinois nécessite une configuration séparée du modèle whisperX, voir l'installation à partir du code source
    
    Le support des langues de traduction couvre toutes les langues gérées par le grand modèle linguistique, tandis que le support des langues pour le doublage dépend de la méthode TTS choisie.
    ## 🚀 Package intégré en un clic pour Windows
    
    ### Notes importantes :
    
    1. Le package intégré utilise la version CPU de torch, d'une taille d'environ **2,6G**.
    2. Lors de l'utilisation de UVR5 pour la séparation des voix dans l'étape de
    
