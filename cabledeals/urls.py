from cms.sitemaps import CMSSitemap
from django.conf import settings
from django.conf.urls.i18n import i18n_patterns
from django.conf.urls.static import static
from django.contrib import admin
from django.contrib.sitemaps.views import sitemap
from django.urls import include, path
from django.views.generic import TemplateView

admin.autodiscover()

urlpatterns = [
    path("sitemap.xml", sitemap, {"sitemaps": {"cmspages": CMSSitemap}}),

    path('google5834d84e3809d356', TemplateView.as_view(template_name="google5834d84e3809d356.html"),
         name='googlef70808eaeac314a8')
]

urlpatterns += i18n_patterns(
    path("admin/", admin.site.urls),
    path("", include("cms.urls")),

    prefix_default_language=False)

# This is only needed when using runserver.
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
