<template>
    <div class="container">
        <div class="h1 mt-5 text-center">
            Domande Frequenti
        </div>
        <ul>
            <li>
                <div class="h4 mt-5">
                    Cosa significa ColliGo?
                </div>
                <div>
                    ColliGo è un servizio per mettere in comunicazione clienti e botteghe alimentari di quartiere
                    ispirato e guidato dai principi del <a href="./Manifesto.pdf" target="_blank">Manifesto
                </a>.
                </div>
            </li>
            <li>
                <div class="h4 mt-5">
                    ColliGo è un servizio a pagamento?
                </div>
                <div>
                    ColliGo è e sarà sempre un servizio gratuito per tutti i commercianti e clienti che ne
                    vorranno fare uso.
                </div>
            </li>
            <li>
                <div class="h4 mt-5">
                    Nello specifico che servizi offre?
                </div>
                <div>
                    ColliGo offre 2 servizi: per i negozianti la
                    <router-link to="/registrati">registrazione</router-link>
                    del proprio negozio,
                    per il cliente la
                    <router-link to="/mappa">ricerca di un negozio</router-link>
                    .
                </div>
            </li>
            <li>
                <div class="h4 mt-5">
                    Su quali piattaforme posso trovare ColliGo?
                </div>
                <div>
                    ColliGo sarà disponibile gratuitamente su Telegram e Facebook Messenger tramite l’uso di un bot,
                    l’app sarà possibile scaricarla gratuitamente su Apple Store e Google Play Store.
                </div>
            </li>
            <li>
                <div class="h4 mt-5">
                    I miei dati sono al sicuro?
                </div>
                <div>
                    Le uniche informazioni fornite a ColliGo sono quelle che vengono espressamente richieste. In forza
                    del principio di libertà, non possediamo informazioni sul colloquio privato tra cliente e
                    negoziante.
                </div>
            </li>
            <li>
                <div class="h4 mt-5">
                    Che tipo di negozi trovo su ColliGo?
                </div>
                <div>
                    Su ColliGo sono presenti tutti i tipi di piccole-medie attività quali: Alimentari, Bio&Equo,
                    Birroteca, Cioccolateria, Enoteca, Formaggeria, Frutteria, Gastronomia, Macelleria, Oleoteca,
                    Panificio, Pasticceria, Pastificio, Pescheria, Teeria, Torrefazione.
                </div>
            </li>
            <li>
                <div class="h4 mt-5">
                    Perché dovrei usare ColliGo per fare la spesa?
                </div>
                <div>
                    Il principio su cui si basa il funzionamento di questo servizio è quello di ottimizzare le
                    attese per fare la spesa, preparando una lista degli articoli da comprare e inviandola al
                    commerciante che, una volta preparata, comunicherà l’orario più idoneo per il ritiro, azzerando il
                    formarsi di code.
                </div>
            </li>
            <li>
                <div class="h4 mt-5">
                    Che informazioni devo inserire per registrarmi come negoziante?
                </div>
                <div>
                    La registrazione del proprio negozio prevede l’inserimento delle categorie che caratterizzano la tua
                    attività, la posizione che geolocalizzerà il tuo negozio e,
                    opzionalmente, puoi inserire il proprio sito Web per chi ne possiede uno.
                </div>
            </li>
            <li>
                <div class="h4 mt-5">
                    Come faccio a conoscere l'offerta di una bottega dopo averla individuata in mappa?
                </div>
                <div>
                    ColliGo è una piattaforma che ti permette di comunicare attraverso più canali con il negoziante.
                    Sarà lui a pubblicare le proposte in questi canali o a rispondere alle tue richieste indicandoti la
                    disponibilità di ciò che cerchi e a fornirti, se necessario, delle
                    alternative.
                </div>
            </li>
            <li>
                <div class="h4 mt-5">
                    Come posso incentivare gli acquisti nella mia bottega?
                </div>
                <div>
                    Un utente è tanto più incentivato ad acquistare nella tua bottega quante più informazioni può
                    reperire sui prodotti in vendita. Può risultare quindi utile pubblicare in tutti i canali(Telegram,
                    Messenger) un elenco/listino della merce disponibile oltre a video o foto di eventuali offerte
                    giornaliere con relativa indicazione della disponibilità.
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: "Faq"
  }
</script>

<style scoped>

</style>
