from django.core.management.base import BaseCommand
from backend.models import Pokemon
import json
import random

# python manage.py seed
class Command(BaseCommand):
    help = "clears database and seeds it with fresh set of pokemon"    

    def handle(self, *args, **options):
        self.stdout.write('seeding pokemon...')
        self.run_seed()
        self.stdout.write('done.')

    def run_seed(self):    
        self.clear_data()
        self.create_pokemon()

    def clear_data(self):
        """Deletes all the table data"""    
        Pokemon.objects.all().delete()


    def create_pokemon(self):    
        self.stdout.write('searching for pokemon...')
        with open('all-pokemon.json') as f:
            data = json.load(f)        
        for item in data["results"]:            
            self.stdout.write('Found a pokemon: %s' % item["name"])
            if not item["evolution"]: # Don't include entries with evolution to avoid duplicates for now
                pokemon = Pokemon(
                    name=item["name"],
                    number=item["national_number"],
                    image=item["sprites"]["normal"])
                pokemon.save()
                self.stdout.write('Saved %d:%s' % (pokemon.id, pokemon.name))

        