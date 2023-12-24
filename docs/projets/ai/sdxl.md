# Stable Diffusion pour générer des images

Stable Diffusion est une série de modèles de génération d'images open-source développés par [Stability AI](https://github.com/Stability-AI/generative-models)

En particulier, le 26 juillet 2023 ont été diffusés les modèles **SDXL 1.0**, plus performants que les précédents.

## Utilisation

### En local

Les modèles nécessitent l'installtion de **pytorch** et l'accélération matérielle de la carte graphique (GPU). Plusieurs interface permettent d'utiliser les modèles Stable Diffusion.

#### Installation avec un GPU AMD

##### Installation de Amdgpu 5.5.0

Les versions ultérieures ne marchent pas ? [voir ici](https://github.com/xuhuisheng/rocm-gfx803/issues/27#issuecomment-1585514854)

```bash
# Récupération de l'installateur
wget https://repo.radeon.com/amdgpu-install/5.5/ubuntu/jammy/amdgpu-install_5.5.50500-1_all.deb
sudo dpkg -i amdgpu-install_5.5.50500-1_all.deb
# Instalation des driver avec le support de rocm
sudo amdgpu-install -y --usecase=rocm,hiplibsdk,mlsdk
# Créer un lien symbolique pour que la compilation de pytoch trouve rccl
sudo ln -s /opt/rocm/rccl/lib/librccl.so  /usr/lib/librccl.so
# Ajout de notre utilisateur aux groupes video et render
sudo usermod -aG video $LOGNAME
sudo usermod -aG render $LOGNAME
```

##### Installation avec Radeon X580
Architecture gfx803 n'est plus supportée officiellement par pytoch, il faut donc le compiler nous même.

###### Compilation de pytorch et torchvision

Voir les [instructions ici](https://github.com/tsl0922/pytorch-gfx803#install-rocm)

- Ajouter ces variables d'environnement puis **redémarrer** l'ordinateur :

```bash
sudo -i
sudo echo ROC_ENABLE_PRE_VEGA=1 >> /etc/environment
sudo echo HSA_OVERRIDE_GFX_VERSION=8.0.3 >> /etc/environment
```

- Compiler pytorch

```bash
cd
# Installation des dépendances
sudo apt install libopenmpi3 libstdc++-12-dev libdnnl-dev ninja-build libopenblas-dev libpng-dev libjpeg-dev cmake build-essential git
# Récupération du code source de la version 2.0.1
git clone https://github.com/pytorch/pytorch.git -b v2.0.1
# patcher le code pour éviter le bug : multiple definition of `gloo::rendezvous::Store::kDefaultTimeout'
#https://github.com/pytorch/pytorch/issues/90448#issuecomment-1670918495
patch -p1 <<EOF
--- a/torch/csrc/distributed/c10d/ProcessGroupGloo.hpp
+++ b/torch/csrc/distributed/c10d/ProcessGroupGloo.hpp
@@ -125,7 +125,7 @@
     }

     void wait(const std::vector<std::string>& keys) override {
-      store_->wait(keys, Store::kDefaultTimeout);
+      store_->wait(keys, ::c10d::Store::kDefaultTimeout);
     }

     void wait(
EOF
# Définition de variables d'environnement
export PATH=/opt/rocm/bin:$PATH ROCM_PATH=/opt/rocm HIP_PATH=/opt/rocm/hip
export PYTORCH_ROCM_ARCH=gfx803
export PYTORCH_BUILD_VERSION=2.0.1 PYTORCH_BUILD_NUMBER=1
# Préparation de la compilation
python3 tools/amd_build/build_amd.py
# Compilation
USE_ROCM=1 USE_NINJA=1 python3 setup.py bdist_wheel
# Installation du paquet ainsi compilé
pip3 install dist/torch-1.13.1-cp310-cp310-linux_x86_64.whl
```

- Compilation et installation de torchvision

```bash
cd
git clone https://github.com/pytorch/vision.git -b v0.15.2
cd vision
export BUILD_VERSION=0.15.2
FORCE_CUDA=1 ROCM_HOME=/opt/rocm/ python3 setup.py bdist_wheel
pip3 install dist/torchvision-0.14.1-cp310-cp310-linux_x86_64.whl
```

## Interfaces Web

### En local

#### Fooocus

https://github.com/lllyasviel/Fooocus

#### AUTOMATIC1111 Stable diffusion webui

Les fonctionnalités sont décrites [ici](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Features)

```bash
git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui
cd stable-diffusion-webui/models/Stable-diffusion
wget https://huggingface.co/stabilityai/stable-diffusion-xl-refiner-1.0/resolve/main/sd_xl_refiner_1.0.safetensors
wget https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0/resolve/main/sd_xl_base_1.0.safetensors


./webui.sh --upcast-sampling --no-half
```

??? note "Ressources"
    - [stable-diffusion-art.com](https://stable-diffusion-art.com/automatic1111/)

#### StableSwarmUI

https://github.com/Stability-AI/StableSwarmUI

#### InvokeAI

https://github.com/invoke-ai/InvokeAI

#### ComfyUI
https://github.com/comfyanonymous/ComfyUI


##### Workflows
[SeargeSDXL](https://github.com/SeargeDP/SeargeSDXL/blob/main/README.md)


##### Deforum pour la vidéo

[Explications](https://aituts.com/deforum/)

##### ROOP : changer de visage
https://github.com/s0md3v/roop

### En ligne

#### Replicate
Pour tester [SDXL](https://replicate.com/stability-ai/sdxl), ou d'[autres](https://replicate.com/explore)

#### Goggle colab

- [AutoTrain_Dreambooth.ipynb](https://colab.research.google.com/github/huggingface/autotrain-advanced/blob/main/colabs/AutoTrain_Dreambooth.ipynb)
Utilisation de Dreamboot pour créer un modèle LoRA

- [SDXL_1_0_with_T2I_Adapter_ControlNet_Inpainting_Train_Lora.ipynb](https://colab.research.google.com/github/R3gm/InsightSolver-Colab/blob/main/SDXL_1_0_with_T2I_Adapter_ControlNet_Inpainting_Train_Lora.ipynb?pli=1)
Une démonstration de nombreuses fonctionalités en lignes de commandes.

- [fast_stable_diffusion_AUTOMATIC1111.ipynb](https://colab.research.google.com/github/TheLastBen/fast-stable-diffusion/blob/main/fast_stable_diffusion_AUTOMATIC1111.ipynb)
POur utiliser AUTOMATIC1111 WebUI. Explications [ici](https://bytexd.com/best-way-to-run-stable-diffusion-for-free)

-[fast-DreamBooth.ipynb](https://colab.research.google.com/github/TheLastBen/fast-stable-diffusion/blob/main/fast-DreamBooth.ipynb)
Pour façonner ses modèles avec DreamBooth. Explication [ici](https://bytexd.com/how-to-use-dreambooth-to-fine-tune-stable-diffusion-colab/)

- [Automatic1111](https://colab.research.google.com/drive/1wEa-tS10h4LlDykd87TF5zzpXIIQoCmq#scrollTo=8Uvqba0yKW7U)

- [ComfyUI](https://colab.research.google.com/drive/1ZMvLWEiYITmBJngtqeIQToeNuiydwI0z)

- [InvokeAI](https://colab.research.google.com/github/R3gm/InsightSolver-Colab/blob/main/Stable_Diffusion_Web_UI_Alternatives_in_Colab.ipynb)

- [Animagine_XL_demo.ipynb](https://colab.research.google.com/#fileId=https%3A//huggingface.co/Linaqruf/animagine-xl/blob/main/Animagine_XL_demo.ipynb)
Un modèle dérivé de DSXL 1.0 pour les Animes

- [nocrypt_colab_remastered.ipynb](https://colab.research.google.com/drive/1wEa-tS10h4LlDykd87TF5zzpXIIQoCmq#scrollTo=vcca4v99sBd6)


- [Un grand nombre de Colab](https://github.com/R3gm/InsightSolver-Colab/) en lien avec le machine Learning

## Ressources

###### Base de données d'artistes
- [Google Arts & Culture](https://artsandculture.google.com/category/artist)
- Une étude de très nombreux rendus artistiques de SDXL [SDXL-artist-study](https://rikkar69.github.io/SDXL-artist-study/)

- [SD Artist Collection](https://sgreens.notion.site/sgreens/4ca6f4e229e24da6845b6d49e6b08ae7?v=fdf861d1c65d456e98904fe3f3670bd3)

- [Stable Diffusion V1 Artist Style Studies](https://proximacentaurib.notion.site/e28a4f8d97724f14a784a538b8589e7d?v=42948fd8f45c4d47a0edfc4b78937474)

- [Arthive](https://arthive.com/fr/artists)


##### Modèles, Images, prompts

- [HuggingFace](https://huggingface.co/spaces/huggingface-projects/diffusers-gallery)
- [Tensor.art](https://tensor.art)

- [civit.ai](https://civitai.com)

- [openart.ai](https://openart.ai/discovery)
Partage d'images et de prompts, et un [PDF d'explication des prompts](https://cdn.openart.ai/assets/Stable%20Diffusion%20Prompt%20Book%20From%20OpenArt%2011-13.pdf)

- [lexica.art](https://lexica.art/)

- [CLIP Interrogator](https://huggingface.co/spaces/pharma/CLIP-Interrogator)
Pour connaitre le meilleur prompt pour obtenir une image.

- [Prompt Generator](https://huggingface.co/spaces/Gustavosta/MagicPrompt-Stable-Diffusion)
Création de prompt à partir de texte

### Entrainement des modèles

- [AutoTrain_Dreambooth.ipynb](https://colab.research.google.com/github/huggingface/autotrain-advanced/blob/main/colabs/AutoTrain_Dreambooth.ipynb)
Utilisation de Dreamboot pour créer un modèle LoRA

- [SDXL_1_0_with_T2I_Adapter_ControlNet_Inpainting_Train_Lora.ipynb](https://colab.research.google.com/github/R3gm/InsightSolver-Colab/blob/main/SDXL_1_0_with_T2I_Adapter_ControlNet_Inpainting_Train_Lora.ipynb?pli=1)

- [Autotrain](https://huggingface.co/docs/autotrain/index)


###### Blogs
- [Aituts](https://aituts.com)


