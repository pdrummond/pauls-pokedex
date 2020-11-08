from . import views
from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register("pokemon", views.PokemonViewSet, "pokemon")

urlpatterns = router.urls