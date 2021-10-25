#!/usr/bin/python
""" holds class User"""
# import models
from models.base_model import BaseModel, Base
from os import getenv
# from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import sqlalchemy
from sqlalchemy import Column, String, Integer, ForeignKey
from sqlalchemy.orm import relationship
from models.type_document import Type_Document

class User(BaseModel, Base):
    __tablename__ = "Users"
    # id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100), nullable=False)
    lastname = Column(String(255), nullable=False)
    email = Column(String(100), nullable=False)
    nro_document = Column(String(25), nullable=False)
    password = Column(String(255), nullable=True)
    phone = Column(String(20), nullable=False)
#    active = Column(Integer, nullable=False)
#    deleted_at = Column(DateTime, default=datetime.utcnow, nullable=False)
#    created_by = Column(DateTime, default=datetime.utcnow, nullable=False)
#    updated_by = Column(Integer, nullable=True)
#    deleted_by = Column(Integer, nullable=True)
    id_type_document = Column(Integer, ForeignKey('Type_Document.id'))

# modelo
"""
* `id`      int NOT NULL AUTO_INCREMENT ,
 `id_type_doc`  int NOT NULL ,
 `name`         varchar(100) NOT NULL ,
 `lastname`     varchar(255) NOT NULL ,-
 `email`        varchar(100) NOT NULL ,
 `nro_document` varchar(25) NOT NULL ,----
 `password`     varchar(255) NOT NULL ,
 `phone`        varchar(20) NOT NULL ,
 `active`       tinyint(1) NOT NULL ,
* `created_at`   datetime NOT NULL ,
* `updated_at`   datetime NULL ,
 `deleted_at`   datetime NULL ,
 `created_by`   int NOT NULL ,------
 `updated_by`   int NULL ,
 `deleted_by`   int NULL ,

"""
