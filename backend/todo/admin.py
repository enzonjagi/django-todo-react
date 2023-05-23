from django.contrib import admin
from .models import TODO

class TodoAdmin(admin.ModelAdmin):
    """The admin view of the ToDo model"""

    list_display = ('title', 'description', 'completed')

admin.site.register(TODO, TodoAdmin)
