from pyramid.view import view_config
from pyramid.response import Response
from sqlalchemy.exc import DBAPIError
import json

from ..models import Matakuliah

@view_config(route_name='matakuliah_list', renderer='json', request_method='GET')
def matakuliah_list(request):
    try:
        matakuliah = request.dbsession.query(Matakuliah).all()
        return [{'id': mk.id, 'kode_mk': mk.kode_mk, 'nama_mk': mk.nama_mk, 
                'sks': mk.sks, 'semester': mk.semester} for mk in matakuliah]
    except DBAPIError:
        return Response(json.dumps({'error': 'Database error'}), 
                       content_type='application/json', status=500)

@view_config(route_name='matakuliah_create', renderer='json', request_method='POST')
def matakuliah_create(request):
    try:
        json_body = request.json_body
        matakuliah = models.Matakuliah(
            kode_mk=json_body['kode_mk'],
            nama_mk=json_body['nama_mk'],
            sks=json_body['sks'],
            semester=json_body['semester']
        )
        request.dbsession.add(matakuliah)
        return {'status': 'success', 'message': 'Matakuliah created'}
    except DBAPIError:
        return Response(json.dumps({'error': 'Database error'}), content_type='application/json', status=500)

@view_config(route_name='matakuliah_update', renderer='json', request_method='PUT')
def matakuliah_update(request):
    try:
        json_body = request.json_body
        matakuliah = request.dbsession.query(models.Matakuliah).filter_by(id=request.matchdict['id']).first()
        if matakuliah is None:
            return Response(json.dumps({'error': 'Matakuliah not found'}), content_type='application/json', status=404)
            
        matakuliah.kode_mk = json_body['kode_mk']
        matakuliah.nama_mk = json_body['nama_mk']
        matakuliah.sks = json_body['sks']
        matakuliah.semester = json_body['semester']
        
        return {'status': 'success', 'message': 'Matakuliah updated'}
    except DBAPIError:
        return Response(json.dumps({'error': 'Database error'}), content_type='application/json', status=500)

@view_config(route_name='matakuliah_delete', renderer='json', request_method='DELETE')
def matakuliah_delete(request):
    try:
        matakuliah = request.dbsession.query(models.Matakuliah).filter_by(id=request.matchdict['id']).first()
        if matakuliah is None:
            return Response(json.dumps({'error': 'Matakuliah not found'}), content_type='application/json', status=404)
            
        request.dbsession.delete(matakuliah)
        return {'status': 'success', 'message': 'Matakuliah deleted'}
    except DBAPIError:
        return Response(json.dumps({'error': 'Database error'}), content_type='application/json', status=500)