<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="danger"></ion-menu-button>
        </ion-buttons>
        <ion-title>Our Foods</ion-title>
        <ion-icon :md="bag" size="large" slot="end"></ion-icon>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div id="container">
        <div class="content">
          <ion-item class="searchbar" lines="none">
            <ion-searchbar
              placeholder="Try our new Beef Bibimbowl"
              lines="none"
            ></ion-searchbar
            ><ion-icon :md="filter" slot="end"></ion-icon>
          </ion-item>
        </div>

        <div class="ion-text-center">
          <ion-button color="danger">All</ion-button>
          <ion-button color="danger">Breakfast</ion-button>
          <ion-button color="danger">Chicken</ion-button>
          <ion-button color="danger">Seafood</ion-button>
          <ion-button color="danger">Snacks</ion-button>
        </div>

        <div class="row">
          <div class="column">
            <router-link style="text-decoration: none" to="/item">
              <ion-card>
                <img alt="food" src="../assets/food.png" />
                <ion-card-header>
                  <ion-card-title>Burger</ion-card-title>
                  <ion-card-subtitle>Meat</ion-card-subtitle>
                  <ion-card-title color="danger">P 150</ion-card-title>
                </ion-card-header>
              </ion-card>
            </router-link>
          </div>

          <div class="column">
            <ion-card>
              <img alt="food" src="../assets/food1.png" />
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
              <img alt="food" src="../assets/food2.png" />
              <ion-card-header>
                <ion-card-title>Fried Chicken</ion-card-title>
                <ion-card-subtitle>Chicken</ion-card-subtitle>
                <ion-card-title color="danger">P 150</ion-card-title>
              </ion-card-header>
            </ion-card>
          </div>

          <div class="column">
            <ion-card>
              <img alt="food" src="../assets/food3.png" />
              <ion-card-header>
                <ion-card-title>Pancit</ion-card-title>
                <ion-card-subtitle>Pasta</ion-card-subtitle>
                <ion-card-title color="danger">P 150</ion-card-title>
              </ion-card-header>
            </ion-card>
          </div>
        </div>

        <div class="row">
          <div class="column">
            <ion-card>
              <img alt="food" src="../assets/food.png" />
              <ion-card-header>
                <ion-card-title>Burger</ion-card-title>
                <ion-card-subtitle>Meat</ion-card-subtitle>
                <ion-card-title color="danger">P 150</ion-card-title>
              </ion-card-header>
            </ion-card>
          </div>

          <div class="column">
            <ion-card>
              <img alt="food" src="../assets/food1.png" />
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
              <img alt="food" src="../assets/food2.png" />
              <ion-card-header>
                <ion-card-title>Fried Chicken</ion-card-title>
                <ion-card-subtitle>Chicken</ion-card-subtitle>
                <ion-card-title color="danger">P 150</ion-card-title>
              </ion-card-header>
            </ion-card>
          </div>

          <div class="column">
            <ion-card>
              <img alt="food" src="../assets/food3.png" />
              <ion-card-header>
                <ion-card-title>Pancit</ion-card-title>
                <ion-card-subtitle>Pasta</ion-card-subtitle>
                <ion-card-title color="danger">P 150</ion-card-title>
              </ion-card-header>
            </ion-card>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonButtons,
  IonContent,
  IonIcon,
  IonHeader,
  IonMenuButton,
  IonSearchbar,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { bag, filter } from "ionicons/icons";
</script>

<style scoped>
#container {
  margin: auto;
}

.content {
  padding: 20px;
  margin-bottom: 10px;
}

ion-icon {
  margin-right: 10px;
  color: rgb(220, 71, 71);
}

.searchbar {
  border: 1px solid #b3b3b3;
  border-radius: 10px;
  padding: 0;
}

.row {
  display: -webkit-flex;
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
}

router-link {
  text-decoration: none;
}

.column {
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

ion-searchbar {
  --box-shadow: none;
  --icon-color: rgb(220, 71, 71);
}
</style>
