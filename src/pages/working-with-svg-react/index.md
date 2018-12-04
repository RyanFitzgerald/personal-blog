---
title: Working with SVGs in React
date: '2018-10-21'
---

If you've worked on a web application, chances are you've used an SVG at some point. SVG stands for Scalable Vector Graphic and can serve any number of purposes, such as for an icon or logo. SVGs are pretty straight forward in normal markup, but how can we approach it in React? In this post I'll go over a couple different ways SVGs can be used with React and the pros and cons of each.

<!-- end -->

## SVG as image

One of the first ways you can use SVGs in React is similar to how you'd use them in regular markup. You can create an image tag with a source attribute and then simply pass the SVG as the image source. 

```js
import React from 'react';

import MyIcon from './MyIcon.svg';

const MyComponent = () => (
  <div>
    <img src={MyIcon}/>
  </div>
);

export const MyComponent;
```

The benefit of this approach is it cleans up what is rendered; rather than spitting out an entire SVG, it would just spit out the image tag. Also, this method allows for the SVG to be cached.

One of the downsides of this approach is that more requests are required (versus say an inline SVG) and you cannot easily change CSS properties such as fill or color. Also, since this method doesn't insert the SVG as part of the final output, you won't have the same degree of interactibility (click events, inserting text, etc).

## SVG as a component

Probably one of the most common methods of using SVGs with React is simply pasting the entire SVG into its own component and using that as needed.

```js
import React from 'react';

const MyIcon = () => (
  <svg height="100" width="100">
    <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="red" /> 
  </svg> 
);

export const MyIcon;
```

One thing to note with this approach is that just like with other tags, you'll need to convert certain attributes to work with JSX. For example, in the above code snippet `stroke-width` had to be changed to `strokeWidth`.

The benefit of this approach is you can alter the CSS properties of the SVG directly and keep it inline with how you're currently managing styles in your app, such as with `styled-components` or any other method. Another benefit is that you get the full interactibility of the SVG, such as click events, inserting text, and more. Finally, you end up with fewer HTTP requests than you would with the image approach above. 

On the other hand, this approach isn't without downsides. One downside is that every SVG needs to be converted to a React component and depending on the number of icons, this may take some time, especially if you need to also change a bunch of attributes to be JSX compatible. Also, this method doesn't allow for SVGs to be cached in the same way as the image source approach.

## Import SVGs as components

This last method I'll cover also happens to be my favourite. With the help of a webpack loader to turn SVGs into React components (such as [svg-react-loader](https://github.com/jhamlet/svg-react-loader)), you can easily import your SVG code directly from the SVG as a React component and thus not needing to create them all manually. There are a number of ways to get this setup, but by far the easiest way is to simply use `create-react-app` version 2.0+. Shipping with version 2.0 is a webpack loader that allows you to very easily import SVGs as React components. Using CRA 2.0+, this looks like:

```js{3}
import React from 'react';

import * as MyIcon from './MyIcon.svg';

const MyComponent = () => (
  <div>
    <img src={MyIcon}/>
  </div>
);

export const MyComponent;
```

An import point to note is how the important is done on line 3. In order to import the SVG as a React component you need to use the wildcard import but you can rename it to another name (`import * as MyIcon from './MyIcon.svg'`). Another alternative to the wildcard is importing `ReactComponent` as a named import, so you'd get something like `import {ReactComponent as MyIcon} from './MyIcon.svg'`. Both methods are equally correct, so it just comes down to preference.

The benefits of this method are that you get all the benefits of inline SVGs without the hassle of creating separate components for each SVG manually. With that said, the downside for this method is you need an additional dependency, however that is managed for you if you use `create-react-app` using the methods above.

## Conclusion

I hope these methods can provide some clarity in terms of how SVGs can be used in React and the reasons to choose one method over another. There are definitely other ways you can go about using SVGs, however these are among the most common and the ones you're likely to see the most.
