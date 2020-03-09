FROM alpine:3

RUN set -ex && apk --update --no-cache add \
    ca-certificates \
    curl \
    tar \
    git


RUN PREFIX="/usr/local" && \
    VERSION="0.7.1" && \
    curl -sSL \
    "https://github.com/bufbuild/buf/releases/download/v${VERSION}/buf-$(uname -s)-$(uname -m).tar.gz" | \
    tar -xvzf - -C "${PREFIX}" --strip-components 1

ENTRYPOINT [ "buf" ]
