import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from './components/user/header/header.component';
import {HomeComponent} from './components/user/home/home.component';
import {BrandsListComponent} from './components/user/brands-list/brands-list.component';
import {SupPostCreate1Component} from './components/supplier/sup-post-create-1/sup-post-create-1.component';
import {SupPostCreate2Component} from './components/supplier/sup-post-create-2/sup-post-create-2.component';
import {SupPostCreate3Component} from './components/supplier/sup-post-create-3/sup-post-create-3.component';
import {SupHeaderComponent} from './components/supplier/sup-header/sup-header.component';
import {AdMainComponent} from './components/admin/ad-main/ad-main.component';
import {SupMainComponent} from './components/supplier/sup-main/sup-main.component';
import {SupPostListComponent} from './components/supplier/sup-post-list/sup-post-list.component';
import {ProductDetailComponent} from './components/common/product-detail/product-detail.component';
import {SearchPostComponent} from './components/user/search-post/search-post.component';
import {BuyHeaderComponent} from './components/buyer/buy-header/buy-header.component';
import {BuyMainComponent} from './components/buyer/buy-main/buy-main.component';
import {StaffHeaderComponent} from './components/staff/staff-header/staff-header.component';
import {StaffMainComponent} from './components/staff/staff-main/staff-main.component';
import {StaffPostListComponent} from './components/staff/staff-post-list/staff-post-list.component';
import {StaffPostDetailComponent} from './components/staff/staff-post-detail/staff-post-detail.component';
import {CreateOrderComponent} from './components/buyer/create-order/create-order.component';
import {SupNegoDetailComponent} from './components/supplier/sup-nego-detail/sup-nego-detail.component';
import {BuyNegoDetailComponent} from './components/buyer/buy-nego-detail/buy-nego-detail.component';
import {AdminRoleGuard} from './guards/check-role/admin-role.guard';
import {StaffRoleGuard} from './guards/check-role/staff-role.guard';
import {BuyRoleGuard} from './guards/check-role/buy-role.guard';
import {SupRoleGuard} from './guards/check-role/sup-role.guard';
import {RegisterComponent} from './components/user/register/register.component';
import {SupPostUpdateComponent} from './components/supplier/sup-post-update/sup-post-update.component';
import {CreateOrderGuard} from './guards/create-order.guard';
import {StaffOrderListComponent} from './components/staff/staff-order-list/staff-order-list.component';
import {BuyOrderPaymentComponent} from './components/buyer/buy-order-payment/buy-order-payment.component';
import {BuyNegoCreateComponent} from './components/buyer/buy-nego-create/buy-nego-create.component';
import {BuyNegoPaymentComponent} from './components/buyer/buy-nego-payment/buy-nego-payment.component';
import {BuyTenderCreateComponent} from './components/buyer/buy-tender-create/buy-tender-create.component';
import {BuyProfileUpdateComponent} from './components/buyer/buy-profile-update/buy-profile-update.component';
import {CreateTenderGuard} from './guards/create-tender.guard';
import {TenderDetailComponent} from './components/common/tender-detail/tender-detail.component';
import {TenderListComponent} from "./components/common/tender-list/tender-list.component";
import {TenderListHomeComponent} from "./components/user/tender-list-home/tender-list-home.component";
import {OrderListComponent} from "./components/common/order-list/order-list.component";
import {OrderDetailComponent} from "./components/common/order-detail/order-detail.component";
import {SupDealCreateComponent} from "./components/supplier/sup-deal-create/sup-deal-create.component";
import {DealListComponent} from "./components/common/deal-list/deal-list.component";
import {DealListHomeComponent} from "./components/user/deal-list-home/deal-list-home.component";
import {DealDetailComponent} from "./components/common/deal-detail/deal-detail.component";
import {BuyDealOrderComponent} from "./components/buyer/buy-deal-order/buy-deal-order.component";


const routing: Routes = [
  {
    path: '', component: HeaderComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'tender', component: TenderListHomeComponent},
      {path: 'groupbuying', component: DealListHomeComponent},
      {path: 'groupbuying-detail/:dealId', component: DealDetailComponent},
      {path: 'negotiation/:postID', component: BuyNegoCreateComponent},
      {path: 'product/:catalogId/:brandId', component: BrandsListComponent},
      {path: 'product-detail/:postId', component: ProductDetailComponent},
      {path: 'search/:searchValue', component: SearchPostComponent},
      {path: 'create-order/:postID', component: CreateOrderComponent, canActivate: [CreateOrderGuard]}
    ]
  },
  {
    path: 'supplier', component: SupHeaderComponent, canActivate: [SupRoleGuard],
    children: [
      {path: '', redirectTo: 'main', pathMatch: 'full'},
      {path: 'main', component: SupMainComponent},
      {path: 'post-list', component: SupPostListComponent},
      {path: 'post-detail/:postId', component: ProductDetailComponent},
      {path: 'create-post1', component: SupPostCreate1Component},
      {path: 'create-post2', component: SupPostCreate2Component},
      {path: 'create-post3', component: SupPostCreate3Component},
      {path: 'update-post/:postId', component: SupPostUpdateComponent},
      {path: 'order-list/:orderStatus', component: OrderListComponent},
      {path: 'order-detail/:orderId', component: OrderDetailComponent},
      {path: 'negotiation/:negoStatus/:negoId', component: SupNegoDetailComponent},
      {path: 'tender-list/:tenderStatus', component: TenderListComponent},
      {path: 'tender-detail/:tenderId', component: TenderDetailComponent},
      {path: 'create-deal', component: SupDealCreateComponent},
      {path: 'deal-list/:dealStatus', component: DealListComponent},
      {path: 'groupbuying-detail/:dealId', component: DealDetailComponent}
    ]
  },
  {
    path: 'buyer', component: BuyHeaderComponent, canActivate: [BuyRoleGuard],
    children: [
      {path: '', redirectTo: 'main', pathMatch: 'full'},
      {path: 'main', component: BuyMainComponent},
      {path: 'update-info', component: BuyProfileUpdateComponent},
      {path: 'order-list/:orderStatus', component: OrderListComponent},
      {path: 'order-detail/:orderId', component: OrderDetailComponent},
      {path: 'payment/:orderId', component: BuyOrderPaymentComponent},
      {path: 'negotiation/:negoStatus/:negoId', component: BuyNegoDetailComponent},
      {path: 'payment-nego/:negoId', component: BuyNegoPaymentComponent},
      {path: 'create-tender', component: BuyTenderCreateComponent, canActivate: [CreateTenderGuard]},
      {path: 'tender-list/:tenderStatus', component: TenderListComponent},
      {path: 'tender-detail/:tenderId', component: TenderDetailComponent},
      {path: 'deal-list/:dealStatus', component: DealListComponent},
      {path: 'deal-order/:dealId', component: BuyDealOrderComponent},
      {path: 'groupbuying-detail/:dealId', component: DealDetailComponent}
    ]
  },
  {
    path: 'staff', component: StaffHeaderComponent, canActivate: [StaffRoleGuard],
    children: [
      {path: '', redirectTo: 'main', pathMatch: 'full'},
      {path: 'main', component: StaffMainComponent},
      {path: 'post-list', component: StaffPostListComponent},
      {path: 'post-detail/:postId', component: StaffPostDetailComponent},
      {path: 'order-list', component: StaffOrderListComponent},
      {path: 'order-detail/:orderId', component: OrderDetailComponent}
    ]
  },
  {
    path: 'admin', component: SupHeaderComponent, canActivate: [AdminRoleGuard],
    children: [
      {path: '', redirectTo: 'main', pathMatch: 'full'},
      {path: 'main', component: AdMainComponent}
    ]
  }
];

export const appRoutes = RouterModule.forRoot(routing);
