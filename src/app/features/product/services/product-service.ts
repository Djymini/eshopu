import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private jsonProduct = 'assets/datas/products.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.jsonProduct);
  }

  getProductById(idString: string, callback: (product: Product) => void): void {
    let id = parseInt(idString);

    this.getProducts().subscribe(products => {
      let product = products.find(p => p.id === id);

      if (product) {
        callback(product);
      } else {
        callback({
          id: 0,
          imagePath: "/assets/images/placeholder-product.png",
          imageDescription: "Product image",
          bannerPath: "/assets/images/placeholder-banner-carousel.jpg8",
          bannerDescription: "Product banner description",
          title: "",
          resume: "",
          price: 0,
          discount: 0,
          stockNumber: 0,
        });
      }
    });
  }

}
