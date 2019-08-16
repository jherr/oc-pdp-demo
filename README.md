Open Component Product Detail Page Demo
=======================================

Demonstrates the use of Open Components to e-Commerce create a product detail page that has both react and vanilla components working together.

# Walkthrough video

[![Walkthrough](http://img.youtube.com/vi/9CG0LeswOoM/0.jpg)](https://www.youtube.com/watch?v=9CG0LeswOoM "Micro Frontends using OpenComponents")

# Setup

Running the open component registry server.

```
cd build
yarn global add oc
oc dev . 3030
```

Running the host page

```
cd host
python -m SimpleHTTPServer 8000
```

Then go to http://localhost:8000/
