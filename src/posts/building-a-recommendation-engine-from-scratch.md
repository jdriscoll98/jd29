---
title: "Building a Recommendation Engine from Scratch"
excerpt: "Join us today as we learn how to build a recommendation engine from scratch. We will use open-source, self hosted infrastructure to achieve this in an affordable and effective way. This will be a general purpose recommendation engine that can be applied to many different forms of recommendation."
coverImage: "/assets/blog/introducing-ai-in-marketplaces/cover.webp"
date: "2024-04-07T12:00:00.000Z"
author:
  name: Jack Driscoll
  picture: "/assets/blog/authors/jack.jpeg"
ogImage:
  url: "/assets/blog/introducing-ai-in-marketplaces/cover.webp"
slug: "building-a-recommendation-engine-from-scratch"
published: false,
---

## The Problem

1. You have a ton of supply on your marketplace, but buyers aren't being shown the right products, leading to a decrease in demand.
2. Your marketing strategy is too general and you aren't delivering personalized product catalogs. 
3. Your demand is good, but struggle with one item carts and low AOV. 

If you relate to any of these problems, you may benefit from a recommendation engine!

## The Solution

Recommendation Engines have taken the martkeplace world by storm ever since Amazon revolutionized online shopping with their "You may also like..." cart upsell campaign. Amazon realized that there was a siginificant opportunity to upsell certain items at cart. Using machine learning to identify items that were commonly purchased together, Amazon created a global empire of personalized shopping that nearly every marketplace tries to replicate. 

Do you need first class machine learning engineers to reap the benefits of a recommendation engine? I say no. There is enough open source software out there for any full stack web dev to implement a recommendation engine that will drive results immediataely. 

Also, you may not even need a machine learning / AI solution! If your marketplace is niche enough, you can collect enough information while onboarding your user to deliver quality recomendations straight out of the gate. 

Let's start implementing a recommendation engine in the context of a niche marketplace, starting from simple onboarding to machine learning enabled recommendations.

## Implementation 1 - Onboarding 

Let's say you're building an online golf marketplace. Your product catalog might looks something like this:

<div class='move-to' id='non-recommendation-catalog' />

Since you're reading this, this list is probably sorted by new arrivals. Every user on the site, regardless of their demograpgics or preferences receives the exact same list when visitng the site. If you have 10K products, it would like finding a needle in a haystack for any given user to find something that they like. (Unless they already know what they want, then you should focus on optimizing search. Recommendations are effective for non-search discovery)

Let's improve this. Let's say during your onboarding, you ask a few questions!

1. Are you interested in Men's or Womens's gear? 
2. What size shoes, pants, and shirts do you wear?
3. Do you have any favorite golf brands? Which ones?

Now, when showing a user a catalog of products, you can "boost" all of the products that fit their onboarding quesitons and show those first. Let's say a user answered "Male", "11", "34", "M" and "Titleist, Callaway, Srixon" for their onboaridng questions. Now you can show this feed by default: 

<div id='reccomendation-catalog' />

One the biggest stengths of a niche marketplace is that you already know so much about your users, you start way ahead of all general e-commerce stores. 