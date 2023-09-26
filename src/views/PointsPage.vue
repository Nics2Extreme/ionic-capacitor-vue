<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="danger"></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="content">
        <ion-item lines="none">
          <ion-item lines="none">
            <img class="crown" src="../assets/crown.png" />
            <ion-title>Beginner's Tier</ion-title>
          </ion-item>
          <ion-item lines="none" slot="end">
            <ion-label>View All</ion-label>
            <ion-icon color="danger" :md="chevronForwardOutline"></ion-icon>
          </ion-item>
        </ion-item>
        <ion-item class="content" lines="none">
          <ion-label class="ion-text-wrap"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            neque praesentium maxime accusamus at, rerum nesciunt ipsam eaque
            iure.</ion-label
          >
        </ion-item>
        <div class="progress">
          <div class="progress-bar-container">
            <div class="progress-bar js">
              <progress id="js" min="0" max="160" value="80"></progress>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <ion-item lines="none">
          <ion-title>Rewards</ion-title>
          <ion-item lines="none">
            <ion-label color="danger">How It Works</ion-label>
            <ion-icon color="danger" :md="chevronForwardOutline"></ion-icon>
          </ion-item>
        </ion-item>
      </div>

      <div class="ion-text-center">
        <ion-button color="danger">All</ion-button>
        <ion-button color="danger">Beginner</ion-button>
        <ion-button color="danger">Intermediate</ion-button>
        <ion-button color="danger">Loyal</ion-button>
      </div>

      <div class="content">
        <ion-card class="item-card">
          <ion-item lines="none">
            <img class="crown" src="../assets/reward.png" />
            <ion-item lines="none" class="item">
              <ion-text class="top-left">
                <ion-title class="item">Chicken and Sliders</ion-title>
                <ion-note>Chicken</ion-note>
                <p>
                  <ion-icon :md="checkmarkCircleOutline"></ion-icon>20 points
                </p>
              </ion-text>
            </ion-item>
          </ion-item>
        </ion-card>
      </div>
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
}

.content {
  padding: 20px;
  margin-bottom: 20px;
}

.content .crown {
  width: "10%";
}

@property --progress-value {
  syntax: "<integer>";
  inherits: false;
  initial-value: 0;
}

.progress-bar {
  width: 300px;
  height: 300px;
  border-radius: 50%;

  /* to center the percentage value */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}

.progress-bar::before {
  counter-reset: percentage var(--progress-value);
  content: counter(percentage) " / 160";
}

.js {
  background: radial-gradient(
      closest-side,
      white 79%,
      transparent 80% 100%,
      white 0
    ),
    conic-gradient(hotpink calc(var(--progress-value) * 1%), pink 0);
  animation: js-progress 2s 1 forwards;
}

progress {
  visibility: hidden;
  width: 0;
  height: 0;
}

.item-card {
  padding: 10px;
}

.item-card ion-text {
  margin: 10px;
}

.item-card p {
  color: rgb(220, 71, 71);
}

.item {
  padding: 0;
}

.item ion-icon {
  margin: 0;
}

.item img {
  width: 40%;
}
</style>
