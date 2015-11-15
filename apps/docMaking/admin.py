from django.contrib import admin 
from nested_inline.admin import NestedStackedInline, NestedModelAdmin, NestedTabularInline
from .models import *

# Register your models here.

# admin.site.register(Category)
# admin.site.register(SubCategory)
# admin.site.register(Document)


class DocumentInLine(NestedStackedInline):
	model = Document
	extra = 0
	fk_name = 'subCategory'	

class Sub_categoryInLine(NestedStackedInline):
	model = Sub_category
	extra = 1
	fk_name = 'category'
	inlines = [DocumentInLine]

class CategoryAdmin(NestedModelAdmin):
	inlines = [Sub_categoryInLine]


admin.site.register(Category, CategoryAdmin)

class Date_questionInLine(NestedStackedInline):
	model = Date_question
	extra = 0
	fk_name = 'questionnaire'

class OptionInLine(NestedStackedInline):
	model = Option
	extra = 0
	fk_name = 'checkboxQuestion'

class Checkbox_questionInLine(NestedStackedInline):
	model = Checkbox_question
	extra = 1
	fk_name = 'questionnaire'
	inlines = [OptionInLine]

class QuestionnaireAdmin(NestedModelAdmin):
	list_display = ('document','title',)
	list_filter = ['document',]
	inlines = [Date_questionInLine, Checkbox_questionInLine]

admin.site.register(Questionnaire, QuestionnaireAdmin)