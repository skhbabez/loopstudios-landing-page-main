# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Solution URL: [https://github.com/skhbabez/loopstudios-landing-page-main](https://github.com/skhbabez/loopstudios-landing-page-main)
- Live Site URL: [https://skhbabez.github.io/loopstudios-landing-page-main/](hhttps://skhbabez.github.io/loopstudios-landing-page-main/)

## My process

### Built with

- Mobile-first workflow
- [Astro](https://astro.build/) - Web framework
- [Tailwind CSS](https://tailwindcss.com/) - For styles

### What I learned

I decided to try out Astro for this challenge. This framework was surprisingly easy to pick up and I am probably going to use this for future projects again sometimes. This was the first time I found some use for whitespace: pre outside of code. And it worked well in combination with Astro to boot.

```ts
interface Props {
  mobileImgUrl: string;
  desktopImgUrl: string;
  alt: string;
  title: string;
  href: string;
}

const { mobileImgUrl, desktopImgUrl, alt, title, href } = Astro.props;
```

```html
<!-- prettier-ignore -->
<span
    class="whitespace-pre z-20 hover absolute left-5 md:left-10 bottom-5 xl:bottom-8 uppercase text-5 text-white xl:text-4 group-hover:text-black transition delay-75 duration-300 ease-in-out"
  >{title}</span>
```

Furthermore, making this work on GitHub Pages came with its own challenges. For images loaded through CSS, the hero image in this case, there seems to be an issue with Tailwind and Astro on GitHub Pages. I had to do a workaround, using a custom class and using define:vars to make it work.

```ts
const heroMobile = await getImage({
  src: mobileBg,
  format: "webp",
});
const heroDesktop = await getImage({
  src: desktopBg,
  format: "webp",
});
const heroMobileUrl = `url(${heroMobile.src})`;
const heroDesktopUrl = `url(${heroDesktop.src})`;
```

```html
<style define:vars={{ heroMobileUrl, heroDesktopUrl }}>
  .hero-bg {
    background-image: var(--heroMobileUrl);
    @media (min-width: 768px) {
      background-color: rgba(0, 0, 0, 0.4);
      background-blend-mode: darken;
      background-image: var(--heroDesktopUrl);
    }
  }
```

### Continued development

I almost forgot about this project due to some others courses I took. I will probably give it another pass after some time, especially considering accessibility.
