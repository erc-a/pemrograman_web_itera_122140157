from pyramid.config import Configurator


def main(global_config, **settings):
    """This function returns a Pyramid WSGI application."""
    with Configurator(settings=settings) as config:
        config.include('pyramid_jinja2')
        config.include('.models')
        config.include('.routes')
        config.scan('.views')
    return config.make_wsgi_app()

def includeme(config):
    """Initialize views configuration."""
    config.scan('.default')
    config.scan('.matakuliah')