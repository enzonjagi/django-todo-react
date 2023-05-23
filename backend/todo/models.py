from django.db import models

class TODO(models.Model):
    """The todo items model"""

    title = models.CharField(max_length=120)
    description = models.TextField()
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.title
