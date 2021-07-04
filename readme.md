
# Unread-Messages.js 

![unread](https://user-images.githubusercontent.com/60890281/115409128-0cab3000-a224-11eb-9f1e-68541403d213.png)


## About
...2MUnread-Messages.js is a lightweight library that lets a user add mobile-like notification counter badge to any object with just one wrapper.

## Install 

### NPM
![npm](https://img.shields.io/npm/v/unreadmessages?style=flat-square)

To install this package with NPM run the command below and link the needed javascript and css into your html file.
```text
npm i unreadmessages --save
```

### Direct Download
To use this package you need to link the needed javascript and css into your html file.
```html
  <link rel="stylesheet" href="/src/css/style.css">
```

Because the library looks over the the page content for specific classes, place the script tag at the bottom of your HTML file or add the `defer` keyword to the tag, so the script will load after the HTML content.
```html
  <script src="/src/js/main.js"></script>
```

## Tutorial
Include the main css file a and javascript file.
To initiate the, library two things are required, first a class of `notification-container` needs to be added to a wrapper element and the `val` data attribute needs to be defined inside of that element and you're done. If the data attribute is left empty it the displayed value will default to 0.

```html
  <div class="notification-container" data-val="">
      <div> Item of your choosing</div>
  </div>
```

<p align="center">

  <img width="410"  src="https://user-images.githubusercontent.com/60890281/115802419-6b81cc80-a411-11eb-9af6-45180bf42e49.png" alt="Material Bread logo">

</p>


To fit the values with a reasonable size any value above 999 is dispalyed in a short-hand form. The displayed numbers shorthand follows the following convention
* Any count `1000` and over like  `1800` will be formated as `1.8k`


* Any value `1000000` and over like `1200,000` will be displayed as `1.2M`
## API
In addition to the `data-val` data attribute there are other attributes that can be used to further customize the badge.

### Position
The position of the badge can be changed using the `data-pos` data attribute. If this attribute is not defined the badge position will default to `top-right`.
```html
  <div class="notification-container" data-val="5" data-pos="top-left">
      <div> Item of your choosing</div>
  </div>
```

<p align="center">

  <img width="410" src="https://user-images.githubusercontent.com/60890281/115803552-b4d31b80-a413-11eb-8641-e5cf30763892.png" alt="Material Bread logo">

</p>


#### Supported Positions 


| Position      | Tags          | 
| ------------- |:-------------|
| Top           | `top`         |
| Top Right     | `top-right`   |
| Top Left      | `top-left`    |
| Bottom        | `bottom`      |
| Bottom Right  | `bottom-right`|
| Bottom Left   | `bottom-left` |



### Hide After Click
You can decide how you want the badge to persist after mouse clicks by using the `data-select-hide` data attribute by default it is set to true but it can optionally explicitly set `data-select-hide="false"`. This data attribute can also be set to `false` or `False` if you want the badge to persist after mouse clicks.

```html
<div class="notification-container" data-val="5" data-select-hide="false">
      <div> Item of your choosing</div>
  </div>
```


### Color
You can also change the colors of the number tags by simply adding a `data-val` data attribute to your wrapper.
Any color css-supported color name works as well as RGB values. If this attribute is not defined the badge will default to `red`.

``` html
  <div class="notification-container" data-val="5" data-color="blue">
    <div> Item of your choosing</div>
  </div>
```
<p align="center">

  <img width="410" src="https://user-images.githubusercontent.com/60890281/115803590-c87e8200-a413-11eb-8342-856ec781a9b2.png" alt="Material Bread logo">

</p>



