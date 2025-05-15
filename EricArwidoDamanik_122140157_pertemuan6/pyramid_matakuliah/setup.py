import os

from setuptools import setup, find_packages

requires = [
    'pyramid',
    'pyramid_tm',
    'SQLAlchemy',
    'psycopg2-binary',
    'alembic',
    'zope.sqlalchemy',
]

setup(
    name='pyramid_matakuliah',
    packages=find_packages(),
    include_package_data=True,
    install_requires=requires,
)
