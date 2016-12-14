import { shallow } from 'enzyme'

import { Filters } from '../../../src/containers/filters'

describe('Filters', () => {

  it('renders', () => {
    const wrapper = shallow(<Filters />);
    expect(wrapper).to.exist;
  });

  ['url', 'from', 'to'].forEach(name => {

    it(`renders the ${name} field`, () => {
      const wrapper = shallow(<Filters />);
      const field = wrapper.find('input').filterWhere(f => f.prop('name') == name);
      expect(field).to.exist;
    });

  });

});
