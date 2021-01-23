import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivateMenuItemService {

  activeHome: boolean
  activeCatalog: boolean
  activeBlog: boolean
  activeGallery: boolean
  activeCart: boolean
  activeCheckout: boolean
  activeFaq: boolean
  activeContacts: boolean
  activeLogin: boolean
  activeSignIn: boolean

  constructor() {
    this.activateHome();
  }

  activateHome() {
    this.activeHome = true;
    this.activeCatalog = false;
    this.activeBlog = false;
    this.activeGallery = false;
    this.activeCart = false;
    this.activeCheckout = false;
    this.activeFaq = false;
    this.activeContacts = false;
    this.activeLogin = false;
    this.activeSignIn = false;
  }

  activateCatalog() {
    this.activeHome = false;
    this.activeCatalog = true;
    this.activeBlog = false;
    this.activeGallery = false;
    this.activeCart = false;
    this.activeCheckout = false;
    this.activeFaq = false;
    this.activeContacts = false;
    this.activeLogin = false;
    this.activeSignIn = false;
  }

  activateBlog() {
    this.activeHome = false;
    this.activeCatalog = false;
    this.activeBlog = true;
    this.activeGallery = false;
    this.activeCart = false;
    this.activeCheckout = false;
    this.activeFaq = false;
    this.activeContacts = false;
    this.activeLogin = false;
    this.activeSignIn = false;
  }

  activateGallery() {
    this.activeHome = false;
    this.activeCatalog = false;
    this.activeBlog = false;
    this.activeGallery = true;
    this.activeCart = false;
    this.activeCheckout = false;
    this.activeFaq = false;
    this.activeContacts = false;
    this.activeLogin = false;
    this.activeSignIn = false;
  }

  activateCart() {
    this.activeHome = false;
    this.activeCatalog = false;
    this.activeBlog = false;
    this.activeGallery = false;
    this.activeCart = true;
    this.activeCheckout = false;
    this.activeFaq = false;
    this.activeContacts = false;
    this.activeLogin = false;
    this.activeSignIn = false;
  }

  activateCheckout() {
    this.activeHome = false;
    this.activeCatalog = false;
    this.activeBlog = false;
    this.activeGallery = false;
    this.activeCart = false;
    this.activeCheckout = true;
    this.activeFaq = false;
    this.activeContacts = false;
    this.activeLogin = false;
    this.activeSignIn = false;
  }

  activateFaq() {
    this.activeHome = false;
    this.activeCatalog = false;
    this.activeBlog = false;
    this.activeGallery = false;
    this.activeCart = false;
    this.activeCheckout = false;
    this.activeFaq = true;
    this.activeContacts = false;
    this.activeLogin = false;
    this.activeSignIn = false;
  }

  activateContacts() {
    this.activeHome = false;
    this.activeCatalog = false;
    this.activeBlog = false;
    this.activeGallery = false;
    this.activeCart = false;
    this.activeCheckout = false;
    this.activeFaq = false;
    this.activeContacts = true;
    this.activeLogin = false;
    this.activeSignIn = false;
  }

  activateLogin() {
    this.activeHome = false;
    this.activeCatalog = false;
    this.activeBlog = false;
    this.activeGallery = false;
    this.activeCart = false;
    this.activeCheckout = false;
    this.activeFaq = false;
    this.activeContacts = false;
    this.activeLogin = true;
    this.activeSignIn = false;
  }

  activateSignIn() {
    this.activeHome = false;
    this.activeCatalog = false;
    this.activeBlog = false;
    this.activeGallery = false;
    this.activeCart = false;
    this.activeCheckout = false;
    this.activeFaq = false;
    this.activeContacts = false;
    this.activeLogin = false;
    this.activeSignIn = true;
  }

}
