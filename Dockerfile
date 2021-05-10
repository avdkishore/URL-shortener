FROM node:12-alpine

ARG PORT=8000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy app source
COPY dist/ /usr/src/app/dist/
COPY node_modules /usr/src/app/node_modules
COPY package.json /usr/src/app/

RUN ls

EXPOSE ${PORT}
CMD [ "yarn", "start" ]
