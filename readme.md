
# Unread-Messages.js 

![unread](https://user-images.githubusercontent.com/60890281/115409128-0cab3000-a224-11eb-9f1e-68541403d213.png)


## About
Unread-Messages.js is a  lightweight library that lets a user add floating number notifications to any object.

## Install
### NPM
To install this package with NPM run the command below and link the needed javascript and css into your html file.
```text
npm i unreadmessages --save
```

### Direct Download
To use this package you need to link the needed javascript and css into your html file.
```html
  <link rel="stylesheet" href="/dist/css/style.css">
```

```html
  <script src="/dist/js/main.js"></script>
```

## Tutorial
Include the main css file a and javascript file.
To initiate the, library two things are required, first a class of `notification-container` needs to be added to a wrapper element and the `val` data attribute needs to be defined inside of that element and you're done. If the data attribute is left empty it the displayed value will default to 0.

```html
  <div class="notification-container" data-val="">
      <div> Item of your choosing</div>
  </div>
```

![1](https://user-images.githubusercontent.com/60890281/115802419-6b81cc80-a411-11eb-9af6-45180bf42e49.png)


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
![2](https://user-images.githubusercontent.com/60890281/115803552-b4d31b80-a413-11eb-8641-e5cf30763892.png)

#### Supported Positions 
* `top`
* `top-right`
* `top-left`
* `bottom`
* `bottom-right`
* `bottom-left`


### Color
You can also change the colors of the number tags by simply adding a `data-val` data attribute to your wrapper.
Any color css-supported color name works as well as RGB values. If this attribute is not defined the badge will default to `red`.

``` html
  <div class="notification-container" data-val="5" data-color="blue">
    <div> Item of your choosing</div>
  </div>
```
![3](https://user-images.githubusercontent.com/60890281/115803590-c87e8200-a413-11eb-8342-856ec781a9b2.png)
