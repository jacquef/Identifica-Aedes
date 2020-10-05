<template>
    <div class="container-footer">
        <div class="divisor"></div>
        <div class="container-main-footer">
            <div class="sobre">
                <h3>Sobre o Projeto</h3>
                <p><a href="#">Detalhes de Uso</a></p>
                <p><a href="#">Requisitos Mínimos</a></p>
                <p>Data da última atualização: Out/2020</p>
            </div>
            <div class="sobre">
                <h3>Contato</h3>            
                    <div class="integrantes">
                        <p>Bruno Palma </p>
                        <div class="integrantes__links">
                            <img src="./../assets/github.png">
                            <img src="./../assets/linkedin.png">
                        </div>
                    </div>
                    <div class="integrantes">
                        <p>Jacqueline Souza</p>
                        <div class="integrantes__links">
                            <img src="./../assets/github.png">
                            <img src="./../assets/linkedin.png">
                        </div>
                    </div>
                    <div class="integrantes">
                        <p>Juan Portugal</p>
                        <div class="integrantes__links">
                            <img src="./../assets/github.png">
                            <img src="./../assets/linkedin.png">
                        </div>
                    </div>
                    <div class="integrantes">
                        <p>Vinícius Ferreira</p>
                        <div class="integrantes__links">
                            <img src="./../assets/github.png">
                            <img src="./../assets/linkedin.png">
                        </div>
                    </div>
                    <div class="integrantes">
                        <p>Willian Inocêncio</p>
                        <div class="integrantes__links">
                            <img src="./../assets/github.png">
                            <img src="./../assets/linkedin.png">
                        </div>
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
        width: 90%;
        display: inline-block;
    }

    .divisor {
        height: 1px;
        background-color: #696969;
    }

    .sobre {
        text-align: start;
        padding: 0 10px;
    }

    h3 {
        color: #2E8B57;
        font-size: 18px;
        margin-top: 15px;
    }

    p, a {
        font-size: 14px;
        color: #DCDCDC;
        margin: 8px 0;
        letter-spacing: 1px;
    }
    
    img {
        width: 20px;
        height: auto;
        margin-right: 10px;
    }

    .integrantes {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 80%;
    }
</style>