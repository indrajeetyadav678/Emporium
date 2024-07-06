from django.urls import path,include
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', Cartview, basename='cart')
urlpatterns = router.urls

urlpatterns = [
    path('', include(router.urls)),
]