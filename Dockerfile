FROM node:12-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY . .

RUN mkdir -p logs &&\
    npm ci --only=production && \
    npm install -g pm2

EXPOSE 4000
CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]