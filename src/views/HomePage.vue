<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="danger"></ion-menu-button>
        </ion-buttons>
        <ion-item lines="none" :detail="false" id="points">
          <ion-buttons>
            <ion-icon class="checkmark" :md="checkmarkCircleOutline"></ion-icon>
            <ion-label>0 points</ion-label>
            <ion-icon color="danger" :md="chevronForwardOutline"></ion-icon>
          </ion-buttons>
        </ion-item>
        <img
          slot="end"
          class="profile-photo"
          src="../assets/luna.jpg"
          alt="profile-pic"
        />
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="content">
        <ion-item lines="none">
          <img class="logo" src="../assets/logo.png" alt="logo" />
          <ion-item lines="none">
            <ion-label class="ion-text-wrap"
              >Anneoyong, Jhonsen!
              <h1 style="font-size: 2em">
                What do you want to eat?
              </h1></ion-label
            >
          </ion-item>
        </ion-item>
      </div>

      <div class="content">
        <ion-item lines="none">
          <ion-searchbar
            class="searchbar"
            placeholder="Try our new Steak Veggie Fries"
            lines="none"
          ></ion-searchbar>
        </ion-item>
      </div>

      <ion-item lines="none">
        <ion-title>Special Offers!</ion-title>
        <ion-buttons>
          <ion-label color="danger">View All</ion-label>
          <ion-icon color="danger" :md="chevronForwardOutline"></ion-icon>
        </ion-buttons>
      </ion-item>

      <div class="banner">
        <swiper-container
          slides-per-view="1"
          space-between="20"
          speed="500"
          loop="true"
          css-mode="true"
          mousewheel-force-to-axis="true"
        >
          <swiper-slide
            ><img src="../assets/banner1.png" alt="banner" />
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/banner2.png" alt="banner" />
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/banner3.png" alt="banner" />
          </swiper-slide>
        </swiper-container>
      </div>

      <ion-item lines="none">
        <ion-title>Category</ion-title>
      </ion-item>
      <div class="card">
        <swiper-container
          slides-per-view="2"
          speed="500"
          loop="true"
          css-mode="true"
          mousewheel-force-to-axis="true"
        >
          <swiper-slide>
            <ion-item lines="none">
              <img src="../assets/card.png" alt="banner" />
              <div class="bottom-left">
                <h2>Burgers</h2>
                <span>9 recipes</span>
              </div>
            </ion-item>
          </swiper-slide>
          <swiper-slide>
            <ion-item lines="none">
              <img src="../assets/card2.png" alt="banner" />
              <div class="bottom-left">
                <h2>Ramen</h2>
                <span>6 recipes</span>
              </div>
            </ion-item>
          </swiper-slide>
          <swiper-slide>
            <ion-item lines="none">
              <img src="../assets/card3.png" alt="banner" />
              <div class="bottom-left">
                <h2>Meals</h2>
                <span>6 recipes</span>
              </div>
            </ion-item>
          </swiper-slide>
        </swiper-container>
      </div>

      <ion-item lines="none">
        <ion-title>What's New</ion-title>
      </ion-item>

      <div class="content">
        <ion-item class="poster" lines="none">
          <img src="../assets/poster.png" alt="banner" />
        </ion-item>
      </div>

      <ion-item lines="none">
        <ion-title>Most Popular</ion-title>
      </ion-item>

      <div class="row">
        <div class="column">
          <ion-card>
            <img src="../assets/food.png" alt="banner" />
            <ion-card-header>
              <ion-card-title>Burger</ion-card-title>
              <ion-card-subtitle>Meat</ion-card-subtitle>
              <ion-card-title color="danger">P 150</ion-card-title>
            </ion-card-header>
          </ion-card>
        </div>

        <div class="column">
          <ion-card>
            <img src="../assets/food1.png" alt="banner" />
            <ion-card-header>
              <ion-card-title>Pizza</ion-card-title>
              <ion-card-subtitle>Snack</ion-card-subtitle>
              <ion-card-title color="danger">P 150</ion-card-title>
            </ion-card-header>
          </ion-card>
        </div>
      </div>

      <div class="row">
        <div class="column">
          <ion-card>
            <img src="../assets/food2.png" alt="banner" />
            <ion-card-header>
              <ion-card-title>Fried Chicken</ion-card-title>
              <ion-card-subtitle>Chicken</ion-card-subtitle>
              <ion-card-title color="danger">P 150</ion-card-title>
            </ion-card-header>
          </ion-card>
        </div>

        <div class="column">
          <ion-card>
            <img src="../assets/food3.png" alt="banner" />
            <ion-card-header>
              <ion-card-title>Pancit</ion-card-title>
              <ion-card-subtitle>Pasta</ion-card-subtitle>
              <ion-card-title color="danger">P 150</ion-card-title>
            </ion-card-header>
          </ion-card>
        </div>
      </div>

      <ion-fab slot="fixed" vertical="bottom" horizontal="end">
        <ion-fab-button color="danger" router-link="/order">
          Order Now!
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonButtons,
  IonCard,
  IonContent,
  IonHeader,
  IonFab,
  IonFabButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonSearchbar,
  IonicSlides,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { checkmarkCircleOutline, chevronForwardOutline } from "ionicons/icons";
import { register } from "swiper/element/bundle";

// register Swiper custom elements
register();
</script>

<style scoped>
#container {
  margin: auto;
  padding-right: 20%;
}

.row {
  display: -webkit-flex;
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
}

.column {
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.profile-photo {
  width: 5%;
  border-radius: 50% !important;
  overflow: hidden;
  margin: 0 20px 0 20px;
}

.logo {
  width: 40%;
}

.content {
  margin-bottom: 20px;
}

.banner {
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 20px;
}

.card {
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
}
.banner img {
  border: 4px solid #b3b3b3;
  border-radius: 10px;
  overflow: hidden;
}

.poster {
  padding-left: 10px;
  padding-right: 10px;
}

.poster img {
  border: 4px solid #b3b3b3;
  border-radius: 10px;
  overflow: hidden;
}

.card img {
  border: 4px solid rgb(220, 71, 71);
  border-radius: 10px;
  overflow: hidden;
}

/* Bottom left text */
.bottom-left {
  position: absolute;
  bottom: 8px;
  left: 16px;
  margin-left: 10px;
  margin-bottom: 30px;
  color: #ffffff;
}

ion-searchbar {
  --border-radius: 10px;
  --icon-color: rgb(220, 71, 71);
}

ion-icon {
  padding-left: 10px;
  padding-right: 10px;
}

ion-fab {
  margin-right: 120px;
}

ion-fab-button::part(native) {
  width: 150px;
  height: 50px;
  border-radius: 15px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
}
</style>
