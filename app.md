## Wheather app


# Need data ->APi
# Data in a particular format (json);
## data in a particular formate json;
## api
Call
http://api.weatherapi.com/v1/current.json?key=ff22503b185b49f89e842814262301&q=India&aqi=no

Response Code
200
Response Headers
{
  "Transfer-Encoding": "chunked",
  "Connection": "keep-alive",
  "Vary": "Accept-Encoding",
  "CDN-PullZone": "93447",
  "CDN-RequestCountryCode": "GB",
  "Age": "0",
  "x-weatherapi-qpm-left": "5000000",
  "x-varnish": "914763956",
  "CDN-ProxyVer": "1.43",
  "CDN-RequestPullSuccess": "True",
  "CDN-RequestPullCode": "200",
  "CDN-CachedAt": "01/23/2026 04:34:01",
  "CDN-EdgeStorageId": "1334",
  "CDN-RequestId": "7f1a4ae371afcf84b16ef4956d100cfb",
  "CDN-Cache": "HIT",
  "CDN-Status": "200",
  "CDN-RequestTime": "0",
  "Cache-Control": "public, max-age=180",
  "Content-Type": "application/json",
  "Date": "Fri, 23 Jan 2026 04:34:31 GMT",
  "Server": "BunnyCDN-DE1-1076",
  "Via": "1.1 varnish (Varnish/7.1)"
}
Response Body
{
    "location": {
        "name": "New Delhi",
        "region": "Delhi",
        "country": "India",
        "lat": 28.6,
        "lon": 77.2,
        "tz_id": "Asia/Kolkata",
        "localtime_epoch": 1769142835,
        "localtime": "2026-01-23 10:03"
    },
    "current": {
        "last_updated_epoch": 1769142600,
        "last_updated": "2026-01-23 10:00",
        "temp_c": 15.1,
        "temp_f": 59.2,
        "is_day": 1,
        "condition": {
            "text": "Moderate or heavy rain with thunder",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/389.png",
            "code": 1276
        },
        "wind_mph": 9.6,
        "wind_kph": 15.5,
        "wind_degree": 134,
        "wind_dir": "SE",
        "pressure_mb": 1016.0,
        "pressure_in": 30.0,
        "precip_mm": 0.26,
        "precip_in": 0.01,
        "humidity": 88,
        "cloud": 100,
        "feelslike_c": 15.1,
        "feelslike_f": 59.2,
        "windchill_c": 17.1,
        "windchill_f": 62.7,
        "heatindex_c": 17.1,
        "heatindex_f": 62.7,
        "dewpoint_c": 7.8,
        "dewpoint_f": 46.0,
        "vis_km": 1.0,
        "vis_miles": 0.0,
        "uv": 1.5,
        "gust_mph": 12.2,
        "gust_kph": 19.6,
        "short_rad": 114.12,
        "diff_rad": 58.37,
        "dni": 0.0,
        "gti": 56.2
    }
}

# Flow ->
# Dummy UI
with dummy data.
call api and get actual data.
Dom update