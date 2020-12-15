# Use the official image as a parent image.
FROM node:current-slim as BUILD
# Set the working directory, if the directory is not exist, create new directory.
WORKDIR /opt
# Copy the file from your host to your current location.
COPY package.json ./
# Run the command inside your image filesystem.
RUN npm --registry https://registry.npm.taobao.org install
# copy the rest files from your host to your current location.
COPY . ./  
# Add metadata to the image to describe which port the container is listening on at runtime.
EXPOSE 8080
# Run the specified command within the container.
CMD [ "npm", "start" ]

# run build
RUN npm run build

FROM nginx as BUILD2

COPY --from=BUILD /opt/dist /usr/share/nginx/html/

#docker build -t  firstdocker .