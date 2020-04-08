<template>
    <div id="register-container" class="container">
        <loading :active.sync="isLoading"
                 :can-cancel="true"
                 :on-cancel="onCancel"
                 :is-full-page="fullPage"></loading>
        <div v-if="!registered">

            <div class="text-center">
                <h4>Registrati per essere visibile sulla mappa</h4>
            </div>
            <br>
            <div class="row">
                <div class="col-md-3 col-xs-2"></div>
                <div class="col-md-6 col-xs-8">
                    <form  @submit.prevent="registerForm">
                        <div class="form-group">
                            <h5>Informazioni generali</h5>
                        </div>
                        <div class="form-group">
                            <font-awesome-icon :icon="['fa', 'store-alt']"/>&nbsp;
                            <label for="name">Nome</label>
                            <input type="text" class="form-control" id="name" v-model="name"
                                   placeholder="Inserisci il nome della tua attività">
                            <span v-if="error.name" class="text-danger">
                                {{ error.name }}
                            </span>
                        </div>
                        <div class="form-group">
                            <font-awesome-icon :icon="['fa', 'font']"/>&nbsp;
                            <label for="address">Breve descrizione (max 120 caratteri)</label>
                            <input type="text" class="form-control" id="description" v-model="description"
                                   placeholder="Descrivi brevemente la tua attività" maxlength="120">
                            <span v-if="error.description" class="text-danger">
                                {{ error.description }}
                            </span>
                        </div>
                        <div class="form-group">
                            <font-awesome-icon :icon="['fa', 'tags']"/>&nbsp;
                            <label for="categories_id">Seleziona fino a 3 categorie</label>
                            <multiselect v-model="category" tag-placeholder="Seleziona categoria"
                                         placeholder="Seleziona categoria" label="name" track-by="id"
                                         :options="categories" :multiple="true" :taggable="true"
                            ></multiselect>
                            <span v-if="error.category" class="text-danger">
                                {{ error.category }}
                            </span>
                        </div>
                        <div class="form-group">
                            <font-awesome-icon :icon="['fa', 'map-marker-alt']"/>&nbsp;
                            <label for="address"> Indirizzo</label>
                            <input type="text" class="form-control" id="address" v-model="address"
                                   placeholder="Inserisci il tuo indirizzo">
                            <span v-if="error.address" class="text-danger">
                                {{ error.address }}
                            </span>
                        </div>
                        <div class="row">
                            <div class="form-group col-6">
                                <font-awesome-icon :icon="['fa', 'city']"/>&nbsp;
                                <label for="address"> Città</label>
                                <input type="text" class="form-control" id="city" v-model="city"
                                       placeholder="Inserisci la città">
                                <span v-if="error.city" class="text-danger">
                                    {{ error.city }}
                                </span>
                            </div>
                            <div class="form-group col-6">
                                <font-awesome-icon :icon="['fa', 'envelope']"/>&nbsp;
                                <label for="address"> CAP</label>
                                <input type="number" class="form-control" id="cap" v-model="cap"
                                       placeholder="Inserisci il cap">
                                <span v-if="error.cap" class="text-danger">
                                    {{ error.cap }}
                                </span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="phone">
                                <font-awesome-icon :icon="['fa', 'globe']" class="text-info"/>
                                Sito Web</label>
                            <input type="text" class="form-control" id="website" v-model="website"
                                   placeholder="Inserisci il tuo sito web">
                            <span v-if="error.website" class="text-danger">
                                {{ error.website }}
                            </span>
                        </div>
                        <hr>
                        <div class="form-group">
                            <h5>Canali di contatto</h5>
                            <p class="font-weight-bold text-warning">Inserisci almeno un canale su cui vuoi essere
                                contattato</p>
                        </div>
                        <div class="form-group">
                            <label for="phone">
                                <font-awesome-icon :icon="['fa', 'phone']" class="text-success"/>
                                Telefono</label>
                            <input type="number" class="form-control" id="phone" v-model="phone"
                                   placeholder="Inserisci il tuo numero di telefono">
                            <span v-if="error.phone" class="text-danger">
                                {{ error.phone }}
                            </span>
                        </div>
                        <div class="form-group">
                            <label for="phone">
                                <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-success"/>
                                Cellulare /
                                Whatsapp</label>
                            <input type="number" class="form-control" id="whatsapp" v-model="whatsapp"
                                   placeholder="Inserisci il tuo numero di telefono">
                            <span v-if="error.whatsapp" class="text-danger">
                                {{ error.whatsapp }}
                            </span>
                        </div>
                        <div class="form-group">
                            <label for="telegram">
                                <font-awesome-icon :icon="['fab', 'telegram']" class="text-primary"/>
                                Link al gruppo Telegram</label>
                            <input type="text" class="form-control" id="telegram" v-model="telegram"
                                   placeholder="Inserisci il link al tuo gruppo telegram">
                            <span v-if="error.telegram" class="text-danger">
                                {{ error.telegram }}
                            </span>
                        </div>
                        <div class="form-group">
                            <label for="facebook">
                                <font-awesome-icon :icon="['fab', 'facebook']" class="text-primary"/>
                                Link alla Pagina Facebook</label>
                            <input type="text" class="form-control" id="facebook" v-model="facebook"
                                   placeholder="https://www.facebook.com/latuapagina">
                            <span v-if="error.facebook" class="text-danger">
                                {{ error.facebook }}
                            </span>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"
                                   v-model="accepts_terms_and_conditions" required>
                            <label class="form-check-label" for="exampleCheck1">Registrando il mio negozio do il
                                consenso a utilizzare le immagini del profilo Facebook e Instagram dello stesso per post
                                che hanno il fine di promuovere l’utilizzo di ColliGo</label>
                        </div>
                        <br>
                        <button type="submit" class="btn btn-success btn-block">Registrati</button>
                        <br>
                        <h5 v-if="error.general" class="text-danger">
                            <font-awesome-icon :icon="['fa', 'exclamation-circle']"/>
                            {{ error.general }}
                        </h5>
                    </form>
                </div>
                <div class="col-md-3 col-xs-2"></div>
            </div>
        </div>
        <div v-else>
            <div class="text-center">
                <h1 class="text-success">
                    <font-awesome-icon :icon="['fa', 'check-circle']"/>
                </h1>
                <h2>Complimenti!</h2>
                <h4> La registrazione è avvenuta con successo.</h4>
                <br>
                <h5>
                    <router-link to="/mappa">Vai alla mappa</router-link>
                </h5>
                <br>
                <router-link to="/mappa"><img src="../assets/map.png" alt="Fireworks" class="w-25"></router-link>
            </div>
        </div>
    </div>
</template>

<script>
  // Import component
  import Loading from 'vue-loading-overlay'
  // Import stylesheet
  import 'vue-loading-overlay/dist/vue-loading.css'
  import * as _ from "lodash";

  let expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  let regex = new RegExp(expression);

  let phoneExp = /^[+]*[(]?[0-9]{1,4}[)]?[-\s/0-9]*$/gi;
  let phoneRegexp = new RegExp(phoneExp);

  export default {
    name: "ShopRegistration",
    components: {
      Loading
    },
    data() {
      return {
        categories: [],
        name: null,
        description: null,
        categories_ids: [],
        address: null,
        city: null,
        cap: null,
        website: '',
        phone: null,
        telegram: null,
        facebook: null,
        registered: true,
        category: null,
        whatsapp: null,
        accepts_terms_and_conditions: false,
        isLoading: false,
        fullPage: true,
        error: {
          general: false,
          name: false,
          description: false,
          address: false,
          city: false,
          cap: false,
          website: false,
          facebook: false,
          telegram: false,
          phone: false,
          category: false,
          whatsapp: false,
        }
      }
    },
    created() {
      (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1760072,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    },
    mounted() {
      this.registered = false;
      this.$api.get('/categories')
        .then(response => {
          response.data.map(category => {
            this.categories.push({
              id: category.id,
              name: category.name
            })
          });
        })
        .catch(error => (console.log(error)));
    },
    methods: {
      registerForm: function (e) {
        this.error = _.mapValues(this.error, () => false);
        if (!this.name) {
          this.error.name = 'Non hai inserito il nome!'
        }
        if(!this.description){
          this.error.description = 'Non hai inserito la descrizione'
        }else if (this.description && this.description.length > 120) {
          this.error.description = 'La descrizione che hai inserito è troppo lunga!'
        }
        if (!this.address) {
          this.error.address = 'Non hai inserito il tuo indirizzo!'
        }
        if (!this.city) {
          this.error.city = 'Non hai inserito la tua città!'
        }
        if (!this.cap) {
          this.error.cap = 'Non hai inserito il tuo CAP!'
        }
        if (this.cap && this.cap.length !== 5) {
          this.error.cap = 'Non hai inserito un CAP valido'
        }
        if (this.website && !this.website.match(regex)) {
          this.error.website = 'Inserire un link valido al sito web'
        }
        if (!this.phone && !this.facebook && !this.telegram && !this.whatsapp) {
          this.error.phone = 'Devi inserire almeno un contatto!'
        }
        if (this.phone && !this.phone.match(phoneRegexp)) {
          this.error.phone = 'Il numero di telefono inserito non è valido!'
        }
        if (this.whatsapp && !this.whatsapp.match(phoneRegexp)) {
          this.error.whatsapp = 'Il numero di cellulare inserito non è valido!'
        }
        if (!this.phone && !this.facebook && !this.telegram) {
          this.error.general = 'Per registrarti devi accettare le condizioni!'
        }
        if (this.facebook && !this.facebook.match(regex)){
          this.error.facebook = "Il link alla pagina Facebook non è valido."
        }
        if (this.telegram && !this.telegram.match(regex)){
          this.error.telegram = "Il link al gruppo Telegram non è valido."
        }
        if (this.category && this.category.length > 3) {
          this.error.category = 'Puoi selezionare massimo 3 categorie!'
        } else if (!this.category) {
          this.error.category = 'Seleziona almeno una categoria!'
        }
        if (_.some(this.error)) {
          this.error.general = 'Dati non validi, controlla!';
          e.preventDefault();
          return
        } else {
          this.register()
        }


      },
      register() {
        this.isLoading = true;
        let payload = {
          name: this.name,
          description: this.description,
          categories_ids: this.category.map(c => {
            return c.id
          }),
          address: this.address,
          city: this.city,
          cap: this.cap,
          accepts_terms_and_conditions: this.accepts_terms_and_conditions
        };
        if (this.website) {
          payload.website = this.website;
        }
        if (this.phone) {
          payload.phone = this.phone;
        }
        if (this.whatsapp) {
          payload.whatsapp = this.whatsapp;
        }
        if (this.telegram) {
          payload.telegram = this.telegram;
        }
        if (this.facebook) {
          payload.facebook = this.facebook;
        }
        this.$api.post('/shops', payload)
          .then(response => {
              console.log(response);
              this.registered = true;
              this.isLoading = false;
            }
          )
          .catch((e) => {
            this.isLoading = false;
            if (e.response.status === 419) {
              this.error.general = 'Indirizzo non trovato. Verifica che i campi indirizzo, città e cap siano corretti..'
            }
            else if (e.response.status === 422) {
              this.error.general = "I dati inseriti non sono validi, ricontrolla!"
            }
            else if (e.response.status !== 500) {
              if (e.response.data.error.code === 2) {
                this.error = 'Indirizzo non trovato. Verifica di averlo inserito correttamente.'
              } else if (e.response.data.errors[0].includes('categories')) {
                this.error = 'Seleziona da 1 a massimo 3 categorie!'
              } else {
                this.error = "Ops, c'è stato un errore!"
              }
            }
          });
      },
      onCancel() {
        console.log('User cancelled the loader.')
      }
    }
  }
</script>

<style scoped>
    #register-container {
        padding-bottom: 80px;
    }

    /*
    *  Remove arrows in input number
    *  Chrome, Safari, Edge, Opera
    */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }
</style>
