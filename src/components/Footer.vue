<template>
    <div class="container-footer">
        <div class="sobre">
            <h3>Sobre o Projeto</h3>
            <span><a href="https://s3.amazonaws.com/identificaaedes.ml/Requisitos+m%C3%ADnimos.pdf" target="_blank">Detalhes de Uso e Requisitos Mínimos</a></span>
            <span>Data da última atualização: Nov/2020</span>
        </div>
        <div class="contato">
            <h3>Contato</h3>    
            <div class="container-integrantes">        
                <div class="integrantes">
                    <p>Bruno Palma </p>
                    <div class="integrantes__links">
                        <img class="git-img" src="./../assets/github.png" @click="redirectGit('BrunoGPalma')">
                        <img class="lkdn-img" src="./../assets/linkedin.png" @click="redirectLinkedin('bruno-p-490b3a137')">
                    </div>
                </div>
                <div class="integrantes">
                    <p>Jacqueline Souza</p>
                    <div class="integrantes__links">
                        <img class="git-img" src="./../assets/github.png" @click="redirectGit('jacquef')">
                        <img class="lkdn-img" src="./../assets/linkedin.png" @click="redirectLinkedin('jacqueline-souza-6a9638197')">
                    </div>
                </div>
                <div class="integrantes">
                    <p>Juan Portugal</p>
                    <div class="integrantes__links">
                        <img class="git-img" src="./../assets/github.png" @click="redirectGit('JuanPortual99')">
                        <img class="lkdn-img" src="./../assets/linkedin.png" @click="redirectLinkedin('juan-fernandes-a40a40155')">
                    </div>
                </div>
                <div class="integrantes">
                    <p>Vinícius Ferreira</p>
                    <div class="integrantes__links">
                        <img class="git-img" src="./../assets/github.png" @click="redirectGit('vinicius182')">
                        <img class="lkdn-img" src="./../assets/linkedin.png" @click="redirectLinkedin('vinicius-fd')">
                    </div>
                </div>
                <div class="integrantes">
                    <p>Willian Inocencio</p>
                    <div class="integrantes__links">
                        <img class="git-img" src="./../assets/github.png" @click="redirectGit('winocencio')">
                        <img class="lkdn-img" src="./../assets/linkedin.png" @click="redirectLinkedin('willian-inocencio')">
                    </div>
                </div>  
            </div>       
        </div>
    </div>
</template>

<script>

export default {
    data(){
    },
    methods: {
        redirectGit(user) {
            window.open(`http://github.com/${user}`, '_blank');
        },
        redirectLinkedin(user) {
            window.open(`https://linkedin.com/in/${user}/`, '_blank');
        }
    }
}
</script>

<style scoped>
    .container-footer {
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: black;
        padding: 50px 0;
        margin-top: 100px;
    }

    .sobre {
        padding: 0 20px;
        display: flex;
        flex-direction: column;
    }

    .contato {
        margin-top: 40px;
    }

    h3 {
        color: #2E8B57;
        font-size: 18px;
        margin-bottom: 10px;
        text-transform: uppercase;
        
    }

    p, a, span {
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
        cursor: pointer;
    }

    .lkdn-img {
        width: 20px;
        height: auto;
        margin-left: 10px;
        cursor: pointer;
    }

    @media screen and (min-width: 992px) {
        .sobre {
            display: block;
            text-align: start;
            padding: 0 40px;
        }

        span {
            margin-right: 25px;
        }

        p {
            margin-top: 0;
        }

        .contato {
            text-align: start;
            padding: 0 40px;
        }

        .container-integrantes {
            display: flex;
            justify-content: start; 
        }

        .integrantes {
            margin-right: 45px;
        }

        .integrantes__links {
            text-align: center;
        }
    }

   
</style>