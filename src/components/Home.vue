<template>
    <div>
        <!-- SECTION 1 --->
        <div class="text-white bg-success">
            <div class="container d-none d-sm-block">
                <div class="row pt-5 pb-5">
                    <div class="col-6 text-left align-self-center">
                        <div class="h1 font-weight-bolder">La spesa facile, veloce, sicura e di qualità. <br> Senza
                            mediazioni.
                        </div>
                        <b-button variant="light" class="mt-2 text-success" to="/mappa">Cerca una bottega</b-button>
                    </div>
                    <div class="col-6">
                        <img src="../assets/cover_3-no-bg.png" height="450" alt="illustration">
                    </div>
                </div>
            </div>
            <div class="container d-block d-sm-none">
                <div class="row pt-5 pb-5">
                    <div class="col-12 align-self-center">
                        <div class="h1 font-weight-bolder">La spesa facile, veloce, sicura e di qualità. <br> Senza mediazioni.</div>
                        <b-button variant="light"  class="mt-2 text-success" to="/mappa">Cerca una bottega</b-button>
                    </div>
                    <div class="col-12 pt-2">
                        <img src="../assets/cover_3-no-bg.png"   height="250" alt="illustration">
                    </div>
                </div>
            </div>
        </div>

        <!-- SECTION 2 --->
        <div>
            <div class="container d-none d-sm-block">
                <div class="row pt-5 pb-5">
                    <div class="col-8 text-left align-self-center">
                        <div class="h4">
                            <div>La tua privacy è un valore fondamentale.</div>
                            <div class="pt-2">Per noi il rapporto tra cliente e commerciante è un fatto privato.</div>
                            <div class="pt-2">Leggi il nostro manifesto per saperne di più.</div>
                        </div>
                        <b-button variant="success" class="mt-2" to="/manifesto">Il nostro manifesto</b-button>
                    </div>
                </div>
            </div>
            <div class="container d-block d-sm-none">
                <div class="row pt-5 pb-5">
                    <div class="col-12">
                        <div class="h4">
                            <div>La tua privacy è un valore fondamentale.</div>
                            <div class="pt-2">Per noi il rapporto tra cliente e commerciante è un fatto privato.</div>
                            <div class="pt-2">Leggi il nostro manifesto per saperne di più.</div>
                        </div>
                        <b-button variant="success" class="mt-2" to="/manifesto">Il nostro manifesto</b-button>
                    </div>

                </div>
            </div>
        </div>

        <!-- SECTION 3 -->
        <div class="bg-success text-white">
            <div class="container d-none d-sm-block">
                <div class="row pt-5 pb-5">
                    <div class="col-8 text-left align-self-center">
                        <div class="h2">Come funziona</div>
                        <ul>
                            <li class="h5">
                                Trova le botteghe che ti interessano
                            </li>
                            <li class="h5 pt-2">
                                Contattale privatamente su Facebook, Telegram, Whatsapp,
                                telefono, email e qualunque altro canale mettano a disposizione.
                            </li>
                            <li class="h5 pt-2">
                                Accordati con il commerciante per concludere l’acquisto.
                            </li>
                            <li class="h5 pt-2">
                                Ritira la spesa o fattela recapitare a casa.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="container d-block d-sm-none">
                <div class="row pt-5 pb-5">
                    <div class="col-12">
                        <div class="h2">Come funziona</div>
                        <ul>
                            <li  class="h5">
                                Trova le botteghe che ti interessano
                            </li>
                            <li class="h5 pt-2">
                                Contattale privatamente su Facebook, Telegram, Whatsapp,
                                telefono, email e qualunque altro canale mettano a disposizione.
                            </li>
                            <li class="h5 pt-2">
                                Accordati con il commerciante per concludere l’acquisto.
                            </li>
                            <li class="h5 pt-2">
                                Ritira la spesa o fattela recapitare a casa.
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

        <!-- SECTION 4 -->
        <div>
            <div class="container d-none d-sm-block">
                <div class="row pt-5 pb-5">
                    <div class="col-8 text-left align-self-center">
                        <div class="h3">Vogliamo aiutare le botteghe del nostro Paese, noi ci crediamo. E tu?</div>
                        <div class="row mt-4">
                            <div class="col-4">
                                <b-button variant="success" class="btn-block" to="/mappa">Cerca una bottega</b-button>
                            </div>
                            <div class="col-4">
                                <b-button variant="outline-success" class="btn-block" to="/esercenti">Registra la tua attività</b-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container d-block d-sm-none">
                <div class="row pt-5 pb-5">
                    <div class="col-12">
                        <div class="h3">Vogliamo aiutare le botteghe del nostro Paese, noi ci crediamo. E tu?</div>
                    </div>
                    <div class="col-12">
                        <div class="row mt-4">
                            <div class="col-6">
                                <b-button variant="success" class="btn-block" to="/mappa">Cerca una bottega</b-button>
                            </div>
                            <div class="col-6">
                                <b-button variant="outline-success" class="btn-block" to="/esercenti">Registra la tua attività</b-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style scoped>

</style>
