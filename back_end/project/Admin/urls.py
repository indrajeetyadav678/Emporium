from django.urls import path,include
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'admin', Adminview, basename='user')
urlpatterns = router.urls

urlpatterns = [
    path('', include(router.urls)),
]
