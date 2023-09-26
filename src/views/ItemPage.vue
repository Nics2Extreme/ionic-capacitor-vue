<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :icon="caretBack"></ion-back-button>
        </ion-buttons>
        <ion-title>Meat</ion-title>
        <ion-icon :md="bag" size="large" slot="end"></ion-icon>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div id="container">
        <div class="content">
          <ion-item lines="none">
            <img src="../assets/food.png" />
            <div class="bottom-right">
              <ion-button color="light">
                <ion-icon
                  class="ion-text-center"
                  slot="icon-only"
                  :icon="heartOutline"
                ></ion-icon>
              </ion-button>
            </div>
          </ion-item>
        </div>
        <ion-title class="item-name">Burger</ion-title>
        <ion-item lines="none">
          <ion-label class="ion-text-wrap">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            cupiditate minima iure magnam delectus id, quisquam distinctio sequi
            earum alias eum?
          </ion-label>
        </ion-item>
        <ion-item class="item-details" lines="none">
          <ion-title class="item-price" color="danger">P 150</ion-title>
          <ion-button color="light"
            ><ion-label color="danger">-</ion-label></ion-button
          >
          <p style="margin: 0 10px 0 10px">0</p>
          <ion-button color="light"
            ><ion-label color="danger">+</ion-label></ion-button
          >
        </ion-item>
        <ion-item lines="none">
          <ion-title>Beverages</ion-title>
        </ion-item>
        <ion-item lines="none" class="drinks">
          <ion-select
            label="Select Drink"
            label-placement="floating"
            fill="outline"
          >
            <ion-select-option value="coke">Coke</ion-select-option>
            <ion-select-option value="pepsi">Bepis</ion-select-option>
            <ion-select-option value="dew">Mountain Dew</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-grid class="ion-text-center">
          <ion-row>
            <ion-col><ion-button color="light">Regular</ion-button></ion-col>
            <ion-col><ion-button color="light">Large</ion-button></ion-col>
            <ion-col
              ><ion-button color="light">Extra Large</ion-button></ion-col
            >
          </ion-row>
        </ion-grid>

        <ion-title class="item-name"> Add Ons </ion-title>
        <ion-item lines="none">
          <ion-card class="item-card">
            <ion-item lines="none">
              <img src="../assets/reward.png" class="addon" />
              <ion-item lines="none">
                <ion-text class="top-left">
                  <ion-label>Rice</ion-label>
                  <ion-title color="danger">P 20</ion-title>
                </ion-text>
              </ion-item>
              <ion-item lines="none" class="addons">
                <ion-button color="light"
                  ><ion-label color="danger">-</ion-label></ion-button
                >
                <p style="margin: 0 10px 0 10px">0</p>
                <ion-button color="light"
                  ><ion-label color="danger">+</ion-label></ion-button
                >
              </ion-item>
            </ion-item>
          </ion-card>
        </ion-item>

        <ion-item lines="none">
          <ion-card class="item-card">
            <ion-item lines="none">
              <img src="../assets/reward.png" class="addon" />
              <ion-item lines="none">
                <ion-text class="top-left">
                  <ion-label>Rice</ion-label>
                  <ion-title color="danger">P 20</ion-title>
                </ion-text>
              </ion-item>
              <ion-item lines="none">
                <ion-button color="light"
                  ><ion-label color="danger">-</ion-label></ion-button
                >
                <p style="margin: 0 10px 0 10px">0</p>
                <ion-button color="light"
                  ><ion-label color="danger">+</ion-label></ion-button
                >
              </ion-item>
            </ion-item>
          </ion-card>
        </ion-item>
      </div>
    </ion-content>

    <ion-footer>
      <ion-button
        @click="setOpen(true)"
        slot="fixed"
        expand="block"
        color="danger"
        >Add to Bag</ion-button
      >

      <ion-modal :is-open="isOpen" backdropDismiss="false">
        <ion-content class="ion-padding">
          <img class="modal-success" src="../assets/success.png" />
          <ion-list class="ion-text-center">
            <ion-title> Successfully Added! </ion-title>
            <br />
            <ion-label>What do you want to do now?</ion-label>
            <br />
            <br />
            <router-link style="text-decoration: none" to="/checkout">
              <ion-button expand="block" color="danger" @click="setOpen(false)"
                >Proceed to Checkout</ion-button
              >
            </router-link>
            <router-link style="text-decoration: none" to="/order">
              <ion-button
                expand="block"
                class="add"
                @click="setOpen(false)"
                color="light"
                >Add More</ion-button
              >
            </router-link>
          </ion-list>
        </ion-content>
      </ion-modal>
    </ion-footer>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonButton,
  IonFooter,
  IonModal,
  IonSelect,
  IonSelectOption,
  IonContent,
  IonBackButton,
  IonItem,
  IonIcon,
  IonHeader,
  IonSearchbar,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { bag, caretBack, heartOutline } from "ionicons/icons";
import { ref } from "vue";

const isOpen = ref(false);

const setOpen = (open: boolean) => (isOpen.value = open);
</script>

<style scoped>
#container {
  margin-bottom: 50px;
}

.content {
  margin: 10px;
  padding: 0;
  border: 1px solid #b3b3b3;
  border-radius: 5px;
  overflow: hidden;
}

.addon {
  width: 20%;
}

.item-details ion-button {
  padding: 10px;
  font-size: 2em;
}

.modal-success {
  width: 30%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

ion-title {
  padding: 0;
}

ion-icon {
  padding-right: 10px;
  color: rgb(220, 71, 71);
}

.content ion-icon {
  padding: 0;
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

.column {
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.bottom-right {
  position: absolute;
  bottom: 8px;
  right: 16px;
  margin-right: 10px;
  margin-bottom: 10px;
  color: #ffffff;
}

.item {
  background-color: #b3b3b3;
}

.item-name {
  padding-left: 15px;
}

.item-price {
  font-size: 2em;
}

ion-fab-button::part(native) {
  padding-right: 100px;
  border-radius: 15px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
}

ion-footer {
  background-color: #f2f2f2;
  padding-left: 20px;
  padding-right: 20px;
  position: fixed;
  bottom: 0;
  height: 50px;
}

ion-modal {
  --height: 55%;
  --width: 60%;
  --border-radius: 16px;
  --box-shadow: 0 10px 15px -3px rgba(22, 21, 21, 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
}

ion-modal::part(backdrop) {
  background: rgb(58, 58, 58);
  opacity: 1;
}
</style>
