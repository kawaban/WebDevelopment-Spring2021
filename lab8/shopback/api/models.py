from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=300)
    price = models.FloatField(default=0)
    description = models.TextField(max_length=400)
    count = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count
        }


class Category(models.Model):
    name = models.CharField(max_length=300)

    def to_json(self):
        return {
            'name': self.name
        }
