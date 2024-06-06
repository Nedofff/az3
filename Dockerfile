FROM node:lts as dependencies
WORKDIR /Kate-docs
COPY package.json ./
RUN npm install

FROM node:lts as builder
WORKDIR /Kate-docs
COPY . .
COPY --from=dependencies /Kate-docs/node_modules ./node_modules
COPY --from=dependencies /Kate-docs/package.json ./package.json
COPY --from=dependencies /Kate-docs/package-lock.json ./package-lock.json
COPY --from=dependencies /Kate-docs/public ./public
RUN npm run build

FROM node:lts as runner
WORKDIR /Kate-docs
ENV NODE_ENV production

COPY --from=builder /Kate-docs/public ./public
COPY --from=dependencies /Kate-docs/package-lock.json ./package-lock.json
COPY --from=builder /Kate-docs/package.json ./package.json
COPY --from=builder /Kate-docs/.next ./.next
COPY --from=builder /Kate-docs/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "start"]
