---
slug: user-login-and-signup-in-aspnet-core-using-aws-sdk
title:  Implementing Cognito User Login and Signup in ASP.NET Core using AWS SDK
author: Ram
author_image_url: https://referbruv.com/data/admin/avatar.png
tags: [asp-net-core, aws-sdk]
---

While it is the most recommended approach for applications, some designs prefer having a layer of their API that would communicate with Cognito for authorization, as a matter of decoupling Cognito with the Client (so as to have flexibility or better control).

[In this article](https://referbruv.com/blog/posts/implementing-cognito-user-login-and-signup-in-aspnet-core-using-aws-sdk), let's look at how we can design and build such an API that encapsulates all of User Identity Management functionalities such as Login, Signup, Password Reset, Update profile and so on, while internally communicating with Cognito for respective flows.