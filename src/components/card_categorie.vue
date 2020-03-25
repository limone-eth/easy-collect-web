<template>
    <!-- GRID Categoria Negozio -->
    <div class="row">
    
        <div class="col-3"></div>
    
    
        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div class="row">
                <div class="col-4">
                    <div class="box frutta">
                        <div class="box-title">
                            <h3>Frutta</h3>
                        </div>
                        <div class="box-text">
                            <span><img src="../assets/healthy-food.png" class="w-50" alt="Fruit"></span>
                        </div>
                    </div>
                </div>
    
                <div class="col-4">
                    <div class="box alimentari">
                        <div class="box-title">
                            <h3>Alimentari</h3>
                        </div>
                        <div class="box-text">
                            <span><img src="../assets/meat.png" class="w-50 mw-50" alt="Meat"></span>
                        </div>
                    </div>
                </div>
    
    
                <div class="col-4">
                    <div class="box pesce">
                        <div class="box-title">
                            <h3>Pesce</h3>
                        </div>
                        <div class="box-text">
                            <span><img src="../assets/fish.png" class="w-50" alt="Fish"></span>
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
    
    
        <div class="col-3"></div>
    
    
    </div>
</template>


<!--
Momentaneamente levato la form


<form>


    <div class="row">
        <div class="col-8">
            <div class="form-group">
                <label for="exampleInputEmail1">Cerca il okzio</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Città, indirizzo, nome...">
            </div>
        </div>
    </div>
    <div class="col-4">
        <button type="submit" class="btn btn-primary">Cerca</button>
    </div>
</form> -->


<script>
export default {
    name: "Home"
}
</script>


<style>
.box {
    border-radius: 40px;
    padding: 30px 0px;
    margin: 60px 0px;
    cursor: pointer;
    align: center;
    transition: all 0.5s ease-out;
    box-shadow: 0 0 6px #4183D7;
    width: 150px;
    height: 150px;
}

.frutta:hover {
    box-shadow: #0FE804;
    background: #0F9D58;
    color: white;
}

.frutta:active {
    width: 70px;
    height: 74px;
}

.alimentari:hover {
    box-shadow: #F05C12;
    background: #DB4437;
    color: white;
}

.pesce:hover {
    box-shadow: #18D5DB;
    background: #4285F4;
    color: white;
}

.box .box-text {
    margin: 20px 0px;
    font-size: 15px;
    color: #4183D7;
    line-height: 30px;
}

.box .box-btn a {
    text-decoration: none;
    color: #4183D7;
    font-size: 16px;
}
</style>
