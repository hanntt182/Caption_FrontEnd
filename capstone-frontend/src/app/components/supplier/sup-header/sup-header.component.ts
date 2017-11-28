import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Router} from '@angular/router';
import {NegoService} from '../../../services/nego.service';
import {Constants} from './../../../constants';
import {LoginService} from "../../../services/login.service";
import {ToastsManager} from "ng2-toastr";

@Component({
  selector: 'app-sup-header',
  templateUrl: './sup-header.component.html',
  styleUrls: ['./sup-header.component.css']
})
export class SupHeaderComponent implements OnInit {

  public user;
  public negoID;

  constructor(private router: Router,
              private negoService: NegoService,
              private constants: Constants,
              private loginService: LoginService,
              private toastr: ToastsManager,
              private vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    if (!this.user) {
      this.user = JSON.parse(localStorage.getItem('currentUser'));
    }
  }

  logout() {
    this.user = null;
    this.loginService.setLogin(false);
    localStorage.removeItem('currentUser');
    this.toastr.success('Logged out!!!', 'Success!', {showCloseButton: true});
    setTimeout( () => {
      this.router.navigate(['/home']);
    }, 1000);
  }


  gotoNegoDetail(status) {
    let data = {
      'SearchValue': '',
      'SupplierID': this.user.userId,
      'Status': status
    };
    this.negoService.searchListNegotiationSupplier(this.constants.SEARCHLISTNEGOTIATIONSUPPLIER, data).subscribe((response: any) => {
      this.negoID = response[0].negotiationID;
      this.router.navigate(['/supplier/negotiation/' + status + '/' + this.negoID]);
    }, error => {
      console.log(error);
      if (error._body == 'NEGOTIATION LIST NOT FOUND') {
        this.negoID = 0;
        this.router.navigate(['/supplier/negotiation/' + status + '/' + this.negoID]);
      }
    });
  }

}
