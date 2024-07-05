from django.urls import path,include
from .views import DeliveryTrackingview
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', DeliveryTrackingview, basename='tracking')
urlpatterns = router.urls

urlpatterns = [
    path('', include(router.urls)),
]