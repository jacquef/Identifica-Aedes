<template>
    <div class="container-footer">
        <div class="sobre">
            <h3>Sobre o Projeto</h3>
            <p><a href="#">Detalhes de Uso</a></p>
            <p><a href="#">Requisitos Mínimos</a></p>
            <p>Data da última atualização: Out/2020</p>
        </div>
        <div class="contato">
            <h3>Contato</h3>            
            <div class="integrantes">
                <p>Bruno Palma </p>
                <div class="integrantes__links">
                    <img class="git-img" src="./../assets/github.png">
                    <img class="lkdn-img" src="./../assets/linkedin.png">
                </div>
            </div>
            <div class="integrantes">
                <p>Jacqueline Souza</p>
                <div class="integrantes__links">
                    <img class="git-img" src="./../assets/github.png">
                    <img class="lkdn-img" src="./../assets/linkedin.png">
                </div>
            </div>
            <div class="integrantes">
                <p>Juan Portugal</p>
                <div class="integrantes__links">
                    <img class="git-img" src="./../assets/github.png">
                    <img class="lkdn-img" src="./../assets/linkedin.png">
                </div>
            </div>
            <div class="integrantes">
                <p>Vinícius Ferreira</p>
                <div class="integrantes__links">
                    <img class="git-img" src="./../assets/github.png">
                    <img class="lkdn-img" src="./../assets/linkedin.png">
                </div>
            </div>
            <div class="integrantes">
                <p>Willian Inocêncio</p>
                <div class="integrantes__links">
                    <img class="git-img" src="./../assets/github.png">
                    <img class="lkdn-img" src="./../assets/linkedin.png">
                </div>
            </div>         
        </div>
    </div>
</template>

<script>

export default {
    
}
</script>

<style scoped>
    .container-footer {
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: black;
        padding: 50px 0;
    }

    .sobre {
        padding: 0 20px;
    }

    .contato {
        margin-top: 40px;
    }

    h3 {
        color: #2E8B57;
        font-size: 18px;
        margin-bottom: 10px;
    }

    p, a {
        font-size: 14px;
        color: #DCDCDC;
        letter-spacing: 1px;
        text-decoration: none;
        margin: 10px 0;
        line-height: 1.6em;
    }

    a:hover {
        text-decoration: underline;
    }
    
    .git-img {
        width: 20px;
        height: auto;
        margin-right: 10px;
    }

    .lkdn-img {
        width: 20px;
        height: auto;
        margin-left: 10px;
    }

   
</style>