var customersDiv = document.querySelector('.customers');
console.log(customersDiv);






function buildCustomers(customerData) {


for (var i = 0; i <customerData.length+1; i++) {





  var customerIndividualDiv = document.createElement('div');


  //var imageElement = document.createElement(‘img’);
  //  imageElement.src = person.picture.large;
  //customers.appendChild(imageElement);

  var customerPhoto = document.createElement('img');
  customerPhoto.src = customerData[i].picture.large;
  customerIndividualDiv.appendChild(customerPhoto);

  var customerName = document.createElement('div');
  customerName.innerHTML = customerData[i].name.first + " " + customerData[i].name.last;
  customerIndividualDiv.appendChild(customerName);

  var customerEmail = document.createElement('div');
  customerEmail.innerHTML = customerData[i].email;
  customerIndividualDiv.appendChild(customerEmail);

  var customerAddress1 = document.createElement('div');
  customerAddress1.innerHTML = customerData[i].location.street;
  customerIndividualDiv.appendChild(customerAddress1);

  var customerAddress2 = document.createElement('div');
  customerAddress2.innerHTML = customerData[i].location.city + ' ' + customerData[0].location.state + ' ' + customerData[i].location.postcode;
  customerIndividualDiv.appendChild(customerAddress2);



  var customerPhone = document.createElement('div');
  customerPhone.innerHTML = customerData[i].cell;
  customerIndividualDiv.appendChild(customerPhone);

  var customerSsn = document.createElement('div');
  customerSsn.innerHTML = customerData[i].id.value;
  customerIndividualDiv.appendChild(customerSsn);





  console.log(customerData[0].picture.medium);
  console.log(customerData[0].name);
  console.log(customerData[0].email);
  console.log(customerData[0].location);
  console.log(customerData[0].phone);
  console.log(customerData[0].id);

  customersDiv.appendChild(customerIndividualDiv);

  }
}

(function () {

  'use strict';
  $.ajax({
    url: 'https://randomuser.me/api/?results=12',
    dataType: 'json',
    success: function(data) {

      buildCustomers(data.results);

    }
  });


})();
