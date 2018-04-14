---
title: Welcome to My New Blog
date: "2018-04-14"
path: "/my-new-blog/"
---

Last week I decided to finally transition my current WordPress blog over to GatsbyJS. Partly to see if it would live up to the current hype and partly because I wanted to generally just revamp the blog overall both content-wise and performance-wise.

<!-- end -->

In this post I want to briefly touch on the reasoning behind my move to Gatsby, how I was able to smoothly transition the blog to Gatsby from Wordpress, and finally my general thoughts and conclusions on the entire process.

If you wish to see the code for my blog, it can be found on my [GitHub](https://github.com/RyanFitzgerald/personal-blog).

## Reasoning

As mentioned, part of the reasoning behind making the move was related to me wanting to see if Gatsby would live up to all the praise as well as to just generally update my blog that hasn't been changed in some time. However, in addition to that, I made the move for reasons I can summarize by Learning, Security, and Performance.

### Learning

Learning was arguably one of my biggest reasons for making the move. I always enjoy experimenting with new frameworks and technologies in an effort to improve my overall workflow. That, paired with the fact that I'm a huge fan of React in general, made the decision to switch from WordPress to Gatsby an easy one. Also, I haven't had many opportunities to work with static site generators to date, so that was a nice bonus as well.

### Security

I've worked with WordPress for some time now, both in a professional setting as well as with personal freelance projects. Overall, I'm fairly pleased with it and it does what it does quite well, however there are a number of minor "pitfalls" in terms of security, at least in my opinion. First, given that WordPress is so popular and has such a large presence on the web, there always seems to be new exploits coming to light and you need to be aware of hacking attempts on your site. As a result, you need to be vigilant with keeping WordPress up to date, installing necessary security plugins, and disabling / configuring WordPress in such a way that you can fight off the bulk of that. Although this isn't overly difficult to do, it can be time consuming. Switching over a static site generator like Gatsby has taken a lot of that extra effort out as I don't need to worry about security to quite the same extent.

![Security](./security.jpg)

### Performance

One of the largest benefits I saw in making the switch is the performance boost. With WordPress, there's a number of things you can do to increase performance, such as caching the site, compressing images, and the like, but once again, similar to security, it's just additional effort that must be put into the project. What I love about Gatsby, and React in general, is just how performant it is out of the box. Since it is a SPA and full page reloads are rare, you really notice the speed difference right away. Moreover, Gatsby has many great plugins that also help with performance and they take next to no time to install and configure.

## Making The Move

Finally, after deciding to make the switch, I had to figure out how I would approach it. Luckily, the concept of components in React made this fairly easy. I looked at each portion of the blog and determined how I could break everything down into components. Some examples of components are: the header, the footer, button elements, share buttons, and more. 

Once I had all my components figured out, I was able to create a Gatsby site using their CLI and simply ```gatsby new personal-blog gatsby-starter-blog-no-styles```. This instantly created a Gatsby environment using the great community starter blog (with no styles), [gatsby-starter-blog-no-styles](https://github.com/noahg/gatsby-starter-blog-no-styles). After that, all I had to do was add any plugins and additional modules I wanted, like styled-components.

In terms of the content on my blog, I opted to completely restart as much of the content was old and jQuery-related. If I wanted to keep the couple of previous blog posts, it wouldn't have been much trouble to convert them to markdown and have them work right away.

Overall, making the move to Gatsby was very painless and not very time consuming at all.

### Pagination

One point of difficulty with the move initially was setting up pagination, as Gatsby doesn't ship with the ability to do this out of the box. In order to accomplish this, I took advantage of the ```gatsby-node.js``` file which is where you can implement Gatsby's Node APIs. With that file in mind, I also took advantage of the [gatsby-paginate](https://www.npmjs.com/package/gatsby-paginate) package. Using both of those, all I had to do was define a new template and structure my GraphQL query how I wanted and pagination was up and running.

## Conclusion

In conclusion, my entire experience of moving my blog from WordPress to GatsbyJS has been positive and I definitely see myself using it for projects in the future where it makes sense to do so. Not only is it well documented and easy to setup, but the community surrounding it is great and I only expect that to get better as it grows. If you're on the fence or have been thinking about making the switch, I highly recommend you try it out.

_TL;DR: Gatsby is pretty awesome, give it a try._