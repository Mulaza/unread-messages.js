
# Unread-Messages.js 

* [About](#about)
* [Install](#install)
* [Tutorial](#tutorial)
* [API](#api)

## About
Unread-Messages.js is a  lightweight libraty that lets a user add floating number notifications to any object.

## Install
```text
npm install *****
```

## Tutorial
Include the main css file a and javascript file.
To initiate the, library two things are required, first a class of `notification-container` needs to be added to a wraper element and the `val` data attribute needs to be defind inside of that element and you're done. If the data attribute is left empty it the displayed value will default to 0.
```html
  <div class="notification-container" data-val="">
      <div> Item of your chosing</div>
  </div>
```
To fit the values with a reasonable size any count above 999 is dispalyed in a short-hand form.  The displayed numbers shorthand follows the following convention
* Any count `1000` and over like  `1800` will be formated as `1.8k`


* Any count `1000000` and over like `1200,000` will be displayed as `1.2M`
## API
In addition to the `data-val` data atribute there are other attributes that can be used to further customize the counter tags.

### Position

```html
  <div class="notification-container" data-val="5" data-pos="top-left">
      <div> Item of your chosing</div>
  </div>
```

#### Addition positions 

* top
* top-right
* top-left
* bottom
* bottom-right
* bottom-left


### Color
You can also change the colors of the number tags by simply adding a `data-val` data attribute to your wrapper.
Any color css-supoorted color name works aswell as RGB values.
``` html
  <div class="notification-container" data-val="5" data-color="blue">
    <div> Item of your chosing</div>
  </div>
```
