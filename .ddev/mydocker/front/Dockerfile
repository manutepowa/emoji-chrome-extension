
# You can copy this Dockerfile.example.example to Dockerfile.example to add configuration
FROM node:lts-alpine

RUN apk update && apk upgrade && \
    apk add --no-cache git curl python2 build-base udev ttf-freefont chromium

RUN yarn global add @vue/cli npm-check-updates node-sass node-gyp react-chrome-extension-cli typescript

RUN ln -sf python2 /usr/bin/python
RUN python2 -m ensurepip

WORKDIR /home/node/app
#
## Or just use EXPORT 8080
USER node
ENV HOST 0.0.0.0
EXPOSE 3002
## If yout want use vue-cli UI you need to also EXPORT 8000
#
## set app serving to permissive / assigned
#ENV NUXT_HOST=0.0.0.0
## set app port
#ENV NUXT_PORT=5000