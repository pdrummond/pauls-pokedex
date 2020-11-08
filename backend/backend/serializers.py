from rest_framework import serializers
from . import models


class PokemonSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'name',
            'number',
            'image',
            'created_at',
            'updated_at',
        )
        model = models.Pokemon