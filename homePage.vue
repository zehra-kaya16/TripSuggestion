<script setup>

</script>

<template>
  
  <v-app>
    <div class="header">
    <span class="title">TripSuggestion.com</span>
  </div>
  <div class="main-banner">
    <h1>FIND YOUR PERFECT TRIP!</h1>
    <div class="buttons">

        <v-btn variant="outlined">
        <v-icon left dark>mdi-account</v-icon>
          Sign In
        </v-btn>
      
      <v-btn variant="outlined">
        <v-icon left dark>mdi-account</v-icon>
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
              <img src="C:\Users\User\vue-project\src\public\fethiye-oludeniz.jpg" />
              <div class="col-content">
                <h3 class="col-title">Fethiye Ölü Deniz/Antalya</h3>
                <div class="stars">
                &#9733;&#9733;&#9733;&#9733;&#9733; <!-- 5 stars -->
              </div>
              <p>TL-</p>
            </div>
              <div class="heart-icon">&#10084;</div> <!-- Heart Icon -->
            </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  
          </li>
          <li>
            <div class="col">
              <img src="C:\Users\User\vue-project\src\public\duden-selalesi-antalya.jpeg" />
              <div class="col-content">
                <h3 class="col-title">Düden Şelalesi/Antalya</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </li>
          <li>
            <div class="col">
              <img src="C:\Users\User\vue-project\src\public\aspedos-antik-tiyatrosu-antalya.jpeg" />
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
              <img src="C:\Users\User\vue-project\src\public\kiz-kulesi.webp" />
              <div class="col-content">
                <h3 class="col-title">Kız Kulesi/İstanbul</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </li>
          <li>
            <div class="col">
              <img src="C:\Users\User\vue-project\src\public\camlica-tepesi.jpg" />
              <div class="col-content">
                <h3 class="col-title">Çamlıca Tepesi/İstanbul</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </li>
          <li>
            <div class="col">
              <img src="C:\Users\User\vue-project\src\public\ayasofya-camii-istanbul.jpg" />
              <div class="col-content">
                <h3 class="col-title">Ayasofya Cami/İstanbul</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </li>
        
        </ul>
      </section>

      
<div class="footer"></div>

</v-app>
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
  background: url('C:\Users\User\vue-project\src\public\maldives6 - Kopya.jpg') no-repeat center center;
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
    background-color:#383f46;
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
    margin-top: 180px;
    margin-bottom: 80px;
}
#section-b ul{
    list-style: none;
    background-color: #383f46;
    padding: 0 150px;
}
#section-b li{
    background: #fff;
    color:#383f46;
    margin-bottom: 1.5rem;
    position: relative;
   
}


#section-c{
    margin-top: 80px;
    margin-bottom: 80px;
}
#section-c ul{
    list-style: none;
    background-color: #383f46;
    padding: 0 150px;
}
#section-c li{
    background: #fff;
    color:#383f46;
    margin-bottom: 1.5rem;
    position: relative;
   
}


#section-d{
    margin-top: 80px;
    margin-bottom: 80px;
}
#section-d ul{
    list-style: none;
    background-color: #383f46;
    padding: 0 150px;
}
#section-d li{
    background: #fff;
    color:#383f46;
    margin-bottom: 1.5rem;
    position: relative;
   
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
        width:23%;
        margin:5%;
        display:inline-block;
    }
    #section-c li{
        width:23%;
        margin:5%;
        display:inline-block;
    }
    #section-d li{
        width:23%;
        margin:5%;
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


.v-icon {
  color: black;
}


.stars {
  color: gold; /* Yıldızların rengi */
  font-size: 1.5rem;
}

.heart-icon {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 2rem;
  color: rgb(236, 106, 106);
}

.image-container {
  position: relative;
}

</style>
