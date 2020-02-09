FROM node:10-slim
ARG username=user

# Install necessary apt packages for puppeteer bundled chromium work
RUN apt-get update && apt-get install --no-install-recommends -y \
  ca-certificates \
  curl \
  fontconfig \
  fonts-liberation \
  gconf-service \
  git \
  libappindicator1 \
  libasound2 \
  libatk1.0-0 \
  libc6 \
  libcairo2 \
  libcups2 \
  libdbus-1-3 \
  libexpat1 \
  libfontconfig1 \
  libgcc1 \
  libgconf-2-4 \
  libgdk-pixbuf2.0-0 \
  libglib2.0-0 \
  libgtk-3-0 \
  libnspr4 \
  libnss3 \
  libpango-1.0-0 \
  libpangocairo-1.0-0 \
  libstdc++6 \
  lib\x11-6 \
  libx11-xcb1 \
  libxcb1 \
  libxcomposite1 \
  libxcursor1 \
  libxdamage1 \
  libxext6 \
  libxfixes3 \
  libxi6 \
  libxrandr2 \
  libxrender1 \
  libxss1 \
  libxtst6 \
  locales \
  lsb-release \
  unzip \
  wget \
  xdg-utils

RUN useradd -ms /bin/bash ${username}

USER ${username}

RUN mkdir /home/${username}/zen-automation
WORKDIR /home/${username}/zen-automation

# Install package.json first, to disassociate the changes to the test
# and dependencies (makes cache more efficient)
COPY --chown=${username} ./package.json /home/${username}/zen-automation
RUN npm install

# Copy over the rest
COPY --chown=${username} . /home/${username}/zen-automation

RUN chmod +x  runTests.sh