FROM node:18-alpine

# USER root

# RUN apk add --no-cache libc6-compat

# COPY . /app

# RUN apk add --no-cache libc6-compat

WORKDIR /build


COPY . .
RUN yarn global add pnpm && pnpm i --frozen-lockfile && pnpm build

WORKDIR /app

RUN cp -R ./../build/public ./public

RUN mkdir .next
# RUN chown nextjs:nodejs .next
RUN cp -a ./../build/.next/standalone/. ./
RUN cp -a ./../build/.next/static/. ./.next/static
RUN rm -rf ./../build

# ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs



ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# RUN ls -la

USER nextjs

# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 nextjs

# COPY  ./public ./public

# RUN mkdir .next
# RUN chown nextjs:nodejs .next

# COPY ./.next/standalone ./
# COPY ./.next/static ./.next/static


# RUN chmod a+rw /app -R

# RUN cp /etc/resolv.conf /etc/resolv.conf~
# RUN echo "nameserver 8.8.8.8" > /etc/resolv.conf
# RUN npm install -g yarn
# RUN pnpm i --frozen-lockfile;


# COPY ./node_modules /app/node_modules
# COPY . .

# RUN yarn install

# RUN yarn build

# RUN ls -la .next


# RUN \
#   addgroup -S nodejs; \
#   adduser -S -u 1001 nextjs
  
# USER 1001
  
# COPY .next/standalone app/.next/standalone
# COPY .next/static app/.next/static

# RUN ls -la

# USER nextjs

EXPOSE 8080
ENV PORT 8080

ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]