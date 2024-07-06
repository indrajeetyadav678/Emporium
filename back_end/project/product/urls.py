from django.urls import path,include
from .views import Productview
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', Productview, basename='product')
urlpatterns = router.urls

urlpatterns = [
    path('', include(router.urls)),
]