# TG-Pre-Work

## When we hit https://www.techtonicgroup.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions.

The browser uses the DNS to identify the IP address associated with the text version of the domain name (ie. https://www.techtonicgroup.com) and sends an HTTP request to that server for a copy of that webpage’s entry point file (usually index.html). If caching is enabled and I’ve visited the website before, the browser could resolve the request immediately (304) and use the cached entry point file. The browser then reads the HTML and makes any other requests for public assets referenced in it, such as images, audio, fonts, and much more.

## From start to finish how does that data reach you to be rendered in the browser?

Data is sent across the internet from a client to a server and vice versa using TCP from one router to another, broken into tiny data packets which allow multiple users to have access to the website data at the same time. Routers link computers into networks, and Internet Service Providers use special routers that can communicate with other ISPs’ routers. Once the request for index.html arrives on the server (and assuming the server-side is using an MVC architecture), the server’s router will typically invoke a controller method (or several if there is middleware). That controller method will obtain the index.html document and send it back to the client as a successful (status code 200) response. The same will then occur for all of the subsequent asset requests (for images, audio, etc.). It’s important to note that there could also be middleware within the controller, which might check a user’s session for example. If this happens, the controller will likely need to fetch information from a database. It typically does so via a model (ie. a Session or a User model), which will utilize an ORM to communicate with the DB.

## What code is rendered in the browser?

The HTML in index.html is rendered synchronously to the browser. It will inject both CSS styles and JavaScript scripts if they are referenced in the document.

## What is the server-side code’s main function?

Server-side code fetches the requested data and provides it to the client.

## What is the client-side code’s main function?

Client-side code takes data from the server and renders it with associated functionality.  The UI and UX are both determined by client-side code.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

Let’s say we request https://www.techtonicgroup.com. Once the request resolves, the browser will have a single instance of index.html. The browser will then make single requests for the assets referenced in index.html (images, JS, etc.). Assuming all of the requests resolve, we will receive single instances of each file requested. If the index.html file tells the browser to make another request for a public asset we’ve already requested beforehand, it could either use the cached response (304) or allow the request to proceed to the server. When the server responds successfully with the duplicate asset, the browser will *replace* the previously downloaded file. You can view this happening in the `Sources` devtools tab in Chrome with very slow network speeds.


## How many instances of the server-side code are available at any given time?

That is up to the developer. Servers can be intentionally duplicated to handle a large volume of requests and/or to make data more distributed so users around the world can have faster access to it.

## What is runtime?

Runtime, or execution time, refers to the phase of a program’s lifecycle when the program is running. A runtime error occurs during program execution, whereas syntax errors and compilation errors occur before runtime.

## How many instances of the the databases connected to the server application are created?

Again, this is the developer's choice.  Reasons for duplicating DBs are the same as for duplicating other server-side code, meaning to handle a large volume of requests and / or to make data faster to access from distant places.  One additional reason to duplicate DBs is to back up the data they contain.