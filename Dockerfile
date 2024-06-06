FROM node:lts
WORKDIR /Kate-docs
COPY Kate-docs/ ./
RUN npm install
RUN npm run build
ENV NODE_ENV production

EXPOSE 3000
CMD ["npm", "start"]
