import {Component, OnInit} from '@angular/core';
import {Menubar} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {InputText} from 'primeng/inputtext';

@Component({
  selector: 'app-header',
  imports: [
    Menubar,
    InputText
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Accueil',
        url: '',
      },
      {
        label: 'Nos produits',
        url: 'products',
      },
      {
        label: 'A propos',
        url: '/about',
      },
      {
        label: 'Connexion',
        url: '/login',
      },
    ];
  }
}
