<template>
    <div class="container mt-3">
        <div class="display-4 text-center">
            Chi Siamo
        </div>
        <div class="container">
            In un periodo quanto mai difficile per la nostra società, abbiamo sentito l’esigenza di dare il nostro
            contributo mettendo in piedi ColliGo, un’iniziativa open-source e senza fini di lucro che ha lo scopo di
            fornire un sostegno alle piccole-medie botteghe alimentari del nostro Paese e al tempo stesso consentire ai
            cittadini di fare spesa in modo sicuro e rapido. <br> <br>
            La scintilla è stata un post su LinkedIn di Andrea Vitaletti, Professore Associato della Facoltà di
            Ingegneria alla “Sapienza” di Roma, che ha raccolto subito tante adesioni e spunti interessanti. In tempi
            record abbiamo formato un team cresciuto velocemente aggregando persone con competenze ed esperienze
            diverse, accomunate da valori condivisi, riassunti nel Manifesto (<a href="./../../public/Manifesto.pdf" target="_blank">Manifesto di ColliGo</a>). Al progetto ha aderito con entusiasmo La Pecora Nera Editore, casa editrice enogastronomica già
            attiva con la campagna social <b>#facciospesainbottega</b> e via via altre professionalità ed aziende, quali
            Passion Fruit Hub che cura l’ufficio stampa e Hosting Solutions (Genesys Informatica srl) che ha messo a
            disposizione il servizio di hosting. Il gruppo sta crescendo ulteriormente con il coinvolgimento delle
            associazioni di categoria che informeranno i loro iscritti sulle opportunità offerte da ColliGo.
            <br> <br>
            Se sei interessato a collaborare con noi, scrivici a info@colligo.shop illustrandoci il contributo che pensi
            di poter dare.

        </div>
        <br>
        <div class="h2 text-center">
            Gruppo di lavoro
        </div>
        <div>
            Alessio Cesaretti, Andrea Aurizi, Andrea
            Misuraca, Andrea Vitaletti (coordinatore), Angelo Catalani, Arianna Fusilli, Arianna Mauro, Daniele
            Iacomini, Danilo Lato, Davide Gimondo, Francesco Colasante, Lorenzo Scollo, Luca Ferrera, Luca Tomei, Marco
            Zecchini, Mariolina Pepe, Matteo Brandi, Mattia Righetti, Michela Ciommo, Michele Anselmi, Riccardo
            Bianchini, Simone Cargiani, Simone Silvestri, Simone Staffa, Stefano Latini, Valerio Coretti, Valerio
            Ferrari
            <br>
            <br>
            Aggiornato al {{today}}
        </div>
        <br>
        <div class="h2 text-center">
            Partners
            <partners></partners>
        </div>
    </div>
</template>

<script>
  import Partners from "./Partners";
  import moment from 'moment'
  export default {
    name: "WhoWeAre",
    components: {
      Partners,
    },
    data() {
      return {
        today: moment().format('MM/DD/YYYY')
      }
    }
  }
</script>

<style scoped>

</style>
