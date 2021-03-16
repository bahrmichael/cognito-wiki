---
slug: social-login-with-flutter-and-cognito
title: Creating Flutter app with AWS serverless backend — Part 1 Social login
author: Ilya Bershadskyi
author_image_url: https://miro.medium.com/fit/c/96/96/1*lAVjqL5l0nWNdpb0vFCN7w.jpeg
tags: [flutter, social, amplify]
---

[I am going to use AWS Cognito to manage user login and authentication](https://medium.com/omisoft/creating-flutter-app-with-aws-serverless-backend-part-1-social-login-35143884d4c7). In this scenario, my app needs to communicate with Cognito directly to obtain an authentication token and after that, I will add this token to every request send to my backend.