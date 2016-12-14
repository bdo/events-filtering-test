import { shallow } from 'enzyme'

import Events from '../../../src/components/events'
import Event from '../../../src/components/event'

describe('events', () => {

  const EVENT = { id: 1, actor: 'bdo', type: 'CommitEvent' };

  it('renders no events', () => {
    const wrapper = shallow(<Events events={[]}/>);
    expect(wrapper).to.exist
  });

  it('renders 1 event', () => {
    const wrapper = shallow(<Events events={[EVENT]}/>);
    expect(wrapper).to.contain(<Event {...EVENT}/>);
  });

  it('renders multiple events', () => {
    const wrapper = shallow(<Events events={[EVENT, EVENT, EVENT]}/>);
    expect(wrapper).to.have.exactly(3).descendants(Event);
  });

});
