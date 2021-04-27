---
slug: developer-access-for-saas-products
title: An Easy Method to Provide Developer API Access for your SaaS Product Users
author: Aditya Bhawsingka
tags: [saas, api, authorizer]
---

For a SaaS product, we needed to allow users to have API access to our product’s services. This enabled users to build custom capabilities by accessing and leveraging our APIs via an authenticated, authorized, and controlled access mechanism.

[Here’s how we used AWS Cognito’s authorizer to enable users to have developer API access restricted to their user data using Client Id/Secret](https://www.ignitesol.com/aws-cognito-api-client-key/?ref=cogintowiki).