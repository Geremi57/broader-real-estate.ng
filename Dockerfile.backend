FROM golang:1.25

LABEL org.opencontainers.image.title="Property server" \
      org.opencontainers.image.description="A Go-based rest api with property data" \
      org.opencontainers.image.version="1.0.0" \
      org.opencontainers.image.authors="Geremi Wanga"\
      org.opencontainers.image.licenses="MIT"

WORKDIR /app

COPY . .

RUN go build -o broader-estates

EXPOSE 8080

CMD ["./broader-estates"]

