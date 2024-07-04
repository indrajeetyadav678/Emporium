# Generated by Django 5.0.6 on 2024-07-03 09:52

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('customer_id', models.CharField(max_length=20)),
                ('customer_first_name', models.CharField(max_length=30)),
                ('customer_last_name', models.CharField(max_length=30)),
                ('customer_number', models.IntegerField()),
            ],
        ),
    ]