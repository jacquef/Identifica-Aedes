<template>
    <div>
        <p>Selecione a imagem para ser analisada</p>
        <label for="file">Escolher</label>
        <div>
            <input id="file" type="file" accept="image/*" @change="pegarImagem">
            <img id="img" src="">
            <button id="btn-analisa" @click="analisarImagem">Analisar</button>
        </div>    
    </div>    
</template>

<script>

export default {

    

    methods: {
        pegarImagem: function(){
            var image = document.getElementById('img');
            image.src = URL.createObjectURL(event.target.files[0]);
            var botaoAnalisa = document.getElementById("btn-analisa");
            botaoAnalisa.style.display = "block";
        }

        
    }
   
}
</script>

<style scoped>
    p {
        color: white;
        margin-top: 30px;
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
        display: none;
    }
</style>