from django.core.management.base import BaseCommand, CommandParser
from django.apps import apps
import pandas as pd

class Command(BaseCommand):
    help = '''
    Import data from csv file to Django Models
    Usage:
    python manage.py import_lawyers --path <path_to_csv_file>
    '''

    def add_arguments(self, parser):
        parser.add_argument('--path', type=str, help='Path to csv file',default=r'C:\Users\a21ma\OneDrive\Desktop\Datahack\DataHack_2_Tensionflow\Vector Database\recproject\FINALFINALFINALdataset.csv')
        return super().add_arguments(parser)
    
    def handle(self, *args, **options):
        file_path = options['path']
        _model = apps.get_model("recommender", "Lawyer")
        df = pd.read_csv(file_path)
        df_records = df.to_dict('records')
        model_instances = [
            _model(
                Rating=record['Rating'],
                Jurisdiction=record['Jurisdiction'],
                Charges=record['Charges'],
                Days_of_disposal=record['Days_of_disposal'],
                City=record['City'],
                Years_of_Experience=record['Years_of_Experience'],
                Type_of_Lawyer=record['Type_of_Lawyer'],
                Languages=record['Languages'],
                Pro_bono=record['Pro_bono'],
                Lawyer_Name=record['Lawyer Names'],
                Lawfirms=record['Lawfirms'],
                Demography=record['Demography'],
                Gender=record['Gender'],
            )
            for record in df_records
        ]
        
        _model.objects.bulk_create(model_instances)
        print("Data imported successfully")