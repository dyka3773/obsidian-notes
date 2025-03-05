---
tags:
  - tech
aliases:
  - asynchronous loading
---
Lazy loading (also known as asynchronous loading) is a technique used in computer programming, especially web design and web development, to defer initialization of an object until it is needed.
It can contribute to efficiency in the program's operation if properly and appropriately used.
This makes it ideal in use cases where network content is accessed and initialization times are to be kept at a minimum, such as in the case of web pages.
For example, deferring loading of images on a web page until they are needed for viewing can make the initial display of the web page faster.
The opposite of lazy loading is eager loading.

Since 2020, major web browsers have enabled native handling of lazy loading by default.
This allows lazy loading to be incorporated into a webpage by adding [[HTML attributes]].

The `loading` attribute support two values, `lazy` and `eager`.
Setting the value to `lazy` will fetch the resource only when it is required (such as when an image scrolls into view when a user scrolls down), while setting it to `eager`, the default state, the resource will be immediately loaded.
```html
<!-- These resources will be loaded immediately -->
<img src="header_image.jpg">
<img src="header_image2.jpg" loading="eager">

<!-- While these resources will be lazy loaded -->
<img src="article_image.jpg" alt="..." loading="lazy"> 
<iframe src="video-player.html" title="..." loading="lazy"></iframe>
```

There are four common ways of implementing the lazy load [[Design Patterns|design pattern]]:
- [[Lazy Initialization]]
- [[Virtual Proxy]]
- [[Ghost]]
- [[Value Holder]]
