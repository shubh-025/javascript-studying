const form = document.querySelector("form");

// may also write outside for height
//  this usecase will give u empty value

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const ht = parseInt(document.querySelector("#height").value);
  const wt = parseInt(document.querySelector("#weight").value);
  const res = document.querySelector("#results");

  if (ht === "" || ht <= 0 || isNaN(ht)) {
    res.innerHTML = `please give a valid height ${ht} `;
  } else if (wt === "" || wt <= 0 || isNaN(wt)) {
    res.innerHTML = `please give a valid weight ${wt} `;
  } else {
    const bmi = (wt / ((ht * ht) / 10000)).toFixed(2);

    let comm;
    if (bmi < 18.6) comm = "u r underweight";
    else if (bmi < 24.9) comm = "u r normal";
    else comm = "u r overweight";

    res.innerHTML = `<span>${bmi} ${comm}</span>`;

    

    res.appendChild(comm);
  }
});
