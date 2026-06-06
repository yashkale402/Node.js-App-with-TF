FROM node:18-alpine

WORKDIR /usr/src/app

# Install only production dependencies
COPY package.json .
RUN npm install --production

# Copy app sources
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
