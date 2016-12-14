import { shallow } from 'enzyme'

import Event from '../../../src/components/event'
import Actor from '../../../src/components/actor'

describe('event', () => {

  const ACTOR = {
    login: 'bdo',
    avatar_url: 'https://avatars3.githubusercontent.com/u/683020?s=60'
  };

  it('renders', () => {
    const wrapper = shallow(<Event />);
    expect(wrapper).to.exist
  });

  it('renders the date', () => {
    const wrapper = shallow(<Event created_at="2016-12-12T15:30:00Z"/>);
    const date = wrapper.find('.event__date');
    expect(date).to.have.text('12 Dec 16:30');
  });

  it('renders the actor', () => {
    const wrapper = shallow(<Event actor={ACTOR}/>);
    const actor = wrapper.find(Actor);
    expect(actor).to.have.prop('login', ACTOR.login);
    expect(actor).to.have.prop('avatar_url', ACTOR.avatar_url);
  });

});

