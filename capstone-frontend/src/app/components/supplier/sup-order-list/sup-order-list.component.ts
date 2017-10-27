import {Component, OnInit} from '@angular/core';
import {Constants} from './../../../constants';
import {OrderService} from "../../../services/order.service";

@Component({
  selector: 'app-sup-order-list',
  templateUrl: './sup-order-list.component.html',
  styleUrls: ['./sup-order-list.component.css']
})
export class SupOrderListComponent implements OnInit {

  public user;
  public orders;
  public innitialPage = 1;
  public pages: any[] = [1];
  public totalPage: number;

  constructor(private constants: Constants,
              private orderService: OrderService) {
  }

  ngOnInit() {
    if (!this.user) {
      this.user = JSON.parse(localStorage.getItem('currentUser'));
    }
    this.changePage('WAITING', '', this.innitialPage);
  }

  changePage(status, searchValue, page) {
    for (let i = this.pages.length; i > 0; i--) {
      this.pages.pop();
    }
    let data = {
      'SupplierID': this.user.userId,
      'SearchValue': searchValue,
      'Status': status,
      'pageNumber': page
    };
    this.orderService.searchOrderSupplier(this.constants.SEARCHORDERSUPPLIER, data).subscribe((response: any) => {
      this.orders = response.content;
    });
  }

}
