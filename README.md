# What is this?
Running node.js application inside a docker

Dockerfile: It is a file to instruct docker how to build an image with node.js
app/app.js: It is a very simple node.js application which is running at port 8888
app/hello.js: It is a very simple javascript code of 'Hello world' program

# How to build 
$ docker build -t mynode .

# How to run
$ docker run -it --rm --name myapp -v /home/your_name/node/app:/usr/src/app -p 8888:8888 -w /usr/src/app mynode

# Inside docker
root@c1e0c9ab3def:/usr/src/app# supervisor app.js

# Access this node application in host machine
In browser: http://localhost:8888
You will see:

Node.js

This is fantastic!

Hello world
