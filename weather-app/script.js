// ========== taking input =========
const inputElem = document.querySelector("input");
const buttonElem = document.getElementById("search");
buttonElem.addEventListener("click", async function () {
  const location = inputElem.value.trim();
  //console.log("loc",location);
  if (location != "") {
    // get data
    const data = await fetchweather(location);
    if (data == null) {
    } else {
      updateDom(data);
    }
    inputElem.value = "";
  }
});

async function fetchweather(location) {
  const url = `https://api.weatherapi.com/v1/current.json?key=c7236d36debb4636a18170654262201&q=${location}&aqi=no`;
  const response = await fetch(url);
  console.log(response);
  if (response.status == 400) {
    alert("location is invalid");
    return null;
  } else {
    const jsonData = await response.json();
    console.log(jsonData);
    return jsonData;
  }
}

function updateDom(data) {
  // ******** filter required data *********

  const temp = data.current.temp_c;

  const Location = data.location.name;

  const cloudicon = data.current.condition.icon;

  const timedata = data.location.localtime;
  const [date, time] = timedata.split(" ");

  // ********** update the dom*********

  const temperature = document.querySelector(".temperature");
  const askedLocation = document.querySelector(".location");

  const askedicon = document.querySelector(".icon");
  document.querySelector(".time").textContent = time;
  document.querySelector(".date").textContent = date;

  askedLocation.textContent = Location;
  temperature.textContent = temp;

  askedicon.src = cloudicon;
}

