# Agora Web Frontend

## Student - Chirag Singhal
## Links  
- Project : https://gitlab.com/aossie/Agora-web-frontend
- Wiki page : [Wiki](../../wiki.md)

## Agora Frontend  

The goal of this project is to build a new frontend for Agora Web. This part of the project was to produce an angular 8 application as frontend for the Agora platform. The project was built from scratch and uses lazy laoding to load components and angular universal for SEO. 

### Use case modeling 

I have identified the following tasks in the project at the starting of the project.
1.  Interface for user signup and login with email base accounts - **Done**
2.  Interface for user login using social media account - **Done** 
3.  Interface for user to change password for email based accounts - **Done** 
4.  Interface for user to logout - **Done** 
5.  Interface for user to create and schedule Election.  - **Done** 
6.  Interface for user to edit Election.  - **Done** 
7.  Interface for user to delete the Election. - **Done** 
8.  Interface for election creator to invite the voters to vote for the Election. - **Done** 
9.  Interface for voters to vote the Election. - **Done** 
10. Interface for for election results - **Done** 
11. Interface for two factor authentication - **Done**

### Deep view into the technology. 

This project is created using [Angular 8](https://angular.io/). It makes use of various open source libraries available for angular 8. Some of which are listed below

* [Node.js](https://nodejs.org/en/) - Provides the package manager used in this project
* [Agular CLI](https://cli.angular.io/) - Command line tool required to work with application
* [Angular Universal](https://blog.angular-university.io/angular-universal/)
* [Angular 8](https://angular.io/) - The web framework used to build this project
* [Bootstrap](https://getbootstrap.com/) - HTML and CSS frontend framework
* [Angularx-social-login](https://github.com/abacritt/angularx-social-login) - Social login library for angular applications
* [Material icons](https://material.io/tools/icons/?style=baseline) - Material design icons for angular applications
* [ng-pick-datetime](https://www.npmjs.com/package/ng-pick-datetime) - DateTime picker library used to select date and time
* [sweetalert2](https://github.com/sweetalert2/sweetalert2) - Notification library used to give feedback to the user

We started working on the frontend at the beginning of the second phase of GSOC. We started by using old models and defining new models that are required to communicate with the backend. Then we added Angular Universal for SEO. From there we started working with user authentication, the first authentication type we started with was the email based account authentication system the we later finished with authentication using social providers such as Facebook. To obtain social accounts from the social providers we used [Angularx-social-login](https://github.com/abacritt/angularx-social-login). At this point users could signup and login into the system. After that we created interface for two factor authentication.

After that we started working on election services and specific models to support our design. 

After which we worked on user specific actions such as viewing profile information, updating profile, changing their password, two factor authentication and user logout. We created interfaces for the actions described above

After that we started working on dashboard which showed various statistics. We created interfaces to create, edit and delete elections. After that we created an interface to show the results of the election. After this we created interfaces for the election creator to invite voters.

After that we worked on adding security question to register form and interface for users to login if user doesn't have access to his email and has two factor authentication enabled without providing One Time Password by answering the security question which user answered while registering. Then finally we also created interfaces for these voters to vote for the elections they were invited. 

I would like to thank every AOSSIE member, especially my mentors, Abanda Ludovic, Bruno Woltzenlogel Paleo and Thuvarakan Tharmarajasingam for being so nice and helpful. I have learnt a lot in the past 3 months and it has been a great experience to be a part of this wonderful community.

### Merge Requests 
1. [ Merge request !1](https://gitlab.com/aossie/Agora-web-frontend/merge_requests/130) - Initial angular 8 setup: - status *Merged*
    * Initialized the project with Agular 8 web framework using [Agular CLI]

2. [Merge request !2](https://gitlab.com/aossie/Agora-web-frontend/merge_requests/131) - Setup Angular Universal for SEO - status *Merged*
    * Added [Angular Universal](https://blog.angular-university.io/angular-universal/) Angular Universal is a Pre-Rendering solution for Angular.

3. [Merge request !3](https://gitlab.com/aossie/Agora-web-frontend/merge_requests/132) - Login SignUp  - Status: *Merged*
    * Implemented user signup and signin using email base accounts
    * Implemented user signin using social providers.
    * Implemented extra layer of security with Two Factor Authentication

4. [Merge request !4](https://gitlab.com/aossie/Agora-web-frontend/merge_requests/133) - Create Election - Status: *Merged*
    * Implemented create private and public election 

5. [Merge request !5](https://gitlab.com/aossie/Agora-web-frontend/merge_requests/134) - Profile - Status: *Merged*
    * Implemented profile interface with ability to update profile information 
    * Implemented user to change password
    * Implemented enabling and disabling Two Factor Authentication

6. [Merge request !6](https://gitlab.com/aossie/Agora-web-frontend/merge_requests/135) - Dashboard - Status: *Merged*
    * Implemented user  dashboard containing user elections and some statistics
    * Implemented edit and election interfaces
    * Implemented interface for user to view election results
    * Implemented interface for election creator to invite voters

7. [Merge request !7](https://gitlab.com/aossie/Agora-web-frontend/merge_requests/136) - Security Question and Trust Device - Status: *Open*
    * Implemented security question in register form and Two Factor Authentication
    * Implementd trust my device in Two Factor Auhtentication

8. [Merge request !8](https://gitlab.com/aossie/Agora-web-frontend/merge_requests/137) - Voting - Status: *Open*
    * Implemented interface for voters to vote

9. [Merge request !9](https://gitlab.com/aossie/Agora-Web/merge_requests/138) - GSOC docs - Status: *Open*
    * Added gsoc readme file
