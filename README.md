# Angular with Spring Boot

[Angular](https://angular.io) is an open-source JavaScript framework for creating [single-page applications](https://en.wikipedia.org/wiki/Single-page_application). Angular applications can be written in plain-old JavaScript. However, in order to harness the full power of the framework, it is useful to use [TypeScript](https://github.com/Microsoft/TypeScript), which is a superset of JavaScript. One of the design goals of Angular is to completely decouple the client-side code of a web application from the server-side code, allowing development work on the two codebases to progress in parallel. In order to fulfill this design goal, latest versions of Angular use [Node Package Manager (NPM)](https://www.npmjs.com), a JavaScript package manager and build system. Angular code written in TypeScript is compiled into standards-compliant JavaScript, using NPM, before being hosted on a web-server for clients to download. This process ensures that web browsers do not necessarily need to be TypeScript-compliant and can simply work with standard JavaScript code. A typical Angular project has the following folder and file structure:

```
<root>
   ├─── angular.json            // Configuration options for building the Angular application.
   ├─── package.json            // NPM build configuration.
   ├─── package-lock.json       // Version information for all NPM packages installed for the application.
   ├─── tsconfig.json           // TypeScript configuration file used by code editors and language servers, but not the compiler.
   ├─── tsconfig.base.json      // Base TypeScript configuration.
   ├─── src/
         ├─── favicon.ico       // An icon to use for the application in the browser bookmark bar.
         ├─── index.html        // The main HTML page for the application.
         ├─── main.ts           // The main entry point for the application.
         ├─── polyfills.ts      // Provides polyfill scripts for browser support.
         ├─── styles.sass       // Lists CSS files that supply styles for a project.
         ├─── test.ts           // The main entry point for unit tests for the Angular code.
         ├─── app/              // Folder for Angular code containing application logic. 
         ├─── assets/           // Folder for static files like images.
         ├─── environments/     // Folder for build configuration for particular target environments.
```

Java is a popular programming language for writing server-side code. [Spring Boot](https://spring.io/projects/spring-boot) is a Java stack built on top of the open-source Spring framework. Spring Boot makes it easy and straightforward to develop enterprise-grade Java applications with built-in security, performance, monitoring, external integrations, and many other features, through use of appropriate Spring framework components. Spring Boot applications can be built and packaged with Maven or Gradle, the standard packaging and build tools in the Java ecosystem. Both Maven and Gradle utilise a standard folder structure and a build definition file (`pom.xml` for Maven, and `build.gradle` for Gradle). A typical Spring Boot project has the following folder and file structure:

```
<root>
   ├─── build.gradle            // Gradle build configuration.
   ├─── pom.xml                 // Maven build configuration.
   ├─── src/
         ├─── main
         |      ├─── java       // Folder for Java code containing application logic.
         |      ├─── resources  // Folder for application configuration.
         |      ├─── webapp     // Folder for static files like images.
         ├─── test
                ├─── java       // Folder for unit and integration tests for Java code.
                ├─── resources  // Folder for test configuration.
```

Developers coming from a Java background are used to the standard structure of a Java project. When they start developing with Angular, they now need to contend with Maven/Gradle for their Java code, and NPM for the Angular code. A quick comparison of the standard Angular and Maven/Gradle folder structures shown above reveals that except for the top level `src/` folder, Angular and Spring Boot projects follow drastically different folder structures. Given these differences, Angular code cannot be readily bundled into a Spring Boot application, out-of-the-box.
