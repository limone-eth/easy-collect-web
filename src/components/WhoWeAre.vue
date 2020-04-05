<template>
    <div>
        <!-- SECTION 1 --->
        <div class="text-white bg-success pt-5 pb-5">
            <div class="container">
                <div class="h1">
                    Chi Siamo
                </div>
                <div>
                    Intorno ad un’idea di Andrea Vitaletti, Professore Associato della Facoltà di Ingegneria alla
                    “Sapienza”
                    di Roma, si sono riunite molteplici competenze e esperienze accomunate da valori condivisi che hanno
                    portato in tempi record alla realizzazione di ColliGo. <br>
                    Al progetto hanno aderito con entusiasmo la casa editrice enograstronomica <a class="text-white"
                                                                                                  href="http://lapecoranera.net"><u>La
                    Pecora Nera Editore</u></a> - da
                    anni impegnata nella valorizzazione delle botteghe del gusto - <a class="text-white"
                                                                                      href="https://passionfruithub.com/"><u>Passion
                    Fruit Hub</u></a> - ufficio stampa - e
                    <a class="text-white" href="https://www.hostingsolutions.it/"><u>Hosting Solutions (Genesys
                        Informatica srl)</u></a> - servizio di hosting. <br><br>
                    Se sei interessato a collaborare con noi, scrivici a info@colligo.shop illustrandoci il con- tributo
                    che
                    pensi di poter dare.
                </div>
                <br>
                <div class="h1">
                    Gruppo di lavoro
                </div>
                <div>
                    Alessio Cesaretti, Andrea Aurizi, Andrea
                    Misuraca, Andrea Vitaletti (coordinatore), Angelo Catalani, Arianna Fusilli, Arianna Mauro, Daniele
                    Iacomini, Danilo Lato, Davide Gimondo, Francesco Colasante, Lorenzo Scollo, Luca Ferrera, Luca
                    Tomei, Marco
                    Zecchini, Mariolina Pepe, Matteo Brandi, Mattia Righetti, Michela Ciommo, Michele Anselmi, Riccardo
                    Bianchini, Simone Cargiani, Simone Silvestri, Simone Staffa, Stefano Latini, Valerio Coretti,
                    Valerio
                    Ferrari
                    <br>
                    <br>
                    Aggiornato al {{today}}
                </div>
            </div>
        </div>
        <br>
        <div class="container">
            <div class="h1">
                Manifesto
            </div>
            <div>
                Le botteghe di quartiere sono una ricchezza, naturali presidi di ascolto sul territorio e motore della
                vita
                dei quartieri. Ti conoscono personalmente, ti consigliano e ti possono offrire i prodotti più buoni e
                genuini.
                <br><br>
                Questa ricchezza si sta depauperando soggetta ormai da anni al cambiamento frenetico delle nostre
                abitudini
                e alla competizione del commercio on-line e della grande distribuzione organizzata (GDO).
                <br><br>
                L’impoverimento, ha come ulteriore conseguenza la sofferenza dei piccoli produttori di qualità, i
                custodi
                della nostra ricchissima biodiversità alimentare, che a causa dei ridotti volumi non sono in grado di
                ottemperare alle richieste della GDO, ma possono trovare il giusto spazio nelle botteghe.
                <br><br>
                In questo momento di crisi dovuto al COVID-19, le botteghe, ulteriormente sotto pressione, rappresentano
                per
                noi una risorsa capace non solo di offrire un servizio di alta qualità, ma anche in massima sicurezza,
                limitando gli inevitabili assembramenti nei supermercati grazie ad una distribuzione capillare sul
                territorio.
                <br><br>
                <b>ColliGo vuole ristabilire e rafforzare il contatto tra le botteghe e i suoi clienti attraverso un
                    servizio
                    ispirato ai seguenti principi</b>:
                <ul>
                    <li>
                        <b>Gratuità</b>: ColliGo è e sarà sempre gratuito per i commercianti e per i clienti
                    </li>
                    <li><b>Trasparenza</b>: ColliGo è un servizio aperto, sviluppato secondo i principi
                        dell’open-source; il
                        che
                        significa che chiunque può vedere come funziona al suo interno e proporre miglioramenti.
                    </li>
                    <li><b>Libertà</b>: ColliGo mette in contatto clienti e negozianti, lasciandoli liberi di portare
                        avanti
                        il
                        colloquio in piena autonomia, su qualunque mezzo, senza interferire in alcun modo.
                    </li>
                    <li><b>Eticità</b>: ColliGo vuole stimolare un commercio dove produttori ed esercenti abbiano un
                        potere
                        contrattuale equilibrato e nel quale il lavoro di ciascuno sia giustamente remunerato.
                    </li>
                    <li><b>Privatezza</b>: Le uniche informazioni fornite a ColliGo sono quelle che vengono
                        esplicitamente
                        richieste. In forza del principio di libertà, non possediamo informazioni sul colloquio privato
                        tra
                        cliente e negoziante.
                    </li>
                    <li><b>Accessibilità</b>: ColliGo è pensato per essere usato da tutti e richiede solo la
                        disponibilità
                        di un
                        cellulare.
                    </li>
                </ul>
                ColliGo è anche una comunità che sta sviluppando il servizio e che condivide gli intenti ed i principi
                di
                questo manifesto. Se li condividi anche tu faccelo sapere su <a href="mailto:info@colligo.shop">info@colligo.shop</a>
                <br><br>
                <u>ColliGo è un termine latino</u> dai molteplici significati, tra cui alcuni pertinenti ai principi che
                ci
                guidano: riunire, ricondurre, guadagnare, richiamare alla memoria, raccogliere.
            </div>
        </div>
        <div class="container">
            <div class="d-none d-sm-block">
                <div class="row mt-4">
                    <div class="col-4">
                        <b-button variant="success" class="btn-block" to="/mappa">Cerca una bottega</b-button>
                    </div>
                    <div class="col-4">
                        <b-button variant="outline-success" class="btn-block" to="/commercianti">Registra la tua attività
                        </b-button>
                    </div>
                </div>
            </div>
            <div class="d-block d-sm-none">
                <div class="row mt-4">
                    <div class="col-6">
                        <b-button variant="success" class="btn-block" to="/mappa">Cerca una bottega</b-button>
                    </div>
                    <div class="col-6">
                        <b-button variant="outline-success" to="/commercianti">Registra la tua attività
                        </b-button>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <div class="h1 container">
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
        today: moment().format('MM/DD/YYYY'),
      }
    }
  }
</script>

<style scoped>

</style>
