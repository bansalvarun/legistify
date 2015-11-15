from django.db.models import * 

# Create your models here.


class Category(Model):
	title = CharField(max_length=200)
	def __unicode__(self):
		return self.title

class Sub_category(Model):
	category = ForeignKey(Category)
	title = CharField(max_length=200, blank=True)
	def __unicode__(self):
		return self.title

class Document(Model):
	subCategory = ForeignKey(Sub_category)
	title = CharField(max_length=200)
	info = CharField(max_length=300)
	url = CharField(max_length=100, unique=True)
	thumbnail = CharField(max_length=300, blank=True)
	# to-do views, likes
	price = IntegerField()
	def __unicode__(self):
		return self.title



class Questionnaire(Model):
	document = ForeignKey(Document)
	title = CharField(max_length=100, blank=True)
	abstract = CharField(max_length=300, blank=True)


class Date_question(Model):
	questionnaire = ForeignKey(Questionnaire)
	questionNumber = IntegerField(blank=True)
	title = CharField(max_length=300)
	info = CharField(max_length=300)
	date = DateField(blank=True, null=True)
	def __unicode__(self):
		return self.title


class Checkbox_question(Model):
	questionnaire = ForeignKey(Questionnaire)
	questionNumber = IntegerField(blank=True)
	title = CharField(max_length=100)
	info = CharField(max_length=300)
	def __unicode__(self):
		return self.title

class Option(Model):
	checkboxQuestion = ForeignKey(Checkbox_question)
	title = CharField(max_length=100)
	selected = BooleanField(default=False)
	def __unicode__(self):
		return self.title
