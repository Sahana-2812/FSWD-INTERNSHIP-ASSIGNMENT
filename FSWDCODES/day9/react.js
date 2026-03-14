/*
how do website update dynamically?

traditional websites:
1.click link
2.slow user exp
3.hard to manage the UI

React : is a JS Library for building UI.
created by facebook,used in news feed,facebook


why react?

1.componnent based archi:UI divided into diff blocks
2.Virtual DOM -creates copy of memory ,compare old vs new memnory,updates only changed parts
3.Reusable code


SPA - single page application
a web app that loads 1 html page and dynamically update content without full reload

traditional vs SPA

traditional(multi page)-new html req,page reload,slower
SPA -load once,js handles routing,no full reload
example:youtube,gmail



1.The webpage loads once with HTML, CSS, and JavaScript.

2. JavaScript takes control of navigation.

3. User actions trigger internal routing instead of page reload.

4. Data is fetched from the server using API calls.

5. Only the required part of the UI updates dynamically



how to setup react appli
1.node.js installed
    node-v
    npm -v

2. create react app using Vite
    npm create vite@latest myapp
    react
    javascript

3. cd myapp

4.npm i

5.npm run dev

what is JSX?
JAVACRIPT XML
it allows html inside js

const ele=<h1>hello</h1>;

rules:
1.must return single parent element
example: return{
        <h1>hello</h1>
        <p>hi</p>
    }

    correct way:
     return{
        <div>
        <h1>hello</h1>
        <p>hi</p>
        </div>
    }

2.use className instead of class

<div className="box">hello</div>

3.use{}for js inside jsx
const name="sahana";
return <h1>helloo{name}</h1>

*/