---
slug: add-aws-cognito-auth-to-your-angular-app-without-amplify
title: Add AWS Cognito Auth to Your Angular App Without Amplify
author: Pavindu Lakshan
author_image_url: https://miro.medium.com/fit/c/96/96/1*clmxVF6GP9B_oZeiETdJMg.jpeg
tags: [angular]
---

AWS Cognito is an identity management service that helps developers implement authentication in their apps in lesser time. With Cognito, developers don’t have to spend much time and effort to build authentication flows from scratch and worry about scalability, security, etc.

The common approach to integrate Cognito into a single-page app is to use Amplify library. However, using the entire Amplify library may be overkill if we only want to use it for implementing Cognito authentication features in our app.

[In this article](https://javascript.plainenglish.io/add-aws-cognito-auth-to-your-angular-app-without-amplify-64dfe656c65a), we are going to add Cognito auth to an Angular app with a minimum number of dependencies. Even though this article specifically focuses on the Angular framework, you will be able to tweak the code in this article a bit and use it in any single page application.