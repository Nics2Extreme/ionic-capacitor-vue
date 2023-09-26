<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :icon="caretBack"></ion-back-button>
        </ion-buttons>
        <ion-title>Order Summary</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div id="container">
        <ion-list>
          <ion-radio-group value="name">
            <ion-item lines="none">
              <ion-card class="ion-padding namecard">
                <ion-radio class="name" value="name" labelPlacement="start"
                  >Jhonsen Nicandro</ion-radio
                >
                <ion-label>80 ASDASDASDASDAS ASDASDASD</ion-label>
                <ion-label>J.Nics07891@rocketmail.com</ion-label>
              </ion-card>
            </ion-item>

            <ion-item lines="none">
              <ion-card class="ion-padding namecard">
                <ion-radio class="name" value="home" labelPlacement="start"
                  >Home Address</ion-radio
                >
                <ion-label>80 ASDASDASDASDAS ASDASDASD</ion-label>
                <ion-label>J.Nics07891@rocketmail.com</ion-label>
              </ion-card>
            </ion-item>

            <ion-item lines="none">
              <ion-card class="ion-padding namecard">
                <ion-radio class="name" value="work" labelPlacement="start"
                  >Work/Office</ion-radio
                >
                <ion-label>80 ASDASDASDASDAS ASDASDASD</ion-label>
                <ion-label>J.Nics07891@rocketmail.com</ion-label>
              </ion-card>
            </ion-item>
          </ion-radio-group>
        </ion-list>

        <ion-title>Orders</ion-title>
        <ion-list>
          <ion-card class="item-card">
            <ion-item>
              <img class="image" src="../assets/reward.png" alt="logo" />
              <ion-item lines="none">
                <ion-text class="top-left">
                  <ion-label>1x Rice</ion-label>
                  <ion-label>1x Chicken</ion-label>
                  <ion-label>1x Bepis</ion-label>
                </ion-text>
              </ion-item>
            </ion-item>
            <ion-item lines="none">
              <ion-title color="red">P 150</ion-title>
              <ion-button color="light" slot="end"
                ><ion-label color="danger">-</ion-label></ion-button
              >
              <p slot="end">0</p>
              <ion-button color="light" slot="end"
                ><ion-label color="danger">+</ion-label></ion-button
              >
            </ion-item>
          </ion-card>
        </ion-list>

        <ion-title>Payment Method</ion-title>
        <ion-list>
          <ion-radio-group value="name">
            <ion-item lines="none">
              <ion-card class="ion-padding namecard">
                <ion-radio class="name" value="cod" labelPlacement="start"
                  >Cash on Delivery</ion-radio
                >
                <ion-label>Pay when you receive the order</ion-label>
              </ion-card>
            </ion-item>

            <ion-item lines="none">
              <ion-card class="ion-padding namecard">
                <ion-radio class="name" value="points" labelPlacement="start"
                  >Loyalty Points
                  <span style="color: rgb(220, 71, 71)">(0 points)</span>
                </ion-radio>
                <ion-label>Pay using your earned loyalty points</ion-label>
              </ion-card>
            </ion-item>

            <ion-item lines="none">
              <ion-card class="ion-padding namecard">
                <ion-icon :icon="logoPaypal" size="large"></ion-icon>
                <ion-radio class="name" value="paypal" labelPlacement="start"
                  >Paypal</ion-radio
                >
                <ion-label
                  >A new window will open to access your account</ion-label
                >
              </ion-card>
            </ion-item>

            <ion-item lines="none">
              <ion-card class="ion-padding namecard">
                <ion-icon :icon="cash" size="large"></ion-icon>
                <ion-radio class="name" value="paynamics" labelPlacement="start"
                  >Paynamics</ion-radio
                >
                <ion-label
                  >Choose paynamics services available from you</ion-label
                >
              </ion-card>
            </ion-item>
          </ion-radio-group>
        </ion-list>

        <ion-list class="subtotal">
          <ion-item lines="none">
            <ion-title>Subtotal</ion-title>
            <ion-title class="ion-text-end">P 150</ion-title>
          </ion-item>

          <ion-item lines="none">
            <ion-title>Delivery Charge</ion-title>
            <ion-title class="ion-text-end">P 59</ion-title>
          </ion-item>
          <ion-item lines="none">
            <ion-textarea label-placement="floating" placeholder="e.g. 1000">
              <div slot="label">Change for</div>
            </ion-textarea>
          </ion-item>
        </ion-list>
        <br />
      </div>
    </ion-content>

    <ion-footer>
      <ion-item lines="none">
        <ion-text class="total" lines="none">
          <ion-title>Grand Total</ion-title>
          <ion-title>P 209</ion-title>
        </ion-text>
        <ion-button
          class="place-order"
          slot="end"
          color="danger"
          @click="setOpen(true)"
          >Place Order</ion-button
        >

        <ion-modal :is-open="isOpen" backdropDismiss="false">
          <ion-content class="ion-padding">
            <img class="modal-success" src="../assets/success.png" />
            <ion-list class="ion-text-center">
              <ion-title> Order Received! </ion-title>
              <br />
              <ion-label
                >Your order of
                <ion-label color="danger">78548521</ion-label> has successfully
                take and now being processed. Kindly wait for our notification
                regarding your order.</ion-label
              >
              <br />
              <br />
              <ion-button expand="block" color="danger">Track Order</ion-button>
              <router-link style="text-decoration: none" to="/home">
                <ion-button
                  expand="block"
                  class="add"
                  color="light"
                  @click="setOpen(false)"
                  >Back to Home</ion-button
                >
              </router-link>
            </ion-list>
          </ion-content>
        </ion-modal>
      </ion-item>
    </ion-footer>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonButton,
  IonFooter,
  IonModal,
  IonContent,
  IonBackButton,
  IonItem,
  IonIcon,
  IonHeader,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { bag, caretBack, logoPaypal, cash } from "ionicons/icons";
import { ref } from "vue";

const isOpen = ref(false);

const setOpen = (open: boolean) => (isOpen.value = open);
</script>

<style scoped>
#container {
  margin-bottom: 50px;
}

ion-textarea {
  padding: 0 10px 0 10px;
  margin: 10px;
  border: 1px solid #b3b3b3;
  border-radius: 10px;
  font-size: 1.2em;
}

ion-content {
  margin: 10px;
  padding: 0;
  border: 1px solid #b3b3b3;
  border-radius: 5px;
  overflow: hidden;
}

.namecard {
  width: 100%;
}

.place-order {
  width: 150px;
  height: 50px;
  border-radius: 15px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
}

.total {
  padding: 20px 0 0 0;
}

.image {
  width: 30%;
}

.modal-success {
  width: 30%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

ion-list {
  margin-bottom: 30px;
}

ion- ion-footer ion-title {
  padding: 0;
}

ion-footer ion-button {
  margin-top: 10px;
}

.name {
  font-size: 1.3em;
  font: bold;
  color: #000000;
  padding: 10px 0 10px 0;
}

ion-footer {
  background-color: #ffffff;
  padding-left: 20px;
  padding-right: 20px;
  position: fixed;
  bottom: 0;
  height: 80px;
  color: #000000;
}
</style>
