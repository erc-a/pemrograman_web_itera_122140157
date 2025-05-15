from sqlalchemy import (
    Column,
    Integer,
    Text,
)

from .meta import Base

class Matakuliah(Base):
    __tablename__ = 'matakuliah'
    id = Column(Integer, primary_key=True)
    kode_mk = Column(Text, unique=True, nullable=False)
    nama_mk = Column(Text, nullable=False) 
    sks = Column(Integer, nullable=False)
    semester = Column(Integer, nullable=False)