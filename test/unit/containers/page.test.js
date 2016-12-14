import { shallow } from 'enzyme'

import { Page } from '../../../src/containers/page'
import Filters from '../../../src/containers/filters'
import Events from '../../../src/components/events'

describe('Page', () => {

  it('renders', () => {
    const wrapper = shallow(<Page />);
    expect(wrapper).to.exist;
  });

  it('renders a title', () => {
    const wrapper = shallow(<Page />);
    const title = wrapper.find('h1');
    expect(title.text()).to.eq('Events filtering demo')
  });

  it('renders filters', () => {
    const wrapper = shallow(<Page />);
    expect(wrapper.find(Filters)).to.exist;
  });

  it('renders events', () => {
    const wrapper = shallow(<Page />);
    expect(wrapper.find(Events)).to.exist;
  });

});
