# nodejs
Running node.js application inside a docker

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
