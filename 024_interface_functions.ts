interface invoiceFunc {
  (name : string, total : number) : void;
}

let myInvoice : invoiceFunc;
myInvoice = function(n, t) {
  console.log(n);
  console.log(t);
}

myInvoice('Google', 500);