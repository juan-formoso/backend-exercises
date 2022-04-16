FROM python:alpine3.6

COPY hello.py hello.py
COPY hello2.py hello2.py

ENTRYPOINT ["python"]
CMD ["hello.py"]

# ENTRYPOINT não tem como mudar enquanto o CMD tem! Na hora de subir a imagem como container o CMD é apenas uma dica do que se deve executar, enquanto o ENTRYPOINT é o que se deve executar.