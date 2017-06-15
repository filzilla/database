var customersDiv = document.querySelector('.customers');
console.log(customersDiv);

//var h = document.createElement("H1")
//var t = document.createTextNode("INTERNAL COMPANY DIRECTORY");
//H1.insertBefore('.customers');
//h.appendChild(t);




function buildCustomers(customerData) {


for (var i = 0; i <customerData.length+1; i++) {





  var customerIndividualDiv = document.createElement('div');
  customerIndividualDiv.setAttribute('class','inside-container');


  //var imageElement = document.createElement(‘img’);
  //  imageElement.src = person.picture.large;
  //customers.appendChild(imageElement);

  var customerPhoto = document.createElement('img');
  customerPhoto.src = customerData[i].picture.large;
  customerIndividualDiv.appendChild(customerPhoto);

  var customerName = document.createElement('div');
  customerName.setAttribute('class','name');
  customerName.innerHTML = customerData[i].name.first + " " + customerData[i].name.last;
  customerIndividualDiv.appendChild(customerName);

  var customerEmail = document.createElement('div');
  customerEmail.setAttribute('class','email');
  customerEmail.innerHTML = customerData[i].email;
  customerIndividualDiv.appendChild(customerEmail);

  var customerAddress1 = document.createElement('div');
  customerAddress1.setAttribute('class','location', 'location2');
  customerAddress1.innerHTML = customerData[i].location.street;
  customerIndividualDiv.appendChild(customerAddress1);

  var customerAddress2 = document.createElement('div');
  customerAddress2.setAttribute('class','location');
  customerAddress2.innerHTML = customerData[i].location.city + ' ' + customerData[0].location.state + ' ' + customerData[i].location.postcode;
  customerIndividualDiv.appendChild(customerAddress2);



  var customerPhone = document.createElement('div');
  customerPhone.setAttribute('class','cell');
  customerPhone.innerHTML = customerData[i].cell;
  customerIndividualDiv.appendChild(customerPhone);

  var customerSsn = document.createElement('div');
  customerSsn.setAttribute('class','id');
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
