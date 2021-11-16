function updatePrice() {
  let price = 0;
  let prices = getPrices();
  let priceIndex = parseInt(select.value) - 1;
  if (priceIndex >= 0) {
      price = prices.prodTypes[priceIndex];
  }
  let quantity = Number(document.getElementById('vibor').value);
  let Catz_Div = document.querySelectorAll('#Catz input');
  Catz_Div.forEach(function (checkbox) {
      if (checkbox.checked) {
          let propPrice = prices.prodProperties[checkbox.name];
          if (propPrice !== undefined) {price += propPrice;}
      }
  });
  let prodOptionz = document.getElementsByName('prodOptionz');
  let k=0;
  prodOptionz.forEach(function (radio) {
      if (radio.checked) {
          let optionPrice = prices.prodOptionz[radio.value];
          if (optionPrice !== undefined) {
              price += optionPrice;
              
          }
      }
});


  let cou = document.getElementById('vibor');
  cou.addEventListener('input',function (){updatePrice();});
  let s = document.getElementsByName('type');
  s[0].addEventListener('change', function (event) {
      let select = event.target;
      let Manylz = document.getElementById('Manylz');
      let Catz = document.getElementById('Catz');
      if (select.value === '1') {
          Manylz.style.display = 'none';
          Catz.style.display = 'none';
          firstq();
          Catz_hide();
          document.getElementById('price').innerHTML =
              'Всего: ' + prices.prodTypes[0]*quantity + ' рублей';
      }
      else if (select.value === '2') {
          Catz_hide();
          Manylz.style.display = 'block';
          Catz.style.display = 'none';
          document.getElementById('price').innerHTML =
              'Всего: ' + prices.prodTypes[1]*quantity + ' рублей';
      }
      else if (select.value === '3') {
          Manylz.style.display = 'none';
          Catz.style.display = 'block';
          firstq();
          document.getElementById('price').innerHTML =
              'Всего: ' + prices.prodTypes[2]*quantity + ' рублей';
      } else {
      }
  });
  let price_pr = document.getElementById('price');
  price_pr.innerHTML = 'Всего: ' + price * quantity + ' рублей';
}
function getPrices() {
  return {
      prodTypes: [20000, 5000, 1000],
      prodOptionz: {
          Sib: 3000,
          Tib: 10000,
          Zakas: 6000,
      },
      prodProperties: {
          Angor: 5000,
          Bengal: 34000,
          Reg: 13000,
      },
  };
}
let elm = document.getElementById('firstq');
elm.style.display = 'none';
function firstq() {
  elm.checked = !elm.checked;
}
function Catz_hide() {
  document.getElementById('Angor').checked = false;
  document.getElementById('Bengal').checked = false;
  document.getElementById('Reg').checked = false;
}



window.addEventListener('DOMContentLoaded', function () {

  let radioDiv = document.getElementById('Manylz');
  radioDiv.style.display = 'none';

  let Catz = document.getElementById('Catz');
  Catz.style.display = 'none';

  let s = document.getElementsByName('type');
  let select = s[0];

  select.addEventListener('change', function () {
      updatePrice();
  });
  let prodOptionz = document.getElementsByName('prodOptionz');
  prodOptionz.forEach(function (radio) {
      radio.addEventListener('change', function () {updatePrice();});
  });
  let sniper_option = document.querySelectorAll('#Catz input');
  sniper_option.forEach(function (checkbox) {
      checkbox.addEventListener('change', function () {updatePrice();});
  });
  updatePrice();
});