# Generated by Django 5.0.6 on 2024-07-03 09:52

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Customer', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Reviews',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product_id', models.CharField(max_length=20)),
                ('feedback', models.CharField(max_length=500)),
                ('review_id', models.CharField(max_length=20)),
                ('customer_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, to='Customer.customer')),
            ],
        ),
    ]
