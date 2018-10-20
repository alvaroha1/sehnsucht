import { Component, OnInit } from "@angular/core";
import { Crypto } from "../../../../models/crypto.model";
import { CryptosService } from "../../../../services/cryptos.service";
import { NgForm } from "@angular/forms";
import { SharedDataService } from '../../../../services/shared-data.service';

@Component({
  selector: "app-form-cryptos",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class CryptosFormComponent implements OnInit {
  cryptos: Crypto[] = [];

  constructor(private cryptoService: CryptosService,
              private sharedDataService: SharedDataService) {}

  ngOnInit() {
    this.cryptos = this.cryptoService.registerNewCryptoInvestment();
  }

  onAddNewInvestment(form: NgForm) {
    const newCryptoInvestment = {
      stockid: this.cryptoService.idForSymbol(form.value.symbol),
      symbol: form.value.symbol,
      companyName: this.cryptoService.companyNameForSymbol(form.value.symbol),
      price: form.value.price,
      quantity: form.value.quantity,
      value: form.value.price * form.value.quantity,
      timeStamp: Date.now(),
      deleteId: Date.now() * 3
    };
    this.saveInv(newCryptoInvestment);
  }

  saveInv(newCryptoInvestment) {
    fetch("http://127.0.0.1:3001/cryptos", {
      method: "POST", 
      body: JSON.stringify(newCryptoInvestment), 
      headers: {
        "Content-Type": "application/json"
      }
    
  }).then(res => this.sharedDataService.fetchDatafromCryptos())
    .then(res => this.sharedDataService.fetchDataFromAlles());
  }
}
