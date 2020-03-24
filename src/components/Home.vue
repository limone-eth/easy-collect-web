<template>
    <div id="home">
        <form>
            <div class="row">
                <div class="col-8">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Cerca il negozio</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Città, indirizzo, nome...">
                    </div>
                </div>
            </div>
            <div class="col-4">
                <button type="submit" class="btn btn-primary">Cerca</button>
            </div>
        </form>
    </div>

</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style scoped>

</style>
