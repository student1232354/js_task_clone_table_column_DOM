'use strict';

const allobj = [];

const allofthat = document.querySelectorAll('tbody tr');

allofthat.forEach(function (eachobj) {
  const eachsentence = eachobj.querySelectorAll('td');

  const newdata = {
    name: eachsentence[0].textContent.trim(),
    position: eachsentence[1].textContent.trim(),
    Office: eachsentence[2].textContent.trim(),
    age: eachsentence[3].textContent.trim(),
    salary: eachsentence[4].textContent.trim(),
  };

  allobj.push(newdata);
});



const tfoot  = document.querySelector('tfoot');

allobj.forEach(function(eachobj) {

  const newtr = document.createElement('tr');

  for (const key in eachobj) {

    const current = eachobj[key];
    const newtd = document.createElement('td');
    newtd.textContent = current;
    newtr.append(newtd);
  }

  tfoot.append(newtr);

});
