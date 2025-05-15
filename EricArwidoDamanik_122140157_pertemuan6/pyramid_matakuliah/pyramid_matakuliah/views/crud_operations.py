import datetime
from pyramid.view import view_config
from pyramid.httpexceptions import HTTPNotFound, HTTPBadRequest
from pyramid.response import Response
from ..models.matakuliah import Matakuliah
from ..models.meta import DBSession

@view_config(route_name='matakuliah_list', request_method='GET', renderer='json')
def get_matakuliah_list(request):
    try:
        matakuliah_list = request.dbsession.query(Matakuliah).all()
        return [{
            'id': m.id,
            'name': m.name,
            'description': m.description,
            'created_at': m.created_at.isoformat()
        } for m in matakuliah_list]
    except Exception as e:
        request.response.status = 400
        return {'status': 'error', 'message': str(e)}

@view_config(route_name='matakuliah_list', request_method='POST', renderer='json')
def create_matakuliah(request):
    try:
        json_data = request.json_body
        mk = Matakuliah(
            name=json_data['name'],
            description=json_data['description'],
            created_at=datetime.datetime.now()
        )
        request.dbsession.add(mk)
        request.dbsession.flush()
        
        return {
            'status': 'success',
            'message': 'Matakuliah created successfully',
            'data': {
                'id': mk.id,
                'name': mk.name,
                'description': mk.description,
                'created_at': mk.created_at.isoformat()
            }
        }
    except Exception as e:
        request.response.status = 400
        return {'status': 'error', 'message': str(e)}

@view_config(route_name='matakuliah_detail', renderer='json')
def matakuliah_detail(request):
    mid = int(request.matchdict['id'])
    m = request.dbsession.query(Matakuliah).get(mid)
    if not m:
        raise HTTPNotFound(json_body={'error': 'Matakuliah tidak ditemukan'})
    return {'matakuliah': m.to_dict()}

@view_config(route_name='matakuliah_add', request_method='POST', renderer='json')
def matakuliah_add(request):
    data = request.json_body
    for f in ['kode_mk', 'nama_mk', 'sks', 'semester']:
        if f not in data:
            raise HTTPBadRequest(json_body={'error': f'Field {f} wajib diisi'})
    mk = Matakuliah(
        kode_mk=data['kode_mk'], nama_mk=data['nama_mk'],
        sks=int(data['sks']), semester=int(data['semester'])
    )
    request.dbsession.add(mk)
    request.dbsession.flush()
    return {'success': True, 'matakuliah': mk.to_dict()}

@view_config(route_name='matakuliah_update', request_method='PUT', renderer='json')
def matakuliah_update(request):
    mid = int(request.matchdict['id'])
    m = request.dbsession.query(Matakuliah).get(mid)
    if not m:
        raise HTTPNotFound(json_body={'error': 'Matakuliah tidak ditemukan'})
    data = request.json_body
    if 'kode_mk' in data: m.kode_mk = data['kode_mk']
    if 'nama_mk' in data: m.nama_mk = data['nama_mk']
    if 'sks' in data: m.sks = int(data['sks'])
    if 'semester' in data: m.semester = int(data['semester'])
    return {'success': True, 'matakuliah': m.to_dict()}

@view_config(route_name='matakuliah_delete', request_method='DELETE', renderer='json')
def matakuliah_delete(request):
    mid = int(request.matchdict['id'])
    m = request.dbsession.query(Matakuliah).get(mid)
    if not m:
        raise HTTPNotFound(json_body={'error': 'Matakuliah tidak ditemukan'})
    request.dbsession.delete(m)
    return {'success': True, 'message': f'Matakuliah dengan id {mid} berhasil dihapus'}