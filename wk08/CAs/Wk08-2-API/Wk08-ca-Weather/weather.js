document.addEventListener("DOMContentLoaded", getPSI(), false);
document.getElementById('btnSubmit').addEventListener('click', function(e) {
    getPSI(document.getElementById("txtDate").value);
}, false);

function getPSI(datetime = "") {
    var url = "https://api-open.data.gov.sg/v2/real-time/api/psi";  
    if (datetime.trim() !== "") {
        url += `?date=${datetime}`; 
    }

    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(result) {
        console.log("API status: " + result.code);
        if (result.code == "0") {
			//24 hours PSI reading
            var reading = result.data.items[0].readings.psi_twenty_four_hourly;
            var content = "";
            for (var key in reading) {
                console.log("PSI " + key + ": " + reading[key]);
                content += key + ": " + reading[key] + "<br/>";
            }
            document.getElementById("psi-twenty-four-hourly").innerHTML = content;
            localStorage.setItem("psi_twentyfour_hourly", JSON.stringify(reading));
        
            // 24 hours PM10 readings
            reading = result.data.items[0].readings.pm10_twenty_four_hourly;
            content = "";
            for (const key in reading) {
                console.log("Pm10 " + key + ": " + reading[key]);
                content += key + ": " + reading[key] + "<br/>";
            }
            document.getElementById("pm10-twenty-four-hourly").innerHTML = content;
            localStorage.setItem("pM10_twentyfour_hourly", JSON.stringify(reading));
        }     
    })
    .catch(function(error) {
        console.error(error);
    });
}