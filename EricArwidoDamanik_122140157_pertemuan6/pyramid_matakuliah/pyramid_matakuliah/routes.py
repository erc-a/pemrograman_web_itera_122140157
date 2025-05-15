def includeme(config):
    """Add routes for the application."""
    config.add_static_view('static', 'static', cache_max_age=3600)
    config.add_route('home', '/')
    config.add_route('matakuliah_list', '/api/matakuliah')
    config.add_route('matakuliah_detail', '/api/matakuliah/{id}')
    config.add_route('matakuliah_add', '/api/matakuliah/add')
    config.add_route('matakuliah_update', '/api/matakuliah/update/{id}')
    config.add_route('matakuliah_delete', '/api/matakuliah/delete/{id}')
