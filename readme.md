
# Unread-Messages.js 

* [About](#about)
* [Install](#install)
* [Tutorial](#tutorial)
* [API](#api)

## About
Unread-Messages.js is a  lightweight libraty that lets a user add floating number notifications to any object.

## Install
```text
npm install ****
```

## Tutorial
Include the main css file a and javascript file.
To initiate the, library two things are required, first a class of `notification-container` and the `val` data attribute.
```html
  <div class="notification-container" data-val="5"></div>
```


## API
In addition to the regual `val` data atribute there are other ones that can be used to customize the notification further.

### Position

```html
  <div class="notification-container" data-val="5" data-pos="top-left"></div>
```

#### Addition positions 

* top
* top-right
* top-left
* bottom
* bottom-right
* bottom-left


### Color
``` html
  <div class="notification-container" data-val="5" data-color="green"></div>
```
Any color css-supoorted color name works aswell as RGB values.