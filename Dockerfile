FROM node:lts as dependencies
WORKDIR /hackathon-jam
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /hackathon-jam
COPY . .
COPY --from=dependencies /hackathon-jam/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /hackathon-jam
ENV NODE_ENV production

COPY --from=builder /hackathon-jam/package.json ./package.json
COPY --from=builder /hackathon-jam/.next ./.next
COPY --from=builder /hackathon-jam/node_modules ./node_modules

EXPOSE 3000
CMD ["yarn", "start"]