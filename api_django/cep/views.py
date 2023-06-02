import requests
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import CEP

@api_view(['GET'])
def get_cep(request, cep):
    api_url = f'https://brasilapi.com.br/api/cep/v1/{cep}'
    response = requests.get(api_url)

    if response.status_code == 200:
        data = response.json()
        cep_obj, _ = CEP.objects.get_or_create(
            cep=data['cep'],
            defaults={
                'logradouro': data['street'],
                'bairro': data['neighborhood'],
                'cidade': data['city'],
                'estado': data['state']
            }
        )
        return Response({
            'cep': cep_obj.cep,
            'logradouro': cep_obj.logradouro,
            'bairro': cep_obj.bairro,
            'cidade': cep_obj.cidade,
            'estado': cep_obj.estado
        })
    else:
        return Response({'error': 'CEP not found'}, status=response.status_code)