from django.db import models

class CEP(models.Model):
    cep = models.CharField(max_length=10)
    logradouro = models.CharField(max_length=255)
    bairro = models.CharField(max_length=255)
    cidade = models.CharField(max_length=255)
    estado = models.CharField(max_length=255)

    def __str__(self):
        return self.cep
