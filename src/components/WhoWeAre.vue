<template>
    <div class="container mt-3">
        <div class="display-4 text-center">
            Manifesto
        </div>
        <div class="container">
            Le botteghe di quartiere sono una ricchezza, naturali presidi di ascolto sul territorio e motore della vita
            dei quartieri. Ti conoscono personalmente, ti consigliano e ti possono offrire i prodotti più buoni e
            genuini.
            <br>
            <br>
            Questa ricchezza si sta depauperando soggetta ormai da anni al cambiamento frenetico delle nostre abitudini
            e alla competizione del commercio on-line e della grande distribuzione organizzata (GDO).
            <br>
            <br>
            L’impoverimento, ha come ulteriore conseguenza la sofferenza dei piccoli produttori di qualità, i custodi
            della nostra ricchissima biodiversità alimentare, che a causa dei ridotti volumi non sono in grado di
            ottemperare alle richieste della GDO, ma possono trovare il giusto spazio nelle botteghe.
            <br>
            <br>
            In questo momento di crisi dovuto al COVID-19, le botteghe, ulteriormente sotto pressione, rappresentano per
            noi una risorsa capace non solo di offrire un servizio di alta qualità, ma anche in massima sicurezza,
            limitando gli inevitabili assembramenti nei supermercati grazie ad una distribuzione capillare sul
            territorio.
            <br>
            <br>
            <b>ColliGo</b> vuole ristabilire e rafforzare il contatto tra le botteghe e i suoi clienti attraverso un
            servizio
            ispirato ai seguenti principi:
            <ul>
                <li><b>Gratuità</b>: ColliGo è e sempre sarà gratuito per i commercianti e per i clienti</li>
                <li><b>Trasparenza</b>: ColliGo è un servizio aperto sviluppato secondo i principi dell’open-source, il
                    che
                    significa che chiunque può vedere come funziona al suo interno e può proporre il suo contributo
                </li>
                <li><b>Libertà</b>: ColliGo mette in contatto clienti e negozianti, ma poi li lascia liberi di portare
                    avanti
                    il colloquio in piena autonomia, su qualunque mezzo, senza interferire in alcun modo
                </li>
                <li><b>Eticità</b>: ColliGo promuove un commercio dove produttori ed esercenti hanno un potere
                    contrattuale
                    simile, in cui ognuno ha la giusta remunerazione per il proprio lavoro
                </li>
                <li><b>Privatezza</b>: Le uniche informazioni che fornite a ColliGo sono quelle che vi vengono
                    esplicitamente
                    richieste e poiché, in forza del principio di libertà, non interferiamo sulla comunicazione tra
                    cliente e negoziante, se anche volessimo, non avremmo accesso a nessun’altra informazione.
                </li>
                <li>
                    <b>Minimale</b>: L’unico requisito per accedere a ColliGo è la disponibilità di un cellulare, sia da
                    parte
                    dell’esercente che del cliente
                </li>
            </ul>
            ColliGo è anche una comunità che sta sviluppando il servizio e che condivide gli intenti ed i principi di
            questo manifesto. Se li condividi anche tu faccelo sapere scrivendo a <b>colligo@colligo.shop</b>.
            <br>
            <br>
            ColliGo è un termine latino che significa parecchie cose tra cui alcuni pertinenti ai principi che ci
            guidano: riunire, ricondurre, guadagnare, richiamare alla memoria, raccogliere.
        </div>
        <br>
        <div class="h2 text-center">
            Il team
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

  export default {
    name: "WhoWeAre",
    components: {
      Partners
    }
  }
</script>

<style scoped>

</style>
