FROM alpine:latest

RUN echo "Imagen construida desde un pipeline DevOps" > /mensaje.txt

CMD ["cat", "/mensaje.txt"]
