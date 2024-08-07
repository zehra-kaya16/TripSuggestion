<script setup>

</script>

<template>
  

    <div class="header">
    <span class="title">TripSuggestion.com</span>
  </div>
  <div class="main-banner">
    <h1>FIND YOUR PERFECT TRIP!</h1>
    <div class="buttons">
      
      <v-btn variant="outlined">
          Sign In
      </v-btn>
      
      <v-btn variant="outlined">
          Register
      </v-btn>
      <v-btn variant="outlined">
          Ask For A Suggestion
      </v-btn>
    </div>
  </div>
          <h2><span class="places">Places</span></h2>

  <section id="section-b">
        <ul>
          <li>
            <div class="col">
              <img src="/Users/zeynep/vue-project/src/public/fethiye_ölü_deniz.jpeg" />
              <div class="col-content">
                <h3 class="col-title">Fethiye Ölü Deniz/Antalya</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </li>
          <li>
            <div class="col">
              <img src="/Users/zeynep/vue-project/src/public/duden-selalesi-antalya.jpeg" />
              <div class="col-content">
                <h3 class="col-title">Düden Şelalesi/Antalya</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </li>
          <li>
            <div class="col">
              <img src="/Users/zeynep/vue-project/src/public/aspedos-antik-tiyatrosu-antalya.jpeg" />
              <div class="col-content">
                <h3 class="col-title">Aspendos Antik Tiyatro/Antalya</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </li>
        
        </ul>
      </section>

      <section id="section-c">
        <ul>
          <li>
            <div class="col">
              <img src="/Users/zeynep/vue-project/src/public/kiz-kulesi-istanbul.webp" />
              <div class="col-content">
                <h3 class="col-title">Kız Kulesi/İstanbul</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </li>
          <li>
            <div class="col">
              <img src="/Users/zeynep/vue-project/src/public/camlica-tepesi-istanbul.jpeg" />
              <div class="col-content">
                <h3 class="col-title">Çamlıca Tepesi/İstanbul</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </li>
          <li>
            <div class="col">
              <img src="/Users/zeynep/vue-project/src/public/ayasofya-camii-istanbul.jpg" />
              <div class="col-content">
                <h3 class="col-title">Ayasofya Cami/İstanbul</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </li>
        
        </ul>
      </section>
<div class="footer"></div>

</template>



<style scoped>
*{
  margin:0;
  padding:0;
 
}
.header {
  background-color: rgb(37, 123, 235);
  padding: 10px;
}

.title {
  margin-left: 130px;
  background-color: rgb(3, 87, 197);
  padding: 13px;
  font-size: larger;
  color: white;
}

.main-banner {
  text-align: center;
  background: url('public/p1.jpeg') no-repeat center center;
  background-size:cover
  ;
  color: white;
  padding: 250px;
  
}

.buttons {
  margin-top: 20px;
}

.buttons button {
  margin: 0 10px;
  padding: 10px 20px;
  background-color: white;
  color: rgb(3, 87, 197);
  border: none;
  cursor: pointer;
}


*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    font-size: 7px;
}
body{
    font-family: "Nothing You Could Do", cursive;
    font-size:1.6rem;
    line-height: 1.5;
    text-align:center;
    background-color:#56636F;
    color:white;
}
a{
    text-decoration:none;
}
p{
    padding:1.6rem 0;
    font-size: 2rem;
}


.clearfix::after {
    content: "";
    display: block;
    clear: both;
}

header{
    height:46rem;
}
header .bg-image{
    background-image: url(imagess/picture1.jpg);
    background-size:cover;
    background-position:center;
    height:46rem;
    width:100%;
    opacity:0.4;
    position:absolute;
    z-index:-1;
}
header h1{
    padding:12rem;
    padding-bottom:0;
    
}


img{
    width: 100%;
    height:auto;
}
#section-b{
    margin-top: 190px;
    margin-bottom: 190px;
}
#section-b ul{
    list-style: none;
    background-color: #56636F;
}
#section-b li{
    background: #fff;
    color:#56636F;
    margin-bottom: 1.5rem;
   
}


#section-c{
    margin-top: 190px;
    margin-bottom: 190px;
}
#section-c ul{
    list-style: none;
    background-color: #56636F;
}
#section-c li{
    background: #fff;
    color:#56636F;
    margin-bottom: 1.5rem;
   
}

.col-content{
    padding:1.5rem;
}

.footer{
    padding:4rem;
    background:rgb(37, 123, 235);
}

@media screen and (min-width:800px) {
    html{
        font-size:9px;
    }

}
@media screen and (min-width:1200px) {
    html{
        font-size:11px;
    }

    #section-b li{
        width:18%;
        margin:5%;
        display:inline-block;
    }
    #section-c li{
        width:18%;
        margin:1%;
        display:inline-block;
    }

    .box{
        width:50%;
        float:left;
    }
   
    
}


#c2{
  margin-left: 130px;
  background-color:rgb(3, 87, 197);
  padding: 23px;
  font-size:larger;
  color: white;
}
h2 .places{
 margin-left: 50px;
}


</style>

