import { shallow } from 'enzyme'

import Actor from '../../../src/components/actor'

describe('actor', () => {

  const ACTOR = {
    login: 'bdo',
    avatar_url: 'https://avatars3.githubusercontent.com/u/6830200'
  };

  it('renders', () => {
    const wrapper = shallow(<Actor />);
    expect(wrapper).to.exist
  });

  it('renders the link', () => {
    const wrapper = shallow(<Actor login='bdo'/>);
    const link = wrapper.find('a');
    expect(link).to.have.prop('href', 'https://github.com/bdo');
  });

  it('renders the image', () => {
    const wrapper = shallow(<Actor avatar_url={ACTOR.avatar_url}/>);
    const image = wrapper.find('img');
    expect(image).to.have.prop('src', ACTOR.avatar_url + "?s=60");
  });

});


