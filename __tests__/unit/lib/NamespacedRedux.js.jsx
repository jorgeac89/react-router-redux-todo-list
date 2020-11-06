import { createNamespacedActionTypes } from 'lib/NamespacedRedux';

describe('NamespacedRedux library', () => {
  describe('createNamespacedActionTypes', () => {
    const namespace = 'namespace';
    const prefix= '@';
    const sufix = "/";
    const actionTypes = {
      ACTION_TYPE_0: 'ACTION_TYPE_0',
      ACTION_TYPE_1: 'ACTION_TYPE_1',
      ACTION_TYPE_2: 'ACTION_TYPE_2',
      ACTION_TYPE_3: 'ACTION_TYPE_3',
      ACTION_TYPE_4: 'ACTION_TYPE_4',
    };

    it('generates the namespaced action types with the provided namespace', () => {
      expect(
        createNamespacedActionTypes(namespace)(actionTypes)
      ).toEqual({
        ACTION_TYPE_0: `${prefix}${namespace}${sufix}${actionTypes.ACTION_TYPE_0}`,
        ACTION_TYPE_1: `${prefix}${namespace}${sufix}${actionTypes.ACTION_TYPE_1}`,
        ACTION_TYPE_2: `${prefix}${namespace}${sufix}${actionTypes.ACTION_TYPE_2}`,
        ACTION_TYPE_3: `${prefix}${namespace}${sufix}${actionTypes.ACTION_TYPE_3}`,
        ACTION_TYPE_4: `${prefix}${namespace}${sufix}${actionTypes.ACTION_TYPE_4}`,
      });
    });
  });
});