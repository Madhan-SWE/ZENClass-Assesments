function validateForm() {
  var fname = document.contactForm.fullname.value;
  var ad1 = document.contactForm.address1.value;
  var ad2 = document.contactForm.address2.value;
  var city = document.contactForm.city.value;
  var spr = document.contactForm.spr.value;
  var zip = document.contactForm.zip.value;
  var country = document.contactForm.country.value;
  var ph = document.contactForm.ph.value;

  if (fname === "") {
    document.getElementById("error").innerText = "Name cannot be empty";
    return false;
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(fname) === false) {
      document.getElementById("error").innerText = "Please enter a vallid name";
      return false;
    }
  }

  if (ad1 === "") {
    document.getElementById("error").innerText =
      "Address Line 1 cannot be empty";
    return false;
  } else {
    var regex = /^[a-zA-Z0-9,\s]+$/;
    if (regex.test(ad1) === false) {
      document.getElementById("error").innerText =
        "Please enter a valid Address line 1";
      return false;
    }
  }

  if (ad2 === "") {
    document.getElementById("error").innerText =
      "Address Line 2 cannot be empty";
    return false;
  } else {
    var regex = /^[a-zA-Z0-9,\s]+$/;
    if (regex.test(ad2) === false) {
      document.getElementById("error").innerText =
        "Please enter a valid Address line 2";
      return false;
    }
  }

  if (city === "") {
    document.getElementById("error").innerText = "City cannot be empty";
    return false;
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(city) === false) {
      document.getElementById("error").innerText =
        "Please enter a valid city name";
      return false;
    }
  }

  if (spr === "") {
    document.getElementById("error").innerText =
      "State/provision/region cannot be empty";
    return false;
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(spr) === false) {
      document.getElementById("error").innerText = "Please enter a vallid name";
      return false;
    }
  }

  if (zip === "") {
    document.getElementById("error").innerText = "ZIP cannot be empty";
    return false;
  } else {
    var regex = /^[1-9]\d{5}$/;
    if (regex.test(zip) === false) {
      document.getElementById("error").innerText =
        "Please enter a valid ZIP code";
      return false;
    }
  }

  if (country === "") {
    document.getElementById("error").innerText = "Country cannot be empty";
    return false;
  }

  if (ph === "") {
    document.getElementById("error").innerText = "Phone Number cannot be empty";
    return false;
  } else {
    var regex = /^[1-9]\d{9}$/;
    if (regex.test(ph) === false) {
      document.getElementById("error").innerText =
        "Please enter a valid phone number";
      return false;
    }
  }

  alert("Thanks, form submitted successfully");
}
