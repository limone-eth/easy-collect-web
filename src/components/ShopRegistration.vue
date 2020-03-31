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
                    <form @submit="registerForm"
                          @submit.prevent="register">
                        <div class="form-group">
                            <h5>Informazioni generali</h5>
                        </div>
                        <div class="form-group">
                            <font-awesome-icon :icon="['fa', 'store-alt']"/>&nbsp;
                            <label for="name">Nome</label>
                            <input type="text" class="form-control" id="name" v-model="name"
                                   placeholder="Inserisci il nome della tua attività" required>
                        </div>
                        <div class="form-group">
                            <font-awesome-icon :icon="['fa', 'font']"/>&nbsp;
                            <label for="address">Breve descrizione (max 120 caratteri)</label>
                            <input type="text" class="form-control" id="description" v-model="description"
                                   placeholder="Descrivi brevemente la tua attività" maxlength="120">
                        </div>
                        <div class="form-group">
                            <font-awesome-icon :icon="['fa', 'tags']"/>&nbsp;
                            <label for="categories_id">Seleziona fino a 3 categorie</label>
                            <multiselect v-model="category" tag-placeholder="Aggiungi categoria"
                                         placeholder="Seleziona categoria" label="name" track-by="id"
                                         :options="categories" :multiple="true" :taggable="true"
                                         @tag="addCategory"></multiselect>
                        </div>
                        <div class="form-group">
                            <font-awesome-icon :icon="['fa', 'map-marker-alt']"/>&nbsp;
                            <label for="address"> Indirizzo</label>
                            <input type="text" class="form-control" id="address" v-model="address"
                                   placeholder="Inserisci il tuo indirizzo" required>
                        </div>
                        <div class="row">
                            <div class="form-group col-6">
                                <font-awesome-icon :icon="['fa', 'city']"/>&nbsp;
                                <label for="address"> Città</label>
                                <input type="text" class="form-control" id="city" v-model="city"
                                       placeholder="Inserisci la città" required>
                            </div>
                            <div class="form-group col-6">
                                <font-awesome-icon :icon="['fa', 'envelope']"/>&nbsp;
                                <label for="address"> CAP</label>
                                <input type="number" class="form-control" id="cap" v-model="cap"
                                       placeholder="Inserisci il cap" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="phone">
                                <font-awesome-icon :icon="['fa', 'globe']" class="text-info"/>
                                Sito Web</label>
                            <input type="text" class="form-control" id="website" v-model="website"
                                   placeholder="Inserisci il tuo sito web">

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
                            <input type="text" class="form-control" id="phone" v-model="phone"
                                   placeholder="Inserisci il tuo numero di telefono">
                        </div>
                        <div class="form-group">
                            <label for="telegram">
                                <font-awesome-icon :icon="['fab', 'telegram']" class="text-primary"/>
                                Telegram</label>
                            <input type="text" class="form-control" id="telegram" v-model="telegram"
                                   placeholder="Inserisci il link al tuo canale telegram">
                        </div>
                        <div class="form-group">
                            <label for="facebook">
                                <font-awesome-icon :icon="['fab', 'facebook']" class="text-primary"/>
                                Facebook</label>
                            <input type="text" class="form-control" id="facebook" v-model="facebook"
                                   placeholder="Inserisci il link alla tua pagina Facebook">
                        </div>
                        <h5 v-if="error" class="text-danger">
                            <font-awesome-icon :icon="['fa', 'exclamation-circle']"/>
                            {{ error }}
                        </h5>
                        <button type="submit" class="btn btn-success btn-block">Registrati</button>
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
  import Loading from 'vue-loading-overlay';
  // Import stylesheet
  import 'vue-loading-overlay/dist/vue-loading.css';

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
        website: null,
        phone: null,
        telegram: null,
        facebook: null,
        error: null,
        registered: true,
        category: null,
        isLoading: false,
        fullPage: true
      }
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
        if (!this.name) {
          this.error = 'Non hai inserito il nome!'
        }
        if (this.description && this.description.length > 120) {
          this.error = 'La descrizione che hai inserito è troppo lunga!'
        }
        if (!this.address) {
          this.error = 'Non hai inserito il tuo indirizzo!'
        }
        if (!this.city) {
          this.error = 'Non hai la tua città!'
        }
        if (!this.cap) {
          this.error = 'Non hai inserito il tuo CAP!'
        }
        if (!this.phone && !this.facebook && !this.telegram) {
          this.error = 'Devi inserire almeno un contatto!'
        }
        if (this.category.length >= 3) {
          this.error = 'Puoi selezionare massimo 3 categorie!'
        } else if (this.category.length === 0) {
          this.error = 'Seleziona almeno una categoria!'
        }
        e.preventDefault();
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
          cap: this.cap
        };
        if (this.website) {
          payload.website = this.website;
        }
        if (this.phone) {
          payload.phone = this.phone;
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
            if (e.response.status !== 500) {
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
</style>
