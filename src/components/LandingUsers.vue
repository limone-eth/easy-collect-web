<template>
    <div id="landing-users" class="text-center">

        <!-- SECTION 1 --->
        <div class="container d-none d-sm-block">
            <div class="row pt-5 pb-5">
                <div class="col-6 text-left align-self-center">
                    <div class="h1 font-weight-bolder">Cerca e contatta i negozi vicino a te</div>
                    <h5 class="font-weight-bold">Ordina e ritira la tua spesa in sicurezza</h5>
                    <b-button variant="success" to="/mappa">Vai alla mappa</b-button>
                </div>
                <div class="col-6">
                    <img src="../assets/cover_3.jpg" height="450" alt="illustration">
                </div>
            </div>
        </div>
        <div class="container d-block d-sm-none">
            <div class="row pt-5 pb-5">
                <div class="col-12 text-center align-self-center">
                    <div class="h1 font-weight-bolder">Cerca e contatta i negozi vicino a te</div>
                    <div class="h5 font-weight-bold">Ordina e ritira la tua spesa in sicurezza</div>
                    <b-button variant="success" class="btn-block">Vai alla mappa</b-button>
                </div>
                <div class="col-12 pt-2">
                    <img src="../assets/cover_3.jpg" height="250" alt="illustration">
                </div>
            </div>
        </div>

        <!-- SECTION 2 --->
        <div class="text-white bg-success">
            <div class="d-none d-sm-block container">
                <div class="row pt-5 pb-5">
                    <div class="col-6">
                        <img src="../assets/undraw_Destination_6jtj.svg" height="350" alt="illustration">
                    </div>
                    <div class="col-6 text-left align-self-center">
                        <div class="h1 font-weight-bolder">Trova il negozio che stai cercando sulla mappa</div>
                        <h5 class="font-weight-bold">Puoi cercarlo inserendo il suo indirizzo</h5>
                    </div>

                </div>
            </div>
            <div class="container d-block d-sm-none">
                <div class="row pt-5 pb-5">
                    <div class="col-12 text-center align-self-center">
                        <div class="h1 font-weight-bolder">Trova il negozio che stai cercando sulla mappa</div>
                        <h5 class="font-weight-bold">Puoi cercarlo inserendo il suo indirizzo</h5>
                    </div>
                    <div class="col-12 pt-2">
                        <img src="../assets/undraw_Destination_6jtj.svg" height="250" alt="illustration">
                    </div>
                </div>
            </div>
        </div>

        <!-- SECTION 3 --->
        <div>
            <div class="d-none d-sm-block container">
                <div class="row pt-5 pb-5">

                    <div class="col-6 text-left align-self-center">
                        <div class="h1 font-weight-bolder">Contattalo utlizzando i canali da lui specificati</div>
                        <h5 class="font-weight-bold">Il servizio è totalmente gratuito, non hai bisogno di nessuna app aggiuntiva</h5>
                    </div>
                    <div class="col-6">
                        <img src="../assets/undraw_mobile_messages_u848.svg" height="350" alt="illustration">
                    </div>
                </div>
            </div>
            <div class="container d-block d-sm-none">
                <div class="row pt-5 pb-5">
                    <div class="col-12 text-center align-self-center">
                        <div class="h1 font-weight-bolder">Contattalo utlizzando i canali da lui specificati</div>
                        <h5 class="font-weight-bold">Il servizio è totalmente gratuito, non hai bisogno di nessuna app aggiuntiva</h5>
                    </div>
                    <div class="col-12 pt-2">
                        <img src="../assets/undraw_mobile_messages_u848.svg" height="250" alt="illustration">
                    </div>
                </div>
            </div>
        </div>

        <!-- SECTION 4 --->
        <div class="text-white bg-success">
            <div class="d-none d-sm-block container">
                <div class="row pt-5 pb-5">
                    <div class="col-6">
                        <img src="../assets/undraw_successful_purchase_uyin.svg" height="350" alt="illustration">
                    </div>
                    <div class="col-6 text-left align-self-center">
                        <div class="h1 font-weight-bolder">Ordina la spesa e accordati per le modalità di ritiro</div>
                        <h5 class="font-weight-bold">Preserva la tua sicurezza e evita perdite tempo in fila</h5>
                        <b-button variant="outline-light" to="/mappa">Vai alla mappa</b-button>
                    </div>

                </div>
            </div>
            <div class="container d-block d-sm-none">
                <div class="row pt-5 pb-5">

                    <div class="col-12 text-center align-self-center">
                        <div class="h1 font-weight-bolder">Ordina la spesa e accordati per le modalità di ritiro</div>
                        <h5 class="font-weight-bold">Preserva la tua sicurezza e evita perdite tempo in fila</h5>
                        <b-button variant="outline-light" to="/mappa">Vai alla mappa</b-button>
                    </div>
                    <div class="col-12 pt-2">
                        <img src="../assets/undraw_successful_purchase_uyin.svg" height="250" alt="illustration">
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

<style>
    #landing-users {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
</style>
