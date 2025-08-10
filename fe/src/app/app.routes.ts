import { Routes } from '@angular/router';   
import { Home } from './home/home';
import { ProductDetail } from './product-detail/product-detail';
import { Cart } from './cart/cart';
import { OrderSuccess } from './order-success/order-success';

export const routes: Routes = [
    {path: "", component: Home},
    {path: "product/:id", component: ProductDetail},
    {path: "cart", component: Cart},
    {path: "order/success/:id", component: OrderSuccess}
];
