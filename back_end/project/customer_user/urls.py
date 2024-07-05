from django.urls import path,include
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', Customerview, basename='customer_user')
urlpatterns = router.urls

urlpatterns = [
    path('', include(router.urls)),
]

# -----------------------------------