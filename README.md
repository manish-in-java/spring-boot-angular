# Angular with Spring Boot

[Angular](https://angular.io) is an open-source JavaScript framework for
creating [single-page applications](https://en.wikipedia.org/wiki/Single-page_application).
Angular applications can be written in plain-old JavaScript. However, to harness
the full power of the framework, it is useful to use
[TypeScript](https://github.com/Microsoft/TypeScript), a superset of JavaScript.
One of the design goals of Angular is to completely decouple the client-side
code of a web application from the server-side code, allowing development work
on the two codebases to progress in parallel. In order to fulfill this design
goal, the latest versions of Angular use
[Node Package Manager (NPM)](https://www.npmjs.com), a JavaScript package
manager and build system. Angular code written in TypeScript is compiled into
standards-compliant JavaScript, using NPM, before being hosted on a web-server
for clients to download. This process ensures that web browsers do not
necessarily need to be TypeScript-compliant and can simply work with standard
JavaScript code. A typical Angular project has the following folder and file
structure:

```
<root>
   ├─── angular.json            // Configuration options for building the Angular application.
   ├─── package.json            // NPM build configuration.
   ├─── package-lock.json       // Version information for all NPM packages installed for the application.
   ├─── tsconfig.json           // TypeScript configuration file used by code editors and language servers, but not the compiler.
   ├─── tsconfig.base.json      // Base TypeScript configuration.
   ├─── src/
         ├─── favicon.ico       // The icon to use for the application in the browser bookmark bar.
         ├─── index.html        // The main (and usually the only) HTML page for the application.
         ├─── main.ts           // The main entry point for the application.
         ├─── polyfills.ts      // Provides polyfill scripts for browser support.
         ├─── styles.sass       // Lists CSS files that supply styles for the application.
         ├─── test.ts           // The main entry point for unit tests for the Angular code.
         ├─── app/              // Folder for Angular code containing application logic. 
         ├─── assets/           // Folder for static files like images.
         ├─── environments/     // Folder for build configuration for particular target environments.
```

Java is a popular programming language for writing server-side code.
[Spring Boot](https://spring.io/projects/spring-boot) is a Java stack built on
top of the open-source Spring framework. Spring Boot makes it easy and
straightforward to develop enterprise-grade Java applications with built-in
security, performance, monitoring, external integrations, and many other
features, through use of appropriate Spring framework components. Spring Boot
applications can be built and packaged with Maven or Gradle, standard
packaging and build tools in the Java ecosystem. Both Maven and Gradle utilise
a standard folder structure, and a build definition file (`pom.xml` for Maven,
and `build.gradle` for Gradle). A typical Spring Boot project has the following
folder and file structure:

```
<root>
   ├─── build.gradle              // Gradle build configuration.
   ├─── pom.xml                   // Maven build configuration.
   ├─── src/
         ├─── main/
                ├─── java/        // Folder for Java code containing application logic.
                ├─── resources/   // Folder for application configuration.
                ├─── webapp/      // Folder for static files like images.
         ├─── test/
                ├─── java/        // Folder for unit and integration tests for Java code.
                ├─── resources/   // Folder for test configuration.
```

Developers coming from a Java background are used to the standard structure of
a Java project. When they start developing with Angular, they now need to
contend with Maven/Gradle for their Java code, and NPM for the Angular code.
A quick comparison of the standard Angular and Maven/Gradle folder structures
shown above reveals that except for the top-level `src/` folder, Angular and
Spring Boot projects follow drastically different folder structures. Given
these differences, Angular code cannot be readily bundled into a Spring Boot
application, out-of-the-box.

However, it **is possible** to bundle Angular code with a Spring Boot application.
The bundling process involves the excellent
[Maven Frontend Plugin](https://github.com/eirslett/frontend-maven-plugin).

## 1. Add Maven Frontend plugin

The Frontend plugin is added to the Maven build as any other Maven plugin.
The relevant portion of the Maven `pom.xml` file is shown below.

```
  <build>
    <plugins>
      <plugin>
        <groupId>com.github.eirslett</groupId>
        <artifactId>frontend-maven-plugin</artifactId>
      </plugin>
    </plugin/>
  </build>
```

## 2. Install Node and NPM

With the Frontend plugin added to the Maven build, it is no longer necessary
to install Node and NPM separately. These can be downloaded automatically as
part of the Maven build process and requires adding a single execution to the
Frontend plugin, as shown below.

```
  <build>
    <plugins>
      <plugin>
        <groupId>com.github.eirslett</groupId>
        <artifactId>frontend-maven-plugin</artifactId>
        <executions>
          <execution>
            <id>install node and npm</id>
            <goals>
              <goal>install-node-and-npm</goal>
            </goals>
            <configuration>
              <nodeVersion>v14.8.0</nodeVersion>
              <npmVersion>6.14.7</npmVersion>
            </configuration>
          </execution>
      </plugin>
    </plugin/>
  </build>
```

With this done, running `mvn generate-resources` from the root project folder
will download Node and install it in `node` sub-folder alongside `pom.xml`,
as well as necessary Node modules in `node_modules` sub-folder. In the example
above, we have downloaded Node version *14.8.0* and NPM version *6.14.7*. Any
Node and (compatible) NPM version can be downloaded and installed this way. The
installation takes a little while on the first run, given that the Node and NPM
binaries are downloaded and installed. Thereafter, those binaries are available
in the local Maven repository, just like any other Maven dependency, speeding
up the build process.

At this point, it is important to add a `.gitignore` file to the project and
adding the following two lines to it so that Node and NPM binaries do not get
checked into Git.

```
node
node_modules
```

## 3. Add Angular code

All Angular code goes under the folder `src/main/angular`, alongside
`src/main/java` and `src/main/resources`. The Angular build is configuration
is modified to look for the Angular code under `src/main/angular`, instead of
simply `src/`. The Angular build is also modified to put the compiled code
under `src/main/webapp`, where the Maven build picks it automatically, for
bundling with the Spring Boot application.

The complete file and folder structure for the project now looks as follows:

```
<root>
   ├─── angular.json                          // Configuration options for building the Angular application.
   ├─── package.json                          // NPM build configuration.
   ├─── package-lock.json                     // Version information for all NPM packages installed for the application.
   ├─── pom.xml                               // Maven build configuration.
   ├─── tsconfig.json                         // TypeScript configuration file used by code editors and language servers, but not the compiler.
   ├─── tsconfig.base.json                    // Base TypeScript configuration.
   ├─── src/
         ├─── main/
                ├─── angular/
                        ├─── favicon.ico      // The icon to use for the application in the browser bookmark bar.
                        ├─── index.html       // The main (and usually the only) HTML page for the application.
                        ├─── main.ts          // The main entry point for the application.
                        ├─── polyfills.ts     // Provides polyfill scripts for browser support.
                        ├─── styles.sass      // Lists CSS files that supply styles for the application.
                        ├─── test.ts          // The main entry point for unit tests for the Angular code.
                        ├─── app/             // Folder for Angular code containing application logic. 
                        ├─── assets/          // Folder for static files like images.
                        ├─── environments/    // Folder for build configuration for particular target environments.
                ├─── java/                    // Folder for Java code containing application logic.
                ├─── resources/               // Folder for application configuration.
         ├─── test/
                ├─── java/                    // Folder for unit and integration tests for Java code.
                ├─── resources/               // Folder for test configuration.
```

## 4. Develop Angular code

Angular development server can be started from the project's root folder by
executing the helper script `./ng serve`. This starts a Node server on port
*4200*.

## 5. Package the application

To package the application, simply running `mvn package` is sufficient. This
command performs the following tasks:

1. Downloads and installs Node and NPM in the project's root folder.
1. Downloads and installs Node and Angular dependencies.
1. Compiles Angular code from `src/main/angular` and puts the compiled code in
`src/main/webapp`
1. Builds the Spring Boot application, picking up web resources from
`src/main/webapp`.

The built Maven artifact (WAR or JAR file) can be deployed as a normal Spring
Boot application.