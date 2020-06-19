# React Native

### Learn Once, Write Anywhere: Intro to React Native - Aaron Greenwald - https://www.youtube.com/watch?v=LIeqUPvh8qY
* React is a library for rendering views on web while react native is a framework that uses react to build actial native applications and gives you entire end-to-end ecosystem environment
* Existing hybrid mobile applications - phonegap, cordova, kendo, ionic.. are here are believed to be sub-standard.
* Difference between reactive native and other hybrid movile apps frameworks
    1. Webviews vs Native UIs
        * Webview ::: Browser running inside the shell of the native applications
        * Why Native UIs better than Webviews
            1. Users expect a level of user experience, a level of interaction with the application which far exceeds that can be delivered on the web
               * Animations
               * Touches natural feel - Bounce
               * does it offer the performace of say, 60fps that user expect
               * Don't always have access to native APIs
               * All these frameworks gives 80% achievable & 20% impossible -- which isn'y acceptable
            2. While React Native gives fully Native UI, a truly native application
                * When a user interact with the react native application, they interact with native application
    2. Write Once, Run Anywhere
        * This was initial dream set by Java, which didn't work
        * React native lowered their desire and came up with `Learn Once, Run Anywhere`.
        * The idea to write single app and run on all OSs is far fetched as of now, so we give up write once & run anywhere.
* Basic Concept
    * [2 threads](./react-native-under-the-hook.png)
        1. `UI Thread` - which runs natively
        2. `Javascript Core Thread`, which runs either
            * in IOS, it runs in webkit that ships with IOS
            * in Android, in JS engine, similar to say, v8, or node, or any other JS engine, that ships with the application
        3. All of code, all of JS code is run inside this JS engine, and everything that UI interacts with runs on UI Thread.
        4. They never block each other, unlike critically in webviews
        5. They never interact with each other directly. Here's the flow!
            * They interact over the bridge, which allows them to use `asynchronous, serializable, batched communication`.
            * This means, every single time the user interacts with UI, they scroll in ScrollView (Note: Scrolling is with Native Application).
            * Then, the native application takes these events that it has to fire, batches them up, serialize them to JSON, sends them across this bridge to the JS Thread.
            * The JS Thread catches them, and fires events, that you can handle on code.
            * You do whatever you need to do in JS, `not blocking the UI`, you decide what needs to happen
            * React also does its work, and decides it needs to update the view, again serializes all these batch of events, sends them asynchronously over the bridge
            * And the UI updates
        6. Build / run steps
            1. IDE -> you write your code
            2. package -> packager runs on port 8081 - it is kind of like webpack, but not webpack, cz facebook decided webpack wasn't fast enough -> it compiles every time you make a change, and serves it either minified or unminified version based on settings file. The creates bundle file.
                * It does not include the binary native code thats shipped with your application
                * When you deliver the application to user, you deliver binaries and a bundle file.
                * While development, this files is calculated live by the packager, and then send to the simulator
            3. Simulator -> which is running on computer usually
            4. chrome --> Debigging chrome - It swops out JS engine inside the simulator or your phone, and replaces it with chrome's JS engine. Which makes bundle file/all of JS code is actually running inside chrome.
                * It allows you to use chrome console, chrome debugger
                * And simulator reading across the bridge, which is a web socket. and the brige communicates across the *websocket to chrome and then back to the UI.
                * the simulator has an actual chrome tab associated to it. [8082 lets say], where we can use debugger, console logs (which with every change is happening), put breakpoints.
* Problems with building Native apps without React Native
    1. Writing Native mobile apps is expensive
    2. separate skillset
    3. ion/android -- dealing apple/google 
    4. alternate solutions are not truely native solutions
* React Native Advantage
    1. Smoother transition from the web
    2. Use the richest ecosystem there is
    3. Develop quickly
    4. Deploy like you're on web
        * As said, we ship bundle file along with application, what if it wasn't, or let's say its shipped the first time app is installed, and then every time the app is run, we go out to web we check is there a newer version available, and if there is, give it to me and then you run it. Now you're delivering `Over the Air` updates.
    5. Learn Once, Write Anywhere
    6. Reuse code
        * Facebook reuses 85% of its codebase
    * React Native's aim / dream ::: User experience of Native with Developer experience of web [[Best of both worlds]]
* But, what if it limits / Other Advantages
    1. It does not try to provide API, so it does not have to catchup to the changes happening on native by apple/google
    2. React Native is using native code, deploying it and access using Javascript [using callbacks/hooks]
    3. You can also write native code if required. [escape hatch]
* Disadvantages
    1. You can't always code push, cz sometimes you have to deploy binaries
    2. You have think about the native platform, UX natively
    3. Styling is not web styling, its not css, but like css, but not css
    4. Debugging not as rich
* Should I use it ?
    1. if multiple teams, tons of developers, web apps
    2. Way better than traditional hybrid movbile apps
