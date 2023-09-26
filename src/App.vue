<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <ion-menu content-id="main-content" type="overlay">
        <ion-content>
          <ion-menu-toggle :auto-hide="false">
            <ion-item lines="none" :detail="false">
              <img class="profile-photo" src="./assets/luna.jpg" />
              <ion-item
                lines="none"
                router-direction="root"
                router-link="/points"
              >
                <ion-buttons>
                  <ion-icon
                    class="checkmark"
                    :md="checkmarkCircleOutline"
                  ></ion-icon>
                  <ion-label>0 points</ion-label>
                  <ion-icon
                    color="danger"
                    :md="chevronForwardOutline"
                  ></ion-icon>
                </ion-buttons>
              </ion-item>
            </ion-item>
          </ion-menu-toggle>

          <ion-list id="profile-list">
            <ion-list-header>Jhonsen Nicandro</ion-list-header>
            <ion-note>+63 999 999 9999</ion-note>
          </ion-list>

          <ion-list id="inbox-list">
            <ion-menu-toggle
              :auto-hide="false"
              v-for="(p, i) in appPages"
              :key="i"
            >
              <ion-item
                @click="selectedIndex = i"
                router-direction="root"
                :router-link="p.url"
                lines="none"
                :detail="false"
                class="hydrated"
                :class="{ selected: selectedIndex === i }"
              >
                <ion-icon slot="start" :md="p.mdIcon"></ion-icon>
                <ion-label>{{ p.title }}</ion-label>
              </ion-item>
            </ion-menu-toggle>

            <ion-item lines="none" :detail="false" class="hydrated">
              <ion-icon slot="start" :md="notificationsOutline"></ion-icon>
              <ion-label>Notifications</ion-label>
              <ion-badge color="warning">4</ion-badge>
            </ion-item>

            <ion-item lines="none" :detail="false" class="hydrated">
              <ion-icon slot="start" :md="storefrontOutline"></ion-icon>
              <ion-label>Store Locator</ion-label>
            </ion-item>

            <ion-item lines="none" :detail="false" class="hydrated">
              <ion-icon slot="start" :md="helpCircleOutline"></ion-icon>
              <ion-label>FAQ's</ion-label>
            </ion-item>
          </ion-list>

          <ion-list id="labels-list">
            <ion-item lines="none" :detail="false" class="hydrated">
              <ion-icon slot="start" :md="bagOutline"></ion-icon>
              <ion-label>My Orders</ion-label>
              <ion-badge color="warning">2</ion-badge>
            </ion-item>

            <ion-item lines="none" :detail="false" class="hydrated">
              <ion-icon slot="start" :md="personOutline"></ion-icon>
              <ion-label>My Account</ion-label>
            </ion-item>

            <ion-item lines="none" :detail="false" class="hydrated">
              <ion-icon slot="start" :md="heartOutline"></ion-icon>
              <ion-label>My Favorites</ion-label>
            </ion-item>

            <ion-item lines="none" :detail="false" class="hydrated">
              <ion-icon slot="start" :md="locationOutline"></ion-icon>
              <ion-label>Order Tracker</ion-label>
            </ion-item>

            <ion-item lines="none" :detail="false" class="hydrated">
              <ion-icon slot="start" :md="timeOutline"></ion-icon>
              <ion-label>Order History</ion-label>
            </ion-item>
          </ion-list>
          <ion-list>
            <ion-button color="danger">Logout</ion-button>
          </ion-list>
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<script setup lang="ts">
import {
  IonApp,
  IonButton,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRouterOutlet,
  IonSplitPane,
} from "@ionic/vue";
import { ref } from "vue";
import {
  fastFoodOutline,
  homeOutline,
  notificationsOutline,
  storefrontOutline,
  helpCircleOutline,
  bagOutline,
  personOutline,
  heartOutline,
  locationOutline,
  timeOutline,
  checkmarkCircleOutline,
  chevronForwardOutline,
} from "ionicons/icons";

const selectedIndex = ref(0);
const appPages = [
  {
    title: "Home",
    url: "/home",
    mdIcon: homeOutline,
  },
  {
    title: "Order Now!",
    url: "/order",
    mdIcon: fastFoodOutline,
  },
];

const path = window.location.pathname.split("folder/")[1];
if (path !== undefined) {
  selectedIndex.value = appPages.findIndex(
    (page) => page.title.toLowerCase() === path.toLowerCase()
  );
}
</script>

<style scoped>
ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 10px;
  --padding-bottom: 10px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#inbox-list {
  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
}

ion-menu.md ion-list#profile-list ion-list-header {
  font-size: 22px;
  font-weight: 600;
  min-height: 20px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected ion-icon {
  color: rgb(220, 71, 71);
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-badge {
  border-radius: 200px;
}

ion-button {
  width: 60%;
}

.profile-photo {
  width: 30%;
  border-radius: 50% !important;
  overflow: hidden;
  margin-right: 20px;
  margin-top: 10px;
}

.checkmark {
  margin-right: 20px;
}
</style>
