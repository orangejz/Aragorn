import { UploaderOptions } from 'aragorn-types';

export const options: UploaderOptions = [
  {
    label: 'SecretId',
    name: 'SecretId',
    value: '',
    valueType: 'input',
    required: true
  },
  {
    label: 'SecretKey',
    name: 'SecretKey',
    value: '',
    valueType: 'input',
    required: true
  },
  {
    label: '存储桶名称',
    name: 'Bucket',
    value: '',
    valueType: 'input',
    required: true
  },
  {
    label: '地域名称',
    name: 'Region',
    value: '',
    valueType: 'input',
    required: true
  },
  {
    label: '自定义域名',
    name: 'domain',
    value: '',
    valueType: 'input',
    validationRule: ['domain']
  },
  {
    label: '存放路径',
    name: 'path',
    value: '',
    valueType: 'input',
    validationRule: ['domainPath']
  }
];
