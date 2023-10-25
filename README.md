# geolocation-screenSize-timezone-tasks-22.5

## Summary

Tasks from lesson 22.5 to learn Geolocation-, Screen size-, Timezone- API

There are two tasks. They are stored in the subfolders `task-1` and `task-2`.

> **Note**  
> While tasks in this repository are stored in folders `task-1` and `task-2`, their numbers from module 22 is 3 and 4.

## Links

- [Task 1](task-1/index.html)
- [Task 2](task-2/index.html)

## Task descriptions

1. > Create a button that, when clicked, will display the following data on the screen:
   >
   > 1. User screen dimensions (width and height).
   > 2. User location coordinates. If the user refused to give access to the location or this function is not available in the browser, display the message "Информация о местоположении недоступна" instead of the coordinates.

2. > Create a button that, when clicked, will send a request to the [Timezone API](https://ipgeolocation.io/documentation/timezone-api.html). The request must send the user's location coordinates obtained using the Geolocation API. In response to the request, an object will be received from which the following information needs to be displayed:
   >
   > - time zone in which the user is located: **timezone** parameter;
   > - local date and time: **date_time_txt** parameter.
   >
   > The API request line looks like this:
   >
   > <https://api.ipgeolocation.io/timezone?apiKey=[redacted]]&lat=latitude&long=longitude>.
   >
   > Instead of `latitude` and `longitude` you need to substitute the real latitude and longitude.

You can see it live on [GitHub Pages website](https://ivan-developer-01.github.io/geolocation-screenSize-timezone-tasks-22.5/).
