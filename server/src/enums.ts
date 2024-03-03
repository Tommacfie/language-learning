import { schemaComposer } from 'graphql-compose';

export enum WordClassEnum {
  rzeczowniki = 'RZECZOWNIKI',
  czasowniki = 'CZASOWNIKI',
  przymiotniki = 'PRZYMIOTNIKI',
  przyslowki = 'PRZYSŁÓWKI',
  zaimek = 'ZAIMEK',
  przyimki = 'PRZYIMKI',
  spojniki = 'SP\u00D3JNIKI',
  wykrzykniki = 'WYKRZYKNIKI',
}

export enum WordGenderEnum {
  meski = 'MESKI',
  zenski = 'ZENSKI',
  nijaki = 'NIJAKI',
  none = 'NONE',
}

export const EnumWordClass = schemaComposer.createEnumTC({
  name: 'EnumWordClass',
  values: {
    rzeczowniki: { value: 'RZECZOWNIKI' },
    czasowniki: { value: 'CZASOWNIKI' },
    przymiotniki: { value: 'PRZYMIOTNIKI' },
    przyslowki: { value: 'PRZYSŁ0WKI' },
    zaimek: { value: 'ZAIMEK' },
    przyimki: { value: 'PRZYIMKI' },
    spojniki: { value: 'SP\u00D3JNIKI' },
    wykrzykniki: { value: 'WYKRZYKNIKI' },
  },
});

export const EnumWordGender = schemaComposer.createEnumTC({
  name: 'EnumWordGender',
  values: {
    meski: { value: 'MESKI' },
    zenski: { value: 'ZENSKI' },
    nijaki: { value: 'NIJAKI' },
    none: { value: 'NONE' },
  },
});
