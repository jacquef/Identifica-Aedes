<template>
    <div>
        <p>Selecione a imagem para ser analisada</p>
        <label for="file">Escolher</label>
        <div>
            <input id="file" type="file" accept="image/*" @change="pegarImagem">
            <img id="img" :src="previewImage">
            <p v-if="showContagem">Foram encontrados {{this.contagem}} ovos.</p>
            <button v-if="showButton" id="btn-analisa" @click="prepararEnvioImagem">Analisar</button>
            <button v-if="showButtonDownload" itype="submit" @click="downloadImagem">Download</button>
        </div>    
    </div>    
</template>

<script>
import { ovitrapAPI } from '@/services/httpAPI.js';

export default {
    data() {
        return {
            image: null,
            previewImage: null,
            showButton: false,
            base64Image: null,
            showContagem: false,
            contagem: null,
            showButtonDownload: false
        }
    },

    methods: {
        pegarImagem(e) {
            this.image = e.target.files[0];
            this.previewImage = URL.createObjectURL(this.image);
            this.showButton = true
            this.showContagem = false;
            this.showButtonDownload = false;
        },
        prepararEnvioImagem() {
            const leitor = new FileReader();

            leitor.onload = (e) => {
                const base64 = e.target.result;
                this.base64Image = base64.split(',')[1];
                this.analisarImagem(this.base64Image);               
            }
            leitor.readAsDataURL(this.image);
        },
        analisarImagem(base64Image) {
            const headers = {
                'Content-Type': 'application/json'
            }

            const request = {
                body: {
                    file: base64Image
                }
            }

            ovitrapAPI.post('/api', request, {
                headers: headers
            })
            .then(res => {
                const result = JSON.parse(res.data.data);
                this.contagem = result.quantidadeOvos;
                this.previewImage = result.urlImage;
                this.showContagem = true;
                this.showButton = false;
                this.showButtonDownload = true;
            })
        },
        downloadImagem() {
            window.location = this.previewImage;
        }
        
    }
   
}
</script>

<style scoped>
    p {
        color: white;
        
    }

    label {
        background-color: #2E8B57;
        border-radius: 10px;
        color: white;
        cursor: pointer;
        margin: 12px;
        padding: 6px 20px;
    }

    input[type='file'] {
        display: none;
    }

    img {
        height: 300px;
        padding-top: 20px;
    }

    button {
        background-color: #2E8B57;
        border: none;
        border-radius: 10px;
        color: white;
        cursor: pointer;
        margin: 25px auto;
        padding: 6px 20px;
        font-family: 'Quicksand', sans-serif;
        font-size: 16px;
        display: block;
    }
</style>