<template>
    <div id="register-container" class="container">
        <div v-if="!registered">

            <div class="text-center">
                <h2>Benvenuto su EasyCollect</h2>
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

                            <label for="name">Nome</label>
                            <input type="text" class="form-control" id="name" v-model="name"
                                   placeholder="Inserisci il nome della tua attività" required>
                        </div>
                        <div class="form-group">
                            <label for="categories_id">Seleziona fino a 3 categorie</label>
                            <multiselect v-model="category" tag-placeholder="Aggiungi categoria" placeholder="Search or add a tag" label="name" track-by="id" :options="categories" :multiple="true" :taggable="true" @tag="addCategory"></multiselect>
                           <!-- <select class="form-control" id="categories_id" v-model="categories_id" required>
                                <option value="null" disabled>Scegli categoria</option>
                                <option :key="category" v-for="category in categories" :value="category.id">
                                    {{category.name}}
                                </option>
                            </select>-->
                        </div>
                        <div class="form-group">
                            <label for="address">Indirizzo</label>
                            <input type="text" class="form-control" id="address" v-model="address"
                                   placeholder="Inserisci il tuo indirizzo" required>
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
                                Facebook Messenger</label>
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
                    <router-link to="/home">Vai alla mappa</router-link>
                </h5>
                <br>
                <router-link to="/home"><img src="../assets/map.png" alt="Fireworks" class="w-25"></router-link>
            </div>
        </div>
    </div>
</template>

<script>

  export default {
    name: "ShopRegistration",
    data() {
      return {
        categories: [ //TODO - categorie da backend?
          {id: 1, name: "Enoteca"},
          {id: 2, name: "Pescheria"},
          {id: 3, name: "Macelleria"},
          {id: 4, name: "Panificio"},
          {id: 5, name: "Pastificio"},
          {id: 6, name: "Altro"},
        ],
        name: null,
        categories_ids: [],
        address: null,
        phone: null,
        telegram: null,
        facebook: null,
        error: null,
        registered: true,
        category: {id: 1, name: "Enoteca"}
      }
    },
    mounted() {
      this.registered = false;
    },
    methods: {
      addCategory: function(category){
        this.categories_ids.push(category.id)
      },
      registerForm: function (e) {
        if (!this.name) {
          this.error = 'Non hai inserito il nome!'
        }
        if (!this.categories_id) {
          this.error = 'Non hai selezionato una categoria!'
        }
        if (!this.address) {
          this.error = 'Non hai inserito il tuo indirizzo!'
        }
        if (!this.phone && !this.facebook && !this.telegram) {
          this.error = 'Devi inserire almeno un contatto!'
        }
        if (this.categories_ids.length < 3)
        {
          this.error = 'Devi selezionare almeno 3 categorie!'
        }
        e.preventDefault();
      },
      register() {
        let payload = {
          name: this.name,
          categories_id: this.categories_id,
          address: this.address,
          phone: this.phone,
          telegram: this.telegram,
          facebook: this.facebook
        };
        console.log(payload);
        this.registered = true;
        /*this.$api.post('/register', payload)
          .then(
            response => {
              this.res = response.data;
              localStorage.setItem('user-token', response.data.authentication.access_token);
              this.$api.token = response.data.authentication.access_token;
              this.$router.replace({path: "/home/"})
            }
          )
          .catch((e) => {
            if (e.response.status !== 500) {
              this.error = e.response.data.message;
            }
          });*/
      }
    }
  }
</script>

<style scoped>
    #register-container {
        padding-bottom: 80px;
    }
</style>
